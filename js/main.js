$(function(){
    // alert('dd')
    const menu = $('header nav ul li'),
          contents = $('main .inner')

    menu.click(function(){
        let idx = $(this).index()
        let section = contents.eq(idx)
        let sectionD = section.offset().top
        $('html, body').animate({
            scrollTop : sectionD
        })
    })
    const barmenu = $('.navbar ul li')
    barmenu.click(function(e){
        e.preventDefault()
        let index = $(this).index()
        let sectionn = contents.eq(index)
        let sectionnD = sectionn.offset().top
        $('html, body').animate({
            scrollTop : sectionnD
        })
    })

    const navbar = $('.navbar')
    let navoffsettop = navbar.offset().top
    
    $(window).scroll(function(){
        let haha = $(window).scrollTop()
        console.log(haha)
        if(haha > 960 ){
            navbar.addClass('on')
        }else{
            navbar.removeClass('on')
        }
        if(haha > 3300 ){
            navbar.removeClass('on')
        }else{
            // 화이팅 ♥
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>800){
            $('.go-top').fadeIn()
        }else{
            $('.go-top').fadeOut()
        }
    })

    $('.go-top').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })
})
$(document).ready(function(){

    $('.img-wrap').click(function(){
        $('.popup').addClass('on')
        $('.popup').append('<div class="iframebox"><iframe src="https://www.youtube.com/embed/' + $(this).data("yclip") +'" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>')
    })
    $('.popup .popupfull').click(function(){
        $('.popup').removeClass('on')
        $('.popup .iframebox').remove()
    })
})

















let tll = new gsap.timeline()

tll.from("#tmt5",.2,{
    opacity: 0,
    y: -400,
    delay: 1,
})
tll.from("#tmt7",.1,{
        y: -400,
    opacity: 0
})
tll.from("#tmt1",.1,{
        y: -400,
    opacity: 0,
    delay: .3
})
tll.from("#tmt2",.1,{
        y: -200,

    opacity: 0
})
tll.from("#tmt3",.2,{
        y: -400,
        delay: .5,
    opacity: 0
})
tll.from("#tmt4",.1,{
        y: -200,
    opacity: 0
})
tll.from("#tmt6",.1,{
        y: -300,

    opacity: 0,
})
tll.from("#tmt8",.2,{
    delay: .5,
    y: -400,
    opacity: 0
})
tll.to("#tmt8",.2,{
    delay: .2,
    rotate: 15,
})
tll.to("#tmt8",.1,{
    rotate: -15,
})



