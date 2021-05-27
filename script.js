$(document).ready(function () {

    $('#addBlock').click(function () {
        var randName = GetNumber(1, 700);
        $('#blocks').prepend("<div class='block2 " + randName + "'>" + randName + "</div>");

        $('.' + randName).css('background', '#' + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9));
    });

    function GetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});