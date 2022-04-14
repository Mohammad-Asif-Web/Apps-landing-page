
// $(document).ready(function(){
//     $('.carousel').carousel();
// });
var countup=0;
var countdown=0;

jQuery(document).ready(function(){
    jQuery("#up").click(function(){
       if(countup==0){
        jQuery("#first").hide();
        jQuery("#second").hide();
        jQuery("#third").show();
        countup+=1;
        countdown=countup;
       }
       else if(countup==1){
        jQuery("#first").hide();
        jQuery("#second").show();
        jQuery("#third").hide(); 
        countup+=1;
        countdown=countup;

       }
       else{
        jQuery("#first").show();
        jQuery("#second").hide();
        jQuery("#third").hide();
        countup=0;
        countdown=countup;

       }
    })
    jQuery("#down").click(function(){
        if(countdown==0){
         jQuery("#first").hide();
         jQuery("#second").show();
         jQuery("#third").hide();
         countdown+=1;
         countup=countdown;
        }
        else if(countdown==1){
         jQuery("#first").hide();
         jQuery("#second").hide();
         jQuery("#third").show(); 
         countdown+=1;
         countup=countdown;
        }
        else{
         jQuery("#first").show();
         jQuery("#second").hide();
         jQuery("#third").hide();
         countdown=0;
         countup=countdown;

        }
 
 
     })
})











