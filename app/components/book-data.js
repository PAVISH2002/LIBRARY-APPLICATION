import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BookDataComponent extends Component {
  @service LibraryData;

  @action
  pushTheObject() {
    this.LibraryData.listOfBooks.push({
      name: document.getElementById('bookName').value,
      copies: document.getElementById('count').value,
      author: document.getElementById('authorName').value,
      year: document.getElementById('year').value,
      category: document.getElementById('Category').value,
    });
  }
}
