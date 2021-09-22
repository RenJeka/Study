const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels}, Owner ${this.owner} has me`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Jeka'
    }
})

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
