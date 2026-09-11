(()=>{
const D=[["https://cdn.imgchest.com/files/20dcb4d19a26.jpg","DARKSUN"],["https://cdn.imgchest.com/files/ec2814434bd4.jpg","MoonlenJack"],["https://cdn.imgchest.com/files/a900cf31a9e2.jpg","Juzie"],["https://cdn.imgchest.com/files/08eb5ac5454c.jpg","elwynnpc"],["https://cdn.imgchest.com/files/acf7931bc14d.jpg","Mythical Slicker"],["https://cdn.imgchest.com/files/d0f395245a4f.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/2c316b08ee78.jpg","daisyb3ll"],["https://cdn.imgchest.com/files/f3649abcd649.jpg","daisyb3ll"],["https://cdn.imgchest.com/files/fcb073d0d3dc.jpg","Skr3m_Art"],["https://cdn.imgchest.com/files/9c7965b7d9e9.jpg","MickCortesArt"],["https://cdn.imgchest.com/files/48844b64b03b.jpg","Artista_Leal"],["https://cdn.imgchest.com/files/8b746f8c1f59.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/1f10fad743b4.jpg","BoostedBonobo"],["https://cdn.imgchest.com/files/4f0e0538731c.jpg","Artista_Leal"],["https://cdn.imgchest.com/files/c5059e364e82.jpg","Temp1712"],["https://cdn.imgchest.com/files/06370b2e5295.jpg","Temp1712"],["https://cdn.imgchest.com/files/d151b359134e.jpg","LidCarter"],["https://cdn.imgchest.com/files/30be3a565900.jpg","daisyb3ll"],["https://cdn.imgchest.com/files/52e28448878c.jpg","iurenli"],["https://cdn.imgchest.com/files/4a13c6c01a7c.jpg","kishinco"],["https://cdn.imgchest.com/files/023789589eb9.jpg","ULMusfit"],["https://cdn.imgchest.com/files/7b1eb64d7cfb.jpg","shravana_art"],["https://cdn.imgchest.com/files/c097c9b9d45e.jpg","byoonei"],["https://cdn.imgchest.com/files/cbf3c6b2c9dc.jpg","Temp1712"],["https://cdn.imgchest.com/files/3931b58bb74b.jpg","EaglexSilver"],["https://cdn.imgchest.com/files/a5a410ca9a67.jpg","daisyb3ll"],["https://cdn.imgchest.com/files/01378c11c4e6.jpg","Slowgenius"],["https://cdn.imgchest.com/files/88529af5a9f2.jpg","BountyIllust"],["https://cdn.imgchest.com/files/702772fc788c.jpg","BountyIllust"],["https://cdn.imgchest.com/files/07aeb8a25923.jpg","MrGobbo"],["https://cdn.imgchest.com/files/6927a683d30a.jpg","MILTI.art"],["https://cdn.imgchest.com/files/901dad84669d.jpg","MrTaxman"],["https://cdn.imgchest.com/files/d1ca76d04bd4.jpg","MrTaxman"],["https://cdn.imgchest.com/files/791f3a5577dc.jpg","MrTaxman"],["https://cdn.imgchest.com/files/8ea8228a2b49.jpg","MrTaxman"],["https://cdn.imgchest.com/files/4ce39046503d.jpg","MrTaxman"],["https://cdn.imgchest.com/files/1651009237a6.jpg","MrTaxman"],["https://cdn.imgchest.com/files/df57de263243.jpg","MrTaxman"],["https://cdn.imgchest.com/files/d76c8055dd16.jpg","MrTaxman"],["https://cdn.imgchest.com/files/0fe736854ff3.jpg","MrTaxman"],["https://cdn.imgchest.com/files/56824046f3f9.jpg","MrTaxman"],["https://cdn.imgchest.com/files/b517e6eed005.jpg","MrTaxman"],["https://cdn.imgchest.com/files/67e830cc4163.jpg","MrTaxman"],["https://cdn.imgchest.com/files/16525d286eb1.jpg","MrTaxman"],["https://cdn.imgchest.com/files/575d10e7f33b.jpg","MrTaxman"],["https://cdn.imgchest.com/files/40e84e6add3e.jpg","MrTaxman"],["https://cdn.imgchest.com/files/9e5e7bffc34d.jpg","MrTaxman"],["https://cdn.imgchest.com/files/fedeabd185c0.jpg","Meylin_tyan"],["https://cdn.imgchest.com/files/f3317859a580.jpg","Ricota"],["https://cdn.imgchest.com/files/c677b0b9d565.jpg","MrTaxman"],["https://cdn.imgchest.com/files/290ad56a97a8.jpg","DILLONYW"],["https://cdn.imgchest.com/files/30491cff348f.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/9a1722034a6c.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/d7ded28e4419.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/62aac1d0a1be.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/c2861db7fd7a.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/7e75818e5913.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/88a8cb1d2390.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/ea007b63851e.jpg","JusticarAlb"],["https://cdn.imgchest.com/files/759f427b8c19.png","BoostedBonobo"]];
let done=0;
function init(){
 if(done)return;
 const R=document.getElementById('gallery60');
 if(!R)return;
 done=1;
 const S=document.createElement('style');
 S.textContent=`
#gallery60{columns:6 150px;column-gap:8px}
#gallery60 .g60i{position:relative;overflow:hidden;border-radius:6px;margin:0 0 8px;break-inside:avoid;background:#111}
#gallery60 .g60i>img{width:100%;height:auto;display:block;cursor:zoom-in;filter:blur(6px);transform:scale(1.03);transition:filter .25s,opacity .2s,transform .25s}
#gallery60 .g60i:hover>img,#gallery60 .g60i:focus-within>img{filter:blur(0);opacity:.95;transform:scale(1)}
#gallery60 .g60c{position:absolute;inset:auto 0 0;padding:18px 8px 8px;background:linear-gradient(transparent,#000c);color:#fff;text-align:center;font:13px Arial;opacity:0;transition:.2s;pointer-events:none}
#gallery60 .g60i:hover .g60c,#gallery60 .g60i:focus-within .g60c{opacity:1}
#gl60{position:fixed;inset:0;background:#000e;display:none;place-items:center;z-index:99999;padding:20px}
#gl60.on{display:grid}
#gl60 img{max-width:92vw;max-height:84vh;object-fit:contain}
#gl60 .g60lc{color:#fff;font:14px Arial;margin-top:10px;text-align:center}
#gl60 .g60x{position:fixed;top:12px;right:18px;color:#fff;font:36px Arial;cursor:pointer}
@media(max-width:1200px){#gallery60{columns:4 150px}}
@media(max-width:768px){#gallery60{columns:2 150px}}
@media(max-width:480px){#gallery60{columns:1 150px}}
 `;
 document.head.appendChild(S);
 R.innerHTML=D.map(x=>`<div class="g60i"><img tabindex="0" loading="lazy" src="${x[0]}" alt="${x[1].replace(/"/g,'&quot;')}"><span class="g60c">${x[1]}</span></div>`).join('');
 const L=document.createElement('div');
 L.id='gl60';
 L.innerHTML='<b class="g60x">&times;</b><div><img><div class="g60lc"></div></div>';
 document.body.appendChild(L);
 const P=L.querySelector('img'),C=L.querySelector('.g60lc');
 R.addEventListener('click',e=>{if(e.target.tagName==='IMG'){P.src=e.target.src;P.alt=e.target.alt;C.textContent=e.target.alt;L.className='on'}});
 L.addEventListener('click',e=>{if(e.target===L||e.target.classList.contains('g60x'))L.className=''});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')L.className=''});
}
init();
document.addEventListener('DOMContentLoaded',init);
const O=new MutationObserver(()=>{init();if(done)O.disconnect()});
O.observe(document.documentElement,{childList:true,subtree:true});
setTimeout(()=>O.disconnect(),60000);
})();