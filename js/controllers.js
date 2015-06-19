'use strict';

app.controller('MainCtrl', function($scope) {
});

'use strict';

app.controller('TabDemoCtrl', function($scope, $templateCache) {

  $scope.tabs = [
    {title:'Home', content: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.'},
    {title:'Profile', content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.'},
    {title:'About', content: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade.', disabled: false}
  ];


  $scope.dropdown = [
    {text: '<i class="fa fa-download"></i>&nbsp;Another action', href: '#anotherAction'},
    {text: '<i class="fa fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")'},
    {text: '<i class="fa fa-external-link"></i>&nbsp;External link', href: '/auth/facebook', target: '_self'},
    {divider: true},
    {text: 'Separated link', href: '#separatedLink'}
  ];

});

app.controller('MyCtrl1' ,function ($scope, UtilSrvc) {
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("Amy");

    $scope.updateName = function(){
    	$scope.valueFromService = UtilSrvc.helloWorld($scope.inputName);
    }
});

app.controller('MyCtrl2' ,function ($scope) {

});

// you may add more controllers below