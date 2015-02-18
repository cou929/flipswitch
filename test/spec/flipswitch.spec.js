describe('flipswitch', function () {
    describe('type=radio', function () {
        before(function() {
            document.body.innerHTML = window.__html__["test/fixture/radio.html"];
            $('body').flipswitch();
        });

        after(function() {
            document.body.innerHTML = "";
        });

        it('is checked `enabled` button by default', function () {
            assert($('#radio-enable').prop('checked') === true);
            assert($('#radio-disable').prop('checked') === false);
        });

        it('switches when clicked', function () {
            $('.flipswitch-disable').click();

            assert($('#radio-enable').prop('checked') === false);
            assert($('#radio-disable').prop('checked') === true);
        });
    });

    describe('type=checkbox', function () {
        before(function() {
            document.body.innerHTML = window.__html__["test/fixture/checkbox.html"];
            $('body').flipswitch();
        });

        after(function() {
            document.body.innerHTML = "";
        });

        it('is not checked by default', function () {
            assert($('#checkbox').prop('checked') === false);
        });

        it('switches when clicked', function () {
            $('.flipswitch-enable').click();

            assert($('#checkbox').prop('checked') === true);
        });
    });
});
