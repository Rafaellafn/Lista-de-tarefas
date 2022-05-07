'use strict';

/* <label class="todo__item"> 
<input type="checkbox">
<div>teste de item 1</div>
<input type="button" value="X">
</label> */

const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML=`
        <input type="checkbox">
        <div>${tarefa}</div>
        <input type="button" value="X">  
    `
    document.getElementById('todoList').appendChild(item);
}