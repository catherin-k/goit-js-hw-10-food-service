const refs = {
  body: document.querySelector("body"),
  switch: document.querySelector("#theme-switch-toggle"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.switch.addEventListener("change", onThemeSwitch);
refs.switch.addEventListener("change", onLocalStorage);

function onThemeSwitch() {
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function onLocalStorage() {
  if (refs.switch.checked) {
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    localStorage.removeItem("Theme");
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}

let localTheme = localStorage.getItem("Theme");

if (localTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
