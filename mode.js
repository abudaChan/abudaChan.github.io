let lightmode = localStorage.getItem('light-mode');
const mode = document.getElementById('mode');

const enablelightmode = () => {
    document.body.classList.add('lightmode'); 
    localStorage.setItem('light-mode', 'active');
};

const disablelightmode = () => {
    document.body.classList.remove('lightmode'); 
    localStorage.setItem('light-mode', 'null');
};

if (lightmode === 'active') {
    enablelightmode();
}

mode.addEventListener('click', () => {
    lightmode = localStorage.getItem('light-mode');
    lightmode !== 'active' ? enablelightmode() : disablelightmode();
});


function searchCard() {
  const cardName = document.getElementById("card-name").value.trim();

  if (!cardName) {
    alert("Please enter a card name.");
    return;
  }

  const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Card not found.");
      return response.json();
    })
    .then((data) => displayCard(data))
    .catch((error) => {
      console.error(error);
      alert("Card not found or an error occurred.");
    });
}

// Function to display the card data
function displayCard(data) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previous search results

  data.data.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    cardElement.innerHTML = `
      <img src="${card.card_images[0].image_url}" alt="${card.name}">
      <div class="card-info">
        <h3>${card.name}</h3>
        <p><strong>Type:</strong> ${card.type}</p>
        <p><strong>Level:</strong> ${card.level || "N/A"}</p>
        <p><strong>Attribute:</strong> ${card.attribute || "N/A"}</p>
        <p><strong>ATK/DEF:</strong> ${card.atk || "N/A"} / ${card.def || "N/A"}</p>
        <p>${card.desc}</p>
      </div>
    `;

    cardContainer.appendChild(cardElement);
  });
}
