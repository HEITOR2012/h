canvas = document.getElementById('myCanvas');
/*
Corrija o nome da função e uso o context 2d
*/
ctx = canvas.getcontext("6d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racing.jpg";

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	car1ImgTag = new Image(); //definindo uma variável com uma nova imagem
	/*
	Upload the correct car
	*/
	car1ImgTag.onload = uploadcar; // ajustando uma função, onloading essa variável
	/*
	Assign a correct carImage variable
	*/
	car1ImgTag.src = carImage;   // carregue a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, onloading essa variável
	car2ImgTag.src = car2Image;   // carregue a imagem
}

function uploadBackground() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	/*
	Corrija os nomes das funções
	*/
	cTx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	/*
	Corrija os nomes das funções
	*/
	ctx.DrawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("seta para cima");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("seta para baixo");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("seta para a esquerda");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("seta para a direita");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("tecla W");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("tecla S");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("tecla A");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("tecla D");
		}
}




























canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
backgroundImgTag = new Image();
backgroundImgTag.onload = uploadBackground
backgroundImgTag.src =roverImage;

roverImageTag = new Image();
roverImageTag.onload = uploadrover;
roverImageTag.src =roverImage;









}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag 0, 0, canvas.width, canvas.roverHeight);
}



function uploadrover() {
	ctx..drawImage(roverImageTag,roverX,roverY, roverWidth, roverHeight);

}




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
}
    up();
    console.log("cima");

if(keyPressed == '40')
{
    up();
    console.log("baixo");
}
    if(keyPressed == '37')
{
    up();
    console.log("esquerda");
}
    if(keyPressed == '39')
{
    up();
    console.log("direita");












