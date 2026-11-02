// Donutopia — tiny multiplayer donut world. Three.js (tree-shaken vendor.js) + Trystero (WebRTC over Nostr relays).
import * as T from './vendor.js';
const {joinRoom,selfId}=T;
const $=id=>document.getElementById(id);
const Q=new URLSearchParams(location.search),DEBUG=Q.has('debug'),isTouch='ontouchstart'in window||navigator.maxTouchPoints>0;
const TOKEN='DFMt2FyLpB6ekPNAzVErLXgpSnJ9CRf1VnxBAkTLpump';
// ---------------- torus math ----------------
const RM=60,RT=20,TAU=Math.PI*2;
const wrap=a=>((a%TAU)+TAU)%TAU, adiff=(a,b)=>{let d=wrap(b-a);return d>Math.PI?d-TAU:d};
const _p=new T.Vector3(),_n=new T.Vector3(),_tu=new T.Vector3(),_tv=new T.Vector3(),_f=new T.Vector3(),_r=new T.Vector3(),_b=new T.Vector3(),_m=new T.Matrix4();
function frame(u,v,h,th,out){const cu=Math.cos(u),su=Math.sin(u),cv=Math.cos(v),sv=Math.sin(v),rr=RT+h;
  out.n.set(cv*cu,sv,cv*su);out.p.set(RM*cu+rr*cv*cu,rr*sv,RM*su+rr*cv*su);out.tu.set(-su,0,cu);out.tv.set(-sv*cu,cv,-sv*su);
  out.f.copy(out.tu).multiplyScalar(Math.cos(th)).addScaledVector(out.tv,Math.sin(th));return out}
const mkF=()=>({p:new T.Vector3(),n:new T.Vector3(),tu:new T.Vector3(),tv:new T.Vector3(),f:new T.Vector3()});
function orient(obj,F){_b.copy(F.f).negate();_r.crossVectors(F.n,_b).normalize();_m.makeBasis(_r,F.n,_b);obj.quaternion.setFromRotationMatrix(_m);obj.position.copy(F.p)}
function stepOnTorus(s,dist){const rr=RT+s.h;const du=dist*Math.cos(s.th)/(RM+rr*Math.cos(s.v)),dv=dist*Math.sin(s.th)/rr;s.u=wrap(s.u+du);s.v=wrap(s.v+dv)}
// ---------------- renderer / scene ----------------
const canvas=$('gl');const renderer=new T.WebGLRenderer({canvas,antialias:false,powerPreference:'low-power'});
let pr=Math.min(1.5,devicePixelRatio||1),prMax=pr;renderer.setPixelRatio(pr);renderer.outputColorSpace=T.SRGBColorSpace;
const scene=new T.Scene();const camera=new T.PerspectiveCamera(65,1,.3,700);
function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix()}addEventListener('resize',resize);resize();
scene.fog=new T.Fog(0x2a2060,60,260);const hemi=new T.HemisphereLight(0xbfd8ff,0x5a3a7a,1.1);scene.add(hemi);const sun=new T.DirectionalLight(0xfff0d8,1.2);sun.position.set(80,120,40);scene.add(sun);
// torus planet with vertex colors
{const g=new T.TorusGeometry(RM,RT,48,128);const pos=g.attributes.position,col=new Float32Array(pos.count*3),c=new T.Color();
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);const n=Math.sin(x*.15)*Math.cos(y*.21)+Math.sin(z*.13+y*.1);c.setHSL(.3+n*.04+(y>0?0:.05),.55,.42+n*.06);col.set([c.r,c.g,c.b],i*3)}
  g.setAttribute('color',new T.BufferAttribute(col,3));g.rotateX(Math.PI/2);// TorusGeometry is in XY plane; we use XZ
  scene.add(new T.Mesh(g,new T.MeshLambertMaterial({vertexColors:true,flatShading:true})))}
// note: after rotateX(+90deg) TorusGeometry ring lies in XZ with tube y — matches frame()
const F0=mkF(),F1=mkF();const dummy=new T.Object3D();
function placeOnSurface(inst,i,u,v,h,th,scale){frame(u,v,h,th,F0);orient(dummy,F0);dummy.scale.setScalar(scale);dummy.updateMatrix();inst.setMatrixAt(i,dummy.matrix)}
let seed=12345;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
// trees (instanced low-poly pines) — 2 draw calls
{const N=160,trunk=new T.InstancedMesh(new T.CylinderGeometry(.25,.35,2,5).translate(0,1,0),new T.MeshLambertMaterial({color:0x7a4a3a}),N),top=new T.InstancedMesh(new T.ConeGeometry(1.4,3.6,6).translate(0,3.6,0),new T.MeshLambertMaterial({flatShading:true}),N);const c=new T.Color();
  for(let i=0;i<N;i++){const u=rnd()*TAU,v=rnd()*TAU,s=.7+rnd()*.9;placeOnSurface(trunk,i,u,v,0,0,s);placeOnSurface(top,i,u,v,0,0,s);top.setColorAt(i,c.setHSL(.38+rnd()*.12,.5,.32+rnd()*.12))}scene.add(trunk,top)}
// glowing mushrooms (unlit caps) + glow points
const glowPts=[];{const N=120,stem=new T.InstancedMesh(new T.CylinderGeometry(.18,.25,1.2,6).translate(0,.6,0),new T.MeshLambertMaterial({color:0xf2e8d8}),N),cap=new T.InstancedMesh(new T.SphereGeometry(.7,8,5,0,TAU,0,Math.PI/2).translate(0,1.1,0),new T.MeshBasicMaterial(),N);const c=new T.Color();
  for(let i=0;i<N;i++){const u=rnd()*TAU,v=rnd()*TAU,s=.6+rnd()*1.2;placeOnSurface(stem,i,u,v,0,0,s);placeOnSurface(cap,i,u,v,0,0,s);cap.setColorAt(i,c.setHSL([.85,.55,.15,.75][i%4],1,.62));frame(u,v,1.6*s,0,F0);glowPts.push(F0.p.x,F0.p.y,F0.p.z)}scene.add(stem,cap)}
function dotTex(soft=true){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');const g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(soft?.25:.6,'rgba(255,255,255,.7)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,64,64);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t}
const DOT=dotTex();
{const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(glowPts,3));scene.add(new T.Points(g,new T.PointsMaterial({size:3.2,map:DOT,color:0xffb8f0,transparent:true,depthWrite:false,blending:T.AdditiveBlending,opacity:.55})))}
// floating islands — 2 draw calls
const islands=[];{const N=10,rock=new T.InstancedMesh(new T.ConeGeometry(4,6,7).rotateX(Math.PI).translate(0,-3,0),new T.MeshLambertMaterial({color:0x8a6a9a,flatShading:true}),N),grass=new T.InstancedMesh(new T.CylinderGeometry(4.2,4,1,7),new T.MeshLambertMaterial({color:0x6ad08a,flatShading:true}),N);
  for(let i=0;i<N;i++){const u=i/N*TAU+rnd()*.3,v=rnd()*TAU,h=10+rnd()*14,s=.6+rnd()*.8;islands.push({u,v,h,s,ph:rnd()*6});placeOnSurface(rock,i,u,v,h,0,s);placeOnSurface(grass,i,u,v,h,0,s)}scene.add(rock,grass);islands.rock=rock;islands.grass=grass}
// sparkles (one Points)
const spark=(()=>{const N=500,a=new Float32Array(N*3);for(let i=0;i<N;i++){frame(rnd()*TAU,rnd()*TAU,2+rnd()*30,0,F0);a.set([F0.p.x,F0.p.y,F0.p.z],i*3)}const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(a,3));const m=new T.PointsMaterial({size:.9,map:DOT,color:0xfff2b0,transparent:true,depthWrite:false,blending:T.AdditiveBlending});const p=new T.Points(g,m);scene.add(p);return p})();
// stars
{const N=700,a=new Float32Array(N*3);for(let i=0;i<N;i++){const v=new T.Vector3(rnd()-.5,rnd()-.5,rnd()-.5).normalize().multiplyScalar(500);a.set([v.x,v.y,v.z],i*3)}const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(a,3));scene.add(new T.Points(g,new T.PointsMaterial({size:1.6,color:0xffffff,fog:false,sizeAttenuation:false})))}
// ---------------- Roadster ----------------
function makeRoadster(){const g=new T.Group();const sh=new T.Shape();// side profile (x = length, y = height)
  sh.moveTo(-2.3,.25);sh.quadraticCurveTo(-2.4,.75,-1.9,.8);sh.lineTo(-.7,.9);sh.quadraticCurveTo(-.2,1.45,.6,1.4);sh.quadraticCurveTo(1.3,1.3,1.6,.9);sh.quadraticCurveTo(2.35,.8,2.4,.45);sh.quadraticCurveTo(2.4,.2,2.1,.2);sh.lineTo(-2.1,.2);
  const body=new T.ExtrudeGeometry(sh,{depth:1.8,bevelEnabled:true,bevelSize:.12,bevelThickness:.12,bevelSegments:1,curveSegments:5});body.translate(0,0,-.9);body.rotateY(Math.PI/2);// length along -z
  g.add(new T.Mesh(body,MAT.white));const glass=new T.Mesh(new T.BoxGeometry(1.5,.42,1.2),MAT.glass);glass.position.set(0,1.18,-.05);glass.rotation.x=-.12;g.add(glass);
  for(const[x,z]of[[-.95,-1.4],[.95,-1.4],[-.95,1.4],[.95,1.4]]){const w=new T.Mesh(GEO.wheel,MAT.tire);w.position.set(x,.32,z);g.add(w);const j=new T.Mesh(GEO.jet,MAT.jet);j.position.set(x*.9,.02,z*.95);g.add(j);const fl=new T.Mesh(GEO.flame,MAT.flame);fl.position.set(x*.9,-.55,z*.95);fl.userData.flame=1;g.add(fl)}
  const tl=new T.Mesh(new T.BoxGeometry(1.6,.12,.05),MAT.tail);tl.position.set(0,.65,2.38);g.add(tl);return g}
