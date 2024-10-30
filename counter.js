let count = 0;
let countEl = document.querySelector('.displayCount');
const btns = document.querySelectorAll('.btn');
countEl.textContent = count;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let currBtn = e.currentTarget.classList;
    if(currBtn.contains("decrease")) {count--;}
    else if (currBtn.contains("increase")) {count++;}
    else{count = 0;}
    if(count>0) countEl.style.color = "green";
    else if(count<0) countEl.style.color = "red";
    else if(count ==0) countEl.style.color = "black";countEl.textContent = count;
  });
})
