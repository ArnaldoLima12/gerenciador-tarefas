
const validateAction = (response, redirect, req, res) =>
{
    if(response.status)
    {   
        req.session.messageSuccess = response.message;
        res.redirect(redirect);
    }
    else
    {
        req.session.messageErro = response.message;
        res.redirect(redirect);
    }
}

const response = (status, message) =>
{
    return {status, message}
}

const createToastMessage = (req, alternativeMessage) =>
{
    let info;

    if(req.session.messageSuccess)
    {
        info = {message: req.session.messageSuccess, type:'success'};
        req.session.messageSuccess = '';    
    }
    else if(alternativeMessage)
    {
        info = {message: alternativeMessage.message, type: alternativeMessage.type};
        alternativeMessage = '';
    }
    else 
    {
        info = {message: req.session.messageErro, type:'erro'};
        req.session.messageErro = '';
    }

    return info;
}

module.exports = {validateAction, response, createToastMessage}