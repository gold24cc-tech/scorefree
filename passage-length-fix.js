/* Keep long reading/précis passages in the 500–600 word range. */
(function(){
  const MIN=500, MAX=600;

  function wordCount(text){
    return String(text||'').trim().split(/\s+/).filter(Boolean).length;
  }

  function trimToRange(text){
    text=String(text||'').trim();
    if(wordCount(text)<=MAX) return text;

    const sentences=text.split(/(?<=[.!?])\s+/);
    const kept=[];
    let total=0;

    for(const sentence of sentences){
      const n=wordCount(sentence);
      if(!n) continue;
      if(total+n>MAX) break;
      kept.push(sentence.trim());
      total+=n;
    }

    if(total>=MIN) return kept.join(' ');
    return text.split(/\s+/).slice(0,MAX).join(' ') + '…';
  }

  function normalizeData(){
    const ibps=window.SF && window.SF.ibps && window.SF.ibps.comprehension;
    if(Array.isArray(ibps)){
      ibps.forEach(q=>{
        if(q && typeof q[5]==='string') q[5]=trimToRange(q[5]);
      });
    }

    const sbi=window.SF && window.SF.sbi && window.SF.sbi.precis;
    if(Array.isArray(sbi)){
      sbi.forEach(q=>{
        if(q && typeof q[5]==='string') q[5]=trimToRange(q[5]);
      });
    }
  }

  /* data.js and longpassages.js load before this file, so normalize immediately. */
  normalizeData();
  document.addEventListener('DOMContentLoaded',normalizeData);
})();
