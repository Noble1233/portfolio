/* ---------- script.js ---------- */
const hamburger=document.getElementById('hamburger');
const drawer=document.getElementById('drawer');
const backdrop=document.getElementById('backdrop');
const closeDrawer=document.getElementById('closeDrawer');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();

function openDrawer(){drawer.classList.add('open');}
function closeMenu(){drawer.classList.remove('open');}
hamburger.addEventListener('click',openDrawer);
backdrop.addEventListener('click',closeMenu);
closeDrawer.addEventListener('click',closeMenu);

// Download CV
const downloadBtn=document.getElementById('downloadCv');
downloadBtn.addEventListener('click',()=>{
  const content=" Mbanta Chidera Victory\nFrontend Developer\nEmail: mbantachidera35@gmail.com\nLocation: Nigeria\nSkills: HTML, CSS, JavaScript";
  const blob=new Blob([content],{type:'text/plain'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='Chidera-Mbanta-CV.txt';
  a.click();
  URL.revokeObjectURL(a.href);
});