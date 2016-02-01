/**
 * Angular-jAlert
 * AngularJS directive for jQuery jAlert plugin
 * https://github.com/rajkumarpb/jAlert
 * License: Dual-licensed under the GNU General Public License and the MIT License
 */
var CONSTANTS = {
	ALERT_TITLE : 'Information'
};
var jalertModule = angular.module('jalert')
jalertModule.constant("CONSTANTS", CONSTANTS);
jalertModule.directive('jalert', function() {
 return {
        restrict: 'A',
        link: function(scope, iElem, iAttrs) {
            iElem.bind("click", function() {
            	jAlert(iElem.attr("jalert"), CONSTANTS.ALERT_TITLE);
            });
            scope.$on('$destroy', function() {
            	iElem.off();
            });
        }
    };
});