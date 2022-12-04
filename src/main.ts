import './style.scss'
// keep the line above and write your code below.
document.addEventListener("DOMContentLoaded",()=>{
    main();
})

async function main(){
    try{
        const url ='https://currency-ror1.vercel.app/api/currency';
        const response = await fetch(url);
        const data:Curr[] = await response.json();
        


        const table = document.querySelector('table');
        if (!table){return}

        buildTableHead(table); 
        
        data.forEach((curr) => {
            createTableRow(curr, table);          
        });
        
    }catch(error){
        console.log(error);
    }
    
}

interface Curr{
    rdate: number,
    curr: number
}

function createTableRow(_curr:Curr,_table:HTMLElement){
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    const CurrencyCell = document.createElement('td');
    const ExchangeCell = document.createElement('td');
    _table.appendChild(row);

    dateCell.innerText = String(_curr.rdate);
    CurrencyCell.innerText = String(_curr.curr);
    row.append(dateCell,CurrencyCell,ExchangeCell);
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