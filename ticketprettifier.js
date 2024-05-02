
const Status = {
  PENDING: {
    label: "pendiente",
    bgColor: "#F5DAD2"
  },
  IN_PROGRESS: {
    label: "en progreso",
    bgColor: "#F8EDFF"
  },
  CLOSED: {
    label: "cerrado",
    bgColor: "#E5F9DB"
  },
  SOLVED: {
    label: "resuelto",
    bgColor: "#E5F9DB"
  },
  NEW: {
    label: "nuevo",
    bgColor: '#E0F4FF'
  },
  CANCELED: {
    label: "cancelado",
    bgColor: "#F5DAD2"
  },
  SUPPORT_RESPONSE: {
    label: "respuesta soporte",
    bgColor: "#FFF6BD"
  }
}

changeCellColor();
changeToDarkMode();

function changeToDarkMode() {
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#ddd";

  var filtersRow = document.getElementById("w5-filters");
  if (filtersRow) {
    filtersRow.style.display = "none";
  }

  let footerElements = document.querySelectorAll("footer");
  footerElements.forEach(function(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#dddddd";
  });

  let inputElements = document.querySelectorAll("input");
  inputElements.forEach(function(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#dddddd";
  });

  let headerNavElements = document.getElementsByClassName("header-navbar");
  for (let i = 0; i < headerNavElements.length; i++) {
    headerNavElements[i].style.backgroundColor = "#222222";
    headerNavElements[i].style.color = "#dddddd";
  }

  let cardBodyElements = document.getElementsByClassName("card-body");
  for (let i = 0; i < cardBodyElements.length; i++) {
    cardBodyElements[i].style.backgroundColor = "#222222";
    cardBodyElements[i].style.color = "#dddddd";
  }

  let cardHeaderElements = document.getElementsByClassName("card-header");
  for (let i = 0; i < cardHeaderElements.length; i++) {
    cardHeaderElements[i].style.backgroundColor = "#222222";
    cardHeaderElements[i].style.color = "#dddddd";
  }

  let tableHeadings = document.querySelectorAll("th");
  tableHeadings.forEach(function(element) {
    element.style.backgroundColor = "#222222";
    // element.style.color = "#dddddd";
  });
}

function changeCellColor() {
  console.log("entra a la funcion")
  let cells = document.querySelectorAll('table td');

  cells.forEach(function(cell) {
    let colSeq = cell.getAttribute('data-col-seq')
    var text = cell.innerText.toLowerCase();

    if(colSeq === "0") {
      var ticketID = text;

      // Crear el elemento de botón para el icono
      var copyButton = document.createElement('button');

      // Definir el texto y el estilo del botón
      copyButton.textContent = 'copy';
      copyButton.style.background = 'none';
      copyButton.style.border = 'none';
      copyButton.style.cursor = 'pointer';
      copyButton.style.color = 'white';

      copyButton.addEventListener('click', function() {
        var url = 'https://ticketmaker.azurewebsites.net/ticket/view?id=' + ticketID;

        var tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);

        tempInput.select();
        document.execCommand('copy');

        document.body.removeChild(tempInput);

      });

      cell.appendChild(copyButton);

    }
    
    if(colSeq === "3" || colSeq === "4") {
      if (text.includes(Status.SOLVED.label)) {
        // cell.style.backgroundColor = Status.SOLVED.bgColor;
        cell.innerText += ` 🚀`
      } else if (text.includes(Status.CLOSED.label)) {
        // cell.style.backgroundColor = Status.CLOSED.bgColor;
        cell.innerText += ` ✅`
      } else if(text.includes(Status.IN_PROGRESS.label)) {
        // cell.style.backgroundColor = Status.IN_PROGRESS.bgColor; 
        cell.innerText += ` 👩‍💻`
      } else if(text.includes(Status.NEW.label)) {
        cell.style.backgroundColor = Status.NEW.bgColor;
        cell.innerText += ` 🎯`;
      } else if(text.includes(Status.SUPPORT_RESPONSE.label)) {
        // cell.style.backgroundColor = Status.SUPPORT_RESPONSE.bgColor;
        cell.innerText = `Soporte 📩`;
      } else if(text.includes(Status.CANCELED.label)) {
        // cell.style.backgroundColor = Status.CANCELED.bgColor;
        cell.innerText += ` ❌`;
      } else if(text.includes(Status.PENDING.label)) {
        // cell.style.backgroundColor = Status.PENDING.bgColor;
        cell.innerText += ` 🤔`;
      }
    }

    cell.style.backgroundColor = "#222222";
    cell.style.color = "#dddddd";
    
    if(colSeq === "8") {
      if(text.includes("luis resendiz")) {
        cell.innerHTML = `
          <img src="https://avatars.githubusercontent.com/u/80994311?v=4" alt=${text} width="20px" height="20px" style="border-radius: 50%;"></img>
        ` + cell.innerHTML;
      }
    }
  });
}

// document.addEventListener('DOMContentLoaded', function () {
//   setInterval(changeCellColor, 1000); // Comprobar cada segundo si hay cambios en el DOM
// });