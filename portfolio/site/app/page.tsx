"use client";
import {useEffect,useState} from "react";
import dynamic from "next/dynamic";
import type {SceneLabels} from "../components/Scene3D";
const Scene=dynamic(()=>import("../components/Scene3D"),{ssr:false,loading:()=> <div className="scene-loading">◈</div>});
const copy={"en":["Projects","Approach","About","Contact","AI ENGINEERING · AGENTIC SYSTEMS","INTELLIGENCE.","ENGINEERED WITH CONTROL.","I'm Bruno Rafael. I design modular AI architectures connecting agents, APIs, knowledge systems and human decisions.","Explore projects","SELECTED WORK","Engineering without the hype.","Projects and architectural work from BrasilGuard, identified by their technical maturity.","Powerful AI needs boundaries.","Governed capabilities, human authorization and evidence-based execution.","Software engineering student and independent developer at BrasilGuard Sistemas.","Open to international remote roles and projects.","View repository","Discuss architecture","Light","Dark","Flashlight","AI CORE","API GATEWAY","LLM AGENTS","DATA LAYER","MCP TOOLS","DRAG TO ROTATE · SCROLL TO ZOOM · SELECT A NODE","API integrations with controlled capabilities.","Agent workflows and model orchestration.","Knowledge indexing and retrieval.","Secure MCP tool invocation.","Public repository","Private project · technical overview"],"pt":["Projetos","Abordagem","Sobre","Contato","ENGENHARIA DE IA · SISTEMAS AGÊNTICOS","INTELIGÊNCIA.","PROJETADA COM CONTROLE.","Sou Bruno Rafael. Projeto arquiteturas modulares de IA que conectam agentes, APIs, conhecimento e decisões humanas.","Explorar projetos","PROJETOS SELECIONADOS","Engenharia sem exageros.","Projetos e arquiteturas da BrasilGuard, identificados conforme sua maturidade técnica.","IA poderosa precisa de limites.","Capacidades governadas, autorização humana e execução baseada em evidências.","Estudante de engenharia de software e desenvolvedor independente na BrasilGuard Sistemas.","Disponível para vagas internacionais remotas e projetos.","Ver repositório","Conversar sobre arquitetura","Claro","Escuro","Lanterna","NÚCLEO IA","GATEWAY API","AGENTES LLM","CAMADA DE DADOS","FERRAMENTAS MCP","ARRASTE PARA GIRAR · SCROLL PARA ZOOM · SELECIONE UM NÓ","Integração de APIs com capacidades controladas.","Fluxos de agentes e orquestração de modelos.","Indexação e recuperação de conhecimento.","Invocação segura de ferramentas MCP.","Repositório público","Projeto privado · visão técnica"],"es":["Proyectos","Enfoque","Acerca de","Contacto","INGENIERÍA IA · SISTEMAS AGÉNTICOS","INTELIGENCIA.","DISEÑADA CON CONTROL.","Soy Bruno Rafael. Diseño sistemas de IA modulares con agentes, APIs, conocimiento y decisiones humanas.","Explorar proyectos","PROYECTOS DESTACADOS","Ingeniería sin exageraciones.","Proyectos y arquitecturas de BrasilGuard según su madurez técnica.","La IA necesita límites.","Capacidades controladas, autorización humana y ejecución verificable.","Estudiante de ingeniería de software y desarrollador independiente en BrasilGuard Sistemas.","Disponible para puestos remotos internacionales.","Ver repositorio","Hablar de arquitectura","Claro","Oscuro","Linterna","NÚCLEO IA","PUERTA API","AGENTES LLM","CAPA DE DATOS","HERRAMIENTAS MCP","ARRASTRA PARA GIRAR · SCROLL PARA ZOOM · SELECCIONA UN NODO","Integraciones API controladas.","Orquestación de agentes.","Indexación y búsqueda de conocimientos.","Herramientas MCP seguras.","Repositorio público","Proyecto privado · arquitectura"],"fr":["Projets","Approche","À propos","Contact","INGÉNIERIE IA · SYSTÈMES AGENTIQUES","INTELLIGENCE.","CONÇUE AVEC MAÎTRISE.","Je suis Bruno Rafael. Je conçois des architectures IA modulaires reliant agents, API, connaissances et décisions humaines.","Voir les projets","PROJETS SÉLECTIONNÉS","Ingénierie sans exagération.","Projets et architectures de BrasilGuard selon leur maturité.","Une IA puissante exige des limites.","Contrôle humain et exécution vérifiable.","Étudiant en génie logiciel et développeur indépendant chez BrasilGuard Sistemas.","Ouvert aux postes internationaux à distance.","Voir le dépôt","Discuter de l'architecture","Clair","Sombre","Lampe","CŒUR IA","PASSERELLE API","AGENTS LLM","COUCHE DONNÉES","OUTILS MCP","GLISSEZ POUR TOURNER · MOLETTE POUR ZOOMER · CHOISISSEZ UN NŒUD","Intégrations API contrôlées.","Orchestration des agents.","Indexation et recherche.","Appels MCP sécurisés.","Dépôt public","Projet privé · architecture"],"it":["Progetti","Approccio","Chi sono","Contatti","INGEGNERIA IA · SISTEMI AGENTICI","INTELLIGENZA.","PROGETTATA CON CONTROLLO.","Sono Bruno Rafael. Progetto architetture IA modulari con agenti, API, conoscenza e decisioni umane.","Esplora i progetti","PROGETTI SELEZIONATI","Ingegneria senza esagerazioni.","Progetti e architetture di BrasilGuard secondo la loro maturità.","L'IA potente richiede limiti.","Controllo umano ed esecuzione verificabile.","Studente di ingegneria del software e sviluppatore indipendente presso BrasilGuard Sistemas.","Disponibile per ruoli internazionali da remoto.","Apri repository","Parliamo dell'architettura","Chiaro","Scuro","Torcia","NUCLEO IA","GATEWAY API","AGENTI LLM","LIVELLO DATI","STRUMENTI MCP","TRASCINA PER RUOTARE · SCORRI PER ZOOM · SELEZIONA UN NODO","Integrazioni API controllate.","Orchestrazione degli agenti.","Indicizzazione e ricerca.","Strumenti MCP sicuri.","Repository pubblico","Progetto privato · architettura"],"de":["Projekte","Ansatz","Über mich","Kontakt","KI-ENGINEERING · AGENTENSYSTEME","INTELLIGENZ.","MIT KONTROLLE ENTWICKELT.","Ich bin Bruno Rafael. Ich entwickle modulare KI-Architekturen mit Agenten, APIs, Wissen und menschlichen Entscheidungen.","Projekte ansehen","AUSGEWÄHLTE PROJEKTE","Engineering ohne Übertreibung.","Projekte und Architekturen von BrasilGuard nach technischem Reifegrad.","Leistungsfähige KI braucht Grenzen.","Menschliche Freigaben und nachvollziehbare Ausführung.","Software-Engineering-Student und unabhängiger Entwickler bei BrasilGuard Sistemas.","Offen für internationale Remote-Rollen.","Repository ansehen","Architektur besprechen","Hell","Dunkel","Taschenlampe","KI-KERN","API-GATEWAY","LLM-AGENTEN","DATENSCHICHT","MCP-WERKZEUGE","ZIEHEN ZUM DREHEN · SCROLLEN ZUM ZOOMEN · KNOTEN AUSWÄHLEN","Kontrollierte API-Integration.","Orchestrierung von Agenten.","Wissensindexierung und Suche.","Sichere MCP-Werkzeuge.","Öffentliches Repository","Privates Projekt · Architektur"]};
type Lang=keyof typeof copy;
const languageOptions:Lang[]=["pt","en","es","fr","it","de"];
const projects=[["FR0 Architecture","Python · JSON Schema · SHA-256","https://github.com/brunorafaeliecb-web/fr0-architecture",true,"Governed architecture with JSON schemas, versioned evidence and SHA-256 validation."],["BrasilGuard OCI MCP","TypeScript · MCP · Oracle Cloud","#contact",false,"MCP gateway for controlled cloud operations and tool permissions."],["Academy / DIPI","Full Stack · Identity · EdTech","https://github.com/brunorafaeliecb-web/brasilguard-academy-dipi-n1",true,"Education platform concept with authentication, content and tracking."],["2Brain Inspector","Data Capture · Retrieval","#contact",false,"On-demand collection, indexing and contextual retrieval."],["AutoTranscriber","FastAPI · Python","#contact",false,"Local transcription processing connected with cloud management."],["WallFrankin","AI Governance · Security","#approach",false,"Human governance, authority boundaries and evidence controls."]];
export default function Home(){
  const [lang,setLang]=useState<Lang>("en");
  const [theme,setTheme]=useState<"dark"|"light">("dark");
  const [lamp,setLamp]=useState(true);
  const [pointer,setPointer]=useState(false);
  const [position,setPosition]=useState({x:50,y:50});
  useEffect(()=>{
    try{
      const saved=localStorage.getItem("bgd-lang");
      if(saved&&languageOptions.includes(saved as Lang))setLang(saved as Lang);
      else if(navigator.language.toLowerCase().startsWith("pt"))setLang("pt");
      const t=localStorage.getItem("bgd-theme");
      if(t==="dark"||t==="light")setTheme(t);
      setLamp(localStorage.getItem("bgd-flash")!=="off");
    }catch{}
  },[]);
  useEffect(()=>{
    document.documentElement.lang=lang;
    document.documentElement.dataset.theme=theme;
  },[lang,theme]);
  useEffect(()=>{
    const coarse=window.matchMedia("(pointer: coarse)");
    const syncPointer=()=>{
      // Touchscreens have no hover: show the beam at viewport center until touched.
      if(coarse.matches){
        setPointer(true);
        setPosition({x:window.innerWidth/2,y:window.innerHeight/2});
      }else{
        setPointer(false);
      }
    };
    const track=(e:PointerEvent)=>{
      // Follow mouse, pen and touch without preventing native scrolling.
      if(e.pointerType!=="mouse"&&e.pointerType!=="pen"&&e.pointerType!=="touch")return;
      setPointer(true);
      setPosition({x:e.clientX,y:e.clientY});
    };
    const leave=()=>{if(!coarse.matches)setPointer(false)};
    syncPointer();
    window.addEventListener("pointerdown",track,{passive:true});
    window.addEventListener("pointermove",track,{passive:true});
    window.addEventListener("resize",syncPointer,{passive:true});
    document.addEventListener("mouseleave",leave);
    window.addEventListener("blur",leave);
    return()=>{
      window.removeEventListener("pointerdown",track);
      window.removeEventListener("pointermove",track);
      window.removeEventListener("resize",syncPointer);
      document.removeEventListener("mouseleave",leave);
      window.removeEventListener("blur",leave);
    };
  },[]);
  const w=copy[lang];
  const labels:SceneLabels={
    core:w[21],api:w[22],llm:w[23],data:w[24],mcp:w[25],hint:w[26],
    descriptions:{api:w[27],llm:w[28],data:w[29],mcp:w[30]}
  };
  return <>
    <div aria-hidden="true" className={"flashlight"+(lamp&&pointer?" on":"")} style={{["--fx" as string]:position.x+"px",["--fy" as string]:position.y+"px"}}/>
    <header>
      <div className="container header-row">
        <a href="#top" className="brand">BRafael<span>S.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">{w[0]}</a><a href="#approach">{w[1]}</a>
          <a href="#about">{w[2]}</a><a href="#contact">{w[3]}</a>
        </nav>
        <div className="controls">
          <button aria-label={w[20]} title={w[20]} aria-pressed={lamp} onClick={()=>{
            setLamp(!lamp);
            try{localStorage.setItem("bgd-flash",lamp?"off":"on")}catch{}
          }}>🔦</button>
          <button aria-label="Theme" onClick={()=>{
            const next=theme==="dark"?"light":"dark";
            setTheme(next);
            try{localStorage.setItem("bgd-theme",next)}catch{}
          }}>{theme==="dark"?"☀":"☾"} <span>{theme==="dark"?w[18]:w[19]}</span></button>
          <select aria-label="Language" value={lang} onChange={e=>{
            const next=e.target.value as Lang;
            setLang(next);
            try{localStorage.setItem("bgd-lang",next)}catch{}
          }}>
            <option value="pt">Português</option><option value="en">English</option>
            <option value="es">Español</option><option value="fr">Français</option>
            <option value="it">Italiano</option><option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </header>
    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">{w[4]}</div>
          <h1>{w[5]}<br/><em>{w[6]}</em></h1>
          <p className="lead">{w[7]}</p>
          <div className="actions">
            <a className="btn" href="#work">{w[8]} ↗</a>
            <a className="btn outline" href="https://github.com/brunorafaeliecb-web" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
          <div className="tags"><span>AI ENGINEER</span><span>LLMOPS</span><span>MCP</span></div>
        </div>
        <Scene labels={labels}/>
      </section>
      <section id="work" className="section"><div className="container">
        <div className="eyebrow">{w[9]}</div>
        <h2>{w[10]}</h2>
        <p className="intro">{w[11]}</p>
        <div className="cards">{projects.map((p,i)=><article key={String(p[0])} className="card">
          <span className="icon">{["◈","⬡","◇","◎","▣","✧"][i]}</span>
          <span className="status">{p[3]?w[31]:w[32]}</span>
          <h3>{p[0]}</h3><p>{p[4]}</p>
          <div className="tech">{p[1]}</div>
          <a href={String(p[2])} target={String(p[2]).startsWith("https")?"_blank":undefined} rel="noopener noreferrer">{p[3]?w[16]:w[17]} ↗</a>
        </article>)}</div>
        <p className="disclaimer">Project maturity and implementation status must be verified before claims of production use.</p>
      </div></section>
      <section id="approach" className="section"><div className="container">
        <div className="eyebrow">{w[1]}</div><h2>{w[12]}</h2><p className="intro">{w[13]}</p>
      </div></section>
      <section id="about" className="section"><div className="container">
        <div className="eyebrow">{w[2]}</div><h2>BRUNO RAFAEL</h2><p className="intro">{w[14]}</p>
      </div></section>
      <section id="contact" className="section"><div className="container">
        <div className="eyebrow">{w[3]}</div><h2>GITHUB / CONTACT</h2><p className="intro">{w[15]}</p>
        <a className="btn" href="https://github.com/brunorafaeliecb-web" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div></section>
    </main>
    <footer><div className="container">© 2026 Bruno Rafael · BrasilGuard Sistemas · AI Engineering Portfolio</div></footer>
  </>;
}
