const express = require('express');
const app = express();

app.use(express.static('../frontend'));
app.use(express.json());

let todos = [
    { todo: 'Köp kaffe' },
    { todo: 'Brygg kaffe' },
    { todo: 'Drick kaffe' }
];

app.get('/api/todos', (request, response) => {
    response.json(todos);
});

app.post('/api/add-todo', (request, response) => {
    const newTodo = request.body;
    console.log(`Body: ${JSON.stringify(newTodo)}`);
    todos.push(newTodo);
    response.json(todos);
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
});