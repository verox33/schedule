const tg = window.Telegram.WebApp;
// const userName = tg.initDataUnsafe.user.first_name;

// const table = document.getElementById("table");

const tbody1 = document.querySelector("#Monday  > table > tbody");
const tbody2 = document.querySelector("#Tuesday > table > tbody");
const tbody3 = document.querySelector("#Wednesday > table > tbody");
const tbody4 = document.querySelector("#Thursday > table > tbody");

// const nametg = document.getElementById("nametg");
// nametg.textContent = `Hi, $(userName)`;

const button1 = document.getElementById('buttonadd1');
const button2 = document.getElementById('buttonadd2');
const button3 = document.getElementById('buttonadd3');
const button4 = document.getElementById('buttonadd4');


function addNewRow(index, tbody) {
    const newTR = document.createElement("tr");
    newTR.id = index;
    tbody.appendChild(newTR);

    const td01 = document.createElement("td");
    td01.textContent = index;
    newTR.appendChild(td01);

    const td02 = document.createElement("td");
    const input01 = document.createElement("input");
    input01.className = "CNinputs";
    input01.placeholder = "Время";
    td02.appendChild(input01);
    newTR.appendChild(td02);

    const td03 = document.createElement("td");
    const input02 = document.createElement("input");
    input02.className = "CNinputs";
    input02.placeholder = "Предмет";
    td02.appendChild(input02);
    newTR.appendChild(td03);

    const td04 = document.createElement("td");
    const button01 = document.createElement("button");
    button01.textContent = "Удалить";
    td04.appendChild(button01);
    newTR.appendChild(td04);
    const buttonsave = document.createElement("button")
    button01.addEventListener('click', () => {
        newTR.remove();
        const alltr = tbody.querySelectorAll("tr");
        let i = 0;
        while(i < alltr.length) {
            let currenttr = alltr[i];
            let firsttd = currenttr.querySelector("td");
            currenttr.id = i + 1;
            firsttd.textContent = i + 1;
            i++;
        }
    });
}


button1.addEventListener('click', () => {
    const alltr = tbody1.querySelectorAll("tr");
    if (alltr.length == 0) {
        addNewRow(1, tbody1);
        
    } else {
        addNewRow(+alltr[alltr.length-1].id + 1, tbody1);
    }
   
});

button2.addEventListener('click', () => {
    const alltr = tbody2.querySelectorAll("tr");
    if (alltr.length == 0) {
        addNewRow(1, tbody2);
        
    } else {
        addNewRow(+alltr[alltr.length-1].id + 1, tbody2);
    }
   
});

button3.addEventListener('click', () => {
    const alltr = tbody3.querySelectorAll("tr");
    if (alltr.length == 0) {
        addNewRow(1, tbody3);
        
    } else {
        addNewRow(+alltr[alltr.length-1].id + 1, tbody3);
    }
   
});

button4.addEventListener('click', () => {
    const alltr = tbody4.querySelectorAll("tr");
    if (alltr.length == 0) {
        addNewRow(1, tbody4);
        
    } else {
        addNewRow(+alltr[alltr.length-1].id + 1, tbody4);
    }
   
});

const buttonsave = document.createElement("button");
buttonsave.textContent = "Сохранить";
document.body.appendChild(buttonsave);


buttonsave.addEventListener("click", () => {
    const search1 = document.querySelectorAll("#Monday > table > tbody > tr > td > input");  // NodeList
    let data1 = [];
    for (let i = 0; i < search1.length; i++) {
        data1.push(search1[i].value);
    }

    data1 = JSON.stringify(data1);
    tg.sendData(data1);


    const search2 = document.querySelectorAll("#Tuesday > table > tbody > tr > td > input");  // NodeList
    let data2 = [];
    for (let i = 0; i < search2.length; i++) {
        data2.push(search2[i].value);
    }

    data2 = JSON.stringify(data2);
    tg.sendData(data2);


    const search3 = document.querySelectorAll("#Wednesday > table > tbody > tr > td > input");  // NodeList
    let data3 = [];
    for (let i = 0; i < search3.length; i++) {
        data3.push(search3[i].value);
    }

    data3 = JSON.stringify(data3);
    tg.sendData(data3);


    const search4 = document.querySelectorAll("#Thursday > table > tbody > tr > td > input");  // NodeList
    let data4 = [];
    for (let i = 0; i < search4.length; i++) {
        data3.push(search4[i].value);
    }

    data4 = JSON.stringify(data4);
    tg.sendData(data4);
});
