import login from './login';

(function() {
	let titleSpan = document.createElement('span');
	titleSpan.innerHTML = 'Go Now, Now Go!!!!!!';

	document.getElementById('app').appendChild(titleSpan);

	console.log('app loaded, again, part duex!!!!');

	login.authenticate('admin', 'abc123');
})();