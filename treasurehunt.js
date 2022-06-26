let treasureWin = Math.floor(Math.random() * 9);
let treasureLose = Math.floor(Math.random() * 9);
let clickCounter = 0;
if (treasureWin === treasureLose) {
  treasureWin = Math.floor(Math.random() * 9);
}

const treasure = location => {
  if (location === treasureWin) {
    document.getElementById(location).innerHTML = "🔮";
    setTimeout(function () {
      alert("YOU WIN");
    }, 100);
  } else if (location === treasureLose) {
    document.getElementById(location).innerHTML = "🦈";
    setTimeout(function () {
      alert("GAME OVER");
    }, 100);
  } else {
    document.getElementById(location).innerHTML = "🐚";
  }
};
