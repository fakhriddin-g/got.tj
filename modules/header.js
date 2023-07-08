import { headerListArr, headerListLink } from "./menu";

export function reloadHeader(place) {
  place.innerHTML = ""
  
  let container = document.createElement("div");
  let navBox = document.createElement("div");
  let logo = document.createElement("div");
  let logoText = document.createElement("p");
  let logoTextSpan = document.createElement("span");
  let navbar = document.createElement("nav");
  let navbarList = document.createElement("ul");
  for (const item of [0, 1, 2, 3]) {
    let navbarItem = document.createElement("li");
    let navbarItemLink = document.createElement("a");

    navbarItem.classList.add("nav-item");

    navbarItemLink.innerHTML = headerListArr[item];
    navbarItemLink.href = headerListLink[item]

    navbarItem.append(navbarItemLink)
    navbarList.append(navbarItem);
  }

  container.classList.add("header__container");
  navBox.classList.add("nav-box");
  logo.classList.add("logo");
  logoText.classList.add("logo-text");
  navbar.classList.add("nav");
  navbarList.classList.add("nav-list");

  logoText.innerHTML = "GOT.";
  logoTextSpan.innerHTML = "tj";

  logoText.append(logoTextSpan);
  logo.append(logoText);
  navbar.append(navbarList);
  navBox.append(logo, navbar);
  container.append(navBox);
  place.append(container);
}