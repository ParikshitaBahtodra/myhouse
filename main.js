var canvas=new fabric.Canvas("myCanvas");

var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_img_object="";
function player_update(){ 

fabric.Image.fromURL("lady.jpg",function(Img) {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
   canvas.add(player_object);
} );

}

function new_image(get_image){
   fabric.Image.fromURL(get_image,function(Img) {
       block_img_object=Img;
       block_img_object.scaleToWidth(block_img_width);
       block_img_object.scaleToHeight(block_img_height);
       block_img_object.set({
           top:player_y,
           left:player_x
       });
      canvas.add(block_img_object);
   } );
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
 var  keypress=e.keyCode;

   console.log(keypress);
   
   if (keypress=="38"){
       up();
       console.log("up");
   }

   if (keypress=="40"){
       down();
       console.log("down");
   }

   if (keypress=="37"){
       left();
       console.log("left");
   }

   if (keypress=="39"){
       right();
       console.log("right");
   }

   if (keypress=="73"){
       new_image("allinonechair.jpg");
       console.log("i");
   }

   if (keypress=="76"){
       new_image("almirah.jpg");
       console.log("l");
   }

   if (keypress=="84"){
       new_image("table-hi.png");
       console.log("t");
   }

   if (keypress=="79"){
       new_image("sofa.png");
       console.log("o");
   }

   if (keypress=="72"){
       new_image("holl.jpg");
       console.log("h");
   }

   if (keypress=="75"){
       new_image("kitchen.png");
       console.log("k");
   }

   if (keypress=="67"){
       new_image("clock.png");
       console.log("c");
   }

   if (keypress=="68"){
       new_image("dinnertable.jpg");
       console.log("d");
   }

   if (e.shiftKey==true && keypress=="65"){
       block_img_height=block_img_height+10;
       block_img_width=block_img_width+10;
       document.getElementById("current_Width").innerHTML=block_img_width;
       document.getElementById("current_Height").innerHTML=block_img_height;
       console.log("A and shift press together");
   }

  if (e.shiftKey==true && keypress=="83"){
       block_img_height=block_img_height-10;
       block_img_width=block_img_width-10;
       document.getElementById("current_Width").innerHTML=block_img_width;
       document.getElementById("current_Height").innerHTML=block_img_height;
       console.log("S and shift press together");
   }
  
}
   
function up(){
   if (player_y>0){
       player_y=player_y-block_img_height;
       console.log("blockHeight= "+block_img_height);
       console.log("x position= "+player_x+"y position= "+ player_y);
       canvas.remove(player_object);
       player_update();
   }
}

function down(){
   if (player_y<500){
       player_y=player_y+block_img_height;
       console.log("blockHeight= "+block_img_height);
       console.log("x position= "+player_x+"y position= "+ player_y);
       canvas.remove(player_object);
       player_update();
   }
}

function left(){
   if (player_x>0){
       player_x=player_x-block_img_width;
       console.log("blockWidth= "+block_img_width);
       console.log("x position= "+player_x+"y position= "+ player_y);
       canvas.remove(player_object);
       player_update();
   }
}

function right(){
   if (player_x<900){
       player_x=player_x+block_img_width;
       console.log("blockWidth= "+block_img_width);
       console.log("x position= "+player_x+"y position= "+ player_y);
       canvas.remove(player_object);
       player_update();
   }
}
