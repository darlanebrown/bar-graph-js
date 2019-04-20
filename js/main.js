

function eventClick (event) {
  var bar = event.toElement.id;
  if(bar == 'first-currency') {
    alert("1.13 EUR = 1 USD");
  } else if (bar == 'second-currency') {
    alert("1 USD = 1 USD");
  } else if (bar == 'third-currency') {
    alert("1 AUD = 0.722 USD");
  } else if (bar == 'fourth-currency') {
    alert("1 GBP = 1.31 USD");
  } else {
    alert("1 BRL R = 0.26 USD");
  }
}

var currencies = document.getElementsByClassName("currency");
for (var i = 0; i < currencies.length; i++) {

  var elem = currencies[i];   
    elem.addEventListener('click', eventClick);
 
 
    
    let state = {
         
        data: [],
    };

    function render() {
        let output = document.querySelector('#output');
        output.innerHTML = '';

        for (let gif of state.data) {
            let image = document.createElement('img');
            image.setAttribute('src', gif.images.preview_gif.url);
            output.appendChild(image);
            
      function doFetch() {
        let element = document.querySelector('#search');
        let searchTerm = element.value;
        fetch('https://api.exchangeratesapi.io/latest HTTP/1.1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                state.data = data.data;
                render();
            });
    }

let state = {
         
        data: [],
    };

    function render() {
        let output = document.querySelector('#output');
        output.innerHTML = '';

        for (let gif of state.data) {
            let image = document.createElement('img');
            image.setAttribute('src', gif.images.preview_gif.url);
            output.appendChild(image);
            console.log
        }
}};
}
 document.createElement{
  let chart = document.querySelector("#chart-location");
  let height = 70;
  let bar = document.createElement("div");
  bar.classList.add("Bar");
  bar.style.height = height + "%";
  chart.appendChild(bar);
  • developer.mozilla.
