console.log("connectd");
const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => displayBuddies(data));
};

loadBuddies();

const displayBuddies = (data) => {
  const buddies = data.results;
  console.log(buddies);
  const buddiesDiv = document.getElementById("buddies");
  for (const buddy of buddies) {
    console.log(
      `Name : ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last}`
    );
    console.log(`Email: ${buddy.email}`);
    console.log(`Gender: ${buddy.gender}`);
    console.log(`Country: ${buddy.location.country}`);
    console.log(`Phone: ${buddy.phone}`);
    console.log(`Age: ${buddy.registered.age}`);
    console.log(`Photo: ${buddy.picture.large}`);

    const buddyDiv = document.createElement("div");

    buddyDiv.innerHTML = `
        <div class="col">
          <div class="card h-100 text-center">
            <img  src="${buddy.picture.large}" class="card-img-top w-50 rounded-circle mx-auto d-block mt-3"  />
            <div class="card-body">
              <h5 class="card-title">Name : ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last}</h5>
              <h6 class="card-text">Gender: ${buddy.gender}</h6>
              <h6 class="card-text">Age: ${buddy.registered.age}</h6>
              <h6 class="card-text">Phone: ${buddy.phone}</h6>
              <h6 class="card-text">Email: ${buddy.email}</h6>
              <h6 class="card-text">Country: ${buddy.location.country}</h6>
            </div>
          </div>
        </div>
    `;
    buddiesDiv.appendChild(buddyDiv);
  }
};
