const events = [
  { date: "June 6", title: "Enrollment", type: "Enrollment" },
  { date: "June 17", title: "Start of Classes", type: "Enrollment" },
  { date: "June-July", title: "BEIS Updating of School Profile", type: "Deadlines" },
];

const calendarDiv = document.getElementById("calendarEvents");
const importantList = document.getElementById("importantDates");

function loadEvents(filter = "all") {
  if (!calendarDiv) return;
  calendarDiv.innerHTML = "";

  events.forEach(e => {
    if (filter === "all" || e.type === filter) {
      const div = document.createElement("div");
      // keep the glass styling and add the category class (Enrollment/Deadlines/Exams)
      div.className = `glass card ${e.type}`;
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
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  if (!modal || !modalText) return;
  modal.style.display = "block";
  modalText.innerText = `${event.date} - ${event.title}`;
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

loadEvents();
