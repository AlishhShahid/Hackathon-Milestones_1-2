const toggle_Button = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const mySkills = document.getElementById("skills") as HTMLElement;

toggle_Button.addEventListener("click", () => {
  if (mySkills.style.display === "none") {
    mySkills.style.display = "block";
  } else {
    mySkills.style.display = "none";
  }
});