const MAT={white:new T.MeshLambertMaterial({color:0xf2f4fa}),glass:new T.MeshLambertMaterial({color:0x1a2230}),tire:new T.MeshLambertMaterial({color:0x222226}),jet:new T.MeshLambertMaterial({color:0x6a7486}),flame:new T.MeshBasicMaterial({color:0x9fe8ff,transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false}),tail:new T.MeshBasicMaterial({color:0xff3344})};
const GEO={wheel:new T.CylinderGeometry(.34,.34,.25,10).rotateZ(Math.PI/2),jet:new T.CylinderGeometry(.18,.24,.25,8),flame:new T.ConeGeometry(.17,1,8).rotateX(Math.PI)};
const cars=[];for(let i=0;i<5;i++){const m=makeRoadster();scene.add(m);cars.push({id:i,mesh:m,u:i/5*TAU+.25,v:Math.PI/2+.2*(i%2),h:0,th:0,vel:0,driver:null,t:0})}
// smoke particles (pooled Points)
const SMK=400,smP=new Float32Array(SMK*3),smV=new Float32Array(SMK*3),smL=new Float32Array(SMK);let smI=0;
const smokeGeo=new T.BufferGeometry();smokeGeo.setAttribute('position',new T.BufferAttribute(smP,3));const smoke=new T.Points(smokeGeo,new T.PointsMaterial({size:2.6,map:DOT,color:0xe8e8f4,transparent:true,opacity:.35,depthWrite:false}));smoke.frustumCulled=false;scene.add(smoke);
for(let i=0;i<SMK;i++)smP[i*3+1]=-9999;
function emitSmoke(p,n,down){const i=smI++%SMK;smP.set([p.x,p.y,p.z],i*3);smV.set([(Math.random()-.5)*2-down.x*3,(Math.random()-.5)*2-down.y*3,(Math.random()-.5)*2-down.z*3].map((v,k)=>v+n[['x','y','z'][k]]*1.2),i*3);smL[i]=1+Math.random()*.8}
function updSmoke(dt){for(let i=0;i<SMK;i++){if(smL[i]<=0)continue;smL[i]-=dt;const k=i*3;smP[k]+=smV[k]*dt;smP[k+1]+=smV[k+1]*dt;smP[k+2]+=smV[k+2]*dt;smV[k]*=.96;smV[k+1]*=.96;smV[k+2]*=.96;if(smL[i]<=0)smP[k+1]=-9999}smokeGeo.attributes.position.needsUpdate=true}
// ---------------- avatars ----------------
const LIMB=new T.CylinderGeometry(.06,.06,1,5).translate(0,-.5,0),TORSO=new T.CylinderGeometry(.07,.07,1.1,5);
function smileyTex(name,hue){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.fillStyle=`hsl(${hue},80%,60%)`;x.beginPath();x.arc(64,64,60,0,TAU);x.fill();x.fillStyle='#222';x.beginPath();x.arc(44,52,8,0,TAU);x.arc(84,52,8,0,TAU);x.fill();x.lineWidth=7;x.strokeStyle='#222';x.beginPath();x.arc(64,66,30,.2*Math.PI,.8*Math.PI);x.stroke();const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t}
function circleTex(img){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.beginPath();x.arc(64,64,62,0,TAU);x.clip();x.drawImage(img,0,0,128,128);x.lineWidth=8;x.strokeStyle='#fff';x.beginPath();x.arc(64,64,60,0,TAU);x.stroke();const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t}
function tagTex(text,sub){const c=document.createElement('canvas');c.width=256;c.height=64;const x=c.getContext('2d');x.font='bold 26px system-ui,sans-serif';x.textAlign='center';x.textBaseline='middle';const w=Math.min(250,x.measureText(text).width+24);x.fillStyle='rgba(20,14,50,.65)';x.beginPath();x.roundRect?x.roundRect(128-w/2,4,w,32,14):x.rect(128-w/2,4,w,32);x.fill();x.fillStyle='#fff';x.fillText(text,128,21);if(sub){x.font='18px system-ui';x.fillStyle='#ffd86b';x.fillText(sub.slice(0,26),128,50)}const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t}
const hueOf=s=>{let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))%360;return h};
function makeAvatar(name,handle){const g=new T.Group(),hue=hueOf(name||'x'),mat=new T.MeshLambertMaterial({color:new T.Color().setHSL(hue/360,.6,.85)});
  const torso=new T.Mesh(TORSO,mat);torso.position.y=1.45;g.add(torso);const mk=(x,y)=>{const p=new T.Group();p.position.set(x,y,0);const l=new T.Mesh(LIMB,mat);p.add(l);g.add(p);return p};
  const legL=mk(-.12,.9),legR=mk(.12,.9),armL=mk(-.1,1.95),armR=mk(.1,1.95);legL.children[0].scale.y=legR.children[0].scale.y=.9;armL.children[0].scale.y=armR.children[0].scale.y=.75;
  const head=new T.Sprite(new T.SpriteMaterial({map:smileyTex(name,hue)}));head.scale.set(.9,.9,1);head.position.y=2.45;g.add(head);
  const tag=new T.Sprite(new T.SpriteMaterial({map:tagTex(name||'guest'),depthTest:false,transparent:true}));tag.scale.set(2.4,.6,1);tag.position.y=3.35;tag.renderOrder=10;g.add(tag);
  if(handle){const img=new Image();img.crossOrigin='anonymous';img.onload=()=>{try{head.material.map=circleTex(img);head.material.needsUpdate=true}catch(e){}};img.src='https://unavatar.io/x/'+encodeURIComponent(handle)+'?fallback=false'}
  scene.add(g);return{g,legL,legR,armL,armR,head,tag,name,setTag(s,sub){tag.material.map.dispose();tag.material.map=tagTex(s,sub)},anim(ph,amp){legL.rotation.x=Math.sin(ph)*amp;legR.rotation.x=-Math.sin(ph)*amp;armL.rotation.x=-Math.sin(ph)*amp*.8;armR.rotation.x=Math.sin(ph)*amp*.8},dispose(){scene.remove(g)}}}
// ---------------- LIVE MARKET: candlestick sky-chart + real-time trades ----------------
// Sources (all keyless + CORS-ok): Solana public RPC websocket logsSubscribe(mentions mint) -> getTransaction parse (~1-3s),
// GeckoTerminal pool /trades (poll, ~1-2 min indexing lag) for seeding + fallback, GT minute OHLCV for history, DexScreener for pools/price.
const DBG={notif:0,sigs:0,tx:0,notx:0,skip:0,why:{}};const chart={price:null,sym:'FTR',src:'',ok:false,status:'starting',solUsd:150,pools:[],lat:[],nTrades:0,live:0};
const RPC_HTTP='https://api.mainnet-beta.solana.com',RPC_WS='wss://api.mainnet-beta.solana.com',WSOL='So11111111111111111111111111111111111111112',USDC='EPjFWvLYqtw6BdJrcp7yjz9B6YXcJ9oXBUXZAx2dQKgP';
const IVS=[1,5,15,60];let ivIdx=+(localStorage.dtIv??1);if(!(ivIdx>=0&&ivIdx<4))ivIdx=1;
const trades=[],seen=new Set(),minuteOH=[];// trades: {t(ms),p,usd,sol,side,w,sig,src}
const NC=isTouch?60:90;// candles shown
// --- 3D chart objects ---
const CH={R:72,y0:-8,H:18,arc:1.7,a0:-.85,n:90};const chartG=new T.Group();scene.add(chartG);let chartInit=false;
const boxG=new T.BoxGeometry(1,1,1);
const bodies=new T.InstancedMesh(boxG,new T.MeshBasicMaterial({fog:false}),NC),wicks=new T.InstancedMesh(boxG,new T.MeshBasicMaterial({fog:false}),NC),glow=new T.InstancedMesh(boxG,new T.MeshBasicMaterial({fog:false,transparent:true,opacity:.22,blending:T.AdditiveBlending,depthWrite:false}),NC);
for(const m of[bodies,wicks,glow]){m.count=0;m.frustumCulled=false;m.setColorAt(0,new T.Color());chartG.add(m)}
const priceRing=new T.Mesh(new T.TorusGeometry(CH.R,.08,4,96,CH.arc).rotateX(Math.PI/2),new T.MeshBasicMaterial({color:0xffe27a,fog:false,transparent:true,opacity:.75}));priceRing.rotation.y=CH.arc/2+Math.PI/2;chartG.add(priceRing);
const frameMat=new T.MeshBasicMaterial({color:0x8a7cff,fog:false,transparent:true,opacity:.25});const gridRings=[0,.5,1].map(()=>{const m=new T.Mesh(new T.TorusGeometry(CH.R+1,.04,3,96,CH.arc).rotateX(Math.PI/2),frameMat);m.rotation.y=CH.arc/2+Math.PI/2;chartG.add(m);return m});
// fit the arc to the horizontal FOV; in narrow (portrait) views show fewer candles and keep the live edge + price tag inside the view
function layoutChart(){const hf=2*Math.atan(Math.tan(camera.fov*Math.PI/360)*camera.aspect);// horizontal fov (rad)
  const portrait=camera.aspect<1,arc=Math.min(1.7,hf*(portrait?.75:1));CH.arc=arc;CH.n=Math.max(20,Math.min(NC,Math.round(NC*arc/1.7)));
  CH.a0=portrait?-arc*.68:-arc/2;// portrait: live edge sits ~35% right of centre, leaving room for the price tag
  CH.R=portrait?60:72;CH.H=portrait?15:18;CH.y0=portrait?-13:-8;
  const g1=new T.TorusGeometry(CH.R,.08,4,64,arc).rotateX(Math.PI/2);priceRing.geometry.dispose();priceRing.geometry=g1;priceRing.rotation.y=Math.PI/2-CH.a0;
  gridRings.forEach(m=>{m.geometry.dispose();m.geometry=new T.TorusGeometry(CH.R+1,.04,3,64,arc).rotateX(Math.PI/2);m.rotation.y=Math.PI/2-CH.a0});
  if(layoutChart.ready)rebuildCandles()}
