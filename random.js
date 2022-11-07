// function random(cantidad) {
//     if(cantidad){
//         return Math.floor((Math.random() * (cantidad - 1 + 1)) + 1);
//     }else{
//         return Math.floor((Math.random() * (100000000 - 1 + 1)) + 1);
//     }
// }

function randomsito(cantidad){

    let numRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log("NUM RANDOM UNO", numRandom);

    let valorAparece = [];

    for(let i = 0; i <= 1000; i++){
        valorAparece.push({ valor: i, aparece: 0 });
    }

    console.log("valorAparece: ", valorAparece);

    for(let i = 0; i <= cantidad; i++){
        valorAparece[numRandom].aparece++;
    }

    return valorAparece;
}

// process.on("message", (msg) => {
//     console.log("msg: ", numerosRandom);
//     if (msg[0] == "listo") {
//       const randoms = randomsito(msg[1]);
//       process.send(randoms);
//     }
// });

process.on('message', msg => {
    console.log("MENSAJE  random: ", msg);

    console.log(`mensaje del padre: ${msg}`)
    // process.send('mundo!')
    const randoms = randomsito(msg);
    // console.log("NUM RANDOMSITO", randoms);

    process.send(randoms);
    process.exit();
 })
 
 process.send('listo');