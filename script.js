$(function(){

    var i = 1

    $('#hozzaad').on('click', function(){
        var feladat = $('#feladat').val()
        $('.todoLista').append('<li>' + i + '. ' + feladat + '<img id="ikon1" src="thumb.png">'+'</li>')
        i = i+1;
        
        $('li').on('click', function(){
        $(this).addClass('kihuzva');
    })

    })





});

