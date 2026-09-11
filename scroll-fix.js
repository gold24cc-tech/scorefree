// Keep the important content visible when a test starts or a result is shown.
(function(){
  function top(){
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }

  const originalBeginTest=window.beginTest;
  if(typeof originalBeginTest==='function'){
    window.beginTest=function(){
      originalBeginTest();
      top();
    };
  }

  const originalSubmit=window.submit;
  if(typeof originalSubmit==='function'){
    window.submit=function(){
      originalSubmit();
      top();
    };
  }
})();
