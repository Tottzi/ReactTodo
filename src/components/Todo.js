import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ todo, dispatchTodo }) => {
  const toggleTodoButton = todo.isActive ? 'todo__btn' : 'todo__btn todo__btn--done';
  const toggleTodoIcon = todo.isActive ? 'todo__btn__icon' : 'todo__btn__icon todo__btn__icon--done';
  const toggleTodoText = todo.isActive ? 'todo__article__text__title' : 'todo__article__text__title todo__article__text--done';
  const toggleTodoDesc = todo.isActive ? 'todo__article__text' : 'todo__article__text todo__article__text--done';
  const toggleTodoArticle = todo.isActive ? 'todo__article' : 'todo__article todo__article--done';
  const toggleTodo = todo.isActive ? 'todo' : 'todo todo--done';

  const onClickArticle = () => {
    dispatchTodo({ type: 'CHANGE_STATUS', todo });
  };

  const onClickBtn = e => {
    const targetClassDone = /done/.test(e.target.className);
    if (targetClassDone) {
      return dispatchTodo({ type: 'DEL_TODO', todo });
    }
    return onClickArticle();
  };

  const onClickIcon = () => dispatchTodo({ type: 'DEL_TODO', todo });

  return (
    <section className={toggleTodo}>
      <article className={toggleTodoArticle} onClick={onClickArticle}>
        <h3 className={toggleTodoText}>{todo.title}</h3>
        <p className={toggleTodoDesc}>{todo.desc}</p>
      </article>
      <button
        className={toggleTodoButton}
        onClick={onClickBtn}>
        <FaTrashAlt
        className={toggleTodoIcon}
        onClick={onClickIcon}/>
      </button>
    </section>
  );
};

export default Todo;
