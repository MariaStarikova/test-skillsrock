//Сначала нахожу все нужные мне элементы и выношу их в константы
const taskInput = document.querySelector('.task__input');
const taskButtonAdd = document.querySelector('.task__button');
const taskList = document.querySelector('.task-list');
const filterInputs = document.querySelectorAll('.filter__label');

//Вешаю обработчик событий на кнопку "Добавить", при нажатии на эту кнопку выполняется функция addTask
taskButtonAdd.addEventListener('click', addTask);

//Функция addTask создает новую задачу, если инпут содержит значение
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
    applyFilter();
  }
}

//Функция createTaskElement создает элемент, который нужно отрисовать на странице
function createTaskElement(text) {
  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.textContent = text;
  span.className = 'task__text';

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Завершить';
  toggleButton.className = 'task__toggle-btn';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.className = 'task__delete-btn';

  li.appendChild(span);
  li.appendChild(toggleButton);
  li.appendChild(deleteButton);

  toggleButton.addEventListener('click', toggleTask);
  deleteButton.addEventListener('click', deleteTask);

  return li;
}

//Функция toggleTask изменяет кнопку у задачи "Активировать" или "Завершить" на противоположную, соответственно меняет состояние задачи 
function toggleTask(event) {
    const taskItem = event.target.closest('li');
    taskItem.classList.toggle('completed');
    event.target.textContent = taskItem.classList.contains('completed') ? 'Активировать' : 'Завершить';
    applyFilter();
}

//Функция deleteTask удаляет задачу
function deleteTask(event) {
  event.stopPropagation();
  event.target.closest('li').remove();
}

//Далее прохожу по массиву из элементов с классом .filter__label методом массива forEach() для того, чтобы найти все label и добавить на него обработчик события. Если радиокнопка активна уже, снимается ее активность, убирая класс active и сбрасывая checked, если неактивна, то соответственно происходит наоборот и сбрасывается активность других кнопок.
filterInputs.forEach(label => {
  const radio = label.querySelector('.filter__button');

  label.addEventListener('click', () => {
    if (label.classList.contains('active')) {
      label.classList.remove('active');
      radio.checked = false;
    } else {
      filterInputs.forEach(lbl => {
        lbl.classList.remove('active');
        lbl.querySelector('.filter__button').checked = false;
      });

      label.classList.add('active');
      radio.checked = true;
    }
  });
});

//Функция applyFilter фильтрует задачи в соответствии с выбранным фильтром
function applyFilter() {
  const filterValue = document.querySelector('.filter__button:checked').value; 
  const tasks = taskList.querySelectorAll('.task'); 

  tasks.forEach(task => {
    const isCompleted = task.classList.contains('completed');

    if (filterValue === 'all') {
      task.style.display = ''; 
    } else if (filterValue === 'active') {
      task.style.display = isCompleted ? 'none' : ''; 
    } else if (filterValue === 'completed') {
      task.style.display = isCompleted ? '' : 'none'; 
    }
  });
}

//Добавляю обработчик событий для фильтров 
filterInputs.forEach(input => {
  input.addEventListener('change', applyFilter);
});
