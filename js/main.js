$(document).ready(function(){
    
    // STICKY NAVIGATION
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("header").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
        }
    });  
    // blog next btn
    $(document).on("click",".post-next-btn li ",function(){
        $(this).addClass("post-active").siblings().removeClass('post-active')
    });
    
});

// mobile nav 
function openNav(){
    
    document.getElementById("myNav").style.width = "80%";
    
}

function closeNav(){
    
    document.getElementById("myNav").style.width = "0%";
    
}