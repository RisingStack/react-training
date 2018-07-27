const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const expressWs = require('express-ws')(app);

let todoId = 0;
let todos = [];
let socket;

app.use(cors());
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  const { filter } = req.query;
  if (!filter) {
    return res.send(todos);
  }
  const filteredTodos = todos.filter(todo => todo.title.indexOf(filter) !== -1);
  res.send(filteredTodos);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(todo => todo.id == req.params.id);
  res.send(todo);
});

app.post('/todos', (req, res) => {
  const todo = Object.assign({}, req.body, { id: todoId++ });
  todos.push(todo);
  res.send(todo);
  if (socket) {
    socket.send(JSON.stringify({ type: 'POST', data: todo }));
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.send({ id });
  if (socket) {
    socket.send(JSON.stringify({ type: 'DELETE', data: id }));
  }
});

app.ws('/', (ws, req) => {
  socket = ws;
});

app.listen(3005, () => console.log('Example app listening on port 3005!'));
