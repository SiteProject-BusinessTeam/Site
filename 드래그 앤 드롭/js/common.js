const balls = document.querySelectorAll(".ball");

balls.forEach(function(ball, idx){
  let priority = ball.getAttribute("priority");
  if( !priority){
    priority = idx+1;
    ball.setAttribute("priority, priority");
    }
  ball.style["z-index"] = priority;

  ball.addEventListener('mousedown', handleMouseDown);
});

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
