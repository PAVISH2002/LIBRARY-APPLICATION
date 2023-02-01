import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReturnbookSingleuserRoute extends Route {
  @service LibraryData;
  model(params) {
    let targetuser = this.LibraryData.borrowedUsers.findIndex(
      (user) => user.name === params.name
    );
    return {
      index: targetuser,
      userObj: this.LibraryData.borrowedUsers[targetuser],
    };
  }
}
