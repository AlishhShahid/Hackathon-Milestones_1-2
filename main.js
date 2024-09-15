var toggle_Button = document.getElementById("toggle-skills");
var mySkills = document.getElementById("skills");
toggle_Button.addEventListener("click", function () {
  if (mySkills.style.display === "none") {
    mySkills.style.display = "block";
  } else {
    mySkills.style.display = "none";
  }
});
