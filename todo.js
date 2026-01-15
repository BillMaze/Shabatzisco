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
    document.getElementById("listaZadataka").appendChild(li);

  unos.value = "";

  sacuvajZadatke();
}
function ucitajZadatke() {
  const podaci = JSON.parse(localStorage.getItem("zadaci")) || [];

  podaci.forEach(zadatak => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = zadatak.tekst;

    if (zadatak.zavrsen) {
      span.classList.add("zavrsen");
    }

    span.onclick = () => {
      span.classList.toggle("zavrsen");
      sacuvajZadatke(); // ažuriraj LS kad se klikne
    };

    const dugme = document.createElement("button");
    dugme.textContent = "Obriši";
    dugme.onclick = () => {
      li.remove();
      sacuvajZadatke(); // ažuriraj LS kad se obriše
    };

    li.appendChild(span);
    li.appendChild(dugme);
    document.getElementById("listaZadataka").appendChild(li);
  });
}

function sacuvajZadatke() {
  const sviLi = document.querySelectorAll("#listaZadataka li");
  const podaci = [];

  sviLi.forEach(li => {
    const tekst = li.querySelector("span").textContent;
    const zavrsen = li.querySelector("span").classList.contains("zavrsen");
    podaci.push({ tekst, zavrsen });
  });

  localStorage.setItem("zadaci", JSON.stringify(podaci));
}

}
ucitajZadatke();