layoutChart();addEventListener('resize',()=>setTimeout(layoutChart,50));
function txtSprite(w,h,sc){const c=document.createElement('canvas');c.width=w;c.height=h;const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;const s=new T.Sprite(new T.SpriteMaterial({map:t,transparent:true,depthWrite:false,fog:false}));s.scale.set(sc*w/h,sc,1);s.userData={c,x:c.getContext('2d'),t,txt:''};(txtSprite.parent||scene).add(s);return s}
function setTxt(s,txt,col='#fff',bg='rgba(20,10,60,.55)',font=34){if(s.userData.txt===txt+col)return;s.userData.txt=txt+col;const{c,x,t}=s.userData;x.clearRect(0,0,c.width,c.height);x.font=`bold ${font}px system-ui,sans-serif`;x.textAlign='center';x.textBaseline='middle';const w=Math.min(c.width-4,x.measureText(txt).width+28);if(bg){x.fillStyle=bg;x.beginPath();x.roundRect?x.roundRect((c.width-w)/2,4,w,c.height-8,(c.height-8)/2):x.rect((c.width-w)/2,4,w,c.height-8);x.fill()}x.fillStyle=col;x.fillText(txt,c.width/2,c.height/2+1);t.needsUpdate=true}
txtSprite.parent=chartG;const axisL=[0,1,2].map(()=>txtSprite(256,56,1.7)),priceTag=txtSprite(320,64,2.4),titleS=txtSprite(512,64,2.8);txtSprite.parent=null;chartG.traverse(o=>{if(o.material){o.material.depthTest=false;o.material.depthWrite=false;o.renderOrder=8}});
let scLo=0,scHi=1,scInit=false;
// --- candles ---
let candles=[];
function rebuildCandles(){const iv=IVS[ivIdx]*1000,m=new Map();
  if(IVS[ivIdx]>=60)for(const k of minuteOH){const b=Math.floor(k.t/iv)*iv;const c=m.get(b);if(!c)m.set(b,{t:b,o:k.o,h:k.h,l:k.l,c:k.c,v:k.v,n:0});else{c.h=Math.max(c.h,k.h);c.l=Math.min(c.l,k.l);c.c=k.c;c.v+=k.v}}
  for(const tr of trades){const b=Math.floor(tr.t/iv)*iv;let c=m.get(b);if(!c){m.set(b,{t:b,o:tr.p,h:tr.p,l:tr.p,c:tr.p,v:tr.usd,n:1});continue}if(c.n===0&&IVS[ivIdx]>=60){c.n=1}c.h=Math.max(c.h,tr.p);c.l=Math.min(c.l,tr.p);if(tr.t>=(c.lt||0)){c.c=tr.p;c.lt=tr.t}c.v+=tr.usd;c.n++}
  candles=[...m.values()].sort((a,b)=>a.t-b.t);// fill gaps (flat candles) so time axis is honest
  const out=[];for(const c of candles){const pv=out[out.length-1];if(pv)for(let t=pv.t+iv;t<c.t&&out.length<5000;t+=iv)out.push({t,o:pv.c,h:pv.c,l:pv.c,c:pv.c,v:0,gap:1});out.push(c)}
  const now=Date.now(),last=out[out.length-1];if(last)for(let t=last.t+iv;t<=now;t+=iv){out.push({t,o:last.c,h:last.c,l:last.c,c:last.c,v:0,gap:1});if(out.length>6000)break}
  candles=out.slice(-CH.n);chartDirty=true}
let chartDirty=true;const _c=new T.Color(),_v1=new T.Vector3(),_v2=new T.Vector3();
layoutChart.ready=1;
function drawChart(dt,now){const n=candles.length;if(!n)return;let lo=Infinity,hi=-Infinity;for(const c of candles){lo=Math.min(lo,c.l);hi=Math.max(hi,c.h)}const pad=(hi-lo)*.08||hi*.002||1e-9;lo-=pad;hi+=pad;
  if(!scInit){scLo=lo;scHi=hi;scInit=true}const k=Math.min(1,dt*3);scLo+=(lo-scLo)*k;scHi+=(hi-scHi)*k;
  // chart floats in the sky ahead of the player (local frame), smoothly following
  frame(me.u,me.v,0,camHeading(),F0);orient(dummy,F0);if(!chartInit){chartG.position.copy(dummy.position);chartG.quaternion.copy(dummy.quaternion);chartInit=true}else{chartG.position.lerp(dummy.position,Math.min(1,dt*1.5));chartG.quaternion.slerp(dummy.quaternion,Math.min(1,dt*1.2))}
  const step=CH.arc/(CH.n-1),bw=step*CH.R*.62;
  for(let i=0;i<n;i++){const c=candles[i],ii=i+(CH.n-n),up=c.c>=c.o;const a=CH.a0+ii*step,ca=Math.sin(a),sa=-Math.cos(a);
    const yo=CH.y0+(c.o-scLo)/(scHi-scLo)*CH.H,yc=CH.y0+(c.c-scLo)/(scHi-scLo)*CH.H,yh=CH.y0+(c.h-scLo)/(scHi-scLo)*CH.H,yl=CH.y0+(c.l-scLo)/(scHi-scLo)*CH.H;
    const bh=Math.max(.18,Math.abs(yc-yo));dummy.position.set(ca*CH.R,(yo+yc)/2,sa*CH.R);dummy.quaternion.identity();dummy.rotation.set(0,-a,0);dummy.scale.set(bw,bh,bw*.4);dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);
    dummy.scale.set(bw*1.5,bh+.8,bw*.6);dummy.updateMatrix();glow.setMatrixAt(i,dummy.matrix);
    dummy.position.y=(yh+yl)/2;dummy.scale.set(.2,Math.max(.05,yh-yl),.2);dummy.updateMatrix();wicks.setMatrixAt(i,dummy.matrix);
    const fresh=i===n-1;_c.setHex(c.gap?0x3a3f5a:up?0x2dff8f:0xff3d6a);if(fresh)_c.multiplyScalar(1+.3*Math.sin(now*.01));bodies.setColorAt(i,_c);wicks.setColorAt(i,_c);glow.setColorAt(i,_c)}
  for(const m of[bodies,wicks,glow]){m.count=n;m.instanceMatrix.needsUpdate=true;m.instanceColor.needsUpdate=true}
  // price line + labels
  const last=candles[n-1],py=CH.y0+(last.c-scLo)/(scHi-scLo)*CH.H;priceRing.position.y=py;gridRings.forEach((g,i)=>g.position.y=CH.y0+i*.5*CH.H);
  const P=(a,y,s)=>s.position.set(Math.sin(a)*CH.R,y,-Math.cos(a)*CH.R);
  P(CH.a0+CH.arc+(camera.aspect<1?.07:.07),py,priceTag);setTxt(priceTag,fmt(chart.price??last.c),last.c>=last.o?'#7dffb0':'#ff8aa5','rgba(10,6,40,.75)',36);
  axisL.forEach((s,i)=>{P(CH.a0+(camera.aspect<1?.05:-.06),CH.y0+i*.5*CH.H,s);setTxt(s,fmt(scLo+(scHi-scLo)*i/2),'#d8d0ff','rgba(10,6,40,.45)',30)});
  P(CH.a0+CH.arc/2,CH.y0+CH.H+3,titleS);setTxt(titleS,`$${chart.sym} · ${IVS[ivIdx]<60?IVS[ivIdx]+'s':'1m'} candles · ${chart.live?'LIVE':'delayed'}`,'#fff','rgba(60,20,120,.6)',34)}
// --- trade ingestion ---
function addTrade(tr,fx=true){if(!tr||!isFinite(tr.p)||tr.p<=0||seen.has(tr.sig))return;seen.add(tr.sig);trades.push(tr);if(trades.length>4000){const x=trades.splice(0,500);x.forEach(t=>seen.delete(t.sig))}
  const age=Date.now()-tr.t;if(fx&&age<180000){chart.nTrades++;tape(tr);spawnTradeFx(tr)}if(!chart.lastT||tr.t>=chart.lastT){chart.lastT=tr.t;chart.price=tr.p}
  if(tr.src==='rpc'){chart.lat.push(tr.lat);if(chart.lat.length>50)chart.lat.shift()}
  rebuildSoon()}
let rbT=0;const rebuildSoon=()=>{if(!rbT)rbT=setTimeout(()=>{rbT=0;rebuildCandles()},120)};
setInterval(()=>{if(!document.hidden)rebuildCandles()},1000);// rolls empty candles forward in time
// DexScreener: pools + price + SOL price
async function loadPools(){try{const j=await(await fetch('https://api.dexscreener.com/latest/dex/tokens/'+TOKEN)).json();const ps=(j.pairs||[]).filter(p=>p.baseToken?.address===TOKEN).sort((a,b)=>(b.liquidity?.usd||0)-(a.liquidity?.usd||0));
  chart.pools=ps.slice(0,3).map(p=>p.pairAddress);const p=ps[0];if(p){chart.sym=p.baseToken.symbol||chart.sym;if(chart.price==null)chart.price=+p.priceUsd;const sp=ps.find(q=>q.quoteToken?.address===WSOL);if(sp&&+sp.priceNative)chart.solUsd=+sp.priceUsd/+sp.priceNative}}catch(e){chart.status='DexScreener blocked'}}
