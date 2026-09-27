import './style.css';

document.querySelector('#app').className = 'flex justify-center pt-16 font-sans';

document.querySelector('#app').innerHTML = `
  <div class="text-center">
    <h1 class="text-xl font-bold">カウンター</h1>
    <p id="count" class="text-5xl my-4">0</p>
    <div class="buttons">
      <button id="increase-btn" class="text-lg px-4 py-2 mx-1 rounded-md border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-200 hover:bg-indigo-700">＋</button>
      <button id="decrease-btn" class="text-lg px-4 py-2 mx-1 rounded-md border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-200 hover:bg-indigo-700">−</button>
      <button id="reset-btn" class="text-lg px-4 py-2 mx-1 rounded-md border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-200 hover:bg-indigo-700">リセット</button>
    </div>
  </div>
`;

const countEl = document.querySelector('#count');
const increaseBtn = document.querySelector('#increase-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');
let count = 0;

increaseBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});