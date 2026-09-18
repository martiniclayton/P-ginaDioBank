const conta = {
    email: "clayton@dio.bank",
    password: '123456',
    name: 'Clayton Timoteo',
    balance: 2540,
    id: "1"
}

export const api = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(conta)
    }, 1000)
})