// GeckoTerminal trades (seed + fallback)
async function pollGT(){for(const pool of chart.pools.slice(0,2)){try{const j=await(await fetch(`https://api.geckoterminal.com/api/v2/networks/solana/pools/${pool}/trades`)).json();
  for(const d of (j.data||[]).slice().reverse()){const a=d.attributes,buy=a.kind==='buy';const p=+(buy?a.price_to_in_usd:a.price_from_in_usd);const sol=(buy?a.from_token_address:a.to_token_address)===WSOL?+(buy?a.from_token_amount:a.to_token_amount):(+a.volume_in_usd/chart.solUsd);
    if(buy&&a.from_token_address===WSOL)chart.solUsd=+a.price_from_in_usd||chart.solUsd;addTrade({t:Date.parse(a.block_timestamp),p,usd:+a.volume_in_usd,sol,side:buy?'buy':'sell',w:a.tx_from_address,sig:a.tx_hash,src:'gt'},chart.seeded)}}catch(e){}}chart.seeded=true;chart.gtAt=Date.now();updHud()}
async function loadOHLCV(){const pool=chart.pools[0];if(!pool)return;try{const j=await(await fetch(`https://api.geckoterminal.com/api/v2/networks/solana/pools/${pool}/ohlcv/minute?aggregate=1&limit=300&currency=usd`)).json();const l=j?.data?.attributes?.ohlcv_list||[];
  minuteOH.length=0;const s=new Set();for(const c of l.slice().reverse()){if(s.has(c[0]))continue;s.add(c[0]);minuteOH.push({t:c[0]*1000,o:+c[1],h:+c[2],l:+c[3],c:+c[4],v:+c[5]})}rebuildCandles()}catch(e){}}
// Solana RPC: browser-allowed public node (api.mainnet-beta rejects browser-Origin websockets with 403).
// accountSubscribe on the top pools -> on change, getSignaturesForAddress(pool) -> getTransaction -> parse balance deltas.
const RPCS=[{ws:'wss://solana-rpc.publicnode.com',http:'https://solana-rpc.publicnode.com'}];const HTTPS=['https://solana-rpc.publicnode.com','https://api.mainnet-beta.solana.com'];
let ws=null,wsBack=2000;const subPool={},lastSig={},poolBusy={},poolAgain={},txQ=[];let txBusy=0,txLast=0,httpI=0;
const rpc=(method,params)=>fetch(HTTPS[httpI%HTTPS.length],{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method,params})}).then(r=>r.json()).then(r=>{if(r.error&&(r.error.code===429||r.error.code===-32005))httpI++;return r}).catch(e=>{httpI++;return{error:e}});
function connectRPC(){const R=RPCS[0];try{ws=new WebSocket(R.ws)}catch(e){chart.status='RPC ws blocked';return}chart.status='connecting RPC…';
  ws.onopen=()=>{wsBack=2000;chart.status='RPC live';chart.live=1;updHud();chart.pools.slice(0,3).forEach((pl,i)=>{ws.send(JSON.stringify({jsonrpc:'2.0',id:100+i,method:'accountSubscribe',params:[pl,{commitment:'confirmed',encoding:'base64'}]}));
      if(!(pl in lastSig))rpc('getSignaturesForAddress',[pl,{limit:1,commitment:'confirmed'}]).then(r=>{if(!(pl in lastSig))lastSig[pl]=r.result?.[0]?.signature||null})})};
  ws.onmessage=e=>{let d;try{d=JSON.parse(e.data)}catch(_){return}if(d.id>=100&&d.result!=null){subPool[d.result]=chart.pools[d.id-100];return}const pl=subPool[d.params?.subscription];if(pl)DBG.notif++;if(pl)onPoolChange(pl,Date.now())};
  const down=()=>{chart.live=0;chart.status='RPC reconnecting…';updHud();ws=null;setTimeout(connectRPC,wsBack);wsBack=Math.min(60000,wsBack*2)};ws.onclose=down;ws.onerror=()=>{try{ws.close()}catch(_){}}}
setInterval(()=>{if(ws&&ws.readyState===1)ws.send(JSON.stringify({jsonrpc:'2.0',id:1,method:'getHealth'}))},30000);// keepalive
async function onPoolChange(pl,at){if(poolBusy[pl]){poolAgain[pl]=at;return}poolBusy[pl]=1;try{
  const r=await rpc('getSignaturesForAddress',[pl,{limit:8,commitment:'confirmed'}]);const L=r.result||[];const out=[];if(!(pl in lastSig)){lastSig[pl]=L[0]?.signature;return}
  for(const s of L){if(s.signature===lastSig[pl])break;if(!s.err&&!seen.has(s.signature))out.push(s.signature)}if(L[0])lastSig[pl]=L[0].signature;
  DBG.sigs+=out.length;for(const sig of out.reverse()){txQ.push({sig,at});if(txQ.length>40)txQ.shift()}pumpQ()}finally{poolBusy[pl]=0;if(poolAgain[pl]){const a=poolAgain[pl];poolAgain[pl]=0;setTimeout(()=>onPoolChange(pl,a),250)}}}
function pumpQ(){if(txBusy>=3||!txQ.length)return;const gap=Date.now()-txLast;if(gap<90){setTimeout(pumpQ,90-gap);return}const q=txQ.shift();if(seen.has(q.sig)){pumpQ();return}txBusy++;txLast=Date.now();
  rpc('getTransaction',[q.sig,{maxSupportedTransactionVersion:1,commitment:'confirmed'}]).then(r=>{
    if(r.error&&Date.now()-q.at<8000){txQ.unshift(q);txLast=Date.now()+600;return}const tx=r.result;if(!tx){DBG.notx++;return}DBG.tx++;const tr=parseTx(tx,q.sig);if(!tr)DBG.skip++;if(tr){tr.lat=Date.now()-tx.blockTime*1000;tr.recvLat=q.at-tx.blockTime*1000;chart.lastRpc=Date.now();addTrade(tr)}}).finally(()=>{txBusy--;pumpQ()})}
function parseTx(tx,sig){const keys=tx.transaction.message.accountKeys.map(k=>k.pubkey||k),signer=keys[0],pre=tx.meta.preTokenBalances||[],post=tx.meta.postTokenBalances||[];
  const delta=(mint,owner)=>{let s=0;for(const b of post)if(b.mint===mint&&b.owner===owner)s+=+(b.uiTokenAmount.uiAmountString||0);for(const b of pre)if(b.mint===mint&&b.owner===owner)s-=+(b.uiTokenAmount.uiAmountString||0);return s};
  for(const pl of chart.pools.slice(0,3)){const dt=delta(TOKEN,pl);if(Math.abs(dt)<1e-6)continue;const w=delta(WSOL,pl),u=delta(USDC,pl);let sol=Math.abs(w),usd=sol*chart.solUsd;if(!sol&&u){usd=Math.abs(u);sol=usd/chart.solUsd}if(!usd)continue;
    const p=usd/Math.abs(dt);if(chart.price&&(p>chart.price*2||p<chart.price/2))continue;return{t:(tx.blockTime||Date.now()/1000)*1000,p,usd,sol,side:dt<0?'buy':'sell',w:signer,sig,src:'rpc',tok:Math.abs(dt)}}
  const dTok=delta(TOKEN,signer);if(Math.abs(dTok)<1e-6)return null;const side=dTok>0?'buy':'sell';
  // price from the counter-party pool vault (exact), else signer SOL delta
  const owners=[...new Set([...pre,...post].filter(b=>b.mint===TOKEN&&b.owner!==signer).map(b=>b.owner))];let usd=0,sol=0;
  for(const o of owners){const dt=delta(TOKEN,o);if(Math.sign(dt)!==-Math.sign(dTok)||Math.abs(dt)<Math.abs(dTok)*.5)continue;const w=delta(WSOL,o),u=delta(USDC,o);if(Math.abs(w)>1e-9){sol=Math.abs(w);usd=sol*chart.solUsd;break}if(Math.abs(u)>1e-9){usd=Math.abs(u);sol=usd/chart.solUsd;break}}
  if(!usd){const ds=(tx.meta.postBalances[0]-tx.meta.preBalances[0])/1e9+delta(WSOL,signer);sol=Math.abs(ds);usd=sol*chart.solUsd}
  const p=usd/Math.abs(dTok);if(!(p>0)||(chart.price&&(p>chart.price*3||p<chart.price/3)))return null;return{t:(tx.blockTime||Date.now()/1000)*1000,p,usd,sol,side,w:signer,sig,src:'rpc',tok:Math.abs(dTok)}}
