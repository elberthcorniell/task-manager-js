export default class Task {
    constructor({ title, description, dueDate, priority }) {
        this.title = String(title);
        this.description = String(description);
        this.dueDate = new Date(dueDate);
        this.priority = Number(priority);
    }
}