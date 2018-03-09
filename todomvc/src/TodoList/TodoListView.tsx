import * as React from "react";
import BaseView from "../Base/BaseView";
import TodoListModel from "./TodoListModel";
import TodoItemModel from "../TodoItem/TodoItemModel";
import TodoItemView from "../TodoItem/TodoItemView";

export default class extends BaseView<TodoListModel, {}> {
    render() { return (
        <ul className="todo-list">
            {this.model.shownItems.map((item: TodoItemModel) => <TodoItemView model={item} key={item.id}/>)}
        </ul>
    ); }
}