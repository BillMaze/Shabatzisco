function dodajZadatak() {
  const unos = document.getElementById("taskInput");
  const tekst = unos.value;

  if (tekst === "") return;

  const li = document.createElement("li");
  li.textContent = tekst;

  // ✔ Efekat "završeno"
  li.onclick = () => {
    li.classList.toggle("zavrsen");
  };

  const dugme = document.createElement("button");
  dugme.textContent = "Obriši";
  dugme.onclick = () => li.remove();

  li.appendChild(dugme);
  document.getElementById("listaZadataka").appendChild(li);

  unos.value = "";
}

