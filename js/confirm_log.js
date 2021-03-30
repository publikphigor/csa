$('document').ready(function () {

    $.ajax({
        url: './php/confirm_log.php',
        method: 'POST',
        success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            $('#name_user').html(data.name);
            $('#email_user').html(data.email);
            $('#courses_completed').html(data.completed_courses);
            $('#waalet_derts').html('#' + data.wallet);
        }
    })

})
