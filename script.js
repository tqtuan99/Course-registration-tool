$("body").prepend('<div id="loadCaptchaHere"></div><div id="displayThongBao"></div>');
var studentIdNumber = prompt("Vui lòng nhập mssv của bạn", 0);
studentIdNumber = (studentIdNumber + "").trim();
var curriculumId = "798";

function win_Custom_Add(e, a) {
    e = (e + "").trim();
    $.ajax({
        type: "POST",
        beforeSend: function() {},
        url: "../Modules/regonline/ajax/LoadCaptcha.aspx/CheckCapt",
        data: '{captValue: "' + e + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: !0,
        success: function(t) {
            if (t.d + "" == "1") {
                console.log("I’m Quoc Tuan");
                var r = curriculumId.indexOf(",");
                r >= 0 && (curriculumId = curriculumId.substring(0, r));
                var n = EncryptString(a + ",74,75," + studentIdNumber + "," + curriculumId + "," + e, "AMINHAKEYTEM32NYTES1234567891234", "7061737323313233");
                ProcessAddClass(n), LoadCaptcha()
            } else alert("MÃ XÁC NHẬN không chính xác. Vui lòng nhập lại!")
        },
        failure: function(e) {
            var a = $.parseJSON(e.responseText);
            alert("Message: " + a.Message), alert("StackTrace: " + a.StackTrace), alert("ExceptionType: " + a.ExceptionType), "failed"
        },
        complete: function(e) {
            var a = $.parseJSON(e.responseText);
            a.d + "" == "0" && LoadCaptcha()
        }
    })
}