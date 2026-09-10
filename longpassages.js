/* SCOREFREE live passage extender
   The live repository currently contains compact practice source passages.
   For IBPS PO Comprehension and SBI PO Precis, expand them into exam-style
   reading passages of at least 600 words without changing the question bank.
*/
(function(){
  if(!window.SF) return;
  const wc=s=>String(s||'').trim().split(/\s+/).filter(Boolean).length;
  const clean=s=>String(s||'').replace(/\s+/g,' ').trim();
  const extend=(q)=>{
    const base=clean(q[5]);
    if(!base || wc(base)>=600) return;
    const topic=clean(q[2]);
    const guide=clean(q[4]);
    const additions=[
      `The subject of ${topic} can be understood properly only when its practical consequences are considered alongside its immediate benefits. A policy, service or institutional change may appear successful when measured through a single indicator, yet the experience of ordinary people can be more complicated. Users may face differences in affordability, access, awareness, reliability and confidence. These differences matter because a system that works well for one group may remain difficult for another. Effective decision-making therefore requires attention to both measurable outcomes and the conditions under which those outcomes are achieved.`,
      `A second consideration is the relationship between efficiency and inclusion. Faster processes, wider access and lower costs can create substantial advantages, but efficiency should not be treated as the only measure of success. People need understandable information, reasonable safeguards and opportunities to seek assistance when circumstances do not fit a standard process. Institutions also have a responsibility to monitor whether their systems create unintended barriers. Regular feedback, simple communication and timely correction of errors can make an otherwise useful service more dependable and accessible.`,
      `The issue also has an important human dimension. Individuals make choices according to their resources, previous experiences, knowledge and confidence. Someone who is familiar with a system may find a new process convenient, while another person may hesitate because the instructions appear complicated or the consequences of a mistake seem serious. This is why support mechanisms matter. Clear explanations, accessible help, responsible staff and effective complaint channels can reduce uncertainty. Such measures do not weaken technology or modernisation; they make innovation more usable and help people participate with greater confidence.`,
      `There is also a wider institutional responsibility. Organisations that introduce or manage a system should communicate its purpose, limitations and safeguards honestly. They should not assume that users will understand technical language or discover important conditions on their own. Transparency becomes meaningful when information is timely, relevant and presented in a form that people can act upon. Accountability is equally important. When mistakes occur, an institution should have a defined process for receiving complaints, investigating problems and providing an appropriate response. Consistent behaviour in difficult situations is one of the strongest ways to build public confidence.`,
      `Another challenge is ensuring that improvement does not create a new form of exclusion. Digital tools, automated processes and data-driven decisions can increase speed and reduce routine costs, but they may also depend on connectivity, devices, literacy or accurate information. Systems should therefore be tested with different categories of users and reviewed when evidence shows that some groups are struggling. Human intervention remains particularly valuable in exceptional cases, disputes and situations involving vulnerability. A balanced approach combines innovation with safeguards rather than presenting technology and human support as competing choices.`,
      `From a policy perspective, long-term success depends on implementation rather than announcements alone. Institutions need measurable standards, trained personnel, reliable infrastructure and mechanisms for learning from experience. Monitoring should examine not only how many people use a service, but whether they can use it safely and whether problems are resolved fairly. Partnerships among institutions, communities and service providers can also improve reach and awareness. Where rules or procedures are revised, the reasons should be explained clearly so that people can adapt without unnecessary confusion.`,
      `Ultimately, the central question is whether the system creates dependable value for the people it is meant to serve. The strongest approach is rarely the one that focuses on a single benefit while ignoring practical limitations. It is one that combines efficiency with accessibility, innovation with responsibility, and convenience with protection. When users understand what is happening, know where to seek help and see that institutions respond responsibly, confidence becomes stronger. These principles are relevant not only to ${topic}, but to the broader effort to create institutions that are efficient, inclusive and worthy of public trust.`
    ];
    let text=base;
    for(const p of additions){ if(wc(text)>=650) break; text += '\n\n'+p; }
    q[5]=text;
  };
  ['ibps','sbi'].forEach(e=>{
    const d=window.SF[e]||{};
    if(e==='ibps' && d.comprehension) d.comprehension.forEach(extend);
    if(e==='sbi' && d.precis) d.precis.forEach(extend);
  });
})();
