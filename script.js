const openBtn = document.getElementById('openBtn');
const nextBtn = document.getElementById('nextBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const bgMusic = document.getElementById('bgMusic');
const typeTarget = document.getElementById('typeText');

const letterText = `Happy Monthsary chit sone ❤️
I know i have a lot of flaws and mistakes to fix but thank you for sticking with me. This may not be the best monthsary for the both of us but I promise we will grow together towards each other and I will mend all the trusts and bonds that i’ve broken last night.

For you the promises I give right now are looking likely to break but the most absolute thing i can ensure you is that i will never give up on you and will learn how to love you more till the time ends. I still couldn’t self-reflect my ego but I will be willing to learn how to change for you.

I will do anything for you but i will have apologize to you for all my shortcomings that I will do and I’ve done. I will love you more and more till my love exceeds yours ❤️.

I hope that we can fix all the problems and overcome all the hardships together while holding hands side by side and loving each other more and more. I love you chit sone ❤️ Love you more than i can show and more than you feel ❤️🫶 Arrr bwarrrr 😘😘😘`;

let typingStarted = false;
function showPage(page){
  [page1,page2,page3].forEach(p => p.classList.remove('active'));
  page.classList.add('active');
}
function typeLetter(){
  if (typingStarted) return;
  typingStarted = true;
  let i = 0;
  function step(){
    if (i < letterText.length){
      typeTarget.textContent += letterText.charAt(i);
      i++;
      setTimeout(step, 18);
    }
  }
  step();
}
openBtn.addEventListener('click', async () => {
  try { await bgMusic.play(); } catch(e) { console.log('Music could not start yet:', e); }
  showPage(page2);
  typeLetter();
});
nextBtn.addEventListener('click', () => showPage(page3));
