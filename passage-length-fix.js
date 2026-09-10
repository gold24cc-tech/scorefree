/* Keep long practice passages in the exam-friendly 500–600 word range. */
(function(){
  const MIN=500, MAX=600;
  function words(text){ return String(text||'').trim().split(/\s+/).filter(Boolean); }
  function trimPassage(){
    document.querySelectorAll('.passage p').forEach(function(p){
      const w=words(p.textContent);
      if(w.length>MAX){
        p.textContent=w.slice(0,MAX).join(' ') + '…';
      }
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    trimPassage();
    const app=document.getElementById('app');
    if(app) new MutationObserver(trimPassage).observe(app,{childList:true,subtree:true});
  });
})();
