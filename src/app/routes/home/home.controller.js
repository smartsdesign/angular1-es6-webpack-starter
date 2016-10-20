export default class HomeController {
    constructor(randomNames) {
        this.random = randomNames
        this.title = 'Machiatto project, 2016';
    }

    changeTitle() {
        this.title = 'Hello, team member';
    }

    getRandomName() {
        this.title = 'Hello, ' + this.random.getName();
    }
}