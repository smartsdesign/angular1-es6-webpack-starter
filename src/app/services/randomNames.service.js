import angular from 'angular';

class RandomNames {
    
    constructor() {
        this.names = ['Thomas', 'Samson', 'Yorick', 'Kam', 'Dan', 'Vince', 'Richard', 'James']
    }

    getName() {
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);
        return this.names[rand];
    }

}

export default angular.module('services.random-names', [])
    .service('randomNames', RandomNames)
    .name;