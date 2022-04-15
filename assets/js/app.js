
// $(document).ready(function(){
//     $('.carousel').carousel();
// });
var countup=0;
var countdown=0;
var flag=0;
var flag1=0;

jQuery(document).ready(function(){
    jQuery("#up").click(function(){
        if(flag1==1){
            flag1=2;
            flag=0;
            if(countup==0){
                jQuery("#first").hide();
                jQuery("#second").show();
                jQuery("#third").hide();
                countup=2;
                countdown=countup;
                console.log(countup,countdown);
               }
               else if(countup==1){
                jQuery("#first").show();
                jQuery("#second").hide();
                jQuery("#third").hide(); 
                countup-=1;
                countdown=countup;
                console.log(countup,countdown);
               }
               else{
                jQuery("#first").hide();
                jQuery("#second").show();
                jQuery("#third").hide();
                countup=countup-1;
                countdown=countup;
                console.log(countup,countdown);
               }  
        }
  else{
    if(flag==0){
        flag1=2;
        if(countup==0){
         jQuery("#first").hide();
         jQuery("#second").hide();
         jQuery("#third").show();
         countup+=1;
         countdown=countup;
         console.log(countup,countdown);
        }
        else if(countup==1){
         jQuery("#first").hide();
         jQuery("#second").show();
         jQuery("#third").hide(); 
         countup+=1;
         countdown=countup;
         console.log(countup,countdown);
        }
        else{
         jQuery("#first").show();
         jQuery("#second").hide();
         jQuery("#third").hide();
         countup=0;
         countdown=countup;
         console.log(countup,countdown);
        }
      }
    }

    })
    jQuery("#down").click(function(){
    if(flag1==2){
        flag1=1;
        flag=0;
        if(countdown==0){
         jQuery("#first").hide();
         jQuery("#second").show();
         jQuery("#third").hide();
         countdown+=1;
         countup=countdown;
         console.log(countup,countdown);
        }
        else if(countdown==1){
         jQuery("#first").show();
         jQuery("#second").hide();
         jQuery("#third").hide();
         countdown-=1;
         countup=countdown;
         console.log(countup,countdown);
        }
        else{
         jQuery("#first").hide();
         jQuery("#second").hide();
         jQuery("#third").show();
         countdown=0;
         countup=countdown;
         console.log(countup,countdown);

        }
    }
    else {
        if(flag==0){
            flag1=1;
            if(countdown==0){
             jQuery("#first").hide();
             jQuery("#second").show();
             jQuery("#third").hide();
             countdown+=1;
             countup=countdown;
             console.log(countup,countdown);
            }
            else if(countdown==1){
             jQuery("#first").hide();
             jQuery("#second").hide();
             jQuery("#third").show(); 
             countdown+=1;
             countup=countdown;
             console.log(countup,countdown);
            }
            else{
             jQuery("#first").show();
             jQuery("#second").hide();
             jQuery("#third").hide();
             countdown=0;
             countup=countdown;
             console.log(countup,countdown);
    
            }
      
        }
    }
 
 
     })
})










