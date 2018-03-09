import * as React from "react";
import BaseView from "../Base/BaseView";
import TodoListModel from "./TodoListModel";

export default class extends BaseView<TodoListModel, {}> {
    render() { return (
        <input 
            type="text"
            className="new-todo" 
            placeholder="What needs to be done?"
            onKeyDown={(e: any) => {
                const enterPressed = e.which === 13;
                if (enterPressed) { 
                    this.model.addTodo(e.target.value);
                    e.target.value = "";
                }
            }}
        />
    ); }
}