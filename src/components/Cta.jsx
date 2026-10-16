import Button from "./Button";
export default function Cta() {
  return (
    <section className="wrap" style={{paddingTop:0}}>
      <div className="cta">
        <div><b>Ready for what's next?</b><p className="muted" style={{fontSize:12}}>Discover colleges, find opportunities, list your college, or start hiring with CampusPe.</p></div>
        <div className="btns">
          <Button>Explore Colleges</Button><Button>Find Opportunities</Button>
          <Button variant="outline">List Your College</Button><Button variant="outline">Post a Job</Button>
        </div>
      </div>
    </section>
  );
}
