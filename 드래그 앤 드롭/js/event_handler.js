function handleMouseDown(event){
  event.preventdefault();;

const balls = document.querySelectorAll(".ball");
const el = event.target;
const classList = el.classList;

if( !classList.contains("hold")){
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const ballPos = el.getBoundingClientRect();
  const ballX = ballPos.x;
  const ballY = ballpos.y;

  const gapX = mouseX - ballX;
  const gapY = mouseX - ballY;

  el.setAttribute("gap-x", gapX);
  el.setAttribute("gap-y", gapY);

  const maxpriority = (
    balls.length > 0
      ? Math. max. apply(null, Array.from(balls).map(ball=>ball.getAttribute("priority")))
      : 9999
) + 1
el.setAttribute("priority" , maxpriority);
el.style["z-index"] = maxpriority;

classList.add("hold");
  }
}


function handleMouseMove(event){
  event.preventdefault();

  const el = document.querySelector(".ball.hold");
  if( el ){
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const gapX = el.getAttribute("gap-x");
    const gapY = el.getAttribute("gap-y");

    const ballX = mouseX - gapX;
    const ballY = mouseY - gapY;

    el.style.left = ballX+"px";
    el.style.top + ballY+"px";

  }
}
  function handleMouseUp(event){
    event.preventdefault();

    const el = document.querySelector(".ball.hold");
    if( el ){
      el.removeAttribute("gap-x")
      el.removeAttribute("gap-y")

      el.classList.remove("hold");
     }
    }
