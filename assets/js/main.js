const p = document.querySelector(".clock");

const createDate = (sec) => {
  const date = new Date(1000 * sec);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};
let sec = 0;
let timer;

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("start")) {
    p.classList.remove("bad");
    clearInterval(timer);
    startTime();
  }
  if (el.classList.contains("pause")) {
    p.classList.add("bad");
    clearInterval(timer);
  }
  if (el.classList.contains("clear")) {
    p.classList.remove("bad");
    sec = 0;
    clearInterval(timer);
    p.innerHTML = "00:00:00";
  }
});

const startTime = () => {
  timer = setInterval(() => {
    sec++;
    p.innerHTML = createDate(sec);
  }, 1000);
};
