import Service from '@ember/service';
import { A } from '@ember/array';

export default class LibraryDataService extends Service {
  listOfBooks = A([]);
  listOfUsers = A([]);
  cart = A([]);
  borrowedUsers = A([]);
  constructor() {
    super(...arguments);
    this.listOfBooks.push({
      name: 'One Piece',
      copies: 20,
      author: 'Echiro Oda',
      year: 1995,
      category: 'japanese manga',
    });
    this.listOfBooks.push({
      name: 'Dragon Ball',
      copies: 15,
      author: 'Akira Toriyama',
      year: 1986,
      category: 'japanese manga',
    });
    this.listOfBooks.push({
      name: 'Naruto',
      copies: 10,
      author: 'Kisimoto',
      year: 1999,
      category: 'japanese manga',
    });

    this.listOfUsers.push({
      name: 'Roronoa Zoro',
      DOM: '23/03/2002',
      phone_no: 8526312007,
      address: 'no:8, Vivekanandar Theru, Dubai kurukusandhu, Dubai',
    });
    this.listOfUsers.push({
      name: 'Vinsmoke Sanji',
      DOM: '12/01/2002',
      phone_no: 9360292709,
      address: 'no:8, Vivekanandar Theru, Dubai kurukusandhu, Dubai',
    });
  }
}
