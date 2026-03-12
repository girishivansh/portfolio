// Cursor
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
let cx=0,cy=0;
document.addEventListener('mousemove',e=>{
  cx=e.clientX;cy=e.clientY;
  cur.style.left=cx+'px';cur.style.top=cy+'px';
  setTimeout(()=>{cur2.style.left=cx+'px';cur2.style.top=cy+'px'},90);
});
document.querySelectorAll('a,button,.ag-cell,.sk-cell,.proj-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';cur2.style.width='54px';cur2.style.height='54px';cur2.style.borderColor='rgba(255,107,43,.7)'});
  el.addEventListener('mouseleave',()=>{cur.style.width='8px';cur.style.height='8px';cur2.style.width='36px';cur2.style.height='36px';cur2.style.borderColor='rgba(255,107,43,.4)'});
});

// Particle canvas
const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
let W,H,particles=[];
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resize();
window.addEventListener('resize',()=>{resize();init()});

function init(){
  particles=[];
  const n=Math.floor(W*H/10000);
  for(let i=0;i<n;i++){
    particles.push({
      x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*1.4+.3,
      vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,
      alpha:Math.random()*.5+.1,
      orange:Math.random()>.82
    });
  }
}
init();

let mx=W/2,my=H/2;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});

function frame(){
  ctx.clearRect(0,0,W,H);
  for(let i=0;i<particles.length;i++){
    const p=particles[i];
    // Connect nearby
    for(let j=i+1;j<particles.length;j++){
      const q=particles[j];
      const dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
      if(d<130){
        ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
        ctx.strokeStyle=`rgba(56,189,248,${(1-d/130)*.1})`;
        ctx.lineWidth=.5;ctx.stroke();
      }
    }
    // Mouse pull
    const dx=mx-p.x,dy=my-p.y,d=Math.hypot(dx,dy);
    if(d<200&&d>0){p.vx+=dx/d*.015;p.vy+=dy/d*.015}
    const spd=Math.hypot(p.vx,p.vy);
    if(spd>1.3){p.vx/=spd/1.3;p.vy/=spd/1.3}
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0)p.x=W;if(p.x>W)p.x=0;
    if(p.y<0)p.y=H;if(p.y>H)p.y=0;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=p.orange?`rgba(255,107,43,${p.alpha})`:`rgba(56,189,248,${p.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(frame);
}
frame();

// Scroll reveal
const revEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      e.target.querySelectorAll('.sk-bar[data-w]').forEach(b=>{
        setTimeout(()=>{b.style.width=b.dataset.w+'%'},200);
      });
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
revEls.forEach(el=>io.observe(el));

document.querySelectorAll('.sk-bar[data-w]').forEach(bar=>{
  const cell=bar.closest('.sk-cell');
  if(!cell)return;
  const io2=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){setTimeout(()=>{bar.style.width=bar.dataset.w+'%'},300);io2.disconnect()}
    });
  },{threshold:.3});
  io2.observe(cell);
});

// Nav highlight
const secs=document.querySelectorAll('section[id]');
const nLinks=document.querySelectorAll('.nav-r a:not(.nav-cta)');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-300)cur=s.id});
  nLinks.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+cur?'var(--white)':''});
});