'use strict';

/**
 * @ngdoc directive
 * @name crmApp.directive:Draggable
 * @description
 * # Draggable
 */
angular.module('crmApp')
.directive('draggable', ['$document', function($document) {
  return {
    link: function(scope, element, attrs) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
        border: 'solid 2px black',
        position: 'relative',
        cursor: 'pointer',
        resize: 'both',
        overflow: 'auto'
      });

      $('.glyphicon-remove').click(function(){
        $(this).closest('.panel').remove();
      });
      angular.element(document).ready(function() {
        element.find('canvas').css({
          width: '100%',
          height: '100%'
        });
      });
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        // event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        element.find('canvas').css({
          width: '100%',
          height: '100%'
        });
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);
