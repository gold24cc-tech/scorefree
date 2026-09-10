const FEEDBACK_KEY='scorefree_site_rating';
const feedbackStyle=document.createElement('style');
feedbackStyle.textContent='.site-feedback{margin-bottom:24px;padding:18px 20px;border:1px solid #e7dfeb;border-radius:18px;background:linear-gradient(135deg,#fff3cf,#f0eaff);box-shadow:0 8px 24px rgba(43,34,67,.05)}.feedback-title{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}.feedback-title>div:first-child{display:flex;flex-direction:column;gap:4px}.feedback-title span{font-size:.82rem;color:#6e6a7d}.stars{display:flex;gap:4px}.star{border:0;background:transparent;color:#c8bdca;font-size:2rem;line-height:1;padding:2px 4px;transition:.15s}.star:hover,.star.selected{color:#d9a441;transform:scale(1.08)}.feedback-thanks{width:100%;font-size:.82rem;font-weight:800;color:#6b4b00}';
document.head.appendChild(feedbackStyle);
function renderRating(){
  const box=document.getElementById('site-feedback');
  if(!box)return;
  const saved=Number(localStorage.getItem(FEEDBACK_KEY)||0);
  box.innerHTML=`<div class="feedback-title"><div><b>How's SCOREFREE?</b><span>Rate your experience — just one tap.</span></div><div class="stars" role="radiogroup" aria-label="Rate SCOREFREE from 1 to 5 stars">${[1,2,3,4,5].map(n=>`<button class="star ${n<=saved?'selected':''}" onclick="rateSite(${n})" aria-label="${n} star${n>1?'s':''}">★</button>`).join('')}</div>${saved?`<div class="feedback-thanks">Thanks for the feedback! ⭐</div>`:''}</div>`;
}
function rateSite(n){localStorage.setItem(FEEDBACK_KEY,String(n));renderRating()}
window.addEventListener('DOMContentLoaded',renderRating);