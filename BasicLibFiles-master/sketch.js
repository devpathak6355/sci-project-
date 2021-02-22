var topic;
var underline;
var poster,posterImg;
var posterTitle;
var lifeline,lifelineImg;
var graph1,graph1Img;
var drawing,drawingImg;

var tell,tellImg;

function preload(){

    posterImg=loadImage("Photos/poster.jpg");
    lifelineImg=loadImage("Photos/photo.jpg");
    graph1Img=loadImage("Photos/graph 1.jpg");
    drawingImg=loadImage("Photos/preview.jpg");
    tellImg=loadImage("Photos/PicsArt_02-22-01.39.30.png");


}

function setup(){
    createCanvas(windowWidth,1750);

    topic=createSprite(windowWidth/2,50,windowWidth,100);
    topic.shapeColor="lime";

    underline=createSprite(windowWidth/2+15,80,600,5);
    underline.shapeColor="black";   

    poster=createSprite(windowWidth/2,470,10,10);
    poster.addImage(posterImg);
    poster.scale=1.2;
    
    lifeline=createSprite(windowWidth/2,230,10,10);
    lifeline.addImage(lifelineImg);
    lifeline.scale=1.2;

    graph1=createSprite(windowWidth-280,850,10,10);
    graph1.addImage(graph1Img);
    graph1.scale=0.75;

    drawing=createSprite(windowWidth/2,1350,10,10);
    drawing.addImage(drawingImg);
    drawing.scale=0.65;

    tell=createSprite(-200,110,10,10);
    tell.addImage(tellImg);
    tell.scale=0.1;
    tell.velocityX=3;


}

function draw(){
    background(World.mouseX,World.mouseX,World.mouseY);

    if(tell.x>windowWidth+300){
        tell.x=-300;
    }

    drawSprites();

    push();
    fill(0,0,255);
    textSize(50);
    text("Science Integrated Project",400,60);
    pop();

    push();
    fill("green");
    textSize(30);
    text("PROTECT YOURSELF AND THOSE AROUND YOU",windowWidth/2-300,220);
    pop();

    push();
    fill(0);
    textSize(20);
    text("    Virus, infectious agent of small size and simple composition that can multiply only in ",20,740);
    text("    living cells of animals, plants, or bacteria. The name is from a Latin word meaning",20,760);
    text("    “slimy liquid” or “poison.Coronaviruses are nonsegmented, enveloped viruses with”",20,780);
    text("    single-stranded RNA(ssRNA) ranging between 26 to 32 kb in length, the coronavirus",20, 800);
    text("    genome is thr largest among RNA viruses. The COVID-19 pandemic has led to a dramatic ",20,820); 
    text("    loss of human life worldiwde and presents an unprecedented challenge to public health,",20,840);
    text("    food system and the world of work.",20,860);
    text("    Covid 19 started in china in december 2019.An epidemic is defined as “an outbreak of",20,900);
    text("    disease that spreads quickly and affects many individuals at the same time.” A pandemic",20,920);
    text("    is a type of epidemic (one with greater range and coverage), an outbreak of a disease",20,940);
    text("    that occurs over a wide geographic area and affects an exceptionally high proportion",20,960);
    text("    of the population. While a pandemic may be characterized as a type of epidemic, you",20,980);
    text("    would not say that an epidemic is a type of pandemic.",20,1000);
    text("    Symptoms of COVID-19 are variable, ranging from mild symptoms to severe illness.",20,1020);
    text("    Common symptoms include headache, loss of smell and taste, nasal congestion and rhinorrhea, cough, muscle pain, sore throat, fever, diarrhea,",20,1040);
    text("    and breathing difficulties. People with the same infection may have different symptoms, and their symptoms may change over time. In people ",20,1060);
    text("    without prior ears, nose, and throat disorders, loss of taste combined with loss of smell is associated with COVID-19.",20,1080);
    text("    Covid -19 has affected the world in a vast manner, the most number of casses of coronavirus in the world is of United Stated Of America (USA)",20,1100);
    text("    Some countries with the lowest covid-19 case is Vanuatu which has reported only one coronavirus disease case till date, a 23-year-old American",20,1600);
    text("    tourist who tested positive on November 10. Vanuatu imposed domestic and international travel restrictions after the American national tested",20,1620);
    text("    positive and extended the necessary quarantine period from 14 t0 28 days.",20,1640);
    pop();

    push();
    fill(0);
    textSize(15);
    text("By- Dev Pathak",windowWidth-150,1700);
    text("VIII A",windowWidth-120,1720);
    pop();

}
