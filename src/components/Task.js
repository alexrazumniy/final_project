{/* <div class="task-card">
<div class="task-card-header">
    <p class="task-name">Test task</p>
    <p class="close-btn">x</p>
</div>
<p class="task-description">Additional info</p>
<div class="task-timer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="svg-play"
            d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z"
            fill="#0ca019" />
    </svg>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="svg-pause"
            d="M12 2C6.475 2 2 6.475 2 12 2 17.525 6.475 22 12 22 17.525 22 22 17.525 22 12 22 6.475 17.525 2 12 2ZM12 3C7.475 3 3 7.475 3 12 3 16.525 7.475 21 12 21 16.525 21 21 16.525 21 12 21 7.475 16.525 3 12 3ZM9 16 9 8C9 7 10 7 10 8L10 16C10 17 9 17 9 16ZM14 16 14 8C14 7 15 7 15 8L15 16C15 17 14 17 14 16Z"
            fill="#e01b1b" fill-rule="evenodd" />
    </svg> -->
    <span class="hours">00</span>: 
    timeTracked
    <span class="min">00</span>:
    <span class="sec">00</span>
</div>
<div class="task-created-data"> createdAt
    21/02/2023 00-00-00
</div>
<button class="btn-done button">Mark as done</button>
</div> */}

const taskCard = document.createElement('div');
const cardHeader = document.createElement('div');
cardHeader.innerText = 'ADD TASK';
const taskName = document.createElement('p');
taskName.innerText = 'taskName';
const closeBtn = document.createElement('p');
closeBtn.innerText = 'x';
const taskInfo = document.createElement('p');
taskInfo.innerText = 'taskInfo';
const timerWrapper = document.createElement('div');
const timeTracked = document.createElement('span');
timeTracked.innerText = 'timeTracked';
const createdAt = document.createElement('span');
createdAt.innerText = 'createdAt';
const btnDone = document.createElement('button');
btnDone.innerText = 'Mark as done';

document.body.append(taskCard);
taskCard.append(cardHeader, taskName, closeBtn, taskInfo, timerWrapper, timeTracked, createdAt, btnDone)

taskCard.classList.add('task-card');
cardHeader.classList.add('task-card-header');
taskName.classList.add('task-card-header');