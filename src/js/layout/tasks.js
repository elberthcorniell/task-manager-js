import { createElement, getAllGroups, createModal, getState, getAllTasks, formatDate } from '../utils';

const Tasks = () => {
  const container = createElement('div', 'home');

  const fields = ['Title', 'Description', 'date', 'priority', 'submit'];
  const form = document.createElement('form');
  fields.map(item => {
    const input = createElement('input', undefined, item);
    input.type = item;
    input.placeholder = item;
    input.id = `${item}TaskField`
    form.appendChild(input);
    return true;
  });

  form.id = 'newTaskForm';

  const newGroup = createModal({ callToAction: 'New Task', id: 'newTask', modalBody: form.outerHTML });
  const row = createElement('div', 'row');
  const listItems = getAllTasks()[getState().group];

  listItems && listItems.map(item => {
    const cardBody = createElement('div', 'card-body');
    cardBody.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.description || ''}</p>
      <strong>Due date: ${formatDate(item.dueDate) || ''}</strong><br>
      <strong>Priority: ${item.priority || ''}</strong><br>
      <a href="?group=${item.title}"><strong>View group</strong></a>`;
    const card = createElement('div', 'card', cardBody.outerHTML);
    const listItem = createElement('div', 'col-3', card.outerHTML);
    row.appendChild(listItem);
    return true;
  });

  container.appendChild(newGroup);
  container.appendChild(row);

  document.getElementById('content').appendChild(container);
};

export default Tasks;
