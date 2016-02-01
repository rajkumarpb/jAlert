/**
 * Angular-jAlert
 * AngularJS directive for jQuery jAlert plugin
 * https://github.com/rajkumarpb/jAlert
 * License: Dual-licensed under the GNU General Public License and the MIT License
 */
var CONSTANTS = {
	ALERT_TITLE : 'Information',
	CONFIRM_TITLE : 'Confirmation',
    PROMPT_TITLE : 'Please enter the value'
};
var jalertModule = angular.module('jalert')
jalertModule.constant("CONSTANTS", CONSTANTS);
jalertModule.directive('jalert', function() {
	return {
        restrict: 'A',
		scope: {
			callback: '&jcallback'
		},
        link: function(scope, iElem, iAttrs) {
            iElem.bind("click", function() {
				if(iElem.attr("jalert-type")!=undefined){
					if(iElem.attr("jalert-type")=='confirm'){
						jConfirm(iElem.attr("jalert-message"), CONSTANTS.CONFIRM_TITLE, function(res) {
						if(res && iElem.attr("jcallback")!=undefined && iElem.attr("jcallback")!='')
							scope.callback();
						});
					} else if(iElem.attr("jalert-type")=='prompt'){
                        jPrompt(iElem.attr("jalert-message"), CONSTANTS.PROMPT_TITLE, function(res) {
						if(res && iElem.attr("jcallback")!=undefined && iElem.attr("jcallback")!='')
                            scope.callback();
                        });
                    };
				}else{
                    jAlert(iElem.attr("jalert"), CONSTANTS.APP_NAME_AS_PREFIX, function(res){
                        if(iElem.attr("jcallback")!=undefined && iElem.attr("jcallback")!='')
                            scope.callback();
                    });
                }
            scope.$on('$destroy', function() {
            	iElem.off();
            });
        });
            
        }
    };
});