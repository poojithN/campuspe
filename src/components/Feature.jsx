import Button from "./Button";
export default function Feature({ label, headline, accent, text, btn, items }) {
  return (
    <section className="wrap split">
      <div>
        <p className="blue" style={{fontSize:11}}>{label}</p>
        <h2>{headline}<br /><span className="blue">{accent}</span></h2>
        <p className="muted" style={{margin:"14px 0 20px"}}>{text}</p>
        <Button>{btn}</Button>
      </div>
      <div className="card">
        {items.map((it, i) => (
          <div className="item" key={it[0]}><span className="n">0{i + 1}</span><div><b>{it[0]}</b><span className="muted" style={{fontSize:12}}>{it[1]}</span></div></div>
        ))}
      </div>
    </section>
  );
}
