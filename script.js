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
      const friendName = document.createElement("h2");
      const title = data[0].name.title;
      const firstNames = data[0].name.first;
      const familyNames = data[0].name.last;

      const allNames = title + " " + firstNames + " " + familyNames;
      friendName.innerText = allNames;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(friendName);

      // Profession
      const job = document.createElement("h3");
      const jobOfPerson = data[0].title;
      job.innerText = jobOfPerson;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(job);

      // Mutual Connections
      const mutuals = document.createElement("h3");
      const mutualPeople = data[0].mutualConnections;

      const mutualsText = mutualPeople + " " + "mutual connections";
      mutuals.innerText = mutualsText;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(mutuals);
    });
}

showContacts();
