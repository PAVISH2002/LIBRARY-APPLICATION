import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NewbookBookslistRoute extends Route {
  @service LibraryData;
  model() {
    return this.LibraryData.listOfBooks;
  }
}
