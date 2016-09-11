import login from './login';

let titleSpan = document.createElement('span');
titleSpan.innerHTML = 'Go Now, Now Go!!!!!!';

document.getElementById('app').appendChild(titleSpan);

console.log('app loaded, again, part duex!!!!');

login('admin', 'dunno');