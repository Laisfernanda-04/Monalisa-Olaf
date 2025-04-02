function setup() {
    createCanvas(400, 400);
    let olhoX;
    let olhoY; 
  }
  
  function draw() {
    background("rgb(114,114,202)");
    fill ("rgb(231,224,224)")
    circle(200, 200, 300);
    ellipse(130, 150, 80, 40);
    ellipse(250, 150, 80,40);
    fill(0); 
  
    //pupílas se mexendo 
    olhoX = map(mouseX, 1, 600, 130, 160);
    olhoY = map(mouseY, 1, 600, 135, 159);
    ellipse(olhoX, olhoY, 10);
    ellipse(olhoX + 120, olhoY, 10);
     if(mouseIsPressed){
       console.log(mouseX, mouseY)
     }
  
      
    // nariz, boca e sobrancelha 
    
    fill("orange")
    triangle(190, 210, 210, 210, 200, 240);
    fill("rgb(121,41,41)")
    arc(190, 274, 99, 90, 0, PI + QUARTER_PI, PIE);
    line(120,115,178,113);
    line(224,116,279,106);
  
     if (mouseIsPressed) {
          console.log(mouseX, mouseY);
      }
     
  }