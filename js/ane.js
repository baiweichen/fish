var aneObj=function()
{
	//start point ,cntrol point,ed point(sin)
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function()
{
	
	for(var i=0;i<this.num;i++)
	{
		this.rootx[i]=i*15.5+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-200+Math.random()*50;
		
	}
}
aneObj.prototype.draw=function()
{
	ctx2.save();//与ctx2.restore()对应
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";		
	for(var i=0;i<this.num;i++)
	{
		//beginpath,moveTo,lineTo,stroke,strokeStyle,lineWidth,line
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);
		ctx2.lineWidth=20;
		ctx2.lineCap="round";
		ctx2.strokeStyle="#3b154e";
		ctx2.stroke();
		
	}
	ctx2.restore();//表示样式定义只在这一段起作用
}
