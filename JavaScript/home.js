function setup() {
    createCanvas(400, 400);
    
  }
  
  function draw() {
    background(220);
    strokeWeight(2)
    fill("rgb(255,237,240)")
    rect(50,250,150,150)
    fill("rgb(165,165,243)")
    rect(110,350,30,50)
    fill("rgb(164,105,62)")
    rect(65,150,30,100)
    fill("pink")
    triangle(50,250,130,130,200,250)
    fill("yellow")
    rect(80,290,30,30)
    rect(140,290,30,30)
    line(95,290,95,320)
    line(155,290,155,320)
    line(80,305,110,305)
    line(140,305,170,305)
    strokeWeight(3)
    line(115,380,116,380)
    fill("gray")
    circle(80,(400-(frameCount%140))-250,(frameCount%140/2))
    
    
    
  }
  