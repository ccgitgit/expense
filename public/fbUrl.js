angular.module('app').constant('FirebaseUrl','https://cc-wiki.firebaseio.com/')
	.service('rootRef',['FirebaseUrl',Firebase]);