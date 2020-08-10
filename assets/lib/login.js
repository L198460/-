$(function () {
    $('.loginbox').on('click', function () {
        $('.link-login').show()
        $('.link-reg').hide()
    })


    $('.regbox').on('click', function () {
        $('.link-login').hide()
        $('.link-reg').show()
    })
})