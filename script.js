const events = [
  { date: "May 11– June 6", title: "Enrollment Period", type: "Enrollment" },
  { date: "June 17", title: "Start of Classes", type: "Enrollment" },
  { date: "Oct 20–22", title: "-", type: "Exams" },
  { date: "March 30", title: "Clearance Deadline", type: "Deadlines" },
  { date: "Mar 10–12", title: "-", type: "Exams" },
  { date: "May 20–25", title: "-", type: "Exams" },
];

const calendarDiv = document.getElementById("calendarEvents");
const importantList = document.getElementById("importantDates");

function loadEvents(filter="all") {
  calendarDiv.innerHTML = "";
  importantList.innerHTML = "";

  events.forEach(e => {
    if(filter === "all" || e.type === filter) {

      // calendar
      let div = document.createElement("div");
      div.className = e.type;
      div.innerHTML = `<strong>${e.date}</strong> - ${e.title}`;
      div.onclick = () => openModal(e);
      calendarDiv.appendChild(div);

      // important list
      let li = document.createElement("li");
      li.innerHTML = `<strong>${e.date}</strong> - ${e.title}`;
      importantList.appendChild(li);
    }
  });
}

function filterEvents(type) {
  loadEvents(type);
}

function openModal(event) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalText").innerText =
    `${event.date} - ${event.title} (${event.type})`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

loadEvents();