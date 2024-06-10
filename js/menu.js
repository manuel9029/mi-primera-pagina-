const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})
document.addEventListener("DOMContentLoaded", function() {
    // Datos de ejemplo (se pueden cargar desde una API)
    const lugares = [
      { lugar: "Ciudad de México", problema: "Contaminación atmosférica" },
      { lugar: "Monterrey", problema: "Contaminación del agua" },
      { lugar: "Cancún", problema: "Destrucción de arrecifes de coral" }
    ];
  
    const tbody = document.querySelector("#lugares-table tbody");
  
    lugares.forEach(lugar => {
      const row = document.createElement("tr");
      const lugarCell = document.createElement("td");
      const problemaCell = document.createElement("td");
  
      lugarCell.textContent = lugar.lugar;
      problemaCell.textContent = lugar.problema;
  
      row.appendChild(lugarCell);
      row.appendChild(problemaCell);
  
      tbody.appendChild(row);
    });
  });