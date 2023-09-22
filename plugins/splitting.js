// plugins/splitting.js
import Splitting from 'splitting';

export default ({ app }, inject) => {
	// Inject the Splitting instance into the Vue app
	inject('splitting', Splitting);
};