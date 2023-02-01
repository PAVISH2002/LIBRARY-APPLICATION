import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReturnbookRoute extends Route {
  @service LibraryData;
  model() {
    return this.LibraryData.borrowedUsers;
  }
}
