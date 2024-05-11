const identifier = document.getElementById('identifier').value
const containerToDO = document.getElementById('To Do')
const containerInProgress = document.getElementById('In Progress')
const containerPaused = document.getElementById('Paused')
const containerConcluded = document.getElementById('Concluded')

const loadData = async () => {
  containerToDO.innerHTML = ''
  containerInProgress.innerHTML = ''
  containerPaused.innerHTML = ''
  containerConcluded.innerHTML = ''

  fetch(`/home/project/task-load/${identifier}`)
    .then(async response => {
      let data = await response.json()
      await renderTask(data)
    })
    .catch(error => console.log(error))
}

const renderTask = async data => {
  let task = await data

  task.forEach(element => {
    switch (element.status) {
      case 'To Do':
        containerToDO.innerHTML += createElement(element, '#FCC8CD')
        break
      case 'In Progress':
        containerInProgress.innerHTML += createElement(element, '#FFFFBA')
        break
      case 'Paused':
        containerPaused.innerHTML += createElement(element, '#BAE1FF')
        break
      case 'Concluded':
        containerConcluded.innerHTML += createElement(element, '#BAFFC9')
        break
    }
  })

  addEventButtonDelete()
}

const createElement = (element, color) => {
  const { _id, title, description, responsibles } = element;
  const responsiblesNames = responsibles
    .map(responsible => responsible.name)
    .join(', ')

  let render = `<div ondragstart="onDragStart(event)" style='background-color: ${color}' class='cursor-grab my-2 p-2 rounded-sm' draggable='true' id='${_id}'>
        <p class='font-bold italic flex justify-between'>${title}
        <button class='btn buttonClearTask' value=${_id}><i class="bi bi-trash"></i></button></p>
        <p class='text-sm'>${description}</p>
        <p class='mt-1 text-xs'>Responsaveis: ${responsiblesNames}</p>
        
    </div>`

  return render
}

const addEventButtonDelete = () => {
  let buttons = document.querySelectorAll('.buttonClearTask')
  console.log(buttons)

  buttons.forEach(button => {
    button.addEventListener('click', () => clear(button.value, 'task'))
  })
}

loadData()
