import BaseModel from "../Base/BaseModel";
import TodoListModel from "../TodoList/TodoListModel";

export default class extends BaseModel {
    private editable: boolean = false;
    private completed: boolean = false;
    private todoList?: TodoListModel;
    id: number;
    text: string = "";

    constructor(id: number, text: string, todoList?: TodoListModel) {
        super();
        this.id = id;
        this.text = text;
        this.todoList = todoList;
    }

    switchStatus() { 
        if (this.isInEditableMode()) { return; }
        this.completed = !this.completed
        this.todoList ? this.todoList.todoUpdated() : this.updateViews();
     } 

    edit(newText: string) {
        if (!this.isInEditableMode()) { return; }
        if (newText === "") { this.remove(); return; }
        this.text = newText;
        this.turnOffEditableMode();
    } 

    isInEditableMode() { return this.editable; }    

    turnOnEditableMode() { this.editable = true; this.updateViews(); }

    turnOffEditableMode() { this.editable = false; this.updateViews(); }

    isActive() { return !this.completed; }

    isCompleted() { return this.completed; }

    remove() { this.todoList && this.todoList.removeTodo(this) }
}