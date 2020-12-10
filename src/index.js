import styles from "./styles.css";
import menuElement from "./menu.json";
import menuTemplate from "./templates/menu-item.hbs";
import themeChange from "./theme-change.js";
const menu = document.querySelector(".js-menu");
const newMenuItem = menuTemplate(menuElement);

menu.insertAdjacentHTML("afterbegin", newMenuItem);
