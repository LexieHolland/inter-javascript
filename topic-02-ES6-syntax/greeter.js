

function make_greeter(season) {
    //let season = "Halloween"
    return function() {
        console.log(`Happy ${season}!`)
    }
}

greeter = make_greeter("Easter")

greeter()

greeter = 1
