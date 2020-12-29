import { createElement } from '../utils';

const menu = ['Deadline', 'Tasks'];

const Navbar = () => {
  const nav = createElement('nav', 'nav');
  menu.map(tab => {
    const link = createElement('a', 'nav-link active', tab);
    link.href = '#';
    link.id = tab.toLocaleLowerCase();
    nav.appendChild(link);
    return true;
  });
  document.getElementById('content').appendChild(nav);
};

export default Navbar;
