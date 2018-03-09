import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoListModel from './TodoList/TodoListModel';
import TodoListView from './TodoList/TodoListView';
import TodoListFooterView from './TodoList/TodoListFooterView';
import TodoListInputView from './TodoList/TodoListInputView';
import TodoListSwitchButtonView from './TodoList/TodoListSwitchButtonView';

const todoList = new TodoListModel(["Don't use Redux"]);

ReactDOM.render(
    <div>
        <header className="header">
            <h1>todos</h1>
            <TodoListInputView model={todoList}/>
        </header>
        <section className="main">
            <TodoListSwitchButtonView model={todoList}/>
            <TodoListView model={todoList}/>
            <TodoListFooterView model={todoList}/>
        </section>
    </div>,
    document.getElementById("root")
)
