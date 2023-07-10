import { aboutAsideMenu, activityAsideMenu, contactAsideMenu, studyAsideMenu } from "./menu";


// Tabs
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

// About page
export function reloadLeftColumn(place) {
  place.innerHTML = ""

  let list = document.createElement("ul");
  for (const item of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = aboutAsideMenu[item];

    list.append(listItem);
    console.log(listItem);
  }
  
  list.classList.add("left-column-list");
  list.firstElementChild.classList.add("active");

  place.append(list);

  // Function
  listFunc(list);
}

// Activity page
export function reloadActivityPage(place) {
  place.innerHTML = ""

  let list = document.createElement("ul");
  for (const item of [0, 1, 2, 3, 4]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = activityAsideMenu[item];

    list.append(listItem);
  }

  list.classList.add("left-column-list");
  list.firstElementChild.classList.add("active");

  place.append(list);

  // Function
  listFunc(list);
}

// Management Structure
export function management(arr, place) {
  for (const member of arr) {
    let leadership = document.createElement('div')
    let leadershipImg = document.createElement('img')
    let leadershipTitle = document.createElement('div')
    let h4 = document.createElement('h4')
    let span = document.createElement('span')

    leadership.classList.add('leadership')
    leadershipImg.classList.add('leadership-img')
    leadershipTitle.classList.add('leadership-title')

    h4.innerHTML = member.duty
    span.innerHTML = member.status + ' ' + member.fullName
    leadershipImg.src = '/public/images/member/' + member.img + '.jpg'

    leadershipTitle.append(h4, span)
    leadership.append(leadershipImg, leadershipTitle)
    place.append(leadership)
  }
}

// Study
export function reloadStudyPage(place) {
  place.innerHTML = ""

  let list = document.createElement("ul");
  for (const item of [0, 1, 2, 3, 4]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = studyAsideMenu[item];

    list.append(listItem);
  }

  list.classList.add("left-column-list");
  list.firstElementChild.classList.add("active");

  place.append(list);

  // Function
  listFunc(list);
}

// Contact
export function reloadContactPage(place) {
  place.innerHTML = ""

  let list = document.createElement("ul");
  for (const item of [0, 1]) {
    let listItem = document.createElement("li");

    listItem.classList.add("left-column-item");

    listItem.innerHTML = contactAsideMenu[item];

    list.append(listItem);
  }

  list.classList.add("left-column-list");
  list.firstElementChild.classList.add("active");

  place.append(list);

  // Function
  listFunc(list);
}