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
  res.send(todos);
});

app.post('/todo', (req, res) => {
  const todo = Object.assign({}, req.body, { id: todoId++ });
  todos.unshift(todo);
  res.send(todo);
  if (socket) {
    socket.send(JSON.stringify({ type: 'POST', data: todo }));
  }
});

app.delete('/todo/:id', (req, res) => {
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

app.listen(3000, () => console.log('Example app listening on port 3000!'));
