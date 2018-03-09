import BaseModel from "../Base/BaseModel";
import TodoItemModel from "../TodoItem/TodoItemModel";

export default class extends BaseModel {
    private allItems: TodoItemModel[] = [];
    private mode: string = "all";

    constructor(items: string[]) {
        super();
        items.forEach((text: string) => this.addTodo(text));
    }

    addTodo(text: string) {
        this.allItems.push(new TodoItemModel(this.allItems.length, text, this));
        this.updateViews();
    }

    removeCompleted() {
        this.allItems = this.onlyActiveItems;
        this.updateViews();
    }

    get shownItems() {
        if (this.mode === "active") { return this.onlyActiveItems; }
        if (this.mode === "completed") { return this.onlyCompletedItems; }
        return this.allItems; 
    }

    get onlyActiveItems() {
        return this.allItems.filter((item: TodoItemModel) => item.isActive());
    }

    get onlyCompletedItems() {
        return this.allItems.filter((item: TodoItemModel) => item.isCompleted());
    }

    toggleAll() {
        const itemsToSwitch = this.onlyActiveItems.length === 0 ? this.allItems : this.onlyActiveItems;
        itemsToSwitch.forEach((item: TodoItemModel) => item.switchStatus())
        this.updateViews();
    }

    removeTodo(todo: TodoItemModel) {
        this.allItems = this.allItems.filter((item: TodoItemModel) => item !== todo);
        this.updateViews();
    }

    showAll() { this.mode = "all"; this.updateViews(); }

    showOnlyActive() { this.mode = "active"; this.updateViews(); }

    showOnlyCompleted() { this.mode = "completed"; this.updateViews(); }

    todoUpdated() { this.updateViews(); }
}