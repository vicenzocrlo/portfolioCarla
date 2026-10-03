import { PAGINAS } from "../data/conteudo";
export default function Header({ ativo }) {
  return (
    <header>
      <a className="logo" href="#inicio">Carla Cirilo</a>
      <nav>
        {PAGINAS.map((p) => (
          <a key={p.id} href={`#${p.id}`} className={p.id === ativo ? "on" : ""}>{p.menu}</a>
        ))}
      </nav>
    </header>
  );
}
