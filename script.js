document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("container");
      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item.image;
        card.appendChild(img);

        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        card.appendChild(link);

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
