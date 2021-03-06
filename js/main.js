$(document).ready( function () {
    $( '#chipt1, #chipt2' ).draggable()
})

$('.bg-dice').click( function() {
    $('.dice').removeClass('active')
}) 

$('.btn-dice').click (
    function() {
        throwDice()
    }
)

function throwDice() {
    var value = Math.round(Math.random() * 5) + 1;
    displayDice(10, value, $('.dice') )
    return value;
}

function displayDice(times, final, element)
{
    element.removeClass();
    if (times > 1)
    {
        element.addClass('active shake');
        element.addClass('dice dice--' + (Math.round(Math.random() * 5) + 1));
        setTimeout(function(){displayDice(times-1,final, element);},100);
    }
    else
        element.addClass('active');
        element.addClass('dice dice--' + final);
}