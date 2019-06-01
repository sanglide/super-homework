$(document).ready(function() {

    var canNum = 100;
    var buyNum=100;
    var members=[];

    getCouponsNum();
    getBuyNum();
    //以下为更改优惠金额的方法
    function getCouponsNum() {

        //该行需注释掉
        // $("#send-num").text(canNum);

        //以下为与后端交互真方法
        getRequest(
            '/coupon/getNum',
            function (res) {
                canNum = res.content;
                $("#send-num").text(canNum);
            },
            function (error) {
                alert(JSON.stringify(error));
            }
        );
    }

    $('#send-modify-btn').click(function () {
        $("#send-modify-btn").hide();
        $("#send-set-input").val(canNum);
        $("#send-set-input").show();
        $("#send-confirm-btn").show();
    });
    //z

    $('#send-confirm-btn').click(function () {
        var dayNum = $("#send-set-input").val();

        // 以下需注释掉
        // canNum = dayNum;
        // getCouponsNum();
        // $("#send-modify-btn").show();
        // $("#send-set-input").hide();
        // $("#send-confirm-btn").hide();

        //以下为与后端交互真方法
        postRequest(
            '/coupon/change',
            {day:dayNum},
            function (res) {
                if(res.success){
                    canNum = dayNum;
                    getCouponsNum();
                    $("#send-modify-btn").show();
                    $("#send-set-input").hide();
                    $("#send-confirm-btn").hide();
                } else{
                    alert(res.message);
                }
            },
            function (error) {
                alert(JSON.stringify(error));
            }
        );
    })
    //以下为修改最低消费的方法
    function getBuyNum() {
        $("#buy-num").text(buyNum);
    }

    $('#buy-modify-btn').click(function () {
        $("#buy-modify-btn").hide();
        $("#buy-set-input").val(canNum);
        $("#buy-set-input").show();
        $("#buy-confirm-btn").show();
    });
    //z

    $('#buy-confirm-btn').click(function () {
        var bNum = $("#buy-set-input").val();

        // 以下需注释掉
        // var list=[{
        //     username:"ezio",
        //     password:123456,
        //     id:1
        // },{
        //     username:"router",
        //     password:123456,
        //     id:2
        // }]
        // renderMemberList(list);
        // buyNum = bNum;
        // getBuyNum();
        // $("#buy-modify-btn").show();
        // $("#buy-set-input").hide();
        // $("#buy-confirm-btn").hide();

        //以下为与后端交互真方法
        postRequest(
            '/coupon/changeBuyNum',
            {buyNum:buyNum},
            function (res) {
                var list=res.content;
                renderMemberList(list);
                buyNum = bNum;
                getBuyNum();
                $("#buy-modify-btn").show();
                $("#buy-set-input").hide();
                $("#buy-confirm-btn").hide();

            },
            function (error) {
                alert(JSON.stringify(error));
            }
        );
    })

    //以下为展示用户的方法

    function renderMemberList(list) {
        $('.member-card').empty();
        var memberDomStr = '';
        list.forEach(function (member) {
            memberDomStr +=
                "<tr>" +
                "   <td>" +
                "       <div>"+member.id+"</div>" +
                "   </td>" +
                "   <td>" +
                "       <div>"+member.username+"</div>" +
                "   </td>" +
                "   <td>" +
                "<div>"+
            "<input name='optionName' type='checkbox' value='"+member.id+"'>选择</div>"+
            "   </td>" +
            "</tr>"
        });
        $("#myTable").append(memberDomStr);
    }
//以下为选中某些用户的方法
//     $('#allOptionId').on('ifChecked', function(event){
//         alert("全选");
//         $('input').iCheck('check');
//     });
//     $('#allOptionId').on('ifUnchecked', function(event){
//         alert("反选");
//         $('input').iCheck('uncheck');
//     });
//     $('input').on('ifChecked', function(event){
//         alert(event.type + ' callback');
//     });
//     $('input[name="optionName"]:checked').each(function() {
//         alert("单选");
//         members.push($(this).val());
//         console.log(members);
//     });
    if($("input").prop("checked") == true){
        alert("danxuan");
    }
    sendConfirmClick=function(){
        alert("还没实现");
    }
});