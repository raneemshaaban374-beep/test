window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

function addHabit() {
  var box = document.getElementById("habit");
  var list = document.getElementById("list");

  if (box.value == "") {
    alert("Please type a habit first.");
  } else {
    list.innerHTML += box.value + "<button onclick='checkIn(this)'>Check in</button>";
    box.value = "";
  }
}

function checkIn(button) {
  button.innerHTML = "Done today ✔";
}


var tips = [
  "Study in short rounds: 25 minutes of focus, then a 5 minute break.",
  "Write tomorrow's top 3 tasks before you go to sleep.",
  "Link a new habit to one you already do, like reading after dinner.",
  "Keep your phone in another room while you study.",
  "Drink a glass of water as soon as you wake up.",
  "Make the habit so small you cannot say no: one page, one push-up.",
  "Never miss twice. If you skip a day, restart the next day.",
  "Put your habit where you can see it, like a note on your desk.",
  "Reward yourself after you finish, even with a small treat.",
  "Go to bed at the same time every night, even on weekends."
];
var tipNumber = 0;

function newTip() {
  document.getElementById("tip").innerHTML = tips[tipNumber];
  tipNumber = tipNumber + 1;
  if (tipNumber == tips.length) {
    tipNumber = 0;
  }
}