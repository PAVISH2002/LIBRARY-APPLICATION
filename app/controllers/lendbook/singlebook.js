import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LendbookSinglebookController extends Controller {
  @service LibraryData;
  @action
  bookselectfun() {
    this.LibraryData.listOfBooks[this.model.index].copies--;
    this.LibraryData.cart.pushObject(this.model.bookObject);
  }
}
