import React, { useEffect, useRef } from "react";

/**
 * Fundo global — uma única esfera escura, em CSS puro.
 *
 * A versão anterior resolvia um campo de metaballs no fragment shader: 25
 * avaliações por pixel, por frame, em tela cheia. Bonito e caro demais para
 * rodar bem em GPU integrada.
 *
 * Aqui a esfera é só um elemento com gradientes radiais. O navegador
 * rasteriza isso uma vez, promove a uma camada e a partir daí só compõe:
 * o drift e a reação ao scroll são transform, ou seja, trabalho de
 * compositor. Sem canvas, sem loop de render, sem custo por pixel.
 */

/** `center` é a posição vertical do centro da section no documento. */
type Anchor = { center: number; x: number; y: number; zoom: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const Background: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Parallax de mouse só onde existe mouse de verdade.
    const finePointer = window.matchMedia("(pointer: fine)").matches && !reduced;

    let anchors: Anchor[] = [];
    const readAnchors = () => {
      anchors = Array.from(document.querySelectorAll<HTMLElement>("[data-blob]"))
        .map((el) => {
          const [x, y, zoom] = (el.dataset.blob || "0,0,1")
            .split(",")
            .map((v) => parseFloat(v) || 0);
          const rect = el.getBoundingClientRect();
          // Ancorar no centro da section, e não no topo: o alvo é comparado
          // com o centro da viewport, então usar o topo faria a section já
          // nascer "meio caminho andado" para a próxima âncora.
          return {
            center: rect.top + window.scrollY + rect.height / 2,
            x,
            y,
            zoom: zoom || 1,
          };
        })
        .sort((a, b) => a.center - b.center);
    };

    let targetX = 0;
    let targetY = 0;
    let targetZoom = 1;
    let curX = 0;
    let curY = 0;
    let curZoom = 1;
    let ptrTX = 0;
    let ptrTY = 0;
    let ptrX = 0;
    let ptrY = 0;

    const computeTarget = () => {
      if (!anchors.length) return;
      const y = window.scrollY + window.innerHeight * 0.5;

      let i = anchors.findIndex((a) => y < a.center);
      if (i === -1) i = anchors.length;

      const from = anchors[Math.max(0, i - 1)];
      const to = anchors[Math.min(anchors.length - 1, i)];

      const span = to.center - from.center;
      const t = span > 0 ? clamp((y - from.center) / span, 0, 1) : 1;
      const e = t * t * (3 - 2 * t);

      targetX = lerp(from.x, to.x, e);
      targetY = lerp(from.y, to.y, e);
      targetZoom = lerp(from.zoom, to.zoom, e);
    };

    const apply = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const tx = (curX + ptrX * 0.02) * vw;
      const ty = (curY + ptrY * 0.02) * vh;
      orb.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(
        1
      )}px, 0) scale(${curZoom.toFixed(3)})`;
    };

    // O rAF só existe enquanto há distância a percorrer. Parado, o custo é zero.
    let raf = 0;
    let running = false;

    const tick = () => {
      curX = lerp(curX, targetX, 0.06);
      curY = lerp(curY, targetY, 0.06);
      curZoom = lerp(curZoom, targetZoom, 0.06);
      ptrX = lerp(ptrX, ptrTX, 0.05);
      ptrY = lerp(ptrY, ptrTY, 0.05);

      apply();

      const settled =
        Math.abs(curX - targetX) < 0.0005 &&
        Math.abs(curY - targetY) < 0.0005 &&
        Math.abs(curZoom - targetZoom) < 0.001 &&
        Math.abs(ptrX - ptrTX) < 0.002 &&
        Math.abs(ptrY - ptrTY) < 0.002;

      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (running || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      computeTarget();
      wake();
    };

    const onPointer = (ev: PointerEvent) => {
      ptrTX = (ev.clientX / window.innerWidth) * 2 - 1;
      ptrTY = (ev.clientY / window.innerHeight) * 2 - 1;
      wake();
    };

    const onResize = () => {
      readAnchors();
      computeTarget();
      wake();
    };

    readAnchors();
    computeTarget();
    curX = targetX;
    curY = targetY;
    curZoom = targetZoom;
    apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    if (finePointer) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div aria-hidden="true" className="bg-scene">
      <div ref={orbRef} className="bg-orb-wrap">
        <div className="bg-orb" />
      </div>
      <div className="bg-vignette" />
    </div>
  );
};

export default Background;
