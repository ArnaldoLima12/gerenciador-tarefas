const identifier = document.getElementById('identifier').value;
const containerToDO = document.getElementById('To Do');
const containerInProgress = document.getElementById('In Progress');
const containerPaused = document.getElementById('Paused');
const containerConcluded = document.getElementById('Concluded');


const loadData = () => {

    fetch(`/home/project/task-load/${identifier}`)
    .then(async response => {
        let data = await response.json();
        // console.log(data);
        renderTask(data);
    })
    .catch(error => console.log(error));
}


const renderTask = data =>
{   
    data.forEach( element => {
       
        switch(element.status)
        {
            case 'To Do':
                containerToDO.innerHTML += createElement(element, '#FCC8CD');
                break;
            case 'In Progress':
                containerInProgress.innerHTML += createElement(element, '#FFFFBA');
                break;
            case 'Paused':
                containerPaused.innerHTML += createElement(element, '#BAE1FF');
                break;
            case 'Concluded':
                containerConcluded.innerHTML += createElement(element, '#BAFFC9');
                break;
            }
    });
}


const createElement = (element, color) =>
{   
    let render = 
    `<div ondragstart="onDragStart(event)" style='background-color: ${color}' class='cursor-grab my-2 p-2' draggable='true' id='${element._id}'>
        <p class='font-bold'>${element.title}</p>
        <p class=''>${element.description}</p>
    </div>`;

    return render; 
}

loadData();
