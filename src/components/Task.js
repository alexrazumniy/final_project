// Форма для ввода таска

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




// Форма карточки таска

const taskCard = document.createElement('div');
const cardHeader = document.createElement('div');
const taskName = document.createElement('p');
taskName.innerText = 'Test task';
const closeBtn = document.createElement('p');
closeBtn.innerText = 'x';

const taskInfo = document.createElement('p');
taskInfo.innerText = 'Additional info';

const timerWrapper = document.createElement('div');
const startBtn = document.createElement('div');
const timeTracker = document.createElement('span');
timeTracker.innerText = 'timeTracked';

const creationData = document.createElement('p');
creationData.innerText = 'createdAt';

const btnDone = document.createElement('button');
btnDone.innerText = 'Mark as done';

document.body.append(taskCard);
cardHeader.append(taskName, closeBtn);
timerWrapper.append(startBtn, timeTracker);
taskCard.append(cardHeader, taskInfo, timerWrapper, creationData, btnDone)

taskCard.classList.add('task-card');
cardHeader.classList.add('task-card-header');
taskName.classList.add('task-name');
closeBtn.classList.add('close-btn');
taskInfo.classList.add('task-info');
timerWrapper.classList.add('timer-wrapper');
// startBtn.classList.add('play-btn');
startBtn.classList.add('pause-btn');
creationData.classList.add('creation-data');
btnDone.classList.add('btn-done', 'button');

