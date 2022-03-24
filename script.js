const newContacts = document.querySelector("#new-contacts");
// const contactCard = document.querySelector("#contact-card");
const photo = document.querySelector("#photo");
const allCards = document.querySelector("#all-cards");

for (let i = 0; i < 8; i++) {
  getUserData();
}

function getUserData() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      showContacts(data);
    });
}

function showContacts(data) {
  const littleCard = document.createElement("div");
  // Profile Photo
  const photo = document.createElement("img");
  photo.src = data[0].picture;
  photo.id = "photo";

  // Name
  const friendName = document.createElement("h2");
  friendName.id = "friend-name";

  const title = data[0].name.title;
  const firstNames = data[0].name.first;
  const familyNames = data[0].name.last;

  const allNames = title + " " + firstNames + " " + familyNames;
  friendName.innerText = allNames;

  // Profession
  const job = document.createElement("h3");
  const jobOfPerson = data[0].title;
  job.innerText = jobOfPerson;

  job.id = "job";

  // Mutual Connections
  const mutuals = document.createElement("p");
  const mutualPeople = data[0].mutualConnections;

  const mutualsText = mutualPeople + " " + "mutual connections";
  mutuals.innerText = mutualsText;

  //background
  const backgroundImage = data[0].backgroundImage;

  littleCard.style.backgroundImage = "url(" + backgroundImage + ")";

  //connect button
  const connectBtn = document.createElement("button");
  connectBtn.innerText = "Connect";
  connectBtn.id = "connect-button";

  console.log(littleCard);
  littleCard.id = "little-card";

  littleCard.append(photo, friendName, job, mutuals, connectBtn);
  allCards.appendChild(littleCard);
}
