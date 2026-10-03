import { useEffect } from "react";
import Blocks from "./Blocks";
import { IMAGENS } from "../data/conteudo";

export default function Page({ pagina: p }) {
  useEffect(() => {
    document.title = `${p.menu} | Carla Cirilo`;
    window.scrollTo(0, 0);
  }, [p.id]);

  const img = p.imagem && IMAGENS[p.imagem];

  return (
    <main>
      {p.home && <p className="sub">{p.sub}</p>}
      <h1>{p.titulo}</h1>
      {img && (
        <img
          className={`fig${p.retrato ? " retrato" : ""}`}
          src={img}
          alt=""
        />
      )}
      <Blocks blocos={p.blocos} />
    </main>
  );
}