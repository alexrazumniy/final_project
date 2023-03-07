import './styles/style.css'
import { loginConfig } from './components/formConfigs';
import { Input } from './components/Input';
import { Form } from './components/Form';
import { Auth } from './components/Auth';
import { api } from './components/API';
import { TaskBoard } from './components/TaskBoard';

const appContainer = document.getElementById('app-container');

const onLoginSuccess = async () => {
    console.log('HELLO!');
    appContainer.innerHTML = '';
    const user = await api.getSelf();
    renderAppLayout(user);
};

const auth = new Auth({
    appContainer,
    onLoginSuccess,
});

export const taskBoard = new TaskBoard({
    appContainer
});

const renderAppLayout = async (user) => {
    auth.user = user;
    auth.renderHeaderControls();
    taskBoard.renderLayout();

    const taskList = await api.getAllTasks();

    taskList.forEach((task) => taskBoard.addTask(task));    
};

const init = async () => {
    const isLoggedIn = api.isLoggedIn();
    if (isLoggedIn) {
        const user = await api.autoLogin();
        renderAppLayout(user);
    } else {
        auth.renderAuthForm();
    }
};

init();
