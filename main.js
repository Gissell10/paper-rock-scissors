const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]")
const selections =[
  {
    name : "rock",
    emoji : "✊🏼",
    beat : "scissors"
  },
  {
    name: "paper",
    emoji: "🖐🏼",
    beat: "rock"
  },
  {
    name: "scissors",
    emoji: "✌🏼",
    beat: "paper"
  }
]


selectionButtons.forEach(selectionButton => {
 selectionButton.addEventListener("click", e =>{
   const selectionName = selectionButton.dataset.selection;
   const selection = selections.find(selection => selection.name === selectionName);
  makeSelection(selection);
 });
});

function makeSelection(selection){
  const computerSelection = randonSelection();
  const youWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youWinner);

  if(youWinner) incremetScore(yourScoreSpan)
  if(computerWinner) incremetScore(computerScoreSpan)
}

function incremetScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult (selection, winner){
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, oponenSelection){
  return selection.beat === oponenSelection.name;
}

function randonSelection(){
  const randomIndex = Math.floor(Math.random()* selections.length);
  return selections[randomIndex];
}