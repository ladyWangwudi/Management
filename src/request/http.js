import Http from './index.js'


export async function login(val) {
    const data = await Http({
        url: '/login',
        method: 'POST',
        data: {
            username: val.username,
            password: val.password
        }
    });
    console.log(data);
    return data
}