/* AX GANES V.2 prototype v2.2 · shared script for menu pages
   - scales the tablet frame
   - Back / Home inside the POC view returns to index.html */
(function(){
  const tab=document.getElementById('tab');
  /* Home header (same as index.html) */
  const title=document.title.split(' · ')[0];
  const ic=(d,s)=>`<svg aria-hidden="true" width="${s||18}" height="${s||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const GRID='<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>';
  const BELL='<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>';
  const hd=document.createElement('header');hd.className='hd';
  hd.innerHTML=`<a class="brand" href="index.html" aria-label="AX · GANES Home"><span class="logo" aria-hidden="true">g</span><span><b>AX · GANES</b><small>AI WORKSPACE</small></span></a>
   <nav class="nav"><span class="alerts" aria-disabled="true">${ic(BELL,20)}Alerts<span class="badge">1</span></span>
   <a class="pill" href="index.html?menus=1">${ic(GRID)}All menus</a>
   <button class="pill me" id="meB" type="button" aria-haspopup="menu" aria-expanded="false"><span class="av" aria-hidden="true">A</span>Andi${ic('<path d="M6 9l6 6 6-6"/>',16)}</button></nav>`;
  const cr=document.createElement('div');cr.className='crumb';
  cr.innerHTML=`<a href="index.html">${ic('<path d="M15 6l-6 6 6 6"/>',18)}Home</a><span>/</span><b>${title}</b>`;
  tab.prepend(cr);tab.prepend(hd);
  const meB=hd.querySelector('#meB');let dd=null;
  meB.onclick=e=>{e.stopPropagation();if(dd){dd.remove();dd=null;meB.setAttribute('aria-expanded','false');return}
    dd=document.createElement('div');dd.className='dd';dd.setAttribute('role','menu');
    dd.innerHTML=`<div class="who"><span class="av">A</span><span><b>Andi</b><small>Owner · Gelora Sport</small></span></div>
     <a class="di" href="profile.html">Profile & security</a><div class="dh">APP SETTINGS</div>
     <a class="di" href="index.html?set=home">Home & gestures</a><a class="di" href="billing.html">Billing & subscription</a>
     <a class="di" href="members.html">Manage members</a><a class="di" href="index.html?set=act">Team activity</a>
     <div class="dsep"></div><a class="di" href="index.html">Help</a><a class="di" href="login.html">Sign out</a>`;
    hd.querySelector('.nav').appendChild(dd);meB.setAttribute('aria-expanded','true')};
  addEventListener('click',()=>{if(dd){dd.remove();dd=null;meB.setAttribute('aria-expanded','false')}});
  function fit(){const s=Math.min((innerWidth-32)/1180,(innerHeight-32)/820,1.4);tab.style.transform='scale('+s+')'}
  addEventListener('resize',fit);fit();
  addEventListener('message',e=>{if(e.data&&e.data.ax==='home')location.href='index.html'});
  /* self-test probe: header order + relay to the POC view */
  addEventListener('message',e=>{const m=e.data;if(!m||m.ax!=='probe-page')return;const fr=tab.querySelector('iframe');
    const nav=[...document.querySelectorAll('.nav > *')].map(x=>x.textContent.trim());const id=m.id;
    const h=r=>{if(r.data&&r.data.ax==='probe-r'&&r.data.id===id){removeEventListener('message',h);e.source.postMessage(Object.assign({},r.data,{nav}),'*')}};
    addEventListener('message',h);fr.contentWindow.postMessage({ax:m.sub||'probe',id},'*')});
  /* v2.4: task from Home → do it here → back to Home as done */
  let task=null;try{task=JSON.parse(localStorage.getItem('ax24-task')||'null')}catch(x){}
  const page=document.body.dataset.page;
  if(task&&task.page===page){
    const fr=tab.querySelector('iframe');if(task.hash){fr.src='assets/poc/ganes-poc.html?embed=1#'+task.hash}
    const tb=document.createElement('div');tb.className='taskbar';tb.setAttribute('role','status');
    const CHK='<path d="M5 12.5l4.5 4.5L19 7.5"/>',TGT='<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>';
    const draw=done=>{tb.classList.toggle('ok',done);tb.innerHTML=done
      ?`<span class="ic">${ic(CHK,18)}</span><span class="x"><small>TASK DONE</small><b>${task.doneMsg}</b><span>Back to Home for the next task…</span></span><a class="pr" href="index.html">Back to Home</a>`
      :`<span class="ic">${ic(TGT,18)}</span><span class="x"><small>TASK FROM HOME · ${task.step}</small><b>${task.title}</b><span>${task.hint}</span></span><a class="gh" href="index.html">Do it later</a><button class="pr" type="button" id="tbDone">Mark as done</button>`;
      const b=tb.querySelector('#tbDone');if(b)b.onclick=finish};
    let fin=false;
    function finish(){if(fin)return;fin=true;try{localStorage.setItem('ax24-result',JSON.stringify({key:task.key,at:Date.now()}));localStorage.removeItem('ax24-task')}catch(x){}draw(true);setTimeout(()=>location.href='index.html',1600)}
    draw(false);tab.insertBefore(tb,fr);
    const re=new RegExp(task.expect,'i');
    addEventListener('message',e=>{const d=e.data;if(!d||d.ax!=='evt'||fin)return;if(re.test(d.e)||re.test(d.t))finish()});
  }
  try{localStorage.setItem('ax22-last',document.body.dataset.page||'')}catch(e){}
})();
