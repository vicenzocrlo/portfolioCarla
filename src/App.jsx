import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Page from "./components/Page";
import { PAGINAS } from "./data/conteudo";

const useHash = () => {
  const [h, setH] = useState(location.hash.slice(1) || "inicio");
  useEffect(() => {
    const f = () => setH(location.hash.slice(1) || "inicio");
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  return h;
};

const jaViu = () => {
  try { return sessionStorage.getItem("intro") === "1"; } catch { return false; }
};
const reduzido = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const id = useHash();
  const pagina = PAGINAS.find((p) => p.id === id) || PAGINAS[0];
  const [intro, setIntro] = useState(!jaViu() && !reduzido());
  return (
    <>
      {intro && <Intro onDone={() => setIntro(false)} />}
      <Header ativo={pagina.id} />
      <Page pagina={pagina} />
      <footer>Carla Cirilo · Modos de Ser</footer>
    </>
  );
}
