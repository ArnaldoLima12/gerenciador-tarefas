const onDragStart = e =>
{  
   
        e
          .dataTransfer
          .setData('text/plain', e.target.id);
      
        e
          .currentTarget
          .style
          .backgroundColor = 'yellow';
      
}

const onDragOver = (e, nextColor) =>
{
    e.preventDefault();
}

const onDrop = e =>
{
    const id = e
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    console.log('Elemento: ',draggableElement);
    console.log('dropzone: ',dropzone.id);

    const drops = ['toDo','InProgess', 'Paused', 'Concluded']
    // if(dropzone.id != id)
    // {
    //     dropzone.appendChild(draggableElement);
    //     e
    //     .dataTransfer
    //     .clearData();
    // }
   
}