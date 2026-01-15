function dodajZadatak() {
  const unos = document.getElementById("taskInput");
  const tekst = unos.value;

  if (tekst === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = tekst;

  span.onclick = () => {
    span.classList.toggle("zavrsen");
    sacuvajZadatke();
  };

  const dugme = document.createElement("button");
  dugme.textContent = "Obriši";
  dugme.onclick = () => {
    li.remove();
    sacuvajZadatke();
  };

  li.appendChild(span);
  li.appendChild(dugme);
  document.getElementById("listaZadataka").appendChild(li);

  unos.value = "";
  sacuvajZadatke();
}

function sacuvajZadatke() {
  const sviLi = document.querySelectorAll("#listaZadataka li");
  const podaci = [];

  sviLi.forEach(li => {
    const span = li.querySelector("span");
    const tekst = span.textContent;
    const zavrsen = span.classList.contains("zavrsen");
    podaci.push({ tekst, zavrsen });
  });

  localStorage.setItem("zadaci", JSON.stringify(podaci));
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
      sacuvajZadatke();
    };

    const dugme = document.createElement("button");
    dugme.textContent = "Obriši";
    dugme.onclick = () => {
      li.remove();
      sacuvajZadatke();
    };

    li.appendChild(span);
    li.appendChild(dugme);
    document.getElementById("listaZadataka").appendChild(li);
  });
}

// ⬅️ Ovo mora da bude NA KRAJU!
ucitajZadatke();
function filtriraj(tip) {
  const sviLi = document.querySelectorAll("#listaZadataka li");

  sviLi.forEach(li => {
    const span = li.querySelector("span");

    if (tip === "svi") {
      li.style.display = "flex";
    } else if (tip === "aktivni") {
      li.style.display = span.classList.contains("zavrsen") ? "none" : "flex";
    } else if (tip === "zavrseni") {
      li.style.display = span.classList.contains("zavrsen") ? "flex" : "none";
    }
  });
}function filtriraj(tip) {
  const sviLi = document.querySelectorAll("#listaZadataka li");

  sviLi.forEach(li => {
    const span = li.querySelector("span");

    if (tip === "svi") {
      li.style.display = "flex";
    } else if (tip === "aktivni") {
      li.style.display = span.classList.contains("zavrsen") ? "none" : "flex";
    } else if (tip === "zavrseni") {
      li.style.display = span.classList.contains("zavrsen") ? "flex" : "none";
    }
  });
}


