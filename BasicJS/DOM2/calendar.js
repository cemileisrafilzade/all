function createCalendar(elem, year, month){

    let date= new Date(year, month);
    let monthLength = new Date(year, month + 1 ,0).getDate();
    let day=date.getDay();

    let table=document.createElement("table");
    table.innerHTML=`
        <thead>
            <tr>
                <td> SU </td>
                <td> MO </td>
                <td> TU </td>
                <td> WE </td>
                <td> TH </td>
                <td> FR </td>
                <td> SA </td>
            </tr>
        </thead>
    `
    let countDay= -day + 1;
    let tbody=document.createElement("tbody");
    let weeksCount = (day + monthLength)/7; 
    for(let i=0; i<weeksCount;i++){
        let tr = document.createElement("tr");
        for(let j=0; j<7; j++){
            let td = document.createElement("td");
            if(countDay>0 && countDay<=monthLength){
                td.textContent=countDay;
            } 
            tr.appendChild(td);
            countDay++;

        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody)


    elem.appendChild(table);
}

createCalendar(document.body,2020,3);
