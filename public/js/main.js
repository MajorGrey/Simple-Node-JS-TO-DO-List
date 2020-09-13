$(() => {
    $('form').submit((e) => {
        e.preventDefault();
        var data = $('form').serialize();
        $.ajax({
            url: '/',
            type: 'post',
            data: data,
            beforeSend: () => {
                $('form').trigger('reset');
            },
            success: () => {
                console.log('submitted');
                $("#datas").load(location.href + " #datas>*", "");
            }
        });
    });

    $('#del').click(() => {

    });
});