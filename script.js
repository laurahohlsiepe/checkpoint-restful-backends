newContacts = document.querySelector("#new-contacts");

function showContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then(function (response) {
      response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
