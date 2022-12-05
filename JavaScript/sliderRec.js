function setup() {
    createCanvas(600, 400);
    slCount= createSlider ( 0,40,1 ) 
    slCount.position ( 20,375 ) 
    slCount.style ('width','300px')
    slVert= createSlider ( 0,40,1 ) 
    slVert.position ( 20,360 ) 
    slVert.style ('width','300px')
    sliderR = createSlider(0,300,0)
    sliderR.position(20,340)
    sliderR.style ('width', '80px')
    sliderG = createSlider(150,300,0)
    sliderG.position(20,325)
    sliderG.style ('width', '80px')
    sliderB = createSlider(0,300,0)
    sliderB.position(20,310)
    sliderB.style ('width', '80px')
    sliderSz = createSlider(0,300,0)
    sliderSz.position(300,310)
    sliderSz.style ('width', '80px')
  }
  
  function draw() {
    let valCount = slCount.value()
    let valVert = slVert.value()
    let valR = sliderR.value()
    let valG = sliderG.value()
    let valB = sliderB.value()
    let valSz = sliderSz.value()
    background(220);
    for(s=0; s<valVert; s++)
    {for(j=0; j<valVert; j++)
      {for(i=0; i<valCount; i++)
        {
          rect(i*22,j*22,20,s*20)
          {
            if(i%2&&j%2)
              {fill(valR, valG, valB)}
            else
              {fill(valR, valB)}
          }
        }
      }
    }
  }
  