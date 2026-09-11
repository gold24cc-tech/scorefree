(function(){
  const originalTestView=window.testView;
  if(typeof originalTestView!=='function')return;

  window.testView=function(){
    originalTestView();

    const prompt=document.querySelector('.prompttext');
    const title=prompt?.querySelector('h2');
    if(!prompt||!title)return;

    const eyebrow=document.querySelector('.testhead .eyebrow');
    const section=(eyebrow?.textContent||'').toLowerCase();
    const topic=title.textContent.trim();

    const label=document.createElement('div');
    label.className='question-label';
    label.textContent='Question';
    title.parentNode.insertBefore(label,title);

    if(section.includes('essay')){
      title.textContent='Write an essay on the topic: '+topic;
    }else if(section.includes('comprehension')){
      title.textContent='Read the passage and answer the question below:';
    }else if(section.includes('email')){
      title.textContent='Write an email on the following task:';
    }else if(section.includes('situation')){
      title.textContent='Analyse the following situation and explain your response:';
    }else if(section.includes('report')){
      title.textContent='Write a report on the following topic:';
    }else if(section.includes('precis')){
      title.textContent='Write a précis of the passage below:';
    }else{
      title.textContent='Complete the following descriptive task:';
    }

    const guide=prompt.querySelector('.learn-strip > div:first-child b');
    if(guide)guide.textContent='💡 Hint';
  };
})();
