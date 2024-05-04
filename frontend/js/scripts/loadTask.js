const identifier = document.getElementById('identifier').value;
const containerToDO = document.getElementById('toDO');
const containerInProgress = document.getElementById('InProgress');
const containerPaused = document.getElementById('Paused');
const containerConcluded = document.getElementById('Concluded');


const loadData = () => {

    fetch(`/home/project/task-load/${identifier}`)
    .then(async response => {
        let data = await response.json();
        console.log(data);
        renderTask(data);
    })
    .catch(error => console.log(error));
}


const renderTask = data =>
{   
    data.forEach( element => {
       
        switch(element.status)
        {
            case 'To do':
                containerToDO.innerHTML += createElement(element, 'red');
                break;
            }

    });
}


const createElement = (element, color) =>
{   
    let render = 
    `<div class='bg-${color}-200 my-2 p-2' draggable='true'>
        <p class='font-bold'>${element.title}</p>
        <p class=''>${element.description}</p>
    </div>`;

    return render;
}

loadData();
