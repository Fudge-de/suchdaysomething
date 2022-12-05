// variables for text
let txtWelcome, txtInst, txtResult

// buttons for games and RPS
let btn1, btn3, btn5, btnR, btnP, btnS

//Buttons for replay and EG
let btnRe, btnEG

//variable for computer choice
let compOpt

function setup() {
  createCanvas(400, 400);
  
  txtWelcome='Hi, welcome to the game'
  txtInst='Please select your game.'
  
  //Buttons for game selection
  btn1=createButton('Best of 1')
  btn1.position(50,250)
  btn1.mousePressed (showRPS)
  btn3=createButton('Best of 3')
  btn3.position(165,250)
  btn3.mousePressed (showRPS)
  btn5=createButton('Best of 5')
  btn5.position(280,250)
  btn5.mousePressed (showRPS)
  
  //Buttons for RPS
  btnR=createButton('Rock')
  btnR.position(50,250)
  btnR.hide()
  btnR.mousePressed (compareRock, showResult)
  
  btnP=createButton('Paper')
  btnP.position(180,250)
  btnP.hide()
  btnP.mousePressed (comparePaper, showResult)
  
  btnS=createButton('Scissors')
  btnS.position(300,250)
  btnS.hide()
  btnS.mousePressed (compareScissors, showResult)
  
  //Buttons for replay and end game
  btnRe=createButton('Replay')
  btnRe.position(80,250)
  btnRe.hide()
  btnRe.mousePressed (NewGame)
  
  btnEG=createButton('End Game')
  btnEG.position(230,250)
  btnEG.hide()
  
  
  //reset random number compOpt
}

function draw() {
  background(204,230,230)
  textSize(18)
  text(txtWelcome,100,100)
  text(txtInst,100,140)
  text(txtResult,150,200)
 }

function showRPS() {
  txtWelcome=''
  txtInst='Choose between the three:'
  txtResult= ''
  btn1.hide()
  btn3.hide()
  btn5.hide()
  btnR.show()
  btnP.show()
  btnS.show()
}

function compareRock(){
  {
    if(compOpt==1)
      {
       txtResult='Its a Draw!' 
      }
    else if(compOpt==2)
      {
       txtResult='Computer Won!' 
      }
    else
      {
       txtResult='You Won!' 
      }
  showResult()
  }
}

function comparePaper(){
  {
    if(compOpt==1)
      {
       txtResult='You Won' 
      }
    else if(compOpt==2)
      {
       txtResult='Its a Draw!' 
      }
    else
      {
       txtResult='Computer Won!' 
      }
  showResult()
  }
}

function compareScissors(){
  {
    if(compOpt==1)
      {
       txtResult='Computer Won!' 
      }
    else if(compOpt==2)
      {
       txtResult='You Won!' 
      }
    else
      {
       txtResult='Its a Draw!' 
      }
  showResult()
  }
}

function showResult()
{
 
  // hide rps
  btnR.hide()
  btnP.hide()
  btnS.hide()
  
  // text reset 
  txtWelcome=''
  txtInst=''
  
  // show btn replay and end g
  btnRe.show()
  btnEG.show()
  
  
}

function NewGame() {
  compOpt = round(random(0.5,3.5))
  showRPS()
  btnRe.hide()
  btnEG.hide()
}