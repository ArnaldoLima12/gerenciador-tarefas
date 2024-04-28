exports.index = (req, res) =>
{   
    const options = {title: 'Home', erro: req.session.erro};
    res.render('home', options)
}

exports.logout = (req, res) =>
{
    req.session.destroy(() =>
    {
        res.redirect('/');
    });   
}