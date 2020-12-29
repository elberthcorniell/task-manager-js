let tab = 1;
let state = {};

export const handleChange = (e) => {
  const { value, id } = e.target;
  state[id] = value;
  console.log(state);
};

export const createElement = (tag, className = '', content = '') => {
  if (tag === undefined) return false;
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = content;
  return element;
};

export const createModal = ({ callToAction, id, modalBody }) => {
  const button = createElement('button', 'btn btn-success', callToAction);
  button.type = 'button';
  const dataToggle = document.createAttribute("data-toggle");
  dataToggle.value = "modal";
  button.setAttributeNode(dataToggle);
  const dataTarget = document.createAttribute("data-target");
  dataTarget.value = `#${id}Modal`;
  button.setAttributeNode(dataTarget);

  modalBody = createElement('div', 'modal-body', modalBody);
  const modalHeader = createElement('div', 'modal-header', `
  <h5 class="modal-title" id="exampleModalLabel">${callToAction}</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  `);
  const modalContent = createElement('div', 'modal-content');
  const modalDialog = createElement('div', 'modal-dialog');

  const roleDialog = document.createAttribute("role");
  roleDialog.value = 'document';
  modalDialog.setAttributeNode(roleDialog);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent)

  const modal = createElement('div', 'modal fade', modalDialog.outerHTML);
  modal.id = `${id}Modal`;

  const tabindex = document.createAttribute("tabindex");
  tabindex.value = '-1';
  modal.setAttributeNode(tabindex);

  const role = document.createAttribute("role");
  role.value = `dialog`;
  modal.setAttributeNode(role);

  const ariaLabelledby = document.createAttribute("aria-labelledby");
  ariaLabelledby.value = "exampleModalLabel";
  modal.setAttributeNode(ariaLabelledby);

  const ariaHidden = document.createAttribute("aria-hidden");
  ariaHidden.value = 'true';
  modal.setAttributeNode(ariaHidden);

  document.getElementById('content').appendChild(modal)

  return button;
};

export const setTab = (newTab) => {
  tab = newTab;
};

export const getState = (newTab) => state;

export const getTab = () => tab;

export const getAllGroups = () => JSON.parse(localStorage.getItem('groups') || "[]");