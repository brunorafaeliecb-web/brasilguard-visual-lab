"use client";
import { useEffect, useState } from "react";
const PHRASES = [
  "BRASILGUARD · AGENT ORCHESTRATION",
  "WEBGL · INTERACTIVE 3D",
  "GOVERNED AI SYSTEMS",
  "MULTI-AGENT ENGINEERING",
  "TRACEABLE · MODULAR · SECURE"
];
const LETTER_MS = 80;
const HOLD_MS = 5000;
type Phase = "writing" | "written" | "erasing" | "erased";
export default function Typewriter() {
  const [index,setIndex] = useState(0);
  const [count,setCount] = useState(0);
  const [phase,setPhase] = useState<Phase>("writing");
  useEffect(() => {
    const full = PHRASES[index];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "writing") {
      timer=setTimeout(()=>count<full.length?setCount(n=>n+1):setPhase("written"),LETTER_MS);
    } else if (phase === "written") {
      timer=setTimeout(()=>setPhase("erasing"),HOLD_MS);
    } else if (phase === "erasing") {
      timer=setTimeout(()=>count>0?setCount(n=>n-1):setPhase("erased"),LETTER_MS);
    } else {
      timer=setTimeout(()=>{setIndex(i=>(i+1)%PHRASES.length);setCount(0);setPhase("writing");},HOLD_MS);
    }
    return ()=>clearTimeout(timer);
  },[index,count,phase]);
  return <div className="typewriter" aria-label="Rotating BrasilGuard engineering messages">
    <span className="typewriter-text">{PHRASES[index].slice(0,count)}</span>
    <span className="typewriter-caret" aria-hidden="true">▍</span>
  </div>;
}
