$(document).ready(function(){
    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1000, 'swing');
            hashTagActive = this.hash;
        }
    });
    
    

$("#grem1, #grem2, #grem3, #grem4, #grem5").hide();
$("#guest1, #guest2, #guest3, #guest4, #guest5").hide();
    
$("#guests").change(function () {
var selected = $("#guests option:selected").val();
$("#guest1, #guest2, #guest3, #guest4, #guest5").hide();
$('#guest' + selected).show();
});


$("#gremlins").change(function () {
var selected = $("#gremlins option:selected").val();
$('#grem1, #grem2, #grem3, #grem4, #grem5').hide();
$('#grem' + selected).show();
});

});