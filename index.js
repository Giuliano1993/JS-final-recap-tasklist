// data una lista di oggetti task, creae una todo list
// stampare la listta delle cose da fare, la desrczione e il tempo stimato di completamento
// aggiungere un bottone che permette di sitchare tra completo e non completo il singolo task ( i task devono essere sempre allineati con l'oggetto base non svale switchare la classe al click del bottone ;) )
// quando lo segno come completoe la scritta si deve sbarrare e la scritta suul bottone deve cambiare per permettere di segnarlo come incompleto
// in fondo alla lista creare un bottone che permette di stimare, dato un costo orario di 30 euro quanto dobbiamo essere pagati considerati i task fatti
// bonus: creaimo un filtro che ci mostra solo i task ancora da completare o tutti i task




// 1. Stampiamo gli element dell'array in pagina [ descrizione e tempo stimato ] 
// 2. creare il bottone che eseguirà lo swtich della proprietà done
// 3. sbarrare (o meno ) la scritta allo switch della propriteà
// 4. bottone per la stima del compenso 

const tasks = [
    {
        id: 1,
        description: "design page",
        done: false,
        estimatedTime: 150
    },
    {
        id: 2,
        description: "write html+css",
        done: false,
        estimatedTime: 240
    },
    {
        id: 3,
        description: "make it responsive",
        done: false,
        estimatedTime: 120
    },
    {
        id: 4,
        description: "add js interaction",
        done: false,
        estimatedTime: 270
    },
]

// 120 -> 2:00
// 150-> 2:30
const tasksContainer = document.getElementById('tasks')



drawList();




function formatTime(minutes){
    const ore = Math.floor(minutes / 60);
    const minuti = minutes % 60;
    return ore+':'+String(minuti).padStart(2,'0');
}


function drawList(){
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index)=>{
        const { id, description, done, estimatedTime} = task;
        // resta il dubbio per i minuti non a due cifre
        const oreString = formatTime(estimatedTime)
        tasksContainer.innerHTML += `<li>
            <span class="${ done ? 'done' : ''}">${description}</span> - ${oreString}
            <button class="doneBtn">
                Mark as done
            </button>
        </li>`
    
    })
    addButtonsListener()
    
}

function addButtonsListener(){

    const buttons = document.querySelectorAll('.doneBtn');
    buttons.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            console.log('ciao');
            const task = tasks[index];
            task.done = !task.done
            console.log(task)
            drawList();
            
        })
    })
}

const calcTotalBtn = document.getElementById('calcTotal');
calcTotalBtn.addEventListener('click',()=>{
    const payForHour = 30;
    let totHours = 0
    let totMinutes = 0
    let totAmount = 0
    tasks.forEach((task)=>{
        if(task.done){
            totMinutes += task.estimatedTime
        }
    })


    totHours = totMinutes/60;
    totAmount = totHours * payForHour;
    alert(`Il cliente ti deve ${totAmount} euro`)
})