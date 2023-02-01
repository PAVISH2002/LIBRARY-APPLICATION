import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LendbookSinglebookRoute extends Route {
  @service LibraryData;
  constructor() {
    super(...arguments);
    console.log('inside the singlebook route');
  }
  model(params) {
    console.log(params);
    let targetbook = this.LibraryData.listOfBooks.findIndex(
      (book) => book.name === params.name
    );
    return {
      index: targetbook,
      bookObject: this.LibraryData.listOfBooks[targetbook],
    };
  }
}
