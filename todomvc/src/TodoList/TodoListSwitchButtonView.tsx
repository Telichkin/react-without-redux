import * as React from "react";
import BaseView from "../Base/BaseView";
import TodoListModel from "./TodoListModel";

export default class extends BaseView<TodoListModel, {}> {
    render() { return (
        <span>
            <input
                type="checkbox"
                value="on"
                className="toggle-all"
            />
            <label onClick={() => this.model.markAllAsCompleted()}/>
        </span>
    ); }
}