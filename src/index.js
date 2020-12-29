import { Group, Task, Checklist, Item } from './js/task'
import mountTab from './js/layout'
import { handleChange, getState } from './js/utils';

mountTab();

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
    mountTab()
})