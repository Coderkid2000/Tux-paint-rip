canvas = document.getElementById("myCanvas");
colour = "blue";
width_of_line = 99999;
ctx = canvas.getContext("2d");

var mouseevent = "";
var lastpositionofX;
var lastpositionofY;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    mouseevent = "mouseDown";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseUP);

function my_mouseUP(e)
{
    mouseevent = "mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    currentpositiofmouseX = e.clientX - canvas.offsetLeft;
    currentpositiofmouseY = e.clientY - canvas.offsetTop;

    if(mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X and Y coordinates = ");
        console.log("X = " +  lastpositionofX + "Y = " + lastpositionofY );
        ctx.moveTo(lastpositionofX , lastpositionofY);


        console.log("Last position of X and Y coordinates = ");
        console.log("X = " +  currentpositiofmouseX + "Y = " + currentpositiofmouseY );
        ctx.lineTo(currentpositiofmouseX , currentpositiofmouseY);
        ctx.stroke();
    }
    lastpositionofX = currentpositiofmouseX;
    lastpositionofY = currentpositiofmouseY;
}

