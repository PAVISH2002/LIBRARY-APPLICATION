import Route from '@ember/routing/route';

export default class NewbookRoute extends Route {
  constructor() {
    super(...arguments);
    console.log(this);
    // console.log(this.librarydata);
  }
}
