(function($) {
    'use strict';

    function activate(target) {
        $('.flipswitch .flipswitch-label', target).on('click', function() {
            var parent = $(this).parents('.flipswitch');
            var is_enable = $(this).hasClass('flipswitch-enable');
            var opposite = is_enable ? '.flipswitch-disable' : '.flipswitch-enable';

            $(opposite, parent).removeClass('selected');
            $(this).addClass('selected');
            $('input[type=checkbox]', parent).attr('checked', is_enable);
            $('#' + $(this).attr('for')).prop('checked', true);
        });
    }

    $.fn.flipswitch = function() {
        return this.each(function () {
            activate($(this));
        });
    };

    activate(document.body);
})(jQuery);
