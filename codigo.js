let events = []; // asigna
let arr = []; // Cargar informacion

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#bAdd");
const eventsContainer = document.querySelector("#eventsContainer");

const json = load();

try {
  arr = JSON.parse(json); // serialso guarda como objeto json
} catch (error) {
  arr = [];
}
events = arr ? [...arr] : [];

renderEvents();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); //permite saber si esta ejecutandose
  addEvent();
});

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault(); //permite saber si esta ejecutandose
  addEvent();
});

function addEvent() {
  if (eventName.value === "" || eventDate.value === "") {
    return; //acabe la function con return
  }

  if (dateDiff(eventDate.value) < 0) {
    return;
  }

  const newEvent = {
    id: (Math.random() * 100).toString(36).slice(3),
    name: eventName.value,
    date: eventDate.value,
  };

  events.unshift(newEvent); // Agrega un elemto al inicio del arreglo

  save(JSON.stringify(events));

  eventName.value = "";

  renderEvents();
}

function dateDiff(d) {
  // el numero de dias q falta
  const targetDate = new Date(d);
  const today = new Date();
  // devuelve el tiempo en un numero
  const difference = targetDate.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24)); // redondea entre dias
  return days;
}

function renderEvents() {
  const eventsHTML = events.map((event) => {
    return `
            <div class="event">
                <div class="days">
                    <span class="days-number">${dateDiff(event.date)}</span>
                    <span class="days-text">días</span>
                </div>

                <div class="event-name">${event.name}</div>
                <div class="event-date">${event.date}</div>
                <div class="actions">
                    <button class="bDelete" data-id="${
                      event.id
                    }">Eliminar</button>
                </div>
            </div>
        `;
  });
  eventsContainer.innerHTML = eventsHTML.join(""); // Une html con un string vacio
  document.querySelectorAll(".bDelete").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");
      events = events.filter((event) => event.id != id);

      save(JSON.stringify(events));

      renderEvents();
    });
  });
}

function save(data) {
  localStorage.setItem("item", data); // Guarda informacion en el navegador
}

function load() {
  return localStorage.getItem;
}
