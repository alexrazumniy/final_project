import { api } from "./API";

export class Task {
    constructor({
        name,
        description,
        timeTracked,
        isActive,
        isFinished,
        _id,
        createdAt,
    }) {
        this.name = name;
        this.description = description;
        this.timeTracked = timeTracked;
        this.isActive = isActive;
        this.isFinished = isFinished;
        this.createdAt = new Date(createdAt);

        this.id = _id;

        this.taskCard = document.createElement('div');
        this.deleteBtn = document.createElement('button');
        this.timerBtn = document.createElement('button');
        this.timeTrackedElement = document.createElement('span');
        this.markAsDoneBtn = document.createElement('button');
        this.timeTrackedIntervalId = null;
    }

    renderCard(container) {
        const titleElem = document.createElement('h3');
        const descriptionElem = document.createElement('p');
        const timeTracker = document.createElement('div');
        const dateElem = document.createElement('p');

        titleElem.classList.add('task-title');
        descriptionElem.classList.add('task-description')
        timeTracker.classList.add('time-tracker');
        dateElem.classList.add('task-date');

        this.taskCard.classList.add('task-card');
        this.deleteBtn.classList.add('task-delete-btn');
        this.timerBtn.classList.add('timer-btn');
        this.markAsDoneBtn.classList.add('mark-as-done-btn', 'button');

        if (this.isFinished) {
            this.timerBtn.setAttribute('disabled', '');
            this.taskCard.classList.add('task-finished');
            this.markAsDoneBtn.innerText = 'Restart';
        } else {
            this.timerBtn.classList.add('timer-play-btn');
            this.markAsDoneBtn.innerText = 'Mark as done';
        }

        titleElem.innerText = this.name;
        descriptionElem.innerText = this.description;

        dateElem.innerText = Task.getFormattedDate(this.createdAt);
        this.timeTrackedElement.innerText = Task.getFormattedTimeTracked(this.timeTracked);

        this.deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

        if (this.isActive) {
            this.startTracker();
            this.timerBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        } else {
            this.timerBtn.innerHTML = `<i class="fas fa-play"></i>`;
        }

        timeTracker.append(this.timerBtn, this.timeTrackedElement);

        this.taskCard.append(
            titleElem,
            descriptionElem,
            timeTracker,
            dateElem,
            this.markAsDoneBtn,
            this.deleteBtn,
        );

        container.append(this.taskCard);

        this.timerBtn.addEventListener('click', this.toggleTimeTracker);
        this.deleteBtn.addEventListener('click', this.removeTaskCard);
        this.markAsDoneBtn.addEventListener('click', this.toggleTaskFinished);
    };

    removeTaskCard = async () => {
        await api.deleteTask(this.id);
        this.taskCard.remove();
    };

    toggleTaskFinished = async () => {
        this.isFinished = !this.isFinished;

        await api.editTask(this.id, { isFinished: this.isFinished });

        this.taskCard.classList.toggle('task-finished');

        if (this.isFinished) {
            this.timerBtn.setAttribute('disabled', '');
            this.markAsDoneBtn.innerText = 'Restart';
            this.stopTracker();
            this.markAsDoneBtn.addEventListener('click', this.restartTracker); // Меняем назначение кнопки на Рестарт
        } else {
            this.timerBtn.removeAttribute('disabled');
            this.timerBtn.classList.add('timer-play-btn');
            this.markAsDoneBtn.innerText = 'Mark as done';            
        }
    };

    toggleTimeTracker = async () => {
        this.isActive = !this.isActive;

        await api.editTask(this.id, { isActive: this.isActive });

        if (this.isActive) {
            this.startTracker();
        } else {
            this.stopTracker();
        }
    };

    restartTracker = async () => {
        this.timeTracked = 0;
        this.updateTimeTracker();
        this.isActive = false;
        this.isFinished = false;
        clearInterval(this.timeTrackedIntervalId);

        await api.editTask(this.id, { isActive: this.isActive });
        await api.editTask(this.id, { isFinished: this.isFinished });
        await api.editTask(this.id, { timeTracked: this.timeTracked });
    }

    startTracker() {
        this.timerBtn.classList.remove('timer-play-btn');
        this.timerBtn.classList.add('timer-stop-btn');
        this.timerBtn.innerHTML = `<i class="fas fa-pause"></i>`;

        this.timeTrackedIntervalId = setInterval(() => {
            this.timeTracked += 1000;
            this.updateTimeTracker();
        }, 1000)
    };

    stopTracker() {
        this.timerBtn.classList.add('timer-play-btn');
        this.timerBtn.classList.remove('timer-stop-btn');
        this.timerBtn.innerHTML = `<i class="fas fa-play"></i>`;
        clearInterval(this.timeTrackedIntervalId);
    };

    updateTimeTracker() {
        const formatted = Task.getFormattedTimeTracked(this.timeTracked);
        this.timeTrackedElement.innerText = formatted;
    };

    static getFormattedDate(createdAt) {
        const date = createdAt.toLocaleDateString();
        const time = createdAt.toLocaleTimeString();

        return `${date} ${time}`
    }

    static addOptionalZero(value) {
        return value > 9 ? value : `0${value}`;
    }

    static getFormattedTimeTracked(timeTracked) {
        const timeTrackedSeconds = Math.floor(timeTracked / 1000);
        const hours = Math.floor(timeTrackedSeconds / 3600);
        const minutes = Math.floor((timeTrackedSeconds - hours * 3600) / 60);
        const seconds = timeTrackedSeconds - hours * 3600 - minutes * 60;

        return `${this.addOptionalZero(hours)}:${this.addOptionalZero(minutes)}:${this.addOptionalZero(seconds)}`;
    }
}