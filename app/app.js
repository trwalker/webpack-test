import {login} from './login';
import css from './app.scss';

(function() {
	let titleSpan = document.createElement('h1');
	titleSpan.innerHTML = 'Go Now, Now Go!!!!!!';

	document.getElementById('app').appendChild(titleSpan);

	console.log('app loaded, again, part duex!!!!');

	login.authenticate('admin', 'abc123');
})();