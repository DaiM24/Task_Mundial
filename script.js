/*Crear una lista con todo lo aprendido. Elijan un equipo no clasificado y si el usuario introduce ese equipo que un alert nos diga nombre no válido.
Cada vez que carguemos un equipo vaciar el input.*/
let input = document.querySelector('input')
let ul = document.querySelector('ul')

function addTeam(){
    let li = document.createElement('li')
    let content = document.createTextNode(input.value)
    if(input.value === 'Chile' || input.value === 'chile' || input.value === 'CHILE'){
        alert('😥 \n Te quedaste afuera del mundial')
        li = ''
        input.value = ''
    }
    else if(input.value === ''){
        alert('❌ \n Oops no escribiste nada! ')
    }
    else{
        li.appendChild(content)
        ul.appendChild(li)
        input.value = ''
    }
}