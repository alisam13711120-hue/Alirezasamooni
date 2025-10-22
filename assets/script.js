
(function(){
  const btn = document.getElementById('theme-toggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      const dark = document.documentElement.classList.toggle('theme-light');
      // toggle is just CSS variable swap via prefers-color-scheme; simple class hook reserved
    });
  }
  // schema Person (basic)
  const schema = {
    "@context":"https://schema.org",
    "@type":"Person",
    name: "Alireza Samooni",
    jobTitle: "Power Systems Reliability & Energy Management",
    email: "mailto:alirezasamooni1371@gmail.com",
    url: location.origin + location.pathname,
    sameAs: []
  };
  const el = document.getElementById('schema-person');
  if(el){ el.textContent = JSON.stringify(schema); }
})();
