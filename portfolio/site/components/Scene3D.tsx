"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import Typewriter from "./Typewriter";
type Key="api"|"llm"|"data"|"mcp";
export type SceneLabels={core:string;hint:string;api:string;llm:string;data:string;mcp:string;descriptions:Record<Key,string>};
const NODES:{key:Key;color:string;radius:number;phase:number;speed:number}[]=[
  {key:"api",color:"#d2b75c",radius:2.95,phase:0,speed:.19},
  {key:"llm",color:"#81cce1",radius:2.65,phase:1.65,speed:-.23},
  {key:"data",color:"#cfb4ff",radius:3.05,phase:3.2,speed:.16},
  {key:"mcp",color:"#9ed3ae",radius:2.55,phase:4.75,speed:-.18}
];
function Satellite({entry,labels,onPick,active}:{entry:typeof NODES[number];labels:SceneLabels;onPick:(key:Key)=>void;active:boolean}) {
  const ref=useRef<THREE.Group>(null!);
  useFrame(({clock})=>{
    const t=clock.elapsedTime*entry.speed+entry.phase;
    ref.current.position.set(Math.cos(t)*entry.radius,Math.sin(t*1.53)*.69,Math.sin(t)*entry.radius);
  });
  return <group ref={ref}>
    <mesh onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onPick(entry.key)}}>
      <icosahedronGeometry args={[active?.34:.26,1]}/>
      <meshPhysicalMaterial color={entry.color} roughness={.18} metalness={.65} emissive={entry.color} emissiveIntensity={active?.75:.2}/>
    </mesh>
    <Html center position={[0,-.65,0]} distanceFactor={11}>
      <button type="button" className={"orbit-label"+(active?" active":"")} onClick={()=>onPick(entry.key)}>{labels[entry.key]}</button>
    </Html>
  </group>;
}
function Core({label}:{label:string}) {
  const obj=useRef<THREE.Group>(null!);
  useFrame(({clock})=>{
    obj.current.rotation.y=clock.elapsedTime*.10;
    obj.current.position.y=Math.sin(clock.elapsedTime*.6)*.1;
  });
  return <group ref={obj}>
    <mesh>
      <icosahedronGeometry args={[1.13,5]}/>
      <meshPhysicalMaterial color="#244c72" roughness={.15} metalness={.7} clearcoat={1} emissive="#183f60" emissiveIntensity={.4}/>
    </mesh>
    <mesh>
      <sphereGeometry args={[1.17,36,36]}/>
      <meshBasicMaterial color="#e1c778" wireframe transparent opacity={.21}/>
    </mesh>
    <Html transform center position={[0,0,1.22]} distanceFactor={6}>
      <span className="core-label">{label}</span>
    </Html>
  </group>;
}
function Ring({rotation,scale,color}:{rotation:[number,number,number];scale:number;color:string}) {
  const ref=useRef<THREE.Mesh>(null!);
  useFrame(({clock})=>{ref.current.rotation.z=clock.elapsedTime*.06;});
  return <mesh ref={ref} rotation={rotation} scale={scale}>
    <torusGeometry args={[2.05,.012,8,128]}/>
    <meshBasicMaterial color={color} transparent opacity={.45}/>
  </mesh>;
}
// Intercepts the wheel only while the camera can still zoom. At either limit
// the event is not canceled, so native page scrolling works normally.
function WheelBoundary(){
  const {camera,gl}=useThree();
  useEffect(()=>{
    const el=gl.domElement.parentElement??gl.domElement;
    const min=5.55,max=10.6;
    const onWheel=(e:WheelEvent)=>{
      const distance=camera.position.length();
      const next=Math.max(min,Math.min(max,distance+e.deltaY*.005));
      if(Math.abs(next-distance)<.001)return;
      e.preventDefault();
      camera.position.multiplyScalar(next/distance);
      camera.updateProjectionMatrix();
    };
    el.addEventListener("wheel",onWheel,{capture:true,passive:false});
    return ()=>el.removeEventListener("wheel",onWheel,true);
  },[camera,gl]);
  return null;
}
function World({labels,selected,onPick}:{labels:SceneLabels;selected:Key|null;onPick:(k:Key)=>void}){
  return <>
    <ambientLight intensity={1.1}/>
    <hemisphereLight args={["#e4f5ff","#101c32",1.35]}/>
    <pointLight position={[3,4,5]} intensity={33} color="#e9c87e"/>
    <pointLight position={[-4,-3,3]} intensity={24} color="#66c2e9"/>
    <Stars radius={60} depth={40} count={850} factor={2.8} fade speed={.22}/>
    <Core label={labels.core}/>
    <Ring rotation={[1,.2,.3]} scale={1.2} color="#e4bc66"/>
    <Ring rotation={[-.5,1,.1]} scale={1.03} color="#77d6ed"/>
    <Ring rotation={[.3,.7,-.5]} scale={.91} color="#d2b7ed"/>
    {NODES.map(entry=><Satellite key={entry.key} entry={entry} labels={labels} active={selected===entry.key} onPick={onPick}/>)}
    <OrbitControls makeDefault enableZoom={false} enablePan={false} enableDamping autoRotate autoRotateSpeed={.42} minPolarAngle={.35} maxPolarAngle={Math.PI-.35}/>
    <WheelBoundary/>
  </>;
}
export default function Scene3D({labels}:{labels:SceneLabels}){
  const [selected,setSelected]=useState<Key|null>(null);
  return <div className="scene">
    <div className="canvas"><Canvas dpr={[1,1.7]} gl={{alpha:true,antialias:true,powerPreference:"high-performance"}} camera={{position:[0,.8,8.3],fov:43}}>
      <Suspense fallback={null}><World labels={labels} selected={selected} onPick={k=>setSelected(s=>s===k?null:k)}/></Suspense>
    </Canvas></div>
    <div className="scene-hint">{labels.hint}</div>
    <div className="scene-detail" aria-live="polite">{selected?labels.descriptions[selected]:""}</div>
    <Typewriter/>
  </div>;
}
