import { Form } from './Form';
import { Input } from './Input';
import { taskConfig } from './formConfigs';
import { api } from './API';
import { Task } from './Task';

const getTaskForm = (onTaskCreated) => new Form({
    title: 'ADD TASK',
    inputs: taskConfig.map((input) => new Input(input)),
    submitBtnText: 'ADD',
    onSubmit: async (data) => {
        const createdTask = await api.createTask(data);
        onTaskCreated(createdTask);
    }
})

export class TaskBoard {
    constructor({ appContainer }) {
        this.appContainer = appContainer;
        this.taskForm = getTaskForm(this.addTask.bind(this));
        this.taskContainer = document.createElement('div');
    }

    renderLayout() {
        const board = document.createElement('div');
        const formContainer = document.createElement('div');

        board.classList.add('board');
        formContainer.classList.add('task-form');
        this.taskContainer.classList.add('task-cards');

        board.append(formContainer, this.taskContainer);
        this.taskForm.render(formContainer);

        this.appContainer.append(board);       
    }

    addTask(taskData) {
        const task = new Task(taskData);

        task.renderCard(this.taskContainer);
    }

    logout() {
        this.taskContainer.innerHTML = '';
    }
}
