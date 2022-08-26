// import { inboxTaskArray, todayTaskArray, weekTaskArray, monthTaskArray } from "./task-array";

import { taskList_DOM } from "../index.js";

export default function renderTasks (taskArray) {
    let taskArray_deserialized = JSON.parse(taskArray);

    if (taskArray_deserialized == null) {
        return;
    } else {
        taskArray_deserialized.forEach((taskButton, index) => {
        const taskButton_DOM = document.createElement('button');
        const taskButtonLeftDiv_DOM = document.createElement('div');
        const taskCheckButton_DOM = document.createElement('div');
        const taskTitleH2_DOM = document.createElement('h2');
        const taskButtonRightDiv_DOM = document.createElement('div');
        const taskDateP_DOM = document.createElement('p');
        const taskDateInput_DOM = document.createElement('input');

        taskButton_DOM.classList.add('task-button');
        taskButtonLeftDiv_DOM.classList.add('task-button-left-div');
        taskCheckButton_DOM.classList.add('task-check-button');
        taskTitleH2_DOM.classList.add('task-title-h2');
        taskButtonRightDiv_DOM.classList.add('task-button-right-div');
        taskDateP_DOM.classList.add('task-date-p');
        taskDateInput_DOM.classList.add('task-date-input');

        taskButton_DOM.dataset['taskButton'] = '';
        taskButtonLeftDiv_DOM.dataset['taskButtonLeftDiv'] = '';
        taskCheckButton_DOM.dataset['taskCheckButton'] = '';
        taskTitleH2_DOM.dataset['taskTitleH2'] = '';
        taskButtonRightDiv_DOM.dataset['taskButtonRightDiv'] = '';
        taskDateP_DOM.dataset['taskDateP'] = '';
        taskDateInput_DOM.dataset['taskDateInput'] = '';

        taskDateInput_DOM.type = 'date';

        taskTitleH2_DOM.textContent = taskButton.taskTitle
        taskDateP_DOM.textContent = 'No Date';

        taskList_DOM.append(taskButton_DOM);
        taskButton_DOM.append(taskButtonLeftDiv_DOM, taskButtonRightDiv_DOM);
        taskButtonLeftDiv_DOM.append(taskCheckButton_DOM, taskTitleH2_DOM);
        taskButtonRightDiv_DOM.append(taskDateP_DOM, taskDateInput_DOM);
        })
    }
}