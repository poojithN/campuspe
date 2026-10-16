import Button from "./Button";
export default function Support() {
  return (
    <section className="wrap">
      <div className="support">
        <h2 style={{fontSize:24}}>Still have questions?</h2>
        <p className="muted" style={{margin:"10px auto 16px",maxWidth:380}}>Our support team is here to help you succeed. Get in touch anytime.</p>
        <Button style={{marginRight:10}}>Contact Support</Button>
        <Button variant="outline">Schedule a Call</Button>
      </div>
    </section>
  );
}
