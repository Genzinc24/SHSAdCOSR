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
