let state = {
    counter:0,
    names:'Ram'
}

let a = (state)=>state.counter;
state.counter = 10
console.log(a(state))
