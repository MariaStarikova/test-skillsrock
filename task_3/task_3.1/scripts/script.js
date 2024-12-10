function fetchRandomUsers() {
    const statusDiv = document.getElementById('status');
    const userList = document.getElementById('user-list');
    
    // Показываю состояние загрузки
    statusDiv.textContent = "Загрузка...";
    //Очищаю список перед загрузкой
    userList.innerHTML = ""; 

    //Использую метод fetch для получения данных с API 
    fetch('https://randomuser.me/api/?results=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            //Убираю сообщение о загрузке
            statusDiv.textContent = "";

            // Прохожусь по массиву с пользователями и вывожу их данные
            data.results.forEach(user => {
                const userItem = document.createElement('li');
                userItem.className = 'user-item';

                // Добавляю фотографию
                const img = document.createElement('img');
                img.src = user.picture.medium;
                img.alt = `${user.name.first} ${user.name.last}`;

                // Добавляю информацию о пользователе
                const userInfo = document.createElement('div');
                userInfo.innerHTML = `
                    <p>${user.name.first} ${user.name.last}</p>
                    <a href="mailto:${user.email}">${user.email}</a>
                `;

                userItem.appendChild(img);
                userItem.appendChild(userInfo);
                userList.appendChild(userItem);
            });
        })
        .catch(error => { //В блоке .catch обрабатываю ошибки, которые могут возникнуть
            statusDiv.textContent = "Не удалось загрузить пользователей";
            console.error('Ошибка при загрузке пользователей:', error);
        });
}

// Загружаю пользователей при загрузке страницы
window.onload = fetchRandomUsers;