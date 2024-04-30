exports.index = (req, res) =>
{   
    const {access} = req.session.userLogged;
    

    const options = {title: 'Home', erro: req.session.erro, access};
    res.render('home', options)
}

exports.logout = (req, res) =>
{
    req.session.destroy(() =>
    {
        res.redirect('/');
    });   
}