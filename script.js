function addNote() {
  let input = document.getElementById("noteInput");
  let li = document.createElement("li");

  li.textContent = input.value;

  document.getElementById("notesList").appendChild(li);
  input.value = "";
}