let login = (username, password) => {
	if(username !== 'admin' || password !== 'abc123') {
		console.log('incorrect login, foo');
	}
};

module.exports = login;