(() => {
  "use strict";
  const D = [["https://cdn.imgchest.com/files/f8e539eb90c8.jpg","Darkra"],["https://cdn.imgchest.com/files/759f427b8c19.png","BoostedBonobo"],["https://cdn.imgchest.com/files/290ad56a97a8.jpg","DILLONYW"],["https://cdn.imgchest.com/files/f3317859a580.jpg","Ricota"],["https://cdn.imgchest.com/files/fedeabd185c0.jpg","Meylin_tyan"],["https://cdn.imgchest.com/files/6927a683d30a.jpg","MILTI.art"],["https://cdn.imgchest.com/files/07aeb8a25923.jpg","MrGobbo"],["https://cdn.imgchest.com/files/702772fc788c.jpg","BountyIllust"],["https://cdn.imgchest.com/files/88529af5a9f2.jpg","BountyIllust"],["https://cdn.imgchest.com/files/01378c11c4e6.jpg","Slowgenius"],["https://cdn.imgchest.com/files/3931b58bb74b.jpg","EaglexSilver"],["https://cdn.imgchest.com/files/c097c9b9d45e.jpg","byoonei"],["https://cdn.imgchest.com/files/7b1eb64d7cfb.jpg","shravana_art"],["https://cdn.imgchest.com/files/023789589eb9.jpg","ULMusfit"],["https://cdn.imgchest.com/files/4a13c6c01a7c.jpg","kishinco"],["https://cdn.imgchest.com/files/52e28448878c.jpg","iurenli"],["https://cdn.imgchest.com/files/30be3a565900.jpg","daisyb3ll"],["https://cdn.imgchest.com/files/d151b359134e.jpg","LidCarter"],["https://cdn.imgchest.com/files/06370b2e5295.jpg","Temp1712"],["https://cdn.imgchest.com/files/4f0e0538731c.jpg","Artista_Leal"],["https://cdn.imgchest.com/files/1f10fad743b4.jpg","BoostedBonobo"],["https://cdn.imgchest.com/files/48844b64b03b.jpg","Artista_Leal"],["https://cdn.imgchest.com/files/9c7965b7d9e9.jpg","MickCortesArt"],["https://cdn.imgchest.com/files/fcb073d0d3dc.jpg","Skr3m_Art"],["https://cdn.imgchest.com/files/acf7931bc14d.jpg","Mythical Slicker"],["https://cdn.imgchest.com/files/08eb5ac5454c.jpg","elwynnpc"],["https://cdn.imgchest.com/files/a900cf31a9e2.jpg","Juzie"],["https://cdn.imgchest.com/files/ec2814434bd4.jpg","MoonlenJack"],["https://cdn.imgchest.com/files/20dcb4d19a26.jpg","DARKSUN"],["https://cdn.imgchest.com/files/832c34808af2.jpg","ULMusfit"],["https://cdn.imgchest.com/files/2f224e9d6e7a.jpg","VitaliiaArt"],["https://cdn.imgchest.com/files/2f4ad2d6b446.jpg","Hinisell"],["https://cdn.imgchest.com/files/fb3b4b409015.jpg","Artista_Leal"],["https://cdn.imgchest.com/files/69ac1f69697f.jpg","bloomie00"],["https://cdn.imgchest.com/files/9b9d9e3e62b4.jpg","linyuusu"]];
  let initialized = false;
  let observer;

  function init() {
    if (initialized) return;
    const R = document.getElementById('gallery60');
    if (!R) return;
    initialized = true;
    if (observer) observer.disconnect();

    const style = document.createElement('style');
    style.textContent = `
#gallery60 { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:8px; align-items:stretch; }
#gallery60 .g60i { position:relative; overflow:hidden; border-radius:6px; aspect-ratio:4/5; background:#111; min-width:0; }
#gallery60 .g60i>img { width:100%; height:100%; object-fit:contain; display:block; cursor:zoom-in; filter:blur(6px); transform:scale(1.025); transition:filter .25s,opacity .2s,transform .25s; }
#gallery60 .g60i:hover>img,#gallery60 .g60i:focus-within>img { filter:blur(0); opacity:.95; transform:scale(1); }
#gallery60 .g60c { position:absolute; inset:auto 0 0; padding:18px 8px 8px; background:linear-gradient(transparent,#000c); color:#fff; text-align:center; font:13px Arial,sans-serif; opacity:0; transition:opacity .2s; pointer-events:none; overflow-wrap:anywhere; }
#gallery60 .g60i:hover .g60c,#gallery60 .g60i:focus-within .g60c { opacity:1; }
#gl60 { position:fixed; inset:0; background:#000e; display:none; place-items:center; z-index:99999; padding:20px; box-sizing:border-box; }
#gl60.on { display:grid; }
#gl60 img { max-width:92vw; max-height:84vh; object-fit:contain; display:block; margin:auto; }
#gl60 .g60lc { color:#fff; font:14px Arial,sans-serif; margin-top:10px; text-align:center; }
#gl60 .g60x { position:fixed; top:12px; right:18px; color:#fff; font:36px Arial,sans-serif; cursor:pointer; background:none; border:0; }
@media(max-width:480px) { #gallery60 { grid-template-columns:repeat(2,minmax(0,1fr)); } }
`;
    document.head.appendChild(style);

    // Create DOM elements directly so captions are never interpreted as HTML.
    const frag = document.createDocumentFragment();
    for (const [url, caption] of D) {
      const tile = document.createElement('div');
      tile.className = 'g60i';
      const img = document.createElement('img');
      img.src = url;
      img.alt = caption;
      img.loading = 'lazy';
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Enlarge image by ' + caption);
      const label = document.createElement('span');
      label.className = 'g60c';
      label.textContent = caption;
      tile.append(img, label);
      frag.appendChild(tile);
    }
    R.replaceChildren(frag);

    const L = document.createElement('div');
    L.id = 'gl60';
    const close = document.createElement('button');
    close.className = 'g60x';
    close.type = 'button';
    close.setAttribute('aria-label', 'Close image');
    close.textContent = '×';
    const wrap = document.createElement('div');
    const full = document.createElement('img');
    const caption = document.createElement('div');
    caption.className = 'g60lc';
    wrap.append(full, caption);
    L.append(close, wrap);
    document.body.appendChild(L);

    function open(img) {
      full.src = img.src;
      full.alt = img.alt;
      caption.textContent = img.alt;
      L.classList.add('on');
    }
    function dismiss() { L.classList.remove('on'); }

    R.addEventListener('click', e => {
      if (e.target.matches && e.target.matches('.g60i > img')) open(e.target);
    });
    R.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.g60i > img')) {
        e.preventDefault();
        open(e.target);
      }
    });
    L.addEventListener('click', e => { if (e.target === L || e.target === close) dismiss(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') dismiss(); });
  }
  init();
  document.addEventListener('DOMContentLoaded', init);
  if (!initialized && document.documentElement) {
    observer = new MutationObserver(init);
    observer.observe(document.documentElement, { childList:true, subtree:true });
  }
})();
