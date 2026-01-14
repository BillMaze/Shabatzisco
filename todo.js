function dodajZadatak() {
  const unos = document.getElementById("taskInput");
  const tekst = unos.value;

  if (tekst === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = tekst;

  // Klik na tekst označava kao završeno
  span.onclick = () => {
    span.classList.toggle("zavrsen");
  };

  const dugme = document.createElement("button");
  dugme.textContent = "Obriši";
  dugme.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(dugme);
  document.getElementById("listaZadataka").appendChild(li);

  unos.value = "";
}
