function addNote() {
  let input = document.getElementById("noteInput");
  let li = document.createElement("li");

  li.textContent = input.value;

  // NEW FEATURE
  li.onclick = function () {
    li.remove();
  };

  document.getElementById("notesList").appendChild(li);
  input.value = "";
}