setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Rafi', 'Max', 'Caca']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lattitude: 0,
            longtitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        let sum = a + b;
        callback(sum);
    }, 2000);
}

add(6, 9, (sum) => {
    console.log('The sum is : ' + sum);
})
// console.log(data)

