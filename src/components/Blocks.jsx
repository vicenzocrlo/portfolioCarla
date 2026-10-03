import { IMAGENS } from "../data/conteudo";

export default function Blocks({ blocos }) {
  return blocos.map(([tipo, v], i) => {
    switch (tipo) {
      case "h2": return <h2 key={i}>{v}</h2>;
      case "h3": return <h3 key={i}>{v}</h3>;
      case "p": return <p key={i}>{v}</p>;
      case "q": return <blockquote key={i}>{v}</blockquote>;
      case "ul": return <ul key={i}>{v.map((t, j) => <li key={j}>{t}</li>)}</ul>;
      case "img": return <img key={i} className="fig" src={IMAGENS[v]} alt="" />;
      case "cards":
        return (
          <div className="cards" key={i}>
            {v.map(([titulo, texto, link], j) => {
              const conteudo = <><h3>{titulo}</h3><p>{texto}</p></>;
              return link
                ? <a key={j} className="card" href={`#${link}`}>{conteudo}</a>
                : <div key={j} className="card">{conteudo}</div>;
            })}
          </div>
        );
      case "btn":
        return (
          <div key={i}>
            {v.map(([texto, link], j) => (
              <a key={j} className="btn" href={link}
                {...(link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {texto}
              </a>
            ))}
          </div>
        );

      case "tabela":
  return (
    <div className="tabela" key={i}>
      <table>
        <thead>
          <tr>{v[0].map((c, j) => <th key={j}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {v.slice(1).map((linha, j) => (
            <tr key={j}>{linha.map((c, k) => <td key={k}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
      default: return null;
    }
  });
}
