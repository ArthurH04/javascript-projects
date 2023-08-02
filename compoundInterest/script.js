const submitBtn = document.getElementById("calculate");

function calculate() {
  const value = document.getElementById("value").value;
  const fee = document.getElementById("fee").value / 100;
  const time = document.getElementById("time").value;
  const result = document.getElementById("total");

  const total = value * (1 + fee) ** time;

  result.innerHTML = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

submitBtn.addEventListener("click", calculate);
