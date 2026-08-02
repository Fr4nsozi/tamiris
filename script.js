const link = document.getElementById("contato2");
const image = document.getElementById("calendar");

link.addEventListener("mouseenter", () => {
    image.src = "img/calendar-hover.svg";
});

link.addEventListener("mouseleave", () => {
    image.src ="img/calendar.svg";
});

