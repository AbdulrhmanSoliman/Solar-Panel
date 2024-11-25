// toggle manu on mobile phones
let manuIcon = document.querySelector(".manu-icon");
let manuLinks = document.querySelector(".links");
manuIcon.onclick = () => {
  manuLinks.classList.toggle("on");
};
