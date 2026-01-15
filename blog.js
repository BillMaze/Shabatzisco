// Globalna promenljiva za izmenu
let indeksZaIzmenu = null;

function dodajPost() {
  const naslov = document.getElementById("naslov").value;
  const sadrzaj = document.getElementById("sadrzaj").value;

  if (naslov === "" || sadrzaj === "") return;

  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];

  if (indeksZaIzmenu !== null) {
    postovi[indeksZaIzmenu].naslov = naslov;
    postovi[indeksZaIzmenu].sadrzaj = sadrzaj;
    postovi[indeksZaIzmenu].vreme = new Date().toLocaleString();
    indeksZaIzmenu = null;
  } else {
    const noviPost = {
      naslov,
      sadrzaj,
      vreme: new Date().toLocaleString()
    };
    postovi.unshift(noviPost);
  }

  localStorage.setItem("postovi", JSON.stringify(postovi));

  document.getElementById("naslov").value = "";
  document.getElementById("sadrzaj").value = "";

  prikaziPostove();
}

function prikaziPostove() {
  const kontejner = document.getElementById("listaPostova");
  kontejner.innerHTML = "";

  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];

  postovi.forEach((post, index) => {
    const div = document.createElement("div");

    // DUGME OBRIŠI
    const dugmeObrisi = document.createElement("button");
    dugmeObrisi.textContent = "Obriši";
    dugmeObrisi.onclick = () => obrisiPost(index);

    // DUGME IZMENI
    const dugmeIzmeni = document.createElement("button");
    dugmeIzmeni.textContent = "Izmeni";
    dugmeIzmeni.style.marginLeft = "8px";
    dugmeIzmeni.onclick = () => pripremiIzmenu(index);

    div.innerHTML = `
      <h3>${post.naslov}</h3>
      <p>${post.sadrzaj}</p>
      <small>🕒 ${post.vreme}</small>
    `;

    div.appendChild(dugmeObrisi);
    div.appendChild(dugmeIzmeni);
    div.appendChild(document.createElement("hr"));

    kontejner.appendChild(div);
  });
}

function obrisiPost(index) {
  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];
  postovi.splice(index, 1);
  localStorage.setItem("postovi", JSON.stringify(postovi));
  prikaziPostove();
}

function pripremiIzmenu(index) {
  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];
  const post = postovi[index];

  document.getElementById("naslov").value = post.naslov;
  document.getElementById("sadrzaj").value = post.sadrzaj;

  indeksZaIzmenu = index;
}

prikaziPostove();
function obrisiSve() {
  localStorage.removeItem("postovi"); // obriši sve
  indeksZaIzmenu = null;
  prikaziPostove(); // prikaži prazno
}
