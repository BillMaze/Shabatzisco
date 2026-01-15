function dodajPost() {
  const naslov = document.getElementById("naslov").value;
  const sadrzaj = document.getElementById("sadrzaj").value;

  if (naslov === "" || sadrzaj === "") return;

  const noviPost = {
    naslov,
    sadrzaj,
    vreme: new Date().toLocaleString()
  };

  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];
  postovi.unshift(noviPost);
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

    // ✅ Ovde se pravi i dugme OBRIŠI
    const dugme = document.createElement("button");
    dugme.textContent = "Obriši";
    dugme.onclick = () => obrisiPost(index);

    div.innerHTML = `
      <h3>${post.naslov}</h3>
      <p>${post.sadrzaj}</p>
      <small>🕒 ${post.vreme}</small>
    `;

    div.appendChild(dugme); // dodaj dugme
    div.appendChild(document.createElement("hr")); // razdvoj linijom

    kontejner.appendChild(div);
  });
}

function obrisiPost(index) {
  const postovi = JSON.parse(localStorage.getItem("postovi")) || [];
  postovi.splice(index, 1);
  localStorage.setItem("postovi", JSON.stringify(postovi));
  prikaziPostove();
}

prikaziPostove();
