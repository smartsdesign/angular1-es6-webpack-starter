import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './routes/home';

angular
    .module('app', [uirouter, home])
    .config(routing);