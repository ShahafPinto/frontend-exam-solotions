import './style.scss'
// keep the line above and write your code below.
document.addEventListener("DOMContentLoaded",()=>{
    main();
})

function main(){
    const table = document.querySelector('table');
    if (!table){return}

    buildTableHead(table);
}

function buildTableHead(_table:HTMLElement){
    const thead = document.createElement('thead');
    _table.appendChild(thead);
    const thDateCell = document.createElement('th');
    const thCurrencyCell = document.createElement('th');
    const thExchangeRateCell = document.createElement('th');
    thDateCell.innerText = 'date';
    thCurrencyCell.innerText ='currency';
    thExchangeRateCell.innerText ='exchange rate';
    thead.append(thDateCell,thCurrencyCell,thExchangeRateCell)
}