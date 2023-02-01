import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LendComponentOneComponent extends Component {
  selecteduser;
  @service LibraryData;
  @action
  userselectfun() {
    let allusers = document.getElementsByName('users');
    for (let i = 0; i < allusers.length; i++) {
      if (allusers[i].checked) {
        this.selecteduser = allusers[i];
        break;
      }
    }
    let targetuser = this.LibraryData.listOfUsers.find(
      (user) => user.name === this.selecteduser.value
    );
    targetuser.borrowedbooks = this.LibraryData.cart.slice();
    console.log(targetuser.borrowedbooks);
    this.LibraryData.borrowedUsers.push(targetuser);
    console.log(targetuser.borrowedbooks.length);
    this.LibraryData.cart.length = 0;
    console.log(targetuser.borrowedbooks.length);
  }
}
