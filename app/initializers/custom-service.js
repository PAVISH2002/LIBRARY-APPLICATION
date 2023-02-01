export function initialize(application ) {
  application.inject('route', 'LibraryData', 'service:LibraryData');
}

export default {
  initialize,
};
