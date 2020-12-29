import { getActiveGroup, getAllTasks } from '../utils'
import Checklist from './Checklist'

export default class Task {
  constructor({ title, description, dueDate, priority, group = getActiveGroup() }) {
    this.title = String(title);
    this.description = String(description);
    this.dueDate = new Date(dueDate);
    this.priority = Number(priority);
    this.group = group;
  }

  save() {
    const tasks = getAllTasks();
    tasks[this.group] = tasks[this.group] || []
    tasks[this.group].push(this.getAsObject());
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getAsObject() {
    const { title, description, dueDate, priority, group } = this;
    return { title, description, dueDate, priority, group };
  }

}