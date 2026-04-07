const links = document.querySelectorAll(".sidebar a");
const title = document.getElementById("title");
const content = document.getElementById("content");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    links.forEach(l => l.classList.remove("active"));

    this.classList.add("active");

    const page = this.dataset.page;

    if (page === "home") {
      title.textContent = "Home";
      content.textContent = "Benvenuto nella nostra home page";
      document.title = "Home";
    }

    if (page === "about") {
      title.textContent = "Chi siamo";
      content.textContent = "Siamo un'azienda fantastica con un alto fatturato mondiale";
      document.title = "Chi siamo";
    }

    if (page === "services") {
      title.textContent = "Servizi";
      content.textContent = "Offriamo servizi di alta qualità e con un'alta recensione mondiale";
      document.title = "Servizi";
    }
  });
});