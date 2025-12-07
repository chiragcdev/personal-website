(function ($) {
    'use strict';
    var form = $('.contact-form'),
        message = $('.messenger-box-contact__msg'),
        form_data;

    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }
    
    form.submit(function (e) {
        e.preventDefault();

        
        const message = document.getElementById('required-msg');

        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");

        if (!firstName.value || !lastName.value || !email.value) {
            message.classList.add('show');
            firstName.classList.add("invalid");
            lastName.classList.add("invalid");
            console.log('false');
            return false
        }
        message.classList.remove('show');

        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);