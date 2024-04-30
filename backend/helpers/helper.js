
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

module.exports = {validateAction, response}