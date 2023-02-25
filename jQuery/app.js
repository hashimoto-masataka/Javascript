$(function(){
    $('.box1').slideDown(function(){
        $('.box1').css({
            'background-color':'#0000FF',
            'width':'200px',
            'height':'100px',
        }).slideUp();
    });
    
});

$(function(){
    $('.box2').mouseover(function(){
        $('.box2').css({'background-color':'#0000FF'});
    });
    $('.box2').mouseout(function(){
        $('.box2').css({'background-color':'#FF0000'});
    });
    
});

$(function(){
    $('.box3').mouseover(function(){
        $('.box3').addClass('box3-ext');
    });
    $('.box3').mouseout(function(){
        $('.box3').removeClass('box3-ext');
    });
    
});

$(function(){
    $('.box4').on('click',function(){
        $('.box4').addClass('box4-ext');
    });
    $('.box4').mouseout(function(){
        $('.box4').removeClass('box4-ext');
    });
})