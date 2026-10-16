import Button from "./Button";
import { heroCards } from "../constants/content";
export default function Hero() {
  return (
    <section className="wrap center" style={{paddingTop:30}}>
      <p className="blue" style={{fontSize:12}}>AI-Powered Campus Assistant</p>
      <h1>Connect 10X Faster.</h1>
      <p className="muted">One platform connecting students, colleges & employers - faster.</p>
      <h3 style={{margin:"10px 0",fontSize:16}} className="blue">What are you looking for?</h3>
      <div className="cards3">
        {heroCards.map(c => (
          <div className="card" key={c.title} style={{textAlign:"left"}}>
            <span className="tag">{c.tag}</span>
            <div className="icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <ul>{c.list.map(l => <li key={l}>✓ {l}</li>)}</ul>
            <Button full>{c.btn}</Button>
          </div>
        ))}
      </div>
      <div className="stats">
        {[["👥","800+","Students"],["🏛","130+","colleges"],["💼","100+","jobs & internships"],["🛡","100%","Safe & Trusted"]].map(s => (
          <div key={s[2]}><div>{s[0]}</div><b>{s[1]}</b><span className="muted">{s[2]}</span></div>
        ))}
      </div>
    </section>
  );
}
