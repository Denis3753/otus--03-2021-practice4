
function kolobok(value){
    value = value.toLowerCase();
    switch(value){
        case 'дедушка':  return 'Я от дедушки ушел';
        case 'бабушка':  return ('Я от бабушки ушел');
        case 'заяц':  return ('Я от зайца ушел');
        case 'волк': return ('Я от волка ушёл');
        case 'лиса': return ('Лиса его — гам! — и съела');
        default:
            return ('Колобок-колобок');
    }
}


function newYear(value){
    if(value == 'Дед Мороз' || value == 'Снегурочка'){
        return `${value}!${value}!${value}!`;
    }
}

console.log('Снегурочка!Снегурочка!Снегурочка!'.length);

module.exports = {kolobok, newYear};