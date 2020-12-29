import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import Contact from './contact';
import { getTab, setTab } from '../utils';

const listen = () => {
  document.getElementById('deadline').addEventListener('click', () => { setTab(1); mountTab(); });
  document.getElementById('tasks').addEventListener('click', () => { setTab(2); mountTab(); });
};

const mountTab = () => {
  document.getElementById('content').innerHTML = '';
  Navbar();
  listen();
  switch (getTab()) {
    case 1:
      Home();
      break;
    case 2:
      Menu();
      break;
    case 3:
      Contact();
      break;
    default:
      Home();
  }
};

export default mountTab;
