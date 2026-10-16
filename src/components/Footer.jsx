import { footerColumns } from "../constants/content";
export default function Footer() {
  return (
    <footer className="wrap">
      <div className="fgrid">
        <div><div className="logo">CampusPe</div><p>From choosing a college to finding your next opportunity.</p></div>
        {footerColumns.map(c => (
          <div key={c[0]}><h4>{c[0]}</h4>{c[1].map(l => <a href="#" key={l}>{l}</a>)}</div>
        ))}
      </div>
      <div className="copy"><span>contactus@campuspe.com · +91 6362606466</span><span>Students · Colleges · Employers</span></div>
      <div className="copy"><span>© 2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance</span></div>
    </footer>
  );
}
