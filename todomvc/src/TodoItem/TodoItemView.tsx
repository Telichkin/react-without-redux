import * as React from "react";
import BaseView from "../Base/BaseView";
import TodoItemModel from "./TodoItemModel";

export default class extends BaseView<TodoItemModel, {}> {
    render() { return (
        <li className={this.itemClass}>
            {this.model.isInEditableMode() ? this.editableTodoItem : this.staticTodoItem}
        </li>
    ); }

    private get itemClass() {
        const completed = this.model.isCompleted() ? "completed" : "";
        const editing = this.model.isInEditableMode() ? "editing" : "";
        return `${completed} ${editing}`
    }

    private get staticTodoItem() { return (
        <div className="view">
            <input 
                value="on"
                type="checkbox"
                className="toggle"
                checked={this.model.isCompleted()}
                onChange={() => this.model.switchStatus()}
            />
            <label onDoubleClick={() => this.model.turnOnEditableMode()}>{this.model.text}</label>
            <button className="destroy" onClick={() => this.model.remove()}/>
        </div>
    ); }

    private get editableTodoItem() { return (
        <input 
            type="text"
            className="edit"
            autoFocus={true}
            defaultValue={this.model.text}
            onKeyDown={(e: any) => {
                const enterPressed = e.which === 13;
                if (enterPressed) { this.model.edit(e.target.value); }
            }}
            onBlur={(e: any) => this.model.edit(e.target.value)}
        />
    ); }
}