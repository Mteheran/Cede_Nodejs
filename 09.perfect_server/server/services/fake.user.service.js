class UserService {
    constructor() {
        this.users = [
            {
                id: 0,
                name: 'Nick',
                age: 38,
            },
            {
                id: 1,
                name: 'Ivan',
                age: 23,
            },
            {
                id: 2,
                name: 'Petr',
                age: 42,
            },
            {
                id: 3,
                name: 'Basil',
                age: 18,
            },
        ];
    }


    getAll() {
        return this.users;
    }

    getById(id) {
        const res = this.users.find(n => n.id == id);
        console.log(res);
        return res;
    }

    postUser(user) {
        user.id = this.users.length;
        this.users.push(user);

        return user;
    }

    deleteUser(id) {
        this.users = this.users.filter(n => n.id !== Number.parseInt(id, 10));
    }
}

const service = new UserService();

module.exports = service;
