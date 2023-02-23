const taskForm = document.createElement('form');
const taskFormTitle = document.createElement('h5');
taskFormTitle.innerText = 'ADD TASK';

const taskInputContainer = document.createElement('div');
const taskInputLabel = document.createElement('label');
const taskInput = document.createElement('input');
taskInputLabel.innerText = 'Name';
taskInput.type = 'text';
taskInput.placeholder = 'Enter the task';
const taskInputErrMsg = document.createElement('span'); ////
taskInputErrMsg.innerText = 'Add task!' ///////////////////////

const descriptInputContainer = document.createElement('div');
const descriptInputLabel = document.createElement('label');
const descriptInput = document.createElement('input');
descriptInputLabel.innerText = 'Description';
descriptInput.type = 'text';
descriptInput.placeholder = 'Add description (optionally)';

const btnAdd = document.createElement('button');
btnAdd.innerText = 'ADD';

document.body.append(taskForm);
taskForm.append(taskFormTitle, taskInputContainer, descriptInputContainer, btnAdd);

taskInputContainer.append(taskInputLabel, taskInput, taskInputErrMsg);
descriptInputContainer.append(descriptInputLabel, descriptInput);

taskForm.classList.add('form');
taskFormTitle.classList.add('form-title');

const inputContainers = [taskInputContainer, descriptInputContainer];
inputContainers.map(cont => cont.classList.add('input-container'));

const labels = [taskInputLabel, descriptInputLabel];
labels.map(label => label.classList.add('input-label'));

const inputs = [taskInput, descriptInput];
inputs.map(input => input.classList.add('field-input'));

taskInputErrMsg.classList.add('error-message');

btnAdd.classList.add('task-btn-submit', 'button');
