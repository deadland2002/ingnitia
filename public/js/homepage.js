const countdownDiv = document.getElementById("countdown");
const Launching = document.getElementById("Launching");

window.onload = () => {
    setTimeout(()=>{ startTimer() },0)
};

function startTimer() {
  var deadline = new Date("Feb 24, 2023 09:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    Launching.style.display = "block";
    countdownDiv.innerHTML =`
        <span>${days}  D : </span>
        <span>${hours}  H : </span> 
        <span>${minutes}  M : </span>
        <span>${seconds}  S </span>
        `;
    if (t < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 0 );
}
