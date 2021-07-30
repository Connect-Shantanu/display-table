let btnAdd = document.querySelector("button");
let table = document.querySelector("table");







let productInput = document.querySelector("#product")
let quantityInput = document.querySelector("#quantity")
let priceInput = document.querySelector("#product")
let datetimeInput = document.querySelector("#datetime")
let valueInput = document.querySelector("#value")



btnAdd.addEventListener ('click', () => {
    let product = productInput.value;
    let quantity = quantityInput.value;
    let price = priceInput.value;
    let datetime = datetimeInput.value;
    let value = valueInput.value;

    let template = `
         <tr>
            <td>${product}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${datetime}</td>
            <td>${value}</td>
         </tr>`

        getElementsByClassName("tabb");
        
    
});



