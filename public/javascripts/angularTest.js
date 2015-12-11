(function(){
  var app = angular.module('store', []);
  var words = [{
    name: 'Procrastinate',
    meaning: 'Biggest enemy of productivity',
    canLearn: true
  },
  {
    name: 'Substantiate',
    meaning: 'Give evidence for',
    canLearn: true
  }];
  app.controller('StoreController', function(){
    this.products = words;
  })
  var clickMe = function(){
    word.canLearn = true;
  }
                

})()