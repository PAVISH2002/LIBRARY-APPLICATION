import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class UserDataComponent extends Component {
  @service LibraryData;

  @action
  pushTheObject() {
    this.LibraryData.listOfUsers.push({
      name: document.getElementById('userName').value,
      DOM: document.getElementById('DOB').value,
      phone_no: document.getElementById('phone').value,
      address: document.getElementById('address').value,
    });
  }
}
