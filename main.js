var mouseevent="empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="black";
wol=1;
canvas.addEventListener("mousedown",my_md);
function my_md(e){
    colour=document.getElementById("colour").value ;
    wol=document.getElementById("wol").value;

    mouseevent="mouse down";
}

canvas.addEventListener("mousemove",my_mm);
function my_mm(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent=="mouse down"){
        ctx.beginPath();
       ctx.strokeStyle=colour;
       ctx.lineWidth=wol;

       console.log("last position of x and y=");
       console.log("x="+last_position_x+",y="+last_position_y);
       ctx.moveTo(last_position_x,last_position_y);

       console.log("Current position of x and y coordinates = "); console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();
    }

    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mu);
function my_mu(e){
    mouseevent="mouseup";

}

canvas.addEventListener("mouseleave",my_ml);
function my_ml(e){
    mouseevent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

