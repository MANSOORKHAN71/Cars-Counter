//function increment () {
//console.log("the button was clicked")
//}

let count = 0;
let countel = document.getElementById('add-el');
let saveEL = document.getElementById('save-el');
let totalEL = document.getElementById('total-el');

const increment = () => {
  count += 1;
  countel.innerText = count;
};

const save = () => {
  const previous = (saveEL.innerText || '')
    .split('-')
    .filter((count) => Number.isInteger(Number(count)));
  previous.push(count);
  saveEL.innerText = previous.join('-');
  totalEL.innerText = Number(totalEL.innerText || 0) + count;
  countel.textContent = 0;
  count = 0;
  console.log(count);
};

function reset() {
  document.getElementById('counter').reset();
}
countel.innerText = count;
