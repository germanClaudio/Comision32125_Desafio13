
const calculo = () => {
    let obj = {}
    let max = 1000
    let cant = process.argv[2] 
    // console.log('Cantidad de Calculo:.... ', process.argv.slice(2))
    
    for(let i = 0; i < cant; i++) {
        let num = Math.ceil(Math.random() * max)  //(max) => Math.ceil(Math.random() * max)
        
        if (obj[num] === undefined) {
           obj[num] = 1
        } else {
           obj[num] = obj[num] + 1
        }
        console.log(`num[${num}]: ${obj[num]}`)
   }
   return  JSON.stringify({obj}) 
}
    
process.on('message', msg => {
    if (msg === 'start') {
        console.log(`Mensaje del padre: ${msg}`)
        process.send(`${calculo()}`)
        process.exit()
    }
})