// --- whimsical trade FX: buys = green shooting stars rising, sells = red comets falling ---
const FXN=isTouch?220:500,fxP=new Float32Array(FXN*3),fxC=new Float32Array(FXN*3),fxV=new Float32Array(FXN*3),fxL=new Float32Array(FXN);let fxI=0;
const fxGeo=new T.BufferGeometry();fxGeo.setAttribute('position',new T.BufferAttribute(fxP,3));fxGeo.setAttribute('color',new T.BufferAttribute(fxC,3));
const fxPts=new T.Points(fxGeo,new T.PointsMaterial({size:1.4,map:DOT,vertexColors:true,transparent:true,depthWrite:false,blending:T.AdditiveBlending,fog:false}));fxPts.frustumCulled=false;scene.add(fxPts);for(let i=0;i<FXN;i++)fxP[i*3+1]=-9999;
const heads=[],labels=[];for(let i=0;i<(isTouch?8:14);i++){const s=new T.Sprite(new T.SpriteMaterial({map:DOT,transparent:true,depthWrite:false,blending:T.AdditiveBlending,fog:false}));s.visible=false;scene.add(s);heads.push({s,life:0});const l=txtSprite(512,64,1.6);l.visible=false;labels.push({s:l,life:0})}
let fxBudget=0;
function spawnTradeFx(tr){if(document.hidden)return;if(fxBudget>(isTouch?3:6))return;fxBudget++;const h=heads.find(x=>x.life<=0)||heads[0],lb=labels.find(x=>x.life<=0)||labels[0];
  const big=Math.min(1,Math.log10(1+tr.usd)/4);// $10 ~ .26, $100 ~ .5, $10k ~ 1
  const buy=tr.side==='buy';const ofs=(Math.random()-.5)*1.4,dist=6+Math.random()*10;
  frame(me.u,me.v,0,camHeading()+ofs,F1);const base=F1.p.clone().addScaledVector(F1.f,dist).addScaledVector(_r.crossVectors(F1.n,F1.f).normalize(),(Math.random()-.5)*10);
  h.n=F1.n.clone();h.side=_r.clone().multiplyScalar(buy?.5:-1.2);h.buy=buy;h.big=big;h.life=h.max=buy?2.6:2.2;
  h.p0=buy?base.clone():base.clone().addScaledVector(h.n,30+big*10).addScaledVector(h.side,8);h.vel=buy?h.n.clone().multiplyScalar(14+big*10).addScaledVector(h.side,3):h.n.clone().multiplyScalar(-(16+big*8)).addScaledVector(h.side,-4);
  h.s.position.copy(h.p0);h.s.material.color.setHex(buy?0x6dffa8:0xff5a7a);const sc=1.2+big*4.5;h.s.scale.set(sc,sc,1);h.s.visible=true;
  lb.life=lb.max=3.4;lb.s.visible=true;{const ls=camera.aspect<1?.85:1.6;lb.s.scale.set(ls*8,ls,1)}lb.s.position.copy(base).addScaledVector(h.n,buy?6:3);lb.n=h.n.clone();
  setTxt(lb.s,`${buy?'▲ BUY':'▼ SELL'} ${tr.sol>=.01?tr.sol.toFixed(tr.sol<1?3:2)+' SOL':'$'+tr.usd.toFixed(2)} · ${tr.w.slice(0,4)}…${tr.w.slice(-3)}`,buy?'#9dffc4':'#ffadc0','rgba(10,6,40,.7)',30);lb.s.material.opacity=1;
  if(big>.6&&buy)for(let i=0;i<30;i++)emitFx(base.clone().addScaledVector(h.n,1),[.4,1,.6],h.n,10)}
function emitFx(p,c,n,spd){const i=fxI++%FXN,k=i*3;fxP[k]=p.x;fxP[k+1]=p.y;fxP[k+2]=p.z;fxC[k]=c[0];fxC[k+1]=c[1];fxC[k+2]=c[2];fxV[k]=(Math.random()-.5)*spd+n.x*spd*.3;fxV[k+1]=(Math.random()-.5)*spd+n.y*spd*.3;fxV[k+2]=(Math.random()-.5)*spd+n.z*spd*.3;fxL[i]=.6+Math.random()*.8}
function updFx(dt){fxBudget=Math.max(0,fxBudget-dt*2);
  for(const h of heads){if(h.life<=0)continue;h.life-=dt;h.s.position.addScaledVector(h.vel,dt);if(!h.buy)h.vel.addScaledVector(h.n,-12*dt);const n=h.big>.5?3:2;for(let j=0;j<n;j++)emitFx(h.s.position,h.buy?[.3,1,.55]:[1,.3,.4],h.n,1.5+h.big*2);
    if(h.buy&&h.life<.5&&!h.burst){h.burst=1;for(let j=0;j<12+h.big*30;j++)emitFx(h.s.position,[.6+Math.random()*.4,1,.5+Math.random()*.4],h.n,9)}
    if(!h.buy&&h.life<.25&&!h.burst){h.burst=1;for(let j=0;j<10+h.big*20;j++)emitFx(h.s.position,[1,.4+Math.random()*.3,.3],h.n,7)}
    if(h.life<=0){h.s.visible=false;h.burst=0}}
  for(const l of labels){if(l.life<=0)continue;l.life-=dt;l.s.position.addScaledVector(l.n,dt*1.2);l.s.material.opacity=Math.min(1,l.life);if(l.life<=0)l.s.visible=false}
  for(let i=0;i<FXN;i++){if(fxL[i]<=0)continue;fxL[i]-=dt;const k=i*3;fxP[k]+=fxV[k]*dt;fxP[k+1]+=fxV[k+1]*dt;fxP[k+2]+=fxV[k+2]*dt;fxV[k]*=.95;fxV[k+1]*=.95;fxV[k+2]*=.95;const f=Math.max(0,fxL[i]);fxC[k]*=.985;fxC[k+1]*=.985;fxC[k+2]*=.985;if(fxL[i]<=0)fxP[k+1]=-9999}
  fxGeo.attributes.position.needsUpdate=true;fxGeo.attributes.color.needsUpdate=true}
// --- HUD: trade tape + interval toggle ---
const mk=(tag,css,html)=>{const e=document.createElement(tag);e.style.cssText=css;if(html)e.innerHTML=html;document.body.appendChild(e);return e};
const tapeEl=mk('div','position:fixed;right:10px;top:calc(46px + var(--st,0px));width:230px;max-height:38vh;overflow:hidden;font:11px/1.45 ui-monospace,monospace;color:#fff;text-shadow:0 1px 2px #000;pointer-events:none;z-index:5;mask-image:linear-gradient(#000 70%,transparent)');
const ctl=mk('div','position:fixed;right:10px;top:calc(8px + var(--st,0px));display:flex;gap:4px;z-index:6;font:12px system-ui');
let tapeOn=localStorage.dtTape!=='0'&&!(isTouch&&innerWidth<600);
function drawCtl(){ctl.innerHTML=IVS.map((s,i)=>`<button data-i="${i}" style="padding:4px 8px;border-radius:10px;border:1px solid #fff6;background:${i===ivIdx?'#ffd86b':'#0006'};color:${i===ivIdx?'#222':'#fff'}">${s<60?s+'s':'1m'}</button>`).join('')+`<button data-t style="padding:4px 8px;border-radius:10px;border:1px solid #fff6;background:${tapeOn?'#7d6bff':'#0006'};color:#fff">tape</button>`;tapeEl.style.display=tapeOn?'':'none';if(innerWidth<600)ctl.style.top='calc(66px + var(--st,0px))'}
ctl.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.t!==undefined){tapeOn=!tapeOn;localStorage.dtTape=tapeOn?'1':'0'}else{ivIdx=+b.dataset.i;localStorage.dtIv=ivIdx;scInit=false;rebuildCandles()}drawCtl()});
['touchstart','mousedown'].forEach(ev=>ctl.addEventListener(ev,e=>e.stopPropagation(),{passive:true}));drawCtl();
addEventListener('keydown',e=>{if(document.activeElement.tagName==='INPUT')return;if(e.code==='KeyC'){ivIdx=(ivIdx+1)%4;localStorage.dtIv=ivIdx;scInit=false;rebuildCandles();drawCtl()}if(e.code==='KeyX'){tapeOn=!tapeOn;drawCtl()}});
function tape(tr){const d=document.createElement('div');const buy=tr.side==='buy';const tm=new Date(tr.t).toLocaleTimeString([],{hour12:false});
  d.innerHTML=`<span style="color:${buy?'#6dffa8':'#ff6d8a'}">${buy?'BUY ':'SELL'}</span> ${(tr.sol>=.01?tr.sol.toFixed(2)+'◎':'$'+tr.usd.toFixed(0)).padStart(7,'\u00a0')} <span style="opacity:.7">${tr.w.slice(0,4)}…${tr.w.slice(-3)} ${tm}</span>${tr.src==='gt'?' <span style="opacity:.45">gt</span>':''}`;
  tapeEl.prepend(d);while(tapeEl.children.length>40)tapeEl.lastChild.remove()}
function marketStatus(){const l=chart.lat.length?chart.lat.slice().sort((a,b)=>a-b)[chart.lat.length>>1]:null;const rate=chart.rateWin;
  return `${chart.live?'🟢 Solana RPC live (pool subs)':'🟡 '+chart.status}${l!=null?` · ~${(l/1000).toFixed(1)}s lag`:''} · GT ${chart.gtAt?'✓':'…'} · ${rate!=null?rate.toFixed(1)+' trades/min':''}`}
setInterval(()=>{const now=Date.now();chart.rateWin=trades.filter(t=>now-t.t<300000).length/5;updHud()},3000);
// --- boot ---
(async()=>{await loadPools();await Promise.all([loadOHLCV(),pollGT()]);chart.src='Solana RPC + GeckoTerminal';connectRPC();
  setInterval(()=>{if(document.hidden)return;if(!chart.live||Date.now()-(chart.lastRpc||0)>90000)pollGT();else if(Math.random()<.34)pollGT()},12000);// GT fallback every 12s when ws down, ~36s otherwise (dedup by tx sig)
  setInterval(()=>{if(!document.hidden){loadOHLCV();loadPools()}},120000)})();
