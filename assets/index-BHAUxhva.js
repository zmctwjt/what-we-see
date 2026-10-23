(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const h of n)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function d(n){const h={};return n.integrity&&(h.integrity=n.integrity),n.referrerPolicy&&(h.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?h.credentials="include":n.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function p(n){if(n.ep)return;n.ep=!0;const h=d(n);fetch(n.href,h)}})();const Xt=""+new URL("exoplanets-xcmjj05q.json",import.meta.url).href,Gt={Transit:"var(--m-transit)",RV:"var(--m-rv)",Microlensing:"var(--m-micro)",Imaging:"var(--m-imaging)"},Ut={Transit:"凌星法",RV:"视向速度法",Microlensing:"微引力透镜",Imaging:"直接成像",TTV:"凌星时变",ETV:"食时变",OBM:"轨道亮度调制",Pulsar:"脉冲星计时",Astrometry:"天体测量",PTV:"脉动时变",Disk:"盘运动学"};function Y(t){return Gt[t]||"var(--m-other)"}function U(t){return Ut[t]||t}const a={methods:new Set,yearMin:1992,yearMax:2026,radius:null,period:null,distance:null,temp:null,hovered:null,pinned:null},H={data:null,playing:!1},bt=new Map;function rt(t,e){return bt.has(t)||bt.set(t,new Set),bt.get(t).add(e),()=>bt.get(t).delete(e)}function gt(t,e){(bt.get(t)||[]).forEach(d=>d(e))}async function Zt(){const t=await fetch(Xt);if(!t.ok)throw new Error("数据加载失败："+t.status);const e=await t.json();if(!e.planets||e.planets.length!==e.stats.total)throw new Error("数据自检失败：行星明细数与统计数不一致");return H.data=e,a.yearMin=e.stats.years[0],a.yearMax=e.stats.years[1],e}function Bt(t){if(a.methods.size&&!a.methods.has(t.m)||t.y&&(t.y<a.yearMin||t.y>a.yearMax))return!1;if(a.radius){const[e,d]=a.radius;if(!t.r||t.r<e||t.r>d)return!1}if(a.period){const[e,d]=a.period;if(!t.p||t.p<e||t.p>d)return!1}if(a.distance){const[e,d]=a.distance;if(!t.d||t.d<e||t.d>d)return!1}if(a.temp){const[e,d]=a.temp;if(!t.t||t.t<e||t.t>d)return!1}return!0}let At="",Mt=null;function _t(){const t=[[...a.methods].sort().join(","),a.yearMin,a.yearMax,a.radius?a.radius.join("-"):"",a.period?a.period.join("-"):"",a.distance?a.distance.join("-"):"",a.temp?a.temp.join("-"):""].join("|");return(t!==At||!Mt)&&(Mt=H.data.planets.filter(Bt),At=t),Mt}function Q(t,e={}){Object.assign(a,t);const d=H.data&&H.data.stats;if(d){const[p,n]=d.years;Number.isFinite(a.yearMin)||(a.yearMin=p),Number.isFinite(a.yearMax)||(a.yearMax=n),a.yearMin=Math.max(p,Math.min(n,Math.round(a.yearMin))),a.yearMax=Math.max(a.yearMin,Math.min(n,Math.round(a.yearMax)))}gt("filters",{patch:t,source:e.source||"unknown"}),gt("counts",Rt())}function dt(t={}){a.methods=new Set,a.yearMin=H.data.stats.years[0],a.yearMax=H.data.stats.years[1],a.radius=null,a.period=null,a.distance=null,a.temp=null,Object.assign(a,t),gt("filters",{patch:null,source:"reset"}),gt("counts",Rt())}function Rt(){const t=_t(),e={};for(const d of t)e[d.m]=(e[d.m]||0)+1;return{n:t.length,total:H.data.stats.total,byMethod:e,pct:H.data.stats.total?t.length/H.data.stats.total*100:0}}function Ct(t){const e=new Set(a.methods);e.has(t)?e.delete(t):e.add(t),Q({methods:e},{source:"method"})}function z(t,e=0){return t==null||Number.isNaN(t)?"—":t.toLocaleString("zh-CN",{minimumFractionDigits:e,maximumFractionDigits:e})}function ct(t){return t==null?"—":t<1?`${(t*24).toFixed(1)} 小时`:t<400?`${t.toFixed(t<10?2:1)} 天`:t<4e3?`${(t/365.25).toFixed(1)} 年`:`${(t/365.25).toFixed(0)} 年`}function Jt(t){return t*3.26156}function nt(t){if(t==null)return"—";const e=Jt(t);return e<100?`${e.toFixed(0)} 光年`:e<1e4?`${(e/1e3).toFixed(1)} 千光年`:`${(e/1e4).toFixed(1)} 万光年`}function Qt(t){const e=H.data.stats;t.innerHTML=`
    <div class="hero">
      <div class="hero__left">
        <p class="eyebrow">2026 · 第十四届全国大学生数字媒体科技作品及创意竞赛</p>
        <h2 class="hero__title">
          我们看见的<span class="hero__hl">宇宙</span>
        </h2>
        <p class="hero__sub">
          6451 颗系外行星。<br />
          它们不是宇宙的样子，<br />
          是我们的仪器能看见的样子。
        </p>
        <p class="hero__desc">
          1992 年至今，人类确认了 ${z(e.total)} 颗围绕其他恒星运行的行星。
          但这份目录不是宇宙的清单——它是<b>四类探测方法各自的"观测窗口"叠加后的结果</b>。
          凌星法只能看见轨道正对地球的行星，直接成像只能看见离恒星够远的行星，
          微引力透镜看见的是另一批完全不同的对象。
          本作品把这套筛选机制直接画出来。
        </p>
        <div class="hero__stats">
          <div class="stat">
            <b class="mono">${z(e.total)}</b>
            <span>确认行星</span>
          </div>
          <div class="stat">
            <b class="mono">${z(e.hosts)}</b>
            <span>宿主恒星</span>
          </div>
          <div class="stat">
            <b class="mono">${e.transitShare}%</b>
            <span>由凌星法发现</span>
          </div>
          <div class="stat">
            <b class="mono">${e.years[0]}—${e.years[1]}</b>
            <span>观测年数</span>
          </div>
        </div>
      </div>

      <div class="hero__right">
        <svg class="hero__viz" viewBox="0 0 440 440" role="img"
             aria-label="示意图：同一颗行星，不同探测方法看到不同的参数"></svg>
      </div>
    </div>

    <div class="hero__claim">
      <div class="claim">
        <p class="claim__q">如果宇宙里的行星是均匀分布的，为什么我们的目录挤成了几条带？</p>
        <p class="claim__a">
          因为看见的方式，决定了被看见的东西。
        </p>
      </div>
    </div>
  `,te(t.querySelector(".hero__viz"))}function te(t){const e="http://www.w3.org/2000/svg",n=(l,u,i=t)=>{const _=document.createElementNS(e,l);for(const[M,S]of Object.entries(u))S!=null&&_.setAttribute(M,S);return i.appendChild(_),_};[{r:70,name:"凌星法",color:"var(--m-transit)",note:"轨道正对地球"},{r:118,name:"视向速度",color:"var(--m-rv)",note:"恒星被拉动"},{r:166,name:"微引力透镜",color:"var(--m-micro)",note:"引力放大背景星"},{r:204,name:"直接成像",color:"var(--m-imaging)",note:"挡住恒星强光"}].forEach((l,u)=>{n("circle",{cx:220,cy:220,r:l.r,fill:"none",stroke:l.color,"stroke-width":1,"stroke-opacity":.28,"stroke-dasharray":u%2?"4 6":"none"});const _=(-60+u*62)*Math.PI/180,M=220+l.r*Math.cos(_),S=220+l.r*Math.sin(_);n("circle",{cx:M,cy:S,r:4.5,fill:l.color,"fill-opacity":.95});const s=220+(l.r+10)*Math.cos(_),o=220+(l.r+10)*Math.sin(_),b=Math.cos(_)>0?"start":"end",m=n("text",{x:s,y:o,"text-anchor":b,class:"ringLabel",fill:l.color});m.textContent=l.name;const g=n("text",{x:s,y:o+12,"text-anchor":b,class:"ringNote"});g.textContent=l.note}),n("circle",{cx:220,cy:220,r:26,fill:"var(--m-imaging)","fill-opacity":.16,stroke:"var(--m-imaging)","stroke-width":1,"stroke-opacity":.4}),n("circle",{cx:220,cy:220,r:9,fill:"#ffe9a8","fill-opacity":.9});const f=n("text",{x:220,y:266,"text-anchor":"middle",class:"ringNote"});f.textContent="恒星"}const ee="http://www.w3.org/2000/svg";function y(t,e={},d=null){const p=document.createElementNS(ee,t);for(const[n,h]of Object.entries(e))h!=null&&p.setAttribute(n,h);return d&&d.appendChild(p),p}function W(t,e,d={}){const p=y("text",d,t);return p.textContent=e,p}function xt(t,e){const d=t.createSVGPoint();return d.x=e.clientX,d.y=e.clientY,d.matrixTransform(t.getScreenCTM().inverse())}let ot=null,pt=null;function jt(t,e){const{bounds:d,minSize:p=6}=e;let n=null,h=!1;const f=s=>s.x>=d.x0-2&&s.x<=d.x1+2&&s.y>=d.y0-2&&s.y<=d.y1+2;function l(s){if(s.button!==void 0&&s.button!==0||ot&&ot!==t||s.target&&s.target!==t&&!t.contains(s.target))return;const o=xt(t,s);f(o)&&(ot=t,pt=s.pointerId,n=o,h=!1)}function u(s){if(ot!==t||!n)return;const o=xt(t,s);if(!h){if(Math.hypot(o.x-n.x,o.y-n.y)<p)return;h=!0,t.classList.add("is-dragging"),e.onDragStart&&e.onDragStart(n)}e.onDragMove&&e.onDragMove(n,o)}function i(s){if(ot!==t||!n||pt!=null&&s.pointerId!==void 0&&s.pointerId!==pt)return;const o=xt(t,s),b=h,m=n;if(n=null,h=!1,ot=null,pt=null,t.classList.remove("is-dragging"),b){const g=L=>{L.stopPropagation(),L.preventDefault()};t.addEventListener("click",g,{capture:!0,once:!0}),setTimeout(()=>t.removeEventListener("click",g,!0),0),e.onDragEnd&&e.onDragEnd(m,o)}else e.onTap&&e.onTap(m)}function _(){ot===t&&(n=null,h=!1,ot=null,pt=null,t.classList.remove("is-dragging"),e.onDragCancel&&e.onDragCancel())}let M=window.scrollY;function S(){const s=Math.abs(window.scrollY-M);M=window.scrollY,!(s<12)&&ot===t&&n&&!h&&(n=null,ot=null,pt=null)}return t.addEventListener("pointerdown",l),window.addEventListener("pointermove",u),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",_),window.addEventListener("scroll",S,{passive:!0}),()=>{t.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",_),window.removeEventListener("scroll",S)}}function Vt(t,e){const{bounds:d,onSelect:p,minSize:n=6,cls:h="brushRect"}=e,f=y("g",{class:"brushLayer","pointer-events":"none"},t);let l=null;return jt(t,{bounds:d,minSize:n,onDragStart:u=>{l=y("rect",{x:u.x,y:u.y,width:0,height:0,class:h},f)},onDragMove:(u,i)=>{if(!l)return;const _=Math.min(u.x,i.x),M=Math.min(u.y,i.y);l.setAttribute("x",_),l.setAttribute("y",M),l.setAttribute("width",Math.abs(i.x-u.x)),l.setAttribute("height",Math.abs(i.y-u.y))},onDragEnd:(u,i)=>{l&&(l.remove(),l=null);const _=Math.min(u.x,i.x),M=Math.max(u.x,i.x),S=Math.min(u.y,i.y),s=Math.max(u.y,i.y);M-_<3||s-S<3||p({x0:_,y0:S,x1:M,y1:s})},onDragCancel:()=>{l&&(l.remove(),l=null)}}),f}function Kt(t,e){const{x0:d,x1:p,y0:n,y1:h,onBrush:f,onMove:l,onLeave:u,minSize:i=5}=e,_=y("g",{class:"rangeLayer","pointer-events":"none"},t);let M=null;const S=s=>Math.max(d,Math.min(p,s));return t.addEventListener("pointermove",s=>{if(t.classList.contains("is-dragging"))return;const o=xt(t,s);if(o.x<d-2||o.x>p+2||o.y<n-2||o.y>h+2){u&&u();return}l&&l(S(o.x))}),t.addEventListener("pointerleave",()=>{u&&u()}),jt(t,{bounds:{x0:d,y0:n,x1:p,y1:h},minSize:i,onDragStart:s=>{M=y("rect",{x:S(s.x),y:n,width:0,height:h-n,class:"brushBand"},_)},onDragMove:(s,o)=>{if(!M)return;const b=S(Math.min(s.x,o.x)),m=S(Math.max(s.x,o.x));M.setAttribute("x",b),M.setAttribute("width",m-b)},onDragEnd:(s,o)=>{M&&(M.remove(),M=null);const b=S(Math.min(s.x,o.x)),m=S(Math.max(s.x,o.x));if(m-b<3){f(null);return}f([b,m])},onDragCancel:()=>{M&&(M.remove(),M=null)}}),t.addEventListener("dblclick",()=>f(null)),_}let lt=null;function se(){return lt||(lt=document.createElement("div"),lt.className="hoverTip",document.body.appendChild(lt),lt)}function ut(t,e,d){const p=se();p.innerHTML=t,p.classList.add("is-on");const n=14,h=p.getBoundingClientRect();let f=e+n,l=d+n;f+h.width>window.innerWidth-8&&(f=e-h.width-n),l+h.height>window.innerHeight-8&&(l=d-h.height-n),p.style.transform=`translate(${Math.max(8,f)}px, ${Math.max(8,l)}px)`}function st(){lt&&lt.classList.remove("is-on")}function Ft(t,e,d,p){const n=Math.log10(t),h=Math.log10(e);return f=>d+(Math.log10(Math.max(f,t))-n)/(h-n)*(p-d)}function Yt(t){let e=!1,d=null;return(...p)=>{d=p,!e&&(e=!0,requestAnimationFrame(()=>{e=!1,t(...d)}))}}const Pt=1060,$t=640,I={t:34,r:34,b:64,l:82};function ae(t){t.innerHTML=`
    <div class="plane">
      <div class="plane__main">
        <div class="plane__toolbar" id="planeToolbar"></div>
        <div class="plane__stage">
          <svg class="plane__svg" viewBox="0 0 ${Pt} ${$t}" role="img"
               aria-label="系外行星周期与半径分布，可拖拽框选筛选"></svg>
          <div class="plane__hint mono">拖拽框选 · 双击重置</div>
        </div>
        <div class="plane__legend" id="planeLegend"></div>
      </div>
      <aside class="plane__side">
        <div class="selCard" id="planeSel"></div>
        <h3 class="sideTitle">当前选中</h3>
        <div class="readout" id="planeReadout"></div>
        <h3 class="sideTitle" style="margin-top:20px">方法窗口</h3>
        <div class="windowList" id="planeWindows"></div>
      </aside>
    </div>
  `;const e=t.querySelector(".plane__svg"),d=t.querySelector("#planeToolbar"),p=t.querySelector("#planeLegend"),n=t.querySelector("#planeReadout"),h=t.querySelector("#planeSel"),f=t.querySelector("#planeWindows"),l=H.data,u=Pt-I.l-I.r,i=$t-I.t-I.b,[_,M]=l.planeMeta.periodLog,[S,s]=l.planeMeta.radiusLog,o=Ft(Math.pow(10,_),Math.pow(10,M),I.l,I.l+u),b=Ft(Math.pow(10,S),Math.pow(10,s),I.t+i,I.t),m=x=>o(x),g=x=>b(x),L=x=>Math.pow(10,_+(x-I.l)/u*(M-_)),N=x=>Math.pow(10,S+(I.t+i-x)/i*(s-S)),v=y("g",{class:"axes"},e);[[.1,"2.4h"],[1,"1天"],[10,"10天"],[100,"100天"],[1e3,"3年"],[1e4,"27年"],[1e5,"274年"]].forEach(([x,T])=>{const P=m(x);y("line",{x1:P,y1:I.t,x2:P,y2:I.t+i,stroke:"var(--line)","stroke-width":.5},v),W(v,T,{x:P,y:I.t+i+20,"text-anchor":"middle",class:"axLabel"})}),[[.5,"0.5"],[1,"1"],[2,"2"],[4,"4"],[8,"8"],[16,"16"],[32,"32"]].forEach(([x,T])=>{if(x>Math.pow(10,s)||x<Math.pow(10,S))return;const P=g(x);y("line",{x1:I.l,y1:P,x2:I.l+u,y2:P,stroke:"var(--line)","stroke-width":.5},v),W(v,T,{x:I.l-12,y:P,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})}),[{r:1,n:"地球",c:"#7dd3a0"},{r:3.88,n:"海王星",c:"#6a9bd8"},{r:11.2,n:"木星",c:"#d8a06a"}].forEach(x=>{const T=g(x.r);T<I.t||T>I.t+i||(y("line",{x1:I.l,y1:T,x2:I.l+u,y2:T,stroke:x.c,"stroke-width":.9,"stroke-dasharray":"5 5","stroke-opacity":.45},v),W(v,x.n,{x:I.l+u-6,y:T-5,"text-anchor":"end",class:"refLabel",fill:x.c}))}),W(v,"轨道周期（对数刻度）",{x:I.l+u/2,y:$t-14,"text-anchor":"middle",class:"axTitle"}),W(v,"行星半径（地球半径倍数，对数）",{x:16,y:I.t+i/2,"text-anchor":"middle",class:"axTitle",transform:`rotate(-90 16 ${I.t+i/2})`});const q=y("g",{class:"pts"},e),D=y("g",{class:"selPts"},e),G=Yt(()=>{q.innerHTML="",D.innerHTML="";const x=l.planets,T=new Map,P=new Map;for(const F of x){if(!F.p||!F.r||F.p<=0||F.r<=0)continue;const V=Math.log10(F.p),r=Math.log10(F.r);if(V<_||V>M||r<S||r>s)continue;const w=Bt(F)?T:P;w.has(F.m)||w.set(F.m,[]),w.get(F.m).push(F)}for(const[F,V]of P){const r=y("g",{},q);for(const w of V)y("circle",{cx:m(w.p).toFixed(1),cy:g(w.r).toFixed(1),r:1.15,fill:Y(F),"fill-opacity":.05,class:"pt pt--out"},r)}for(const[F,V]of T){const r=y("g",{"data-m":F},q),w=V.length>3e3?1.7:V.length>800?2.1:2.7,R=Math.min(6,700/Math.max(V.length,1));V.forEach((C,A)=>{const Z=y("circle",{cx:m(C.p).toFixed(1),cy:g(C.r).toFixed(1),r:w,fill:Y(C.m),"fill-opacity":.78,class:"pt pt--in","data-name":C.n},r);A<160&&Z.style.setProperty("--d",`${Math.round(A*R*4)}ms`)})}[a.pinned,a.hovered].forEach((F,V)=>{if(!F)return;const r=x.find(R=>R.n===F);if(!r||!r.p||!r.r)return;const w=y("g",{},D);V===0?(y("circle",{cx:m(r.p),cy:g(r.r),r:10,fill:"none",stroke:"var(--cinnabar)","stroke-width":1.6},w),y("circle",{cx:m(r.p),cy:g(r.r),r:4,fill:"var(--cinnabar)",stroke:"var(--bg)","stroke-width":1.4},w)):y("circle",{cx:m(r.p),cy:g(r.r),r:6.5,fill:"none",stroke:"var(--fg)","stroke-width":1.2,"stroke-opacity":.85},w)}),$()});Vt(e,{bounds:{x0:I.l,y0:I.t,x1:I.l+u,y1:I.t+i},onSelect:({x0:x,y0:T,x1:P,y1:F})=>{const V=L(x),r=L(P),w=N(T),R=N(F),C=Math.min(V,r),A=Math.max(V,r),Z=Math.min(R,w),O=Math.max(R,w);if(A/Math.max(C,1e-9)<1.05||O-Z<.05){dt({pinned:null,hovered:null});return}Q({period:[C,A],radius:[Z,O]},{source:"plane"})}}),e.addEventListener("dblclick",x=>{x.target.classList&&x.target.classList.contains("pt--in")||dt({pinned:null,hovered:null})}),e.addEventListener("pointermove",x=>{const T=x.target;if(!T.classList||!T.classList.contains("pt--in")){st();return}const P=T.dataset.name,F=l.planets.find(V=>V.n===P);F&&(a.hovered!==P&&(a.hovered=P,G()),ut(`<b>${F.n}</b><br>${U(F.m)} · ${F.y||"—"}<br>${F.r?F.r.toFixed(2)+" R⊕":"—"} · ${ct(F.p)}<br>${nt(F.d)}`,x.clientX,x.clientY),X(F))}),e.addEventListener("pointerleave",()=>{st(),a.hovered&&(a.hovered=null,G())}),e.addEventListener("click",x=>{const T=x.target;if(T.classList&&T.classList.contains("pt--in")){const P=T.dataset.name;a.pinned=a.pinned===P?null:P,G()}});function c(){const x=H.data.methods.filter(F=>F.n>=6),T=H.data.stats;d.innerHTML=`
      <button class="mBtn ${a.methods.size===0?"is-on":""}" data-m="" type="button">
        全部 <b class="mono">${z(T.total)}</b>
      </button>
      ${x.map(F=>`
        <button class="mBtn ${a.methods.has(F.key)?"is-on":""}"
                data-m="${F.key}" style="--c:${Y(F.key)}" type="button">
          <i></i>${U(F.key)} <b class="mono">${z(F.n)}</b>
        </button>`).join("")}
      <button class="mBtn mBtn--reset" id="planeReset" type="button">清除筛选</button>
    `,d.querySelectorAll(".mBtn[data-m]").forEach(F=>{F.addEventListener("click",()=>{F.dataset.m?Ct(F.dataset.m):Q({methods:new Set},{source:"method"})})});const P=d.querySelector("#planeReset");P&&P.addEventListener("click",()=>dt({pinned:null,hovered:null}))}function E(){const x=H.data.methods.filter(T=>T.n>=6);p.innerHTML='<span class="lgTitle">发现方法</span>'+x.map(T=>`<span class="lg"><i style="background:${Y(T.key)}"></i>${U(T.key)}<b class="mono">${T.share}%</b></span>`).join("")+'<span class="lg lg--other"><i style="background:var(--m-other)"></i>其他</span>'}function $(){const x=_t(),T=H.data.stats,P=T.total?x.length/T.total*100:0,F={};x.forEach(w=>{F[w.m]=(F[w.m]||0)+1});const V=Object.entries(F).sort((w,R)=>R[1]-w[1]).slice(0,4),r=[];a.methods.size&&r.push(`方法：${[...a.methods].map(U).join(" / ")}`),a.period&&r.push(`周期 ${ct(a.period[0])} – ${ct(a.period[1])}`),a.radius&&r.push(`半径 ${a.radius[0].toFixed(2)} – ${a.radius[1].toFixed(2)} R⊕`),(a.yearMin>T.years[0]||a.yearMax<T.years[1])&&r.push(`年份 ${a.yearMin} – ${a.yearMax}`),h.innerHTML=`
      <div class="selCard__n">
        <b class="mono">${z(x.length)}</b>
        <span class="mono">/ ${z(T.total)}　${P.toFixed(1)}%</span>
      </div>
      <div class="selCard__bar"><span style="width:${P}%"></span></div>
      ${r.length?`<ul class="selCard__tags">${r.map(w=>`<li>${w}</li>`).join("")}</ul>`:'<p class="selCard__none dim">全选 · 拖拽图表可框选参数区间</p>'}
      <div class="selCard__mix">
        ${V.map(([w,R])=>`
          <div class="mixRow">
            <i style="background:${Y(w)}"></i>
            <span>${U(w)}</span>
            <b class="mono">${z(R)}</b>
            <em class="mono">${x.length?(R/x.length*100).toFixed(0):0}%</em>
          </div>`).join("")}
      </div>
    `}function X(x){x&&(n.innerHTML=`
      <div class="ro__name">${x.n}${a.pinned===x.n?'<span class="pinTag">已固定</span>':""}</div>
      <dl class="ro__list">
        <div><dt>发现方法</dt><dd style="color:${Y(x.m)}">${U(x.m)}</dd></div>
        <div><dt>发现年份</dt><dd class="mono">${x.y||"—"}</dd></div>
        <div><dt>轨道周期</dt><dd class="mono">${ct(x.p)}</dd></div>
        <div><dt>行星半径</dt><dd class="mono">${x.r?x.r.toFixed(2)+" R⊕":"—"}</dd></div>
        <div><dt>距地球</dt><dd class="mono">${nt(x.d)}</dd></div>
        <div><dt>平衡温度</dt><dd class="mono">${x.t?x.t.toFixed(0)+" K":"—"}</dd></div>
        <div><dt>宿主恒星</dt><dd>${x.h}</dd></div>
        <div><dt>系统行星数</dt><dd class="mono">${x.sp??"—"}</dd></div>
      </dl>
    `)}function tt(){const x=H.data.methods.filter(T=>T.n>=6).slice(0,4);f.innerHTML=x.map(T=>`
      <div class="win" style="--c:${Y(T.key)}">
        <div class="win__head"><i></i><span>${U(T.key)}</span>
          <b class="mono">${z(T.n)}</b></div>
        <div class="win__rows">
          <div><span>半径中位</span><b class="mono">${T.radius.med?T.radius.med.toFixed(1)+" R⊕":"—"}</b></div>
          <div><span>周期中位</span><b class="mono">${ct(T.period.med)}</b></div>
          <div><span>距离中位</span><b class="mono">${nt(T.dist.med)}</b></div>
        </div>
      </div>`).join("")}c(),E(),tt(),G();const at=l.planets.find(x=>x.m==="Transit"&&x.p&&x.r&&x.d&&x.t)||l.planets[0];X(at),rt("filters",()=>{c(),G()})}function ne(t){t.innerHTML=`
    <div class="methods">
      <div class="methods__grid" id="mGrid"></div>
    </div>
    <div class="methods__note">
      <p><span class="mark">读法</span>
        每条横条表示该方法的「典型观测区间」：深色段是 10%—90% 分位，竖线是中位数。
        同一指标在不同方法间可以相差<b>数千倍</b>——这不是行星的差异，是仪器的差异。
        <b>点击卡片可只看该方法</b>，可多选。</p>
    </div>
  `;const e=t.querySelector("#mGrid");function d(h,f,l,u,i){if(!f||f.med===null||f.med===void 0)return`<div class="bar"><span class="bar__label">${h}</span>
        <div class="bar__track"><span class="bar__na mono">无数据</span></div></div>`;const _=o=>{if(o==null)return 0;const b=Math.log10(Math.max(o,u)),m=Math.log10(u),g=Math.log10(i);return Math.min(1,Math.max(0,(b-m)/(g-m)))*100},M=_(f.p10),S=_(f.p90),s=_(f.med);return`
      <div class="bar">
        <span class="bar__label">${h}</span>
        <div class="bar__track">
          <span class="bar__range" style="left:${M}%; width:${Math.max(S-M,1.5)}%"></span>
          <span class="bar__med" style="left:${s}%"></span>
        </div>
        <span class="bar__val mono">${l(f.med)}</span>
      </div>`}const p={Transit:"行星从恒星前方经过，恒星亮度周期性下降。要求轨道面正对地球——概率只有约 0.5%，因此只能看见轨道小、离恒星近的行星。",RV:"行星拉动恒星，使恒星光谱周期性红移蓝移。对质量敏感，能看见较重的行星，且不受轨道朝向限制。",Microlensing:"行星引力放大背景恒星的光。不依赖亮度，能看见极远、极暗的系统，但事件一次性、无法复观。",Imaging:"直接拍下行星的光。必须遮住恒星强光，因此只能看见离恒星远、自身够大够热的行星。",TTV:"凌星时刻的微小偏移，反推另一颗行星的引力扰动。用于发现系统中「藏起来」的成员。",ETV:"食双星系统中，行星导致的食时刻变化。",OBM:"行星造成的亮度调制。",Pulsar:"脉冲星信号到达时间的周期性异常。1992 年第一颗系外行星即由此发现。",Astrometry:"测量恒星在天球上的微小位移。精度要求极高。"};function n(){const h=H.data.methods.filter(i=>i.n>=6),f=_t(),l=f.length,u={};f.forEach(i=>{u[i.m]=(u[i.m]||0)+1}),e.innerHTML=h.map((i,_)=>{const M=a.methods.has(i.key),S=a.methods.size>0&&!M;return`
        <article class="mCard ${M?"is-on":""} ${S?"is-dim":""}"
                 style="--c:${Y(i.key)}; animation-delay:${_*60}ms"
                 data-m="${i.key}" tabindex="0" role="button"
                 aria-pressed="${M}"
                 aria-label="筛选${U(i.key)}，共 ${i.n} 颗">
          <header class="mCard__head">
            <div class="mCard__dot"></div>
            <div>
              <h3 class="mCard__name">${U(i.key)}</h3>
              <p class="mCard__key mono">${i.key}</p>
            </div>
            <div class="mCard__n">
              <b class="mono">${z(l&&!S?u[i.key]||0:i.n)}</b>
              <span class="mono">${i.share}%</span>
            </div>
          </header>
          <div class="mCard__bars">
            ${d("半径",i.radius,s=>s?s.toFixed(1)+" R⊕":"—",.3,30)}
            ${d("周期",i.period,s=>ct(s),.1,1e5)}
            ${d("距离",i.dist,s=>nt(s),1,3e4)}
          </div>
          <p class="mCard__window">${p[i.key]||""}</p>
        </article>`}).join(""),e.querySelectorAll(".mCard").forEach(i=>{const _=i.dataset.m,M=()=>Ct(_);i.addEventListener("click",M),i.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),M())})})}n(),rt("filters",n)}const ft=1060,Nt=450,B={t:52,r:140,b:58,l:70},yt=["Transit","RV","Microlensing","Imaging"];function ie(t){t.innerHTML=`
    <div class="timeline">
      <div class="timeline__main">
        <div class="tlBar">
          <div class="tlBar__left">
            <button class="btn btn--play" id="tlPlay" type="button">
              <span class="playIcon"></span><span id="tlPlayLabel">播放</span>
            </button>
            <div class="tlRange mono" id="tlRange"></div>
          </div>
          <div class="tlBar__right">
            <div class="seg" role="group" aria-label="显示模式">
              <button class="segBtn is-on" data-mode="count" type="button">数量</button>
              <button class="segBtn" data-mode="share" type="button">占比</button>
            </div>
            <label class="spd mono">速度
              <input id="tlSpeed" type="range" min="1" max="5" step="1" value="3" />
            </label>
          </div>
        </div>
        <svg class="timeline__svg" viewBox="0 0 ${ft} ${Nt}" role="img"
             aria-label="1992 至 2026 年系外行星发现数量，可拖拽选择年份区间"></svg>
        <p class="tlHint mono">拖拽选择年份区间 · 双击重置 · 点播放看面积图逐年生长</p>
      </div>
      <aside class="timeline__side" id="tlSide"></aside>
    </div>
  `;const e=t.querySelector(".timeline__svg"),d=t.querySelector("#tlSide"),p=t.querySelector("#tlRange"),n=t.querySelector("#tlPlay"),h=t.querySelector("#tlPlayLabel"),f=t.querySelector("#tlSpeed"),l=H.data.timeline,u=ft-B.l-B.r,i=Nt-B.t-B.b,_=l[0].y,M=l[l.length-1].y,S=Math.max(...l.map(r=>r.total));let s="count",o=null;const b=r=>B.l+(r-_)/(M-_)*u,m=r=>_+(r-B.l)/u*(M-_),g=y("g",{},e),L=y("g",{},e),N=y("g",{},e),v=y("g",{"pointer-events":"none"},e),k=y("g",{},e),q=[{y:1992,t:"PSR B1257+12"},{y:1995,t:"51 Peg b"},{y:2009,t:"开普勒"},{y:2018,t:"TESS"}];function D(r){return s==="count"?B.t+i-r/S*i:B.t+i-r/100*i}function G(){return o===null?l:l.filter(r=>r.y<=o)}function c(){g.innerHTML="";for(let r=0;r<=5;r++){const w=s==="count"?Math.round(S/5*r):r*20,R=D(w);y("line",{x1:B.l,y1:R,x2:B.l+u,y2:R,stroke:"var(--line)","stroke-width":.5},g),W(g,s==="count"?z(w):w+"%",{x:B.l-10,y:R,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})}for(let r=_;r<=M;r++){if((r-_)%4!==0&&r!==M)continue;const w=b(r);y("line",{x1:w,y1:B.t,x2:w,y2:B.t+i,stroke:"var(--line)","stroke-width":.4},g),W(g,String(r),{x:w,y:B.t+i+20,"text-anchor":"middle",class:"axLabel"})}}function E(){L.innerHTML="";const r=G();if(!r.length)return;const w=[...yt,"other"],R={};w.forEach(C=>{R[C]=r.map(()=>0)}),r.forEach((C,A)=>{let Z=0;yt.forEach(O=>{Z+=s==="count"?C[O]||0:C.total?(C[O]||0)/C.total*100:0,R[O][A]=Z}),R.other[A]=s==="count"?C.total:100});for(let C=w.length-1;C>=0;C--){const A=w[C],Z=R[A],O=C===0?r.map(()=>0):R[w[C-1]];let et="";r.forEach((ht,qt)=>{et+=`${qt===0?"M":"L"}${b(ht.y).toFixed(1)},${D(Z[qt]).toFixed(1)}`});for(let ht=r.length-1;ht>=0;ht--)et+=`L${b(r[ht].y).toFixed(1)},${D(O[ht]).toFixed(1)}`;et+="Z";const mt=A==="other"?"var(--m-other)":Y(A),Ht=y("path",{d:et,fill:mt,"fill-opacity":.72,stroke:mt,"stroke-width":.6},L);o!==null&&(Ht.style.animation="none",Ht.style.opacity="1")}if(q.forEach(C=>{if(C.y>(o===null?M:o))return;const A=b(C.y);y("line",{x1:A,y1:B.t,x2:A,y2:B.t+i,stroke:"var(--fg-faint)","stroke-width":.8,"stroke-dasharray":"3 4"},L)}),o!==null){const C=b(o);y("line",{x1:C,y1:B.t,x2:C,y2:B.t+i,stroke:"var(--cinnabar)","stroke-width":2,"stroke-opacity":.9,class:"playEdge"},L);const A=r[r.length-1];A&&(W(L,`${A.y}`,{x:C,y:B.t-8,"text-anchor":"middle",class:"playYear",fill:"var(--cinnabar)"}),W(L,z(A.total),{x:C,y:B.t+12,"text-anchor":"middle",class:"playCount",fill:"var(--cinnabar)"}))}}function $(){v.innerHTML="",q.forEach((r,w)=>{const R=b(r.y),C=B.t-34+w%2*15,A=R>B.l+u*.8;W(v,r.t,{x:A?R-5:R+5,y:C,"text-anchor":A?"end":"start",class:"evLabel"}),y("line",{x1:R,y1:C+4,x2:R,y2:B.t,stroke:"var(--fg-faint)","stroke-width":.6,"stroke-opacity":.5},v)})}function X(){k.innerHTML="",[...yt,"other"].forEach((r,w)=>{const R=B.t+8+w*18,C=r==="other"?"var(--m-other)":Y(r);y("rect",{x:ft-B.r+14,y:R-7,width:9,height:9,fill:C,"fill-opacity":.8},k),W(k,r==="other"?"其他":U(r),{x:ft-B.r+29,y:R,class:"lgText"})})}function tt(){if(N.innerHTML="",o!==null){const R=b(o);R<B.l+u&&y("rect",{x:R,y:B.t,width:B.l+u-R,height:i,fill:"var(--void-0)","fill-opacity":.5},N);return}const r=b(a.yearMin),w=b(a.yearMax);r>B.l+.5&&y("rect",{x:B.l,y:B.t,width:r-B.l,height:i,fill:"var(--void-0)","fill-opacity":.58},N),w<B.l+u-.5&&y("rect",{x:w,y:B.t,width:B.l+u-w,height:i,fill:"var(--void-0)","fill-opacity":.58},N),y("line",{x1:r,y1:B.t,x2:r,y2:B.t+i,stroke:"var(--cinnabar)","stroke-width":1.4},N),y("line",{x1:w,y1:B.t,x2:w,y2:B.t+i,stroke:"var(--cinnabar)","stroke-width":1.4},N),[r,w].forEach(R=>{y("rect",{x:R-3,y:B.t+i/2-12,width:6,height:24,rx:2,fill:"var(--cinnabar)"},N)}),p.textContent=`${a.yearMin} — ${a.yearMax}（${a.yearMax-a.yearMin+1} 年）`}Kt(e,{x0:B.l,x1:B.l+u,y0:B.t,y1:B.t+i,onBrush:r=>{if(o!==null&&x(),!r){Q({yearMin:_,yearMax:M},{source:"timeline"});return}const w=m(r[0]),R=m(r[1]);if(!Number.isFinite(w)||!Number.isFinite(R))return;let C=Math.round(w),A=Math.round(R);C=Math.max(_,Math.min(M,C)),A=Math.max(_,Math.min(M,A));const Z=Math.min(C,A),O=Math.max(C,A);O-Z<1||Q({yearMin:Z,yearMax:O},{source:"timeline"})}}),e.addEventListener("pointermove",r=>{if(o!==null){st();return}const w=e.getBoundingClientRect(),R=(r.clientX-w.left)/w.width*ft;if(R<B.l||R>B.l+u){st();return}const C=Math.round(m(R)),A=l.find(O=>O.y===C);if(!A){st();return}const Z=yt.filter(O=>A[O]).map(O=>`<span style="color:${Y(O)}">●</span> ${U(O)} ${A[O]}`).join("<br>");ut(`<b>${C} 年</b>　共 ${z(A.total)} 颗<br>${Z||"—"}`,r.clientX,r.clientY)}),e.addEventListener("pointerleave",()=>st());let at=null;function x(){at&&clearInterval(at),at=null,H.playing=!1,n.classList.remove("is-on"),h.textContent="播放",o=null,E(),tt(),P()}function T(){at&&clearInterval(at),H.playing=!0,n.classList.add("is-on"),h.textContent="暂停",o=_;const r=Number(f.value),w=[300,200,130,85,55][Math.max(0,Math.min(4,r-1))];at=setInterval(()=>{if(o>=M){x();return}o+=1,E(),tt(),P()},w),E(),tt(),P()}n.addEventListener("click",()=>{H.playing?x():T()}),f.addEventListener("input",()=>{H.playing&&T()}),t.querySelectorAll(".segBtn").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.mode,t.querySelectorAll(".segBtn").forEach(w=>w.classList.toggle("is-on",w===r)),c(),E()})});function P(){const r=o===null?a.yearMax:o,w=o===null?a.yearMin:_,R=l.filter(O=>O.y>=w&&O.y<=r),C=R.reduce((O,et)=>O+et.total,0),A={};R.forEach(O=>yt.forEach(et=>{A[et]=(A[et]||0)+(O[et]||0)}));const Z=Object.entries(A).sort((O,et)=>et[1]-O[1]);d.innerHTML=`
      <h3 class="sideTitle">${o!==null?"已显现":"所选区间"}</h3>
      <div class="tlStat">
        <b class="mono">${z(C)}</b>
        <span class="mono">颗 · ${w}—${r}</span>
      </div>
      <div class="tlMix">
        ${Z.map(([O,et])=>{const mt=C?et/C*100:0;return`<div class="tlMixRow">
            <i style="background:${Y(O)}"></i>
            <span>${U(O)}</span>
            <div class="tlMixBar"><b style="width:${mt}%;background:${Y(O)}"></b></div>
            <em class="mono">${mt.toFixed(0)}%</em>
          </div>`}).join("")}
      </div>
      <p class="sideNote" style="margin-top:16px">
        拖拽图表可选择任意年份区间；点「播放」看面积图逐年生长。
        2014 与 2016 的两个高峰来自开普勒分批公布，并非真实发现速率。
      </p>
    `}function F(){c(),E(),tt(),$(),P()}X(),F(),rt("filters",r=>{H.playing&&r&&r.source==="play"||(o!==null&&(o=null),tt(),P(),E())});const V=new IntersectionObserver(r=>{r.forEach(w=>{w.isIntersecting&&(L.style.animation="areaGrow 900ms cubic-bezier(.22,.61,.36,1) both",V.disconnect())})},{threshold:.25});V.observe(e)}const Ot=1060,wt=440,j={t:34,r:40,b:62,l:70};function oe(t){const e=H.data.valley,d=H.data.valleySubsamples||[];t.innerHTML=`
    <div class="radius">
      <div class="radius__main">
        <div class="radius__stage">
          <svg class="radius__svg" viewBox="0 0 ${Ot} ${wt}" role="img"
               aria-label="系外行星半径分布直方图，可拖拽筛选半径区间"></svg>
        </div>
        <div class="radius__note" id="radNote"></div>
        <div class="valleyTable" id="valleyTable"></div>
      </div>
      <aside class="radius__side">
        <div class="selCard" id="radSel"></div>
        <h3 class="sideTitle" style="margin-top:18px">两种解释</h3>
        <div class="exp">
          <div class="exp__head"><i class="exp__dot" style="background:var(--accent)"></i>物理成因</div>
          <p class="exp__body">行星形成后保留原生氢氦大气。若大气被恒星辐射剥离，半径会收缩到约 1.6 R⊕ 以下；若保住，则停留在 2.4 R⊕ 以上。中间的尺寸不稳定，因此形成「谷」。</p>
        </div>
        <div class="exp">
          <div class="exp__head"><i class="exp__dot" style="background:var(--cinnabar)"></i>观测成因</div>
          <p class="exp__body">半径由「凌星深度」推算，而凌星深度与恒星半径耦合。若恒星半径估计系统性偏大，测得的行星半径会被拉向某一档，从而人为制造凹陷。</p>
        </div>
        <div class="exp exp--neutral">
          <div class="exp__head"><i class="exp__dot" style="background:var(--fg-faint)"></i>本作品的立场</div>
          <p class="exp__body">只呈现凹陷位置与幅度，并检验它在不同子样本中是否复现，不判断成因归属。</p>
        </div>
      </aside>
    </div>
  `;const p=t.querySelector(".radius__svg"),n=t.querySelector("#radNote"),h=t.querySelector("#radSel"),f=Ot-j.l-j.r,l=wt-j.t-j.b,u=H.data.radiusHist.filter(v=>v.r>=.5&&v.r<=8),i=Math.max(...u.map(v=>v.n)),_=v=>j.l+(v-.5)/(8-.5)*f,M=v=>.5+(v-j.l)/f*(8-.5),S=v=>j.t+l-v/i*l,s=Math.max(1.2,f/(7.5/H.data.radiusBinWidth)-.6),o=y("g",{},p),b=y("g",{},p),m=y("g",{},p);for(let v=0;v<=5;v++){const k=Math.round(i/5*v),q=S(k);y("line",{x1:j.l,y1:q,x2:j.l+f,y2:q,stroke:"var(--line)","stroke-width":.5},o),W(o,z(k),{x:j.l-10,y:q,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})}[.5,1,1.5,2,3,4,6,8].forEach(v=>{const k=_(v);y("line",{x1:k,y1:j.t,x2:k,y2:j.t+l,stroke:"var(--line)","stroke-width":.4},o),W(o,v,{x:k,y:j.t+l+20,"text-anchor":"middle",class:"axLabel"})}),[{r:1,n:"地球"},{r:3.88,n:"海王星"}].forEach(v=>{const k=_(v.r);y("line",{x1:k,y1:j.t,x2:k,y2:j.t+l,stroke:"var(--fg-dim)","stroke-width":.9,"stroke-dasharray":"4 4","stroke-opacity":.5},o),W(o,v.n,{x:k+5,y:j.t+14,class:"refLabel",fill:"var(--fg-dim)"})}),W(o,"行星半径（地球半径倍数）",{x:j.l+f/2,y:wt-12,"text-anchor":"middle",class:"axTitle"}),W(o,"行星数量",{x:16,y:j.t+l/2,"text-anchor":"middle",class:"axTitle",transform:`rotate(-90 16 ${j.t+l/2})`});function g(){b.innerHTML="";const v=new Map;for(const k of H.data.planets){const q=k.r;if(!q||q<.5||q>8)continue;const D=Math.round(Math.round(q/H.data.radiusBinWidth)*H.data.radiusBinWidth*1e3)/1e3;v.has(D)||v.set(D,{});const G=v.get(D);G[k.m]=(G[k.m]||0)+1}u.forEach(k=>{const q=v.get(k.r)||{},D=_(k.r)-s/2;let G=0;const c=Object.entries(q).sort(($,X)=>X[1]-$[1]),E=a.radius&&k.r>=a.radius[0]&&k.r<=a.radius[1];for(const[$,X]of c){const tt=X/i*l,at=j.t+l-G-tt;y("rect",{x:D.toFixed(2),y:at.toFixed(2),width:s.toFixed(2),height:Math.max(tt,.5).toFixed(2),fill:Y($),"fill-opacity":E?.95:a.radius?.22:.62,class:"barSeg","data-r":k.r,"data-m":$,"data-n":X},b),G+=tt}}),L()}function L(){if(m.innerHTML="",e){const v=_(e.trough-H.data.radiusBinWidth),k=_(e.trough+H.data.radiusBinWidth);y("rect",{x:v,y:j.t,width:k-v,height:l,fill:"var(--cinnabar)","fill-opacity":.07},m);const q=_(e.trough),D=S(e.troughN);y("line",{x1:q,y1:D+4,x2:q,y2:D+24,stroke:"var(--cinnabar)","stroke-width":1},m),W(m,`谷底 ${e.trough.toFixed(2)} R⊕`,{x:q,y:D+38,"text-anchor":"middle",class:"valleyLabel",fill:"var(--cinnabar)"})}if(a.radius){const v=_(a.radius[0]),k=_(a.radius[1]);y("rect",{x:v,y:j.t,width:Math.max(0,k-v),height:l,fill:"var(--accent)","fill-opacity":.06,stroke:"var(--accent)","stroke-width":1,"stroke-dasharray":"4 4"},m)}}Kt(p,{x0:j.l,x1:j.l+f,y0:j.t,y1:j.t+l,onBrush:v=>{if(!v){Q({radius:null},{source:"radius"});return}const k=M(v[0]),q=M(v[1]),D=Math.min(k,q),G=Math.max(k,q);if(G-D<H.data.radiusBinWidth){Q({radius:null},{source:"radius"});return}Q({radius:[D,G]},{source:"radius"})}}),p.addEventListener("pointermove",v=>{const k=v.target;if(!k.classList||!k.classList.contains("barSeg")){st();return}const q=Number(k.dataset.r),D=[...p.querySelectorAll(".barSeg")].filter(E=>Number(E.dataset.r)===q),G=D.reduce((E,$)=>E+Number($.dataset.n),0),c=D.sort((E,$)=>Number($.dataset.n)-Number(E.dataset.n)).map(E=>`<span style="color:${Y(E.dataset.m)}">●</span> ${U(E.dataset.m)} ${E.dataset.n}`).join("<br>");ut(`<b>${q.toFixed(3)} R⊕</b>　共 ${G} 颗<br>${c}`,v.clientX,v.clientY)}),p.addEventListener("pointerleave",()=>st()),e&&(n.innerHTML=`
      <span class="mark">数据</span>
      在 ${e.window[0]}—${e.window[1]} R⊕ 区间内，数量最低处位于
      <b class="mono">${e.trough.toFixed(3)} R⊕</b>（${z(e.troughN)} 颗）；
      两侧局部峰分别在 <b class="mono">${e.leftPeak.toFixed(2)}</b>（${z(e.leftN)} 颗）
      与 <b class="mono">${e.rightPeak.toFixed(2)}</b>（${z(e.rightN)} 颗）。
      谷底比两侧峰均值低 <b class="mono">${e.dipPct}%</b>。谷底位置与幅度均由数据检测得出。
    `),d.length&&(t.querySelector("#valleyTable").innerHTML=`
      <h4 class="vtTitle">在不同子样本中是否复现</h4>
      <table class="vt">
        <thead><tr><th>子样本</th><th>行星数</th><th>谷底位置</th><th>凹陷幅度</th><th>判定</th></tr></thead>
        <tbody>
          ${d.map(v=>{const k=Math.abs(v.trough-e.trough)<=H.data.radiusBinWidth/2+1e-9;return`<tr><td>${v.label}</td><td class="mono">${z(v.n)}</td>
              <td class="mono">${v.trough.toFixed(3)} R⊕</td><td class="mono">${v.dipPct}%</td>
              <td class="${k?"ok":"vary"}">${k?"谷底一致":"谷底偏移"}</td></tr>`}).join("")}
        </tbody>
      </table>
      <p class="vtNote dim">
        判据：谷底落在全样本谷底的半个分箱（0.0625 R⊕）之内记为一致。
        TESS 子样本谷底偏低（1.625 R⊕），样本量较小且以亮星短周期为主，提示谷的位置对样本选择敏感。
      </p>
    `);function N(){if(!a.radius){h.innerHTML='<p class="selCard__none dim">拖拽图表可选择半径区间</p>';return}const[v,k]=a.radius,q=H.data.planets.filter(c=>c.r&&c.r>=v&&c.r<=k),D={};q.forEach(c=>{D[c.m]=(D[c.m]||0)+1});const G=Object.entries(D).sort((c,E)=>E[1]-c[1]).slice(0,4);h.innerHTML=`
      <div class="selCard__n">
        <b class="mono">${z(q.length)}</b>
        <span class="mono">颗 · ${v.toFixed(2)}–${k.toFixed(2)} R⊕</span>
      </div>
      <div class="selCard__mix">
        ${G.map(([c,E])=>`
          <div class="mixRow"><i style="background:${Y(c)}"></i><span>${U(c)}</span>
          <b class="mono">${z(E)}</b>
          <em class="mono">${q.length?(E/q.length*100).toFixed(0):0}%</em></div>`).join("")}
      </div>
    `}g(),N(),rt("filters",()=>{g(),N()})}const Wt=1060,Lt=480,K={t:40,r:42,b:58,l:74};function re(t){const e=H.data.habitable,d=H.data.stats;t.innerHTML=`
    <div class="hab">
      <div class="hab__main">
        <div class="hab__stage">
          <svg class="hab__svg" viewBox="0 0 ${Wt} ${Lt}" role="img"
               aria-label="宜居带候选行星，按距离与平衡温度分布，可框选筛选"></svg>
        </div>
        <div class="hab__note" id="habNote"></div>
      </div>
      <aside class="hab__side">
        <div class="selCard" id="habSel"></div>
        <h3 class="sideTitle" style="margin-top:18px">筛选条件</h3>
        <ul class="critList">
          <li><span>行星半径</span><b class="mono">≤ 1.8 R⊕</b></li>
          <li><span>平衡温度</span><b class="mono">180—310 K</b></li>
          <li><span>数据完整</span><b class="mono">两项均有实测</b></li>
        </ul>
        <h3 class="sideTitle" style="margin-top:20px">它们是怎么被发现的</h3>
        <div class="hzMethods" id="hzMethods"></div>
        <h3 class="sideTitle" style="margin-top:20px">最近的几颗</h3>
        <div class="hzList" id="hzList"></div>
      </aside>
    </div>
  `;const p=t.querySelector(".hab__svg"),n=t.querySelector("#habSel"),h=Wt-K.l-K.r,f=Lt-K.t-K.b,l=e.filter(c=>c.d&&c.t),u=3.26156,i=Math.max(1,Math.min(...l.map(c=>c.d))),_=Math.max(...l.map(c=>c.d)),M=180,S=310,s=c=>K.l+Math.log10(Math.max(c,i))/Math.log10(_)*h,o=c=>K.t+f-(c-M)/(S-M)*f,b=c=>Math.pow(10,Math.log10(i)+(c-K.l)/h*(Math.log10(_)-Math.log10(i))),m=c=>M+(K.t+f-c)/f*(S-M),g=y("g",{},p),L=y("g",{},p);for(let c=0;c<=5;c++){const E=M+(S-M)/5*c,$=o(E);y("line",{x1:K.l,y1:$,x2:K.l+h,y2:$,stroke:"var(--line)","stroke-width":.5},g),W(g,`${E.toFixed(0)} K`,{x:K.l-10,y:$,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})}const N=[];for(let c=0;c<=5;c++){const E=Math.pow(10,c),$=E/u;$>=i&&$<=_&&N.push({pc:$,ly:E})}N.forEach(({pc:c,ly:E})=>{const $=s(c);y("line",{x1:$,y1:K.t,x2:$,y2:K.t+f,stroke:"var(--line)","stroke-width":.4},g),W(g,E>=1e3?`${E/1e3} 千光年`:`${E} 光年`,{x:$,y:K.t+f+20,"text-anchor":"middle",class:"axLabel"})});const v=o(273);y("line",{x1:K.l,y1:v,x2:K.l+h,y2:v,stroke:"var(--m-imaging)","stroke-width":1,"stroke-dasharray":"5 4","stroke-opacity":.65},g),W(g,"273 K 冰点",{x:K.l+h-4,y:v-6,"text-anchor":"end",class:"refLabel",fill:"var(--m-imaging)"}),W(g,"距地球（对数刻度）",{x:K.l+h/2,y:Lt-12,"text-anchor":"middle",class:"axTitle"}),W(g,"平衡温度（K）",{x:18,y:K.t+f/2,"text-anchor":"middle",class:"axTitle",transform:`rotate(-90 18 ${K.t+f/2})`});function k(){L.innerHTML="",l.forEach(c=>{const E=Bt({...c,m:c.m,y:c.y,r:c.r,p:null,d:c.d,t:c.t}),$=a.pinned===c.n,X=y("g",{class:"hzPt","data-name":c.n,style:"cursor:pointer"},L);y("circle",{cx:s(c.d),cy:o(c.t),r:$?7:5,fill:Y(c.m),"fill-opacity":E?.92:.16,stroke:$?"var(--cinnabar)":"var(--void-1)","stroke-width":$?1.8:1.2},X),y("title",{},X).textContent=`${c.n}
${c.r.toFixed(2)} R⊕
${c.t.toFixed(0)} K
${nt(c.d)}
${U(c.m)} · ${c.y}`})}Vt(p,{bounds:{x0:K.l,y0:K.t,x1:K.l+h,y1:K.t+f},onSelect:({x0:c,y0:E,x1:$,y1:X})=>{const tt=b(c),at=b($),x=m(E),T=m(X),P=Math.min(tt,at),F=Math.max(tt,at),V=Math.min(T,x),r=Math.max(T,x);if(F/Math.max(P,1e-9)<1.05||r-V<2){dt({pinned:null,hovered:null});return}Q({distance:[P,F],temp:[V,r]},{source:"habitable"})}}),p.addEventListener("dblclick",c=>{c.target.closest&&c.target.closest(".hzPt")||dt({pinned:null,hovered:null})}),p.addEventListener("pointermove",c=>{const E=c.target.closest?c.target.closest(".hzPt"):null;if(!E){st();return}const $=l.find(X=>X.n===E.dataset.name);$&&ut(`<b>${$.n}</b><br>${$.r.toFixed(2)} R⊕ · ${$.t.toFixed(0)} K<br>${nt($.d)} · ${U($.m)}`,c.clientX,c.clientY)}),p.addEventListener("pointerleave",()=>st()),p.addEventListener("click",c=>{const E=c.target.closest?c.target.closest(".hzPt"):null;if(!E)return;const $=E.dataset.name;a.pinned=a.pinned===$?null:$,k(),q()});function q(){const c={};e.forEach($=>{c[$.m]=(c[$.m]||0)+1});const E=[];a.temp&&E.push(`温度 ${a.temp[0].toFixed(0)}–${a.temp[1].toFixed(0)} K`),a.distance&&E.push(`距离 ${nt(a.distance[0])}–${nt(a.distance[1])}`),n.innerHTML=`
      <div class="selCard__n">
        <b class="mono">${e.length}</b>
        <span class="mono">颗候选 · ${d.hzSystems} 系统</span>
      </div>
      ${E.length?`<ul class="selCard__tags">${E.map($=>`<li>${$}</li>`).join("")}</ul>`:'<p class="selCard__none dim">拖拽图表可框选温度 × 距离</p>'}
      ${a.pinned?`<p class="selCard__pin mono">已固定：${a.pinned}</p>`:""}
    `}function D(){const c={};e.forEach($=>{c[$.m]=(c[$.m]||0)+1}),t.querySelector("#hzMethods").innerHTML=Object.entries(c).sort(($,X)=>X[1]-$[1]).map(([$,X])=>`
        <button class="hzM" data-m="${$}" type="button"
                style="${a.methods.has($)?"opacity:1;font-weight:600":""}">
          <i style="background:${Y($)}"></i>
          <span>${U($)}</span>
          <b class="mono">${X}</b>
          <span class="hzM__pct mono">${(X/e.length*100).toFixed(0)}%</span>
        </button>`).join(""),t.querySelectorAll(".hzM").forEach($=>{$.addEventListener("click",()=>Ct($.dataset.m))});const E=[...e].filter($=>$.d).sort(($,X)=>$.d-X.d).slice(0,6);t.querySelector("#hzList").innerHTML=E.map($=>`
      <div class="hzRow">
        <span class="hzRow__n">${$.n}</span>
        <span class="hzRow__d mono">${nt($.d)}</span>
        <span class="hzRow__t mono">${$.t.toFixed(0)} K</span>
      </div>`).join("")}const G=(e.filter(c=>c.m==="Transit").length/e.length*100).toFixed(0);t.querySelector("#habNote").innerHTML=`
    <span class="mark">注意</span>
    这 ${e.length} 颗候选中，有 <b class="mono">${G}%</b> 由凌星法发现。
    凌星法偏向「轨道小、离恒星近」的系统，而宜居带要求「轨道适中」——
    这意味着<b>我们的宜居带名单本身，是被探测方式筛选过的样本</b>。
  `,k(),q(),D(),rt("filters",()=>{k(),q(),D()})}function le(t){const e=H.data,d=e.meta,p=e.stats;t.innerHTML=`
    <div class="method">
      <div class="method__grid">
        <article class="mBox">
          <p class="eyebrow">数据来源</p>
          <h3 class="mBox__title">NASA Exoplanet Archive</h3>
          <dl class="srcList">
            <div>
              <dt>接口</dt>
              <dd>TAP 服务，表 <code>pscomppars</code>（复合参数表）</dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>exoplanetarchive.ipac.caltech.edu</dd>
            </div>
            <div>
              <dt>获取日期</dt>
              <dd class="mono">${d.retrieved}</dd>
            </div>
            <div>
              <dt>行星数</dt>
              <dd class="mono">${z(p.total)}</dd>
            </div>
            <div>
              <dt>宿主恒星</dt>
              <dd class="mono">${z(p.hosts)}</dd>
            </div>
          </dl>
        </article>

        <article class="mBox mBox--warn">
          <p class="eyebrow">为什么不用 ps 表</p>
          <h3 class="mBox__title">重复计数会毁掉结论</h3>
          <p class="mBox__text">
            档案库里有两张表：<code>ps</code> 是"每篇文献一行"的观测明细，
            <code>pscomppars</code> 是"一行一颗行星"的复合表。
          </p>
          <p class="mBox__text">
            本项目最初误用了 <code>ps</code> 表：它共 40350 行，
            但其中 <b>5514 颗行星出现多次</b>，最多的一颗（TrES-2 b）出现 34 次。
            若直接统计，行星总数会被虚增 6 倍以上，所有分布形状都会被重复计数污染。
          </p>
          <p class="mBox__text">
            改用 <code>pscomppars</code> 后：行数 6451，唯一行星名 6451，
            <b>两者相等，证明无重复</b>。本作品的全部数字均基于该表。
          </p>
        </article>

        <article class="mBox">
          <p class="eyebrow">关键统计</p>
          <h3 class="mBox__title">支撑核心命题的数字</h3>
          <table class="verTable">
            <tbody>
              <tr><td>凌星法占比</td><td class="mono">${p.transitShare}%</td></tr>
              <tr><td>前两种方法合计</td><td class="mono">${p.top2Share}%</td></tr>
              <tr><td>半径：视向速度 / 凌星</td><td class="mono">${p.radiusRatioRVTransit} 倍</td></tr>
              <tr><td>周期：直接成像 / 凌星</td><td class="mono">${z(p.periodRatioTransitImaging,0)} 倍</td></tr>
              <tr><td>距离：微引力透镜 / 凌星</td><td class="mono">${p.distRatioMLTransit} 倍</td></tr>
              <tr><td>宜居带候选</td><td class="mono">${p.hzCount} 颗 / ${p.hzSystems} 系统</td></tr>
              <tr><td>开普勒望远镜贡献</td><td class="mono">${p.keplerShare}%</td></tr>
            </tbody>
          </table>
        </article>

        <article class="mBox">
          <p class="eyebrow">处理与口径</p>
          <h3 class="mBox__title">数据没有被"美化"</h3>
          <ul class="stackList">
            <li><b>缺失值</b><span>各字段非空率不同（半径 99.2%、平衡温度 91.6%），缺失即不参与该项统计，不插值、不填补。</span></li>
            <li><b>分箱</b><span>半径直方图按 0.125 R⊕ 分箱；周期—半径平面为对数网格 60×44。</span></li>
            <li><b>单位</b><span>半径用地球半径 R⊕；距离原始单位为秒差距 pc，界面换算为光年。</span></li>
            <li><b>方法归并</b><span>11 种原始方法中，数量 ≥6 的单独呈现，其余归入"其他"。</span></li>
            <li><b>不做的推断</b><span>不推断行星成分、大气、是否宜居；只呈现档案中的实测参数。</span></li>
          </ul>
        </article>

        <article class="mBox">
          <p class="eyebrow">技术栈</p>
          <h3 class="mBox__title">不依赖图表库</h3>
          <ul class="stackList">
            <li><b>Vite 5</b><span>构建工具</span></li>
            <li><b>原生 SVG</b><span>散点、堆叠面积、直方图全部手写坐标</span></li>
            <li><b>原生 DOM</b><span>无前端框架</span></li>
            <li><b>Python 3</b><span>数据抓取与预处理</span></li>
          </ul>
        </article>

        <article class="mBox">
          <p class="eyebrow">本作品的立场</p>
          <h3 class="mBox__title">呈现偏差，而非消除偏差</h3>
          <p class="mBox__text">
            探测偏差无法被"校正"到真实分布——我们并不知道真实分布长什么样，
            那正是缺失的信息。因此本作品不做"去偏"估算，
            而是把偏差本身作为可视化的对象：
            <b>让观众看见"看见"这件事是有形状的</b>。
          </p>
        </article>
      </div>

      <div class="method__foot">
        <p class="dim">
          数据：NASA Exoplanet Archive（NASA / IPAC）。该档案库由 NASA 公开提供，
          无访问密钥要求。本作品为学术与教育用途的可视化再呈现。
        </p>
      </div>
    </div>
  `}const zt=520,kt=520;function ce(t){t.innerHTML=`
    <div class="miniFig">
      <header class="miniFig__head">
        <p class="eyebrow">观测窗口雷达</p>
        <h3 class="miniFig__title">四种方法，四个错开的窗口</h3>
        <p class="miniFig__note dim">中位数归一化到 0—1。窗口越不重叠，说明越难互相替代。</p>
      </header>
      <svg class="miniFig__svg" viewBox="0 0 ${zt} ${kt}" role="img"
           aria-label="四种发现方法的观测窗口中位数雷达图"></svg>
    </div>
  `;const e=t.querySelector(".miniFig__svg"),d=zt/2,p=kt/2+14,n=165,h=(()=>{const s=new Map;for(const b of H.data.planets)!b.t||b.t<=0||(s.has(b.m)||s.set(b.m,[]),s.get(b.m).push(b.t));const o={};for(const[b,m]of s)m.sort((g,L)=>g-L),o[b]=m[Math.floor(m.length/2)];return o})(),f=[{key:"radius",label:"半径",get:s=>s.radius.med,lo:.5,hi:20},{key:"period",label:"周期",get:s=>s.period.med,lo:1,hi:1e5},{key:"dist",label:"距离",get:s=>s.dist.med,lo:1,hi:2e4},{key:"n",label:"样本量",get:s=>s.n,lo:1,hi:6e3},{key:"eqt",label:"平衡温度",get:s=>h[s.key],lo:100,hi:3e3}],l=(s,o,b,m)=>{if(!s||s<=0)return 0;const g=Math.log10(o),L=Math.log10(b);return Math.max(0,Math.min(1,(Math.log10(s)-g)/(L-g)))},u=s=>s/f.length*Math.PI*2-Math.PI/2,i=(s,o)=>[d+Math.cos(u(s))*n*o,p+Math.sin(u(s))*n*o],_=y("g",{},e);[.25,.5,.75,1].forEach(s=>{let o="";f.forEach((b,m)=>{const[g,L]=i(m,s);o+=`${m===0?"M":"L"}${g.toFixed(1)},${L.toFixed(1)}`}),o+="Z",y("path",{d:o,fill:"none",stroke:"var(--line)","stroke-width":.7},_)}),f.forEach((s,o)=>{const[b,m]=i(o,1);y("line",{x1:d,y1:p,x2:b,y2:m,stroke:"var(--line)","stroke-width":.5},_);const[g,L]=i(o,1.13);W(_,s.label,{x:g,y:L,"text-anchor":"middle","dominant-baseline":"central",class:"radarAxis"})});const M=y("g",{},e);function S(){M.innerHTML="";const s=H.data.methods.filter(b=>b.n>=6).slice(0,4);s.forEach(b=>{const m=f.map(N=>l(N.get(b),N.lo,N.hi));let g="";m.forEach((N,v)=>{const[k,q]=i(v,Math.max(N,.04));g+=`${v===0?"M":"L"}${k.toFixed(1)},${q.toFixed(1)}`}),g+="Z";const L=a.methods.size===0||a.methods.has(b.key);y("path",{d:g,fill:Y(b.key),"fill-opacity":L?.16:.04,stroke:Y(b.key),"stroke-width":L?1.8:.8,"stroke-opacity":L?.95:.3,class:"radarShape",style:"transition: all 400ms cubic-bezier(.22,.61,.36,1)"},M),m.forEach((N,v)=>{const[k,q]=i(v,Math.max(N,.04));y("circle",{cx:k,cy:q,r:L?3:1.8,fill:Y(b.key),"fill-opacity":L?1:.3},M)})});const o=y("g",{},M);s.forEach((b,m)=>{const g=kt-26,L=20+m*118;y("rect",{x:L,y:g-7,width:9,height:9,fill:Y(b.key),"fill-opacity":.85},o),W(o,U(b.key),{x:L+14,y:g,class:"lgText"})})}S(),rt("filters",S)}const Dt=1060,St=340,J={t:30,r:40,b:50,l:84};function de(t){t.innerHTML=`
    <div class="miniFig miniFig--wide">
      <header class="miniFig__head">
        <p class="eyebrow">距离 × 年份</p>
        <h3 class="miniFig__title">我们能看多远</h3>
        <p class="miniFig__note dim">
          纵轴是距地距离（对数）。微引力透镜把视野推到数万光年，
          而凌星法至今仍在千光年量级——同一门学科，两种"远方"。
        </p>
      </header>
      <svg class="miniFig__svg" viewBox="0 0 ${Dt} ${St}" role="img"
           aria-label="系外行星距地距离随发现年份的分布"></svg>
    </div>
  `;const e=t.querySelector(".miniFig__svg"),d=Dt-J.l-J.r,p=St-J.t-J.b,n=H.data,h=n.timeline,f=h[0].y,l=h[h.length-1].y,u=n.planets.map(m=>m.d).filter(m=>m&&m>0),i=Math.max(...u),_=1,M=m=>J.l+(m-f)/(l-f)*d,S=Ft(_,i,J.t+p,J.t),s=y("g",{},e),o=y("g",{},e);[1,10,100,1e3,1e4].forEach(m=>{if(m>i)return;const g=S(m);y("line",{x1:J.l,y1:g,x2:J.l+d,y2:g,stroke:"var(--line)","stroke-width":.5},s),W(s,nt(m),{x:J.l-10,y:g,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})});for(let m=f;m<=l;m++){if((m-f)%4!==0&&m!==l)continue;const g=M(m);y("line",{x1:g,y1:J.t,x2:g,y2:J.t+p,stroke:"var(--line)","stroke-width":.4},s),W(s,String(m),{x:g,y:J.t+p+18,"text-anchor":"middle",class:"axLabel"})}W(s,"发现年份",{x:J.l+d/2,y:St-8,"text-anchor":"middle",class:"axTitle"}),W(s,"距地距离",{x:18,y:J.t+p/2,"text-anchor":"middle",class:"axTitle",transform:`rotate(-90 18 ${J.t+p/2})`});const b=Yt(()=>{o.innerHTML="";const m=_t(),g=new Map;for(const L of m)!L.d||!L.y||(g.has(L.m)||g.set(L.m,[]),g.get(L.m).push(L));for(const[L,N]of g){const v=y("g",{"data-m":L},o);for(const k of N)y("circle",{cx:M(k.y).toFixed(1),cy:S(k.d).toFixed(1),r:1.8,fill:Y(L),"fill-opacity":.55,class:"pt pt--in","data-name":k.n},v)}});e.addEventListener("pointermove",m=>{const g=m.target;if(!g.classList||!g.classList.contains("pt--in")){st();return}const L=n.planets.find(N=>N.n===g.dataset.name);L&&ut(`<b>${L.n}</b><br>${U(L.m)} · ${L.y}<br>${nt(L.d)}`,m.clientX,m.clientY)}),e.addEventListener("pointerleave",()=>st()),b(),rt("filters",b)}const It=520,Et=340,it={t:26,r:26,b:56,l:60};function he(t){const e=H.data.planets,d=new Map,p=new Set;for(const s of e){if(p.has(s.h))continue;p.add(s.h);const o=s.sp||1,b=o>=8?"8+":String(o);d.set(b,(d.get(b)||0)+1)}const n=["1","2","3","4","5","6","7","8+"].filter(s=>d.has(s)),h=Math.max(...n.map(s=>d.get(s)));t.innerHTML=`
    <div class="miniFig">
      <header class="miniFig__head">
        <p class="eyebrow">系统规模</p>
        <h3 class="miniFig__title">大部分恒星只被"看到"一颗行星</h3>
        <p class="miniFig__note dim">
          横轴是该系统已确认的行星数。单行星系统占绝大多数——
          但这更可能是"还没看够"，而非"真的只有一颗"。
        </p>
      </header>
      <svg class="miniFig__svg" viewBox="0 0 ${It} ${Et}" role="img"
           aria-label="宿主恒星的行星数量分布柱状图"></svg>
    </div>
  `;const f=t.querySelector(".miniFig__svg"),l=It-it.l-it.r,u=Et-it.t-it.b,i=y("g",{},f),_=y("g",{},f),M=l/n.length,S=s=>it.t+u-s/h*u;for(let s=0;s<=4;s++){const o=Math.round(h/4*s),b=S(o);y("line",{x1:it.l,y1:b,x2:it.l+l,y2:b,stroke:"var(--line)","stroke-width":.5},i),W(i,z(o),{x:it.l-8,y:b,"text-anchor":"end","dominant-baseline":"central",class:"axLabel"})}n.forEach((s,o)=>{const b=d.get(s),m=it.l+o*M+M*.18,g=M*.64,L=S(b),N=it.t+u-L;y("rect",{x:m.toFixed(1),y:L.toFixed(1),width:g.toFixed(1),height:Math.max(N,1).toFixed(1),fill:s==="1"?"var(--cinnabar)":"var(--accent)","fill-opacity":.72,class:"barSeg sysBar","data-k":s,"data-v":b},_),W(_,z(b),{x:m+g/2,y:L-6,"text-anchor":"middle",class:"axLabel"}),W(i,s==="8+"?"8+":s,{x:m+g/2,y:it.t+u+18,"text-anchor":"middle",class:"axLabel"})}),W(i,"该系统已确认行星数",{x:it.l+l/2,y:Et-8,"text-anchor":"middle",class:"axTitle"}),f.addEventListener("pointermove",s=>{const o=s.target;if(!o.classList||!o.classList.contains("sysBar")){st();return}const b=o.dataset.k,m=Number(o.dataset.v),g=[...d.values()].reduce((L,N)=>L+N,0);ut(`<b>${b==="8+"?"8 颗以上":b+" 颗行星"}</b><br>
      ${z(m)} 个系统（${(m/g*100).toFixed(1)}%）`,s.clientX,s.clientY)}),f.addEventListener("pointerleave",()=>st())}const vt=document.getElementById("app");function pe(){vt.innerHTML=`
    <a class="skip" href="#main">跳到主要内容</a>

    <header class="topbar" role="banner">
      <div class="brand">
        <span class="brand__mark" aria-hidden="true"></span>
        <div>
          <h1 class="brand__title">我们看见的宇宙</h1>
          <p class="brand__sub mono">WHAT WE SEE · 6451 EXOPLANETS</p>
        </div>
      </div>
      <nav class="nav" aria-label="章节导航">
        <a href="#plane">分布</a>
        <a href="#methods">方法</a>
        <a href="#timeline">发现史</a>
        <a href="#radius">半径谷</a>
        <a href="#habitable">宜居带</a>
        <a href="#deep">切面</a>
        <a href="#method">数据</a>
      </nav>
      <div class="topbar__right">
        <span class="live mono" id="liveCount"></span>
      </div>
    </header>

    <!-- 全局筛选状态栏：所有视图共享同一筛选，这里显示"现在看到的是哪一批" -->
    <div class="filterbar" id="filterbar" role="status" aria-live="polite">
      <div class="filterbar__inner">
        <span class="fb__label mono">当前筛选</span>
        <span class="fb__count mono" id="fbCount"></span>
        <div class="fb__chips" id="fbChips"></div>
        <button class="fb__reset" id="fbReset" type="button">重置</button>
      </div>
    </div>

    <main id="main">
      <section id="hero" class="sec sec--hero"></section>

      <section id="plane" class="sec">
        <header class="sec__head">
          <p class="eyebrow">01 / 周期—半径平面</p>
          <h2 class="sec__title">每一颗点，都是一次被记录的光</h2>
          <p class="sec__lead">
            横轴是公转周期，纵轴是行星半径，颜色是发现方法。
            <b>如果我们的探测没有偏差，这些点应该均匀铺开</b>；
            但它们挤成了几条明显的带状——那是仪器的窗口，不是宇宙的形状。
          </p>
          <p class="sec__ops">
            <span class="op"><b>拖拽</b>框选参数区间</span>
            <span class="op"><b>点击</b>数据点固定</span>
            <span class="op"><b>双击</b>清除筛选</span>
            <span class="op"><b>点方法按钮</b>可多选</span>
          </p>
        </header>
        <div class="planeWrap"></div>
      </section>

      <section id="methods" class="sec">
        <header class="sec__head">
          <p class="eyebrow">02 / 四种眼睛</p>
          <h2 class="sec__title">不同的方法，看见不同的行星</h2>
          <p class="sec__lead">
            凌星法靠「行星遮挡恒星亮度」发现行星，适合<b>大而近</b>的；
            视向速度法靠「恒星被行星拉动」发现行星，适合<b>重而近</b>的；
            微引力透镜靠引力放大，能看见<b>又远又小</b>的；
            直接成像要挡住恒星强光，只能看见<b>又大又远</b>的。
          </p>
          <p class="sec__ops">
            <span class="op"><b>点击卡片</b>筛选该方法（可多选）</span>
          </p>
        </header>
        <div class="methodsWrap"></div>
      </section>

      <section id="timeline" class="sec">
        <header class="sec__head">
          <p class="eyebrow">03 / 三十四年</p>
          <h2 class="sec__title">探测方式的更替，改变了「宇宙的样子」</h2>
          <p class="sec__lead">
            1992 年发现的第一批系外行星，靠的是<b>脉冲星计时</b>。
            1995 年 51 Peg b 出现，视向速度法才证明类太阳恒星也有行星。
            2009 年开普勒升空，凌星法成为主导，于是「我们以为的典型行星」
            从<b>木星大小</b>变成了<b>海王星大小</b>。曲线的每一次跳跃，都是一台望远镜的开关。
          </p>
          <p class="sec__ops">
            <span class="op"><b>拖拽</b>选择年份区间</span>
            <span class="op"><b>播放</b>看行星逐颗出现</span>
            <span class="op"><b>切换到「占比」</b>看构成变化</span>
          </p>
        </header>
        <div class="timelineWrap"></div>
      </section>

      <section id="radius" class="sec">
        <header class="sec__head">
          <p class="eyebrow">04 / 半径谷</p>
          <h2 class="sec__title">一条不该存在的谷</h2>
          <p class="sec__lead">
            在 1.5—2.0 倍地球半径附近，行星数量出现明显凹陷。这个「半径谷」
            被称为 <b>Fulton 间隙</b>。它究竟是真的物理现象，还是观测精度的产物？
            本作品<b>不预设谷的位置</b>，而是让数据自己指出谷底，再把两种解释并列呈现。
          </p>
          <p class="sec__ops">
            <span class="op"><b>拖拽</b>刷选半径区间</span>
            <span class="op"><b>悬停柱子</b>看该档的方法构成</span>
          </p>
        </header>
        <div class="radiusWrap"></div>
      </section>

      <section id="habitable" class="sec">
        <header class="sec__head">
          <p class="eyebrow">05 / 宜居带</p>
          <h2 class="sec__title">五十二个候选，与它们的距离</h2>
          <p class="sec__lead">
            筛选条件：半径 ≤1.8 倍地球、平衡温度 180—310 K。
            这些是我们目前<b>最接近「另一个地球」</b>的候选。
            注意它们是怎么被发现的——这决定了这份名单本身有多可靠。
          </p>
          <p class="sec__ops">
            <span class="op"><b>悬停</b>看详情</span>
            <span class="op"><b>点击</b>固定</span>
            <span class="op"><b>拖拽</b>框选温度 × 距离</span>
          </p>
        </header>
        <div class="habitableWrap"></div>
      </section>

      <section id="deep" class="sec">
        <header class="sec__head">
          <p class="eyebrow">06 / 三个切面</p>
          <h2 class="sec__title">换三个角度，看见三件事</h2>
          <p class="sec__lead">
            同一个数据集，换一种切法，就暴露出不同的偏差：
            <b>四类方法的窗口几乎不重叠</b>、
            <b>我们能看的距离被方法锁死</b>、
            <b>绝大多数恒星只被确认了一颗行星</b>。
          </p>
        </header>
        <div class="deepWrap">
          <div class="deepRow">
            <div class="radarWrap"></div>
            <div class="sysWrap"></div>
          </div>
          <div class="distWrap"></div>
        </div>
      </section>

      <section id="method" class="sec">
        <header class="sec__head">
          <p class="eyebrow">07 / 数据与方法</p>
          <h2 class="sec__title">每个数字都可复核</h2>
        </header>
        <div class="methodWrap"></div>
      </section>
    </main>

    <footer class="foot">
      <div class="foot__inner">
        <p class="foot__line">我们看见的宇宙</p>
        <p class="foot__meta mono" id="footMeta"></p>
      </div>
    </footer>
  `;const t=[...vt.querySelectorAll(".nav a")],e=t.map(n=>document.querySelector(n.getAttribute("href"))),d=new IntersectionObserver(n=>{n.forEach(h=>{if(!h.isIntersecting)return;const f=e.indexOf(h.target);t.forEach((l,u)=>l.classList.toggle("is-on",u===f))})},{rootMargin:"-45% 0px -50% 0px"});e.forEach(n=>n&&d.observe(n));const p=new IntersectionObserver(n=>{n.forEach(h=>{h.isIntersecting&&(h.target.classList.add("is-in"),p.unobserve(h.target))})},{rootMargin:"0px 0px -12% 0px",threshold:.08});vt.querySelectorAll(".sec").forEach(n=>p.observe(n)),document.querySelector("#fbReset").addEventListener("click",()=>{dt({pinned:null,hovered:null})})}function Tt(){const t=Rt(),e=document.querySelector("#liveCount");e&&(e.innerHTML=`<i style="background:var(--accent)"></i>
      ${a.methods.size===1?[...a.methods].map(U)[0]+" · ":""}
      ${z(t.n)}`);const d=document.querySelector("#fbCount");if(d){d.innerHTML=`<b>${z(t.n)}</b> / ${z(t.total)}
      <em>${t.pct.toFixed(1)}%</em>`;const u=d.querySelector("b");u&&(u.classList.remove("numPulse"),u.offsetWidth,u.classList.add("numPulse"))}const p=document.querySelector("#fbChips");if(!p)return;const n=[];a.methods.size&&[...a.methods].forEach(u=>n.push(`<button class="fbChip" data-drop="method" data-m="${u}" style="--c:${Y(u)}">
        <i></i>${U(u)}<span class="x">×</span></button>`));const h=H.data.stats;(a.yearMin>h.years[0]||a.yearMax<h.years[1])&&n.push(`<button class="fbChip" data-drop="year">
      年份 ${a.yearMin}–${a.yearMax}<span class="x">×</span></button>`),a.radius&&n.push(`<button class="fbChip" data-drop="radius">
      半径 ${a.radius[0].toFixed(2)}–${a.radius[1].toFixed(2)} R⊕<span class="x">×</span></button>`),a.period&&n.push(`<button class="fbChip" data-drop="period">
      周期 ${ct(a.period[0])}–${ct(a.period[1])}<span class="x">×</span></button>`),a.distance&&n.push(`<button class="fbChip" data-drop="distance">
      距离 ${nt(a.distance[0])}–${nt(a.distance[1])}<span class="x">×</span></button>`),a.temp&&n.push(`<button class="fbChip" data-drop="temp">
      温度 ${a.temp[0].toFixed(0)}–${a.temp[1].toFixed(0)} K<span class="x">×</span></button>`),n.length||n.push(`<span class="fbChip fbChip--empty mono">未筛选 · 全部 ${z(h.total)} 颗</span>`),p.innerHTML=n.join(""),p.querySelectorAll(".fbChip[data-drop]").forEach(u=>{u.addEventListener("click",()=>{const i=u.dataset.drop;if(i==="method"){const _=new Set(a.methods);_.delete(u.dataset.m),Q({methods:_},{source:"chip"})}else i==="year"?Q({yearMin:h.years[0],yearMax:h.years[1]},{source:"chip"}):i==="radius"?Q({radius:null},{source:"chip"}):i==="period"?Q({period:null},{source:"chip"}):i==="distance"?Q({distance:null},{source:"chip"}):i==="temp"&&Q({temp:null},{source:"chip"})})});const f=document.querySelector("#filterbar");f&&f.classList.toggle("is-active",t.n!==t.total);const l=document.querySelector("#footMeta");l&&(l.textContent=`NASA Exoplanet Archive · pscomppars · ${h.total} 颗 · ${h.years[0]}–${h.years[1]}`)}async function ue(){vt.innerHTML=`<div class="boot">
    <div class="boot__ring"></div>
    <p class="boot__txt mono">正在读取 6451 颗行星…</p>
  </div>`;try{await Zt(),pe(),Qt(document.querySelector("#hero")),ae(document.querySelector(".planeWrap")),ne(document.querySelector(".methodsWrap")),ie(document.querySelector(".timelineWrap")),oe(document.querySelector(".radiusWrap")),re(document.querySelector(".habitableWrap")),ce(document.querySelector(".radarWrap")),de(document.querySelector(".distWrap")),he(document.querySelector(".sysWrap")),le(document.querySelector(".methodWrap")),rt("filters",Tt),rt("counts",Tt),Tt(),document.addEventListener("keydown",t=>{t.key==="Escape"&&dt({pinned:null,hovered:null})})}catch(t){vt.innerHTML=`<div class="boot boot--err"><p class="boot__txt">加载失败：${String(t.message||t)}</p></div>`,console.error(t)}}ue();
