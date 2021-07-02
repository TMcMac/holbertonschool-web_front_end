let globalVariable = 'Welcome'
function outer() {
    
    alert(globalVariable);
    
    let course = 'Holberton';
    
    function inner() {
        alert(globalVariable + ' ' + course);
        let exclaimation = '!';

        function inception() {
            alert(globalVariable + ' ' + course + exclaimation);
        }
        inception();
    }
    inner();
}
outer();