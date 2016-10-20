export default class HomeController {
    constructor(randomNames) {
        this.random = randomNames
        this.name = 'Machiatto project';
    }

    changeName() {
        this.name = 'Team';
    }

    getName() {
        this.name = this.random.getName();
    }
}