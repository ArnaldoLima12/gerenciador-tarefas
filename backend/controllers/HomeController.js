exports.index = (req, res) =>
{   
    let {name, email} = req.session.userLogged;
    res.send(`Bem-vindo ${name}`);
}