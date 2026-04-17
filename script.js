function addNote() {
  let input = document.getElementById("noteInput");
  let li = document.createElement("li");

  li.textContent = input.value;

  // SINGLE CLICK → EDIT
  li.onclick = function () {
    let newText = prompt("Edit your note:", li.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.textContent = newText;
    }
  };

  // DOUBLE CLICK → DELETE
  li.ondblclick = function () {
    li.remove();
  };

  document.getElementById("notesList").appendChild(li);
  input.value = "";
}