const newContacts = document.querySelector("#new-contacts");
const contactCard = document.querySelector("#contact-card");
const photo = document.querySelector("#photo");

function showContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Profile Photo
      photo.src = data[0].picture;
      contactCard.appendChild(photo);

      // Name
      const friendName = document.querySelector("#friend-name");
      const title = data[0].name.title;
      const firstNames = data[0].name.first;
      const familyNames = data[0].name.last;

      const allNames = title + " " + firstNames + " " + familyNames;
      friendName.innerText = allNames;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(friendName);

      // Profession
      const job = document.querySelector("#job");
      const jobOfPerson = data[0].title;
      job.innerText = jobOfPerson;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(job);

      // Mutual Connections
      const mutuals = document.querySelector("#mutuals");
      const mutualPeople = data[0].mutualConnections;

      const mutualsText = mutualPeople + " " + "mutual connections";
      mutuals.innerText = mutualsText;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(mutuals);

      //background
      const backgroundImage = data[0].backgroundImage;

      contactCard.style.backgroundImage = "url(" + backgroundImage + ")";

      //connect button
      const connectBtn = document.querySelector("#connect-btn");
      newContacts.appendChild(contactCard);
      contactCard.appendChild(connectBtn);
    });
}

showContacts();
