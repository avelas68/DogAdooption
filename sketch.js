let data;
let url ="Adoptable_Pets.csv";

var on = false;
var off = true;

var imgArray = new Array();
var Likes = new Array();
var uniqueLikes = new Array();

var count = 0;
var LikeCount = 0;
var y = 10;



function preload(){
  data = loadTable(url, 'csv', 'header');
  img0 = loadImage('Roscoe.jpeg');
  img1 = loadImage('Charlie.jpeg');
  img2 = loadImage('Silver.jpeg');
  img3 = loadImage('Mittens.jpeg');
  img4 = loadImage('Lala.jpeg');
  img5 = loadImage('Bullet.jpeg');
  img6 = loadImage('Hooch.jpeg');
  img7 = loadImage('Simba.jpeg');
  img8 = loadImage('Penguin.jpeg');
  img9 = loadImage('Pepito.jpeg');
  img10 = loadImage('Ringo.jpeg');



  imgArray[0] = img0;
  imgArray[1] = img1;
  imgArray[2] = img2;
  imgArray[3] = img3;  
  imgArray[4] = img4;
  imgArray[5] = img5;
  imgArray[6] = img6;
  imgArray[7] = img7;
  imgArray[8] = img8;
  imgArray[9] = img9;
  imgArray[10] = img10;



  checkmark = loadImage('checkmark.png');
  ximg = loadImage('x.png');

}


function setup() {
  createCanvas(2000, 2000);
  background('#6791A0');


}

function draw() {

  if (on) {

    background('#556EA6');
    image(imgArray[count], 525, 130);

    let PetAge = data.getColumn('PetAge');
    let PetSize = data.getColumn('PetSize');
    let Breed = data.getColumn('Breed');

    let PetName = data.getColumn('PetName');
    text("About Me", 500, 550);
    text("Age: " + PetAge[count], 500, 600);
    text("Pet Size: " + PetSize[count], 500, 650);
    text("Breed: " + Breed[count], 500, 700);
      Likes[LikeCount] = PetName[count]+"\n";

      Likes.forEach(function(value) {
        if (uniqueLikes.indexOf(value) === -1) {
          uniqueLikes.push(value);
        }
});


      fill('#FFC25D');
      textSize(26);

      text("Likes: \n", 900,120);
      for (let i = 0 ; i<LikeCount; i++){
      text(uniqueLikes.join(""), 900,150);

      }
    

    textSize(26);


    text(PetName[count], 545, 95);
    let Distance = data.getColumn('Distance');

    text(Distance[count], 545, 400);

    image(checkmark,500,450,50,50);
    image(ximg,700,450,50,50);

    

    fill('#FFC25D');


  }
 if (off){
      background('#556EA6');
 
      if(count > 10){
      count = 0;
    }
     console.log(count);
      image(imgArray[count], 525, 130);


    let PetName = data.getColumn('PetName');
    let Distance = data.getColumn('Distance');

      fill('#FFC25D');
      textSize(26);
      text("Likes: \n", 900,120);
      for (let i = 0 ; i<LikeCount ; i++){
      text(uniqueLikes.join("") , 900,150);
      }
    
      textSize(26);
      fill('#FFC25D');
      text(PetName[count], 545, 95);
      text(Distance[count], 545, 400);

  
      image(checkmark,500,450,50,50);
      image(ximg,700,450,50,50);
    let PetAge = data.getColumn('PetAge');
    let PetSize = data.getColumn('PetSize');
    let Breed = data.getColumn('Breed');
    text("About Me", 500, 550);
    text("Age: " + PetAge[count], 500, 600);
    text("Pet Size: " + PetSize[count], 500, 650);
    text("Breed: " + Breed[count], 500, 700);
  }
}
 function myFunction() {
  
  let animal;
  let text;
  if(uniqueLikes.length != 0){
  animal = prompt("Which animal are you interested in adopting: \n"+ uniqueLikes.join(""));
  }
  if(uniqueLikes.length == 0){
    text = prompt("I am sorry you do not have any animals that you currently like :(");
  }
  if (animal == null || animal == "") {
    text = "";
  } else {
    // console.log(animal);
    // console.log(uniqueLikes.includes(animal));
    //if(animal.includes(uniqueLikes))
    text = prompt("Congrats you adopted " + animal + "!");
 //   }
    // else{
    //   text = "sorry animal is not wihtin likes."
    // }
  }
  document.getElementById("demo").innerHTML = text;
}

function mousePressed() {
  if (mouseX > 500 && mouseX < 600 && mouseY > 450 && mouseY < 500) {
    on = true;
    off = false;
     if (on) {
      on = true;
      LikeCount ++; 
      y = y+10;
     }

  } 
  if (mouseX > 700 && mouseX < 1020 && mouseY > 450 && mouseY < 500) {
    on = false;
    off = true;
    if (off) {
      off = true;
      count ++;
    } 
  
 }
}
