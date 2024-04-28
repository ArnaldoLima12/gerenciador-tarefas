auth = (req, res, next) =>
{   
    console.log(req.session.logged);

    if(req.session && req.session.logged)
    {
        return next();
    }
    else
    {  
        res.redirect('/');
    }
}

module.exports = auth;