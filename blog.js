function dodajPost() {
  const naslov = document.getElementById("naslov").value;
  const sadrzaj = document.getElementById("sadrzaj").value;

  if (naslov === "" || sadrzaj === "") return;

  const noviPost = {
    naslov,
    sadrzaj,
    vreme: new Date().toLocaleString()
  };

  // Učitaj sve postojeće postove iz localStorage
  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];
  postovi.unshift(noviPost); // dodaj novi na početak
  localStorage.setItem("postovi", JSON.stringify(postovi));

  // Očisti polja
  document.getElementById("naslov").value = "";
  document.getElementById("sadrzaj").value = "";

  prikaziPostove(); // osveži prikaz
}

function prikaziPostove() {
  const kontejner = document.getElementById("listaPostova");
  kontejner.innerHTML = "";

  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];

  postovi.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.naslov}</h3>
                     <p>${post.sadrzaj}</p>
                     <small>🕒 ${post.vreme}</small>
                     <hr />`;
    kontejner.appendChild(div);
  });
}

// Pozovi odmah kad se stranica učita
prikaziPostove();

