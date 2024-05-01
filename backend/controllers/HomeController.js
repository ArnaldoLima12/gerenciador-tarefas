const {validateAction, createToastMessage} = require('../helpers/helper');
const {findAllProjects} = require('../controllers/ProjectController');



exports.index = async (req, res) =>
{   
    let cards = await findAllProjects(req);
    let info = createToastMessage(req);
    
    if(cards.status !== undefined && !cards.status)
    {
        info = createToastMessage(req, {message: cards.message, type: false});
        cards = '';
    }

    const options = {
        
        title: 'Home',
        home: true, 
        info: info? info : '',
        cards
    }

    res.render('home', options)
}

exports.logout = (req, res) =>
{
    req.session.destroy(() =>
    {
        res.redirect('/');
    });   
}
