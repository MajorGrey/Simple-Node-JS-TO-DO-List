$(() => {
    $('form').submit((e) => {
        e.preventDefault();
        var data = $('form').serialize();
        $.ajax({
            url: '/',
            type: 'post',
            data: data,
            success: () => {
                console.log('submitted');
            }
        });
        console.log();
    });
});