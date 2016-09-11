class Login {
	construtor() {
	}

	authenticate(username, password) {
		if(username !== 'admin' || password !== 'abc123') {
			console.log('incorrect login, foo');
		}
		else {
			console.log('welcome admin!!!!');
		}
	}
}

let login = new Login();

export { login };