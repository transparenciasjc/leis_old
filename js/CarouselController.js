var carouselController = angular.module('carouselController', ['ui.bootstrap']);

carouselController.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
      var slides = [
            {
                  title: "Monitor Legislativo",
                  description: "Acompanhe de perto todos os projetos de lei criados pelos vereadores de São José dos Campos",
                  image: "img/sjc3.jpg"
            },
            {
                  title: "Dados Abertos e Inovação",
                  description: "Conheça nosso movimento e descubra o porque um grupo de nerds resolveram unir tecnologia da informação com dados governamentais.",
                  image: "img/sjc1.jpg",
            },
            {
                  title: "Precisamos de Ajuda!",
                  description: "Queremos ajudar a prefeitura a renovar a forma de se fazer política, e a população enxergar a política como um meio de melhorar a sociedade.",
                  image: "img/sjc2.jpg",
            }
      ]

      $scope.myInterval = 5000;
      $scope.slides = slides;
}]);