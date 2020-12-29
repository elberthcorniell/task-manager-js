import { Group, Task, Checklist, Item } from './js/task'
import mountTab from './js/layout'
import { handleChange, getState, getTab } from './js/utils';

mountTab();

switch (getTab()) {
  case 1:
  default:
    const newGroup = document.getElementById('newGroupForm');
    const { childNodes: groupFields } = newGroup
    for (const i in groupFields) {
      groupFields[i].localName == 'input' && groupFields[i].addEventListener('input', handleChange);
    }

    newGroup.addEventListener('submit', (e) => {
      e.preventDefault();
      const { TitleGroupField: title, DescriptionGroupField: description } = getState();
      const group = new Group({ title, description });
      group.save();
      window.location.reload()
    })
    break;

  case 2:
    const newTask = document.getElementById('newTaskForm');
    const { childNodes: taskFields } = newTask
    for (const i in taskFields) {
      taskFields[i].localName == 'input' && taskFields[i].addEventListener('input', handleChange);
    }

    newTask.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('lok')
      const {
        TitleTaskField: title,
        DescriptionTaskField: description,
        dateTaskField: dueDate,
        priorityTaskField: priority,
      } = getState();
      const task = new Task({ title, description, dueDate, priority });
      task.save();
      window.location.reload() 
    })
    break;
}
