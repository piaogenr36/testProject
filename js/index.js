
$(document).ready(function () {
	console.log("00");
    $.ajax({
        url: url + "/cardManage/cardTypeManage/checkUpdate",
        data: { id: _cardId },
        dataType: "JSON",
        type: "POST",
        async: false,
        success: function (data) {
            if (data.status == 1) {
				console.log(data);
                return;
            } else {
                console.log("成功");
                
            }
    
        },
        error: function (data) {
            console.log("失败");
            
        }
    });
});


