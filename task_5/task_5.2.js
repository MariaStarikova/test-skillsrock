function deepClone(obj) {
  //Использую встроенный в javascript метод structuredClone, который выполняет глубокое клонирование объекта
  return structuredClone(obj);
}

//Пример использования
const original = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';

console.log(original.address.city); //New York
console.log(copy.address.city); //Los Angeles
