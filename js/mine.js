

$("#checker ul li").click(function(e){
         $("#checker .symp").fadeOut(0);
  
    $("#checker .symp .header").text($(this).text());
    var i=$(this).attr("id");
    
    if (i==1)
        {

             $("#checker .list2").html(" <li id='11'>تساقط الشعر عند الرجال </li><li id='12'>الصداع</li><li id='13'>الدوار عند الوقوف</li><li id='14'>الم الرقبة</li><li id='15'>فقدان الشم والتذوق</li><li id='16'>تورم الغدد فى الرقبة</li><li id='17'>الم الفك واللثة او الاسنان</li><li id='18'>الارق</li>");
        }
      else  if (i==2)
        {
             $("#checker .list2").html(" <li id='21'>جفاف العين والفم</li><li id='22'>افرازات العين</li><li id='23'>الم العين</li>");
        }
      else  if (i==3)
        {
             $("#checker .list2").html(" <li id='31'>السعال والبرد</li><li id='32'>جفاف الفم والعطش الزائد</li><li id='33'>الم الاذن عند الكبار</li><li id='34'>السعال المزمن</li><li id='35'>التهاب الحلق</li><li id='36'>فقدان السمع المفاجئ</li><li id='37'>صعوبة البلع</li><li id='38'>طنين الاذن</li>");
        }
    
      else  if (i==4)
        {
             $("#checker .list2").html(" <li id='41'>الم الصدر</li><li id='42'>خفقان القلب</li><li id='43'>الم اسفل الظهر</li><li id='44'>ضيق التنفس عند الكبار</li><li id='45'>الصفير مع التنفس عند الكبار</li>");
        }
    
    
      else  if (i==5)
        {
             $("#checker .list2").html("<li id='51'>الم المرفق</li><li id='52'>الم اليد</li><li id='53'>مشاكل الاظافر</li><li id='54'>العامل الروماتويدي الايجابي</li><li id='55'>الم الكتف</li><li id='56'>الم الرسغ</li>");
        }
    
    

      else  if (i==6)
        {
             $("#checker .list2").html("<li id='61'>علاج ارتداد حمض المعدة</li><li id='62'>غازات الامعاء</li><li id='63'>الدم في البول عند الرجال</li><li id='64'>فحص سرطان القولون</li><li id='65'>الامساك عند الكبار</li><li id='66'>الاسهال</li>");
        }
    
    
          else  if (i==7)
        {
                    $("#checker .list2").html("<li id='71'>الم القدم</li><li id='72'>النقرس</li><li id='73'>الم الركبة</li><li id='74'>تورم القدم الحاد</li><li id='75'>الالتهاب العظمي المفصلي للركبة</li><li id='76'>تورم الركبة المزمن</li><li id='77'>الم الكاحل</li>");
        }

          else  if (i==8)
        {
                    $("#checker .list2").html("<li id='81'>القلق</li><li id='82'>الاغماء او فقدان الوعي</li><li id='83'>الضعف الجنسي لدى الرجال</li><li id='84'>الاكتئاب</li><li id='85'>دوران ظهر حديثا</li><li id='86'>الخمول اثناء النهار</li><li id='87'>جفاف الجلد</li>");
        }

    






    $("#checker .symp").fadeIn(1000);
});




 var age = document.getElementById("age");

    age.addEventListener("keydown" , function(e){
        console.log(e.key) 
        
    if(e.key>0){
//        alert("please choose Gender")
    }
     else{
        $("#change").prop("disabled", true );}
})

$(".male").click(function(){
    $("#change").prop("disabled", false );
})

$(".female").click(function(){
    $("#change").prop("disabled", false );
})


$("#change").click(function(){
    
    
    if ((document.getElementById("male").checked == true)){
        $(".Symptom").fadeOut("2000");
        $(".sym").fadeIn("2000");
    }
    else if (document.getElementById("female").checked == true) {
        $(".Symptom").fadeOut("2000");
        $(".sym").fadeIn("2000");
    }
    else {
        alert("u should chose ur gender");
        }
})




