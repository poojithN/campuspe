import Button from "./Button";
import { discoverSteps, feedJobs } from "../constants/content";
export default function Discover() {
  return (
    <section className="wrap split">
      <div>
        <p className="blue" style={{fontSize:11}}>01 · OPPORTUNITY DISCOVERY</p>
        <h2>Stop searching.<br /><span className="blue">Start getting matched.</span></h2>
        <p className="muted" style={{margin:"14px 0 20px"}}>Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
        {discoverSteps.map(s => (
          <div className="item" key={s[0]}><span className="n">{s[0]}</span><div><b>{s[1]}</b><span className="muted" style={{fontSize:12}}>{s[2]}</span></div></div>
        ))}
        <Button>Explore opportunities →</Button>
      </div>
      <div className="card">
        <b>CampusPe Opportunity Feed</b>
        <p className="muted" style={{fontSize:12,marginBottom:10}}>Colleges & opportunities matched to you</p>
        {feedJobs.map(j => (
          <div className="job" key={j[0]}>
            <div><b>{j[0]}</b><span className="muted" style={{fontSize:12}}>{j[1]} · Bengaluru</span></div>
            <Button>{j[2]}</Button>
          </div>
        ))}
        <p className="blue" style={{fontSize:12,marginTop:10}}>View all matched opportunities →</p>
      </div>
    </section>
  );
}
