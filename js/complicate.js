let variable = prompt('Введите что пожелаете:');
    
function argument(){
    if(variable >=0 || variable <= 0 ){
        return('Вами передана не строка');
    } else {variable = variable.trim()} // команда .trim() убирает пробелы
    
    let variable2 = variable.slice(0, 30) + ' ...';
        return variable2;
}
argument(variable);
alert(argument());