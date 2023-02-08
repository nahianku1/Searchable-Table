let rows = [...document.querySelectorAll("tbody tr")];
let searchbar = document.querySelector("input[type='search']");

searchbar.addEventListener("keyup", (e) => {
  let filter = e.target.value.toLowerCase();
  rows.forEach((row) => {
    let cells = [...row.cells];
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText.toLowerCase().indexOf(filter) > -1) {
        row.style.display = "";
        return;
      }
      row.style.display = "none";
    }
  });
});
