let lines = document.querySelectorAll(".line");
let description = document.querySelector("#description");
let start = document.querySelector("#start");
let submit = document.querySelector("#submit");
let hint = document.querySelector(".i");

let inputCount = 0;
let tryCount = 0;
let entry = [];

function checkWord(word, entry) {
  let inputs = lines[tryCount].querySelectorAll(".input");
  let success = 0;
  for (let i in entry) {
    if (entry[i] === word.at(i)) {
      word = word.replace(entry[i], " ");
      inputs.item(i).classList.add("correct");
      success++;
    } else if (word.indexOf(entry[i]) >= 0) {
      word = word.replace(entry[i], " ");
      inputs.item(i).classList.add("yellow");
    }
  }
  if (success === 5) {
    document.removeEventListener("keydown", game);
  }
}

const game = (event) => {
  console.log(inputCount, tryCount);
  let inputs = lines[tryCount].querySelectorAll(".input");
  if (event.key === "Backspace") {
    try {
      inputs.item(inputCount - 1).innerText = "";
      entry.pop();
      inputCount--;
    } catch (event) {
      alert(event);
    }
  } else if (event.key >= "a" && event.key <= "z" && inputCount <= 4) {
    inputs.item(inputCount).innerText = event.key;
    entry.push(event.key);
    inputCount++;
  } else if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  } else {
    event.preventDefault();
  }
};

//start and next button working
start.addEventListener("click", () => {
  if (tryCount || inputCount) {
    sessionStorage.setItem("reloading", "true");
    location.reload();
  }
  generate();
  document.addEventListener("keydown", game);
  start.innerText = "Next";
});

// submit button working
submit.addEventListener("click", async (event) => {
  let isWord = await validate(entry);
  if (isWord) {
    checkWord(word, entry);
    entry = [];
    tryCount++;
    inputCount = 0;
  }
});

// method that show hint
const toggleBlur = () => {
  const blurEl = document.getElementById("blur");
  blurEl.classList.toggle("active");

  const popupEl = document.getElementById("popup");
  popupEl.classList.toggle("active");
};

// onload method
window.onload = function () {
  let reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    generate();
    document.addEventListener("keydown", game);
    start.innerText = "Next";
  }
};
