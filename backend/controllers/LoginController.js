exports.index = (req, res) =>
{
    res.render('home', {layout: 'master.html'});
}