console.log('ciao')

// variabili e listener
const gridContainer = document.querySelector('.grid')
const numeri = [];
let contatore = 0;
const button = document.getElementById('btn')
const gridWrapper = document.querySelector('.grid-wrapper')


const indexLevel = document.getElementById('level')

    indexLevel.addEventListener('click', function(){
        if (indexLevel.value == 1){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore10();
                
            })
        }

        if (indexLevel.value == 2  ){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore9 ();
                
            })
        }

        if(indexLevel.value == 3){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore7();
                
            })
        }
    })



    // funzione che mi rimuove il vecchio html
function remove(contentToRemove) {
    contentToRemove = gridContainer;
    gridContainer.innerHTML = ``
}

// funzioni che mi generano l'html

function generatore10 (){
    for (let i = 1; i <= 100; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 10)`;
        gridItem.style.height = `calc( 100% / 10)`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}

function generatore9 (){
    for (let i = 1; i <= 81; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 9 )`;
        gridItem.style.height = `calc( 100% / 9 )`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}

function generatore7 (){
    for (let i = 1; i <= 49; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 7)`;
        gridItem.style.height = `calc( 100% / 7)`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//funzione bombe x 10
const bombArray10 = [];
    do{
        const bombx10 = getRandomIntInclusive(1, 100);
        if (bombArray10.includes (bombx10) === false ) {
            bombArray10.push(bombx10);
        }


    } while (bombArray10.length < 100)

    console.log(...bombArray10);
    let eBombax10 = [...bombArray10];
    // console.log(...eBombax10)


  

// funzione bombe x 9
const bombArray9 = [];
     do{
        const bombx9 = getRandomIntInclusive(1, 81);
        if (bombArray9.includes (bombx9) === false ) {
            bombArray9.push(bombx9);
        }


    } while (bombArray9.length < 81)


    
    console.log(...bombArray9)



// funzione bombe x 7
const bombArray7 = [];
     do{
         const bombx7 = getRandomIntInclusive(1, 49);
        if (bombArray7.includes (bombx7) === false ) {
            bombArray7.push(bombx7);
        }


         } while (bombArray7.length < 49)

    console.log(...bombArray7)

