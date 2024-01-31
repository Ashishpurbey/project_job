import bcrypt from 'bcryptjs'


const users=[
    {
        name: 'admin user',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'john doe',
        email: 'john@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name: 'jane user',
        email: 'jane@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: false
    }
]

export default users;