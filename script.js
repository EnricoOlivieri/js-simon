

countdown = 30;
arrComp = [];
arrUser = [];
resultEl = document.getElementById('result');

for (var i = 0; i < 5; i++) {
  arrComp.push(Math.floor(Math.random() * 10));
}

setTimeout(function () {
  for (var i = 0; i < 5; i++) {
    arrUser.push(prompt('Inserisci i numeri in ordine'));
  }
}, 30000);

var timer = setInterval(function () {
  resultEl.innerHTML = --countdown;
}, 1000);
