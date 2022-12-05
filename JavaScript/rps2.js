function setup() {
    createCanvas(400, 400);
    
    UserA=createInput('')
    UserA.position(25,50)
    
    UserB=createInput('')
    UserB.position(200,50)
    
    
  }
  
  function draw() 
  {
    background(220);
    
    text("Choose between 1.Rock, 2.Paper or 3.Scissors", 25,25)
    text("UserA",25,40)
    text("UserB",200,40)
    
    if(UserA.value()==1)
      {
        if(UserB.value()==2)
          {text ("User A Wins", 25, 90)}
        else if(UserB.value()==3)
          {text ("User B Wins", 25, 90)}
        else
          {text("It's Tie " , 25, 90 )}
      }
      
      
    else if(UserA.value()==2)
      {
        if(UserB.value()==3)
          {text ("User B Wins", 25, 90)}
        else if(UserB.value()==1)
          {text ("User A Wins", 25, 90)}
        else
          {text("It's Tie " , 25, 90 )}
      }
      
    else 
       {
        if(UserB.value()==1)
          {text ("User A Wins", 25, 90)}
        else if(UserB.value()==2)
          {text ("User B Wins", 25, 90)}
        else
          {text("It's Tie " , 25, 90 )}
       }
  }