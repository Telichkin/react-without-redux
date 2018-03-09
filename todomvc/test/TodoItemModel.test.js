import test from "ava";
import TodoItemModel from "./build/TodoItem/TodoItemModel";

class View {
    constructor() { this.numberOfUpdates = 0 }
    setState(s) { this.numberOfUpdates += 1 }
}

const newTodoWithView = () => {
    const todo = newTodo();
    const view = new View();
    todo.subscribe(view);
    return { todo: todo, view: view };
}

const newTodo = () => new TodoItemModel(0, "Buy Meat");

test("New todo is active and isn't in editable mode", t => {
    const todo = newTodo();
    t.true(todo.isActive());
    t.false(todo.isInEditableMode());
});

test("Switch status from active to completed", t => {
    const todo = newTodo();
    todo.switchStatus();
    t.true(todo.isCompleted());
    t.false(todo.isActive());
});

test("Turn on/off editable mode", t => {
    const todo = newTodo();
    todo.turnOnEditableMode();
    t.true(todo.isInEditableMode());

    todo.turnOffEditableMode();
    t.false(todo.isInEditableMode());
});

test("Can edit only in editable mode", t => {
    const todo = newTodo();
    todo.edit("Buy Milk");
    t.is(todo.text, "Buy Meat");
    
    todo.turnOnEditableMode();
    todo.edit("Buy Milk");
    t.is(todo.text, "Buy Milk");
    t.false(todo.isInEditableMode());
})

test("Can not switch status in editable mode", t => {
    const todo = newTodo();
    todo.turnOnEditableMode();
    todo.switchStatus();
    t.true(todo.isActive());
});

test("Update view after switch", t => {
    const { todo, view } = newTodoWithView();

    todo.switchStatus();
    t.is(view.numberOfUpdates, 2)
});

test("Update view after turn on/off editable mode", t => {
    const { todo, view } = newTodoWithView();

    todo.turnOnEditableMode();
    t.is(view.numberOfUpdates, 2);

    todo.turnOffEditableMode();
    t.is(view.numberOfUpdates, 3);
});

test("Update view after edit", t => {
    const { todo, view } = newTodoWithView();

    todo.turnOnEditableMode();
    todo.edit("Buy Water");
    t.is(view.numberOfUpdates, 3);
});
