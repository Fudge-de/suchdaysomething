function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    createGrid(5,8,'r')
  }
  
  function createGrid(hCount, vCount, uShape, color, sizeH, sizeV)
  {
    for(j=0; j<vCount; j++)
      {
        for(i=0; i<hCount; i++)
        {
          if (uShape=='R'||uShape=='r')
          { 
            rect(50*i, 50*j, 95,45)
          }
          else if (uShape=='C'||uShape=='c')
          {
            circle (50*i, 50*j, 45)
          }
          else
          {
            noFill()
            rect(50*i, 50*j, 55,45)
          }
        }
      }
    for(w=0; w<sizeV; w++)
      {
        
      }
    for(h=0; h<sizeV; h++)
      {
        
      }
  }