$('document').ready(function () {

    $('#registration_form').on('submit', function () {

        $('#registration_form input[type="submit"]').attr('disabled', true);

        $.ajax({
            url: './php/create_account.php',
            data: $('#registration_form').serialize(),
            method: 'POST',
            success: function (data) {
                data = JSON.parse(data);
                if (data.status == 1) {
                    $('#login_feed').html(data.message);
                    $('.sign-up').click();
                } else {
                    $('#reg_feed').html(data.message);
                }
            },
            error: function (data) {
                console.log(data);
            },
            fail: function (data) {
                console.log(data);
            }
        })

        return false;

    })

    $('#login_form').on('submit', function () {

        $('#login_form input[type="submit"]').attr('disabled', true);

        $.ajax({
            url: './php/account_login.php',
            data: $('#login_form').serialize(),
            method: 'POST',
            success: function (data) {
                data = JSON.parse(data);
                if (data.status == 1) {
                    $('#login_feed').html(data.message);
                    location.assign('./dashboard.html');
                } else {
                    $('#login_feed').html(data.message);
                }
            },
            error: function (data) {
                console.log(data);
            },
            fail: function (data) {
                console.log(data);
            }
        })

        return false;

    })

})
