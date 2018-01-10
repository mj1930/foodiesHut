import { login } from './imports/login/signin.js';
import { signup } from './imports/Register/registration.js';

Router.route('/', function () {
  this.render('login');
});

Router.route('/signup', function () {
  this.render('signup');
});
