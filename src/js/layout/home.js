import Group from '../task/Group';
import { createElement, getAllGroups, createModal, handleChange } from '../utils';

const Home = () => {
  const container = createElement('div', 'home');

  const fields = ['Title', 'Description', 'submit'];
  const list = document.createElement('form');
  fields.map(item => {
    const listItem = createElement('input', undefined, item);
    listItem.type = item;
    listItem.placeholder = item;
    listItem.id = `${item}GroupField`
    list.appendChild(listItem);
    return true;
  });

  list.id = 'newGroupForm';

  const newGroup = createModal({ callToAction: 'New Group', id: 'newGroup', modalBody: list.outerHTML });
  const row = createElement('div', 'row');
  const listItems = getAllGroups();

  listItems.map(item => {
    const cardBody = createElement('div', 'card-body');
    cardBody.innerHTML = `<strong>${item.title}</strong>`;
    const card = createElement('div', 'card', cardBody.outerHTML);
    const listItem = createElement('div', 'col-3', card.outerHTML);
    row.appendChild(listItem);
    return true;
  });

  container.appendChild(newGroup);
  container.appendChild(row);

  document.getElementById('content').appendChild(container);
};

export default Home;
