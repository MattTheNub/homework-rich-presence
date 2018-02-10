const $ = require('jQuery');

var info = require('electron').remote.getGlobal('info');

setInterval(() => {
    info.subject = `Working on ${$('#subject').val()}`;
    if ($('#study').is(':checked')) {
        info.due = 'Studying';
        $('#duep').addClass('disabled');
        $('#due').prop('disabled', true);
    } else {
        $('#duep').removeClass('disabled');
        $('#due').prop('disabled', false);
        info.due = `Due ${$('#due').val()}`;
    }
}, 100);
