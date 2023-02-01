import EmberRouter from '@ember/routing/router';
import config from 'library-application/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('newbook', function () {
    this.route('bookslist');
  });
  this.route('newuser', function () {
    this.route('userslist');
  });
  this.route('lendbook', function () {
    this.route('index', { path: '/' });
    this.route('singlebook', { path: '/singlebook/:name' });
  });
  this.route('returnbook', function () {
    this.route('index', { path: '/' });
    this.route('singleuser', { path: '/singleuser/:name' });
  });
});
