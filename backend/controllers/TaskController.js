exports.index = (req, res) =>
{   
    const options = {title: 'Tarefas'}
    res.render('task', options)
}