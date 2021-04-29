var guitarGroup,trumpetGroup,drumGroup,bassGroup,EguitarGroup,harpGroup,pianoGroup,saxophoneGroup,guitarGroup,voilinGroup;
var 
trumpet,drum,bass,Eguitar,harp,piano,saxophone,guitar,voilin;
var trumpetI,drumI,bassI,EguitarI,harpI,pianoI,saxophoneI,guitarI,voilinI;
var gamestate=0;
function preload(){
  trumpetI=loadImage("images/thumpet.png");
  drumI=loadImage("images/drum.png");
  bassI=loadImage("images/bass.png");
  EguitarI=loadImage("images/E guitar.png");
  harpI=loadImage("images/harp.png");
  pianoI=loadImage("images/piano.png");
  saxophoneI=loadImage("images/saxophone.png");
  guitarI=loadImage("images/guitar.png");
  voilinI=loadImage("images/violin.png");
}
function setup(){
  createCanvas(displayWidth-65,displayHeight-135);
  
  guitar = createSprite(displayWidth-230, displayHeight-350);
  guitar.addImage(guitarI);
  guitar.scale=0.75;

  trumpet = createSprite(displayWidth-230, displayHeight-630);
  trumpet.addImage(trumpetI);
  trumpet.scale=0.75;

  drum = createSprite(displayWidth-230, displayHeight-910);
  drum.addImage(drumI);
  drum.scale=0.75;

  bass = createSprite(displayWidth-920, displayHeight-350);
  bass.addImage(bassI);
  bass.scale=0.75;

  Eguitar = createSprite(displayWidth-1500, displayHeight-350);
  Eguitar.addImage(EguitarI);
  Eguitar.scale=0.75;

  harp = createSprite(displayWidth-920, displayHeight-630);
  harp.addImage(harpI);
  harp.scale=0.75;

  piano = createSprite(displayWidth-1500, displayHeight-630);
  piano.addImage(pianoI);
  piano.scale=0.75;

  saxophone = createSprite(displayWidth-920, displayHeight-910);
  saxophone.addImage(saxophoneI);
  saxophone.scale=0.75;

  voilin = createSprite(displayWidth-1500, displayHeight-910);
  voilin.addImage(voilinI);
  voilin.scale=0.75;

  guitarGroup= new Group();
  trumpetGroup = new Group();
  drumGroup= new Group();
  bassGroup = new Group();
  EguitarGroup= new Group();
  harpGroup = new Group();
  pianoGroup= new Group();
  saxophoneGroup = new Group();
  voilinGroup= new Group();
}
function draw() {
  background("white");
  text("chose an instrument", 0, 15);
   if (mousePressedOver(guitar)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=1;
   }
   if (mousePressedOver(trumpet)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    guitar.destroy();
    gamestate=2;
   }
   if (mousePressedOver(drum)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    guitar.destroy();
    trumpet.destroy();
    gamestate=3;
   }
   if (mousePressedOver(bass)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    guitar.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=4;
   }
   if (mousePressedOver(Eguitar)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    guitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=5;
   }
   if (mousePressedOver(harp)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    guitar.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=6;
   }
   if (mousePressedOver(piano)){
    voilin.destroy();
    saxophone.destroy();
    guitar.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=7;
   }
   if (mousePressedOver(voilin)){
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=8;
   }
   if (mousePressedOver(saxophone)){
    voilin.destroy();
    guitar.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=9;
   }
    if (gamestate===1){
      guitar.x=mouseX;
      guitar.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      trumpet();
    }
    if (gamestate===2){
      trumpet.x=mouseX;
      trumpet.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      guitar();
      trumpet();
    }if (gamestate===3){
      drum.x=mouseX;
      drum.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      trumpet();
      guitar();
      drum();
    }if (gamestate===4){
      bass.x=mouseX;
      bass.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      trumpet();
      drum();
      guitar();
      bass();
    }if (gamestate===5){
      Eguitar.x=mouseX;
      Eguitar.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      trumpet();
      bass();
      drum();
      guitar();
    }if (gamestate===6){
      harp.x=mouseX;
      harp.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      guitar();
      trumpet();
    }if (gamestate===7){
      piano.x=mouseX;
      piano.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      guitar();
      trumpet();
    }if (gamestate===9){
      saxophone.x=mouseX;
      saxophone.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      guitar();
      trumpet();
    }
    if (gamestate===8){
      voilin.x=mouseX;
      voilin.y=mouseY;
      violin();
      saxophone();
      piano();
      harp();
      Eguitar();
      bass();
      drum();
      guitar();
      trumpet();
    }

  drawSprites();
}