const fmt=p=>p==null||!isFinite(p)?'—':p>=1?'$'+p.toFixed(4):p>=.01?'$'+p.toFixed(5):'$'+p.toPrecision(4);
function updMarket(dt,now){drawChart(dt,now);updFx(dt)}
// ---------------- local player ----------------
const me={u:.1,v:Math.PI/2,h:0,th:0,vh:0,name:'',handle:'',car:-1,ph:0,speed:0,talking:false};
let camPull=0,myAv=null,joined=false,camYaw=0,camPitch=.2,camDist=7,lastLook=-1e9;
// ---------------- input ----------------
const K={},PR={};const KM={KeyW:'f',ArrowUp:'f',KeyS:'b',ArrowDown:'b',KeyA:'l',ArrowLeft:'l',KeyD:'r',ArrowRight:'r',Space:'up',ShiftLeft:'down',ShiftRight:'down',KeyF:'car',KeyE:'car',KeyT:'talk',Digit1:'s1',Digit2:'s2',Digit3:'s3',Digit4:'s4',Digit5:'s5',KeyR:'s1'};
const chatin=$('chatin');
addEventListener('keydown',e=>{if(document.activeElement===chatin||document.activeElement.tagName==='INPUT'){if(e.key==='Enter'&&document.activeElement===chatin){sendChat(chatin.value);chatin.value='';chatin.blur();chatin.style.display='none'}if(e.key==='Escape'){chatin.blur();chatin.style.display='none'}return}
  if(e.key==='Enter'&&joined){chatin.style.display='block';setTimeout(()=>chatin.focus(),0);e.preventDefault();return}const k=KM[e.code];if(k){e.preventDefault();if(!K[k])PR[k]=1;K[k]=1}});
addEventListener('keyup',e=>{const k=KM[e.code];if(k)K[k]=0});
let drag=null;canvas.addEventListener('mousedown',e=>{drag={x:e.clientX,y:e.clientY}});addEventListener('mouseup',()=>drag=null);
addEventListener('mousemove',e=>{if(document.pointerLockElement===canvas){camYaw-=e.movementX*.004;camPitch=Math.max(-.2,Math.min(1.3,camPitch+e.movementY*.003))}else if(drag){camYaw-=(e.clientX-drag.x)*.006;camPitch=Math.max(-.2,Math.min(1.3,camPitch+(e.clientY-drag.y)*.004));drag={x:e.clientX,y:e.clientY}}});
canvas.addEventListener('dblclick',()=>{if(!isTouch)canvas.requestPointerLock?.()});addEventListener('wheel',e=>{camDist=Math.max(3,Math.min(18,camDist+e.deltaY*.01))},{passive:true});
const TPm=window.TP||{ax:0,ay:0},TPa=window.TA||{ax:0,ay:0};
const hold=(id,k)=>{const b=$(id);const on=e=>{e.preventDefault();if(!K[k])PR[k]=1;K[k]=1};const off=e=>{e.preventDefault();K[k]=0};b.addEventListener('touchstart',on,{passive:false});b.addEventListener('touchend',off,{passive:false});b.addEventListener('mousedown',on);b.addEventListener('mouseup',off);b.addEventListener('mouseleave',off)};
hold('bJump','up');hold('bDown','down');hold('bCar','car');
$('bChat').onclick=()=>{chatin.style.display='block';chatin.focus()};
// talk button: tap toggles (mobile-friendly); T key is push-to-talk
let talkToggle=false;$('bTalk').addEventListener('click',()=>{talkToggle=!talkToggle;ensureMic()});
const GP={lx:0,ly:0,rx:0,ry:0,up:0,down:0,talk:0};let gpPrev=[];
function pollPad(){const ps=navigator.getGamepads?navigator.getGamepads():[];let p=null;for(const q of ps)if(q&&q.connected){p=q;break}if(!p){Object.assign(GP,{lx:0,ly:0,rx:0,ry:0,up:0,down:0,talk:0});return}const dz=v=>Math.abs(v)<.2?0:v,b=i=>p.buttons[i]&&p.buttons[i].pressed;
  GP.lx=dz(p.axes[0]);GP.ly=dz(p.axes[1]);GP.rx=dz(p.axes[2]||0);GP.ry=dz(p.axes[3]||0);GP.up=b(0);GP.down=b(1)||b(6);GP.talk=b(4);if(b(0)&&!gpPrev[0])PR.up=1;if(b(3)&&!gpPrev[3])PR.car=1;if(b(2)&&!gpPrev[2])PR['s'+(1+((stSeq)%5))]=1;gpPrev=[b(0),b(1),b(2),b(3)]}
// ---------------- networking (Trystero/Nostr) ----------------
const peers={},MAXP=8;let room=null,actState,actChat,actHello,netStatus='offline',micStream=null,AC=null;
function roomName(){return (location.hash.slice(1)||'lobby').toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,32)||'lobby'}
function connect(){netStatus='connecting…';try{room=joinRoom({appId:'donutopia-world-v1',relayRedundancy:4},roomName())}catch(e){netStatus='p2p failed: '+e.message;return}
  actState=room.makeAction('st');actChat=room.makeAction('chat');actHello=room.makeAction('hi');
  room.onPeerJoin=id=>{if(Object.keys(peers).length>=MAXP)return;peers[id]={id,av:null,s:null,t:null,name:'…',handle:''};actHello.send({n:me.name,h:me.handle},{target:id});if(micStream)room.addStream(micStream,{target:id});netStatus='connected';updHud();sys('a traveler arrived')};
  room.onPeerLeave=id=>{const p=peers[id];if(!p)return;p.av&&p.av.dispose();if(p.audio){p.audio.el.srcObject=null;try{p.audio.src.disconnect()}catch(e){}}delete peers[id];updHud();sys((p.name||'someone')+' left')};
  actHello.onMessage=(d,{peerId})=>{const p=peers[peerId];if(!p)return;p.name=String(d.n||'guest').slice(0,24);p.handle=String(d.h||'').replace(/[^A-Za-z0-9_]/g,'').slice(0,15);if(p.av)p.av.dispose();p.av=makeAvatar(p.name,p.handle);sys(p.name+' joined')};
  actState.onMessage=(d,{peerId})=>{const p=peers[peerId];if(!p)return;if(d.cs&&d.cs.sq&&d.car===d.cs.id&&cars[d.cs.id]){const c=cars[d.cs.id];if(p.stSeen===undefined)p.stSeen=Math.max(0,...d.cs.sq.map(x=>x[0]));else for(const[sq,ty]of d.cs.sq)if(sq>p.stSeen){p.stSeen=sq;(c.stQ=c.stQ||[]).push([ty,sq]);sys(`${p.name}: ${STUNTS[ty].n}!`)}}if(!p.s){p.s={...d};}p.t=d;if(d.cs&&cars[d.cs.id]){const c=cars[d.cs.id];if(d.car===c.id){c.driver=peerId}else if(c.driver===peerId)c.driver=null;if(c.driver!==selfId){c.net=d.cs}}};
  actChat.onMessage=(d,{peerId})=>{const p=peers[peerId];if(!p)return;const t=String(d.t||'').slice(0,140);addChat(p.name,t);p.bubble={t,until:performance.now()+6000};p.av&&p.av.setTag(p.name,t)};
  room.onPeerStream=(stream,peerId)=>{const p=peers[peerId];if(!p)return;attachAudio(p,stream)};
  setInterval(sendState,100);netStatus='waiting for peers…'}
let lastCar=-1;function sendState(){if(!actState||!joined)return;const s={u:+me.u.toFixed(4),v:+me.v.toFixed(4),h:+me.h.toFixed(2),th:+me.th.toFixed(3),car:me.car,sp:+me.speed.toFixed(2),tk:me.talking?1:0};const c=cars[me.car>=0?me.car:lastCar];if(c)s.cs={id:c.id,u:+c.u.toFixed(4),v:+c.v.toFixed(4),h:+(c.h+(me.car===c.id?c.hopH||0:0)).toFixed(2),th:+c.th.toFixed(3),sq:stHist.filter(x=>performance.now()-x[2]<4000).map(x=>[x[0],x[1]])};s.sc=me.score;actState.send(s).catch(()=>{})}
function sendChat(t){t=t.trim();if(!t)return;addChat(me.name||'you',t);actChat&&actChat.send({t}).catch(()=>{});myAv&&myAv.setTag(me.name||'you',t);me.bubbleUntil=performance.now()+6000}
function addChat(n,t){const d=document.createElement('div');d.textContent=n+': '+t;$('chatlog').appendChild(d);while($('chatlog').children.length>6)$('chatlog').firstChild.remove()}
function sys(t){const d=document.createElement('div');d.style.opacity=.8;d.textContent='✦ '+t;$('chatlog').appendChild(d);while($('chatlog').children.length>6)$('chatlog').firstChild.remove()}
// voice
async function ensureMic(){if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)()}if(AC.state==='suspended')AC.resume();if(micStream)return;
  try{micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true},video:false});micStream.getAudioTracks().forEach(t=>t.enabled=false);if(room)room.addStream(micStream);sys('mic ready — hold T or tap 🎙️')}catch(e){sys('mic unavailable: '+(e.name||e.message));talkToggle=false}}
function attachAudio(p,stream){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();const el=new Audio();el.srcObject=stream;el.muted=true;el.play().catch(()=>{});const src=AC.createMediaStreamSource(stream),gain=AC.createGain();gain.gain.value=0;src.connect(gain).connect(AC.destination);p.audio={el,src,gain}}
addEventListener('pointerdown',()=>{if(AC&&AC.state==='suspended')AC.resume()},{passive:true});
// ---------------- HUD ----------------
function updHud(){const n=Object.keys(peers).length;$('hud').innerHTML=`<b>Donutopia</b> · room <b>#${roomName()}</b> · ${n+(joined?1:0)} online <span style="opacity:.7">(${netStatus})</span><br>$${chart.sym} <span id="price">${fmt(chart.price)}</span>${me.talking?' · 🎙️ <b style="color:#ff6d8a">LIVE</b>':''}${me.car>=0?' · 🏆 '+me.score:''}<br><span style="opacity:.8">${marketStatus()}</span>`}
$('help').innerHTML=isTouch?'':'WASD move · Space jump · F car · 1-5 stunts · ? help';Object.assign($('help').style,{top:'auto',right:'auto',left:'10px',bottom:'calc(14px + var(--sb,0px))',textAlign:'left'});
// ---------------- join ----------------
$('roomname').value=roomName();$('handle').value=localStorage.dtHandle||'';
$('go').onclick=()=>{if(!localStorage.dtHelp)setTimeout(()=>showHelp(true),400);const h=$('handle').value.trim().replace(/^@/,'').replace(/[^A-Za-z0-9_]/g,'').slice(0,15);const rn=$('roomname').value.trim().toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,32)||'lobby';if(rn!==roomName())location.hash=rn;
  localStorage.dtHandle=h;me.handle=h;me.name=h?'@'+h:'guest'+Math.floor(Math.random()*900+100);myAv=makeAvatar(me.name,h);$('join').style.display='none';joined=true;if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}connect();updHud()};
