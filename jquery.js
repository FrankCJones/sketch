$(document).ready(function(){
    $('body').prepend('<div class="container"></div>')
    $('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>')
    color = Math.floor((Math.random() * 16777216) + 1)
    $('button').css({
        margin: '10px 0',
        padding: '40px',
        'background-color': color.toString(16),
        'border-radius': '40px',
        'font-size': '16px'
    });
});
function newGrid(){
    $('li').css('background-color','white');
    $('.container').remove()
    $('body').prepend('<div class="container"></div>')

    // change this var to -1 and the user will be prompted to enter a value
    height = -1;
    while(height > 20 || height < 0){
        var height = prompt('Please enter a grid height between 0 - 20');
    }

    // change this var to -1 and the user will be prompted to enter a value
    width = -1;
    while(width > 20 || width < 0){
        var width = prompt('Please enter a grid width between 0 - 20');
    }

    // creates the unordered lists which make up the height of the grid
    for (i = 0; i < height; i++) {
        $('.container').append('<ul></ul>')
    }

    // creates the list items which make up the width of the grid
    for (i = 0; i < width; i++) {
        $('ul').append('<li></li>')
    }
    
    $('li').css({
        display: 'inline-block',
        'list-style-type': 'none',
        height: '25px',
        width: '25px',
        border: '1px black solid',
        margin: '0 1px',
        'box-sizing': 'border-box'
    }).hover(function() {
        // sets the color varialbe to a random number which is converted into hex when it is set as the background-color
        color = Math.floor((Math.random() * 16777216) + 1)
        $(this).css('background-color', color.toString(16))
    });
    $('.container').css({
        margin: '0 auto'
    });
    $('ul').css({
        padding: '0',
        margin: '0'
    });
    $('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>')
    $('button').css({
        margin: '10px 0',
        padding: '40px',
        'background-color': color.toString(16),
        'border-radius': '40px',
        'font-size': '16px'
    });
};