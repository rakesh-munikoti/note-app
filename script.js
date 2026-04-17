function addNote() {
  let input = document.getElementById("noteInput");
  let li = document.createElement("li");

  li.textContent = input.value;

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