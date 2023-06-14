let header = document.querySelector(".header");
let leftColumn = document.querySelector(".left-column");
let rightColumn = document.querySelector(".right-column");
let rightColumnText = document.querySelectorAll(".right-column .right-column__inner-text");

let headerListArr = {
  0: "Дар бораи мо",
  1: "Фаъолиятхои мо",
  2: "Тахсилот",
  3: "Тамос",
};

let leftColumnArr = {
  0: "Дар бораи мо",
  1: "Ҳадафҳои мо",
  2: "Таърих",
  3: "Аъзошавӣ",
  4: "Филиалҳо",
  5: "Раёсати ҷамъият",
  6: "Комисияҳо",
  7: "Роҳбарият",
  8: "Шарикон",
};

function reloadHeader(obj, place) {
  let container = document.createElement("div");
  let navBox = document.createElement("div");
  let logo = document.createElement("div");
  let logoText = document.createElement("p");
  let logoTextSpan = document.createElement("span");
  let navbar = document.createElement("nav");
  let navbarList = document.createElement("ul");
  for (const item of [0, 1, 2, 3]) {
    let navbarItem = document.createElement("li");

    navbarItem.classList.add("nav-item");

    navbarItem.innerHTML = obj[item];

    navbarList.append(navbarItem);
  }
  container.classList.add("container");
  navBox.classList.add("nav-box");
  logo.classList.add("logo");
  logoText.classList.add("logo-text");
  navbar.classList.add("nav");
  navbarList.classList.add("nav-list");
  navbarList.firstElementChild.classList.add("active");

  logoText.innerHTML = "GOT.";
  logoTextSpan.innerHTML = "tj";

  logoText.append(logoTextSpan);
  logo.append(logoText);
  navbar.append(navbarList);
  navBox.append(logo, navbar);
  container.append(navBox);
  place.append(container);

  // Function
  let navbarItems = [...navbarList.children];
  navbarItems.forEach((item) => {
    item.onclick = () => {
      console.log(item);
      if (!item.classList.contains("active")) {
        navbarItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      }
    };
  });
}
reloadHeader(headerListArr, header);

function reloadLeftColumn(obj, place) {
  let list = document.createElement("ul");
  for (const item of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = obj[item];

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
reloadLeftColumn(leftColumnArr, leftColumn);

function reloadRightColumn(index) {
  let textItems = [...rightColumn.children];
  rightColumnText.forEach((item) => (item.style.display = "none"));
  rightColumnText[index].style.display = "block";
}

reloadRightColumn(0);
