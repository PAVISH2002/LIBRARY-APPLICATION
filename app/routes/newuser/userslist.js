import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NewuserUserslistRoute extends Route {
  @service LibraryData;
  model() {
    return this.LibraryData.listOfUsers;
  }
}
