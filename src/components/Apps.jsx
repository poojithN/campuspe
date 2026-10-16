export default function Apps() {
  return (
    <section className="wrap center">
      <h2 className="blue" style={{fontSize:24}}>Checkout Our App Interface Look</h2>
      <p className="muted" style={{margin:"10px auto",maxWidth:600}}>Experience the power of a unified campus ecosystem right in your pocket. Students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies.</p>
      <img className="app-showcase" src="/images/app-screens.png" width="1146" height="569" alt="CampusPe app screens: home, post a job, my applications and college courses" loading="lazy" />
      <div className="download">
        <div>
          <h2 className="blue" style={{fontSize:24}}>Download App Now</h2>
          <p className="muted" style={{margin:"10px 0 16px",maxWidth:460}}>Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry.</p>
          <a className="store" href="#">▶ Google Play</a>
          <a className="store" href="#">App Store</a>
        </div>
        <img className="download-img" src="/images/app-phone.png" width="276" height="569" alt="CampusPe app home screen on a phone" loading="lazy" />
      </div>
    </section>
  );
}
