// this function is used to generate alphanumeric unique id
export default function generateUniqueID(len = 10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

console.log(generateUniqueID(64));