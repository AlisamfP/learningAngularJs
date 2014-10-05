(function(){
  var app = angular.module('store', [ ]);
  
  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Dedecahedron',
    price: 2,
    description: '. . .',
    canPurchase: true
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: '........',
    canPurchase: true
  }];
})();