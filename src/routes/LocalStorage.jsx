export const usersData = [
    {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@doe.com',
        password: '123456',
        userID: 123456789,
        isAdmin: false,
        accountBalance: 0.00,
    },
    {
        firstName: 'stanley',
        lastName: 'hugo',
        email: 'stanley@hugo.com',
        password: '654321',
        userID: 987654321,
        isAdmin: true,
        accountBalance: 10000000.00,
    },
    {
        firstName: 'jorge',
        lastName: 'doe',
        email: 'jorge@doe.com',
        password: 'hahaha',
        userID: 700880000,
        isAdmin: false,
        accountBalance: 984321.00,
    },
    {
        firstName: 'jill',
        lastName: 'doe',
        email: 'jill@doe.com',
        password: 'iAmJill',
        userID: 111111111,
        isAdmin: false,
        accountBalance: 89.00,
    },
]

//Serialized and save to localStorage
localStorage.setItem('usersData', JSON.stringify(usersData))


//For simulating Admin access
export const simulateUserLogin = (email, password, isAdmin = false) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
};

// export function simulateUserLogin(email, password) {
//     const users = JSON.parse(localStorage.getItem('usersData'))
//     const user = users.find(user => user.email === email && user.password === password)

//     if (user) {
//         localStorage.setItem('isAdmin', JSON.stringify(user.isAdmin))

//         console.log(user.isAdmin ? 'Logged in as Admin' : 'Logged in as User')
//     } else {
//         console.log('Login failed: User not found or incorrect password')
//     }
// }



