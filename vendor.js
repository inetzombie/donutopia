var wm=Object.defineProperty;var Tm=(n,e,t)=>e in n?wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>Tm(n,typeof e!="symbol"?e+"":e,t);var ff=0,Vl=1,df=2;var Er=1,pf=2,Rs=3,gi=0,Xt=1,wn=2,On=0,Cs=1,za=2,Gl=3,Hl=4,mf=5;var Oi=100,gf=101,_f=102,yf=103,xf=104,vf=200,Sf=201,Mf=202,bf=203,Wl=204,Xl=205,wf=206,Tf=207,Af=208,Ef=209,Rf=210,Cf=211,Pf=212,If=213,Lf=214,Oo=0,Bo=1,ko=2,ds=3,zo=4,Vo=5,Go=6,Ho=7,Va=0,Df=1,Nf=2,Tn=0,ql=1,Yl=2,Zl=3,Jl=4,$l=5,Kl=6,jl=7;var Ql=300,_i=301,Bi=302,Ga=303,Ha=304,Rr=306,Wo=1e3,Ln=1001,Xo=1002,It=1003,Uf=1004;var Cr=1005;var Dt=1006,Wa=1007;var yi=1008;var Jt=1009,eh=1010,th=1011,Ps=1012,Xa=1013,An=1014,cn=1015,En=1016,qa=1017,Ya=1018,Is=1020,nh=35902,ih=35899,sh=1021,rh=1022,ln=1023,Nn=1026,xi=1027,Za=1028,Ja=1029,vi=1030,$a=1031;var Ka=1033,Pr=33776,Ir=33777,Lr=33778,Dr=33779,ja=35840,Qa=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37488,oc=37489,Nr=37490,ac=37491,cc=37808,lc=37809,hc=37810,uc=37811,fc=37812,dc=37813,pc=37814,mc=37815,gc=37816,_c=37817,yc=37818,xc=37819,vc=37820,Sc=37821,Mc=36492,bc=36494,wc=36495,Tc=36283,Ac=36284,Ur=36285,Ec=36286;var js=2300,qo=2301,No=2302,Cl=2303,Pl=2400,Il=2401,Ll=2402;var Ff=3200;var Fr=0,Of=1,$n="",Yt="srgb",Qs="srgb-linear",er="linear",ct="srgb";var Uo=7680;var Bf=519,kf=512,zf=513,Vf=514,Rc=515,Gf=516,Hf=517,Cc=518,Wf=519,oh=35044;var ah="300 es",vn=2e3,ps=2001;function Am(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Em(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xf(){let n=ms("canvas");return n.style.display="block",n}var Pu={},gs=null;function tr(...n){let e="THREE."+n.shift();gs?gs("log",e,...n):console.log(e,...n)}function qf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=qf(n);let e="THREE."+n.shift();if(gs)gs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=qf(n);let e="THREE."+n.shift();if(gs)gs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ni(...n){let e=n.join(" ");e in Pu||(Pu[e]=!0,Xe(...n))}function Yf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Zf={[Oo]:Bo,[ko]:Go,[zo]:Ho,[ds]:Vo,[Bo]:Oo,[Go]:ko,[Ho]:zo,[Vo]:ds},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Zs=Math.PI/180,_s=180/Math.PI;function Dn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function ch(n,e){return(n%e+e)%e}function Rm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Cm(n,e,t){return n!==e?(t-n)/(e-n):0}function Js(n,e,t){return(1-t)*n+t*e}function Pm(n,e,t,i){return Js(n,e,1-Math.exp(-t*i))}function Im(n,e=1){return e-Math.abs(ch(n,e*2)-e)}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Um(n,e){return n+Math.random()*(e-n)}function Fm(n){return n*(.5-Math.random())}function Om(n){n!==void 0&&(Iu=n);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(n){return n*Zs}function km(n){return n*_s}function zm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jf={DEG2RAD:Zs,RAD2DEG:_s,generateUUID:Dn,clamp:nt,euclideanModulo:ch,mapLinear:Rm,inverseLerp:Cm,lerp:Js,damp:Pm,pingpong:Im,smoothstep:Lm,smootherstep:Dm,randInt:Nm,randFloat:Um,randFloatSpread:Fm,seededRandom:Om,degToRad:Bm,radToDeg:km,isPowerOfTwo:zm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Hm,normalize:ht,denormalize:xn},ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var de=ph,Sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],m=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||c!==h||l!==m||u!==g){let p=c*h+l*m+u*g+d*S;p<0&&(h=-h,m=-m,g=-g,S=-S,p=-p);let f=1-a;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);f=Math.sin(f*_)/M,a=Math.sin(a*_)/M,c=c*f+h*a,l=l*f+m*a,u=u*f+g*a,d=d*f+S*a}else{c=c*f+h*a,l=l*f+m*a,u=u*f+g*a,d=d*f+S*a;let _=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=_,l*=_,u*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var B=mh,sl=new B,Lu=new Sn,gh=class gh{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],S=s[0],p=s[3],f=s[6],_=s[1],M=s[4],v=s[7],w=s[2],A=s[5],P=s[8];return r[0]=o*S+a*_+c*w,r[3]=o*p+a*M+c*A,r[6]=o*f+a*v+c*P,r[1]=l*S+u*_+d*w,r[4]=l*p+u*M+d*A,r[7]=l*f+u*v+d*P,r[2]=h*S+m*_+g*w,r[5]=h*p+m*M+g*A,r[8]=h*f+m*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,m=l*r-o*c,g=t*d+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*l-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=h*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=m*S,e[7]=(i*c-l*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(e,t)),this}rotate(e){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var Ke=gh,rl=new Ke,Du=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){let n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:e,whitePoint:i,transfer:er,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var st=Wm();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yi,Yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=ms("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xm=0,ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var qm=0,al=new B,Ot=class n extends Un{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Dt,o=yi,a=ln,c=Jt,l=n.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Dn(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ql;Ot.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],S=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(m+1)/2,w=(f+1)/2,A=(u+h)/4,P=(d+S)/4,x=(g+p)/4;return M>v&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=P/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=x/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-S)/_,this.z=(h-u)/_,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var xt=_h,Zo=class extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Ot(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Zo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nr=class extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ka=class ka{constructor(e,t,i,s,r,o,a,c,l,u,d,h,m,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,m,g,S,p)}set(e,t,i,s,r,o,a,c,l,u,d,h,m,g,S,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,S=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-S*l,t[9]=-a*c,t[2]=S-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,S=l*d;t[0]=h+S*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=S+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,S=l*d;t[0]=h-S*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,S=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+S,t[1]=c*d,t[5]=S*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,S=a*l;t[0]=c*u,t[4]=S-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,S=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+S,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,Zm)}lookAt(e,t,i){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),oi.crossVectors(i,Kt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),oi.crossVectors(i,Kt)),oi.normalize(),oo.crossVectors(Kt,oi),s[0]=oi.x,s[4]=oo.x,s[8]=Kt.x,s[1]=oi.y,s[5]=oo.y,s[9]=Kt.y,s[2]=oi.z,s[6]=oo.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],S=i[6],p=i[10],f=i[14],_=i[3],M=i[7],v=i[11],w=i[15],A=s[0],P=s[4],x=s[8],R=s[12],D=s[1],O=s[5],z=s[9],T=s[13],E=s[2],L=s[6],F=s[10],V=s[14],X=s[3],I=s[7],N=s[11],q=s[15];return r[0]=o*A+a*D+c*E+l*X,r[4]=o*P+a*O+c*L+l*I,r[8]=o*x+a*z+c*F+l*N,r[12]=o*R+a*T+c*V+l*q,r[1]=u*A+d*D+h*E+m*X,r[5]=u*P+d*O+h*L+m*I,r[9]=u*x+d*z+h*F+m*N,r[13]=u*R+d*T+h*V+m*q,r[2]=g*A+S*D+p*E+f*X,r[6]=g*P+S*O+p*L+f*I,r[10]=g*x+S*z+p*F+f*N,r[14]=g*R+S*T+p*V+f*q,r[3]=_*A+M*D+v*E+w*X,r[7]=_*P+M*O+v*L+w*I,r[11]=_*x+M*z+v*F+w*N,r[15]=_*R+M*T+v*V+w*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],S=e[7],p=e[11],f=e[15],_=c*m-l*h,M=a*m-l*d,v=a*h-c*d,w=o*m-l*u,A=o*h-c*u,P=o*d-a*u;return t*(S*_-p*M+f*v)-i*(g*_-p*w+f*A)+s*(g*M-S*w+f*P)-r*(g*v-S*A+p*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],S=e[13],p=e[14],f=e[15],_=t*a-i*o,M=t*c-s*o,v=t*l-r*o,w=i*c-s*a,A=i*l-r*a,P=s*l-r*c,x=u*S-d*g,R=u*p-h*g,D=u*f-m*g,O=d*p-h*S,z=d*f-m*S,T=h*f-m*p,E=_*T-M*z+v*O+w*D-A*R+P*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/E;return e[0]=(a*T-c*z+l*O)*L,e[1]=(s*z-i*T-r*O)*L,e[2]=(S*P-p*A+f*w)*L,e[3]=(h*A-d*P-m*w)*L,e[4]=(c*D-o*T-l*R)*L,e[5]=(t*T-s*D+r*R)*L,e[6]=(p*v-g*P-f*M)*L,e[7]=(u*P-h*v+m*M)*L,e[8]=(o*z-a*D+l*x)*L,e[9]=(i*D-t*z-r*x)*L,e[10]=(g*A-S*v+f*_)*L,e[11]=(d*v-u*A-m*_)*L,e[12]=(a*R-o*O-c*x)*L,e[13]=(t*O-i*R+s*x)*L,e[14]=(S*M-g*w-p*_)*L,e[15]=(u*w-d*M+h*_)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,m=r*u,g=r*d,S=o*u,p=o*d,f=a*d,_=c*l,M=c*u,v=c*d,w=i.x,A=i.y,P=i.z;return s[0]=(1-(S+f))*w,s[1]=(m+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(h+f))*A,s[6]=(p+_)*A,s[7]=0,s[8]=(g+M)*P,s[9]=(p-_)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);let l=1/o,u=1/a,d=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=vn,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s),g,S;if(c)g=r/(o-r),S=o*r/(o-r);else if(a===vn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===ps)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vn,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s),g,S;if(c)g=1/(o-r),S=o/(o-r);else if(a===vn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===ps)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ka.prototype.isMatrix4=!0;var lt=ka,Zi=new B,mn=new lt,Ym=new B(0,0,0),Zm=new B(1,1,1),oi=new B,oo=new B,Kt=new B,Uu=new lt,Fu=new Sn,Mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jm=0,Ou=new B,Ji=new Sn,Gn=new lt,ao=new B,Bs=new B,$m=new B,Km=new Sn,Bu=new B(1,0,0),ku=new B(0,1,0),zu=new B(0,0,1),Vu={type:"added"},jm={type:"removed"},$i={type:"childadded",child:null},cl={type:"childremoved",child:null},At=class n extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Mn,i=new Sn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Bs,ao,this.up):Gn.lookAt(ao,Bs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),$i.child=e,this.dispatchEvent($i),$i.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,i),f=this._getHandJoint(l,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},co={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=ch(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return st.workingToColorSpace(Ft.copy(this),e),Math.round(nt(Ft.r*255,0,255))*65536+Math.round(nt(Ft.g*255,0,255))*256+Math.round(nt(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){st.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(co);let i=Js(ai.h,co.h,t),s=Js(ai.s,co.s,t),r=Js(ai.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new je;je.NAMES=$f;var $o=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ko=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new B,Hn=new B,hl=new B,Wn=new B,Ki=new B,ji=new B,Gu=new B,ul=new B,fl=new B,dl=new B,pl=new xt,ml=new xt,gl=new xt,Yn=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),Hn.subVectors(i,t),hl.subVectors(e,t);let o=gn.dot(gn),a=gn.dot(Hn),c=gn.dot(hl),l=Hn.dot(Hn),u=Hn.dot(hl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),Hn.subVectors(e,t),gn.cross(Hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,i),ji.subVectors(r,i),ul.subVectors(e,i);let c=Ki.dot(ul),l=ji.dot(ul);if(c<=0&&l<=0)return t.copy(i);fl.subVectors(e,s);let u=Ki.dot(fl),d=ji.dot(fl);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ki,o);dl.subVectors(e,r);let m=Ki.dot(dl),g=ji.dot(dl);if(g>=0&&m<=g)return t.copy(r);let S=m*l-c*g;if(S<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ji,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Gu.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Gu,a);let f=1/(p+S+h);return o=S*f,a=h*f,t.copy(i).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),ho.subVectors(this.max,ks),Qi.subVectors(e.a,ks),es.subVectors(e.b,ks),ts.subVectors(e.c,ks),ci.subVectors(es,Qi),li.subVectors(ts,es),Ci.subVectors(Qi,ts);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!_l(t,Qi,es,ts,ho)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Qi,es,ts,ho))?!1:(uo.crossVectors(ci,li),t=[uo.x,uo.y,uo.z],_l(t,Qi,es,ts,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new B,new B,new B,new B,new B,new B,new B,new B],_n=new B,lo=new Fn,Qi=new B,es=new B,ts=new B,ci=new B,li=new B,Ci=new B,ks=new B,ho=new B,uo=new B,Pi=new B;function _l(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Pi.fromArray(n,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var wt=new B,fo=new de,eg=0,Ht=class extends Un{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oh,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var sr=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var rr=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},tg=new Fn,zs=new B,yl=new B,Jn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(yl)),this.expandByPoint(zs.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ng=0,an=new lt,xl=new At,ns=new B,jt=new Fn,Vs=new Fn,Pt=new B,Lt=class n extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?rr:sr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(jt.min,Vs.min),jt.expandByPoint(Pt),Pt.addVectors(jt.max,Vs.max),jt.expandByPoint(Pt)):(jt.expandByPoint(Vs.min),jt.expandByPoint(Vs.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(e,l),Pt.add(ns)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new B,c[x]=new B;let l=new B,u=new B,d=new B,h=new de,m=new de,g=new de,S=new B,p=new B;function f(x,R,D){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,D),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,D),u.sub(l),d.sub(l),m.sub(h),g.sub(h);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(O),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(O),a[x].add(S),a[R].add(S),a[D].add(S),c[x].add(p),c[R].add(p),c[D].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,R=_.length;x<R;++x){let D=_[x],O=D.start,z=D.count;for(let T=O,E=O+z;T<E;T+=3)f(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let M=new B,v=new B,w=new B,A=new B;function P(x){w.fromBufferAttribute(s,x),A.copy(w);let R=a[x];M.copy(R),M.sub(w.multiplyScalar(w.dot(R))).normalize(),v.crossVectors(A,R);let O=v.dot(c[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,O)}for(let x=0,R=_.length;x<R;++x){let D=_[x],O=D.start,z=D.count;for(let T=O,E=O+z;T<E;T+=3)P(e.getX(T+0)),P(e.getX(T+1)),P(e.getX(T+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let S=0,p=c.length;S<p;S++){a.isInterleavedBufferAttribute?m=c[S]*a.data.stride+a.offset:m=c[S]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Ht(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vt=new B,or=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vl=new B,ig=new B,sg=new Ke,yn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vl.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sg.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rg=0,bn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Cs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ar=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},is,Gs=new B,ss=new B,rs=new B,os=new de,Hs=new de,Kf=new lt,po=new B,Ws=new B,mo=new B,Hu=new de,Sl=new de,Wu=new de,Qo=class extends At{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jo(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new or(i,3,0,!1)),is.setAttribute("uv",new or(i,2,3,!1))}this.geometry=is,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Kf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;go(po.set(-.5,-.5,0),rs,o,ss,s,r),go(Ws.set(.5,-.5,0),rs,o,ss,s,r),go(mo.set(.5,.5,0),rs,o,ss,s,r),Hu.set(0,0),Sl.set(1,0),Wu.set(1,1);let a=e.ray.intersectTriangle(po,Ws,mo,!1,Gs);if(a===null&&(go(Ws.set(-.5,.5,0),rs,o,ss,s,r),Sl.set(0,1),a=e.ray.intersectTriangle(po,mo,Ws,!1,Gs),a===null))return;let c=e.ray.origin.distanceTo(Gs);c<e.near||c>e.far||t.push({distance:c,point:Gs.clone(),uv:Yn.getInterpolation(Gs,po,Ws,mo,Hu,Sl,Wu,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(n,e,t,i,s,r){os.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Hs.x=r*os.x-s*os.y,Hs.y=s*os.x+r*os.y):Hs.copy(os),n.copy(e),n.x+=Hs.x,n.y+=Hs.y,n.applyMatrix4(Kf)}var qn=new B,Ml=new B,_o=new B,yo=new B,cr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=yo.dot(this.direction),c=-yo.dot(_o),l=yo.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ml).addScaledVector(_o,h),m}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,m=e.z-o.z,g=t.x-o.x,S=t.y-o.y,p=t.z-o.z,f=i.x-o.x,_=i.y-o.y,M=i.z-o.z,v=Math.abs(c),w=Math.abs(l),A=Math.abs(u),P,x,R,D,O,z,T,E,L,F,V,X;if(v>=w&&v>=A?(R=c,z=d,L=g,X=f,c>=0?(P=l,x=u,D=h,O=m,T=S,E=p,F=_,V=M):(P=u,x=l,D=m,O=h,T=p,E=S,F=M,V=_)):w>=A?(R=l,z=h,L=S,X=_,l>=0?(P=u,x=c,D=m,O=d,T=p,E=g,F=M,V=f):(P=c,x=u,D=d,O=m,T=g,E=p,F=f,V=M)):(R=u,z=m,L=p,X=M,u>=0?(P=c,x=l,D=d,O=h,T=g,E=S,F=f,V=_):(P=l,x=c,D=h,O=d,T=S,E=g,F=_,V=f)),R===0)return null;let I=P/R,N=x/R,q=1/R,he=D-I*z,le=O-N*z,Ee=T-I*L,ze=E-N*L,We=F-I*X,j=V-N*X,te=We*ze-j*Ee,pe=he*j-le*We,Le=Ee*le-ze*he;if(s){if(te<0||pe<0||Le<0)return null}else if((te<0||pe<0||Le<0)&&(te>0||pe>0||Le>0))return null;let H=te+pe+Le;if(H===0)return null;let se=q*(te*z+pe*L+Le*X);return(H>0?se<0:se>0)?null:this.at(se/H,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vs=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xu=new lt,Ii=new cr,xo=new Jn,qu=new B,vo=new B,So=new B,Mo=new B,bl=new B,bo=new B,Yu=new B,wo=new B,Wt=class extends At{constructor(e=new Lt,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(bl.fromBufferAttribute(d,e),o?bo.addScaledVector(bl,u):bo.addScaledVector(bl.sub(t),u))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(xo.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(xo,qu)===null||Ii.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],f=o[p.materialIndex],_=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=_,w=M;v<w;v+=3){let A=a.getX(v),P=a.getX(v+1),x=a.getX(v+2);s=To(this,f,e,i,l,u,d,A,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=g,f=S;p<f;p+=3){let _=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=To(this,o,e,i,l,u,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],f=o[p.materialIndex],_=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=_,w=M;v<w;v+=3){let A=v,P=v+1,x=v+2;s=To(this,f,e,i,l,u,d,A,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let p=g,f=S;p<f;p+=3){let _=p,M=p+1,v=p+2;s=To(this,o,e,i,l,u,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function og(n,e,t,i,s,r,o,a){let c;if(e.side===Xt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===gi,a),c===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(wo);return l<t.near||l>t.far?null:{distance:l,point:wo.clone(),object:n}}function To(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,vo),n.getVertexPosition(c,So),n.getVertexPosition(l,Mo);let u=og(n,e,t,i,vo,So,Mo,Yu);if(u){let d=new B;Yn.getBarycoord(Yu,vo,So,Mo,d),s&&(u.uv=Yn.getInterpolatedAttribute(s,a,c,l,d,new de)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,a,c,l,d,new de)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new B,materialIndex:0};Yn.getNormal(vo,So,Mo,h.normal),u.face=h,u.barycoord=d}return u}var lr=class extends Ot{constructor(e=null,t=1,i=1,s,r,o,a,c,l=It,u=It,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Ht{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},as=new lt,Zu=new lt,Ao=[],Ju=new Fn,ag=new lt,Xs=new Wt,qs=new Jn,ea=class extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ag)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),Ju.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,as),qs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Zu.multiplyMatrices(i,as),Xs.matrixWorld=Zu,Xs.raycast(e,Ao);for(let o=0,a=Ao.length;o<a;o++){let c=Ao[o];c.instanceId=r,c.object=this,t.push(c)}Ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,Za,cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new Jn,cg=new de(.5,.5),Eo=new B,Ss=class{constructor(e=new yn,t=new yn,i=new yn,s=new yn,r=new yn,o=new yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],m=r[7],g=r[8],S=r[9],p=r[10],f=r[11],_=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,m-u,f-g,w-_).normalize(),s[1].setComponents(l+o,m+u,f+g,w+_).normalize(),s[2].setComponents(l+a,m+d,f+S,w+M).normalize(),s[3].setComponents(l-a,m-d,f-S,w-M).normalize(),i)s[4].setComponents(c,h,p,v).normalize(),s[5].setComponents(l-c,m-h,f-p,w-v).normalize();else if(s[4].setComponents(l-c,m-h,f-p,w-v).normalize(),t===vn)s[5].setComponents(l+c,m+h,f+p,w+v).normalize();else if(t===ps)s[5].setComponents(c,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=cg.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$u=new lt,Dl=new cr,Ro=new Jn,Co=new B,ta=class extends At{constructor(e=new Lt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;$u.copy(s).invert(),Dl.copy(e.ray).applyMatrix4($u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=h,S=m;g<S;g++){let p=l.getX(g);Co.fromBufferAttribute(d,p),Ku(Co,p,c,s,e,t,this)}}else{let h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,S=m;g<S;g++)Co.fromBufferAttribute(d,g),Ku(Co,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ku(n,e,t,i,s,r,o){let a=Dl.distanceSqToPoint(n);if(a<t){let c=new B;Dl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fr=class extends Ot{constructor(e=[],t=_i,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends Ot{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends Ot{constructor(e,t,i=An,s,r,o,a=It,c=It,l,u=Nn,d=1){if(u!==Nn&&u!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ia=class extends fi{constructor(e,t=An,i=_i,s,r,o=It,a=It,c,l=Nn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dr=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class n extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function g(S,p,f,_,M,v,w,A,P,x,R){let D=v/P,O=w/x,z=v/2,T=w/2,E=A/2,L=P+1,F=x+1,V=0,X=0,I=new B;for(let N=0;N<F;N++){let q=N*O-T;for(let he=0;he<L;he++){let le=he*D-z;I[S]=le*_,I[p]=q*M,I[f]=E,l.push(I.x,I.y,I.z),I[S]=0,I[p]=0,I[f]=A>0?1:-1,u.push(I.x,I.y,I.z),d.push(he/P),d.push(1-N/x),V+=1}}for(let N=0;N<x;N++)for(let q=0;q<P;q++){let he=h+q+L*N,le=h+q+L*(N+1),Ee=h+(q+1)+L*(N+1),ze=h+(q+1)+L*N;c.push(he,le,ze),c.push(le,Ee,ze),X+=6}a.addGroup(m,X,R),m+=X,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pr=class n extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],m=[],g=0,S=[],p=i/2,f=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(m,2));function _(){let v=new B,w=new B,A=0,P=(t-e)/i;for(let x=0;x<=r;x++){let R=[],D=x/r,O=D*(t-e)+e;for(let z=0;z<=s;z++){let T=z/s,E=T*c+a,L=Math.sin(E),F=Math.cos(E);w.x=O*L,w.y=-D*i+p,w.z=O*F,d.push(w.x,w.y,w.z),v.set(L,P,F).normalize(),h.push(v.x,v.y,v.z),m.push(T,1-D),R.push(g++)}S.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){let D=S[R][x],O=S[R+1][x],z=S[R+1][x+1],T=S[R][x+1];(e>0||R!==0)&&(u.push(D,O,T),A+=3),(t>0||R!==r-1)&&(u.push(O,z,T),A+=3)}l.addGroup(f,A,0),f+=A}function M(v){let w=g,A=new de,P=new B,x=0,R=v===!0?e:t,D=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*D,0),h.push(0,D,0),m.push(.5,.5),g++;let O=g;for(let z=0;z<=s;z++){let E=z/s*c+a,L=Math.cos(E),F=Math.sin(E);P.x=R*F,P.y=p*D,P.z=R*L,d.push(P.x,P.y,P.z),h.push(0,D,0),A.x=L*.5+.5,A.y=F*.5*D+.5,m.push(A.x,A.y),g++}for(let z=0;z<s;z++){let T=w+z,E=O+z;v===!0?u.push(E,E+1,T):u.push(E+1,E,T),x+=3}l.addGroup(f,x,v===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sa=class n extends pr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class n extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new B,v=new B,w=new B;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],v),m(t[A+2],w),c(M,v,w,_)}function c(_,M,v,w){let A=w+1,P=[];for(let x=0;x<=A;x++){P[x]=[];let R=_.clone().lerp(v,x/A),D=M.clone().lerp(v,x/A),O=A-x;for(let z=0;z<=O;z++)z===0&&x===A?P[x][z]=R:P[x][z]=R.clone().lerp(D,z/O)}for(let x=0;x<A;x++)for(let R=0;R<2*(A-x)-1;R++){let D=Math.floor(R/2);R%2===0?(h(P[x][D+1]),h(P[x+1][D]),h(P[x][D])):(h(P[x][D+1]),h(P[x+1][D+1]),h(P[x+1][D]))}}function l(_){let M=new B;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){let _=new B;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=p(_)/2/Math.PI+.5,w=f(_)/Math.PI+.5;o.push(v,1-w)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],w=o[_+4],A=Math.max(M,v,w),P=Math.min(M,v,w);A>.9&&P<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function m(_,M){let v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){let _=new B,M=new B,v=new B,w=new B,A=new de,P=new de,x=new de;for(let R=0,D=0;R<r.length;R+=9,D+=6){_.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),A.set(o[D+0],o[D+1]),P.set(o[D+2],o[D+3]),x.set(o[D+4],o[D+5]),w.copy(_).add(M).add(v).divideScalar(3);let O=p(w);S(A,D+0,_,O),S(P,D+2,M,O),S(x,D+4,v,O)}}function S(_,M,v,w){w<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},ra=class n extends mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,m=(o-u)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,s=[],r=[],o=[],a=new B,c=new lt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(nt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ms=class extends Qt{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*u-m*d+this.aX,l=h*d+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oa=class extends Ms{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,m*=u,s(o,a,h,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ju=new B,Qu=new B,wl=new lh,Tl=new lh,Al=new lh,aa=class extends Qt{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Qu.subVectors(s[0],s[1]).add(s[0]),l=Qu);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ju),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);S<1e-4&&(S=1),g<1e-4&&(g=S),p<1e-4&&(p=S),wl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,S,p),Tl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,S,p),Al.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,S,p)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Tl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Al.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(wl.calc(c),Tl.calc(c),Al.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function lg(n,e){let t=1-n;return t*t*e}function hg(n,e){return 2*(1-n)*n*e}function ug(n,e){return n*n*e}function $s(n,e,t,i){return lg(n,e)+hg(n,t)+ug(n,i)}function fg(n,e){let t=1-n;return t*t*t*e}function dg(n,e){let t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function mg(n,e){return n*n*n*e}function Ks(n,e,t,i,s){return fg(n,e)+dg(n,t)+pg(n,i)+mg(n,s)}var gr=class extends Qt{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ks(e,s.x,r.x,o.x,a.x),Ks(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Qt{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ks(e,s.x,r.x,o.x,a.x),Ks(e,s.y,r.y,o.y,a.y),Ks(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_r=class extends Qt{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Qt{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yr=class extends Qt{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($s(e,s.x,r.x,o.x),$s(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Qt{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($s(e,s.x,r.x,o.x),$s(e,s.y,r.y,o.y),$s(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ef(a,c.x,l.x,u.x,d.x),ef(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:oa,CatmullRomCurve3:aa,CubicBezierCurve:gr,CubicBezierCurve3:ca,EllipseCurve:Ms,LineCurve:_r,LineCurve3:la,QuadraticBezierCurve:yr,QuadraticBezierCurve3:ha,SplineCurve:xr}),ua=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Nl[s.type]().fromJSON(s))}return this}},vr=class extends ua{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new _r(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yr(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new gr(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new xr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Ms(e,t,i,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sr=class extends vr{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new vr().fromJSON(s))}return this}};function gg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=jf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Sg(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){let m=n[h],g=n[h+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Mr(r,o,t,a,c,l,0),o}function jf(n,e,t,i,s){let r;if(s===Lg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=tf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=tf(o/i|0,n[o],n[o+1],r);return r&&bs(r,r.next)&&(wr(r),r=r.next),r}function Fi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bs(t,t.next)||St(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Mr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ag(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?yg(n,i,s,r):_g(n)){e.push(c.i,n.i,l.i),wr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=xg(Fi(n),e),Mr(n,e,t,i,s,r,2)):o===2&&vg(n,e,t,i,s,r):Mr(Fi(n),e,t,i,s,r,1);break}}}function _g(n){let e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),m=Math.max(a,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=m&&Ys(s,a,r,c,o,l,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,m=Math.min(a,c,l),g=Math.min(u,d,h),S=Math.max(a,c,l),p=Math.max(u,d,h),f=Ul(m,g,e,t,i),_=Ul(S,p,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=f&&v&&v.z<=_;){if(M.x>=m&&M.x<=S&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ys(a,u,c,d,l,h,M.x,M.y)&&St(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=m&&v.x<=S&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ys(a,u,c,d,l,h,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=m&&M.x<=S&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ys(a,u,c,d,l,h,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=m&&v.x<=S&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ys(a,u,c,d,l,h,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!bs(i,s)&&ed(i,t,t.next,s)&&br(i,s)&&br(s,i)&&(e.push(i.i,t.i,s.i),wr(t),wr(t.next),t=n=s),t=t.next}while(t!==n);return Fi(t)}function vg(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cg(o,a)){let c=td(o,a);o=Fi(o,o.next),c=Fi(c,c.next),Mr(o,e,t,i,s,r,0),Mr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Sg(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=jf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Rg(l))}s.sort(Mg);for(let r=0;r<s.length;r++)t=bg(s[r],t);return t}function Mg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function bg(n,e){let t=wg(n,e);if(!t)return e;let i=td(t,n);return Fi(i,i.next),Fi(t,t.next)}function wg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(bs(n,t))return t;do{if(bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Qf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);br(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Tg(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Tg(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Ag(n,e,t,i){let s=n;do s.z===0&&(s.z=Ul(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Eg(s)}function Eg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ul(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ys(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Qf(n,e,t,i,s,r,o,a)}function Cg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Pg(n,e)&&(br(n,e)&&br(e,n)&&Ig(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||bs(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bs(n,e){return n.x===e.x&&n.y===e.y}function ed(n,e,t,i){let s=Io(St(n,e,t)),r=Io(St(n,e,i)),o=Io(St(t,i,n)),a=Io(St(t,i,e));return!!(s!==r&&o!==a||s===0&&Po(n,t,e)||r===0&&Po(n,i,e)||o===0&&Po(t,n,i)||a===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function Pg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ed(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function br(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Ig(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function td(n,e){let t=Fl(n.i,n.x,n.y),i=Fl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function tf(n,e,t,i){let s=Fl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ol=class{static triangulate(e,t,i=2){return gg(e,t,i)}},Di=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];nf(e),sf(i,e);let o=e.length;t.forEach(nf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,sf(i,t[c]);let a=Ol.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function nf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var fa=class n extends Lt{constructor(e=new Sr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Dg,M,v=!1,w,A,P,x;if(f){M=f.getSpacedPoints(u),v=!0,h=!1;let $=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(u,$),A=new B,P=new B,x=new B}h||(p=0,m=0,g=0,S=0);let R=a.extractPoints(l),D=R.shape,O=R.holes;if(!Di.isClockWise(D)){D=D.reverse();for(let $=0,ne=O.length;$<ne;$++){let ae=O[$];Di.isClockWise(ae)&&(O[$]=ae.reverse())}}function T($){let ae=10000000000000001e-36,ce=$[0];for(let ue=1;ue<=$.length;ue++){let ge=ue%$.length,ye=$[ge],Fe=ye.x-ce.x,_e=ye.y-ce.y,U=Fe*Fe+_e*_e,Oe=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(ce.x),Math.abs(ce.y)),Je=ae*Oe*Oe;if(U<=Je){$.splice(ge,1),ue--;continue}ce=ye}}T(D),O.forEach(T);let E=O.length,L=D;for(let $=0;$<E;$++){let ne=O[$];D=D.concat(ne)}function F($,ne,ae){return ne||Ye("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ne,ae)}let V=D.length;function X($,ne,ae){let ce,ue,ge,ye=$.x-ne.x,Fe=$.y-ne.y,_e=ae.x-$.x,U=ae.y-$.y,Oe=ye*ye+Fe*Fe,Je=ye*U-Fe*_e;if(Math.abs(Je)>Number.EPSILON){let C=Math.sqrt(Oe),y=Math.sqrt(_e*_e+U*U),W=ne.x-Fe/C,J=ne.y+ye/C,Q=ae.x-U/y,fe=ae.y+_e/y,me=((Q-W)*U-(fe-J)*_e)/(ye*U-Fe*_e);ce=W+ye*me-$.x,ue=J+Fe*me-$.y;let ee=ce*ce+ue*ue;if(ee<=2)return new de(ce,ue);ge=Math.sqrt(ee/2)}else{let C=!1;ye>Number.EPSILON?_e>Number.EPSILON&&(C=!0):ye<-Number.EPSILON?_e<-Number.EPSILON&&(C=!0):Math.sign(Fe)===Math.sign(U)&&(C=!0),C?(ce=-Fe,ue=ye,ge=Math.sqrt(Oe)):(ce=ye,ue=Fe,ge=Math.sqrt(Oe/2))}return new de(ce/ge,ue/ge)}let I=[];for(let $=0,ne=L.length,ae=ne-1,ce=$+1;$<ne;$++,ae++,ce++)ae===ne&&(ae=0),ce===ne&&(ce=0),I[$]=X(L[$],L[ae],L[ce]);let N=[],q,he=I.concat();for(let $=0,ne=E;$<ne;$++){let ae=O[$];q=[];for(let ce=0,ue=ae.length,ge=ue-1,ye=ce+1;ce<ue;ce++,ge++,ye++)ge===ue&&(ge=0),ye===ue&&(ye=0),q[ce]=X(ae[ce],ae[ge],ae[ye]);N.push(q),he=he.concat(q)}let le;if(p===0)le=Di.triangulateShape(L,O);else{let $=[],ne=[];for(let ae=0;ae<p;ae++){let ce=ae/p,ue=m*Math.cos(ce*Math.PI/2),ge=g*Math.sin(ce*Math.PI/2)+S;for(let ye=0,Fe=L.length;ye<Fe;ye++){let _e=F(L[ye],I[ye],ge);pe(_e.x,_e.y,-ue),ce===0&&$.push(_e)}for(let ye=0,Fe=E;ye<Fe;ye++){let _e=O[ye];q=N[ye];let U=[];for(let Oe=0,Je=_e.length;Oe<Je;Oe++){let C=F(_e[Oe],q[Oe],ge);pe(C.x,C.y,-ue),ce===0&&U.push(C)}ce===0&&ne.push(U)}}le=Di.triangulateShape($,ne)}let Ee=le.length,ze=g+S;for(let $=0;$<V;$++){let ne=h?F(D[$],he[$],ze):D[$];v?(P.copy(w.normals[0]).multiplyScalar(ne.x),A.copy(w.binormals[0]).multiplyScalar(ne.y),x.copy(M[0]).add(P).add(A),pe(x.x,x.y,x.z)):pe(ne.x,ne.y,0)}for(let $=1;$<=u;$++)for(let ne=0;ne<V;ne++){let ae=h?F(D[ne],he[ne],ze):D[ne];v?(P.copy(w.normals[$]).multiplyScalar(ae.x),A.copy(w.binormals[$]).multiplyScalar(ae.y),x.copy(M[$]).add(P).add(A),pe(x.x,x.y,x.z)):pe(ae.x,ae.y,d/u*$)}for(let $=p-1;$>=0;$--){let ne=$/p,ae=m*Math.cos(ne*Math.PI/2),ce=g*Math.sin(ne*Math.PI/2)+S;for(let ue=0,ge=L.length;ue<ge;ue++){let ye=F(L[ue],I[ue],ce);pe(ye.x,ye.y,d+ae)}for(let ue=0,ge=O.length;ue<ge;ue++){let ye=O[ue];q=N[ue];for(let Fe=0,_e=ye.length;Fe<_e;Fe++){let U=F(ye[Fe],q[Fe],ce);v?pe(U.x,U.y+M[u-1].y,M[u-1].x+ae):pe(U.x,U.y,d+ae)}}}We(),j();function We(){let $=s.length/3;if(h){let ne=0,ae=V*ne;for(let ce=0;ce<Ee;ce++){let ue=le[ce];Le(ue[2]+ae,ue[1]+ae,ue[0]+ae)}ne=u+p*2,ae=V*ne;for(let ce=0;ce<Ee;ce++){let ue=le[ce];Le(ue[0]+ae,ue[1]+ae,ue[2]+ae)}}else{for(let ne=0;ne<Ee;ne++){let ae=le[ne];Le(ae[2],ae[1],ae[0])}for(let ne=0;ne<Ee;ne++){let ae=le[ne];Le(ae[0]+V*u,ae[1]+V*u,ae[2]+V*u)}}i.addGroup($,s.length/3-$,0)}function j(){let $=s.length/3,ne=0;te(L,ne),ne+=L.length;for(let ae=0,ce=O.length;ae<ce;ae++){let ue=O[ae];te(ue,ne),ne+=ue.length}i.addGroup($,s.length/3-$,1)}function te($,ne){let ae=$.length;for(;--ae>=0;){let ce=ae,ue=ae-1;ue<0&&(ue=$.length-1);for(let ge=0,ye=u+p*2;ge<ye;ge++){let Fe=V*ge,_e=V*(ge+1),U=ne+ce+Fe,Oe=ne+ue+Fe,Je=ne+ue+_e,C=ne+ce+_e;H(U,Oe,Je,C)}}}function pe($,ne,ae){c.push($),c.push(ne),c.push(ae)}function Le($,ne,ae){se($),se(ne),se(ae);let ce=s.length/3,ue=_.generateTopUV(i,s,ce-3,ce-2,ce-1);Ce(ue[0]),Ce(ue[1]),Ce(ue[2])}function H($,ne,ae,ce){se($),se(ne),se(ce),se(ne),se(ae),se(ce);let ue=s.length/3,ge=_.generateSideWallUV(i,s,ue-6,ue-3,ue-2,ue-1);Ce(ge[0]),Ce(ge[1]),Ce(ge[3]),Ce(ge[1]),Ce(ge[2]),Ce(ge[3])}function se($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function Ce($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ng(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Nl[s.type]().fromJSON(s)),new n(i,e.options)}},Dg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new de(r,o),new de(a,c),new de(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],S=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-d),new de(h,1-g),new de(S,1-f)]:[new de(a,1-c),new de(u,1-d),new de(m,1-g),new de(p,1-f)]}};function Ng(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var da=class n extends mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ws=class n extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],S=[],p=[];for(let f=0;f<u;f++){let _=f*h-o;for(let M=0;M<l;M++){let v=M*d-r;g.push(v,-_,0),S.push(0,0,1),p.push(M/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<a;_++){let M=_+l*f,v=_+l*(f+1),w=_+1+l*(f+1),A=_+1+l*f;m.push(M,v,A),m.push(v,w,A)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var pa=class n extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new B,h=new B,m=[],g=[],S=[],p=[];for(let f=0;f<=i;f++){let _=[],M=f/i,v=o+M*a,w=e*Math.cos(v),A=Math.sqrt(e*e-w*w),P=0;f===0&&o===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){let R=x/t,D=s+R*r;d.x=-A*Math.cos(D),d.y=w,d.z=A*Math.sin(D),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),p.push(R+P,1-M),_.push(l++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let M=u[f][_+1],v=u[f][_],w=u[f+1][_],A=u[f+1][_+1];(f!==0||o>0)&&m.push(M,v,A),(f!==i-1||c<Math.PI)&&m.push(v,w,A)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ma=class n extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new B,m=new B,g=new B;for(let S=0;S<=i;S++){let p=o+S/i*a;for(let f=0;f<=s;f++){let _=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(_),m.y=(e+t*Math.cos(p))*Math.sin(_),m.z=t*Math.sin(p),l.push(m.x,m.y,m.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),g.subVectors(m,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let p=1;p<=s;p++){let f=(s+1)*S+p-1,_=(s+1)*(S-1)+p-1,M=(s+1)*(S-1)+p,v=(s+1)*S+p;c.push(f,_,v),c.push(_,M,v)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ki(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Bt(n){let e={};for(let t=0;t<n.length;t++){let i=ki(n[t]);for(let s in i)e[s]=i[s]}return e}function rf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ug(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var nd={clone:ki,merge:Bt},Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(s.value);break;case"v2":this.uniforms[i].value=new de().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_a=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ya=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xa=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},va=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function El(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var di=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends di{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=e,a=2*t-i;break;case Ll:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:o=e,c=2*i-t;break;case Ll:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),S=g*g,p=S*g,f=-h*p+2*h*S-h*g,_=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*g+1,M=(-1-m)*p+(1.5+m)*S+.5*g,v=m*p-m*S;for(let w=0;w!==a;++w)r[w]=f*o[u+w]+_*o[l+w]+M*o[c+w]+v*o[d+w];return r}},Ma=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},ba=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wa=class extends di{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),S=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*S+o[c+p]*g;return r}let h=a*2,m=e-1;for(let g=0;g!==a;++g){let S=o[l+g],p=o[c+g],f=m*h+g*2,_=d[f],M=d[f+1],v=e*h+g*2,w=u[v],A=u[v+1],P=kg(i,t,_,w,s);r[g]=id(P,S,M,A,p)}return r}};function id(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Bg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function kg(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=id(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Bg(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var tn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),El(e.settings)&&(i.settings={inTangents:cs(e.settings.inTangents,Array),outTangents:cs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;El(this.settings)&&(of(this.settings.inTangents,e),of(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Em(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,El(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function of(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=qo;var pi=class extends tn{constructor(e,t,i){super(e,t,i)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=js;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends tn{constructor(e,t,i,s){super(e,t,i,s)}};Ta.prototype.ValueTypeName="color";var Aa=class extends tn{constructor(e,t,i,s){super(e,t,i,s)}};Aa.prototype.ValueTypeName="number";var Ea=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Tr=class extends tn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends tn{constructor(e,t,i){super(e,t,i)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=js;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends tn{constructor(e,t,i,s){super(e,t,i,s)}};Ra.prototype.ValueTypeName="vector";var Fo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(af(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!af(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function af(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ca=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sd=new Ca,Ts=class{constructor(e){this.manager=e!==void 0?e:sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=new WeakMap,Pa=class extends Ts{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ls.get(o);d===void 0&&(d=[],ls.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=ms("img");function c(){u(),t&&t(this);let d=ls.get(this)||[];for(let h=0;h<d.length;h++){let m=d[h];m.onLoad&&m.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),Fo.remove(`image:${e}`);let h=ls.get(this)||[];for(let m=0;m<h.length;m++){let g=h[m];g.onError&&g.onError(d)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fo.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ia=class extends Ts{constructor(e){super(e)}load(e,t,i,s){let r=new Ot,o=new Pa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},As=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends As{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rl=new lt,cf=new B,lf=new B,Da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new B,Do=new Sn,In=new B,Ar=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Do,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lo,Do,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new B,hf=new de,uf=new de,Gt=class extends Ar{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,hf,uf),t.subVectors(uf,hf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Es=class extends Ar{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends Da{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ua=class extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var hs=-90,us=1,Fa=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(hs,us,e,t);s.layers=this.layers,this.add(s);let r=new Gt(hs,us,e,t);r.layers=this.layers,this.add(r);let o=new Gt(hs,us,e,t);o.layers=this.layers,this.add(o);let a=new Gt(hs,us,e,t);a.layers=this.layers,this.add(a);let c=new Gt(hs,us,e,t);c.layers=this.layers,this.add(c);let l=new Gt(hs,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Oa=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uh="\\[\\]\\.:\\/",zg=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",Vg="[^"+uh.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",fh),Hg=/(WCOD+)?/.source.replace("WCOD",Vg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),qg=new RegExp("^"+Gg+Hg+Wg+Xg+"$"),Yg=["material","materials","bones","map"],kl=class{constructor(e,t,i){let s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(e){let t=qg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Yg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=kl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dM=new Float32Array(1);var Ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var yh=class yh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};yh.prototype.isMatrix2=!0;var zl=yh;function dh(n,e,t,i){let s=Zg(i);switch(t){case sh:return n*e;case Za:return n*e/s.components*s.byteLength;case Ja:return n*e/s.components*s.byteLength;case vi:return n*e*2/s.components*s.byteLength;case $a:return n*e*2/s.components*s.byteLength;case rh:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case Ka:return n*e*4/s.components*s.byteLength;case Pr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tc:return Math.max(n,16)*Math.max(e,8)/4;case ja:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:case Nr:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mc:case bc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ur:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zg(n){switch(n){case Jt:case eh:return{byteLength:1,components:1};case Ps:case th:case En:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case An:case Xa:case cn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ad(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $g(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){let g=d[h],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){let S=d[m];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,My=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Kg,alphahash_pars_fragment:jg,alphamap_fragment:Qg,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:c0,bsdfs:l0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:_0,color_pars_vertex:y0,color_vertex:x0,common:v0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:M0,displacementmap_pars_vertex:b0,displacementmap_vertex:w0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:E0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:I0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:H0,envmap_vertex:D0,fog_vertex:N0,fog_pars_vertex:U0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:k0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:$0,lights_fragment_maps:K0,lights_fragment_end:j0,lightprobes_pars_fragment:Q0,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:o_,map_particle_pars_fragment:a_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:l_,morphinstance_vertex:h_,morphcolor_vertex:u_,morphnormal_vertex:f_,morphtarget_pars_vertex:d_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:g_,normal_pars_fragment:__,normal_pars_vertex:y_,normal_vertex:x_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:w_,opaque_fragment:T_,packing:A_,premultiplied_alpha_fragment:E_,project_vertex:R_,dithering_fragment:C_,dithering_pars_fragment:P_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:N_,shadowmap_vertex:U_,shadowmask_pars_fragment:F_,skinbase_vertex:O_,skinning_pars_vertex:B_,skinning_vertex:k_,skinnormal_vertex:z_,specularmap_fragment:V_,specularmap_pars_fragment:G_,tonemapping_fragment:H_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:q_,uv_pars_fragment:Y_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:$_,background_vert:K_,background_frag:j_,backgroundCube_vert:Q_,backgroundCube_frag:ey,cube_vert:ty,cube_frag:ny,depth_vert:iy,depth_frag:sy,distance_vert:ry,distance_frag:oy,equirect_vert:ay,equirect_frag:cy,linedashed_vert:ly,linedashed_frag:hy,meshbasic_vert:uy,meshbasic_frag:fy,meshlambert_vert:dy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:yy,meshphong_vert:xy,meshphong_frag:vy,meshphysical_vert:Sy,meshphysical_frag:My,meshtoon_vert:by,meshtoon_frag:wy,points_vert:Ty,points_frag:Ay,shadow_vert:Ey,shadow_frag:Ry,sprite_vert:Cy,sprite_frag:Py},we={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},kn={basic:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Bt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Bt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Bt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Bt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Bt([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Bt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Bt([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Bt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Bt([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Bt([we.common,we.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Bt([we.lights,we.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};kn.physical={uniforms:Bt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Pc={r:0,b:0,g:0},Iy=new lt,Ed=new Ke;Ed.set(-1,0,0,0,1,0,0,0,1);function Ly(n,e,t,i,s,r){let o=new je(0),a=s===!0?0:1,c,l,u=null,d=0,h=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(_){let M=!1,v=m(_);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,M){let v=m(M);v&&(v.isCubeTexture||v.mapping===Rr)?(l===void 0&&(l=new Wt(new Ui(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ki(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ed),l.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new ws(2,2),new en({name:"BackgroundMaterial",uniforms:ki(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(Pc,hh(n)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,M,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:S,dispose:f}}function Dy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(O,z,T,E,L){let F=!1,V=d(O,E,T,z);r!==V&&(r=V,l(r.object)),F=m(O,E,T,L),F&&g(O,E,T,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(O,z,T,E),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function d(O,z,T,E){let L=E.wireframe===!0,F=i[z.id];F===void 0&&(F={},i[z.id]=F);let V=O.isInstancedMesh===!0?O.id:0,X=F[V];X===void 0&&(X={},F[V]=X);let I=X[T.id];I===void 0&&(I={},X[T.id]=I);let N=I[L];return N===void 0&&(N=h(c()),I[L]=N),N}function h(O){let z=[],T=[],E=[];for(let L=0;L<t;L++)z[L]=0,T[L]=0,E[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:T,attributeDivisors:E,object:O,attributes:{},index:null}}function m(O,z,T,E){let L=r.attributes,F=z.attributes,V=0,X=T.getAttributes();for(let I in X)if(X[I].location>=0){let q=L[I],he=F[I];if(he===void 0&&(I==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),I==="instanceColor"&&O.instanceColor&&(he=O.instanceColor)),q===void 0||q.attribute!==he||he&&q.data!==he.data)return!0;V++}return r.attributesNum!==V||r.index!==E}function g(O,z,T,E){let L={},F=z.attributes,V=0,X=T.getAttributes();for(let I in X)if(X[I].location>=0){let q=F[I];q===void 0&&(I==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),I==="instanceColor"&&O.instanceColor&&(q=O.instanceColor));let he={};he.attribute=q,q&&q.data&&(he.data=q.data),L[I]=he,V++}r.attributes=L,r.attributesNum=V,r.index=E}function S(){let O=r.newAttributes;for(let z=0,T=O.length;z<T;z++)O[z]=0}function p(O){f(O,0)}function f(O,z){let T=r.newAttributes,E=r.enabledAttributes,L=r.attributeDivisors;T[O]=1,E[O]===0&&(n.enableVertexAttribArray(O),E[O]=1),L[O]!==z&&(n.vertexAttribDivisor(O,z),L[O]=z)}function _(){let O=r.newAttributes,z=r.enabledAttributes;for(let T=0,E=z.length;T<E;T++)z[T]!==O[T]&&(n.disableVertexAttribArray(T),z[T]=0)}function M(O,z,T,E,L,F,V){V===!0?n.vertexAttribIPointer(O,z,T,L,F):n.vertexAttribPointer(O,z,T,E,L,F)}function v(O,z,T,E){S();let L=E.attributes,F=T.getAttributes(),V=z.defaultAttributeValues;for(let X in F){let I=F[X];if(I.location>=0){let N=L[X];if(N===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),N!==void 0){let q=N.normalized,he=N.itemSize,le=e.get(N);if(le===void 0)continue;let Ee=le.buffer,ze=le.type,We=le.bytesPerElement,j=ze===n.INT||ze===n.UNSIGNED_INT||N.gpuType===Xa;if(N.isInterleavedBufferAttribute){let te=N.data,pe=te.stride,Le=N.offset;if(te.isInstancedInterleavedBuffer){for(let H=0;H<I.locationSize;H++)f(I.location+H,te.meshPerAttribute);O.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let H=0;H<I.locationSize;H++)p(I.location+H);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let H=0;H<I.locationSize;H++)M(I.location+H,he/I.locationSize,ze,q,pe*We,(Le+he/I.locationSize*H)*We,j)}else{if(N.isInstancedBufferAttribute){for(let te=0;te<I.locationSize;te++)f(I.location+te,N.meshPerAttribute);O.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let te=0;te<I.locationSize;te++)p(I.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let te=0;te<I.locationSize;te++)M(I.location+te,he/I.locationSize,ze,q,he*We,he/I.locationSize*te*We,j)}}else if(V!==void 0){let q=V[X];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(I.location,q);break;case 3:n.vertexAttrib3fv(I.location,q);break;case 4:n.vertexAttrib4fv(I.location,q);break;default:n.vertexAttrib1fv(I.location,q)}}}}_()}function w(){R();for(let O in i){let z=i[O];for(let T in z){let E=z[T];for(let L in E){let F=E[L];for(let V in F)u(F[V].object),delete F[V];delete E[L]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;let z=i[O.id];for(let T in z){let E=z[T];for(let L in E){let F=E[L];for(let V in F)u(F[V].object),delete F[V];delete E[L]}}delete i[O.id]}function P(O){for(let z in i){let T=i[z];for(let E in T){let L=T[E];if(L[O.id]===void 0)continue;let F=L[O.id];for(let V in F)u(F[V].object),delete F[V];delete L[O.id]}}}function x(O){for(let z in i){let T=i[z],E=O.isInstancedMesh===!0?O.id:0,L=T[E];if(L!==void 0){for(let F in L){let V=L[F];for(let X in V)u(V[X].object),delete V[X];delete L[F]}delete T[E],Object.keys(T).length===0&&delete i[z]}}}function R(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:_}}function Ny(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Uy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Jt&&P!==cn&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Xe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:A}}function Fy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yn,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let _=r?0:i,M=_*4,v=f.clippingState||null;c.value=v,v=u(g,h,M,m);for(let w=0;w!==M;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=c.value,g!==!0||p===null){let f=m+S*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,v=m;M!==S;++M,v+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var Ds=4,Oy=6,By=20,ky=256,Or=new Es,rd=new je,xh=null,vh=0,Sh=0,Mh=!1,zy=new B,zi=new B,Lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=zy}=r;xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,vh,Sh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:En,format:ln,colorSpace:Qs,depthBuffer:!1},s=od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vy(r)),this._blurMaterial=Hy(r,e,t),this._ggxMaterial=Gy(r,e,t)}return s}_compileMaterial(e){let t=new Wt(new Lt,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,s,r){let c=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(rd),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Ui,new vs({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,f=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,f=!0):(p.color.copy(rd),f=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let w=this._cubeSize;Ls(s,v*w,M>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(S,c),d.render(e,c)}d.toneMapping=m,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_i||e.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Or)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,m=d*h,{_lodMax:g}=this,S=this._sizeLods[i],p=3*S*(i>g-Ds?i-g+Ds:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Ls(r,p,f,3*S,2*S),s.setRenderTarget(r),s.render(a,Or),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ls(e,p,f,3*S,2*S),s.setRenderTarget(e),s.render(a,Or)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ds?s-this._lodMax+Ds:0),h=4*(this._cubeSize-u);Ls(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,Or)}};function Vy(n){let e=[],t=[],i=n,s=n-Ds+1+Oy;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,m=3,g=new Float32Array(m*h*d),S=new Float32Array(m*h*d);for(let f=0;f<d;f++){let _=f%3*2/3-1,M=f>2?0:-1,v=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(v,m*h*f);for(let w=0;w<h;w++){let A=u[w*2]*2-1,P=u[w*2+1]*2-1;f===0?zi.set(1,P,A):f===1?zi.set(-A,1,-P):f===2?zi.set(-A,P,1):f===3?zi.set(-1,P,-A):f===4?zi.set(-A,-1,P):zi.set(A,P,-1),zi.toArray(S,(f*h+w)*m)}}let p=new Lt;p.setAttribute("position",new Ht(g,m)),p.setAttribute("outputDirection",new Ht(S,m)),t.push(new Wt(p,null)),i>Ds&&i--}return{lodMeshes:t,sizeLods:e}}function od(n,e,t){let i=new Zt(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gy(n,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Hy(n,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ad(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function cd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dc=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:On});r.uniforms.tEquirect.value=t;let o=new Wt(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Dt),new Fa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function Wy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ga||m===Ha)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new Dc(g.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",l),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,g=m===Ga||m===Ha,S=m===_i||m===Bi;if(g||S){let p=t.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Lc(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let _=h.image;return g&&_&&_.height>0||S&&_&&c(_)?(i===null&&(i=new Lc(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===Ga?h.mapping=_i:m===Ha&&(h.mapping=Bi),h}function c(h){let m=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&m++;return m===g}function l(h){let m=h.target;m.removeEventListener("dispose",l);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Xy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ni("WebGLRenderer: "+i+" extension not supported."),s}}}function qy(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(d){let h=[],m=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(m!==null){let _=m.array;S=m.version;for(let M=0,v=_.length;M<v;M+=3){let w=_[M+0],A=_[M+1],P=_[M+2];h.push(w,A,A,P,P,w)}}else{let _=g.array;S=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let w=M+0,A=M+1,P=M+2;h.push(w,A,A,P,P,w)}}let p=new(g.count>=65535?rr:sr)(h,1);p.version=S;let f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Yy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let S=0;for(let p=0;p<m;p++)S+=h[p];t.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Jy(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let R=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),S===!0&&(M=3);let v=a.attributes.position.count*M,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*w*4*d),P=new nr(A,v,w,d);P.type=cn,P.needsUpdate=!0;let x=M*4;for(let D=0;D<d;D++){let O=p[D],z=f[D],T=_[D],E=v*w*4*D;for(let L=0;L<O.count;L++){let F=L*x;m===!0&&(s.fromBufferAttribute(O,L),A[E+F+0]=s.x,A[E+F+1]=s.y,A[E+F+2]=s.z,A[E+F+3]=0),g===!0&&(s.fromBufferAttribute(z,L),A[E+F+4]=s.x,A[E+F+5]=s.y,A[E+F+6]=s.z,A[E+F+7]=0),S===!0&&(s.fromBufferAttribute(T,L),A[E+F+8]=s.x,A[E+F+9]=s.y,A[E+F+10]=s.z,A[E+F+11]=T.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new de(v,w)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function $y(n,e,t,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Ky={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[Jl]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function jy(n,e,t,i,s,r){let o=new Zt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Lt;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Wt(l,u),h=new Es(-1,1,1,-1,0,1),m=null,g=null,S=!1,p,f=null,_=[],M=!1;this.setSize=function(v,w){o.setSize(v,w),a!==null&&a.setSize(v,w),c!==null&&c.setSize(v,w);for(let A=0;A<_.length;A++){let P=_[A];P.setSize&&P.setSize(v,w)}},this.setEffects=function(v){_=v,M=_.length>0&&_[0].isRenderPass===!0;let w=o.width,A=o.height;_.length>0&&a===null&&(a=new Zt(w,A,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(w,A,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<_.length;P++){let x=_[P];x.setSize&&x.setSize(w,A)}},this.begin=function(v,w){if(S||v.toneMapping===Tn&&_.length===0)return!1;if(f=w,w!==null){let A=w.width,P=w.height;(o.width!==A||o.height!==P)&&this.setSize(A,P)}return M===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return M},this.end=function(v,w){v.toneMapping=p,S=!0;let A=o,P=a;for(let x=0;x<_.length;x++){let R=_[x];R.enabled!==!1&&(R.render(v,P,A,w),R.needsSwap!==!1&&(A=P,P=P===a?c:a))}if(m!==v.outputColorSpace||g!==v.toneMapping){m=v.outputColorSpace,g=v.toneMapping,u.defines={},st.getTransfer(m)===ct&&(u.defines.SRGB_TRANSFER="");let x=Ky[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(d,h),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rd=new Ot,Th=new fi(1,1),Cd=new nr,Pd=new Jo,Id=new fr,ld=[],hd=[],ud=new Float32Array(16),fd=new Float32Array(9),dd=new Float32Array(4);function Us(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uc(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function ix(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),Rt(t,i)}}function sx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Rt(t,i)}}function rx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Rt(t,i)}}function ox(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function hx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function px(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?Cc:Rc,r=Th):r=Rd,t.setTexture2D(e||r,s)}function mx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pd,s)}function gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Id,s)}function _x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function yx(n){switch(n){case 5126:return Qy;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function xx(n,e){n.uniform1fv(this.addr,e)}function vx(n,e){let t=Us(e,this.size,2);n.uniform2fv(this.addr,t)}function Sx(n,e){let t=Us(e,this.size,3);n.uniform3fv(this.addr,t)}function Mx(n,e){let t=Us(e,this.size,4);n.uniform4fv(this.addr,t)}function bx(n,e){let t=Us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wx(n,e){let t=Us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tx(n,e){let t=Us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ax(n,e){n.uniform1iv(this.addr,e)}function Ex(n,e){n.uniform2iv(this.addr,e)}function Rx(n,e){n.uniform3iv(this.addr,e)}function Cx(n,e){n.uniform4iv(this.addr,e)}function Px(n,e){n.uniform1uiv(this.addr,e)}function Ix(n,e){n.uniform2uiv(this.addr,e)}function Lx(n,e){n.uniform3uiv(this.addr,e)}function Dx(n,e){n.uniform4uiv(this.addr,e)}function Nx(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Th:o=Rd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ux(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pd,r[o])}function Fx(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Id,r[o])}function Ox(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function Bx(n){switch(n){case 5126:return xx;case 35664:return vx;case 35665:return Sx;case 35666:return Mx;case 35674:return bx;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Ex;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yx(t.type)}},Eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function pd(n,e){n.seq.push(e),n.map[e.id]=e}function kx(n,e,t){let i=n.name,s=i.length;for(bh.lastIndex=0;;){let r=bh.exec(i),o=bh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pd(t,l===void 0?new Ah(a,n,e):new Eh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Rh(a),pd(t,d)),t=d}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);kx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function md(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zx=37297,Vx=0;function Gx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var gd=new Ke;function Hx(n){st._getMatrix(gd,st.workingColorSpace,n);let e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case er:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _d(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gx(n.getShaderSource(e),a)}else return r}function Wx(n,e){let t=Hx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xx={[ql]:"Linear",[Yl]:"Reinhard",[Zl]:"Cineon",[Jl]:"ACESFilmic",[Kl]:"AgX",[jl]:"Neutral",[$l]:"Custom"};function qx(n,e){let t=Xx[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ic=new B;function Yx(){st.getLuminanceCoefficients(Ic);let n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Jx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $x(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function kr(n){return n!==""}function yd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(n){return n.replace(Kx,Qx)}var jx=new Map;function Qx(n,e){let t=tt[e];if(t===void 0){let i=jx.get(e);if(i!==void 0)t=tt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(ev,tv)}function tv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var nv={[Er]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function iv(n){return nv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sv={[_i]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function rv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ov={[Bi]:"ENVMAP_MODE_REFRACTION"};function av(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ov[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cv={[Va]:"ENVMAP_BLENDING_MULTIPLY",[Df]:"ENVMAP_BLENDING_MIX",[Nf]:"ENVMAP_BLENDING_ADD"};function lv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cv[n.combine]||"ENVMAP_BLENDING_NONE"}function hv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=iv(t),l=rv(t),u=av(t),d=lv(t),h=hv(t),m=Zx(t),g=Jx(r),S=s.createProgram(),p,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(p=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Tn?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),Yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Ch(o),o=yd(o,t),o=xd(o,t),a=Ch(a),a=yd(a,t),a=xd(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=_+p+o,v=_+f+a,w=md(s,s.VERTEX_SHADER,M),A=md(s,s.FRAGMENT_SHADER,v);s.attachShader(S,w),s.attachShader(S,A),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(O){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",T=s.getShaderInfoLog(w)||"",E=s.getShaderInfoLog(A)||"",L=z.trim(),F=T.trim(),V=E.trim(),X=!0,I=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,w,A);else{let N=_d(s,w,"vertex"),q=_d(s,A,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+L+`
`+N+`
`+q)}else L!==""?Xe("WebGLProgram: Program Info Log:",L):(F===""||V==="")&&(I=!1);I&&(O.diagnostics={runnable:X,programLog:L,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:f}})}s.deleteShader(w),s.deleteShader(A),x=new Ns(s,S),R=$x(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(S,zx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=A,this}var fv=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ih(e),t.set(e,i)),i}},Ih=class{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}};function dv(n){return n===vi||n===Nr||n===Ur}function pv(n,e,t,i,s,r){let o=new ir,a=new Ph,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,R,D,O,z,T){let E=O.fog,L=z.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||F,V),I=X&&X.mapping===Rr?X.image.height:null,N=m[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,he=q!==void 0?q.length:0,le=0;L.morphAttributes.position!==void 0&&(le=1),L.morphAttributes.normal!==void 0&&(le=2),L.morphAttributes.color!==void 0&&(le=3);let Ee,ze,We,j;if(N){let mt=kn[N];Ee=mt.vertexShader,ze=mt.fragmentShader}else{Ee=x.vertexShader,ze=x.fragmentShader;let mt=a.getVertexShaderStage(x),ot=a.getFragmentShaderStage(x);a.update(x,mt,ot),We=mt.id,j=ot.id}let te=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,H=z.isBatchedMesh===!0,se=!!x.map,Ce=!!x.matcap,$=!!X,ne=!!x.aoMap,ae=!!x.lightMap,ce=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,ge=!!x.displacementMap,ye=!!x.emissiveMap,Fe=!!x.metalnessMap,_e=!!x.roughnessMap,U=x.anisotropy>0,Oe=x.clearcoat>0,Je=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,W=x.sheen>0,J=x.transmission>0,Q=U&&!!x.anisotropyMap,fe=Oe&&!!x.clearcoatMap,me=Oe&&!!x.clearcoatNormalMap,ee=Oe&&!!x.clearcoatRoughnessMap,re=y&&!!x.iridescenceMap,xe=y&&!!x.iridescenceThicknessMap,Ve=W&&!!x.sheenColorMap,be=W&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Ge=!!x.specularColorMap,qe=!!x.specularIntensityMap,Qe=J&&!!x.transmissionMap,G=J&&!!x.thicknessMap,Se=!!x.gradientMap,ie=!!x.alphaMap,Me=x.alphaTest>0,Re=!!x.alphaHash,oe=!!x.extensions,He=Tn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(He=n.toneMapping);let Ue={shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:ze,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:H,batchingColor:H&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:Ce,envMap:$,envMapMode:$&&X.mapping,envMapCubeUVHeight:I,aoMap:ne,lightMap:ae,bumpMap:ce,normalMap:ue,displacementMap:ge,emissiveMap:ye,normalMapObjectSpace:ue&&x.normalMapType===Of,normalMapTangentSpace:ue&&x.normalMapType===Fr,packedNormalMap:ue&&x.normalMapType===Fr&&dv(x.normalMap.format),metalnessMap:Fe,roughnessMap:_e,anisotropy:U,anisotropyMap:Q,clearcoat:Oe,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:ee,dispersion:Je,retroreflection:C,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:xe,sheen:W,sheenColorMap:Ve,sheenRoughnessMap:be,specularMap:ve,specularColorMap:Ge,specularIntensityMap:qe,transmission:J,transmissionMap:Qe,thicknessMap:G,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Cs&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:Re,combine:x.combine,mapUv:se&&g(x.map.channel),aoMapUv:ne&&g(x.aoMap.channel),lightMapUv:ae&&g(x.lightMap.channel),bumpMapUv:ce&&g(x.bumpMap.channel),normalMapUv:ue&&g(x.normalMap.channel),displacementMapUv:ge&&g(x.displacementMap.channel),emissiveMapUv:ye&&g(x.emissiveMap.channel),metalnessMapUv:Fe&&g(x.metalnessMap.channel),roughnessMapUv:_e&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:fe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(x.sheenRoughnessMap.channel),specularMapUv:ve&&g(x.specularMap.channel),specularColorMapUv:Ge&&g(x.specularColorMap.channel),specularIntensityMapUv:qe&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:G&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ue||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(se||ie),fog:!!E,useFog:x.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:le,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:T.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||H)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(x){let R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)R.push(D),R.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(R,x),_(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function f(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numSunLights),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numSunLightShadows),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function _(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let R=m[x.type],D;if(R){let O=kn[R];D=nd.clone(O.uniforms)}else D=x.uniforms;return D}function v(x,R){let D=u.get(R);return D!==void 0?++D.usedTimes:(D=new uv(n,R,x,s),l.push(D),u.set(R,D)),D}function w(x){if(--x.usedTimes===0){let R=l.indexOf(x);l[R]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function P(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:P}}function mv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Md(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,g,S,p,f){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:m,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:f},n[e]=_):(_.id=h.id,_.object=h,_.geometry=m,_.material=g,_.materialVariant=o(h),_.groupOrder=S,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function c(h,m,g,S,p,f,_){_.reversedDepth===!0&&(p=-p);let M=a(h,m,g,S,p,f);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(h,m,g,S,p,f){let _=a(h,m,g,S,p,f);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,m){t.length>1&&t.sort(h||gv),i.length>1&&i.sort(m||Md),s.length>1&&s.sort(m||Md)}function d(){for(let h=e,m=n.length;h<m;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function _v(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new bd,n.set(i,[o])):s>=r.length?(o=new bd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function xv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var vv=0;function Sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mv(n){let e=new yv,t=xv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let s=new B,r=new lt,o=new lt;function a(l){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,g=0,S=0,p=0,f=0,_=0,M=0,v=0,w=0,A=0,P=0,x=0,R=0,D=0;l.sort(Sv);for(let z=0,T=l.length;z<T;z++){let E=l[z],L=E.color,F=E.intensity,V=E.distance,X=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===vi?X=E.shadow.map.texture:X=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=L.r*F,d+=L.g*F,h+=L.b*F;else if(E.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(E.sh.coefficients[I],F);D++}else if(E.isSunLight){let I=e.get(E);if(I.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let N=E.shadow,q=t.get(E);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),i.sunShadow[g]=q,i.sunShadowMap[g]=X;let he=N.getViewportCount();for(let le=0;le<he;le++)i.sunShadowMatrix[S+le]=N.getMatrix(le),i.sunShadowCascade[S+le]=N._cascadeData[le];S+=he,g++}i.sun[m]=I,m++}else if(E.isDirectionalLight){let I=e.get(E);if(I.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let N=E.shadow,q=t.get(E);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=E.shadow.matrix,w++}i.directional[p]=I,p++}else if(E.isSpotLight){let I=e.get(E);I.position.setFromMatrixPosition(E.matrixWorld),I.color.copy(L).multiplyScalar(F),I.distance=V,I.coneCos=Math.cos(E.angle),I.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),I.decay=E.decay,i.spot[_]=I;let N=E.shadow;if(E.map&&(i.spotLightMap[x]=E.map,x++,N.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[_]=N.matrix,E.castShadow){let q=t.get(E);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=X,P++}_++}else if(E.isRectAreaLight){let I=e.get(E);I.color.copy(L).multiplyScalar(F),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),i.rectArea[M]=I,M++}else if(E.isPointLight){let I=e.get(E);if(I.color.copy(E.color).multiplyScalar(E.intensity),I.distance=E.distance,I.decay=E.decay,E.castShadow){let N=E.shadow,q=t.get(E);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,q.shadowCameraNear=N.camera.near,q.shadowCameraFar=N.camera.far,i.pointShadow[f]=q,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=E.shadow.matrix,A++}i.point[f]=I,f++}else if(E.isHemisphereLight){let I=e.get(E);I.skyColor.copy(E.color).multiplyScalar(F),I.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[v]=I,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let O=i.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==f||O.spotLength!==_||O.rectAreaLength!==M||O.hemiLength!==v||O.numSunShadows!==g||O.numDirectionalShadows!==w||O.numPointShadows!==A||O.numSpotShadows!==P||O.numSpotMaps!==x||O.numLightProbes!==D)&&(i.sun.length=m,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=f,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-R,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,O.sunLength=m,O.directionalLength=p,O.pointLength=f,O.spotLength=_,O.rectAreaLength=M,O.hemiLength=v,O.numSunShadows=g,O.numDirectionalShadows=w,O.numPointShadows=A,O.numSpotShadows=P,O.numSpotMaps=x,O.numLightProbes=D,i.version=vv++)}function c(l,u){let d=0,h=0,m=0,g=0,S=0,p=0,f=u.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let v=l[_];if(v.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(v.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(f),m++}else if(v.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:a,setupView:c,state:i}}function wd(n){let e=new Mv(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function bv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wd(n),e.set(s,[a])):r>=o.length?(a=new wd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Av=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Ev=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Td=new lt,Br=new B,wh=new B;function Rv(n,e,t){let i=new Ss,s=new de,r=new de,o=new xt,a=new xa,c=new va,l={},u=t.maxTextureSize,d={[gi]:Xt,[Xt]:gi,[wn]:wn},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:wv,fragmentShader:Tv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Wt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(A,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===pf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let R=n.getRenderTarget(),D=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),z=n.state;z.setBlending(On),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let T=f!==this.type;T&&P.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(L=>L.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,L=A.length;E<L;E++){let F=A[E],V=F.shadow;if(V===void 0){Xe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let X=V.getFrameExtents();s.multiply(X),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,V.mapSize.y=r.y));let I=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=I,V.map===null||T===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Rs){if(F.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zt(s.x,s.y,{format:vi,type:En,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new fi(s.x,s.y,cn),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Nn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It}else F.isPointLight?(V.map=new Dc(s.x),V.map.depthTexture=new ia(s.x,An)):(V.map=new Zt(s.x,s.y),V.map.depthTexture=new fi(s.x,s.y,An)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Nn,this.type===Er?(V.map.depthTexture.compareFunction=I?Cc:Rc,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let N=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();F.isPointLight!==!0&&V.updateMatrices(F,x);for(let q=0;q<N;q++){let he=V.getCamera(q);if(F.isPointLight){let le=V.camera,Ee=V.matrix,ze=F.distance||le.far;ze!==le.far&&(le.far=ze,le.updateProjectionMatrix()),Br.setFromMatrixPosition(F.matrixWorld),le.position.copy(Br),wh.copy(le.position),wh.add(Av[q]),le.up.copy(Ev[q]),le.lookAt(wh),le.updateMatrixWorld(),Ee.makeTranslation(-Br.x,-Br.y,-Br.z),Td.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Td,le.coordinateSystem,le.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,q),n.clear();else{q===0&&(n.setRenderTarget(V.map),n.clear());let le=V.getViewport(q);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),z.viewport(o)}i=V.getFrustum(q),v(P,x,he,F,this.type)}V.isPointLightShadow!==!0&&this.type===Rs&&_(V,x),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(R,D,O)};function _(A,P){let x=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new Zt(s.x,s.y,{format:vi,type:En}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,x,m,S,null)}function M(A,P,x,R){let D=null,O=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)D=O;else if(D=x.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=D.uuid,T=P.uuid,E=l[z];E===void 0&&(E={},l[z]=E);let L=E[T];L===void 0&&(L=D.clone(),E[T]=L,P.addEventListener("dispose",w)),D=L}if(D.visible=P.visible,D.wireframe=P.wireframe,R===Rs?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=n.properties.get(D);z.light=x}return D}function v(A,P,x,R,D){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Rs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let T=e.update(A),E=A.material;if(Array.isArray(E)){let L=T.groups;for(let F=0,V=L.length;F<V;F++){let X=L[F],I=E[X.materialIndex];if(I&&I.visible){let N=M(A,I,R,D);A.onBeforeShadow(n,A,P,x,T,N,X),n.renderBufferDirect(x,null,T,N,A,X),A.onAfterShadow(n,A,P,x,T,N,X)}}}else if(E.visible){let L=M(A,E,R,D);A.onBeforeShadow(n,A,P,x,T,L,null),n.renderBufferDirect(x,null,T,L,A,null),A.onAfterShadow(n,A,P,x,T,L,null)}}let z=A.children;for(let T=0,E=z.length;T<E;T++)v(z[T],P,x,R,D)}function w(A){A.target.removeEventListener("dispose",w);for(let x in l){let R=l[x],D=A.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function Cv(n,e){function t(){let G=!1,Se=new xt,ie=null,Me=new xt(0,0,0,0);return{setMask:function(Re){ie!==Re&&!G&&(n.colorMask(Re,Re,Re,Re),ie=Re)},setLocked:function(Re){G=Re},setClear:function(Re,oe,He,Ue,mt){mt===!0&&(Re*=Ue,oe*=Ue,He*=Ue),Se.set(Re,oe,He,Ue),Me.equals(Se)===!1&&(n.clearColor(Re,oe,He,Ue),Me.copy(Se))},reset:function(){G=!1,ie=null,Me.set(-1,0,0,0)}}}function i(){let G=!1,Se=!1,ie=null,Me=null,Re=null;return{setReversed:function(oe){if(Se!==oe){let He=e.get("EXT_clip_control");oe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Se=oe;let Ue=Re;Re=null,this.setClear(Ue)}},getReversed:function(){return Se},setTest:function(oe){oe?te(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!G&&(n.depthMask(oe),ie=oe)},setFunc:function(oe){if(Se&&(oe=Zf[oe]),Me!==oe){switch(oe){case Oo:n.depthFunc(n.NEVER);break;case Bo:n.depthFunc(n.ALWAYS);break;case ko:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case zo:n.depthFunc(n.EQUAL);break;case Vo:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case Ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=oe}},setLocked:function(oe){G=oe},setClear:function(oe){Re!==oe&&(Re=oe,Se&&(oe=1-oe),n.clearDepth(oe))},reset:function(){G=!1,ie=null,Me=null,Re=null,Se=!1}}}function s(){let G=!1,Se=null,ie=null,Me=null,Re=null,oe=null,He=null,Ue=null,mt=null;return{setTest:function(ot){G||(ot?te(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!G&&(n.stencilMask(ot),Se=ot)},setFunc:function(ot,pn,Cn){(ie!==ot||Me!==pn||Re!==Cn)&&(n.stencilFunc(ot,pn,Cn),ie=ot,Me=pn,Re=Cn)},setOp:function(ot,pn,Cn){(oe!==ot||He!==pn||Ue!==Cn)&&(n.stencilOp(ot,pn,Cn),oe=ot,He=pn,Ue=Cn)},setLocked:function(ot){G=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){G=!1,Se=null,ie=null,Me=null,Re=null,oe=null,He=null,Ue=null,mt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},m=new WeakMap,g=[],S=null,p=!1,f=null,_=null,M=null,v=null,w=null,A=null,P=null,x=new je(0,0,0),R=0,D=!1,O=null,z=null,T=null,E=null,L=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(I)[1]),V=X>=1):I.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),V=X>=2);let N=null,q={},he=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),Ee=new xt().fromArray(he),ze=new xt().fromArray(le);function We(G,Se,ie,Me){let Re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(G,oe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ie;He++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Se+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return oe}let j={};j[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(ds),ce(!1),ue(Vl),te(n.CULL_FACE),ne(On);function te(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function pe(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Le(G,Se){return h[G]!==Se?(n.bindFramebuffer(G,Se),h[G]=Se,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Se),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function H(G,Se){let ie=g,Me=!1;if(G){ie=m.get(Se),ie===void 0&&(ie=[],m.set(Se,ie));let Re=G.textures;if(ie.length!==Re.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,He=Re.length;oe<He;oe++)ie[oe]=n.COLOR_ATTACHMENT0+oe;ie.length=Re.length,Me=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ie)}function se(G){return S!==G?(n.useProgram(G),S=G,!0):!1}let Ce={[Oi]:n.FUNC_ADD,[gf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};Ce[yf]=n.MIN,Ce[xf]=n.MAX;let $={[vf]:n.ZERO,[Sf]:n.ONE,[Mf]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[wf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Pf]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(G,Se,ie,Me,Re,oe,He,Ue,mt,ot){if(G===On){p===!0&&(pe(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),G!==mf){if(G!==f||ot!==D){if((_!==Oi||w!==Oi)&&(n.blendEquation(n.FUNC_ADD),_=Oi,w=Oi),ot)switch(G){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case za:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",G);break}else switch(G){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",G);break}M=null,v=null,A=null,P=null,x.set(0,0,0),R=0,f=G,D=ot}return}Re=Re||Se,oe=oe||ie,He=He||Me,(Se!==_||Re!==w)&&(n.blendEquationSeparate(Ce[Se],Ce[Re]),_=Se,w=Re),(ie!==M||Me!==v||oe!==A||He!==P)&&(n.blendFuncSeparate($[ie],$[Me],$[oe],$[He]),M=ie,v=Me,A=oe,P=He),(Ue.equals(x)===!1||mt!==R)&&(n.blendColor(Ue.r,Ue.g,Ue.b,mt),x.copy(Ue),R=mt),f=G,D=!1}function ae(G,Se){G.side===wn?pe(n.CULL_FACE):te(n.CULL_FACE);let ie=G.side===Xt;Se&&(ie=!ie),ce(ie),G.blending===Cs&&G.transparent===!1?ne(On):ne(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Me=G.stencilWrite;a.setTest(Me),Me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ye(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function ue(G){G!==ff?(te(n.CULL_FACE),G!==z&&(G===Vl?n.cullFace(n.BACK):G===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),z=G}function ge(G){G!==T&&(V&&n.lineWidth(G),T=G)}function ye(G,Se,ie){G?(te(n.POLYGON_OFFSET_FILL),(E!==Se||L!==ie)&&(E=Se,L=ie,o.getReversed()&&(Se=-Se),n.polygonOffset(Se,ie))):pe(n.POLYGON_OFFSET_FILL)}function Fe(G){G?te(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function _e(G){G===void 0&&(G=n.TEXTURE0+F-1),N!==G&&(n.activeTexture(G),N=G)}function U(G,Se,ie){ie===void 0&&(N===null?ie=n.TEXTURE0+F-1:ie=N);let Me=q[ie];Me===void 0&&(Me={type:void 0,texture:void 0},q[ie]=Me),(Me.type!==G||Me.texture!==Se)&&(N!==ie&&(n.activeTexture(ie),N=ie),n.bindTexture(G,Se||j[G]),Me.type=G,Me.texture=Se)}function Oe(){let G=q[N];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(G){Ye("WebGLState:",G)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(G){Ye("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){Ye("WebGLState:",G)}}function W(){try{n.texSubImage3D(...arguments)}catch(G){Ye("WebGLState:",G)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ye("WebGLState:",G)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ye("WebGLState:",G)}}function fe(){try{n.texStorage2D(...arguments)}catch(G){Ye("WebGLState:",G)}}function me(){try{n.texStorage3D(...arguments)}catch(G){Ye("WebGLState:",G)}}function ee(){try{n.texImage2D(...arguments)}catch(G){Ye("WebGLState:",G)}}function re(){try{n.texImage3D(...arguments)}catch(G){Ye("WebGLState:",G)}}function xe(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function Ve(G,Se){d[G]!==Se&&(n.pixelStorei(G,Se),d[G]=Se)}function be(G){Ee.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function ve(G){ze.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function Ge(G,Se){let ie=l.get(Se);ie===void 0&&(ie=new WeakMap,l.set(Se,ie));let Me=ie.get(G);Me===void 0&&(Me=n.getUniformBlockIndex(Se,G.name),ie.set(G,Me))}function qe(G,Se){let Me=l.get(Se).get(G);c.get(Se)!==Me&&(n.uniformBlockBinding(Se,Me,G.__bindingPointIndex),c.set(Se,Me))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,q={},h={},m=new WeakMap,g=[],S=null,p=!1,f=null,_=null,M=null,v=null,w=null,A=null,P=null,x=new je(0,0,0),R=0,D=!1,O=null,z=null,T=null,E=null,L=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:pe,bindFramebuffer:Le,drawBuffers:H,useProgram:se,setBlending:ne,setMaterial:ae,setFlipSided:ce,setCullFace:ue,setLineWidth:ge,setPolygonOffset:ye,setScissorTest:Fe,activeTexture:_e,bindTexture:U,unbindTexture:Oe,compressedTexImage2D:Je,compressedTexImage3D:C,texImage2D:ee,texImage3D:re,pixelStorei:Ve,getParameter:xe,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:fe,texStorage3D:me,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:J,compressedTexSubImage3D:Q,scissor:be,viewport:ve,reset:Qe}}function Pv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap,d=new Set,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return g?new OffscreenCanvas(C,y):ms("canvas")}function p(C,y,W){let J=1,Q=Je(C);if((Q.width>W||Q.height>W)&&(J=W/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(J*Q.width),me=Math.floor(J*Q.height);h===void 0&&(h=S(fe,me));let ee=y?S(fe,me):h;return ee.width=fe,ee.height=me,ee.getContext("2d").drawImage(C,0,0,fe,me),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+fe+"x"+me+")."),ee}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function f(C){return C.generateMipmaps}function _(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,y,W,J,Q,fe=!1){if(C!==null){if(n[C]!==void 0)return n[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;J&&(me=e.get("EXT_texture_norm16"),me||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8),W===n.UNSIGNED_SHORT&&me&&(ee=me.R16_EXT),W===n.SHORT&&me&&(ee=me.R16_SNORM_EXT)),y===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.R8UI),W===n.UNSIGNED_SHORT&&(ee=n.R16UI),W===n.UNSIGNED_INT&&(ee=n.R32UI),W===n.BYTE&&(ee=n.R8I),W===n.SHORT&&(ee=n.R16I),W===n.INT&&(ee=n.R32I)),y===n.RG&&(W===n.FLOAT&&(ee=n.RG32F),W===n.HALF_FLOAT&&(ee=n.RG16F),W===n.UNSIGNED_BYTE&&(ee=n.RG8),W===n.UNSIGNED_SHORT&&me&&(ee=me.RG16_EXT),W===n.SHORT&&me&&(ee=me.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RG8UI),W===n.UNSIGNED_SHORT&&(ee=n.RG16UI),W===n.UNSIGNED_INT&&(ee=n.RG32UI),W===n.BYTE&&(ee=n.RG8I),W===n.SHORT&&(ee=n.RG16I),W===n.INT&&(ee=n.RG32I)),y===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),W===n.UNSIGNED_INT&&(ee=n.RGB32UI),W===n.BYTE&&(ee=n.RGB8I),W===n.SHORT&&(ee=n.RGB16I),W===n.INT&&(ee=n.RGB32I)),y===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),W===n.UNSIGNED_INT&&(ee=n.RGBA32UI),W===n.BYTE&&(ee=n.RGBA8I),W===n.SHORT&&(ee=n.RGBA16I),W===n.INT&&(ee=n.RGBA32I)),y===n.RGB&&(W===n.UNSIGNED_SHORT&&me&&(ee=me.RGB16_EXT),W===n.SHORT&&me&&(ee=me.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),y===n.RGBA){let re=fe?er:st.getTransfer(Q);W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=re===ct?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&me&&(ee=me.RGBA16_EXT),W===n.SHORT&&me&&(ee=me.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(C,y){let W;return C?y===null||y===An||y===Is?W=n.DEPTH24_STENCIL8:y===cn?W=n.DEPTH32F_STENCIL8:y===Ps&&(W=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===An||y===Is?W=n.DEPTH_COMPONENT24:y===cn?W=n.DEPTH_COMPONENT32F:y===Ps&&(W=n.DEPTH_COMPONENT16),W}function A(C,y){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Dt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){let y=C.target;y.removeEventListener("dispose",P),R(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),O(y)}function R(C){let y=i.get(C);if(y.__webglInit===void 0)return;let W=C.source,J=m.get(W);if(J){let Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(C),Object.keys(J).length===0&&m.delete(W)}i.remove(C)}function D(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let W=C.source,J=m.get(W);delete J[y.__cacheKey],o.memory.textures--}function O(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=C.textures;for(let J=0,Q=W.length;J<Q;J++){let fe=i.get(W[J]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(C)}let z=0;function T(){z=0}function E(){return z}function L(C){z=C}function F(){let C=z;return C>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function X(C,y){let W=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let J=C.image;if(J===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,C,y);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+y)}function I(C,y){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){pe(W,C,y);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+y)}function N(C,y){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){pe(W,C,y);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+y)}function q(C,y){let W=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&W.__version!==C.version){Le(W,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+y)}let he={[Wo]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},le={[It]:n.NEAREST,[Uf]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},Ee={[kf]:n.NEVER,[Wf]:n.ALWAYS,[zf]:n.LESS,[Rc]:n.LEQUAL,[Vf]:n.EQUAL,[Cc]:n.GEQUAL,[Gf]:n.GREATER,[Hf]:n.NOTEQUAL};function ze(C,y){if(y.type===cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Dt||y.magFilter===Wa||y.magFilter===Cr||y.magFilter===yi||y.minFilter===Dt||y.minFilter===Wa||y.minFilter===Cr||y.minFilter===yi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,he[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,he[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,he[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===It||y.minFilter!==Cr&&y.minFilter!==yi||y.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function We(C,y){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));let J=y.source,Q=m.get(J);Q===void 0&&(Q={},m.set(J,Q));let fe=V(y);if(fe!==C.__cacheKey){Q[fe]===void 0&&(Q[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[fe].usedTimes++;let me=Q[C.__cacheKey];me!==void 0&&(Q[C.__cacheKey].usedTimes--,me.usedTimes===0&&D(y)),C.__cacheKey=fe,C.__webglTexture=Q[fe].texture}return W}function j(C,y,W){return Math.floor(Math.floor(C/W)/y)}function te(C,y,W,J){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,W,J,y.data);else{fe.sort((Ve,be)=>Ve.start-be.start);let me=0;for(let Ve=1;Ve<fe.length;Ve++){let be=fe[me],ve=fe[Ve],Ge=be.start+be.count,qe=j(ve.start,y.width,4),Qe=j(be.start,y.width,4);ve.start<=Ge+1&&qe===Qe&&j(ve.start+ve.count-1,y.width,4)===qe?be.count=Math.max(be.count,ve.start+ve.count-be.start):(++me,fe[me]=ve)}fe.length=me+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ve=0,be=fe.length;Ve<be;Ve++){let ve=fe[Ve],Ge=Math.floor(ve.start/4),qe=Math.ceil(ve.count/4),Qe=Ge%y.width,G=Math.floor(Ge/y.width),Se=qe,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Qe,G,Se,ie,W,J,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function pe(C,y,W){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let Q=We(C,y),fe=y.source;t.bindTexture(J,C.__webglTexture,n.TEXTURE0+W);let me=i.get(fe);if(fe.version!==me.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=st.getPrimaries(st.workingColorSpace),Me=y.colorSpace===$n?null:st.getPrimaries(y.colorSpace),Re=y.colorSpace===$n||ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let re=p(y.image,!1,s.maxTextureSize);re=Oe(y,re);let xe=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type),be=v(y.internalFormat,xe,Ve,y.normalized,y.colorSpace,y.isVideoTexture);ze(J,y);let ve,Ge=y.mipmaps,qe=y.isVideoTexture!==!0,Qe=me.__version===void 0||Q===!0,G=fe.dataReady,Se=A(y,re);if(y.isDepthTexture)be=w(y.format===xi,y.type),Qe&&(qe?t.texStorage2D(n.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,xe,Ve,null));else if(y.isDataTexture)if(Ge.length>0){qe&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,be,Ge[0].width,Ge[0].height);for(let ie=0,Me=Ge.length;ie<Me;ie++)ve=Ge[ie],qe?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Ve,ve.data):t.texImage2D(n.TEXTURE_2D,ie,be,ve.width,ve.height,0,xe,Ve,ve.data);y.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(n.TEXTURE_2D,Se,be,re.width,re.height),G&&te(y,re,xe,Ve)):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,xe,Ve,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,Ge[0].width,Ge[0].height,re.depth);for(let ie=0,Me=Ge.length;ie<Me;ie++)if(ve=Ge[ie],y.format!==ln)if(xe!==null)if(qe){if(G)if(y.layerUpdates.size>0){let Re=dh(ve.width,ve.height,y.format,y.type);for(let oe of y.layerUpdates){let He=ve.data.subarray(oe*Re/ve.data.BYTES_PER_ELEMENT,(oe+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,oe,ve.width,ve.height,1,xe,He)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,be,ve.width,ve.height,re.depth,0,ve.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,xe,Ve,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,be,ve.width,ve.height,re.depth,0,xe,Ve,ve.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{qe&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,be,Ge[0].width,Ge[0].height);for(let ie=0,Me=Ge.length;ie<Me;ie++)ve=Ge[ie],y.format!==ln?xe!==null?qe?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,be,ve.width,ve.height,0,ve.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Ve,ve.data):t.texImage2D(n.TEXTURE_2D,ie,be,ve.width,ve.height,0,xe,Ve,ve.data)}else if(y.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,re.width,re.height,re.depth),G)if(y.layerUpdates.size>0){let ie=dh(re.width,re.height,y.format,y.type);for(let Me of y.layerUpdates){let Re=re.data.subarray(Me*ie/re.data.BYTES_PER_ELEMENT,(Me+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,re.width,re.height,1,xe,Ve,Re)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Ve,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,xe,Ve,re.data);else if(y.isData3DTexture)qe?(Qe&&t.texStorage3D(n.TEXTURE_3D,Se,be,re.width,re.height,re.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Ve,re.data)):t.texImage3D(n.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,xe,Ve,re.data);else if(y.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(n.TEXTURE_2D,Se,be,re.width,re.height);else{let ie=re.width,Me=re.height;for(let Re=0;Re<Se;Re++)t.texImage2D(n.TEXTURE_2D,Re,be,ie,Me,0,xe,Ve,null),ie>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),d.add(y),ie.onpaint=Me=>{let Re=Me.changedElements;for(let oe of d)Re.includes(oe.image)&&(oe.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let Re=n.RGBA,oe=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,oe,He,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(qe&&Qe){let ie=Je(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Se,be,ie.width,ie.height)}for(let ie=0,Me=Ge.length;ie<Me;ie++)ve=Ge[ie],qe?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe,Ve,ve):t.texImage2D(n.TEXTURE_2D,ie,be,xe,Ve,ve);y.generateMipmaps=!1}else if(qe){if(Qe){let ie=Je(re);t.texStorage2D(n.TEXTURE_2D,Se,be,ie.width,ie.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ve,re)}else t.texImage2D(n.TEXTURE_2D,0,be,xe,Ve,re);f(y)&&_(J),me.__version=fe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Le(C,y,W){if(y.image.length!==6)return;let J=We(C,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);let fe=i.get(Q);if(Q.version!==fe.__version||J===!0){t.activeTexture(n.TEXTURE0+W);let me=st.getPrimaries(st.workingColorSpace),ee=y.colorSpace===$n?null:st.getPrimaries(y.colorSpace),re=y.colorSpace===$n||me===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let xe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!xe&&!Ve?be[oe]=p(y.image[oe],!0,s.maxCubemapSize):be[oe]=Ve?y.image[oe].image:y.image[oe],be[oe]=Oe(y,be[oe]);let ve=be[0],Ge=r.convert(y.format,y.colorSpace),qe=r.convert(y.type),Qe=v(y.internalFormat,Ge,qe,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Se=fe.__version===void 0||J===!0,ie=Q.dataReady,Me=A(y,ve);ze(n.TEXTURE_CUBE_MAP,y);let Re;if(xe){G&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Qe,ve.width,ve.height);for(let oe=0;oe<6;oe++){Re=be[oe].mipmaps;for(let He=0;He<Re.length;He++){let Ue=Re[He];y.format!==ln?Ge!==null?G?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,Ue.width,Ue.height,Ge,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Qe,Ue.width,Ue.height,0,Ue.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,Ue.width,Ue.height,Ge,qe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Qe,Ue.width,Ue.height,0,Ge,qe,Ue.data)}}}else{if(Re=y.mipmaps,G&&Se){Re.length>0&&Me++;let oe=Je(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ve){G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,Ge,qe,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,be[oe].width,be[oe].height,0,Ge,qe,be[oe].data);for(let He=0;He<Re.length;He++){let mt=Re[He].image[oe].image;G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,mt.width,mt.height,Ge,qe,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Qe,mt.width,mt.height,0,Ge,qe,mt.data)}}else{G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ge,qe,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Ge,qe,be[oe]);for(let He=0;He<Re.length;He++){let Ue=Re[He];G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,Ge,qe,Ue.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Qe,Ge,qe,Ue.image[oe])}}}f(y)&&_(n.TEXTURE_CUBE_MAP),fe.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function H(C,y,W,J,Q,fe){let me=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),re=v(W.internalFormat,me,ee,W.normalized,W.colorSpace),xe=i.get(y),Ve=i.get(W);if(Ve.__renderTarget=y,!xe.__hasExternalTextures){let be=Math.max(1,y.width>>fe),ve=Math.max(1,y.height>>fe);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,fe,re,be,ve,y.depth,0,me,ee,null):t.texImage2D(Q,fe,re,be,ve,0,me,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,Ve.__webglTexture,0,Fe(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,Ve.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(C,y,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,fe=w(y.stencilBuffer,Q),me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(y),fe,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(y),fe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,fe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,C)}else{let J=y.textures;for(let Q=0;Q<J.length;Q++){let fe=J[Q],me=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),re=v(fe.internalFormat,me,ee,fe.normalized,fe.colorSpace);_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(y),re,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(y),re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,re,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(C,y,W){let J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(n.TEXTURE_CUBE_MAP,y.depthTexture);let xe=r.convert(y.depthTexture.format),Ve=r.convert(y.depthTexture.type),be;y.depthTexture.format===Nn?be=n.DEPTH_COMPONENT24:y.depthTexture.format===xi&&(be=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,be,y.width,y.height,0,xe,Ve,null)}}else X(y.depthTexture,0);let fe=Q.__webglTexture,me=Fe(y),ee=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,re=y.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Nn)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,fe,0);else if(y.depthTexture.format===xi)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(C){let y=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let J=0;J<6;J++)Ce(y.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Ce(y.__webglFramebuffer[0],C,0):Ce(y.__webglFramebuffer,C,0)}else if(W){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),se(y.__webglDepthbuffer[J],C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,fe)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),se(y.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(C,y,W){let J=i.get(C);y!==void 0&&H(J.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&$(C)}function ae(C){let y=C.texture,W=i.get(C),J=i.get(y);C.addEventListener("dispose",x);let Q=C.textures,fe=C.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),fe){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let re=0;re<y.mipmaps.length;re++)W.__webglFramebuffer[ee][re]=n.createFramebuffer()}else W.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)W.__webglFramebuffer[ee]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(me)for(let ee=0,re=Q.length;ee<re;ee++){let xe=i.get(Q[ee]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&_e(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let re=Q[ee];W.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let xe=r.convert(re.format,re.colorSpace),Ve=r.convert(re.type),be=v(re.internalFormat,xe,Ve,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),ve=Fe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),se(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ze(n.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)H(W.__webglFramebuffer[ee][re],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else H(W.__webglFramebuffer[ee],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(y)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ee=0,re=Q.length;ee<re;ee++){let xe=Q[ee],Ve=i.get(xe),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Ve.__webglTexture),ze(be,xe),H(W.__webglFramebuffer,C,xe,n.COLOR_ATTACHMENT0+ee,be,0),f(xe)&&_(be)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),ze(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)H(W.__webglFramebuffer[re],C,y,n.COLOR_ATTACHMENT0,ee,re);else H(W.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,ee,0);f(y)&&_(ee),t.unbindTexture()}C.depthBuffer&&$(C)}function ce(C){let y=C.textures;for(let W=0,J=y.length;W<J;W++){let Q=y[W];if(f(Q)){let fe=M(C),me=i.get(Q).__webglTexture;t.bindTexture(fe,me),_(fe),t.unbindTexture()}}}let ue=[],ge=[];function ye(C){if(C.samples>0){if(_e(C)===!1){let y=C.textures,W=C.width,J=C.height,Q=n.COLOR_BUFFER_BIT,fe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(C),ee=y.length>1;if(ee)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let re=C.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Ve=i.get(y[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,Q,n.NEAREST),c===!0&&(ue.length=0,ge.length=0,ue.push(n.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(fe),ge.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Ve=i.get(y[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Fe(C){return Math.min(s.maxSamples,C.samples)}function _e(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(C){let y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Oe(C,y){let W=C.colorSpace,J=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Qs&&W!==$n&&(st.getTransfer(W)===ct?(J!==ln||Q!==Jt)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",W)),y}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.getTextureUnits=E,this.setTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=H,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Iv(n,e){function t(i,s=$n){let r,o=st.getTransfer(s);if(i===Jt)return n.UNSIGNED_BYTE;if(i===qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ih)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===eh)return n.BYTE;if(i===th)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Xa)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===sh)return n.ALPHA;if(i===rh)return n.RGB;if(i===ln)return n.RGBA;if(i===Nn)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===Za)return n.RED;if(i===Ja)return n.RED_INTEGER;if(i===vi)return n.RG;if(i===$a)return n.RG_INTEGER;if(i===Ka)return n.RGBA_INTEGER;if(i===Pr||i===Ir||i===Lr||i===Dr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Qa||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===Nr||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===ic)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rc)return r.COMPRESSED_R11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Nr)return r.COMPRESSED_RG11_EAC;if(i===ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cc||i===lc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===yc||i===xc||i===vc||i===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===bc||i===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mc)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===Ac||i===Ur||i===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Un{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,S=typeof XRWebGLBinding<"u",p=new Lh,f={},_=t.getContextAttributes(),M=null,v=null,w=[],A=[],P=new de,x=null,R=null,D=new Gt;D.viewport=new xt;let O=new Gt;O.viewport=new xt;let z=[D,O],T=new Oa,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=w[j];return te===void 0&&(te=new xs,w[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=w[j];return te===void 0&&(te=new xs,w[j]=te),te.getGripSpace()},this.getHand=function(j){let te=w[j];return te===void 0&&(te=new xs,w[j]=te),te.getHandSpace()};function F(j){let te=A.indexOf(j.inputSource);if(te===-1)return;let pe=w[te];pe!==void 0&&(pe.update(j.inputSource,j.frame,l||o),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let j=0;j<w.length;j++){let te=A[j];te!==null&&(A[j]=null,w[j].disconnect(te))}E=null,L=null,p.reset();for(let j in f)delete f[j];if(e.setRenderTarget(M),m=null,h=null,d=null,s=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),R!==null){let j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,H=null;_.depth&&(H=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?xi:Nn,Le=_.stencil?Is:An);let se={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zt(h.textureWidth,h.textureHeight,{format:ln,type:Jt,depthTexture:new fi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Zt(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(j){for(let te=0;te<j.removed.length;te++){let pe=j.removed[te],Le=A.indexOf(pe);Le>=0&&(A[Le]=null,w[Le].disconnect(pe))}for(let te=0;te<j.added.length;te++){let pe=j.added[te],Le=A.indexOf(pe);if(Le===-1){for(let se=0;se<w.length;se++)if(se>=A.length){A.push(pe),Le=se;break}else if(A[se]===null){A[se]=pe,Le=se;break}if(Le===-1)break}let H=w[Le];H&&H.connect(pe)}}let I=new B,N=new B;function q(j,te,pe){I.setFromMatrixPosition(te.matrixWorld),N.setFromMatrixPosition(pe.matrixWorld);let Le=I.distanceTo(N),H=te.projectionMatrix.elements,se=pe.projectionMatrix.elements,Ce=H[14]/(H[10]-1),$=H[14]/(H[10]+1),ne=(H[9]+1)/H[5],ae=(H[9]-1)/H[5],ce=(H[8]-1)/H[0],ue=(se[8]+1)/se[0],ge=Ce*ce,ye=Ce*ue,Fe=Le/(-ce+ue),_e=Fe*-ce;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_e),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),H[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=Ce+Fe,Oe=$+Fe,Je=ge-_e,C=ye+(Le-_e),y=ne*$/Oe*U,W=ae*$/Oe*U;j.projectionMatrix.makePerspective(Je,C,y,W,U,Oe),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let te=j.near,pe=j.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),T.near=O.near=D.near=te,T.far=O.far=D.far=pe,(E!==T.near||L!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,L=T.far),T.layers.mask=j.layers.mask|6,D.layers.mask=T.layers.mask&-5,O.layers.mask=T.layers.mask&-3;let Le=j.parent,H=T.cameras;he(T,Le);for(let se=0;se<H.length;se++)he(H[se],Le);H.length===2?q(T,D,O):T.projectionMatrix.copy(D.projectionMatrix),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),le(j,T,Le)};function le(j,te,pe){pe===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_s*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(T)},this.getCameraTexture=function(j){return f[j]};let Ee=null;function ze(j,te){if(u=te.getViewerPose(l||o),g=te,u!==null){let pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Le=!1;pe.length!==T.cameras.length&&(T.cameras.length=0,Le=!0);for(let $=0;$<pe.length;$++){let ne=pe[$],ae=null;if(m!==null)ae=m.getViewport(ne);else{let ue=d.getViewSubImage(h,ne);ae=ue.viewport,$===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ce=z[$];ce===void 0&&(ce=new Gt,ce.layers.enable($),ce.viewport=new xt,z[$]=ce),ce.matrix.fromArray(ne.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ne.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ae.x,ae.y,ae.width,ae.height),$===0&&(T.matrix.copy(ce.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Le===!0&&T.cameras.push(ce)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let $=d.getDepthInformation(pe[0]);$&&$.isValid&&$.texture&&p.init($,s.renderState)}if(H&&H.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let $=0;$<pe.length;$++){let ne=pe[$].camera;if(ne){let ae=f[ne];ae||(ae=new dr,f[ne]=ae);let ce=d.getCameraImage(ne);ae.sourceTexture=ce}}}}for(let pe=0;pe<w.length;pe++){let Le=A[pe],H=w[pe];Le!==null&&H!==void 0&&H.update(Le,te,l||o)}Ee&&Ee(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let We=new Ad;We.setAnimationLoop(ze),this.setAnimationLoop=function(j){Ee=j},this.dispose=function(){}}},Nv=new lt,Ld=new Ke;Ld.set(-1,0,0,0,1,0,0,0,1);function Uv(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,hh(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,_,M,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),S(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,_,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Xt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Xt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _=e.get(f),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ld),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,_,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){let _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fv(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){let A=w.program;i.uniformBlockBinding(v,A)}function l(v,w){let A=s[v.id];A===void 0&&(p(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",_));let P=w.program;i.updateUBOMapping(v,P);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let w=d();v.__bindingPointIndex=w;let A=n.createBuffer(),P=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,A),A}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let w=s[v.id],A=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,R=A.length;x<R;x++){let D=A[x];if(Array.isArray(D))for(let O=0,z=D.length;O<z;O++)m(D[O],x,O,P);else m(D,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,w,A,P){if(S(v,w,A,P)===!0){let x=v.__offset,R=v.value;if(Array.isArray(R)){let D=0;for(let O=0;O<R.length;O++){let z=R[O],T=f(z);g(z,v.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=T.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,w,A){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,A)}function S(v,w,A,P){let x=v.value,R=w+"_"+A;if(P[R]===void 0)return typeof x=="number"||typeof x=="boolean"?P[R]=x:ArrayBuffer.isView(x)?P[R]=x.slice():P[R]=x.clone(),!0;{let D=P[R];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return P[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function p(v){let w=v.uniforms,A=0,P=16;for(let R=0,D=w.length;R<D;R++){let O=Array.isArray(w[R])?w[R]:[w[R]];for(let z=0,T=O.length;z<T;z++){let E=O[z],L=Array.isArray(E.value)?E.value:[E.value];for(let F=0,V=L.length;F<V;F++){let X=L[F],I=f(X),N=A%P,q=N%I.boundary,he=N+q;A+=q,he!==0&&P-he<I.storage&&(A+=P-he),E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=A,A+=I.storage}}}let x=A%P;return x>0&&(A+=P-x),v.__size=A,v.__cache={},this}function f(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),w}function _(v){let w=v.target;w.removeEventListener("dispose",_);let A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var Ov=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function Bv(){return Bn===null&&(Bn=new lr(Ov,16,16,vi,En),Bn.name="DFG_LUT",Bn.minFilter=Dt,Bn.magFilter=Dt,Bn.wrapS=Ln,Bn.wrapT=Ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Nh=class{constructor(e={}){let{canvas:t=Xf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Jt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let S=m,p=new Set([Ka,$a,Ja]),f=new Set([Jt,An,Ps,Is,qa,Ya]),_=new Uint32Array(4),M=new Int32Array(4),v=new B,w=null,A=null,P=[],x=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,z=null,T=null,E=null,L=null;this._outputColorSpace=Yt;let F=0,V=0,X=null,I=-1,N=null,q=new xt,he=new xt,le=null,Ee=new je(0),ze=0,We=t.width,j=t.height,te=1,pe=null,Le=null,H=new xt(0,0,We,j),se=new xt(0,0,We,j),Ce=!1,$=new Ss,ne=!1,ae=!1,ce=new lt,ue=new B,ge=new xt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function _e(){return X===null?te:1}let U=i;function Oe(b,k){return t.getContext(b,k)}let Je,C,y,W,J,Q,fe,me,ee,re,xe,Ve,be,ve,Ge,qe,Qe,G,Se,ie,Me,Re,oe;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",pn,!1),U===null){let k="webgl2";if(U=Oe(k,b),U===null)throw Oe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(b){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Ye("WebGLRenderer: "+b.message),b}function He(){Je=new Xy(U),Je.init(),Me=new Iv(U,Je),C=new Uy(U,Je,e,Me),y=new Cv(U,Je),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),T=U.createFramebuffer(),E=U.createFramebuffer(),L=U.createFramebuffer(),W=new Zy(U),J=new mv,Q=new Pv(U,Je,y,J,C,Me,W),fe=new Wy(D),me=new $g(U),Re=new Dy(U,me),ee=new qy(U,me,W,Re),re=new $y(U,ee,me,Re,W),G=new Jy(U,C,Q),Ge=new Fy(J),xe=new pv(D,fe,Je,C,Re,Ge),Ve=new Uv(D,J),be=new _v,ve=new bv(Je),Qe=new Ly(D,fe,y,re,g,c),qe=new Rv(D,re,C),oe=new Fv(U,W,C,y),Se=new Ny(U,Je,W),ie=new Yy(U,Je,W),W.programs=xe.programs,D.capabilities=C,D.extensions=Je,D.properties=J,D.renderLists=be,D.shadowMap=qe,D.state=y,D.info=W}S!==Jt&&(R=new jy(S,t.width,t.height,a,s,r));let Ue=new Dh(D,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(We,j,!1))},this.getSize=function(b){return b.set(We,j)},this.setSize=function(b,k,K=!0){if(Ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}We=b,j=k,t.width=Math.floor(b*te),t.height=Math.floor(k*te),K===!0&&(t.style.width=b+"px",t.style.height=k+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(We*te,j*te).floor()},this.setDrawingBufferSize=function(b,k,K){We=b,j=k,te=K,t.width=Math.floor(b*K),t.height=Math.floor(k*K),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(S===Jt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(q)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,k,K,Y){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,k,K,Y),y.viewport(q.copy(H).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,k,K,Y){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,k,K,Y),y.scissor(he.copy(se).multiplyScalar(te).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(b){y.setScissorTest(Ce=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,K=!0){let Y=0;if(b){let Z=!1;if(X!==null){let Ae=X.texture.format;Z=p.has(Ae)}if(Z){let Ae=X.texture.type,Ie=f.has(Ae),Te=Qe.getClearColor(),De=Qe.getClearAlpha(),Be=Te.r,et=Te.g,it=Te.b;Ie?(_[0]=Be,_[1]=et,_[2]=it,_[3]=De,U.clearBufferuiv(U.COLOR,0,_)):(M[0]=Be,M[1]=et,M[2]=it,M[3]=De,U.clearBufferiv(U.COLOR,0,M))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Qe.dispose(),be.dispose(),ve.dispose(),J.dispose(),fe.dispose(),re.dispose(),Re.dispose(),oe.dispose(),xe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Su),Ue.removeEventListener("sessionend",Mu),Ri.stop()};function mt(b){b.preventDefault(),tr("WebGLRenderer: Context Lost."),O=!0}function ot(){tr("WebGLRenderer: Context Restored."),O=!1;let b=W.autoReset,k=qe.enabled,K=qe.autoUpdate,Y=qe.needsUpdate,Z=qe.type;He(),W.autoReset=b,qe.enabled=k,qe.autoUpdate=K,qe.needsUpdate=Y,qe.type=Z}function pn(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Cn(b){let k=b.target;k.removeEventListener("dispose",Cn),_m(k)}function _m(b){ym(b),J.remove(b)}function ym(b){let k=J.get(b).programs;k!==void 0&&(k.forEach(function(K){xe.releaseProgram(K)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,K,Y,Z,Ae){k===null&&(k=ye);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Te=Sm(b,k,K,Y,Z);y.setMaterial(Y,Ie);let De=K.index,Be=1;if(Y.wireframe===!0){if(De=ee.getWireframeAttribute(K),De===void 0)return;Be=2}let et=K.drawRange,it=K.attributes.position,Ne=et.start*Be,at=(et.start+et.count)*Be;Ae!==null&&(Ne=Math.max(Ne,Ae.start*Be),at=Math.min(at,(Ae.start+Ae.count)*Be)),De!==null?(Ne=Math.max(Ne,0),at=Math.min(at,De.count)):it!=null&&(Ne=Math.max(Ne,0),at=Math.min(at,it.count));let bt=at-Ne;if(bt<0||bt===1/0)return;Re.setup(Z,Y,Te,K,De);let _t,ft=Se;if(De!==null&&(_t=me.get(De),ft=ie,ft.setIndex(_t)),Z.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*_e()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(Z.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),y.setLineWidth(Nt*_e()),Z.isLineSegments?ft.setMode(U.LINES):Z.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else Z.isPoints?ft.setMode(U.POINTS):Z.isSprite&&ft.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Nt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,kt=Z._multiDrawCount,rt=De?me.get(De).bytesPerElement:1,on=J.get(Y).currentProgram.getUniforms();for(let Pn=0;Pn<kt;Pn++)on.setValue(U,"_gl_DrawID",Pn),ft.render(Nt[Pn]/rt,Pe[Pn])}else if(Z.isInstancedMesh)ft.renderInstances(Ne,bt,Z.count);else if(K.isInstancedBufferGeometry){let Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pe=Math.min(K.instanceCount,Nt);ft.renderInstances(Ne,bt,Pe)}else ft.render(Ne,bt)};function vu(b,k,K,Y){z!==null&&b.isNodeMaterial&&z.setObject(Y,b),ne===!0&&Ge.setState(b,K,!1),b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,ro(b,k,Y),b.side=gi,b.needsUpdate=!0,ro(b,k,Y),b.side=wn):ro(b,k,Y)}this.compile=function(b,k,K=null){K===null&&(K=b),z!==null&&z.renderStart(b,k,K),A=ve.get(K),A.init(k),x.push(A),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),b!==K&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),ae=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,ae),ne===!0&&Ge.setGlobalState(this.clippingPlanes,k),z!==null&&qe.render(A.state.shadowsArray,K,k);let Y=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){let Te=Ae[Ie];vu(Te,K,k,Z),Y.add(Te)}else vu(Ae,K,k,Z),Y.add(Ae)}),A=x.pop(),z!==null&&z.renderEnd(),Y},this.compileAsync=function(b,k,K=null){let Y=this.compile(b,k,K);return new Promise(Z=>{function Ae(){if(Y.forEach(function(Ie){let De=J.get(Ie).currentProgram;(De===void 0||De.isReady())&&Y.delete(Ie)}),Y.size===0){Z(b);return}setTimeout(Ae,10)}Je.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let nl=null;function xm(b){nl&&nl(b)}function Su(){Ri.stop()}function Mu(){Ri.start()}let Ri=new Ad;Ri.setAnimationLoop(xm),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(b){nl=b,Ue.setAnimationLoop(b),b===null?Ri.stop():Ri.start()},Ue.addEventListener("sessionstart",Su),Ue.addEventListener("sessionend",Mu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(b,k);let K=Ue.enabled===!0&&Ue.isPresenting===!0,Y=R!==null&&(X===null||K)&&R.begin(D,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(k),k=Ue.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,k,X),A=ve.get(b,x.length),A.init(k),A.state.textureUnits=Q.getTextureUnits(),x.push(A),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(ce,vn,k.reversedDepth),ae=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,ae),w=be.get(b,P.length),w.init(),P.push(w),Ue.enabled===!0&&Ue.isPresenting===!0){let Ie=D.xr.getDepthSensingMesh();Ie!==null&&il(Ie,k,-1/0,D.sortObjects)}il(b,k,0,D.sortObjects),w.finish(),z!==null&&z.updateLights(A.state.lightsArray),D.sortObjects===!0&&w.sort(pe,Le),Fe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Fe&&Qe.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ge.beginShadows();let Z=A.state.shadowsArray;if(qe.render(Z,b,k),ne===!0&&Ge.endShadows(),(Y&&R.hasRenderPass())===!1){let Ie=w.opaque,Te=w.transmissive;if(A.setupLights(),k.isArrayCamera){let De=k.cameras;if(Te.length>0)for(let Be=0,et=De.length;Be<et;Be++){let it=De[Be];wu(Ie,Te,b,it)}Fe&&Qe.render(b);for(let Be=0,et=De.length;Be<et;Be++){let it=De[Be];bu(w,b,it,it.viewport)}}else Te.length>0&&wu(Ie,Te,b,k),Fe&&Qe.render(b),bu(w,b,k)}X!==null&&V===0&&(Q.updateMultisampleRenderTarget(X),Q.updateRenderTargetMipmap(X)),Y&&R.end(D),b.isScene===!0&&b.onAfterRender(D,b,k),Re.resetDefaultState(),I=-1,N=null,x.pop(),x.length>0?(A=x[x.length-1],Q.setTextureUnits(A.state.textureUnits),ne===!0&&Ge.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,z!==null&&z.renderEnd()};function il(b,k,K,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($)){Y&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);let Ie=re.update(b),Te=b.material;Te.visible&&w.push(b,Ie,Te,K,ge.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($))){let Ie=re.update(b),Te=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ge.copy(Ie.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(Te)){let De=Ie.groups;for(let Be=0,et=De.length;Be<et;Be++){let it=De[Be],Ne=Te[it.materialIndex];Ne&&Ne.visible&&w.push(b,Ie,Ne,K,ge.z,it,k)}}else Te.visible&&w.push(b,Ie,Te,K,ge.z,null,k)}}let Ae=b.children;for(let Ie=0,Te=Ae.length;Ie<Te;Ie++)il(Ae[Ie],k,K,Y)}function bu(b,k,K,Y){let{opaque:Z,transmissive:Ae,transparent:Ie}=b;A.setupLightsView(K),ne===!0&&Ge.setGlobalState(D.clippingPlanes,K),Y&&y.viewport(q.copy(Y)),Z.length>0&&so(Z,k,K),Ae.length>0&&so(Ae,k,K),Ie.length>0&&so(Ie,k,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function wu(b,k,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){let Ne=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new Zt(1,1,{generateMipmaps:!0,type:Ne?En:Jt,minFilter:yi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ae=A.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||q;Ae.setSize(Ie.z*D.transmissionResolutionScale,Ie.w*D.transmissionResolutionScale);let Te=D.getRenderTarget(),De=D.getActiveCubeFace(),Be=D.getActiveMipmapLevel();D.setRenderTarget(Ae),D.getClearColor(Ee),ze=D.getClearAlpha(),ze<1&&D.setClearColor(16777215,.5),D.clear(),Fe&&Qe.render(K);let et=D.toneMapping;D.toneMapping=Tn;let it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),ne===!0&&Ge.setGlobalState(D.clippingPlanes,Y),so(b,K,Y),Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let at=0,bt=k.length;at<bt;at++){let _t=k[at],{object:ft,geometry:Nt,material:Pe,group:kt}=_t;if(Pe.side===wn&&ft.layers.test(Y.layers)){let rt=Pe.side;Pe.side=Xt,Pe.needsUpdate=!0,Tu(ft,K,Y,Nt,Pe,kt),Pe.side=rt,Pe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae))}D.setRenderTarget(Te,De,Be),D.setClearColor(Ee,ze),it!==void 0&&(Y.viewport=it),D.toneMapping=et}function so(b,k,K){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Ae=b.length;Z<Ae;Z++){let Ie=b[Z],{object:Te,geometry:De,group:Be}=Ie,et=Ie.material;et.allowOverride===!0&&Y!==null&&(et=Y),Te.layers.test(K.layers)&&Tu(Te,k,K,De,et,Be)}}function Tu(b,k,K,Y,Z,Ae){z!==null&&Z.isNodeMaterial&&z.setObject(b,Z),b.onBeforeRender(D,k,K,Y,Z,Ae),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(D,k,K,Y,b,Ae),Z.transparent===!0&&Z.side===wn&&Z.forceSinglePass===!1?(Z.side=Xt,Z.needsUpdate=!0,D.renderBufferDirect(K,k,Y,Z,b,Ae),Z.side=gi,Z.needsUpdate=!0,D.renderBufferDirect(K,k,Y,Z,b,Ae),Z.side=wn):D.renderBufferDirect(K,k,Y,Z,b,Ae),b.onAfterRender(D,k,K,Y,Z,Ae)}function ro(b,k,K){k.isScene!==!0&&(k=ye);let Y=J.get(b),Z=A.state.lights,Ae=A.state.shadowsArray,Ie=Z.state.version,Te=xe.getParameters(b,Z.state,Ae,k,K,A.state.lightProbeGridArray),De=xe.getProgramCacheKey(Te),Be=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let et=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=fe.get(b.envMap||Y.environment,et),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Cn),Be=new Map,Y.programs=Be);let it=Be.get(De);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===Ie)return Eu(b,Te),it}else Te.uniforms=xe.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,K,Te),b.onBeforeCompile(Te,D),it=xe.acquireProgram(Te,De),Be.set(De,it),Y.uniforms=Te.uniforms;let Ne=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=Ge.uniform),Eu(b,Te),Y.needsLights=bm(b),Y.lightsStateVersion=Ie,Y.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.sunLights.value=Z.state.sun,Ne.sunLightShadows.value=Z.state.sunShadow,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ne.sunShadowCascade.value=Z.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=A.state.lightProbeGridArray.length>0,Y.currentProgram=it,Y.uniformsList=null,it}function Au(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=Ns.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Eu(b,k){let K=J.get(b);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function vm(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let K=0,Y=b.length;K<Y;K++){let Z=b[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Sm(b,k,K,Y,Z){k.isScene!==!0&&(k=ye),Q.resetTextureUnits();let Ae=k.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Te=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:st.workingColorSpace,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Be=fe.get(Y.envMap||Ie,De),et=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,bt=!!K.morphAttributes.color,_t=Tn;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_t=D.toneMapping);let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Nt=ft!==void 0?ft.length:0,Pe=J.get(Y),kt=A.state.lights;if(ne===!0&&(ae===!0||b!==N)){let gt=b===N&&Y.id===I;Ge.setState(Y,b,gt)}let rt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==kt.state.version||Pe.outputColorSpace!==Te||Z.isBatchedMesh&&Pe.batching===!1||!Z.isBatchedMesh&&Pe.batching===!0||Z.isBatchedMesh&&Pe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Z.isInstancedMesh&&Pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pe.instancingMorph===!1&&Z.morphTexture!==null||Pe.envMap!==Be||Y.fog===!0&&Pe.fog!==Ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ge.numPlanes||Pe.numIntersection!==Ge.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==it||Pe.morphTargets!==Ne||Pe.morphNormals!==at||Pe.morphColors!==bt||Pe.toneMapping!==_t||Pe.morphTargetsCount!==Nt||!!Pe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Pe.__version=Y.version);let on=Pe.currentProgram;rt===!0&&(on=ro(Y,k,Z),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,on,Pe));let Pn=!1,ii=!1,Xi=!1,ut=on.getUniforms(),Mt=Pe.uniforms;if(y.useProgram(on.program)&&(Pn=!0,ii=!0,Xi=!0),Y.id!==I&&(I=Y.id,ii=!0),Pe.needsLights){let gt=vm(A.state.lightProbeGridArray,Z);Pe.lightProbeGrid!==gt&&(Pe.lightProbeGrid=gt,ii=!0)}if(Pn||N!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",b.projectionMatrix),ut.setValue(U,"viewMatrix",b.matrixWorldInverse);let ri=ut.map.cameraPosition;ri!==void 0&&ri.setValue(U,ue.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ut.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),N!==b&&(N=b,ii=!0,Xi=!0)}if(Pe.needsLights&&(kt.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",kt.state.sunShadowMap,Q),kt.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",kt.state.directionalShadowMap,Q),kt.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",kt.state.spotShadowMap,Q),kt.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",kt.state.pointShadowMap,Q)),Z.isSkinnedMesh){ut.setOptional(U,Z,"bindMatrix"),ut.setOptional(U,Z,"bindMatrixInverse");let gt=Z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ut.setValue(U,"boneTexture",gt.boneTexture,Q))}Z.isBatchedMesh&&(ut.setOptional(U,Z,"batchingTexture"),ut.setValue(U,"batchingTexture",Z._matricesTexture,Q),ut.setOptional(U,Z,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",Z._indirectTexture,Q),ut.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",Z._colorsTexture,Q));let si=K.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&G.update(Z,K,on),(ii||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,ut.setValue(U,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Mt.envMapIntensity.value=k.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Bv()),ii){if(ut.setValue(U,"toneMappingExposure",D.toneMappingExposure),Pe.needsLights&&Mm(Mt,Xi),Ae&&Y.fog===!0&&Ve.refreshFogUniforms(Mt,Ae),Ve.refreshMaterialUniforms(Mt,Y,te,j,A.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.lightProbeGrid){let gt=Pe.lightProbeGrid;Mt.probesSH.value=gt.texture,Mt.probesMin.value.copy(gt.boundingBox.min),Mt.probesMax.value.copy(gt.boundingBox.max),Mt.probesResolution.value.copy(gt.resolution)}Ns.upload(U,Au(Pe),Mt,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ns.upload(U,Au(Pe),Mt,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ut.setValue(U,"center",Z.center),ut.setValue(U,"modelViewMatrix",Z.modelViewMatrix),ut.setValue(U,"normalMatrix",Z.normalMatrix),ut.setValue(U,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let gt=Y.uniformsGroups;for(let ri=0,qi=gt.length;ri<qi;ri++){let Cu=gt[ri];oe.update(Cu,on),oe.bind(Cu,on)}}return on}function Mm(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function bm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,k,K){let Y=J.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=k,J.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){let K=J.get(b);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,K=0){X=b,F=k,V=K;let Y=null,Z=!1,Ae=!1;if(b){let Te=J.get(b);if(Te.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Te.__webglFramebuffer),q.copy(b.viewport),he.copy(b.scissor),le=b.scissorTest,y.viewport(q),y.scissor(he),y.setScissorTest(le),I=-1;return}else if(Te.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(Te.__hasExternalTextures)Q.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let et=b.depthTexture;if(Te.__boundDepthTexture!==et){if(et!==null&&J.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}let De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);let Be=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?Y=Be[k][K]:Y=Be[k],Z=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?Y=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[K]:Y=Be,q.copy(b.viewport),he.copy(b.scissor),le=b.scissorTest}else q.copy(H).multiplyScalar(te).floor(),he.copy(se).multiplyScalar(te).floor(),le=Ce;if(K!==0&&(Y=T),y.bindFramebuffer(U.FRAMEBUFFER,Y)&&y.drawBuffers(b,Y),y.viewport(q),y.scissor(he),y.setScissorTest(le),Z){let Te=J.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,K)}else if(Ae){let Te=k;for(let De=0;De<b.textures.length;De++){let Be=J.get(b.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Be.__webglTexture,K,Te)}}else if(b!==null&&K!==0){let Te=J.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,K)}I=-1};function Ru(b){let k=J.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=C.textureFormatReadable(b.format),k.__typeReadable=C.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,K,Y,Z,Ae,Ie,Te=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){y.bindFramebuffer(U.FRAMEBUFFER,De);try{let Be=b.textures[Te],et=Be.format,it=Be.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te);let Ne=Ru(Be);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&K>=0&&K<=b.height-Z&&U.readPixels(k,K,Y,Z,Me.convert(et),Me.convert(it),Ae)}finally{let Be=X!==null?J.get(X).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,k,K,Y,Z,Ae,Ie,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(k>=0&&k<=b.width-Y&&K>=0&&K<=b.height-Z){y.bindFramebuffer(U.FRAMEBUFFER,De);let Be=b.textures[Te],et=Be.format,it=Be.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te);let Ne=Ru(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(k,K,Y,Z,Me.convert(et),Me.convert(it),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let bt=X!==null?J.get(X).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,bt);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yf(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(_t),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(b.image.width*Y),Ae=Math.floor(b.image.height*Y),Ie=k!==null?k.x:0,Te=k!==null?k.y:0;Q.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ie,Te,Z,Ae),y.unbindTexture()},this.copyTextureToTexture=function(b,k,K=null,Y=null,Z=0,Ae=0){let Ie,Te,De,Be,et,it,Ne,at,bt,_t=b.isCompressedTexture?b.mipmaps[Ae]:b.image;if(K!==null)Ie=K.max.x-K.min.x,Te=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,et=K.min.y,it=K.isBox3?K.min.z:0;else{let Mt=Math.pow(2,-Z);Ie=Math.floor(_t.width*Mt),Te=Math.floor(_t.height*Mt),b.isDataArrayTexture?De=_t.depth:b.isData3DTexture?De=Math.floor(_t.depth*Mt):De=1,Be=0,et=0,it=0}Y!==null?(Ne=Y.x,at=Y.y,bt=Y.z):(Ne=0,at=0,bt=0);let ft=Me.convert(k.format),Nt=Me.convert(k.type),Pe;k.isData3DTexture?(Q.setTexture3D(k,0),Pe=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),Pe=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),Pe=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let kt=y.getParameter(U.UNPACK_ROW_LENGTH),rt=y.getParameter(U.UNPACK_IMAGE_HEIGHT),on=y.getParameter(U.UNPACK_SKIP_PIXELS),Pn=y.getParameter(U.UNPACK_SKIP_ROWS),ii=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(U.UNPACK_SKIP_ROWS,et),y.pixelStorei(U.UNPACK_SKIP_IMAGES,it);let Xi=b.isDataArrayTexture||b.isData3DTexture,ut=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){let Mt=J.get(b),si=J.get(k),gt=J.get(Mt.__renderTarget),ri=J.get(si.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let qi=0;qi<De;qi++)Xi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(b).__webglTexture,Z,it+qi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(k).__webglTexture,Ae,bt+qi)),U.blitFramebuffer(Be,et,Ie,Te,Ne,at,Ie,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||J.has(b)){let Mt=J.get(b),si=J.get(k);y.bindFramebuffer(U.READ_FRAMEBUFFER,E),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let gt=0;gt<De;gt++)Xi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,Z,it+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,Z),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,si.__webglTexture,Ae,bt+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,si.__webglTexture,Ae),Z!==0?U.blitFramebuffer(Be,et,Ie,Te,Ne,at,Ie,Te,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(Pe,Ae,Ne,at,bt+gt,Be,et,Ie,Te):U.copyTexSubImage2D(Pe,Ae,Ne,at,Be,et,Ie,Te);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pe,Ae,Ne,at,bt,Ie,Te,De,ft,Nt,_t.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,Ae,Ne,at,bt,Ie,Te,De,ft,_t.data):U.texSubImage3D(Pe,Ae,Ne,at,bt,Ie,Te,De,ft,Nt,_t):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Ne,at,Ie,Te,ft,Nt,_t.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Ne,at,_t.width,_t.height,ft,_t.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Ne,at,Ie,Te,ft,Nt,_t);y.pixelStorei(U.UNPACK_ROW_LENGTH,kt),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),y.pixelStorei(U.UNPACK_SKIP_PIXELS,on),y.pixelStorei(U.UNPACK_SKIP_ROWS,Pn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ii),Ae===0&&k.generateMipmaps&&U.generateMipmap(Pe),y.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){F=0,V=0,X=null,y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var kh=Object.freeze,Si=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Gr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Vd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,kv=kh({p:Si,n:Gr,h:1n,a:0n,b:7n,Gx:Vd,Gy:Gd}),Rn=32,Dd=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,hn=(n,e,t="")=>{if(Dd(n)&&(e===void 0||n.length===e))return n;let i=Dd(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(o):new TypeError(o)},zv=n=>Uint8Array.from(n),Vv=(n,e,t)=>zv(hn(n,t,e)),Hd=(n,e)=>n.toString(16).padStart(e,"0"),Wd=n=>{let e="";for(let t of hn(n))e+=Hd(t,2);return e},Xd=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){let r=n.charCodeAt(s),o=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(o&15)+(o>>6)*9}return t},Nd=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Fs=(...n)=>{let e=0;for(let s of n)e+=hn(s).length;let t=new Uint8Array(e),i=0;for(let s of n)t.set(s,i),i+=s.length;return t},zh=(n=Rn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},Gv=BigInt,Hr=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},ke=(n,e=Si)=>(n%=e)>=0n?n:e+n,Oc=n=>ke(n,Gr),Hv=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=ke(n,e),i=e,s=0n,r=1n;for(;t!==0n;){let a=i/t,c=i-t*a,l=s-r*a;i=t,t=c,s=r,r=l}if(i!==1n)throw new Error("invert: does not exist");return ke(s,e)},qd=n=>{let e=Yv[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},Ud=(n,e,t)=>hn(qd(n)(e,t),Rn,"digest"),Fd=async(n,e,t)=>hn(await qd(n)(e,t),Rn,"digest");var Uh=n=>{if(n instanceof Mi)return n;throw new TypeError("Point expected")},Fh="bad point: not on curve",Yd=n=>ke(ke(n*n)*n+7n),Od=n=>Hr(n,0n,Si),zr=n=>Hr(n,1n,Si),Zd=n=>Hr(n,1n,Gr),Bc=n=>!(n&1n),Wv=n=>Uint8Array.of(Bc(n)?2:3),Jd=n=>{let e=Yd(zr(n)),t=1n;for(let i=e,s=(Si+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%Si),i=i*i%Si;if(ke(t*t)!==e)throw new Error("sqrt invalid");return new Mi(n,Bc(t)?t:ke(-t),1n)},Kn=class Kn{constructor(e,t,i){zt(this,"X");zt(this,"Y");zt(this,"Z");this.X=Od(e),this.Y=zr(t),this.Z=Od(i),kh(this)}static CURVE(){return kv}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Vr:new Kn(t,i,1n)}static fromBytes(e){hn(e);let t=e.length,i=e[0],s=Fc(e,1,33);try{if(t===33&&(i===2||i===3)){let r=Jd(s);return i===3?r.negate():r}if(t===65&&i===4)return new Kn(s,Fc(e,33,65),1n).assertValidity()}catch{throw new Error(Fh)}throw new Error(Fh)}static fromHex(e){return Kn.fromBytes(Xd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=Uh(e);return ke(t*a)===ke(r*s)&&ke(i*a)===ke(o*s)}is0(){return this.Z===0n}negate(){return new Kn(this.X,ke(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=Uh(e),c=0n,l=7n,u=0n,d=0n,h=0n,m=ke(l*3n),g=ke(t*r),S=ke(i*o),p=ke(s*a),f=ke(t+i),_=ke(r+o);f=ke(f*_),_=ke(g+S),f=ke(f-_),_=ke(t+s);let M=ke(r+a);return _=ke(_*M),M=ke(g+p),_=ke(_-M),M=ke(i+s),u=ke(o+a),M=ke(M*u),u=ke(S+p),M=ke(M-u),h=ke(c*_),u=ke(m*p),h=ke(u+h),u=ke(S-h),h=ke(S+h),d=ke(u*h),S=ke(g+g),S=ke(S+g),p=ke(c*p),_=ke(m*_),S=ke(S+p),p=ke(g-p),p=ke(c*p),_=ke(_+p),g=ke(S*_),d=ke(d+g),g=ke(M*_),u=ke(f*u),u=ke(u-g),g=ke(f*S),h=ke(M*h),h=ke(h+g),new Kn(u,d,h)}subtract(e){return this.add(Uh(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Vr;if(Zd(e),e===1n)return this;if(this.equals(Vi))return tS(e).p;let i=Vr,s=Vi,r=this;for(let o=0;t?o<256:e>0n;o++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let s=Hv(i,Si);if(ke(i*s)!==1n)throw new Error("inverse invalid");return{x:ke(e*s),y:ke(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(zr(e),zr(t),ke(t*t)!==Yd(e))throw new Error(Fh);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),s=jn(t);return e?Fs(Wv(i),s):Fs(Uint8Array.of(4),s,jn(i))}toHex(e){return Wd(this.toBytes(e))}};zt(Kn,"BASE"),zt(Kn,"ZERO");var Mi=Kn,Vi=new Mi(Vd,Gd,1n),Vr=new Mi(0n,1n,0n);Mi.BASE=Vi;Mi.ZERO=Vr;var Xv=(n,e,t)=>Vi.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Gi=n=>Gv("0x"+(Wd(n)||"0")),Fc=(n,e,t)=>Gi(n.subarray(e,t)),jn=n=>Xd(Hd(Hr(n,0n,2n**256n),Rn*2)),qv=n=>{let e=Gi(hn(n,Rn,"secret key"));return Hr(e,1n,Gr,"invalid secret key: outside of range")};var Bd="SHA-256",Yv={hmacSha256Async:async(n,e)=>{let t=Nd(),i=await t.importKey("raw",n,{name:"HMAC",hash:Bd},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await Nd().digest(Bd,n)),sha256:void 0};var Zv=n=>{if(n=n===void 0?zh(48):n,hn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=ke(Gi(n),Gr-1n);return jn(e+1n)},Jv=n=>e=>{let t=Zv(e);return{secretKey:t,publicKey:n(t)}};var $d=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Oh=(n,...e)=>{let t=Ud("sha256",$d(n));return Ud("sha256",Fs(t,t,...e))},Bh=(n,...e)=>Fd("sha256Async",$d(n)).then(t=>Fd("sha256Async",Fs(t,t,...e))),Vh=n=>{let e=qv(n),t=Vi.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=Bc(s)?e:Oc(-e),o=jn(i);return{d:r,px:o}},Gh=n=>Oc(Gi(n)),Kd=(...n)=>Gh(Oh("challenge",...n)),jd=async(...n)=>Gh(await Bh("challenge",...n)),Qd=n=>Vh(n).px,$v=Jv(Qd),ep=(n,e,t)=>{let i=Vv(n,"message"),{px:s,d:r}=Vh(e);return{m:i,px:s,d:r,a:hn(t,Rn)}},tp=n=>{let e=Gh(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=Vh(jn(e));return{rx:t,k:i}},np=(n,e,t,i)=>Fs(e,jn(Oc(n+t*i))),ip="invalid signature produced",Kv=(n,e,t=zh(Rn))=>{let{m:i,px:s,d:r,a:o}=ep(n,e,t),a=jn(r^Gi(Oh("aux",o))),{rx:c,k:l}=tp(Oh("nonce",a,s,i)),u=np(l,c,Kd(c,s,i),r);if(!rp(u,i,s))throw new Error(ip);return u},jv=async(n,e,t=zh(Rn))=>{let{m:i,px:s,d:r,a:o}=ep(n,e,t),a=jn(r^Gi(await Bh("aux",o))),{rx:c,k:l}=tp(await Bh("nonce",a,s,i)),u=np(l,c,await jd(c,s,i),r);if(!await op(u,i,s))throw new Error(ip);return u},Qv=(n,e)=>n instanceof Promise?n.then(e):e(n),sp=(n,e,t,i)=>{let s=hn(n,64,"signature"),r=hn(e,void 0,"message"),o=hn(t,Rn,"publicKey"),a,c,l,u;try{let d=Gi(o);a=Jd(d),c=zr(Fc(s,0,Rn)),l=Zd(Fc(s,Rn,64)),u=Fs(jn(c),o,r)}catch{return!1}return Qv(i(u),d=>{try{let{x:h,y:m}=Xv(a,l,Oc(-d)).toAffine();return!(!Bc(m)||h!==c)}catch{return!1}})},rp=(n,e,t)=>sp(n,e,t,Kd),op=async(n,e,t)=>sp(n,e,t,jd),Hh=kh({keygen:$v,getPublicKey:Qd,sign:Kv,verify:rp,signAsync:jv,verifyAsync:op}),eS=()=>{let n=[],e=Vi,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n},kd,zd=(n,e)=>{let t=e.negate();return n?t:e},tS=n=>{let e=kd||(kd=eS()),t=Vr,i=Vi;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);let o=s*128,a=o+Math.abs(r)-1,c=s%2!==0,l=r<0;r===0?i=i.add(zd(c,e[o])):t=t.add(zd(l,e[a]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}};var{floor:Wh,min:nS,sin:iS}=Math,pt="Trystero",qr=(n,e)=>Array(n).fill(void 0).map(e),sS="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",nn=n=>qr(n,()=>sS[Wh(Math.random()*62)]??"").join(""),Ct=nn(20),$t=Promise.all.bind(Promise),qh=typeof window<"u",{entries:zn,fromEntries:Yh,keys:qt,values:un}=Object,vt=()=>{},kc="candidate",$e=n=>(n!==null&&clearTimeout(n),null),Ze=n=>new Error(`${pt}: ${n}`),Qn=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:Tt(n??e),fn=(n,e)=>n instanceof Error?n:Ze(Qn(n,e)),rS=new TextEncoder,oS=new TextDecoder,sn=n=>rS.encode(n),dn=n=>oS.decode(n),ei=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),bi=(...n)=>n.join("@"),aS=(n,e)=>{let t=[...n],i=()=>{let r=iS(e++)*1e4;return r-Wh(r)},s=t.length;for(;s;){let r=Wh(i()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},Zh=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?aS(e,zc(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),Tt=JSON.stringify,Vn=n=>{try{return JSON.parse(n)}catch{throw Ze(`failed to parse JSON: ${n}`)}},zc=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,ap=3333,cS=6e4,Wr={},Xr=null,Xh=null,Jh=()=>{Xr||(Xr=new Promise(n=>{Xh=n}).finally(()=>{Xh=null,Xr=null}))},$h=()=>{Xh?.()},Kh=(n,e,t)=>{let i={},s=!1,r=!1,o,a=vt;i.isClosed=!1,i.ready=new Promise(l=>a=l);let c=()=>{if(i.isClosed)return;o=void 0,r=!1;let l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||r)return;if(r=!0,Xr){Xr.then(c);return}let u=Wr[n]??(Wr[n]=ap);o=setTimeout(c,Math.random()*u),Wr[n]=nS(u*2,cS)},l.onmessage=u=>e(String(u.data)),i.socket=l,i.url=l.url,l.onopen=()=>{let u=s;s=!0,a(i),Wr[n]=ap,u&&t?.()},i.send=u=>{l.readyState===1&&l.send(u)}};return i.close=()=>{i.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),i.socket.close()},c(),i};var jh=n=>{let e={},t=new WeakMap,i=o=>{let a=t.get(o);if(!a)throw Ze("relay bookkeeping missing registration for relay client");return a},s=()=>{let o={},a=c=>o[c]??(o[c]={});return{forKey:a,forRelay:c=>a(i(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{let c=e[o];return c||r(o,a())},keyOf:i,scoped:s,getSockets:()=>Yh(zn(e).flatMap(([o,a])=>{let c=n(a);return c?[[o,c]]:[]}))}},cp=()=>{if(qh){let n=new AbortController;return addEventListener("online",$h,{signal:n.signal}),addEventListener("offline",Jh,{signal:n.signal}),()=>n.abort()}return vt};var eu="AES-GCM",Qh={},lS=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),hS=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Hi=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,sn(e))),ti=async n=>Qh[n]??(Qh[n]=Array.from(await Hi("SHA-1",n)).map(e=>e.toString(36)).join("")),lp=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},sn(`${n}:${e}:${t}`)),{name:eu},!1,["encrypt","decrypt"]),hp=async(n,e)=>ei(await Hi("SHA-256",`${pt}:${n}:${e}`)),up="$",fp=",",dp=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(fp)+up+lS(await crypto.subtle.encrypt({name:eu,iv:t},await n,sn(e)))},pp=async(n,e)=>{let[t,i]=e.split(up);return dn(await crypto.subtle.decrypt({name:eu,iv:new Uint8Array(t?.split(fp).map(Number)??[])},await n,hS(i??"")))};var uS=18e4,mp=class{constructor(n){zt(this,"makeOffer");zt(this,"leased",new Map);zt(this,"destroyed",!1);this.makeOffer=n}claimLeased(n){let e=this.leased.get(n);e&&($e(e),this.leased.delete(n))}reclaimLeased(n){this.leased.has(n)&&(this.claimLeased(n),n.destroy())}checkout(n,e,t){let i=async(s=!1)=>{if(this.destroyed)throw Ze("room left while preparing offer");let r=this.makeOffer();try{let o=await t(r);if(this.destroyed)throw Ze("room left while preparing offer");return e?(this.leased.set(r,setTimeout(()=>{this.leased.delete(r),r.destroy()},uS)),{peer:r,offer:o,claim:()=>this.claimLeased(r),reclaim:()=>this.reclaimLeased(r)}):{peer:r,offer:o}}catch(o){if(r.destroy(),!s&&!this.destroyed)return i(!0);throw o}};return $t(qr(n,()=>i()))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.destroyed=!0,this.leased.forEach((n,e)=>{$e(n),e.destroy()}),this.leased.clear()}};var tu=Ze("incorrect password for overlapping room"),gp=(n,e,t)=>{let i=o=>Hi("SHA-256",`${o}:${n}:${e}:${t}`).then(ei),s=async(o,a,c)=>{if(!n)return;if(c){let u=nn(36);await o({__trystero_pw:"challenge",c:u});let{data:d}=await a();if(!d||typeof d!="object"||d.__trystero_pw!=="response"||typeof d.h!="string")throw tu;let h=await i(u);if(d.h!==h)throw tu;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw tu;await o({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:o=>n||o?async(a,c,l,u)=>{await s(c,l,u),await o?.(a,c,l,u)}:void 0}},fS=n=>{let e=Qn(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},_p=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{let a={},c=(d,h)=>{let m=a[d];!m||h&&m.peer!==h||m.isActive||!m.didLocalHandshakePass||!m.didReceiveRemoteReady||(m.isActive=!0,m.handshakeTimer=$e(m.handshakeTimer),r(d,m.peer))},l=(d,h,m)=>{let g=a[d];if(!g||g.peer!==h)return;let S=fS(m);e?.(d,S),o(d,h,Ze(S))},u=(d,h)=>{let m=a[d];!m||m.peer!==h||m.isActive||(m.didLocalHandshakePass=!0,s("",d).catch(g=>l(d,h,Ze(`failed sending handshake readiness: ${Qn(g,"unknown send failure")}`))),c(d,h))};return{addPeer:(d,h)=>{a[d]={peer:h,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,h)=>{let m=a[d];m&&(m.handshakeTimer=$e(m.handshakeTimer),m.pendingHandshakePayloads.length=0,m.handshakeWaiters.splice(0).forEach(g=>g.reject(h)),delete a[d])},canReceiveFromPeer:(d,h)=>{let m=a[d];return!!(m&&(m.isActive||h))},start:(d,h)=>{let m=a[d];if(!m||m.peer!==h)return;m.handshakeTimer=setTimeout(()=>l(d,h,Ze(`handshake timed out after ${t}ms`)),t);let g=async(f,_)=>{await i(f,d,_)},S=()=>new Promise((f,_)=>{let M=a[d];if(!M||M.peer!==h){_(Ze("peer disconnected during handshake"));return}let v=M.pendingHandshakePayloads.shift();if(v){f(v);return}M.handshakeWaiters.push({resolve:f,reject:w=>_(w)})}),p=Ct<d;Promise.resolve(n?.(d,g,S,p)).then(()=>u(d,h)).catch(f=>l(d,h,fn(f,"handshake failed")))},receiveHandshakeData:(d,h,m)=>{let g=a[h];if(!g||g.isActive)return;let S=m===void 0?{data:d}:{data:d,metadata:m},p=g.handshakeWaiters.shift();if(p){p.resolve(S);return}if(g.pendingHandshakePayloads.length>=16){l(h,g.peer,Ze("too many pending handshake messages"));return}g.pendingHandshakePayloads.push(S)},receiveHandshakeReady:d=>{let h=a[d];!h||h.isActive||(h.didReceiveRemoteReady=!0,c(d))}}};var dS=15e3,pS=150,mS=5e3,yp="icecandidate",xp="icegatheringstatechange",gS="iceconnectionstatechange",Yr="offer",_S="answer",yS=/out of range/i,xS=128,vS=8192,vp=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),nu=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let o=new(i??RTCPeerConnection)({iceServers:Sp.concat(s??[]),...t}),a={},c=new Set,l=[],u=[],d=null,h=e!==!1,m=[],g=[],S,p=!1,f=!1,_=null,M=null,v=!1,w=H=>{S&&(S(H),S=void 0)},A=()=>M=$e(M),P=()=>{v||(v=!0,c.forEach(H=>H()),d=$e(d),u.length=0,A(),a.close?.())},x=H=>{H.type===Yr&&(w(H),!a.signal&&!o.remoteDescription)||(a.signal?a.signal(H):l.push(H))},R=H=>{let se=a.signal;a.signal=Ce=>{se?.(Ce),H(Ce)},l.length>0&&l.splice(0).forEach(Ce=>a.signal?.(Ce))},D=H=>r?vp(H):H,O=H=>{if(!r||typeof H.candidate!="string")return H;let se=vp(H.candidate);return se===H.candidate?H:{...H,candidate:se}},z=H=>({type:H.localDescription?.type??Yr,sdp:D(H.localDescription?.sdp??"")}),T=()=>{let H=o.remoteDescription?.sdp;return H?H.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},E=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,L=H=>{if(!o.remoteDescription)return!1;let se=E();if(typeof H.sdpMLineIndex=="number"&&se>0&&H.sdpMLineIndex>=se)return!1;let Ce=T();return!(Ce&&H.usernameFragment&&H.usernameFragment!==Ce)},F=async H=>{try{return await o.addIceCandidate(H),!0}catch(se){if(se instanceof Error&&yS.test(se.message)&&typeof H.sdpMLineIndex=="number")return!1;throw se}},V=H=>{m.length>=xS&&m.shift(),m.push(H)},X=async()=>{if(!o.remoteDescription||m.length===0)return;let H=T(),se=m.splice(0),Ce=[];for(let $ of se)if(!(H&&$.usernameFragment&&$.usernameFragment!==H)){if(!L($)){Ce.push($);continue}await F($)||Ce.push($)}Ce.forEach(V)},I=async H=>{if(L(H)){await F(H)||V(H);return}V(H)},N=H=>{H.binaryType="arraybuffer",H.bufferedAmountLowThreshold=65535;let se=()=>{console.warn(`${pt}: invalid or excessive data before handler registration; disconnecting peer`),H.close(),o.close(),P()};H.onmessage=Ce=>{let $=Ce.data;if(!v){if(!($ instanceof ArrayBuffer)&&!ArrayBuffer.isView($)||$.byteLength>16515){se();return}if(a.data)a.data($);else{if(u.length>=64){se();return}d||(d=setTimeout(se,1e4)),u.push($)}}},H.onopen=()=>a.connect?.(),H.onclose=P,H.onerror=({error:Ce})=>{v||Ce?.errorDetail==="sctp-failure"&&(Ce.sctpCauseCode===12||/^User-Initiated Abort\b/.test(Ce.message))||a.error?.(fn(Ce,"data channel error"))}},q=t?.iceServers??Sp.concat(s??[]),he=H=>q.some(({urls:se})=>(Array.isArray(se)?se:[se]).some(Ce=>H.test(Ce))),le=he(/^turns?:/i),Ee=!le&&he(/^stuns?:/i),ze=le?/\btyp relay\b/:Ee?/\btyp (?:srflx|relay|prflx)\b/:/\btyp (?:host|srflx|relay|prflx)\b/,We=async H=>(await new Promise(se=>{let Ce=null,$=null,ne=()=>{$e(Ce),$e($),H.removeEventListener(xp,ce),H.removeEventListener(yp,ue),c.delete(ne),se()},ae=(ge="")=>{let ye=`${H.localDescription?.sdp??""}
${ge}`;ze.test(ye)&&($e($),$=setTimeout(ne,pS))},ce=()=>{H.iceGatheringState==="complete"||v?ne():ae()},ue=ge=>{let{candidate:ye}=ge;ye?ae(ye.candidate):ne()};c.add(ne),Ce=setTimeout(ne,dS),H.addEventListener(xp,ce),H.addEventListener(yp,ue),ce()}),z(H)),j=async()=>{let H=h?z(o):await We(o);return v||x(H),H};n?(_=o.createDataChannel("data"),N(_)):o.ondatachannel=({channel:H})=>{_=H,N(H)};let te=async(H=!1)=>{if(o.connectionState==="closed"||!H&&(p||o.signalingState!=="stable")){o.connectionState==="closed"&&w();return}try{return p=!0,H&&(o.remoteDescription&&o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Yr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(H?await o.createOffer({iceRestart:!0}):void 0),await j()}catch(se){H||w(),a.error?.(fn(se,"failed to create local offer"))}finally{p=!1}};o.onnegotiationneeded=async()=>te(!1),o.onicecandidate=({candidate:H})=>{if(!h||!H)return;let se=O(typeof H.toJSON=="function"?H.toJSON():{candidate:H.candidate,sdpMid:H.sdpMid,sdpMLineIndex:H.sdpMLineIndex,usernameFragment:H.usernameFragment});x({type:kc,sdp:JSON.stringify(se)})};let pe=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){P();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){A();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){M||(M=setTimeout(()=>{M=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&P()},mS));return}};o.onconnectionstatechange=pe,o.addEventListener(gS,pe),o.ontrack=H=>{let se=H.streams[0];if(se){if(!a.track&&!a.stream){g.push({track:H.track,stream:se});return}a.track?.(H.track,se),a.stream?.(se)}};let Le=n?new Promise(H=>{S=H}):Promise.resolve();return n&&queueMicrotask(()=>{!p&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{connection:o,get channel(){return _},get isDead(){return o.connectionState==="closed"},getOffer:async(H=!1)=>{if(n)return H?te(!0):S?Le:o.localDescription?.type===Yr?h?z(o):We(o):Le},async signal(H){if(H.type==="candidate"){if(H.sdp.length>vS)return;try{let se=JSON.parse(H.sdp);se&&typeof se=="object"&&await I(O(se))}catch(se){a.error?.(fn(se,"failed to parse remote candidate"))}return}if(!(_?.readyState==="open"&&!H.sdp?.includes("a=rtpmap")))try{let se={...H,sdp:D(H.sdp)};if(H.type===Yr){let Ce=p||o.signalingState!=="stable"&&!f;return Ce&&n?void 0:(Ce&&o.signalingState!=="stable"?await $t([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(se)]):await o.setRemoteDescription(se),await X(),await o.setLocalDescription(),await j())}if(H.type===_S){f=!0;try{await o.setRemoteDescription(se),await X()}finally{f=!1}}}catch(se){a.error?.(fn(se,"failed to apply remote signal"))}},sendData:H=>_?.send(H),destroy:()=>{A(),w(),_?.close(),o.close(),p=!1,f=!1,P()},setHandlers:H=>{let{signal:se,...Ce}=H;Object.assign(a,Ce),a.data&&u.length>0&&(d=$e(d),u.splice(0).forEach($=>a.data?.($))),se&&R(se),(a.track||a.stream)&&g.length>0&&g.splice(0).forEach(({track:$,stream:ne})=>{a.track?.($,ne),a.stream?.(ne)})},addStream:H=>H.getTracks().forEach(se=>o.addTrack(se,H)),removeStream:H=>o.getSenders().filter(se=>se.track&&H.getTracks().includes(se.track)).forEach(se=>o.removeTrack(se)),addTrack:(H,se)=>o.addTrack(H,se),removeTrack:H=>{let se=o.getSenders().find(Ce=>Ce.track===H);se&&o.removeTrack(se)},replaceTrack:(H,se)=>{let Ce=o.getSenders().find($=>$.track===H);if(Ce)return Ce.replaceTrack(se)}}},Sp=[...qr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n}));var SS=1024,MS=64,bS=128,wS=8,TS=new Uint8Array,AS=(n,e)=>{let t;try{t=n()}catch{return e(!1)}return typeof t=="boolean"?e(t):Promise.resolve(t).then(i=>e(i===!0),()=>e(!1))},Mp=(n,e,t)=>e===2?t?n.slice():n:e===1?Vn(dn(n)):dn(n),wp=(n,e,t,i)=>{try{n.progress(e,t,i)}catch(s){console.error(`${pt} progress handler error:`,s)}},bp=(n,e,t,i)=>{wp(n,1,t,i);try{n.receiver?.(e,t,i)}catch(s){console.error(`${pt} action handler error:`,s)}},Tp=({fail:n,accept:e,refuse:t,maxReceiveBytes:i,chunkSize:s})=>{let r=new Map,o=new Map,a=new Set,c=new Map,l=0,u=0,d=0,h=!1,m=!1,g=T=>T.phase!=="released",S=T=>Math.min(i,T?.maxPayloadBytes??i),p=(T,E,L,F)=>{L?.reject(E),r.get(T.type)?.reject?.(T.peerId,T.metadata,E),F!==void 0&&t(T.peerId,F,E)},f=T=>{for(let E of Array.from(a))E.peerId===T&&(a.delete(E),a.add(E))},_=T=>{if(!g(T))return;T.phase="released",T.removeAbortListener?.(),T.timer=$e(T.timer);let E=o.get(T.peerId);if(T.kind==="inline"){let L=E.inline.get(T.key);L.splice(L.indexOf(T),1),L.length||E.inline.delete(T.key),T.data=TS}else E.bulk.delete(T.id),a.delete(T),T.data=null,T.transfer==="receiving"&&(d-=T.size,E.active===T&&(E.active=null,f(T.peerId)),m=!0);E.count--,l--,E.count||o.delete(T.peerId),T.controller?.abort()},M=(T,E)=>{g(T)&&(_(T),p(T,E,T.scope,T.kind==="bulk"?T.id:void 0))},v=(T,E)=>{if(T.phase!=="pending")return T.phase==="ready";if(T.size>S(E))return M(T,"payload exceeds receiver size limit"),!1;let L=T.scope?T.scope.receive:E.receive;if(!L)return E.receiver?(T.phase="ready",!0):!1;if(u>=bS||(c.get(T.peerId)??0)>=wS)return M(T,"too many pending receive decisions"),!1;T.phase="deciding";let F=new AbortController;T.controller=F,u++,c.set(T.peerId,(c.get(T.peerId)??0)+1);let V=AS(()=>L({byteLength:T.size,peerId:T.peerId,signal:F.signal,...T.metadata===void 0?{}:{metadata:T.metadata}}),X=>{u--;let I=c.get(T.peerId)-1;return I?c.set(T.peerId,I):c.delete(T.peerId),g(T)?(X?T.phase="ready":M(T,"payload rejected by receiver"),X):!1});return typeof V=="boolean"?V:(V.then(()=>R()),!1)},w=(T,E,L)=>{let F;try{F=Mp(L,T.format,T.kind==="inline")}catch{_(T),n(T.peerId,"invalid action payload");return}_(T),bp(E,F,T.peerId,T.metadata)},A=T=>{let E=r.get(T.type);g(T)&&E&&v(T,E)&&E.receiver&&w(T,E,T.data)},P=T=>{let E=r.get(T.type);if(!g(T)||!E||!v(T,E)||!E.receiver)return;if(T.transfer==="receiving"){T.offset===T.size&&w(T,E,T.data);return}let L=o.get(T.peerId);!L.active&&d+T.size<=i&&(L.active=T,T.transfer="receiving",d+=T.size,T.lastSeen=Date.now(),a.delete(T),e(T.peerId,T.id))},x=(T,E)=>{let L=o.get(T)?.inline.get(E);for(;L?.[0];){let F=L[0];if(A(F),g(F))break}},R=()=>{if(h){m=!0;return}h=!0;try{do{m=!1;for(let T of a)P(T);for(let[T,E]of o){for(let L of E.bulk.values())L.offset===L.size&&P(L);for(let L of E.inline.keys())x(T,L)}}while(m)}finally{h=!1}},D=T=>{let E=o.get(T.peerId);if(l>=SS||(E?.count??0)>=MS)return p(T,"too many pending transfers",T.scope,T.kind==="bulk"?T.id:void 0),!1;if(E||(E={bulk:new Map,inline:new Map,active:null,count:0},o.set(T.peerId,E)),E.count++,l++,T.kind==="inline"){let F=E.inline.get(T.key)??[];F.push(T),E.inline.set(T.key,F)}else E.bulk.set(T.id,T),a.add(T);let L=()=>{let F=12e4-(Date.now()-T.lastSeen);F>0?T.timer=setTimeout(L,F):(M(T,"action transfer timed out"),R())};if(T.timer=setTimeout(L,12e4),T.scope){let{signal:F}=T.scope,V=()=>{M(T,"receive cancelled"),R()};if(F.addEventListener("abort",V,{once:!0}),T.removeAbortListener=()=>F.removeEventListener("abort",V),F.aborted)return V(),!1}return!0},O=(T,E)=>{let L=r.get(T.type),F=L?.receiveScope?.(T.peerId,T.metadata);return F===null||F?.signal.aborted?(E!==void 0&&t(T.peerId,E,"unexpected response"),null):T.size>S(L)?(p(T,"payload exceeds receiver size limit",F,E),null):{action:L,scope:F}},z=(T,E)=>({...T,...E?{scope:E}:{},phase:"pending",controller:null,lastSeen:Date.now(),timer:null});return{register:(T,E={})=>{let L={...E,receiver:null,receive:null,reject:null,progress:vt};return r.set(T,L),{onMessage:F=>{L.receiver=F,R()},onReceive:F=>{L.receive=F,R()},onReject:F=>{L.reject=F},onProgress:F=>{L.progress=F}}},receiveInline:(T,E)=>{let L=O(T);if(!L)return;let{action:F,scope:V}=L,X=V?`${T.type}\0${V.key}`:T.type;if(F?.receiver&&!(V?V.receive:F.receive)&&!o.get(T.peerId)?.inline.has(X)){let N;try{N=Mp(E,T.format,!0)}catch{n(T.peerId,"invalid action payload");return}bp(F,N,T.peerId,T.metadata);return}let I={...z(T,V),kind:"inline",key:X,data:E};D(I)&&x(T.peerId,X)},receiveOffer:(T,E)=>{if(o.get(T.peerId)?.bulk.has(E)){n(T.peerId,"duplicate action offer");return}let L=O(T,E);if(!L)return;let F={...z(T,L.scope),kind:"bulk",id:E,transfer:"waiting",offset:0,data:null};D(F)&&R()},receiveChunk:(T,E,L,F)=>{let V=o.get(T),X=V?.bulk.get(E);if(!X)return;if(X.transfer!=="receiving"||L!==X.offset||!F.length||F.length!==Math.min(s,X.size-X.offset)){n(T,"invalid action chunk offset or length");return}try{X.data??(X.data=new Uint8Array(X.size))}catch{M(X,"unable to allocate receive buffer"),R();return}X.data.set(F,X.offset),X.offset+=F.length;let I=Date.now();X.lastSeen=I;for(let N of a)N.phase==="ready"&&r.get(N.type)?.receiver&&(N.lastSeen=I);X.offset===X.size?(P(X),g(X)&&V?.active===X&&(V.active=null,f(T)),R()):wp(r.get(X.type),X.offset/X.size,T,X.metadata)},cancel:(T,E)=>{let L=o.get(T)?.bulk.get(E);L&&(_(L),L.scope?.reject("response cancelled by sender")),R()},clearPeer:T=>{let E=o.get(T);if(E){for(let L of E.bulk.values())_(L);for(let L of E.inline.values()){let F=[...L];for(let V of F)_(V)}}R()}}};var au=2,Gc=0,Hc=1,Ap=2,iu=3,su=4,Wc=5,ru=36,Ep=48,wi=6,Jr=14,ou=16384-Jr,ES=256*1024**2,Rp=1024**2,Cp="bufferedamountlow",Pp="close",Ip="error",RS=1e4,ni=(n,e)=>{let t=Ze(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Xc=n=>{if(n?.aborted)throw ni("aborted","operation aborted")},Lp=(n,e,t=wi)=>{let i=new Uint8Array(t);return i[0]=au,i[1]=n,new DataView(i.buffer).setUint32(2,e),i},Os=ni,CS=(n,e,t=RS)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(i=>{let s=!1,r=null,o=l=>{s||(s=!0,n.removeEventListener(Cp,a),n.removeEventListener(Pp,c),n.removeEventListener(Ip,c),e?.removeEventListener("abort",c),$e(r),i(l))},a=()=>o(!0),c=()=>o(!1);if(n.addEventListener(Cp,a),n.addEventListener(Pp,c),n.addEventListener(Ip,c),e?.addEventListener("abort",c,{once:!0}),r=setTimeout(()=>o(!1),t),n.readyState!=="open"||e?.aborted){o(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&o(!0)}),Np=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,throwIfAborted:s=Xc,maxReceiveBytes:r=ES})=>{if(!Number.isSafeInteger(r)||r<=0)throw Ze("maxReceiveBytes must be a positive safe integer");let o=new Map,a=new Map,c=new WeakSet,l=0,u=Tp({fail:(p,f)=>h(p,f),accept:(p,f)=>m(p,f,iu),refuse:(p,f,_)=>m(p,f,su,_),maxReceiveBytes:r,chunkSize:ou}),d=p=>{for(let f of a.get(p)?.values()??[])f.fail(Os("disconnected","peer disconnected"));a.delete(p),u.clearPeer(p)},h=(p,f)=>{let _=n(p,!0);_&&!c.has(_)&&(c.add(_),console.warn(`${pt}: ${f}; disconnecting peer ${p}`),i(p,Ze(f)))},m=(p,f,_,M="")=>{let v=n(p,!0);if(!v)return;let w=sn(M).subarray(0,200),A=Lp(_,f,wi+w.length);A.set(w,wi);try{if((v.channel?.bufferedAmount??0)>Rp)throw Ze("control send buffer is full");v.sendData(A)}catch{h(p,"unable to send action control")}};return{makeInternalAction:(p,f={})=>{let _={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending,...f.maxPayloadBytes===void 0?{}:{maxPayloadBytes:f.maxPayloadBytes},...f.receiveScope?{receiveScope:f.receiveScope}:{}},M=o.get(p);if(M){if(M.options.sendToPending!==_.sendToPending||M.options.receiveWhilePending!==_.receiveWhilePending||M.options.receiveScope!==_.receiveScope||M.options.maxPayloadBytes!==_.maxPayloadBytes)throw Ze(`action type "${p}" cannot be redefined`);return M.action}let v=sn(p);if(!p||p.includes("\0")||v.length>32)throw Ze("action type must contain 1\u201332 UTF-8 bytes and no null characters");let w={options:_,action:{...u.register(p,_),send:async(A,P,x,R,D)=>{if(s(D),A===void 0)throw Ze("action data cannot be undefined");let O=A instanceof Blob,z=O||A instanceof ArrayBuffer||ArrayBuffer.isView(A),T=z?2:typeof A=="string"?0:1,E=O?A:A instanceof ArrayBuffer?new Uint8Array(A):ArrayBuffer.isView(A)?new Uint8Array(A.buffer,A.byteOffset,A.byteLength):sn(T===0?A:Tt(A)),L=E instanceof Blob?E.size:E.byteLength,F=x===void 0?new Uint8Array:sn(Tt(x));if(F.length>16336)throw Ze("action metadata is too large");let V=ru+F.length+L<=16384;!V&&z&&!(E instanceof Blob)&&(E=E.slice());let X=V?0:l++>>>0,I=V?ru:Ep,N=new Uint8Array(I+F.length+(V?L:0));N[0]=au,N[1]=(V?Gc:Hc)|T<<4,N.set(v,2);let q=new DataView(N.buffer);q.setUint16(34,F.length),V||(q.setUint32(36,X),q.setFloat64(40,L)),N.set(F,I),V&&N.set(E instanceof Blob?new Uint8Array(await E.arrayBuffer()):E,I+F.length);let he=P?Array.isArray(P)?P:[P]:e(_.sendToPending);await $t([...new Set(he)].map(async le=>{let Ee=n(le,_.sendToPending);if(!Ee){console.warn(`${pt}: no peer with id ${le} found`);return}let ze=null,We=()=>{if(ze)throw ze;if(s(D),n(le,_.sendToPending)!==Ee||Ee.channel?.readyState==="closed")throw Os("disconnected","peer disconnected")},j=async ge=>{We();let ye=Ee.channel;if(ye&&(ye.readyState!=="open"||ye.bufferedAmount>ye.bufferedAmountLowThreshold)){if(!await CS(ye,D))throw s(D),Os("disconnected","data channel stopped draining");We()}try{Ee.sendData(ge)}catch{throw Os("disconnected","peer disconnected")}};if(V){await j(N),R?.(1,le,x);return}let te=!1,pe=!1,Le=Date.now(),H,se,Ce=new Promise((ge,ye)=>{H=ge,se=ye});Ce.catch(vt);let $=a.get(le)??new Map;if($.has(X))throw Ze("action transmission id is still in use");a.set(le,$);let ne=null,ae={accept:()=>!ne||ze?!1:(ne=$e(ne),H(),!0),fail:(ge,ye=!1)=>{ye&&(pe=!0),ze=ge,se(ge)},touch:()=>{ne&&(Le=Date.now())}};$.set(X,ae);let ce=()=>{let ge=12e4-(Date.now()-Le);ge>0?ne=setTimeout(ce,ge):ae.fail(Os("timeout","action offer timed out"))};ne=setTimeout(ce,12e4);let ue=()=>{try{s(D)}catch(ge){ae.fail(ge)}};D?.addEventListener("abort",ue,{once:!0});try{await j(N),te=!0,await Ce;for(let ge=0;ge<L;ge+=ou){We();let ye=Math.min(ou,L-ge),Fe=Lp(Ap,X,Jr+ye);new DataView(Fe.buffer).setFloat64(wi,ge),Fe.set(E instanceof Blob?new Uint8Array(await E.slice(ge,ge+ye).arrayBuffer()):E.subarray(ge,ge+ye),Jr),await j(Fe);for(let _e of $.values())_e.touch();R?.((ge+ye)/L,le,x)}We()}catch(ge){throw te&&!pe&&n(le,!0)===Ee&&(!Ee.channel||Ee.channel.readyState==="open"&&(Ee.channel.bufferedAmount??0)<=Rp)&&m(le,X,Wc),ge}finally{ne=$e(ne),D?.removeEventListener("abort",ue),$.delete(X),!$.size&&a.get(le)===$&&a.delete(le)}}))}}};return o.set(p,w),w.action},handleData:(p,f)=>{if(f.byteLength<2||f.byteLength>16384){h(p,"invalid action frame");return}let _=new Uint8Array(f);if(_[0]!==au){h(p,"incompatible action protocol version");return}let M=_[1]&15,v=_[1]>>>4,w=new DataView(_.buffer,_.byteOffset,_.byteLength);if(M>Wc||v>2||M>Hc&&v!==0){h(p,"invalid action frame");return}if(M>=Ap){if(_.length<wi||(M===iu||M===Wc)&&_.length!==wi||M===su&&_.length>206){h(p,"invalid action control");return}let L=w.getUint32(2);if(M===iu){let F=a.get(p);if(F?.get(L)?.accept())for(let V of F.values())V.touch();return}if(M===su){a.get(p)?.get(L)?.fail(Os("rejected",dn(_.subarray(wi))),!0);return}M===Wc?u.cancel(p,L):u.receiveChunk(p,L,_.length>=Jr?w.getFloat64(wi):NaN,_.subarray(Jr));return}let A=M===Gc?ru:Ep;if(_.length<A){h(p,"invalid action header");return}let P=dn(_.subarray(2,34)).replaceAll("\0",""),x=o.get(P);if(!t(p,!!x?.options.receiveWhilePending))return;let R=w.getUint16(34),D=A+R,O=M===Gc?_.length-D:w.getFloat64(40),z=M===Hc?w.getUint32(36):0;if(!P||D>_.length||!Number.isSafeInteger(O)||O<0||M===Hc&&(O===0||D!==_.length)){h(p,"invalid action proposal");return}let T;try{R&&(T=Vn(dn(_.subarray(A,D))))}catch{h(p,"invalid action metadata");return}let E={peerId:p,type:P,format:v,size:O,...T===void 0?{}:{metadata:T}};M===Gc?u.receiveInline(E,_.subarray(D)):u.receiveOffer(E,z)},clearPeer:d}};var Up=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?n:null,qc=n=>{let e=Up(n);return e?{r:e.r,...Object.hasOwn(e,"m")?{m:e.m}:{}}:null},cu=n=>{let e=Up(n);return e?{r:e.r,...typeof e.e=="string"?{e:e.e}:{}}:null},$r=(n,e)=>e===void 0?n:{...n,metadata:e},Fp=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,maxReceiveBytes:s})=>{let r=Object.create(null),o={},a=new Map,c=Np({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,...s===void 0?{}:{maxReceiveBytes:s}}),l=c.makeInternalAction,u=c.handleData,d=p=>{let f=o[p];f&&($e(f.timer),f.signal&&f.abortHandler&&f.signal.removeEventListener("abort",f.abortHandler),delete o[p],f.controller.abort())},h=(p,f)=>{zn(o).forEach(([_,M])=>{M.peerId===p&&(d(_),M.reject(f))})},m=(p,f)=>{c.clearPeer(p);let _=a.get(p);_&&(a.delete(p),_.forEach(M=>M.abort())),h(p,ni("disconnected",Qn(f,"peer disconnected")))},g=l("@_response",{receiveScope:(p,f)=>{let _=cu(f),M=_&&o[_.r];if(!_||!M||M.peerId!==p)return null;let v=_.e===void 0?M.getReceive():null;return{key:_.r,signal:M.controller.signal,receive:v?w=>v({byteLength:w.byteLength,peerId:w.peerId,kind:"response",signal:w.signal}):null,reject:w=>{o[_.r]===M&&(d(_.r),M.reject(ni("rejected",w)))}}}});return g.onProgress((p,f,_)=>{let M=cu(_),v=M&&o[M.r];v&&v.peerId===f&&M?.e===void 0&&v.getReceiveProgress()?.(p,{peerId:f})}),g.onMessage((p,f,_)=>{let M=cu(_);if(!M)return;let v=o[M.r];if(!(!v||v.peerId!==f)){if(d(M.r),M.e!==void 0){v.reject(ni("rejected",M.e));return}v.resolve(p)}}),{makeAction:(p,f)=>{if(f&&"onRequest"in f&&f.kind!=="request")throw Ze('request actions must use kind: "request"');let _=f?.kind??"message",M=l(p),v=r[p];if(v){if(v.kind!==_)throw Ze(`action type "${p}" cannot be redefined`);return v.action}let w={kind:_,action:null,onReceive:f?.onReceive??null,onReceiveProgress:f?.onReceiveProgress??null},A=(T,E)=>T?(L,F)=>T(L,$r({peerId:F},E)):void 0,P=(T,E,L)=>{let F=w.kind==="request"?qc(L):null;w.onReceiveProgress?.(T,$r({peerId:E},F?F.m:L))},x=T=>{w.onReceive=T,M.onReceive(T?E=>{let L=_==="request"?qc(E.metadata):null;return T($r({byteLength:E.byteLength,peerId:E.peerId,signal:E.signal,kind:_},L?L.m:E.metadata))}:null)};if(x(w.onReceive),M.onProgress(P),_==="message"){let T=f?.onMessage??null,E=(F,V,X)=>{let I=T;Promise.resolve().then(()=>I(F,$r({peerId:V},X))).catch(N=>console.error(`${pt} action handler error:`,N))},L={send:async(F,V={})=>{await M.send(F,V.target,V.metadata,A(V.onProgress,V.metadata),V.signal)},get onMessage(){return T},set onMessage(F){T=F,M.onMessage(F?E:null)},get onReceive(){return w.onReceive},set onReceive(F){x(F)},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(F){w.onReceiveProgress=F}};return w.action=L,r[p]=w,M.onMessage(T?E:null),L}M.onReject((T,E,L)=>{let F=qc(E);F&&g.send(null,T,{r:F.r,e:L}).catch(vt)});let R=f?.onRequest??null,D=(T,E,L)=>{let F=qc(L);if(!F)return;let V=R,X=new AbortController,I=a.get(E);I||(I=new Set,a.set(E,I)),I.add(X),Promise.resolve().then(async()=>{let N=await V(T,{...$r({peerId:E},F.m),signal:X.signal});if(N===void 0)throw Ze("request handler returned undefined");return N}).then(N=>g.send(N,E,{r:F.r}),N=>g.send(null,E,{r:F.r,e:Qn(N,"request failed").slice(0,512)})).catch(vt).finally(()=>{let N=a.get(E);N?.delete(X),N&&!N.size&&a.delete(E),X.abort()})},O=async(T,E)=>{let{target:L,metadata:F,onProgress:V,signal:X,timeoutMs:I}=E;if(Xc(X),!n(L,!1))throw ni("disconnected",`no active peer with id ${L}`);let N=nn(20),q=new AbortController,he=new Promise((le,Ee)=>{let ze={controller:q,getReceive:()=>w.onReceive,getReceiveProgress:()=>w.onReceiveProgress,peerId:L,resolve:le,reject:Ee,timer:null,...X===void 0?{}:{signal:X}},We=()=>{d(N),Ee(ni("aborted","operation aborted"))};X&&(ze.abortHandler=We,X.addEventListener("abort",We,{once:!0})),o[N]=ze,I!==void 0&&(ze.timer=setTimeout(()=>{d(N),ze.reject(ni("timeout","request timed out"))},I))});try{let le=M.send(T,L,F===void 0?{r:N}:{r:N,m:F},A(V,F),q.signal);return await Promise.race([he,le.then(()=>he)])}finally{d(N)}},z={request:O,requestMany:async(T,E)=>{let{targets:L,onResult:F,...V}=E;return Xc(V.signal),await $t(L.map(async X=>{try{let I={peerId:X,status:"fulfilled",value:await O(T,{...V,target:X})};return F?.(I),I}catch(I){let N=fn(I,"request failed");if(N.kind==="aborted"||!N.kind)throw N;let q=N.kind==="timeout"?{peerId:X,status:"timeout"}:N.kind==="disconnected"?{peerId:X,status:"disconnected"}:{peerId:X,status:"rejected",error:N};return F?.(q),q}}))},get onRequest(){return R},set onRequest(T){R=T,M.onMessage(T?D:null)},get onReceive(){return w.onReceive},set onReceive(T){x(T)},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(T){w.onReceiveProgress=T}};return w.action=z,r[p]=w,M.onMessage(R?D:null),z},makeInternalAction:l,handleData:u,clearPeer:m}};var Op=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Bp=n=>e=>{let t=n.get(e);return t||(t=nn(20),n.set(e,t)),t},Yc=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map,o=new WeakMap,a=new WeakMap;return{getStreamKey:Bp(n),getTrackKey:Bp(e),rememberRemoteStream:(c,l,u)=>{let d=o.get(l);d!==void 0&&t.get(d)===l&&t.delete(d),o.set(l,c),t.set(c,l),u&&i.set(u,l),l.getTracks?.().forEach(h=>{typeof h.id=="string"&&r.set(h.id,{track:h,stream:l})})},getRemoteStream:(c,l)=>t.get(c)??(l?i.get(l):void 0),rememberRemoteTrack:(c,l,u,d,h)=>{let m={track:l,stream:u},g=a.get(l);g!==void 0&&s.get(g)?.track===l&&s.delete(g),a.set(l,c),s.set(c,m),d&&r.set(d,m),h&&i.set(h,u)},getRemoteTrack:(c,l)=>s.get(c)??(l?r.get(l):void 0),hasRemoteMedia:()=>t.size>0||s.size>0,clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},kp=({iterate:n,isActive:e,getSharedMediaPeer:t,onPeerError:i})=>{let s={},r={},o={},a=Yc(),c=S=>t(S)?.__trysteroMedia??o[S]??(o[S]=Yc()),l=(S,p,f,_)=>{let M=S[p]??(S[p]=[]);if(M.length>=64){console.warn(`${pt}: too many pending ${_} metadata messages`),i(p,Ze("too many pending media metadata messages"));return}M.push(f)},u=(S,p,f)=>{if(!S?.length)return;let _=p?S.findIndex(M=>{let v=f(M);return!v||v===p}):0;return _>=0?S.splice(_,1)[0]:void 0},d=(S,p,f,_)=>{e(S)&&(c(S).rememberRemoteStream(p,f,typeof f.id=="string"?f.id:void 0),g.onPeerStream?.(f,S,_))},h=(S,p,f,_,M)=>{e(S)&&(c(S).rememberRemoteTrack(p,f,_,typeof f.id=="string"?f.id:void 0,typeof _.id=="string"?_.id:void 0),g.onPeerTrack?.(f,_,S,M))},m=(S,p,f,_,M,v={})=>{let w={k:p,...v,...f===void 0?{}:{m:f}};return n(S,async(A,P)=>{await _(w,A),await M(P)})},g={addStream:(S,p,f)=>m(p.target,a.getStreamKey(S),p.metadata,f,_=>_.addStream(S),{s:S.id}),removeStream:(S,p)=>{n(p,(f,_)=>_.removeStream(S))},addTrack:(S,p,f,_)=>m(f.target,a.getTrackKey(S),f.metadata,_,M=>M.addTrack(S,p),{s:p.id,t:S.id}),removeTrack:(S,p)=>{n(p,(f,_)=>_.removeTrack(S))},replaceTrack:(S,p,f,_)=>m(f.target,a.getTrackKey(p),f.metadata,_,M=>M.replaceTrack(S,p),{t:S.id}),receiveStreamMeta:(S,p)=>{if(!e(p))return;let f=Op(S);if(!f)return;let _=c(p).getRemoteStream(f.key,f.streamId);if(_?.getTracks().length){d(p,f.key,_,f.metadata);return}l(s,p,f,"stream")},receiveTrackMeta:(S,p)=>{if(!e(p))return;let f=Op(S);if(!f)return;let _=c(p).getRemoteTrack(f.key,f.trackId);if(_&&_.track.readyState!=="ended"&&(!_.stream.getTracks||_.stream.getTracks().includes(_.track))){h(p,f.key,_.track,_.stream,f.metadata);return}l(r,p,f,"track")},receiveRemoteStream:(S,p)=>{if(!e(S))return;let f=u(s[S],typeof p.id=="string"?p.id:void 0,_=>_.streamId);f&&d(S,f.key,p,f.metadata)},receiveRemoteTrack:(S,p,f)=>{if(!e(S))return;let _=r[S],M=typeof p.id=="string"?p.id:void 0,v=typeof f.id=="string"?f.id:void 0,w=_&&M?_.findIndex(P=>P.trackId===M):-1,A=w>=0?_?.splice(w,1)[0]:u(_,v,P=>P.streamId);A&&h(S,A.key,p,f,A.metadata)},clearPeer:S=>{delete s[S],delete r[S],delete o[S]},onPeerStream:null,onPeerTrack:null};return g};var zp="beforeunload",PS=1e4,Ti=n=>"@_"+n,Kr=new Set,Vp=()=>Kr.forEach(n=>n()),IS=n=>(Kr.add(n),Kr.size===1&&addEventListener(zp,Vp),()=>{Kr.delete(n),Kr.size||removeEventListener(zp,Vp)}),Gp=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=PS,maxReceiveBytes:o,isPassive:a=!1,onBeforeLeave:c}={})=>{let l={},u={},d={},h={onPeerJoin:null,onPeerLeave:null},m=vt,g=null,S=(I,N)=>(I?Array.isArray(I)?I:[I]:qt(u)).flatMap(q=>{let he=u[q];return he?[Promise.resolve(N(q,he))]:(console.warn(`${pt}: no peer with id ${q} found`),[])}),p=(I,N,q)=>{let he=l[I];!he||N&&he!==N||(L.send("",I).catch(vt),x(I,he,q))},f=(I,N)=>p(I,void 0,N),_=kp({onPeerError:f,iterate:(I,N)=>S(I,(q,he)=>N(q,he)),isActive:I=>!!u[I],getSharedMediaPeer:I=>l[I]??null}),M=Fp({onPeerError:f,...o===void 0?{}:{maxReceiveBytes:o},getPeer:(I,N)=>(N?l:u)[I],getPeerIds:I=>qt(I?l:u),canReceiveFromPeer:(I,N)=>X.canReceiveFromPeer(I,N)}),v=M.makeInternalAction,w=M.handleData,A=M.makeAction,P=(I,N=Ze("peer disconnected"))=>{let q=fn(N,"peer disconnected");X.clearPeer(I,q),delete l[I],delete u[I],M.clearPeer(I,q),d[I]?.splice(0).forEach(he=>he.reject(q)),delete d[I],_.clearPeer(I)},x=(I,N,q)=>{let he=l[I];if(!he||N&&he!==N)return;let le=!!u[I];P(I,q),he.destroy(),le&&h.onPeerLeave?.(I),e(I)},R=()=>g??(g=(async()=>{c?.();let I=new AbortController;L.send("",void 0,void 0,void 0,I.signal).catch(vt),await new Promise(N=>setTimeout(N,99)),I.abort();try{zn(l).forEach(([N,q])=>{q.destroy(),P(N,Ze("room left"))})}finally{try{m()}finally{t()}}})()),D=v(Ti("ping")),O=v(Ti("pong")),z=v(Ti("signal")),T=v(Ti("stream"),{maxPayloadBytes:65536}),E=v(Ti("track"),{maxPayloadBytes:65536}),L=v(Ti("leave"),{sendToPending:!0,receiveWhilePending:!0}),F=v(Ti("hsdata"),{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:65536}),V=v(Ti("hsready"),{sendToPending:!0,receiveWhilePending:!0}),X=_p({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:F.send,sendHandshakeReady:V.send,onActivate:(I,N)=>{u[I]=N,N.setHandlers({signal:q=>{u[I]===N&&z.send(q,I).catch(vt)}}),h.onPeerJoin?.(I)},onFailure:(I,N,q)=>p(I,N,q)});return D.onMessage((I,N)=>{O.send("",N).catch(vt)}),O.onMessage((I,N)=>{let q=d[N];q?.shift()?.resolve(),q&&!q.length&&delete d[N]}),z.onMessage((I,N)=>{u[N]?.signal(I)}),T.onMessage((I,N)=>_.receiveStreamMeta(I,N)),E.onMessage((I,N)=>_.receiveTrackMeta(I,N)),L.onMessage((I,N)=>x(N,void 0,Ze("peer left room"))),F.onMessage((I,N,q)=>X.receiveHandshakeData(I,N,q)),V.onMessage((I,N)=>X.receiveHandshakeReady(N)),n((I,N)=>{let q=l[N];if(q){if(q===I)return;q.destroy(),P(N,Ze("peer replaced"))}l[N]=I,X.addPeer(N,I),I.setHandlers({data:he=>{l[N]===I&&w(N,he)},stream:he=>_.receiveRemoteStream(N,he),track:(he,le)=>_.receiveRemoteTrack(N,he,le),close:()=>x(N,I,Ze("peer disconnected")),error:he=>{console.error(`${pt} peer error:`,he),x(N,I,he)}}),X.start(N,I)}),qh&&(m=IS(()=>R().catch(vt))),{makeAction:A,leave:R,ping:async I=>{if(!u[I])throw Ze(`no active peer with id ${I}`);let N=Date.now();return await new Promise((q,he)=>{let le=d[I]??(d[I]=[]),Ee=()=>{let We=d[I];if(!We)return;let j=We.indexOf(ze);j>-1&&We.splice(j,1),We.length||delete d[I]},ze={resolve:()=>{Ee(),q()},reject:We=>{Ee(),he(We)}};le.push(ze),D.send("",I).catch(We=>ze.reject(fn(We,"peer disconnected")))}),Date.now()-N},isPassive:()=>a,getPeers:()=>Yh(zn(u).map(([I,N])=>[I,N.connection])),addStream:(I,N={})=>_.addStream(I,N,T.send),removeStream:(I,N={})=>{_.removeStream(I,N.target)},addTrack:(I,N,q={})=>_.addTrack(I,N,q,E.send),removeTrack:(I,N={})=>{_.removeTrack(I,N.target)},replaceTrack:(I,N,q={})=>_.replaceTrack(I,N,q,E.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(I){h.onPeerJoin=I,I&&qt(u).forEach(N=>I(N))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(I){h.onPeerLeave=I},get onPeerStream(){return _.onPeerStream},set onPeerStream(I){_.onPeerStream=I},get onPeerTrack(){return _.onPeerTrack},set onPeerTrack(I){_.onPeerTrack=I}}};var Xp=1,qp=2,Hp=(n,e)=>{let t=sn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=Xp,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},LS=(n,e)=>{let t=sn(n),i=new Uint8Array(4+t.byteLength);return i[0]=qp,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},Wp=(n,e)=>{if(n.byteLength<e+2)return null;let t=(n[e]??0)<<8|(n[e+1]??0),i=e+2+t;return t<=0||t>128||n.byteLength<i?null:{roomToken:dn(n.subarray(e+2,i)),headerSize:i}},DS=n=>{let e=new Uint8Array(n);if(e.byteLength<3||e.byteLength>16515)return null;if(e[0]===Xp){let t=Wp(e,1);return t?{type:"room",roomToken:t.roomToken,payload:e.subarray(t.headerSize).slice().buffer}:null}if(e[0]===qp){let t=Wp(e,2);return t?{type:"presence",roomToken:t.roomToken,isPresent:e[1]===1}:null}return null},Zc=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},Yp=n=>{if(Zc(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},Zp=class{constructor(){zt(this,"rooms",new Map);zt(this,"unclaimedDataTimers",new WeakMap);zt(this,"pendingDataTimers",new WeakMap);zt(this,"byApp",{})}registerRoom(n,e,t,i){let s=this.rooms.get(n)??new Map;if(s.has(e))throw Ze("room membership already registered");let r={token:null,tokenPromise:t,...i};s.set(e,r),this.rooms.set(n,s);let o=()=>this.rooms.get(n)?.get(e)===r,a=c=>{if(r.token)for(let l of un(this.byApp[n]??{}))try{this.sendRoomPresence(l,r.token,c)}catch{}};return t.then(c=>{if(o()){r.token=c;for(let l of un(this.byApp[n]??{}))l.remoteRoomTokens.has(c)&&this.attachRoom(n,e,r,l),this.discardUnboundData(l);o()&&r.active&&a(!0)}}),{connect:(c,l,u)=>{if(!o()){l.destroy();return}let d=this.reusable(n,c);d&&d.peer!==l&&l.destroy();let h=d??this.register(n,c,l,u);if(this.attachRoom(n,e,r,h),!d)for(let m of s.values())m.active&&m.token&&this.sendRoomPresence(h,m.token,!0)},reuse:c=>{if(!o())return!1;let l=this.reusable(n,c);return l?(this.attachRoom(n,e,r,l),!0):!1},setActive:c=>{!o()||r.active===c||(r.active=c,a(c))},leave:()=>{if(o()){s.delete(e),s.size||this.rooms.delete(n),a(!1);for(let c of un(this.byApp[n]??{})){let l=c.bindings[e];l?.handlers.close?.(),l?.detach(),this.discardUnboundData(c)}}}}}owns(n,e,t){return this.byApp[n]?.[e]?.peer===t}reusable(n,e){let t=this.byApp[n]?.[e];if(t&&Zc(t.peer)){this.clear(n,e,{destroyPeer:!0});return}return t}attachRoom(n,e,t,i){if(this.rooms.get(n)?.get(e)!==t||i.isClosing||this.get(n,i.peerId)!==i)return;let{proxy:s,isNew:r}=this.bind(e,t.tokenPromise,i,{onDetach:()=>t.onDetach(i.peerId,i.peer)});r&&t.onPeer(s,i.peerId,i.peer)}get(n,e){return this.byApp[n]?.[e]}sendRoomPresence(n,e,t){n.isClosing||Zc(n.peer)||n.peer.sendData(LS(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=$e(s.idleTimer),this.clearDataTimers(s),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=un(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),qt(i).length===0&&delete this.byApp[n]}register(n,e,t,i){var a;let s=this.byApp[n]?.[e];if(s){if(s.idleTimer=$e(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}let r={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Yc(),idleMs:i,isClosing:!1};((a=this.byApp)[n]??(a[n]={}))[e]=r;let o=()=>{this.owns(n,e,t)&&this.clear(n,e,{destroyPeer:!0})};return t.setHandlers({data:c=>this.dispatchData(r,c),signal:c=>this.dispatchSignal(r,c),close:o,error:c=>{console.error(`${pt} peer error:`,c),o()},track:(c,l)=>this.dispatchTrack(r,c,l)}),r}bind(n,e,t,{onDetach:i}){let s=t.bindings[n];if(s)return t.idleTimer=$e(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:vt,proxy:{}},o=()=>{if(t.bindings[n]!==r)return;let c=qt(t.bindings).length===1&&(t.streamOwners.size>0||t.trackOwners.size>0||t.media.hasRemoteMedia());c||this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=qt(t.bindings)[0]??null),this.discardUnboundData(t),i(),c?this.clear(t.appId,t.peerId,{destroyPeer:!0}):this.scheduleIdleTimer(t)},a={get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Hp(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{Object.assign(r.handlers,c),this.flushBindingQueues(t,r)},addStream:c=>{let l=t.streamOwners.get(c)??new Set,u=l.size===0;l.add(n),t.streamOwners.set(c,l),u&&t.peer.addStream(c)},removeStream:c=>this.releaseStreamOwner(t,c,n),addTrack:(c,l)=>{let u=t.trackOwners.get(c)??{stream:l,rooms:new Set},d=u.rooms.size===0;return u.stream=l,u.rooms.add(n),t.trackOwners.set(c,u),d?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(h=>h.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>this.releaseTrackOwner(t,c,n),replaceTrack:async(c,l)=>{let u=t.trackOwners.get(c);if(await t.peer.replaceTrack(c,l),u&&t.trackOwners.get(c)===u){t.trackOwners.delete(c);let d=t.trackOwners.get(l)??{stream:u.stream,rooms:new Set};u.rooms.forEach(h=>d.rooms.add(h)),t.trackOwners.set(l,d)}},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=$e(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;let l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c));let u=r.pendingSendData.splice(0);Zc(t.peer)||u.forEach(d=>{try{t.peer.sendData(Hp(c,d))}catch{}}),this.flushBindingQueues(t,r),this.discardUnboundData(t)}),{proxy:a,isNew:!0}}releaseStreamOwner(n,e,t){let i=n.streamOwners.get(e);i&&(i.delete(t),i.size===0&&(n.streamOwners.delete(e),n.peer.removeStream(e)))}releaseTrackOwner(n,e,t){let i=n.trackOwners.get(e);i&&(i.rooms.delete(t),i.rooms.size===0&&(n.trackOwners.delete(e),n.peer.removeTrack(e)))}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>this.releaseStreamOwner(n,i,e)),n.trackOwners.forEach((t,i)=>this.releaseTrackOwner(n,i,e))}scheduleIdleTimer(n){n.isClosing||qt(n.bindings).length>0||(n.idleTimer=$e(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||qt(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=un(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n,e){let{handlers:t}=e;if(t.data&&e.pendingData.length>0){let i=e.pendingData.splice(0);this.syncDataTimers(n),i.forEach(s=>t.data?.(s))}else this.syncDataTimers(n);(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:i,stream:s})=>{t.track?.(i,s),t.stream?.(s)})}unclaimedBufferedFrameCount(n){let e=0;for(let t of n.pendingDataByToken.values())e+=t.length;return e}boundBufferedFrameCount(n){let e=0;for(let t of un(n.bindings))e+=t.pendingData.length;return e}bufferedFrameCount(n){return this.unclaimedBufferedFrameCount(n)+this.boundBufferedFrameCount(n)}clearDataTimers(n){$e(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n),$e(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)}syncDataTimers(n){if(n.isClosing){this.clearDataTimers(n);return}this.unclaimedBufferedFrameCount(n)===0?($e(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n)):this.unclaimedDataTimers.has(n)||this.unclaimedDataTimers.set(n,setTimeout(()=>{this.unclaimedDataTimers.delete(n),n.pendingDataByToken.clear()},1e4)),this.boundBufferedFrameCount(n)===0?($e(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)):this.pendingDataTimers.has(n)||this.pendingDataTimers.set(n,setTimeout(()=>{this.pendingDataTimers.delete(n),this.boundBufferedFrameCount(n)>0&&this.failData(n,"room data handler timed out")},1e4))}canBindRoomToken(n,e){return un(n.bindings).some(t=>!t.roomToken)||[...this.rooms.get(n.appId)?.values()??[]].some(t=>!t.token||t.token===e)}discardUnboundData(n){for(let e of n.pendingDataByToken.keys())this.canBindRoomToken(n,e)||n.pendingDataByToken.delete(e);this.syncDataTimers(n)}failData(n,e){console.warn(`${pt}: ${e}; disconnecting peer ${n.peerId}`),this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchData(n,e){if(n.isClosing)return;let t=DS(e);if(!t){this.failData(n,"invalid or incompatible room frame");return}if(t.type==="presence"){if(t.isPresent){if(!n.remoteRoomTokens.has(t.roomToken)&&n.remoteRoomTokens.size>=64){this.failData(n,"too many advertised rooms");return}n.remoteRoomTokens.add(t.roomToken);for(let[s,r]of this.rooms.get(n.appId)??[])r.token===t.roomToken&&this.attachRoom(n.appId,s,r,n)}else{n.remoteRoomTokens.delete(t.roomToken),n.pendingDataByToken.delete(t.roomToken);let s=n.bindingsByToken[t.roomToken];s?.handlers.close?.(),s?.detach(),this.syncDataTimers(n)}return}let i=n.bindingsByToken[t.roomToken];if(!i){if(!this.canBindRoomToken(n,t.roomToken)||this.bufferedFrameCount(n)>=64)return;let s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s),this.syncDataTimers(n);return}if(i.handlers.data)i.handlers.data(t.payload);else{if(this.bufferedFrameCount(n)>=64){this.failData(n,"too much data waiting for a room handler");return}i.pendingData.push(t.payload),this.syncDataTimers(n)}}dispatchSignal(n,e){let t=this.getSignalBinding(n);t?t.handlers.signal?.(e):e.type==="offer"&&this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchTrack(n,e,t){un(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}};var Jp=23333,NS=57333,US=12,FS=7533,OS=23333,jr="offer-placeholder",BS=["offer","answer","candidate"],$p=n=>{if(typeof n=="string")try{let e=Vn(n);return e&&typeof e=="object"&&!Array.isArray(e)?e:null}catch{return null}return n&&typeof n=="object"&&!Array.isArray(n)?n:null},Ai=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Kp=n=>!!(n&&typeof n=="object"&&typeof n.signal=="function"&&typeof n.destroy=="function"&&typeof n.setHandlers=="function"),jp=(n,e=!1)=>BS.some(t=>t in n&&(typeof n[t]!="string"||n[t]===""))||"peer"in n&&(e||n.peer!==void 0&&!Kp(n.peer)),Qp=n=>{let e=$p(n);if(!e||jp(e,typeof n=="string"))return!1;let t=Ai(e,"peerId");return!!(t&&t!==Ct&&e.passive!==!0&&!Ai(e,"answer")&&!Ai(e,"candidate"))},kS=(n,e,t,i,s,r)=>{n.toCipher(e).then(o=>{n.isLeaving()||!r()||i(t,Tt(s(o.sdp)))})},zS=()=>({offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,answerReplay:null,connectionErrorReported:!1}),VS=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),GS=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${VS(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Kc=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:GS(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},eo=(n,e)=>n[e]??(n[e]=zS()),Jc=new WeakMap,jc=n=>{Jc.delete(n),n.answeringExpiryTimer=$e(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,n.answerReplay=null},Qr=(n,e)=>{n.answeringPeer===e&&(jc(n),n.connectedPeer!==e&&!e.isDead&&e.destroy())},em=(n,e)=>{n.answeringPeer&&n.answeringPeer!==e&&!n.answeringPeer.isDead&&n.answeringPeer.destroy(),jc(n),n.connectedPeer=e,n.connectedPeerUnhealthySinceMs=null},uu=(n,e)=>{n?.connectedPeer===e&&(n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},$c=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},fu=(n,e)=>{n.offerRelayTimers[e]=$e(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0)},lu=(n,e)=>{n?.offerRelays[e]===jr&&fu(n,e)},Ei=n=>{Jc.delete(n),n.offerExpiryTimer=$e(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((e,t)=>fu(n,t)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(n.offerPeer.isDead||n.offerPeer.destroy()),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1},HS=(n,e,t,i)=>{$e(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&Kc(n,s,t),Qr(s,i),n.checkDeactivate())},OS)},hu=(n,e,t,i=NS)=>{$e(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&Kc(n,r,t),Ei(r),n.checkDeactivate())},i)},tm=(n,e,t,i,s)=>{let r=()=>{e.offerPeer===i&&!e.connectedPeer&&(e.offerAnswered&&Kc(n,e,t),Ei(e)),n.disconnectPeer(i,t),n.checkDeactivate()};i.setHandlers({connect:()=>n.connectPeer(i,t),...s?{signal:s}:{},close:r,error:r})},WS=(n,e,t)=>{if(e.offerPeer&&e.offerId&&e.offerSdp)return Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId});if(e.offerInitPromise)return e.offerInitPromise;let s=(async()=>{let r;try{r=(await n.offerManager.checkout(1,!1,n.encryptOffer))[0]}catch(c){if(n.isLeaving()||e.offerInitPromise!==s)return null;throw c}if(!r)throw Ze("failed to allocate offer peer");let{peer:o,offer:a}=r;return n.isLeaving()||e.offerInitPromise!==s?(o.destroy(),null):(e.offerPeer=o,e.offerId=nn(US),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],tm(n,e,t,o,c=>{e.offerPeer===o&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))}),hu(n,e,t),{peer:o,offer:a,offerId:e.offerId})})().finally(()=>{e.offerInitPromise===s&&(e.offerInitPromise=null)});return e.offerInitPromise=s},nm=async(n,e,t,i,s=0)=>{let r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){lu(r,e);return}if(r.offerRelays[e]!==jr)return;let[o,a]=await $t([ti(bi(n.rootTopicPlaintext,t)),WS(n,r,t)]);if(!a){lu(r,e);return}if(n.isLeaving()){Ei(r);return}if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==jr){lu(r,e);return}r.offerRelayTimers[e]=$e(r.offerRelayTimers[e]),r.offerRelays[e]=!0,r.offerRelayTimers[e]=setTimeout(()=>{if(s>=2||n.isLeaving()||r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerPeer!==a.peer||r.offerId!==a.offerId){ZS(n,t,e);return}r.offerRelays[e]=jr,nm(n,e,t,i,s+1)},s===0&&n.announceIntervals[e]===void 0?2e3:(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||kS(n,l,o,i,u=>({peerId:Ct,offerId:a.offerId,candidate:u,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},i(o,Tt({peerId:Ct,offerId:a.offerId,offer:a.offer,...n.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},XS=async(n,e,t,i,s,r)=>{let o=eo(n.peerStates,t);if(o.answeringPeer||o.offerAnswered){let p=o.answerReplay,f=p?.lastSentAt[e];if(o.answeringPeer&&!o.answeringPeer.isDead&&p&&p.offer===i&&p.offerId===s&&(f===void 0||Date.now()-f>=1e3)){p.lastSentAt[e]=Date.now();let _=await ti(bi(n.rootTopicPlaintext,t));if(!n.isLeaving()&&o.answerReplay===p&&!o.connectedPeer){let M=v=>r(_,v);p.relays[e]=M,p.messages.forEach(M)}}return}let a=!!(o.offerPeer||o.offerRelays.some(Boolean));if(a&&Ct<t)return;a&&Ei(o);let c=n.initPeer(!1,n.config),l={offer:i,offerId:s,messages:[],lastSentAt:[],relays:[]};l.lastSentAt[e]=Date.now(),o.answeringPeer=c,o.answerSent=!1,o.answerReplay=l,o.connectionErrorReported=!1,HS(n,o,t,c);let u=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&Kc(n,o,t),Qr(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t),close:u,error:u});let d;try{d=await n.toPlain({type:"offer",sdp:i})}catch{Qr(o,c),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){Qr(o,c);return}let h=await ti(bi(n.rootTopicPlaintext,t));if(n.isLeaving()||o.answerReplay!==l)return;l.relays[e]=p=>r(h,p);let m=[],g=!1,S=p=>{n.toCipher(p).then(f=>{if(n.isLeaving()||o.answeringPeer!==c||c.isDead)return;let _={peerId:Ct};p.type==="answer"?(o.answerSent=!0,_.answer=f.sdp):_.candidate=f.sdp,s&&(_.offerId=s),n.isPassive&&(_.passive=!0);let M=Tt(_),v=Date.now();l.messages.push(M),l.relays.forEach((w,A)=>{w&&(l.lastSentAt[A]=v,w(M))}),p.type==="answer"&&!g&&(g=!0,m.splice(0).forEach(S))})};c.setHandlers({signal:p=>{if(!(n.isLeaving()||o.answeringPeer!==c||c.isDead)&&!(p.type!=="answer"&&p.type!=="candidate")){if(p.type==="candidate"&&!g){m.push(p);return}S(p)}}}),await c.signal(d)},qS=async(n,e,t,i,s)=>{let r;try{r=await n.toPlain({type:kc,sdp:t})}catch{return}let o=n.peerStates[e],a=i&&o?.offerPeer&&o.offerId===i?o.offerPeer:null,c=!i||o?.answerReplay?.offerId===i?o?.answeringPeer:null,l=!i&&o?.offerPeer?o.offerPeer:null,u=s&&!s.isDead?s:a??c??l;u&&!u.isDead&&u.signal(r)},YS=async(n,e,t,i,s)=>{let r;try{r=await n.toPlain({type:"answer",sdp:t})}catch{s&&(n.offerManager.reclaimLeased(s),s.isDead||s.destroy()),n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:e,roomId:n.roomId});return}if(s){let o=eo(n.peerStates,e);if(n.offerManager.claimLeased(s),o.connectedPeer||o.offerAnswered||o.answeringPeer&&!o.answeringPeer.isDead&&Ct>e){s.destroy();return}if(o.answeringPeer){let a=o.answeringPeer;Qr(o,a)}Ei(o),o.offerPeer=s,o.offerId=i??null,o.offerAnswered=!0,hu(n,o,e,Jp),tm(n,o,e,s),s.signal(r)}else{let o=n.peerStates[e];if(!o||!o.offerPeer||o.offerAnswered||i&&o.offerId&&i!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,hu(n,o,e,Jp),o.offerPeer.signal(r)}},ZS=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(fu(i,t),n.checkDeactivate())},im=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;let r=$p(i);if(!r||jp(r,typeof i=="string"))return;let o=Ai(r,"peerId")??"",a=Ai(r,"offer"),c=Ai(r,"answer"),l=Ai(r,"candidate"),u=Ai(r,"offerId"),d=Kp(r.peer)?r.peer:void 0,h=r.passive===!0;if(!o||o===Ct)return;let[m,g]=await $t([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==m&&t!==g||n.isPassive&&h||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let S=n.peerStates[o],p=S?.connectedPeer;if(p&&S){let f=Yp(p);if(f==="live"){S.connectedPeerUnhealthySinceMs=null;return}if(f==="stale")$c(S,o,"message-from-stale-peer");else{let _=Date.now(),M=S.connectedPeerUnhealthySinceMs??_;if(S.connectedPeerUnhealthySinceMs=M,_-M<FS)return;$c(S,o,"message-from-prolonged-disconnect")}}if(!n.reusePeer(o)){if(o&&!a&&!c&&!l){let f=eo(n.peerStates,o),_=Ct<o;if(f.answeringPeer||f.connectedPeer||f.offerAnswered)return;if(!_&&!f.offerPeer){let M=Jc.get(f);M||(M=[],Jc.set(f,M));let v=M[e];if(v!==void 0&&Date.now()-v<1e3)return;M[e]=Date.now();let w=await ti(bi(n.rootTopicPlaintext,o));!n.isLeaving()&&!f.connectedPeer&&!f.answeringPeer&&!f.offerAnswered&&s(w,Tt({peerId:Ct}));return}return f.offerRelays[e]?void 0:(f.offerRelays[e]=jr,nm(n,e,o,s))}if(a)return XS(n,e,o,a,u,s);if(l)return qS(n,o,l,u,d);if(c)return YS(n,o,c,u,d)}};var Qc=5333,JS=[233,533,1333],sm=7533,$S=123333,du=({init:n,subscribe:e,announce:t,deactivate:i})=>{let s={},r={},o=new Zp,a=()=>un(s).some(d=>qt(d).length>0),c=!1,l=[],u=vt;return(d,h,m)=>{if(!d)throw Ze("requires a config map as the first argument");if(m&&typeof m!="object")throw Ze("third argument must be a callbacks object");let{appId:g}=d,S=m?.onJoinError,p=m?.onPeerHandshake,f=m?.handshakeTimeoutMs;if(!g)throw Ze("config map is missing appId field");if(!h)throw Ze("roomId argument required");if(d.maxReceiveBytes!==void 0&&(!Number.isSafeInteger(d.maxReceiveBytes)||d.maxReceiveBytes<=0))throw Ze("maxReceiveBytes must be a positive safe integer");if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw Ze("handshakeTimeoutMs must be a positive number");if(s[g]?.[h])return s[g][h];r[g]?.[h]?.(!0);let _=bi(pt,g,h),M=ti(_),v=ti(bi(_,Ct)),w=lp(d.password??"",g,h),A=hp(g,h),P=d._test_only_sharedPeerIdleMs??$S,x=!1,R=_e=>async U=>({type:U.type,sdp:await _e(w,U.sdp)}),D=R(pp),O=R(dp),z=()=>nu(!0,d),T=!1,E=new mp(z),L=async _e=>{let U=await _e.getOffer();if(!U||U.type!=="offer")throw Ze("failed to get offer for peer");return(await O(U)).sdp},F=(_e,U)=>{Fe.connect(U,_e,P)},V=!1,X=()=>{N||!T||V||(V=!0,queueMicrotask(()=>{V=!1,x||Ee.requeueAnnounce?.()}))},I=(_e,U)=>{if(x)return;let Oe=Ee.peerStates[U];Oe?.connectedPeer===_e&&($c(Oe,U,"close-event"),le(),X())},N=!!d.passive,q,he=vt,le=()=>{if(!N||!Ee.isActive)return;let _e=!1;zn(Ee.peerStates).forEach(([U,Oe])=>{Oe.connectedPeer||Oe.answeringPeer||Oe.offerInitPromise||Oe.offerPeer||Oe.offerRelays.some(Boolean)?_e=!0:delete Ee.peerStates[U]}),_e||(Ee.isActive=!1,q=$e(q),Le.forEach($e),Le.length=0,he(),Fe.setActive(!1))},Ee={appId:g,roomId:h,config:d,peerStates:{},rootTopicPlaintext:_,rootTopicP:M,selfTopicP:v,toPlain:D,toCipher:O,isLeaving:()=>x,isPassive:N,isActive:!N,onJoinError:S,offerManager:E,encryptOffer:L,initPeer:nu,connectPeer:F,disconnectPeer:I,reusePeer:_e=>Fe.reuse(_e),checkDeactivate:le,announceIntervals:[],announceIntervalMs:Qc},ze={config:d,appId:g,roomId:h,isPassive:N},We=im(Ee);if(!c){let _e=n(d);l=(Array.isArray(_e)?_e:[_e]).map(U=>Promise.resolve(U)),c=!0,u=d.relayConfig?.manualReconnection?vt:cp()}let j=l.map(()=>Qc),te=l.map(()=>0),pe=l.map(()=>0),Le=[],H=l.map(async(_e,U)=>e(await _e,await M,await v,We(U),Oe=>E.getOffers(Oe,L),ze));$t([M,v]).then(([_e,U])=>{if(x)return;let Oe=async(Je,C)=>{if(x||N&&!Ee.isActive)return;let y=N?{passive:!0}:void 0,W;try{W=await t(Je,_e,U,y,ze),pe[C]=0}catch(me){if(x)return;let ee=pe[C]??0;ee===0&&d.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${pt}: announce failed - ${Qn(me,"")}`),pe[C]=ee+1}if(x||N&&!Ee.isActive||W&&typeof W!="number"&&"stopAnnouncing"in W)return;typeof W=="number"?(Ee.announceIntervals[C]=W,j[C]=W):W&&(j[C]=W.nextAnnounceMs,T||(T=W.reannounceOnDisconnect===!0));let J=te[C]??0;te[C]=J+1;let Q=j[C]??Qc,fe=JS[J]??(J===3&&typeof W=="object"?Qc:void 0);Le[C]=setTimeout(()=>{Oe(Je,C)},typeof fe=="number"?Math.min(Q,fe):Q)};he=()=>{i&&l.forEach(async Je=>{let C=await Je;x||i(C,_e,U,ze)})},Ee.requeueAnnounce=()=>{Le.forEach($e),Le.length=0,q=$e(q),Fe.setActive(!0),q=setTimeout(le,sm),l.forEach(async(Je,C)=>{let y=await Je;y&&!x&&(te[C]=0,Oe(y,C))})},H.forEach(async(Je,C)=>{if(await Je,x)return;let y=await l[C];y&&!x&&(!N||Ee.isActive)&&Oe(y,C)})});let se=vt,Ce=d.password??"",{compose:$}=gp(Ce,g,h),ne=$(p),ae=()=>{s[g]?.[h]===ye&&(delete s[g][h],qt(s[g]).length===0&&delete s[g])},ce=()=>{r[g]?.[h]===ue&&(delete r[g][h],qt(r[g]).length===0&&delete r[g])},ue=(_e=!1)=>{x||(x=!0,se=vt,ae(),ce(),Fe.leave(),zn(Ee.peerStates).forEach(([U,Oe])=>{Oe.connectedPeer&&!Oe.connectedPeer.isDead&&(o.owns(g,U,Oe.connectedPeer)||Oe.connectedPeer.destroy()),Oe.answeringPeer&&!Oe.answeringPeer.isDead&&Oe.answeringPeer.destroy(),Ei(Oe),jc(Oe),Oe.connectedPeer=null,Oe.connectedPeerUnhealthySinceMs=null}),Le.forEach($e),q=$e(q),H.forEach(async U=>{(await U)()}),E.destroy(),!(_e||a())&&(c=!1,u()))},ge={...d.maxReceiveBytes===void 0?{}:{maxReceiveBytes:d.maxReceiveBytes},...ne?{onPeerHandshake:ne}:{},...f===void 0?{}:{handshakeTimeoutMs:f},isPassive:N,onBeforeLeave:()=>{ae(),(r[g]??(r[g]={}))[h]=ue},onHandshakeError:(_e,U)=>S?.({error:U.replace(/^handshake failed: /,""),appId:g,peerId:_e,roomId:h})};s[g]??(s[g]={});let ye=Gp(_e=>se=_e,_e=>{if(x)return;let U=Ee.peerStates[_e];U?.connectedPeer&&uu(U,U.connectedPeer),le(),X()},()=>ue(!1),ge),Fe=o.registerRoom(g,h,A,{active:!N||Ee.isActive,onPeer:(_e,U,Oe)=>{let Je=eo(Ee.peerStates,U);em(Je,Oe),N&&!Ee.isActive&&(Ee.isActive=!0,Fe.setActive(!0),Ee.requeueAnnounce?Ee.requeueAnnounce():(q=$e(q),q=setTimeout(le,sm))),se(_e,U),Ei(Je)},onDetach:(_e,U)=>{uu(Ee.peerStates[_e],U),le()}});return s[g][h]=ye}};var KS=6e4,pu=n=>{if(!n)throw Ze("topic strategy missing room context");return n},to=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),mu=({steadyAnnounceIntervalMs:n=KS,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>du({init:t,subscribe:async(o,a,c,l,u,d)=>{let h=pu(d),m=(w,A)=>{s(o,w,A,to(h,"signal",a,c))},g=null,S=!1,p=null,f=!1,_=w=>{S||(S=!0,w())},M=()=>(p||(p=Promise.resolve(i(o,c,(w,A)=>{f||l(w,A,m)},to(h,"self",a,c))).then(w=>{g=w,f&&_(w)})),p);h.isPassive||await M();let v=await i(o,a,async(w,A)=>{f||(h.isPassive&&Qp(A)&&await M(),f||await l(w,A,m))},to(h,"root",a,c));return()=>{f=!0,g&&_(g),v()}},announce:async(o,a,c,l,u)=>{let d=pu(u),h=await s(o,a,Tt({peerId:Ct,...l}),to(d,"announce",a,c));return typeof h=="number"||h!==void 0&&"stopAnnouncing"in h?h:{nextAnnounceMs:h?.nextAnnounceMs??n,reannounceOnDisconnect:h?.reannounceOnDisconnect??e}},...r?{deactivate:(o,a,c,l)=>{let u=pu(l);return r(o,a,to(u,"announce",a,c))}}:{}});var yu=jh(n=>n.socket),jS=5,om="x",am="EVENT",{secretKey:QS,publicKey:eM}=Hh.keygen(),tM=ei(eM),gu={},rm=250,Wi=6e4,nM=9e5,xu=5333,no=new WeakMap,tl=yu.scoped(),_u=new WeakSet,iM=n=>{let e=no.get(n),t=Math.min(e?.delayMs?Math.max(Wi,e.delayMs*2):Wi,nM);return no.set(n,{delayMs:t,untilMs:Date.now()+t}),t},io=n=>{let e=no.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},el=n=>({nextAnnounceMs:n}),sM={stopAnnouncing:!0},rM=n=>_u.has(n)?!1:(_u.add(n),no.delete(n),n.close?.(),!0),cm=()=>Math.floor(Date.now()/1e3),lm=n=>gu[n]??(gu[n]=zc(n,1e4)+2e4),oM=async(n,e)=>{let t={kind:lm(n),tags:[[om,n]],created_at:cm(),content:e,pubkey:tM},i=await Hi("SHA-256",Tt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Tt([am,{...t,id:ei(i),sig:ei(await Hh.signAsync(i,QS))}])};var rn={},hm=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},aM=(n,e,t)=>{var s;let i=rn[s=n.url]??(rn[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set,retryTimer:null,retryMs:xu,pendingEose:new Set,requestedAt:0});i.topics.set(e,t),um(n,i)},cM=(n,e)=>{let t=rn[n.url];t&&(t.topics.delete(e),delete tl.forRelay(n)[e],t.topics.size===0?(t.retryTimer!==null&&clearTimeout(t.retryTimer),t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),hm(t),t.subIds.forEach(i=>n.send(Tt(["CLOSE",i]))),delete rn[n.url]):um(n,t))},um=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{fm(n)}finally{hm(e)}},0))},lM=n=>{let e=rn[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},fm=n=>{let e=rn[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],s=cm();for(let r=0;r<t.length;r+=rm)i.push(t.slice(r,r+rm));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&n.send(Tt(["CLOSE",r]))}e.pendingEose.clear(),e.requestedAt=Date.now(),i.forEach((r,o)=>{var c;let a=(c=e.subIds)[o]??(c[o]=nn(64));e.pendingEose.add(a),n.send(Tt(["REQ",a,{kinds:[...new Set(r.map(lm))],since:s,"#x":r}]))})},dm=n=>{let e=rn[n.url];if(e&&e.topics.size>0&&!n.isClosed){if(io(n)>0){gm(n,!0);return}e.retryTimer!==null&&(clearTimeout(e.retryTimer),e.retryTimer=null),fm(n),pm(n)}},pm=n=>{Object.entries(tl.forRelay(n)).forEach(([e,t])=>{mm(n,e,t,!0)})},mm=async(n,e,t,i)=>{if(_u.has(n)||n.isClosed)return i?sM:void 0;let s=io(n);if(s>0||n.socket.readyState!==1)return i?el(Math.max(Wi,s)):void 0;let r=await oM(e,i?Tt({...Vn(t),nonce:nn(8)}):t);if(i&&!rn[n.url]?.topics.has(e))return el(Wi);if(io(n)>0||n.isClosed||n.socket.readyState!==1)return i?el(Wi):void 0;if(n.send(r),i)return el(Wi)},gm=(n,e)=>{let t=rn[n.url];if(!t||t.retryTimer!==null&&!e)return;t.retryTimer!==null&&clearTimeout(t.retryTimer);let i=e?io(n):t.retryMs;t.retryMs=Math.min(t.retryMs*2,Wi),t.retryTimer=setTimeout(()=>{t.retryTimer=null,dm(n)},Math.max(i,xu))},hM=mu({init:n=>Zh(n,uM,jS,!0).map(e=>{let t=yu.register(e,()=>Kh(e,i=>{let[s,r,o,a]=Vn(i);if(s!==am){let c=`${pt}: relay failure from ${t.url} - `,l=s==="CLOSED"&&typeof o=="string"?o:a,u=s==="OK"&&o===!1,d=(u||s==="CLOSED")&&l?.startsWith("rate-limited:"),h=u&&l?.startsWith("duplicate:"),m=l&&/^(blocked|restricted|auth-required|pow):/.test(l);if(s==="OK"&&o===!0&&io(t)===0&&no.delete(t),(u||s==="CLOSED")&&m&&!rM(t))return;if(d)iM(t);else if(s==="EOSE"){let g=rn[t.url];g?.pendingEose.delete(r)&&g.pendingEose.size===0&&(g.retryMs=xu,g.retryTimer!==null&&(clearTimeout(g.retryTimer),g.retryTimer=null),Date.now()-g.requestedAt>=1e3&&pm(t))}s==="CLOSED"&&!m&&gm(t,!!d),!h&&n.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(c+r):(u||s==="CLOSED")&&console.warn(c+l));return}if(o&&typeof o=="object"&&"content"in o){let c=rn[t.url];if(c?.subIds.includes(r)&&o.tags){let l=o.tags.find(u=>u[0]===om);l?.[1]&&c.topics.get(l[1])?.(l[1],o.content)}}},()=>dm(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{let s=(o,a)=>{t(o,a)};aM(n,e,s);let r=()=>{rn[n.url]?.topics.get(e)===s&&cM(n,e)};return i.kind==="root"?lM(n).then(()=>r):r},publishTopic:(n,e,t,{kind:i})=>{let s=typeof t=="string"?t:Tt(t);return i==="announce"&&(tl.forRelay(n)[e]=s),mm(n,e,s,i==="announce")},unpublishTopic:(n,e)=>{delete tl.forRelay(n)[e]}}),wA=yu.getSockets,uM=["0x-nostr-relay.fly.dev","bendernostur.duckdns.org:8443","cdn.satellite.earth","nos.lol","nostr.chaima.info","nostr.christiansass.de","nostr.rblb.it","nostr.red5d.dev","nostr.robosats.org","nostr.stakey.net","nostrcity-club.fly.dev","relay-dev.gulugulu.moe","relay.aarpia.com","relay.agentry.com","relay.bitmacro.cloud","relay.bullishbounty.com","relay.degmods.com","relay.flashapp.me","relay.grigic.org","relay.hackshed.dev","relay.kaleidoswap.com","relay.layer.systems","relay.nostr.blockhenge.com","relay.nostr.dev.br","relay.nostrmap.net","relay.novospes.com","relay.piazza.today","relay.routstr.com","testr.nymble.world"].map(n=>"wss://"+n);export{za as AdditiveBlending,Ua as AmbientLight,Ui as BoxGeometry,Ht as BufferAttribute,Lt as BufferGeometry,na as CanvasTexture,Ba as Clock,je as Color,sa as ConeGeometry,pr as CylinderGeometry,Na as DirectionalLight,ra as DodecahedronGeometry,wn as DoubleSide,Mn as Euler,fa as ExtrudeGeometry,dt as Float32BufferAttribute,$o as Fog,ui as Group,La as HemisphereLight,da as IcosahedronGeometry,ea as InstancedMesh,Jf as MathUtils,lt as Matrix4,Wt as Mesh,vs as MeshBasicMaterial,ya as MeshLambertMaterial,_a as MeshStandardMaterial,At as Object3D,Gt as PerspectiveCamera,ws as PlaneGeometry,ta as Points,ur as PointsMaterial,Sn as Quaternion,Yt as SRGBColorSpace,Ko as Scene,Sr as Shape,pa as SphereGeometry,Qo as Sprite,ar as SpriteMaterial,Ia as TextureLoader,ma as TorusGeometry,B as Vector3,Nh as WebGLRenderer,hM as joinRoom,Ct as selfId};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@noble/secp256k1/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)
*/
