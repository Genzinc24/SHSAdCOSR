const events = [
  { date: "June 6", title: "Enrollment", type: "Enrollment" },
  { date: "June 17", title: "Start of Classes", type: "Enrollment" },
  { date: "June 7- July 15", title: "BEIS Updating of School Profile", type: "Deadlines" },
];

const calendarDiv = document.getElementById("calendarEvents");
const importantList = document.getElementById("importantDates");

function loadEvents(filter="all") {
  calendarDiv.innerHTML = "";

  events.forEach(e => {
    if (filter === "all" || e.type === filter) {

      let div = document.createElement("div");
      div.className = "glass";
      div.innerHTML = `<strong>${e.date}</strong> - ${e.title}`;
      div.onclick = () => openModal(e);

      calendarDiv.appendChild(div);
    }
  });
}

function filterEvents(type) {
  loadEvents(type);
}

function openModal(event) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalText").innerText =
    `${event.date} - ${event.title}`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

loadEvents();
