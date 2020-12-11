const refs = {
  body: document.querySelector("body"),
  switch: document.querySelector("#theme-switch-toggle"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.switch.addEventListener("change", onThemeSwitch);

function onThemeSwitch() {
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}

let localTheme = localStorage.getItem("Theme");

if (localTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}
