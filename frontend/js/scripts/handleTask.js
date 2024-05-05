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

    const drops = ['toDO','InProgress', 'Paused', 'Concluded'];

    if(drops.indexOf(dropzone.id) != -1)
    { 
      dropzone.appendChild(draggableElement);
      draggableElement.style.backgroundColor = nextColor;
      e.dataTransfer.clearData();
    }
    else
    {
      console.log(drops.indexOf(dropzone.id));
      console.log(dropzone.id);
      e.dataTransfer.clearData();
    }
}