import test from "ava";
import TodoListModel from "./build/TodoList/TodoListModel";

test("Add todo to list", t => {
    const todoList = new TodoListModel([]);

    todoList.addTodo("Write Test");
    t.is(todoList.shownItems.length, 1);
    t.is(todoList.shownItems[0].text, "Write Test");
});

test("Show all/active/completed", t => {
    const todoList = new TodoListModel(["Write Test", "Write More Tests"]);

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
    const todoList = new TodoListModel(["Write Test", "Write More Tests"]);

    todoList.shownItems[0].remove();
    t.is(todoList.shownItems[0].text, "Write More Tests");

    todoList.removeTodo(todoList.shownItems[0]);
    t.is(todoList.shownItems.length, 0);
});

test("Remove completed", t => {
    const todoList = new TodoListModel(["Write Test", "Write More Tests"]);

    todoList.shownItems[0].switchStatus();
    todoList.removeCompleted();
    t.is(todoList.shownItems.length, 1);
    t.is(todoList.shownItems[0].text, "Write More Tests");
});

test("Mark all as completed", t => {
    const todoList = new TodoListModel(["Write Test", "Write More Tests"]);
    
    todoList.toggleAll();
    todoList.showOnlyActive();
    t.is(todoList.shownItems.length, 0);

    todoList.toggleAll();
    t.is(todoList.shownItems.length, 2);

    todoList.shownItems[0].switchStatus();
    todoList.toggleAll();
    t.is(todoList.shownItems.length, 0);

    todoList.showOnlyCompleted();
    todoList.shownItems[0].switchStatus();
    todoList.toggleAll();
    t.is(todoList.shownItems.length, 2);
});