let dateTime = document.getElementById("currentTime");

function time() {
  let newTime = new Date();
  dateTime.innerHTML = newTime.toLocaleDateString();
}
setInterval(time);
