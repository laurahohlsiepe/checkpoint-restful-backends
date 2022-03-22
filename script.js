newContacts = document.querySelector("#new-contacts");
contactCard = document.querySelector("#contact-card");

function showContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const photo = document.createElement("img");
      photo.src = data[0].picture;
      newContacts.appendChild(photo);

      const title = data[0].name.title;
      const firstNames = data[0].name.first;
      const familyNames = data[0].name.last;

      const allNames = title + " " + firstNames + " " + familyNames;

      contactCard.innerText = allNames;

      newContacts.appendChild(contactCard);
      contactCard.appendChild(allNames);

      console.log(allNames);
    });
}

showContacts();
