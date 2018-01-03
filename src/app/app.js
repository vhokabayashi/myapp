/* Importa o que será usado no App, como serviços, além das controllers'*/
import angular from 'angular';
import uiRouter from '../../node_modules/@uirouter/angularjs/release/angular-ui-router.js'

//Pacotes do Angular
import '../../node_modules/angular-material/angular-material.css'
import '../../node_modules/angular-material/angular-material.js'
import '../../node_modules/angular-animate/angular-animate.js'
import '../../node_modules/angular-aria/angular-aria.js'
import '../../node_modules/angular-messages/angular-messages.js'

//import AppBoot from './app.boot.js' /*É a $rootScope, contém mensagens utilizadas em diversas páginas*/
//import Config from './config.js' /*Contém os State (links que serão chamados nas controllers)*/

import AppDirective from './app.directive.js' //Chama o template INICIAL



const MODULE_NAME = 'app'; //Outra denominação para a app.js
angular
.module(MODULE_NAME, [uiRouter,'ngMessages','ngAria','ngAnimate','ngMaterial'])
//.run(AppBoot)
//.factory('firebaseService', FirebaseService)
//.config(['$stateProvider', Config])
.directive('app', AppDirective)


export default MODULE_NAME;