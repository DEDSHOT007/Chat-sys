const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'subscriber1', password: 'sub123', role: 'subscriber' },
    { username: 'subscriber2', password: 'sub456', role: 'subscriber' }
];

function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user !== undefined;
}
