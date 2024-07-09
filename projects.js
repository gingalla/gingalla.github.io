const cardContainer = document.getElementById("card-container");

function createCard(title, link, content, img) {
  const card = document.createElement("div");
  card.classList.add("card");

  let cardTitle = document.createElement("a");
  cardTitle.setAttribute("href", link);
  cardTitle.innerHTML = title;

  if (link == "#") {
    cardTitle.setAttribute("class", "link_null");
  } else {
    cardTitle.setAttribute("class", "link_present");
  }

  const cardContent = document.createElement("p");
  cardContent.textContent = content;

  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", img);
  cardImg.setAttribute("height", "150px");
  cardImg.setAttribute("alt", "Project Image");

  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  card.appendChild(cardImg);

  return card;
}

// Hard code project descriptions
const card1 = createCard(
  "Undergraduate Thesis",
  "./thesis.html",
  "Automating User-Preferred Camera Placement for Scientific Visualization",
  "./assets/thesis_survey_screenshot.png"
);

const card2 = createCard(
  "FreedgeTracker",
  "#",
  "Refrigerator tracker built to aid non-profit Freedge in maintaining their system of fridges.",
  "./assets/freedge_tracker_gui.png"
);

const card3 = createCard(
  "Aneurysm Visualization",
  "#",
  "Graphics project practicing methods of interpolation in rasterization.",
  "./assets/aneurysm_visualization.gif"
);

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
