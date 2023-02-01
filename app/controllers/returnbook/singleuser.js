import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ReturnbookSingleuserController extends Controller {
  @service LibraryData;
  @action
  bookReturn() {
    let books = document.getElementsByName('books');
    for (let i = 0; i < books.length; i++) {
      if (books[i].checked) {
        let selectedBook = this.LibraryData.listOfBooks.find(
          (onebook) => onebook.name === books[i].value
        );
        selectedBook.copies++;
        this.LibraryData.borrowedUsers[this.model.index].borrowedbooks.removeAt(
          this.LibraryData.borrowedUsers[
            this.model.index
          ].borrowedbooks.findIndex(
            (oneBook) => oneBook.name === books[i].value
          )
        );
      }
      if (this.model.userObj.borrowedbooks.length === 0) {
        this.LibraryData.borrowedUsers.removeAt(
          this.LibraryData.borrowedUsers.findIndex(
            (oneUser) => oneUser.name === this.model.userObj.name
          )
        );
      }
    }
  }
}
