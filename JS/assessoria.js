const handlesubmit =  (Event) => {
    Event.preventDefault();

    //const assessoria = document.querySelector('input[name=data[assessoria]]').value;

    fetch('https://sheetdb.io/api/v1/rzyubi4ewa8ri');
}

document.querySelector('form').addEventListener('submit', handlesubmit);