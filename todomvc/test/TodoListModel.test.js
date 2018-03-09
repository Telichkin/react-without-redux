import test from "ava";
import TodoListModel from "./build/TodoList/TodoListModel";

const newTodoList = () => {
    const todoList = new TodoListModel([]);
    todoList.addTodo("Write Test");
    return todoList;
}

test("Add todo to list", t => {
    const todoList = newTodoList();
    t.is(todoList.shownItems.length, 1);
    t.is(todoList.shownItems[0].text, "Write Test");
});

test("Show all/active/completed", t => {
    const todoList = newTodoList();
    todoList.addTodo("Write More Tests");

    todoList.showOnlyCompleted();
    t.is(todoList.shownItems.length, 0);

    todoList.showOnlyActive();
    t.is(todoList.shownItems.length, 2);

    todoList.shownItems[0].switchStatus();
    t.is(todoList.shownItems.length, 1);

    todoList.showOnlyCompleted();
    t.is(todoList.shownItems.length, 1);

    todoList.showAll();
    t.is(todoList.shownItems.length, 2);
});

test("Remove todo", t => {
    const todoList = newTodoList();
    todoList.addTodo("Write More Tests");

    todoList.shownItems[0].remove();
    t.is(todoList.shownItems[0].text, "Write More Tests");

    todoList.removeTodo(todoList.shownItems[0]);
    t.is(todoList.shownItems.length, 0);
});