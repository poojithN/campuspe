import { useState } from "react";

export default function Resume() {
  const [file, setFile] = useState("");
  return (
    <section className="wrap center">
      <p className="blue" style={{fontSize:11}}>TRY IT LIVE</p>
      <h2>Upload your resume.<br /><span className="blue">Find jobs that fit.</span></h2>
      <p className="muted" style={{margin:"12px auto",maxWidth:560}}>Upload once. CampusPe reads your skills, experience, and preferences - then finds relevant jobs across 1,000+ sources.</p>
      <div className="upload">
        <h3>Upload your resume</h3>
        <p className="muted" style={{fontSize:12,margin:"6px 0 14px"}}>PDF, DOC, or DOCX · Up to 10MB</p>
        <label className="btn">Upload resume
          <input type="file" hidden onChange={e => setFile(e.target.files[0] ? e.target.files[0].name : "")} />
        </label>
        <p className="muted" style={{fontSize:12,marginTop:10}}>{file ? "Selected: " + file : "or drag and drop your file here"}</p>
      </div>
      <div className="pills">
        {["Resume analyzed","Skills matched","Experience matched","1000+ sources searched"].map(p => <div key={p}>✔ {p}</div>)}
      </div>
    </section>
  );
}
