const data = [
    {
        title: "Card One",
        desc: "Reusable card component with image, title, description and button.",
        img: "https://picsum.photos/400/300?1"
    },
    {
        title: "Card Two",
        desc: "All cards maintain equal height using flexbox layout.",
        img: "https://picsum.photos/400/300?2"
    },
    {
        title: "Card Three",
        desc: "Fully responsive design suitable for mobile and desktop.",
        img: "https://picsum.photos/400/300?3"
    }
];

const cardsContainer = document.getElementById("cards");

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.img}" alt="Card Image">
        <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <button>Action</button>
        </div>
    `;

    cardsContainer.appendChild(card);
});

