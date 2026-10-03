import { useEffect, useRef, useState } from "react";

/* Assinatura sendo escrita: um traço de "caneta" (máscara em zigue-zague)
   revela o nome da esquerda para a direita, como se estivesse sendo escrito.
   Para usar sua assinatura real, troque o <text> por um <path> do seu SVG. */
const NOME = "Carla Cirilo";
const DURACAO = 4.6; // segundos escrevendo

export default function Intro({ onDone }) {
  const textoRef = useRef(null);
  const tracoRef = useRef(null);
  const [saindo, setSaindo] = useState(false);
  const [sub, setSub] = useState(false);

  const encerrar = () => {
    if (saindo) return;
    setSaindo(true);
    try { sessionStorage.setItem("intro", "1"); } catch {}
    setTimeout(onDone, 1100);
  };

  useEffect(() => {
    let vivo = true;
    let t1, t2;
    (async () => {
      try { await document.fonts.load("170px 'Mrs Saint Delafield'"); } catch {}
      if (!vivo || !textoRef.current) return;

      // mede o texto e cria o traço em zigue-zague que o cobre inteiro
      const b = textoRef.current.getBBox();
      const x0 = b.x - 25, larg = b.width + 50;
      const topo = b.y - 10, base = b.y + b.height + 10;
      const n = Math.round(larg / 15);
      let d = `M${x0},${base}`;
      for (let i = 0; i <= n; i++) d += ` L${x0 + (larg / n) * i},${i % 2 ? base : topo}`;

      const el = tracoRef.current;
      el.setAttribute("d", d);
      const len = el.getTotalLength();
      el.style.transition = "none";
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.getBoundingClientRect(); // força o navegador a aplicar o estado inicial
      el.style.transition = `stroke-dashoffset ${DURACAO}s cubic-bezier(.45,.1,.4,1)`;
      el.style.strokeDashoffset = 0;

      t1 = setTimeout(() => setSub(true), DURACAO * 1000);
      t2 = setTimeout(encerrar, DURACAO * 1000 + 1800);
    })();
    return () => { vivo = false; clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className={`intro${saindo ? " out" : ""}`} onClick={encerrar}>
      <svg viewBox="0 0 760 240" role="img" aria-label={NOME}>
        <defs>
          <mask id="caneta" maskUnits="userSpaceOnUse" x="-100" y="-100" width="960" height="440">
            <path ref={tracoRef} fill="none" stroke="#fff" strokeWidth="44"
              strokeLinecap="round" strokeLinejoin="round" />
          </mask>
        </defs>
        <text ref={textoRef} className="sig-text" x="380" y="170" textAnchor="middle" mask="url(#caneta)">
          {NOME}
        </text>
      </svg>
      <p className={sub ? "show" : ""}>Terapeuta · Filósofa Clínica</p>
    </div>
  );
}
