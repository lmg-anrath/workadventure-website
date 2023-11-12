import{n as h,r as p,s as w,o as _,c as g,a as i,p as L,e as S,_ as y,q as T,b}from"./entry.d0ed7c91.js";const x=c=>(L("data-v-663b246f"),c=c(),S(),c),M=x(()=>i("div",{class:"scroll-text-spacer"},null,-1)),I=[M],f=35,z=h({__name:"ScrollingAnim",setup(c){const r=p(),e=p(),a=p(),d=function(n){return n<0||n>35?"/macbook2/0000.png":`/macbook2/${n.toString().padStart(4,"0")}.png`},v=()=>{for(let n=1;n<f;n++){const t=new Image;t.src=d(n)}},s=()=>{const n=window.scrollY,t=r.value.offsetParent.offsetTop;console.log(t);const l=r.value.offsetHeight,o=e.value.offsetHeight,u=a.value.offsetTop;a.value.offsetHeight,n+window.innerHeight/2>=t+o/2&&n<l+t-window.innerHeight/2-o/2?(e.value.style.position="fixed",e.value.style.top="50%",e.value.style.transform="translate(-50%, -50%)",a.value.style.opacity="0"):n>t+l-window.innerHeight/2-o/2?(e.value.style.position="absolute",e.value.style.top=`${l-o}px`,e.value.style.transform="translateX(-50%)",a.value.style.opacity="1"):(e.value.style.position="absolute",e.value.style.top="0",e.value.style.transform=""),n+window.innerHeight/2>=u+t?(a.value.style.marginLeft="10vw",a.value.style.marginRight="10vw"):(a.value.style.marginLeft="20vw",a.value.style.marginRight="0vw")};return w(()=>{const n=e.value.getContext("2d");e.value.width=1920,e.value.height=1080;const t=new Image;t.src=d(1),t.onload=function(){n.clearRect(0,0,e.value.width,e.value.height),n.drawImage(t,0,0)};const l=function(o){t.src=d(o),n.clearRect(0,0,e.value.width,e.value.height),n.drawImage(t,0,0)};window.addEventListener("scroll",()=>{var o=window.scrollY-r.value.offsetParent.offsetTop/2;o<0&&(o=0);const u=r.value.offsetHeight-e.value.offsetHeight,m=o/u,k=Math.min(f-1,Math.ceil(m*f));requestAnimationFrame(()=>l(k+1)),s()}),v()}),(n,t)=>(_(),g("div",{ref_key:"container",ref:r,class:"scroll-container"},[i("canvas",{ref_key:"canvas",ref:e,class:"scroll-canvas"},null,512),i("div",{ref_key:"content",ref:a,class:"scroll-content"},I,512)],512))}});const A=y(z,[["__scopeId","data-v-663b246f"]]),E=""+new URL("workadventure-lmg-ingame.0d92e535.png",import.meta.url).href,R=""+new URL("workadventure-lmg-video-call.6d8266a3.png",import.meta.url).href,H=""+new URL("workadventure-lmg-terminal.e9206330.png",import.meta.url).href,G=""+new URL("workadventure-lmg-hilfe.f4ab6250.png",import.meta.url).href,U=T('<div class="info-element primary-info-element" data-v-b711c078><div class="scroll-line" data-v-b711c078><div class="scroll-line-origin" data-v-b711c078></div><div class="scroll-line-element" data-v-b711c078></div></div><div class="element-wrapper" data-v-b711c078><h1 data-v-b711c078>Mit WorkAdventure am LMG können Sie das Gymnasium hautnah digital erleben.</h1><p data-v-b711c078> Entdecken Sie das Lise-Meitner-Gymnasium auf völlig neue Weise. Wir bieten Schülerinnen und Schülern die Möglichkeit, das Schulgebäude auf eine einzigartige Weise zu erkunden, die an ein Computerspiel erinnert. In einer faszinierenden zweidimensionalen Umgebung können Teilnehmerinnen und Teilnehmer das gesamte Schulgelände erkunden, Klassenräume und Fachräume besuchen sowie an DSGVO-konformen Videokonferenzen teilnehmen. </p></div></div><div class="info-element" data-v-b711c078><div class="scroll-line" data-v-b711c078><div class="scroll-line-element" data-v-b711c078></div></div><div class="element-wrapper" data-v-b711c078><img src="'+E+'" alt="Bild von einem Meeting im Forum" data-v-b711c078><p data-v-b711c078> Unsere AG präsentiert eine <span data-v-b711c078>akribische Nachbildung</span> des Lise-Meitner-Gymnasiums in einer <span data-v-b711c078>detailgetreuen zweidimensionalen Umgebung</span>. Hier haben Schülerinnen und Schüler nicht nur die Möglichkeit, die Räume zu erkunden, sondern sie sind auch mit <span data-v-b711c078>verschiedenen Inhalten</span> wie Videos, Links und Präsentationen gefüllt. So können sie nicht nur den Raum erkunden, sondern auch <span data-v-b711c078>zusätzliche Informationen und Materialien</span> zu verschiedenen Themen abrufen. </p></div></div><div class="info-element" data-v-b711c078><div class="scroll-line" data-v-b711c078><div class="scroll-line-element" data-v-b711c078></div></div><div class="element-wrapper" data-v-b711c078><img src="'+R+'" alt="Video Anrufe in WorkAdventure" data-v-b711c078><p data-v-b711c078> Ein weiteres herausragendes Merkmal unserer AG ist die Möglichkeit, an <span data-v-b711c078>DSGVO-konformen Videokonferenzen</span> teilzunehmen. In einer Zeit, in der digitales Lernen und virtuelle Kommunikation immer wichtiger werden, bietet &quot;WorkAdventure LMG&quot; die Chance, sich auch <span data-v-b711c078>virtuell zu treffen</span> und miteinander zu interagieren. </p></div></div><div class="info-element" data-v-b711c078><div class="scroll-line" data-v-b711c078><div class="scroll-line-element" data-v-b711c078></div></div><div class="element-wrapper" data-v-b711c078><img src="'+H+'" alt="Minispiel in Form eines Terminals" data-v-b711c078><p data-v-b711c078> Möchten Sie sich lieber spielerisch vergnügen? Keine Sorge, denn WorkAdventure LMG bietet eine <span data-v-b711c078>Auswahl an Minispielen</span>, die Schülerinnen und Schülern die Möglichkeit bieten, auf <span data-v-b711c078>kreative Weise</span> mit unserer Schule vertraut zu werden. </p></div></div><div class="info-element" data-v-b711c078><div class="scroll-line" data-v-b711c078><div class="scroll-line-element" data-v-b711c078></div></div><div class="element-wrapper" data-v-b711c078><img src="'+G+'" alt="Hilfe gesucht" data-v-b711c078><p data-v-b711c078> Bist du bereits <span data-v-b711c078>Schüler am LMG</span> und gehörst der 10. Klasse oder der Oberstufe an? Dann hast du die Möglichkeit, ein <span data-v-b711c078>Teil dieses aufregenden Projekts</span> zu werden. Du kannst dich ganz unkompliziert bei <span data-v-b711c078>Herrn Tanriverdi</span> melden oder ihm eine Nachricht über Teams senden. Wir schätzen jede Form der Mitarbeit sehr. <span data-v-b711c078>Vielen Dank!</span></p></div></div>',5),$=[U],C=h({__name:"InfoDisplay",setup(c){const r=p();let e;const a=[],d=()=>{a.forEach((s,n)=>{const t=e[s].querySelector(".scroll-line");t&&t.style.transform!="scaleY(1)"&&(t.style.transform="scaleY(1)",a.shift()),setTimeout(()=>{},2e3)})},v=()=>{e.forEach((s,n)=>{var u;const t=s.offsetTop,l=(u=r.value)==null?void 0:u.offsetTop,o=document.documentElement.scrollTop;if(!l)return console.error("infoListTop is undefined");if(o+window.innerHeight*(3/4)>=t+l)s.style.opacity="1",s.querySelector(".scroll-line")&&(a.push(n),d());else{s.style.opacity="0";const m=s.querySelector(".scroll-line");m&&(m.style.transform="scaleY(0)")}})};return w(()=>{e=document.querySelectorAll(".info-element"),window.addEventListener("scroll",v)}),(s,n)=>(_(),g("div",{ref_key:"infoList",ref:r,class:"info-list"},$,512))}});const V=y(C,[["__scopeId","data-v-b711c078"]]),W=""+new URL("out.c931acc9.mp4",import.meta.url).href,F=""+new URL("workadventure-lmg-animated-logo.dbd1c0bb.png",import.meta.url).href,q=""+new URL("edge-icon.92a7b566.svg",import.meta.url).href,B=""+new URL("safari-icon.4f6a4798.svg",import.meta.url).href,D=""+new URL("chrome-icon.e8fa2464.svg",import.meta.url).href;const N={class:"main-content"},Y=i("div",{class:"index-play-bg"},[i("video",{src:W,autoplay:"",loop:""})],-1),K=i("img",{src:F,alt:"WorkAdventureLMG Logo"},null,-1),P=i("h2",null,"Lorem ipsum dolor sit amet.",-1),O=i("div",{class:"index-play-platforms"},[i("img",{src:q,alt:"Edge Browser"}),i("img",{src:B,alt:"Safari Browser"}),i("img",{src:D,alt:"Chrome Browser"})],-1),j={class:"index-content"},J=h({__name:"index",setup(c){function r(){window.location.href="https://play.workadventure-lmg.de/"}function e(){window.location.href="/map"}return(a,d)=>{const v=A,s=V;return _(),g("div",N,[i("div",{class:"index-play"},[i("div",{class:"index-play-section"},[Y,i("div",{class:"index-play-content"},[i("div",{class:"index-play-wrapper"},[K,P,i("button",{onClick:r},"JETZT SPIELEN"),i("button",{onClick:e},"KARTE ÖFFNEN"),O])])])]),i("div",j,[b(v),b(s)])])}}});export{J as default};
