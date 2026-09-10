const FEEDBACK_KEY='scorefree_site_rating';
function renderRating(){
  const box=document.getElementById('site-feedback');
  if(!box)return;
  const saved=Number(localStorage.getItem(FEEDBACK_KEY)||0);
  box.innerHTML=`<div class="feedback-title"><div><b>How's SCOREFREE?</b><span>Rate your experience — just one tap.</span></div><div class="stars" role="radiogroup" aria-label="Rate SCOREFREE from 1 to 5 stars">${[1,2,3,4,5].map(n=>`<button class="star ${n<=saved?'selected':''}" onclick="rateSite(${n})" aria-label="${n} star${n>1?'s':''}">★</button>`).join('')}</div>${saved?`<div class="feedback-thanks">Thanks for the feedback! ⭐</div>`:''}</div>`;
}
function rateSite(n){
  localStorage.setItem(FEEDBACK_KEY,String(n));
  renderRating();
}
window.addEventListener('DOMContentLoaded',renderRating);