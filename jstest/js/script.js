// Select elements
const message = document.getElementById("message");
const button = document.getElementById("changeBtn");

// Track current mode
let mode = 0;
let firstClick = true;


// Dark gradient modes
const modes = [
  {
    background: "linear-gradient(135deg,rgb(181, 34, 176),rgb(249, 163, 163),rgb(209, 183, 53))",
    text: "Sunset"
  },
  {
    background: "linear-gradient(135deg,rgb(12, 6, 22),rgb(30, 44, 83),rgb(20, 144, 198))",
    text: "Deep blue"
  },
  {
    background: "linear-gradient(135deg,rgb(26, 3, 3),rgb(114, 13, 13),rgb(210, 46, 87))",
    text: "Crimson"
  },
  {
    background: "linear-gradient(135deg,rgb(6, 17, 8),rgb(28, 65, 30),rgb(148, 187, 97))",
    text: "Forest"
  },
  {
    background: "linear-gradient(135deg,rgb(9, 3, 10),rgb(55, 37, 61),rgb(174, 55, 222))",
    text: "Magic"
  }
];

function changeMode() {
    if (firstClick) {
      document.body.style.color = "#f2f2f2";
      firstClick = false;
    }
  
    mode = (mode + 1) % modes.length;
    document.body.style.background = modes[mode].background;
    message.textContent = modes[mode].text;
  }
  
  button.addEventListener("click", changeMode)