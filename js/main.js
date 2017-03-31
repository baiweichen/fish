var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;
var dateTime;
var bgPic=new Image();
var ane;
var mom;
var baby;
var mx;
var my;
var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;

var wave;
var halo;

document.body.onload=game;
function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init()
{
	//获取canvas context
	can1=document.getElementById("canvas1");//fish,dust,ui,ciecle
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//background,ane,fruits
	ctx2=can2.getContext("2d");

	can1.addEventListener('mousemove',onMouseMove,false)

	bgPic.src="./image/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	baby=new babyObj();
	baby.init();

	for(var i=0;i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src="./image/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{
		babyEye[i]=new Image();
		babyEye[i].src="./image/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++)
	{
		babyBody[i]=new Image();
		babyBody[i].src="./image/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++)
	{
		momTail[i]=new Image();
		momTail[i].src="./image/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{
		momEye[i]=new Image();
		momEye[i].src="./image/bigEye"+i+".png";
	}
	data=new dataObj();
	for(var i=0;i<8;i++)
	{
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./image/bigSwim"+i+".png";
		momBodyBlue[i].src="./image/bigSwimBlue"+i+".png";
	}
	ctx1.font="20px Verdana";
	ctx1.textAlign="center";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();
}
function gameloop()
{
	requestAnimFrame(gameloop);//根据机器性能确定时间绘制下一帧
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>50) deltaTime=50;
	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMonitor();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momfruitsCollision();
	momBabyCollision();

	data.draw();
	wave.draw();
	halo.draw();
	
}
function onMouseMove(e)
{
	if(!data.gameOver)
	{
		if(e.offSetX || e.layerX)
		{
		mx=e.offSetX==undefined ? e.layerX:e.offSetX;
		my=e.offSetY==undefined ?e.layerY:e.offSetY;

		}
	}

	
}
