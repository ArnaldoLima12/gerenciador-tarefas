const auth = (level = false) =>
{   
    return (req, res, next) => {
        
        if(!level)
        {
            userDefault(req, res, next);
        }
        else
        {   
            userAdmin(req, res, next);
        }
    }
}


const userDefault = (req, res, next) =>
{
    if(req.session && req.session.logged)
    {   
        return next();
    }
    else
    {  
        res.redirect('/');
    }
}

const userAdmin = (req, res, next) =>
{
    if(req.session && req.session.logged && req.session.userLogged.access)
    {
        return next()   
    }
    else
    {
        res.redirect('/home');
    }
}

module.exports = {auth};