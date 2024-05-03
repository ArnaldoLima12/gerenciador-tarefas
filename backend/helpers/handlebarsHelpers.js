const iguals = (a, b) => {
    
    return a === b
}

const date = () => {
    
    return new Date().toLocaleTimeString();
}

const formatDate = (datetime, format) => {
    
    if(datetime)
    {   

        if(format === 'long')
        {
            return datetime = new Date(datetime).toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric'});
        }
        else if(format === 'numeric')
        {
           return datetime = new Date(datetime).toLocaleDateString(undefined, {day: 'numeric', month: 'numeric', year: 'numeric'});
        }
        else
        {
            return datetime;
        }
    }
}

module.exports = {iguals, date, formatDate}