class Calculator {
  constructor() {
    // В данном случае можно оставить конструктор пустым, так как не нужно инициализировать какие-либо свойства
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return 'Ошибка: деление на ноль!';
    }
    return a / b;
  }
}

//Создаю экземпляр класса Calculator
const calc = new Calculator();

//Демонстрирую использование методов
console.log('Сложение: 9 + 15 =', calc.add(9, 15));
console.log('Вычитание: 27 - 8 =', calc.subtract(27, 8));
console.log('Умножение: 45 * 6 =', calc.multiply(45, 6));
console.log('Деление: 21 / 7 =', calc.divide(21, 7));
console.log('Деление на ноль: 256 / 0 =', calc.divide(256, 0));
