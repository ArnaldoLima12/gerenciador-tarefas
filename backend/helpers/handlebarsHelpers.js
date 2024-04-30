const iguals = (a, b) =>
{
    return a === b
}

const date = () =>
{
    return new Date().toLocaleTimeString();
}

module.exports = {iguals, date}