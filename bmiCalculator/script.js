const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  let imcResult = (weight / (height * height)).toFixed(2);

  if (!isNaN(imcResult)) {
    const value = document.getElementById("value");

    value.classList.add("attention");

    let description = "";
    if (imcResult < 18.5) {
      description = "Underweight!";
    } else if (imcResult >= 18.5 && imcResult <= 25) {
      description = "Normal!";
      value.classList.remove("attention");
      value.classList.add("normal");
    } else if (imcResult > 25 && imcResult <= 30) {
      description = "Overweight!";
    } else if (imcResult > 30 && imcResult <= 35) {
      description = "Obese Class I!";
    } else if (imcResult > 35 && imcResult <= 40) {
      description = "Obese Class II!";
    } else {
      description = "Obese Class III!";
    }

    value.textContent = imcResult.replace(".", ",");
    document.getElementById("description").textContent = description;
  }
});

clearBtn.addEventListener("click", () => {
  value.textContent = "";
  description.textContent = "";
});
