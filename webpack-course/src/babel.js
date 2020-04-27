async function start(){
    return Promise.resolve('asynk is working');
}
const unused = 42;
start().then(console.log)