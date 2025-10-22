
(function(){
  const btn = document.getElementById('theme-toggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('theme-light');
    });
  }
  const schema = {
    "@context":"https://schema.org",
    "@type":"Person",
    name: "Alireza Samooni",
    jobTitle: "Power Systems Reliability & Energy Management",
    email: "mailto:alirezasamooni1371@gmail.com",
    url: location.origin + location.pathname,
    sameAs: ["https://github.com/YOUR-USERNAME","https://www.linkedin.com/in/YOUR-LINKEDIN"]
  };
  const el = document.getElementById('schema-person');
  if(el){ el.textContent = JSON.stringify(schema); }
})();
