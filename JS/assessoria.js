//const chamada =  (Event) => {
    //Event.preventDefault();

    //const assessoria = document.querySelector('input[name=data[assessoria]]').value;

    //fetch('https://sheetdb.io/api/v1/rzyubi4ewa8ri');
//}

//document.querySelector('form').addEventListener('submit', chamada);


Event.preventDefault();

fetch('https://sheetdb.io/api/v1/rzyubi4ewa8ri', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((result) => {
  // Handle the result
});

const chamada = (event) =>{
    event.preventDefault();

    fetch('https://sheetdb.io/api/v1/rzyubi4ewa8ri', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((result) => {
  // Handle the result
});
} 