function guitar(){
    if (frameCount % 60 === 0) {
      var guitarX = createSprite(displayWidth-65,120,40,10);
      guitarX.y = Math.round(random(80,2000));
      guitarX.addImage(guitarI);
      guitarX.scale = 0.5;
      guitarX.velocityX = -7;
      
       guitarX.lifetime = displayWidth-65;
      
      guitarGroup.add(guitarX);}
}

function trumpet(){
  if (frameCount % 150 === 0) {
    var guitarX = createSprite(displayWidth-65,120,40,10);
    guitarX.y = Math.round(random(80,2000));
    guitarX.addImage(trumpetI);
    guitarX.scale = 0.5;
    guitarX.velocityX = -7;
    
    guitarX.lifetime = displayWidth-65;
    
    guitarGroup.add(guitarX);}
}

function drum(){
  if (frameCount % 160 === 0) {
    var drumX = createSprite(displayWidth-65,120,40,10);
    drumX.y = Math.round(random(80,2000));
    drumX.addImage(drumI);
    drumX.scale = 0.5;
    drumX.velocityX = -7;
    
    drumX.lifetime = displayWidth-65;
    
    drumGroup.add(drumX);}
}

function bass(){
  if (frameCount % 200 === 0) {
    var bassX = createSprite(displayWidth-65,120,40,10);
    bassX.y = Math.round(random(80,2000));
    bassX.addImage(cloudImage);
    bassX.scale = 0.5;
    bassX.velocityX = -7;
    
    bassX.lifetime = displayWidth-65;
    
    bassGroup.add(bassX);}
}

function Eguitar(){
  if (frameCount % 200 === 0) {
    var EguitarX = createSprite(displayWidth-65,120,40,10);
    EguitarX.y = Math.round(random(80,2000));
    EguitarX.addImage(cloudImage);
    EguitarX.scale = 0.5;
    EguitarX.velocityX = -7;
    
    EguitarX.lifetime = displayWidth-65;
    
    EguitarGroup.add(EguitarX);}
}

function harp(){
  if (frameCount % 100 === 0) {
    var harprX = createSprite(displayWidth-65,120,40,10);
    harpX.y = Math.round(random(80,2000));
    harpX.addImage(cloudImage);
    harpX.scale = 0.5;
    harpX.velocityX = -7;
    
    harpX.lifetime = displayWidth-65;
    
    harpGroup.add(harpX);}
}

function piano(){
  if (frameCount % 70 === 0) {
    var pianoX = createSprite(displayWidth-65,120,40,10);
    pianoX.y = Math.round(random(80,2000));
    pianoX.addImage(cloudImage);
    pianoX.scale = 0.5;
    pianoX.velocityX = -7;
    
    pianoX.lifetime = displayWidth-65;
    
    pianoGroup.add(pianoX);}
}

function saxophone(){
  if (frameCount % 30 === 0) {
    var saxophoneX = createSprite(displayWidth-65,120,40,10);
    saxophoneX.y = Math.round(random(80,2000));
    saxophoneX.addImage(cloudImage);
    saxophoneX.scale = 0.5;
    saxophoneX.velocityX = -7;
    
    saxophoneX.lifetime = displayWidth-65;
    
    saxophoneGroup.add(saxophoneX);}
}

function violin(){
  if (frameCount % 90 === 0) {
    var violinX = createSprite(displayWidth-65,120,40,10);
    violinX.y = Math.round(random(80,2000));
    violinX.addImage(cloudImage);
    violinX.scale = 0.5;
    violinX.velocityX = -7;
    
    violinX.lifetime = displayWidth-65;
    
    violinGroup.add(violinX);}
}