(function ($) {
    'use strict';

    
    try {
        var $validator = $("#js-wizard-form").validate({
            rules: {
                titulo: {
                    required: true,
                    minlength: 3
                },
                url: {
                    required: true,
                    email: true,
                    minlength: 3
                }
               
            },
            messages: {
                titulo: {
                    required: "Ingrese el titulo"
                },
    
                url: {
                    required: "Seleccione la url",
    
                }
                
            }
        });
    
        $("#js-wizard-form").bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn--next',
            'onNext': function(tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            'onTabClick': function (tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            }
    
        });
    
    }
    catch (e) {
        console.log(e)
    }

})(jQuery);