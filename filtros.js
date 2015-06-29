 angular.module('miAp', [])
  .controller('ControladorFiltros', ['$scope', function($scope) {

    $scope.nombre = '';
    $scope.paterno = '';
    $scope.materno='';
    $scope.primerDia='';
    $scope.salario='';
    $scope.telefono='';
    $scope.bono='';

  $scope.empleados =
    [
      {
        id:'1', nombre:'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
        salario: 12000, telefono:'5587687687', bono: 1.456789
      },
      {
        id:'2', nombre:'Adrian', paterno: 'Romero', materno: 'Paez', primerDia:  new Date(),
        salario: 12000, telefono:'5512345678', bono: 9.654321
      }  
    ];

  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };
  $scope.addPreparacion = function(id){
    
   $scope.nombre = $scope.empleados[id-1].nombre;
  }


}]);