if(Q.has('autojoin'))setTimeout(()=>$('go').click(),50);
// ---------------- update ----------------
const clock=new T.Clock();let tAcc=0,frames=0,ftAvg=16,running=true,raf=0;
function update(dt,now){pollPad();
  const mx=Math.max(-1,Math.min(1,(K.r?1:0)-(K.l?1:0)+TPm.ax+GP.lx)),my=Math.max(-1,Math.min(1,(K.f?1:0)-(K.b?1:0)-TPm.ay-GP.ly));
  const lookIn=Math.abs(TPa.ax)+Math.abs(GP.rx)+Math.abs(TPa.ay)+Math.abs(GP.ry);if(lookIn>.02||drag||document.pointerLockElement===canvas)lastLook=now;camYaw-=(TPa.ax*2.2+GP.rx*2.2)*dt;camPitch=Math.max(-.2,Math.min(1.3,camPitch+(TPa.ay*1.5+GP.ry*1.5)*dt));
  if(now-lastLook>900){camYaw=adiff(0,camYaw)*Math.pow(.06,dt);camPitch+=(.2-camPitch)*Math.min(1,dt*1.5)}// camera springs back behind you
  me.talking=!!(K.talk||GP.talk||talkToggle)&&!!micStream;if(K.talk&&!micStream)ensureMic();if(micStream)micStream.getAudioTracks().forEach(t=>t.enabled=me.talking);$('bTalk').classList.toggle('on',me.talking);
  if(PR.car&&joined)toggleCar();stuntInput();if(frames%6===0)updPrompt();
  if(me.car>=0){const c=cars[me.car];// arcade flight
    const turn=mx*1.8*dt;c.th=wrap(c.th-turn);c.vel+=(my*28-c.vel)*Math.min(1,dt*1.5);
    const vUp=(K.up||GP.up?1:0)-(K.down||GP.down?1:0);c.h=Math.max(.6,Math.min(40,c.h+vUp*12*dt));if(!vUp&&c.h>.6)c.h+=Math.sin(now*.003)*.01;
    c.hopV=(c.hopV||0)-26*dt;c.hopH=Math.max(0,(c.hopH||0)+c.hopV*dt);if(c.hopH===0)c.hopV=Math.max(0,c.hopV);
    stepOnTorus(c,c.vel*dt);me.u=c.u;me.v=c.v;me.h=c.h+c.hopH;me.th=c.th;me.speed=Math.abs(c.vel)}
  else{// walking = driving: stick/keys X turns, Y moves forward/back; camera follows behind
    me.th=wrap(me.th-mx*(1.7+.5*Math.min(1,Math.abs(me.wv||0)/7))*dt);me.wv=(me.wv||0)+((my>0?my*7.5:my*3.5)-(me.wv||0))*Math.min(1,dt*(Math.abs(my)>.05?6:9));const sp=me.wv;me.speed=Math.abs(sp);stepOnTorus(me,sp*dt);if(PR.up&&me.h<=0.01){me.vh=7.5}me.vh-=20*dt;me.h=Math.max(0,me.h+me.vh*dt);if(me.h===0)me.vh=0;me.ph+=Math.abs(sp)*dt*1.8}
  // my avatar
  if(myAv){frame(me.u,me.v,me.car>=0?me.h+.5:me.h,me.th,F0);orient(myAv.g,F0);myAv.anim(me.ph,me.car>=0?0:Math.min(.8,me.speed*.12));if(me.bubbleUntil&&now>me.bubbleUntil){me.bubbleUntil=0;myAv.setTag(me.name)}}
  // peers interpolate
  for(const id in peers){const p=peers[id];if(!p.t||!p.av)continue;if(!p.s)p.s={...p.t};const k=Math.min(1,dt*10);p.s.u=wrap(p.s.u+adiff(p.s.u,p.t.u)*k);p.s.v=wrap(p.s.v+adiff(p.s.v,p.t.v)*k);p.s.h+=(p.t.h-p.s.h)*k;p.s.th=wrap(p.s.th+adiff(p.s.th,p.t.th)*k);p.ph=(p.ph||0)+(p.t.sp||0)*dt*1.8;
    frame(p.s.u,p.s.v,p.t.car>=0?p.s.h+.5:p.s.h,p.s.th,F1);orient(p.av.g,F1);p.av.anim(p.ph,p.t.car>=0?0:Math.min(.8,(p.t.sp||0)*.12));if(p.bubble&&now>p.bubble.until){p.bubble=null;p.av.setTag(p.name)}
    if(p.audio){const du=Math.abs(adiff(me.u,p.s.u)),dv=Math.abs(adiff(me.v,p.s.v)),vm=me.v+adiff(me.v,p.s.v)/2;const d=Math.hypot((RM+RT*Math.cos(vm))*du,RT*dv,me.h-p.s.h);p.audio.gain.gain.value=Math.max(0,Math.min(1,1-(d-4)/36))}
    if(p.t.car>=0&&cars[p.t.car]){const c=cars[p.t.car];c.driver=id;if(p.t.cs)c.net=p.t.cs}}
  // cars
  for(const c of cars){if(c.driver&&c.driver!==selfId&&c.net){const k=Math.min(1,dt*10);c.u=wrap(c.u+adiff(c.u,c.net.u)*k);c.v=wrap(c.v+adiff(c.v,c.net.v)*k);c.h+=(c.net.h-c.h)*k;c.th=wrap(c.th+adiff(c.th,c.net.th)*k)}else if(!c.driver&&c.net){c.u=c.net.u;c.v=c.net.v;c.h=c.net.h;c.th=c.net.th;c.net=null}
    if(c.driver&&c.driver!==selfId&&!peers[c.driver])c.driver=null;
    const hov=c.h>.7||c.driver;const hh=c.h+(c.driver===selfId?c.hopH||0:0)+(hov?Math.sin(now*.004+c.id)*.08:0);frame(c.u,c.v,hh,c.th,F0);orient(c.mesh,F0);
    if(!c.st&&c.stQ&&c.stQ.length){const[ty,sq]=c.stQ.shift();startStunt(c,ty,sq,false)}
    {const q=stuntQuat(c,dt);if(c.st||q.w<.9999){_off.set(0,.8,0).applyQuaternion(c.mesh.quaternion);c.mesh.quaternion.multiply(q);_off2.set(0,.8,0).applyQuaternion(c.mesh.quaternion);c.mesh.position.add(_off).sub(_off2)}}
    if(c.st&&Math.random()<.7){const j=c.mesh.children.filter(x=>x.userData.flame)[Math.random()*4|0];j.getWorldPosition(_p);emitSmoke(_p,F0.n,F0.n)}
    for(const ch of c.mesh.children)if(ch.userData.flame){ch.visible=!!hov;ch.scale.y=.7+Math.random()*.6}
    if(hov&&Math.random()<(c.h<8?.9:.35)){const j=c.mesh.children.filter(x=>x.userData.flame)[Math.random()*4|0];j.getWorldPosition(_p);emitSmoke(_p,F0.n,F0.n)}}
  for(const c of cars){if(!c.driver)continue;const av=c.driver===selfId?myAv:peers[c.driver]&&peers[c.driver].av;if(!av)continue;av.g.quaternion.copy(c.mesh.quaternion);av.g.position.copy(c.mesh.position).add(_off.set(0,.45,.2).applyQuaternion(c.mesh.quaternion))}
  updSmoke(dt);
  // islands bob (cheap: update a couple per frame)
  {const i=frames%islands.length,is=islands[i];placeOnSurface(islands.rock,i,is.u,is.v,is.h+Math.sin(now*.0006+is.ph)*1.2,0,is.s);placeOnSurface(islands.grass,i,is.u,is.v,is.h+Math.sin(now*.0006+is.ph)*1.2,0,is.s);islands.rock.instanceMatrix.needsUpdate=islands.grass.instanceMatrix.needsUpdate=true}
  spark.rotation.y+=dt*.01;spark.material.size=.8+Math.sin(now*.003)*.25;
  // day-night tint (~4 min cycle)
  const day=.5+.5*Math.sin(now/1000/240*TAU);const bg=new T.Color().setHSL(.7-day*.12,.55,.08+day*.22);scene.background=bg;scene.fog.color.copy(bg);hemi.intensity=.6+day*.8;sun.intensity=.3+day*1.1;
  // price sign floats above spawn, faces camera
  updMarket(dt,now);
  // camera
  const myC=me.car>=0?cars[me.car]:null,stunting=myC&&(myC.st||myC.hopH>1);camPull+=((stunting?(isTouch?7:4):0)+(myC?1.5:0)-camPull)*Math.min(1,dt*(stunting?4:1.5));const cd=camDist+camPull;
  frame(me.u,me.v,me.h,camHeading(),F0);const back=_b.copy(F0.f).negate();const off=new T.Vector3().copy(back).multiplyScalar(Math.cos(camPitch)*cd).addScaledVector(F0.n,Math.sin(camPitch)*cd+1.8+camPull*.35);
  const target=new T.Vector3().copy(F0.p).addScaledVector(F0.n,3.4);camera.position.lerp(_p.copy(target).add(off),Math.min(1,dt*(stunting?3.5:7)));camera.up.copy(F0.n);camera.lookAt(target);
  for(const k in PR)delete PR[k]}
