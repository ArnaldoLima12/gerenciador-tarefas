const onDragStart = e =>
{  
  e.dataTransfer.setData('text/plain', e.target.id);
}

const onDragOver = (e) =>
{
  e.preventDefault();
}

const onDrop = (e, nextColor) =>
{
    const id = e
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    const drops = ['To Do','In Progress', 'Paused', 'Concluded'];

    if(drops.indexOf(dropzone.id) != -1)
    { 
      dropzone.appendChild(draggableElement);
      draggableElement.style.backgroundColor = nextColor;
      e.dataTransfer.clearData();

      resave(drops[drops.indexOf(dropzone.id)], draggableElement.id);
    }
    else
    {
      e.dataTransfer.clearData();
    }
}

const resave = (status, taskId) =>
{ 

  fetch('/home/project/task-resave', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({status, taskId})
  })
}