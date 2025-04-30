
function preload(){
  pgnjz = loadImage("njz.png");
  minji= loadImage("minji_e.png");
  hanni= loadImage("hanni_e.png");
  dani= loadImage("dani_e.png");
  haerin= loadImage("haerin_e.png");
  hyein= loadImage("hyein_e.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  
}

function draw() {
  
  //colourChange();
  image(pgnjz,0,0);
  characterChange();
}

/*function colourChange(){
  
   pgnjz.loadPixels();
    let updatedcolour;
    if(0 < mouseX && mouseX < pgnjz.width*1/5)
    {   
      for(let j=0; j<pgnjz.height; j++){
        for(let i=0; i<pgnjz.width; i++){
          let C= i + j*pgnjz.width;
          let colour= color(pgnjz.pixels[C]);
          if(brightness(colour)>0)
          {            
            updatedcolour=color(0,100,200);
            pgnjz.pixels[C]=updatedcolour;
          }
        }
      }
    }
    else if(mouseX>pgnjz.width*1/5 && mouseX<pgnjz.width*2/5)
    {
      for(let j=0; j<pgnjz.height; j++){
        for(let i=0; i<pgnjz.width; i++){
          let C= i + j*pgnjz.width;
          let colour= color(pgnjz.pixels[C]);
          if(brightness(colour)>0)
          {            
            updatedcolour=color(155,50,0);
            pgnjz.pixels[C]=updatedcolour;
          }
        }
      }
    }
    else if(mouseX>pgnjz.width*2/5 && mouseX<pgnjz.width*3/5){
      for(let j=0; j<pgnjz.height; j++){
        for(let i=0; i<pgnjz.width; i++){
          let C= i + j*pgnjz.width;
          let colour= color(pgnjz.pixels[C]);
          if(brightness(colour)>0)
          {            
            updatedcolour=color(255,200,0);
            pgnjz.pixels[C]=updatedcolour;
          }
        }
      }
    }
    else if(mouseX>pgnjz.width*3/5 && mouseX<pgnjz.width*4/5){
        for(let j=0; j<pgnjz.height; j++){
        for(let i=0; i<pgnjz.width; i++){
          let C= i + j*pgnjz.width;
          let colour= color(pgnjz.pixels[C]);
          if(brightness(colour)>0)
          {            
            updatedcolour=color(0,200,0);
            pgnjz.pixels[C]=updatedcolour;
          }
        }
      }
        
    }else if(mouseX>pgnjz.width*4/5){
        for(let j=0; j<pgnjz.height; j++){
        for(let i=0; i<pgnjz.width; i++){
          let C= i + j*pgnjz.width;
          let colour= color(pgnjz.pixels[C]);
          if(brightness(colour)>0)
          {            
            updatedcolour=color(200,0,150);
            pgnjz.pixels[C]=updatedcolour;
          }
        }
      }
    }
  pgnjz.updatePixels();
  
}*/

function characterChange(){
      if(mouseX<pgnjz.width*1/5){
        
        image(minji,350,650);
        mouseClicked(window.open('https://hairyphotter.github.io/Minji_Page/'));
      }
 
      if(mouseX>pgnjz.width*1/5 && mouseX<pgnjz.width*2/5){
        
        image(hanni,350,650);
        mouseClicked(window.open('https://hairyphotter.github.io/Hanni_Page/'));
      }

      
      if(mouseX>pgnjz.width*2/5 && mouseX<pgnjz.width*3/5){
        
        image(dani,350,650);
        mouseClicked(window.open('https://hairyphotter.github.io/Danielle_Page/'));
      }
      

      if(mouseX>pgnjz.width*3/5 && mouseX<pgnjz.width*4/5){
        
        
        image(haerin,350,650);
        mouseClicked(window.open('https://hairyphotter.github.io/Haerin_Page/'));
      }
      

      if(mouseX>pgnjz.width*4/5){
        
        
        image(hyein,350,650);
        mouseClicked(window.open('https://hairyphotter.github.io/Hyein_Page/'));
      }
}



