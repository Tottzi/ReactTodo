import Todo from './Todo';

const Todos = ({ todos, dispatchTodo }) => (
    <div className='todos'>
      {todos.length > 0
        ? todos.map(todo => (
        <Todo key={todo.id} todo={todo}
        dispatchTodo={dispatchTodo} />))
        : <h3 style={{ textAlign: 'center' }}>There is no ToDo for today</h3>}
    </div>
);

export default Todos;
