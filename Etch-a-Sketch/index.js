let x, clms, rws, grdelem, bttn;

clms = 16;


window.onload = function() {
    bttn = document.getElementById('bttn');
    console.log(bttn);
    bttn.addEventListener('click',handler);
}

function handler () {
    clms = prompt("Enter number of columns and rows");
    makeGrid(clms);
}

const makeGrid = (clms) => {
    rws = clms;
    x = document.getElementById('container');
    x.innerHTML = "";
    console.log(clms, rws);

    
    x.style.gridTemplateColumns =  `repeat(${clms}, 1fr)`;
    x.style.gridTemplateRows =  `repeat(${rws}, 1fr)`;
    
    for (let i=0;i<clms;i++){
        for (let j=0;j<rws;j++){
            let markup = `<div id="card ${(i+1)+","+(j+1)}" onmouseover="myEnterFunction(this)"
                                   style="grid-column: ${j+1}/span 1; 
                                        grid-row: $${i+1}/span 1;
                                        background-color: white;
                                        border: 0.1px black solid;
                                        justify-content: center;
                                        align-items: center;"></div>`;
            x.innerHTML+=markup;

        }
    }

};

function myEnterFunction(e){
    console.log(e.id);
    e.style.backgroundColor = "black";
}

