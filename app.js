(() => {
  const header=document.querySelector('.header');
  const setHeader=()=>header?.classList.toggle('scrolled',scrollY>35 || !document.body.classList.contains('home'));
  addEventListener('scroll',setHeader,{passive:true});setHeader();
  const menuButton=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('.mobile-nav');
  function menu(open){
    menuButton?.setAttribute('aria-expanded',String(open));if(mobileNav)mobileNav.hidden=!open;
    document.body.classList.toggle('menu-open',open);
    [document.querySelector('main'),document.querySelector('footer')].forEach(el=>{if(el)el.inert=open;});
    if(open)mobileNav.querySelector('a')?.focus();
  }
  menuButton?.addEventListener('click',()=>menu(menuButton.getAttribute('aria-expanded')!=='true'));
  mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu(false)));
  addEventListener('keydown',e=>{
    if(menuButton?.getAttribute('aria-expanded')!=='true')return;
    if(e.key==='Escape'){menu(false);menuButton.focus();}
    if(e.key==='Tab'){
      const last=mobileNav.querySelectorAll('a');const end=last[last.length-1];
      if(e.shiftKey && document.activeElement===menuButton){e.preventDefault();end.focus();}
      else if(!e.shiftKey && document.activeElement===end){e.preventDefault();menuButton.focus();}
    }
  });
  matchMedia('(min-width:851px)').addEventListener('change',e=>{if(e.matches)menu(false);});
  document.querySelectorAll('.hero-select').forEach(button=>button.addEventListener('click',()=>{
    const img=document.querySelector('.hero-image');
    img.removeAttribute('srcset');img.removeAttribute('sizes');img.src=button.dataset.image;img.alt=button.dataset.title;
    document.querySelector('.hero-project').textContent=button.dataset.title;document.querySelector('.hero-project').href=button.dataset.link;
    document.querySelector('.hero-meta').textContent=button.dataset.meta;
    document.querySelectorAll('.hero-select').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  }));
  const form=document.querySelector('.archive-tools');
  if(form){
    const input=form.querySelector('input[type=search]');const boxes=[...form.querySelectorAll('input[type=checkbox]')];const cards=[...document.querySelectorAll('.archive-grid .project-card')];
    const normal=s=>s.toLocaleLowerCase('nb').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    function filter(sync=true){
      const selected=boxes.filter(x=>x.checked).map(x=>x.value);const q=normal(input.value.trim());let shown=0;
      cards.forEach(card=>{const categories=card.dataset.categories.split(' ');const visible=(!q || normal(card.dataset.search).includes(q)) && (!selected.length || selected.some(x=>categories.includes(x)));card.hidden=!visible;if(visible)shown++;});
      document.querySelector('#project-count').textContent=`Viser ${shown} av ${cards.length} prosjekter`;
      document.querySelector('.no-results').hidden=shown!==0;
      if(sync){const url=new URL(location.href);selected.length?url.searchParams.set('kategori',selected.join(',')):url.searchParams.delete('kategori');q?url.searchParams.set('sok',input.value.trim()):url.searchParams.delete('sok');history.replaceState(null,'',url);}
    }
    const params=new URLSearchParams(location.search);const selected=(params.get('kategori')||'').split(',');boxes.forEach(x=>x.checked=selected.includes(x.value));input.value=params.get('sok')||'';filter(false);
    form.querySelector('details').open=matchMedia('(min-width:851px)').matches || boxes.some(x=>x.checked);
    form.addEventListener('submit',e=>{e.preventDefault();filter();});input.addEventListener('input',()=>filter());boxes.forEach(x=>x.addEventListener('change',()=>filter()));
    form.addEventListener('reset',()=>{setTimeout(()=>filter(),0);});document.querySelector('.clear-search')?.addEventListener('click',()=>{form.reset();input.focus();});
  }
  const dialog=document.querySelector('.lightbox'),links=[...document.querySelectorAll('[data-lightbox]')];let current=0,lastFocus=null;
  if(dialog && links.length){
    const img=dialog.querySelector('img'),error=dialog.querySelector('.lightbox-error');
    function show(i){current=(i+links.length)%links.length;const link=links[current];error.hidden=true;img.hidden=false;img.src=link.href;img.alt=link.querySelector('img')?.alt||link.dataset.caption;dialog.querySelector('.lightbox-caption').textContent=link.dataset.caption;dialog.querySelector('.lightbox-count').textContent=`${String(current+1).padStart(2,'0')} / ${String(links.length).padStart(2,'0')}`;}
    img.addEventListener('error',()=>{img.hidden=true;error.hidden=false;});
    links.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();lastFocus=a;show(i);dialog.showModal();document.body.style.overflow='hidden';}));
    dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());dialog.querySelector('.lightbox-prev').addEventListener('click',()=>show(current-1));dialog.querySelector('.lightbox-next').addEventListener('click',()=>show(current+1));
    dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1);}if(e.key==='ArrowRight'){e.preventDefault();show(current+1);}});
    dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus({preventScroll:true});});
    if(links.length===1){dialog.querySelector('.lightbox-prev').hidden=true;dialog.querySelector('.lightbox-next').hidden=true;}
  }
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches && 'IntersectionObserver' in window){
    const items=[...document.querySelectorAll('.home .section-heading,.home .intro-grid,.home .heritage-grid,.home .project-card,.office-note')];
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
    document.body.classList.add('motion-ready');items.forEach(el=>{el.classList.add('reveal');observer.observe(el);});
  }
})();
