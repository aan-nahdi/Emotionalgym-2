const sections=document.querySelectorAll('.section');

function reveal(){
sections.forEach((el,i)=>{
const rect=el.getBoundingClientRect();
if(rect.top < window.innerHeight-120){
setTimeout(()=>{
el.style.opacity="1";
el.style.transform="translateY(0)";
},i*150);
}
});
}

window.addEventListener('scroll',reveal);
reveal();
