canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

greencarwidth=75
greencarheight=100
bgimage = "parkingLot.jpg";
greencar_image = "car2.png";
greencarx=5
greencary=225


function add() {
	bgimgtag = new Image()
    bgimgtag.onload = uploadbackground
    bgimgtag.src = bgimage

    gimgtag = new Image()
    gimgtag.onload = uploadgreencar
    gimgtag.src = greencar_image
}

function uploadbackground() {
	ctx.drawImage(bgimgtag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(gimgtag, greencarx, greencary,greencarwidth, greencarheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencary>=0){
      greencary=greencary-10
        uploadbackground()
        uploadgreencar()
    }
}

function down()
{
	if(greencary<=350){
		greencary=greencary+10
		  uploadbackground()
		  uploadgreencar()
	  }
}

function left()
{
	if(greencarx>=0){
       greencarx=greencarx-10
        uploadbackground()
        uploadgreencar()
    }

}

function right()
{
	if(greencarx<=750){
		greencarx=greencarx+10
		 uploadbackground()
		 uploadgreencar()
	 }
}
