// Prevent browsers from reopening SCOREFREE at a previously saved scroll position.
(function(){
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  function top(){ window.scrollTo(0,0); }
  window.addEventListener('load',function(){ setTimeout(top,0); setTimeout(top,150); });
  window.addEventListener('pageshow',function(){ setTimeout(top,0); });
})();
