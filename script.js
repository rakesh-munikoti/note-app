function addNote() {
  let input = document.getElementById("noteInput");
  let li = document.createElement("li");

  // GET CURRENT TIME
  let now = new Date();
  let time = now.toLocaleTimeString();

  // ADD NOTE + TIME
  li.textContent = input.value + " (" + time + ")";

  // CLICK → TOGGLE COMPLETE
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // DOUBLE CLICK → DELETE
  li.ondblclick = function () {
    li.remove();
  };

  document.getElementById("notesList").appendChild(li);
  input.value = "";
}