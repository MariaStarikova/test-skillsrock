function debounce(func, delay) {
  //Создаю переменную для хранения идентификатора таймера
  let timeout;

  return function (...args) {
    //Очищаю предыдущий таймер, если функция была вызвана до истечения задержки
    clearTimeout(timeout);

    //Устанавливаю новый таймер
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//Пример использования:
const debouncedFunction = debounce(() => {
  console.log('Вызвана функция с задержкой');
}, 2000);

console.log('Первый вызов');
debouncedFunction(); //Эта функция будет вызвана через 2 секунды

console.log('Второй вызов');
debouncedFunction(); //Этот вызов сбросит таймер и предотвратит мгновенный вызов

console.log('Ожидание...');
debouncedFunction(); //Таймер снова сбрасывается и функция будет вызвана через 2 секунды после последнего вызова
