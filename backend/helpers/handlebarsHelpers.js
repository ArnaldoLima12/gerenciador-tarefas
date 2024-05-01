const iguals = (a, b) => {
    
    return a === b
}

const date = () => {
    
    return new Date().toLocaleTimeString();
}

const formatDate = datetime => {
    
    if(datetime)
    {   
        datetime = new Date(datetime).toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric'});
        return datetime;
    }
}
module.exports = {iguals, date, formatDate}