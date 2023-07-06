import { headerListArr, headerListLink, leftColumnArr } from "./menu";

export function reloadHeader(place) {
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

export function reloadLeftColumn(place) {
  let list = document.createElement("ul");
  for (const item of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = leftColumnArr[item];

    list.append(listItem);
  }

  list.classList.add("left-column-list");
  list.firstElementChild.classList.add("active");

  place.append(list);

  // Function
  listFunc(list);
}

function listFunc(list) {
  let listItems = [...list.children];
  listItems.forEach((item, index) => {
    item.onclick = () => {
      if (!item.classList.contains("active")) {
        listItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        reloadRightColumn(index);
      }
    };
  });
}

let container = document.querySelectorAll('.container')

export function reloadRightColumn(index) {
  container.forEach(item => item.style.display = 'none')
  container[index].style.display = 'block'
}