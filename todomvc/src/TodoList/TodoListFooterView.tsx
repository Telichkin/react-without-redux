import * as React from "react"
import BaseView from "../Base/BaseView";
import TodoListModel from "./TodoListModel";

export default class extends BaseView<TodoListModel, {}> {
    render() { 
        return (
            <footer className="footer">
                { this.todoCount }
                <ul className="filters">
                    <li>
                        <a className="selected" onClick={(e: any) => {
                            this.model.showAll();
                            this.markLinkAsSelected(e.target);
                        }}>
                            All
                        </a>
                    </li>
                    <li>
                        <a onClick={(e: any) => {
                            this.model.showOnlyActive();
                            this.markLinkAsSelected(e.target);
                        }}>
                            Active
                        </a>
                    </li>
                    <li>
                        <a onClick={(e: any) => {
                            this.model.showOnlyCompleted();
                            this.markLinkAsSelected(e.target);
                        }}>
                            Completed
                        </a>
                    </li>
                </ul>
                { this.removeCompletedButton }
            </footer>
        ); 
    }

    private get todoCount() {
        const count = this.model.onlyActiveItems.length;
        const description = count === 1 ? " item left" : " items left"
        return (
            <span className="todo-count">
                <strong>{ count || "No" }</strong>{ description }
            </span>
        ); 
    }

    private markLinkAsSelected(link: HTMLElement) {
        const alreadySelected = document.querySelector(".selected");
        alreadySelected && alreadySelected.classList.remove("selected");
        link.classList.add("selected");
    }

    private get removeCompletedButton() {
        if (this.model.onlyCompletedItems.length === 0) { return; }
        return (
            <button 
                className="clear-completed" 
                onClick={() => this.model.removeCompleted()}
            > 
                Clear completed
            </button>
        );
    }
}