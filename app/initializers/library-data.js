import LibraryDataService from '@ember/service';
export function initialize(application) {
  application.inject('route', 'librarydata', 'service:library-data');
}

export default {
  name: LibraryDataService,
  initialize,
};
