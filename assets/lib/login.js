$(function () {
    $('.loginbox').on('click', function () {
        $('.link-login').show()
        $('.link-reg').hide()
    })


    $('.regbox').on('click', function () {
        $('.link-login').hide()
        $('.link-reg').show()
    })

    var form = layui.form
    form.verify({
        username: function (value, item) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '用户名不能全为数字';
            }
        }

     
         repwd: function (value) {
            var pwd = $('.reg-box[reg.password]').val()
            if (repwd == pwd) {
                return '验证未通过'
            }
        }
         
         
         
         $('#form_reg').on('sumbmit', function (e) {
            e.preventDefault


        })





    })