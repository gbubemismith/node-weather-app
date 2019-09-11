const weatherForm = document.querySelector('form');

const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



 
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading ...';

    const location  = search.value;
    
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
            messageTwo.textContent = '';
        }
        else {
            messageOne.textContent =  data.location;
            messageTwo.textContent = data.forecast;
            console.log(data.location);
            console.log(data.forecast);
        }
        
    });
});


    console.log(location);
});