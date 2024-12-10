class Book {
    //По умолчанию указываю, что книга доступна
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.status = "доступна";
    }
  }
  
  class Library {
    //Массив для хранения книг
    constructor() {
      this.books = []; 
    }
  
    //Функция добавления книги в библиотеку
    addBook(book) {
      this.books.push(book);
      console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    }
  
    //Функция поиска книги по isbn и замены статуса на взята, если она доступна
    borrowBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (book) {
        if (book.status === "доступна") {
          book.status = "взята";
          console.log(`Книга "${book.title}" успешно взята.`);
        } else {
          console.log(`Книга "${book.title}" уже взята.`);
        }
      } else {
        console.log("Книга с таким ISBN не найдена.");
      }
    }
  
    //Функция поиска книги по isbn и замены статуса на доступна, если она была взята
    returnBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (book) {
        if (book.status === "взята") {
          book.status = "доступна";
          console.log(`Книга "${book.title}" успешно возвращена.`);
        } else {
          console.log(`Книга "${book.title}" уже доступна в библиотеке.`);
        }
      } else {
        console.log("Книга с таким ISBN не найдена.");
      }
    }
    
    //Функция выводит список всех доступных книг
    listAvailableBooks() {
      const availableBooks = this.books.filter(book => book.status === "доступна");
      if (availableBooks.length > 0) {
        console.log("Доступные книги:");
        availableBooks.forEach(book => {
          console.log(`- "${book.title}" автора ${book.author} (ISBN: ${book.isbn})`);
        });
      } else {
        console.log("В данный момент нет доступных книг.");
      }
    }
  }
  
  //Пример использования
  const library = new Library();
  
  const book1 = new Book("Тихий Дон", "Михаил Шолохов", "9999999999");
  const book2 = new Book("Анна Каренина", "Лев Толстой", "4532643539");
  const book3 = new Book("Отцы и дети", "Иван Тургенев", "5467535843");
  
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  library.listAvailableBooks();
  
  library.borrowBook("5467535843");
  library.borrowBook("9999999999");
  
  library.listAvailableBooks();
  
  library.returnBook("9999999999");
  
  library.listAvailableBooks();