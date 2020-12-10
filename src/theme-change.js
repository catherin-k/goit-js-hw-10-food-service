const refs = {
  body: document.querySelector("body"),
  switch: document.querySelector("#theme-switch-toggle"),
};
console.log(refs.switch);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.switch.addEventListener("change", onThemeSwitch);

function onThemeSwitch(event) {
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}
