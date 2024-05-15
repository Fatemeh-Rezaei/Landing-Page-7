// ******************** sub menu chevron **********************
const nav_sub_menu = document.querySelectorAll(
  ".nav-main__menu-list > ul > li"
);
nav_sub_menu.forEach((item) => {
  if (item.querySelector("ul") !== null) {
    item
      .querySelector("a")
      .insertAdjacentHTML("beforeend", '<i class="fa fa-chevron-down"></i>');
  }
});

// ******************** reosponsive menu ********************
const bars = document.getElementsByClassName("fa-bars")[0];
const btn_nav_close = document.getElementsByClassName("btnn-close")[0];
bars.addEventListener("click", btn_sub_menu, false);
btn_nav_close.addEventListener("click", btn_close, false);

function btn_sub_menu() {
  bars.style.display = "none";
  btn_nav_close.style.display = "block";
}

function btn_close() {
  bars.style.display = "block";
  btn_nav_close.style.display = "none";
}

// ********************************** responsive menu ---> sub menu ***********************
const responsive_menu_list = document.querySelectorAll(
  ".responsive-menu__body-list ul li"
);
responsive_menu_list.forEach((item) => {
  if (item.querySelector("ul") !== null) {
    item
      .querySelector("a")
      .insertAdjacentHTML("beforebegin", '<i class="fa fa-chevron-down"></i>');
    const arrow = item.querySelector(".fa-chevron-down");
    arrow.addEventListener(
      "click",
      (e) => {
        const target_el = e.target;
        const ul_el = target_el.parentElement.querySelector("ul");
        ul_el.classList.toggle("show");
      },
      false
    );
  }
});

// **************************** NAV *********************
let navigation = document.querySelector(".nav-main");
let sticky = navigation.offsetTop;

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > sticky) {
      navigation.classList.add("nav-sticky");
    } else {
      navigation.classList.remove("nav-sticky");
    }
  },
  false
);
