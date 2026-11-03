# Análise profunda e engenharia reversa — Visual Lab BGD

Auditoria dos 10 repositórios mais relevantes para dinamismo e 3D web.
Padrão BGD: nada implementado no site de produção ainda.

## 1. three.js (mrdoob/three.js) — ~117k ⭐
**O que é:** Biblioteca 3D padrão da web (WebGL/WebGPU).
**Padrão mínimo:** cena + câmera + geometry + material + mesh + renderer + animation loop.
**Exemplo no lab:** `examples/three-cube.html`
**Complementa:** base de tudo 3D. R3F e drei são camadas em cima dele.

## 2. react-bits (DavidHDev/react-bits) — ~51k ⭐
**O que é:** 215+ componentes animados para React (texto, backgrounds, micro-interações).
**Padrão:** componentes prontos, 4 flavors (JS/TS + CSS/Tailwind). Instalação via shadcn ou copy-paste.
**Uso potencial:** cards, botões, backgrounds para N1 e Kids sem reinventar.
**Licença:** MIT + Commons Clause.

## 3. react-three-fiber (pmndrs/react-three-fiber) — ~33k ⭐
**O que é:** Renderer React para three.js. JSX declarativo (`<mesh>`, `<boxGeometry>`).
**Padrão:** `Canvas` + componentes reutilizáveis com `useFrame`, `useState`, eventos de pointer.
**Complementa:** three.js puro. Se o N1 virar React, R3F é o caminho natural.
**Observação:** exige React. Site atual é HTML puro.

## 4. GSAP (greensock/GSAP) — ~30k ⭐
**O que é:** Biblioteca de animação framework-agnóstica. 100% free (incluindo plugins).
**Padrão:** `gsap.to()`, timelines, ScrollTrigger, eases.
**Exemplo no lab:** `examples/gsap-typing.html`
**Complementa:** animações de UI (digitação, scroll, sequências) sem 3D.

## 5. magicui (magicuidesign/magicui) — ~23k ⭐
**O que é:** UI library de componentes animados (estilo shadcn + framer-motion).
**Padrão:** copy-paste, Tailwind, efeitos prontos (bento, shine, etc.).
**Complementa:** react-bits. Mais focado em design system.

## 6. gsap-skills (greensock/gsap-skills) — ~17k ⭐
**O que é:** Skills oficiais para agentes de IA usarem GSAP corretamente.
**Conteúdo:** 8 skills (core, timeline, ScrollTrigger, plugins, React, performance, etc.).
**Uso:** se formos gerar animações com IA, instalar essas skills melhora a qualidade.
**Instalação:** `npx skills add https://github.com/greensock/gsap-skills`

## 7. hyperframes (heygen-com/hyperframes) — ~77k ⭐
**O que é:** Framework open-source para transformar HTML + animações em vídeo MP4.
**Padrão:** HTML com data-attributes de timing + GSAP/CSS/Three.js → render determinístico.
**Complementa:** se quisermos gerar vídeos de módulos ou demos a partir do conteúdo do N1.
**Licença:** Apache 2.0.

## 8. img2threejs (img2threejs/img2threejs) — ~20k ⭐
**O que é:** Pipeline que reconstrói um objeto a partir de uma imagem de referência como modelo Three.js procedural (código, não mesh).
**Padrão:** imagem → análise → geração de código Three.js → gate de qualidade.
**Complementa:** se quisermos modelos 3D de ícones ou objetos do curso sem baixar assets.
**Requer:** agente de IA + Node + Python.

## 9. motion (motiondivision/motion) — ~35k ⭐
**O que é:** Biblioteca de animação moderna (ex-Framer Motion). React, JS puro e Vue.
**Padrão:** `animate("#box", { x: 100 })` ou `<motion.div animate={{ x: 100 }} />`.
**Complementa:** GSAP. Mais simples para animações de UI; GSAP é mais poderoso para timelines complexas.
**Licença:** MIT.

## 10. drei (pmndrs/drei) — ~10k ⭐
**O que é:** Coleção de helpers e abstrações para react-three-fiber.
**Conteúdo:** câmeras, controles, loaders (GLTF, texturas), materiais especiais, shapes, efeitos, staging.
**Complementa:** R3F. Reduz boilerplate de 3D em React.
**Observação:** só faz sentido se formos usar R3F.

---

## Como eles se complementam

| Camada | Repositório | Quando usar |
|--------|-------------|-------------|
| 3D base | three.js | Qualquer cena 3D |
| 3D em React | R3F + drei | Se o front virar React |
| Animação UI | GSAP ou Motion | Digitação, scroll, sequências, micro-interações |
| Componentes prontos | react-bits / magicui | Cards, backgrounds, botões animados |
| Vídeo a partir de HTML | hyperframes | Gerar demos em vídeo |
| 3D a partir de imagem | img2threejs | Modelos procedurais sem assets externos |
| Skills para IA | gsap-skills | Melhorar geração de animações por agentes |

## Recomendação BGD (auditoria)

Para o N1 e Kids atuais (HTML puro):
1. **GSAP** — mais fácil de adicionar agora (CDN, sem build).
2. **three.js** — para um elemento 3D leve (cubo ou ícone rotativo no header/Kids).
3. **react-bits / magicui** — se formos migrar para React/Next no futuro.

Nada foi aplicado no site de produção. Os exemplos no lab são os padrões mínimos extraídos.
