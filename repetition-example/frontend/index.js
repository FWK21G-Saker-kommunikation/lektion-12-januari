/** Lägg till en todo
 * 1. När jag klickar på en knapp så hämta text från inputfält och spara
 *   i en variabel
 * 2. Gör ett fetch-anrop och skicka med texten från inputfältet till servern
 * 3. Hämta uppdaterad todo list från servern
 */

const buttonElem = document.querySelector('#add-button');
const inputElem = document.querySelector('#add-todo');

function showTodos(todoList) {
    const listElem = document.querySelector('#todos');
    listElem.innerHTML = '';

    for(let i = 0; i < todoList.length; i++) {
        const todoElem = document.createElement('li');
        todoElem.innerText = todoList[i].todo;

        listElem.append(todoElem);
    }
}

async function getTodos() {
    const response = await fetch('http://localhost:5000/api/todos');
    const data = await response.json();

    console.log(data);
    showTodos(data)
}

async function postTodo(newTodo) {
    const body = {
        todo: newTodo
    }

    const response = await fetch('http://localhost:5000/api/add-todo', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
    const data = await response.json();
    console.log(data);
    showTodos(data);
}

buttonElem.addEventListener('click', () => {
    const newTodo = inputElem.value;
    console.log(`Inputfält: ${newTodo}`);

    postTodo(newTodo)
});

getTodos();