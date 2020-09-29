$("ul").hide()
 
var _navlever = 0;
$(".hamburger-menu").on("click" , function(){
    
    if (_navlever === 0){

        $("ul").slideDown(240)
        $("ul").show()
        _navlever = 1
        }
        
        else if (_navlever = 1){
            $("ul").slideUp(240)
            
            
        }
    }
);

// $(".hamburger-menu").on("click" , function(){
//     if (_navlever === 1){
//         $("ul").slideUp(240)
//         $("ul").hide()
//         _navlever = 0;
//     }
// });
