exports.index = (req, res) =>
{   
    const options = {title: 'Equipes'}
    res.render('team', options)
}