alert("Sorry For the delay, Shivani Mam and Suresh Sir");
  const buttonA = document.getElementById("buttonA");
  const buttonB = document.getElementById("buttonB");
  const buttonC = document.getElementById("buttonC");
  const buttonD = document.getElementById("buttonD");
  const buttonE = document.getElementById("buttonE");
  const buttonF = document.getElementById("buttonF");
  const buttonG = document.getElementById("buttonG");
  const buttonH = document.getElementById("buttonH");
  const buttonI = document.getElementById("buttonI");
  const buttonJ = document.getElementById("buttonJ");
  const buttonK = document.getElementById("buttonK");
  const buttonL = document.getElementById("buttonL");
  const buttonM = document.getElementById("buttonM");
  const buttonN = document.getElementById("buttonN");
  const buttonO = document.getElementById("buttonO");
  const buttonP = document.getElementById("buttonP");
  const buttonQ = document.getElementById("buttonQ");
  const buttonR = document.getElementById("buttonR");
  const buttonS = document.getElementById("buttonS");
  const buttonT = document.getElementById("buttonT");
  const buttonU = document.getElementById("buttonU");
  const buttonV = document.getElementById("buttonV");
  const buttonW = document.getElementById("buttonW");
  const buttonX = document.getElementById("buttonX");
  const buttonY = document.getElementById("buttonY");
  const buttonZ = document.getElementById("buttonZ");
 
const resultText = document.getElementById("result-text");


/*Code for choosing the word*/
fetch('hangwords.txt')
  .then(response => response.text())
  .then(data =>  {
  
    const words = data.trim().split('\n');

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex].toUpperCase();

  console.log(randomWord);

  const answer=randomWord.split("");

const wordElement = document.getElementById("word");
const remainingElement = document.getElementById("remaining");

count=0;  
let selectedLetters=[answer.length];


  buttonA.addEventListener("click", event => {
    event.preventDefault();
    buttonA.style.pointerEvents="none";
    const value = buttonA.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

  buttonB.addEventListener("click", event => {
    event.preventDefault();
    buttonB.style.pointerEvents="none";
    const value = buttonB.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

  buttonC.addEventListener("click", event => {
    event.preventDefault();
    buttonC.style.pointerEvents="none";
    const value = buttonC.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonD.addEventListener("click", event => {
    event.preventDefault();
    buttonD.style.pointerEvents="none";
    const value = buttonD.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonE.addEventListener("click", event => {
    event.preventDefault();
    buttonE.style.pointerEvents="none";
    const value = buttonE.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

  buttonF.addEventListener("click", event => {
    event.preventDefault();
    buttonF.style.pointerEvents="none";
    const value = buttonF.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonG.addEventListener("click", event => {
    event.preventDefault();
    buttonG.style.pointerEvents="none";
    const value = buttonG.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonH.addEventListener("click", event => {
    event.preventDefault();
    buttonH.style.pointerEvents="none";
    const value = buttonH.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

  buttonI.addEventListener("click", event => {
    event.preventDefault();
    buttonI.style.pointerEvents="none";
    const value = buttonI.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonJ.addEventListener("click", event => {
    event.preventDefault();
    buttonJ.style.pointerEvents="none";
    const value = buttonJ.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonK.addEventListener("click", event => {
    event.preventDefault();
    buttonK.style.pointerEvents="none";
    const value = buttonK.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonL.addEventListener("click", event => {
    event.preventDefault();
    buttonL.style.pointerEvents="none";
    const value = buttonL.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonM.addEventListener("click", event => {
    event.preventDefault();
    buttonM.style.pointerEvents="none";
    const value = buttonM.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonN.addEventListener("click", event => {
    event.preventDefault();
    buttonN.style.pointerEvents="none";
    const value = buttonN.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonO.addEventListener("click", event => {
    event.preventDefault();
    buttonO.style.pointerEvents="none";
    const value = buttonO.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonP.addEventListener("click", event => {
    event.preventDefault();
    buttonP.style.pointerEvents="none";
    const value = buttonP.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonQ.addEventListener("click", event => {
    event.preventDefault();
    buttonQ.style.pointerEvents="none";
    const value = buttonQ.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonR.addEventListener("click", event => {
    event.preventDefault();
    buttonR.style.pointerEvents="none";
    const value = buttonR.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonS.addEventListener("click", event => {
    event.preventDefault();
    buttonS.style.pointerEvents="none";
    const value = buttonS.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });

    buttonT.addEventListener("click", event => {
    event.preventDefault();
    buttonT.style.pointerEvents="none";
    const value = buttonT.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonU.addEventListener("click", event => {
    event.preventDefault();
    buttonU.style.pointerEvents="none";
    const value = buttonU.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonV.addEventListener("click", event => {
    event.preventDefault();
    buttonV.style.pointerEvents="none";
    const value = buttonV.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonW.addEventListener("click", event => {
    event.preventDefault();
    buttonW.style.pointerEvents="none";
    const value = buttonW.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonX.addEventListener("click", event => {
    event.preventDefault();
    buttonX.style.pointerEvents="none";
    const value = buttonX.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonY.addEventListener("click", event => {
    event.preventDefault();
    buttonY.style.pointerEvents="none";
    const value = buttonY.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });
    buttonZ.addEventListener("click", event => {
    event.preventDefault();
    buttonZ.style.pointerEvents="none";
    const value = buttonZ.value;
    console.log(`You clicked button ${value}`);
    checkLetter(answer,value);
  });


function checkLetter(answer, value) {
  if(answer.includes(value)) {
     for (let i = 0; i < answer.length; i++) {
      if(answer[i]==value){
        selectedLetters[i]=value;
        updateWord();
        console.log(selectedLetters);
      }
     }
     
    if (selectedLetters.join("") === answer.join("")) {
      window.location.href="Won.html";
      console.log("You win!");
    }
  }
    else{
    count++;
    drawMan(count);
    console.log("Wrong Move:", count);
    if (count === 6) {
        window.location.href="Loose.html";
      console.log("Game over!");
    }
  }
}




function updateWord() {
  let word = "";
  for (let i = 0; i < answer.length; i++) {
    if (selectedLetters.indexOf(answer[i]) !== -1) {
      word += answer[i];
    } else {
      word += "  _  ";
    }
  }
  wordElement.textContent = word;
}
updateWord();



const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

let { initialDrawing } = canvasCreator();
initialDrawing();


  })












/*
function checkLetter(answer, value) {
  if (answer.indexOf(value) !== -1) {
    selectedLetters.push(value);
    console.log(selectedLetters);
    updateWord();
    if (selectedLetters.join("") === answer) {
      console.log("You win!");
    }
  } 
  else {
    abc--;
    console.log("Remaining life:", abc);
    if (abc === 0) {
      console.log("Game over!");
    }
  }
}*/



/*
i=0;
if(buttonclicked == WordsPresent){
    print("that word");
    "No action will be done again from this button";
}

if (buttonclicked != WordsPresent) {
    i++;
    "No action will be done again from this button"
}

if (i==5) {
    print("YOU LOOSE")
}
*/

/*   --STEPS--
1.When a button is clicked, that value should be checked 
2.process of checking the letter is present or not in the Word
3. process for Only one time we can select a button. n
4. Wrong Guess countdown
*/