function camHeading(){return wrap(me.th+camYaw)}
function toggleCar(){if(me.car>=0){const c=cars[me.car];c.driver=null;c.vel=0;lastCar=c.id;me.car=-1;me.h=c.h;me.vh=0;frame(c.u,c.v,0,c.th+Math.PI/2,F0);stepOnTorus(me,0);sys('hopped out');return}
  frame(me.u,me.v,me.h,0,F0);let best=null,bd=6;for(const c of cars){if(c.driver&&c.driver!==selfId)continue;frame(c.u,c.v,c.h,0,F1);const d=F0.p.distanceTo(F1.p);if(d<bd){bd=d;best=c}}
  if(best){me.car=best.id;best.driver=selfId;lastCar=best.id;best.th=me.th;camYaw=0;sys(isTouch?'Roadster! ⬆ Up / ⬇ Down · ✨ Stunt (tap = launch, swipe = flips)':'Roadster! Space/Shift altitude · 1-5 stunts · F exit')}else sys('walk closer to a Roadster (look for the white cars)')}
// ---------------- STUNTS ----------------
const STUNTS={1:{n:'THRUSTER LAUNCH',pts:50,dur:.6},2:{n:'KICKFLIP',pts:150,dur:.75},3:{n:'BARREL ROLL',pts:200,dur:1.1},4:{n:'BACKFLIP',pts:250,dur:.95},5:{n:'360 SPIN',pts:120,dur:.8}};
let stSeq=0,combo=0,comboUntil=0;me.score=+(localStorage.dtScore||0);
const popEl=document.createElement('div');popEl.style.cssText='position:fixed;left:50%;top:22%;transform:translateX(-50%);font:900 30px system-ui,sans-serif;color:#fff;text-shadow:0 0 12px #ff4dd8,0 3px 0 #2a1060;pointer-events:none;z-index:7;text-align:center;opacity:0;transition:opacity .25s';document.body.appendChild(popEl);let popT=0;
function popup(txt,sub){popEl.innerHTML=txt+(sub?`<div style="font-size:16px;color:#ffd86b">${sub}</div>`:'');popEl.style.opacity=1;popEl.style.transform='translateX(-50%) scale(1.25)';setTimeout(()=>popEl.style.transform='translateX(-50%) scale(1)',90);clearTimeout(popT);popT=setTimeout(()=>popEl.style.opacity=0,1400)}
const stHist=[];
function startStunt(c,type,seq,local){const S=STUNTS[type];if(!S)return;if(local&&c.st&&c.st!==1&&c.stT<STUNTS[c.st].dur*.6)return;
  c.st=type;c.stT=0;c.stSeq=seq;c.stLast=type;if(local){stHist.push([seq,type,performance.now()]);if(stHist.length>12)stHist.shift()}c.stDir=Math.random()<.5?1:-1;
  if(local){if(type===1||c.hopH<.5)c.hopV=Math.max(c.hopV||0,type===1?16:11);for(let i=0;i<26;i++){const j=c.mesh.children.filter(x=>x.userData.flame)[i%4];j.getWorldPosition(_p);frame(c.u,c.v,0,0,F1);emitSmoke(_p,F1.n,F1.n)}
    const now=performance.now();combo=now<comboUntil||c.hopH>1?combo+1:1;const pts=S.pts*combo;me.score+=pts;localStorage.dtScore=me.score;comboUntil=now+S.dur*1000+1500;
    popup(S.n+'!',`+${pts}${combo>1?' · COMBO ×'+combo:''} · score ${me.score}`);updHud()}}
const _q=new T.Quaternion(),_q2=new T.Quaternion(),_ax=new T.Vector3(),_off=new T.Vector3(),_off2=new T.Vector3();
function stuntQuat(c,dt){_q.identity();if(!c.st)return _q;c.stT+=dt;const S=STUNTS[c.st],k=Math.min(1,c.stT/S.dur),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,A=e*TAU;
  if(c.st===2)_q.setFromAxisAngle(_ax.set(0,0,1),A*c.stDir);else if(c.st===3)_q.setFromAxisAngle(_ax.set(0,0,1),A*c.stDir);else if(c.st===4)_q.setFromAxisAngle(_ax.set(1,0,0),A);else if(c.st===5)_q.setFromAxisAngle(_ax.set(0,1,0),A*c.stDir);else if(c.st===1)_q.setFromAxisAngle(_ax.set(1,0,0),Math.sin(k*Math.PI)*.35);
  if(k>=1)c.st=0;return _q}
function stuntInput(){if(me.car<0)return;const c=cars[me.car];for(let i=1;i<=5;i++)if(PR['s'+i]){stSeq++;startStunt(c,i,stSeq,true)}}
// mobile Stunt button: tap = launch (or 360 spin if airborne), swipe up = backflip, down = kickflip, left/right = barrel roll
{const b=document.getElementById('bStunt');let s=null;const st=(x,y)=>{s={x,y,t:performance.now()}};const en=(x,y)=>{if(!s)return;const dx=x-s.x,dy=y-s.y,d=Math.hypot(dx,dy);let ty;if(d<34&&performance.now()-s.t<600||d<20){const c=cars[me.car];ty=c&&c.hopH>1.2?5:1}else if(Math.abs(dy)>Math.abs(dx))ty=dy<0?4:2;else ty=3;PR['s'+ty]=1;s=null};
  b.addEventListener('touchstart',e=>{e.preventDefault();const t=e.changedTouches[0];st(t.clientX,t.clientY)},{passive:false});b.addEventListener('touchend',e=>{e.preventDefault();const t=e.changedTouches[0];en(t.clientX,t.clientY)},{passive:false});
  b.addEventListener('mousedown',e=>st(e.clientX,e.clientY));b.addEventListener('mouseup',e=>en(e.clientX,e.clientY))}
// ---------------- help overlay + contextual prompt ----------------
const helpEl=document.getElementById('howto');
function showHelp(on){helpEl.style.display=on?'flex':'none';if(!on)localStorage.dtHelp='1'}
helpEl.addEventListener('click',()=>showHelp(false));document.getElementById('bHelp').onclick=()=>showHelp(true);
const promptEl=document.getElementById('prompt');promptEl.onclick=()=>{PR.car=1};let nearCar=null;
function updPrompt(){let s='';if(me.car<0&&joined){frame(me.u,me.v,me.h,0,F0);let bd=6;nearCar=null;for(const c of cars){if(c.driver&&c.driver!==selfId)continue;frame(c.u,c.v,c.h,0,F1);const d=F0.p.distanceTo(F1.p);if(d<bd){bd=d;nearCar=c}}if(nearCar)s=isTouch?'🚗 Tap to enter Roadster':'🚗 Press F to enter Roadster'}
  if(promptEl.textContent!==s){promptEl.textContent=s;promptEl.style.display=s?'block':'none'}
  const inCar=me.car>=0;for(const[id,v]of[['bStunt',inCar],['bDown',inCar],['bCar',true]])document.getElementById(id).style.display=v?'':'none';
  document.querySelector('#bCar .l').textContent=inCar?'Exit':'Car';document.querySelector('#bJump .l').textContent=inCar?'Up':'Jump'}
// spawn near a car so new players find one
me.u=cars[0].u-.09;me.v=cars[0].v;
// ---------------- loop with adaptive quality ----------------
function loop(){raf=requestAnimationFrame(loop);const dt=Math.min(.05,clock.getDelta()),now=performance.now();frames++;ftAvg=ftAvg*.95+dt*1000*.05;
  if(frames%90===0){if(ftAvg>24&&pr>.6){pr=Math.max(.6,pr-.2);renderer.setPixelRatio(pr)}else if(ftAvg<15&&pr<prMax){pr=Math.min(prMax,pr+.1);renderer.setPixelRatio(pr)}}
  update(dt,now);renderer.render(scene,camera)}
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);if(AC)AC.suspend()}else{clock.getDelta();raf=requestAnimationFrame(loop);if(AC)AC.resume()}});
raf=requestAnimationFrame(loop);updHud();
// ---------------- Telegram ----------------
window.onTelegram=()=>{const tg=window.Telegram&&Telegram.WebApp;if(!tg)return;try{tg.ready();tg.expand();tg.disableVerticalSwipes&&tg.disableVerticalSwipes();const th=tg.themeParams||{};if(th.bg_color){document.body.style.background=th.bg_color;try{tg.setHeaderColor(th.bg_color);tg.setBackgroundColor(th.bg_color)}catch(e){}}
  const upd=()=>{const s=tg.contentSafeAreaInset||{},a=tg.safeAreaInset||{};document.documentElement.style.setProperty('--tg-content-safe-area-inset-top',((s.top||0)+(a.top||0))+'px');document.documentElement.style.setProperty('--tg-content-safe-area-inset-bottom',((s.bottom||0)+(a.bottom||0))+'px');resize()};
  tg.onEvent('viewportChanged',upd);tg.onEvent('safeAreaChanged',upd);tg.onEvent('contentSafeAreaChanged',upd);upd();const sp=tg.initDataUnsafe&&tg.initDataUnsafe.start_param;if(sp&&!location.hash)location.hash=sp}catch(e){}};
if(DEBUG)window.__w={me,peers,cars,chart,get net(){return netStatus},get pr(){return pr},get calls(){return renderer.info.render.calls},get tris(){return renderer.info.render.triangles},sendChat,toggleCar,K};
if(DEBUG){window.__cg=chartG;window.__cam=camera;window.__bod=bodies;window.__chart=chart;window.__dbg=DBG;window.__candles=()=>candles;window.__heads=()=>heads.some(h=>h.life>0)}
