/**
 * Created by shawn on 2014/9/8.
 */
var RATE = 6500 / 6500;
function drawMark(ctx){
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.lineWidth = 2;

	ctx.beginPath();

	ctx.moveTo(0, 270);
	ctx.lineTo(6500 * RATE, 270);

	for(var i = 1; i < 65; i++){
		ctx.moveTo(100 * i * RATE, 270 - 5);
		ctx.lineTo(100 * i * RATE, 270 + 5);
	}

	ctx.stroke();

	ctx.closePath();

	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.font = "12px Arial";

	for(var i = 1; i < 65; i++){
		var year = -4000 + i * 100;
		if(year < 0){
			year = "公元前" + Math.abs(year);
		}else if(year == 0){
			year = "公元元年";
		}else if(year > 0){
			year = Math.abs(year);
		}
		ctx.fillText(year, 100 * i * RATE, 270 + 5)
	}

}

var LV1_HEIGHT = 150;
var LV2_HEIGHT = 60;
var bgColors = ["#8080c0", "#FF33CC", "#336699", "#6699cc", "#66cccc", "#b45b3e", "#479ac7", "#00b271"];
var colorCount = 0;
function drawDynasty(ctx ,name, start, end, level, side){
	var x = 0, y = 0, width = 0, height = 0;
	start = start + 4000;
	end = end + 4000;

	width = (end - start) * RATE;
	height = window["LV" + (level ? level : 1) + "_HEIGHT"];
	x = start * RATE;
	if(side && side == "bottom"){
		y = 270;
	}else{
		y = 270 - height;
	}

	ctx.fillStyle = bgColors[colorCount];
	colorCount ++;
	if(colorCount == bgColors.length){
		colorCount = 0;
	}
	ctx.globalAlpha = 0.8;
	ctx.fillRect(x, y, width, height);
	ctx.globalAlpha = 1;

	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	if(width < 50){
		if(name.length > 3){
			ctx.font = "0px Arial";
		}else{
			ctx.font = "20px Arial";
		}
	}else{
		ctx.font = "20px Arial";
	}

	ctx.fillText(name, x + width / 2, (side && side == "bottom" ? 270 + height - 30 : 270 - height + 30));
}

function drawEvent(ctx, year, info, side){

	year = year + 4000;

	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.lineWidth = 2;

	ctx.beginPath();

	if(side && side == "bottom"){
		ctx.moveTo(year * RATE, 270 + LV1_HEIGHT);
		ctx.lineTo(year * RATE, 270 + LV1_HEIGHT + 5);
	}else{
		ctx.moveTo(year * RATE, 270 - LV1_HEIGHT);
		ctx.lineTo(year * RATE, 270 - LV1_HEIGHT - 5);
	}

	ctx.stroke();

	ctx.closePath();

	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "12px Arial";

	ctx.fillText(info, year * RATE, (side && side == "bottom" ? 270 + LV1_HEIGHT + 15 : 270 - LV1_HEIGHT - 15))
}

function drawHistory(ctx, data, side, levelCount){
	colorCount = 0;
	var level = levelCount || 1;
	for(var i = 0; i < data.length; i++){

		drawDynasty(ctx, data[i].name, data[i].start, data[i].end, level, side);

		if(data[i].child && data[i].child.length > 0){
			drawHistory(ctx, data[i].child, side, level + 1);
		}
	}
}

function drawEvents(ctx, event_data, side){
	for(var i = 0; i < event_data.length; i++){console.log(event_data[i].info)
		drawEvent(ctx, event_data[i].year, event_data[i].info, side);
	}
}

