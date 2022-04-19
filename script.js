$(document).ready(function(){
    $('.mouse_wheel').animate({'top':'10px','opacity':'0'},1500)
    $('.mouse_wheel').animate({'top':'5px','opacity':'1'},0)
    setInterval(function(){
        $('.mouse_wheel').animate({'top':'10px','opacity':'0'},1500)
    $('.mouse_wheel').animate({'top':'5px','opacity':'1'},0)
    },1550)
$('.slide_bt>li').click(function(){
    $(this).css({'background-color':'#fff','border':'none'}).siblings().css({'background':'none','border':'2px solid #aaa'});
    $('.slide').animate({'left':$(this).index()*-100+'%'})
    $('.slide_num>li:first-child').html('0'+($(this).index()+1))
})
let num = 1;
$('.play').click(function(){
    if(num == 1){$(this).attr({'src':'slide_pause_bt.png'});
    num =0;
    slide_bt_click = 0;
    }
    else if(num == 0){$(this).attr({'src':'slide_play_bt.png'});
    num =1;
    slide_bt_click = 100;
    }
})
let slide_num = 0;
let slide_bt_click = 100;
setInterval(function(){
    slide_num = slide_num - slide_bt_click;
    if(slide_num < -200){slide_num=0}
    $('.slide').stop().animate({'left':slide_num+'%'})
    $('.slide_num>li:first-child').html('0'+(slide_num*-0.01+1))
    $('.slide_bt>li:nth-child('+(slide_num*-0.01+1)+')').css({'background-color':'#fff','border':'none'}).siblings().css({'background':'none','border':'2px solid #aaa'});
},5000)
$('.prev').click(function(){
    slide_num = slide_num + 100;
    if(slide_num>0){slide_num=-200}
    $('.slide').animate({'left':slide_num+'%'})
    $('.slide_num>li:first-child').html('0'+(slide_num*-0.01+1))
    $('.slide_bt>li:nth-child('+(slide_num*-0.01+1)+')').css({'background-color':'#fff','border':'none'}).siblings().css({'background':'none','border':'2px solid #aaa'});
})
$('.next').click(function(){
    slide_num = slide_num - 100;
    if(slide_num < -200){slide_num = 0}
    $('.slide').animate({'left':slide_num+'%'})
    $('.slide_num>li:first-child').html('0'+(slide_num*-0.01+1))
    $('.slide_bt>li:nth-child('+(slide_num*-0.01+1)+')').css({'background-color':'#fff','border':'none'}).siblings().css({'background':'none','border':'2px solid #aaa'});
})
$('.lang>li').click(function(){
    $(this).css({'opacity':'1'}).siblings().not($('.lang>li:nth-child(2)')).css({'opacity':'0.5'})
})
let menu_num = 0;
$('.menu').click(function(){
    if(menu_num == 0){$(this).children('li:nth-child(1)').stop().css({'transform':'rotate(45deg)','margin-top':'10px'})
    $(this).children('li:nth-child(2)').stop().css({'transform':'rotate(-45deg)','margin-top':'-8px'})
    $(this).children('li:nth-child(3)').stop().css({'opacity':'0'})
    menu_num = 1;
    $('.popup_box').stop().fadeIn();
    $('body').css({'overflow':'hidden'})
    }
    else if(menu_num == 1){$(this).children('li:nth-child(1)').stop().css({'transform':'rotate(0deg','margin-top':'6px'})
    $(this).children('li:nth-child(2)').stop().css({'transform':'rotate(-0deg)','margin-top':'6px'})
    $(this).children('li:nth-child(3)').stop().css({'opacity':'1'})
    menu_num = 0;
    $('.popup_box').stop().fadeOut()
    $('body').css({'overflow':'auto'})
    }
    
})
})
let sc = 0;
let scrollYPos = 0;
let scrollYPosCharge = 0;
$(window).scroll(function(){
scrollYPos = Math.round(sc-27000);
scrollYPos2 = Math.round(scrollYPos/10)
scrollYPosCharge = Math.round(sc-25000);
scrollYPosCharge2 = Math.round(scrollYPosCharge/10);
let s1 = $('.horizon').get(0)
sc = $(this).scrollTop()
$('.sc>h5').text(sc)
if(sc>25000 && sc<26000){$('.oculus_charge_images').attr('src','images/oculus_charge_images/'+scrollYPosCharge2+'.jpg')}
if(sc>27000 && sc<28500){$('.xr2_images').attr('src','images/xr2_images/'+scrollYPos2+'.jpg')}


if(sc<100){$('.mouse').css({'bottom':'80px'})}
if(sc>=100){$('.mouse').css({'bottom':'10px'})}
if(sc<=1200 || sc>6600){$('.store_climb').css({'transform':'scale(0)','opacity':'0'})}
if(sc>1200 && sc <=1600){$('.store_climb').css({'transform':'scale('+(sc-1200)*0.00125+')','opacity':'1'})}
if(sc>1600 && sc<=6200){$('.store_climb').css({'transform':'scale(0.5)','opacity':'1'})}
if(sc<=1600 || sc>7000){$('.store_0x0').css({'transform':'scale(0)','opacity':'0'})}
if(sc>1600 && sc<=2000){$('.store_0x0').css({'transform':'scale('+(sc-1600)*0.00075+')','opacity':'1'})}
if(sc>2000 && sc<=6600){$('.store_0x0').css({'transform':'scale(0.3)','opacity':'1'})}
if(sc<=2000 || sc>7400){$('.store_beatsaber').css({'transform':'scale(0)','opacity':'0'})}
if(sc>2000 && sc<2400){$('.store_beatsaber').css({'transform':'scale('+(sc-2000)*0.00075+')','opacity':'1'})}
if(sc>2400 && sc<=7000){$('.store_beatsaber').css({'transfrom':'scale(0.3)','opacity':'1'})}
if(sc<=2400 || sc>7800){$('.store_rpg').css({'transform':'scale(0)','opacity':'0'})}
if(sc>2400 && sc<=2800){$('.store_rpg').css({'transform':'scale('+(sc-2400)*0.00083+')','opacity':'1'})}
if(sc>2800 && sc<=7400){$('.store_rpg').css({'transform':'scale(0.33)','opacity':'1'})}
if(sc<=2800 || sc>8200){$('.store_starwars').css({'transform':'scale(0)','opacity':'0'})}
if(sc>2800 && sc<=3200){$('.store_starwars').css({'transform':'scale('+(sc-2800)*0.001125+')','opacity':'1'})}
if(sc>3200 && sc<=7800){$('.store_starwars').css({'transform':'0.45','opacity':'1'})}
if(sc<=3200 || sc>8600){$('.store_starwars2').css({'transform':'scale(0)','opacity':'0'})}
if(sc>3200 && sc<=3600){$('.store_starwars2').css({'transform':'scale('+(sc-3200)*0.000625+')','opacity':'1'})}
if(sc>3600 && sc<=8200){$('.store_starwars2').css({'transform':'scale(0.25)','opacity':'1'})}
if(sc<=3600 || sc>9000){$('.store_combine').css({'transform':'scale(0)','opacity':'0'})}
if(sc>3600 & sc<=4000){$('.store_combine').css({'transform':'scale('+(sc-3600)*0.0005+')','opacity':'1'})}
if(sc>4000 && sc<=8600){$('.store_combine').css({'transform':'scale(0.2)','opacity':'1'})}
if(sc<=4000 || sc>9400){$('.store_vr').css({'transform':'scale(0)','opacity':'0'})}
if(sc>4000 && sc<=4400){$('.store_vr').css({'transform':'scale('+(sc-4000)*0.000512+')','opacity':'1'})}
if(sc>4400 && sc<=9000){$('.store_vr').css({'transform':'scale(0.26)','opacity':'1'})}
if(sc<=4400){$('.iphone_box').css({'transform':'scale(0)','opacity':'0'})}
if(sc>4400 && sc<=4800){$('.iphone_box').css({'transform':'scale('+(sc-4400)*0.000625+')','opacity':'1'})}
if(sc>4800 && sc<=9400){$('.iphone_box').css({'transfomr':'scale(0.25)','opacity':'1'})}
if(sc>5000 && sc<5699){$('.store_p').css({'opacity':'1'})}
if(sc>=5700 || sc<=5000){$('.store_p').css({'opacity':'0'})}
if(sc>6200 &&  sc<=6600){$('.store_climb').css({'transform':'scale('+(0.5-(sc-6200)*0.00125)+')','opacity':1-((sc-6200)*0.0025)})}
if(sc>6600 && sc<=7000){$('.store_0x0').css({'transform':'scale('+(0.3-(sc-6600)*0.00075)+')','opacity':1-((sc-6600)*0.0025)})}
if(sc>7000 && sc<=7400){$('.store_beatsaber').css({'transform':'scale('+(0.3-(sc-7000)*0.00075)+')','opacity':1-((sc-7000)*0.0025)})}
if(sc>7400 && sc<=7800){$('.store_rpg').css({'transform':'scale('+(0.33-(sc-7400)*0.00084)+')','opacity':1-((sc-7400)*0.0025)})}
if(sc>7800 && sc<=8200){$('.store_starwars').css({'transform':'scale('+(0.45-(sc-7800)*0.001125)+')','opacity':1-((sc-7800)*0.0025)})}
if(sc>8200 && sc<=8600){$('.store_starwars2').css({'transform':'scale('+(0.25-(sc-8200)*0.000625)+')','opacity':1-((sc-8200)*0.0025)})}
if(sc>8600 && sc<=9000){$('.store_combine').css({'transform':'scale('+(0.2-(sc-8600)*0.0005)+')','opacity':1-((sc-8600)*0.0025)})}
if(sc>9000 && sc<=9400){$('.store_vr').css({'transform':'scale('+(0.26-(sc-9000)*0.000512)+')','opacity':1-((sc-9000)*0.0025)})}
if(sc>5000 && sc<9800){$('.iphone_box').css({'transform':'scale(0.25)'})}
if(sc>9800 && sc<=12000){$('.iphone_box').css({'transform':'scale(1.1)',});}
if(sc>12000 && sc<=13500){$('.iphone_box').css({'transform':'scale(1.1)'})}
if(sc<11000){$('.horizon').css({'border-radius':'0px'})}
if(sc<9800){s1.pause();
$('.horizon_hz_blur').css({'width':'0%','opacity':'0'})}
if(sc>=9800){s1.play();}
if(sc>=9800 && sc<=11000){$('.horizon_hz_blur').css({'width':'100%','opacity':'1'})}
if(sc<=10500){$('.horizon_hz_line').css({'left':'-1%','opacity':'0'});
$('.horizon_hz_box>p').css({'opacity':'0'})
}
if(sc>11000){$('.horizon_hz_box>p').css({'opacity':'1'});}
if(sc>10500 && sc<11000){$('.horizon_hz_line').css({'left':((sc-10500)*0.1) +'%','opacity':'1'});
$('.horizon_hz_blur').css({'width':(100-(sc-10500)*0.1)+'%'})}
if(sc>=11000 && sc<=12000){$('.horizon_hz_blur').css({'width':'50%'});
$('.horizon_hz_line').css({'left':'50%'});}
if(sc>12000){$('.horizon_hz_blur').css({'width':'0%'})
$('.horizon_hz_box>p').css({'opacity':'0'})}
if(sc<=12800){$('.horizon_hz_line').css({'opacity':'1'})}
if(sc>12800){$('.horizon_hz_line').css({'opacity':'0'})}
if(sc>12000 && sc<12500){$('.horizon_hz_line').css({'left':((sc-12000)*0.1)+50+'%'});
$('.horizon_hz_blur').css({'width':(50-(sc-12000)*0.1)+'%','opacity':'1'})}
if(sc>12500){$('.horizon_hz_line').css({'left':'100%'});
$('.horizon_hz_blur').css({'opacity':'0'})}
if(sc>11200 && sc<11999){$('.horizon_hz_p').css({'opacity':'1'})}
if(sc>=12000 || sc<=11199){$('.horizon_hz_p').css({'opacity':'0'})}
if(sc<=13000){$('.iphone').css({'opacity':'0'});
$('.horizon').css({'border-radius':'0px'})}
if(sc>13000){$('.iphone').css({'opacity':'1'});
$('.horizon').css({'border-radius':'100px'})}
if(sc>13500 && sc<=14500){$('.iphone_box').css({'transform':'scale('+(1.1-(sc-13500)*0.000625)+')'})}
if(sc>14500 && sc<=15200){$('.iphone_box').css({'transform':'scale('+(0.575-(sc-14500)*0.000625)+')'})}
if(sc>15200){$('.iphone_box').css({'transform':'scale(0.1375)'})}
if(sc<=15500){$('.ipad_box').css({'left':'-100%'});
$('.mac_box').css({'right':'-100%'})}
if(sc>15500 && sc<=16000){$('.ipad_box').css({'left':((sc-15500)*0.24)-100+'%'});
$('.mac_box').css({'right':((sc-15500)*0.24)-100+'%'})}
if(sc<=16500){$('.mirroring_p1').css({'opacity':'0'})}
if(sc>16500 && sc<=17000){$('.mirroring_p1').css({'opacity':(sc-16500)*0.002})}
if(sc>16000 && sc<=18000){$('.ipad_box').css({'left':'20%'});
$('.mac_box').css({'right':'20%'})
}
if(sc<17000 || sc>18500){$('.mirroring_p2,.mirroring_p3').css({'opacity':'0'});}
if(sc>17000 & sc<=18000){$('.mirroring_p2,.mirroring_p3').css({'opacity':(sc-17000)*0.002});}
if(sc>17000 && sc<=18000){$('.mirroring_p1').css({'opacity':'1'})}
if(sc>18000 && sc<=18500){$('.mirroring_p1').css({'opacity':1-((sc-18000)*0.002)});
$('.mirroring_p2,.mirroring_p3').css({'opacity':1-((sc-18000)*0.002)});
$('.ipad_box').css({'left':(20-(sc-18000)*0.24)+'%'});
$('.mac_box').css({'right':(20-(sc-18000)*0.24)+'%'})}
if(sc>18500){$('.mirroring_p1,.mirroring_p2,.mirroring_p3').css({'opacity':'0'})}
if(sc>18500){$('.ipad_box').css({'left':'-30%'});
$('.mac_box').css({'right':'-40%'})}
if(sc<19000){$('.content1').css({'background-color':'#000'});
$('.mouse').css({'border':'2px solid #fff','color':'#fff'});
$('.mouse_wheel').css({'background-color':'#fff'})}
if(sc>19000 && sc<=20000){$('.content1').css({'background-color':'rgba('+(sc-19000)*0.255+','+(sc-19000)*0.255+','+(sc-19000)*0.255+')'});
$('.mouse').css({'border':'2px solid #000','color':'#000'});
$('.mouse_wheel').css({'background-color':'#000'})}    
if(sc<=20000){$('.oculus_app_login').css({'transform':'rotate(-90deg)'})}
if(sc>20000){$('.content1').css({'background':'#fff'});
$('.mouse').css({'border':'2px solid #000','color':'#000'})
$('.mouse_wheel').css({'background-color':'#000'});
$('.oculus_app_login').css({'transform':'rotate(0deg)'})}
if(sc<20000){$('.iphone').css({'transform':'rotate(270deg)'});
$('.horizon').css({'transform':'rotate(0deg)'})}
if(sc>20000 && sc<=20500){$('.iphone').css({'transform':'rotate(360deg)'});
$('.horizon').css({'transform':'rotate(90deg)'})}
if(sc>20500){$('.iphone').css({'transform':'rotate(360deg)'});
$('.horizon').css({'transform':'rotate(90deg)'})}
if(sc<21000){$('.horizon').css({'opacity':'1'})}
if(sc<=20500){$('.oculus_app_login').css({'opacity':'0'});}
if(sc>20500 && sc<=21000){$('.oculus_app_login').css({'opacity':(sc-20500)*0.002,'transform':'rotate(0deg)'})}
if(sc<=21000){ $('.oculus_device').css({'opacity':'0'});
$('.oculus_device_right').css({'opacity':'0'});
$('.oculus_device_left').css({'opacity':'0'});}
if(sc>21000 && sc<=21500){$('.iphone_box').css({'left':(50-(sc-21000)*0.015)+'%'});
$('.oculus_device').css({'opacity':((sc-21000)*0.02)});
$('.oculus_device_right').css({'opacity':(sc-21000)*0.02});
$('.oculus_device_left').css({'opacity':(sc-21000)*0.02});
$('.horizon').css({'opacity':(1-(sc-21000)*0.02)});}
if(sc>21500){$('.oculus_device').css({'opacity':'1'});
$('.oculus_device_right').css({'opacity':'1'});
$('.oculus_device_left').css({'opacity':'1'});
$('.horizon').css({'opacity':'0'})}
if(sc>21500 && sc<23500){$('.iphone_box').css({'left':'42.5%'})}
if(sc>21000 && sc<=22500){$('.oculus_app_login').css({'opacity':'1'})}
if(sc<=22500){$('.oculus_app_device2').css({'opacity':'0'})}
if(sc>22500 && sc<=23000){$('.oculus_app_login').css({'opacity':(1-(sc-22500)*0.02)});
$('.oculus_app_device2').css({'opacity':(sc-22500)*0.02});
$('.app_p').css({'opacity':(sc-22500)*0.02})}
if(sc>23000){$('.oculus_app_login').css({'opacity':'0'});
$('.oculus_app_device2').css({'opacity':'1'})}
if(sc<22500){$('.app_p').css({'opacity':'0'})}
if(sc<=23000){$('.iphone_box').css({'opacity':'1'});
$('.oculus_device').css({'left':'20%'})
$('.oculus_device_right').css({'left':'40%'});
$('.oculus_device_left').css({'right':'0%'})}
if(sc>23000 && sc<=23500){$('.app_p').css({'opacity':1-(sc-23000)*0.002})
$('.iphone_box').css({'opacity':1-(sc-23000)*0.002});
$('.oculus_device').css({'left':20-((sc-23000)*0.04)+'%'});
$('.oculus_device_right').css({'left':40-((sc-23000)*0.04)+'%'});
$('.oculus_device_left').css({'right':((sc-23000)*0.04)+'%'})}
if(sc>23500){$('.app_p').css({'opacity':'0'});
$('.iphone_box').css({'opacity':'0'});
$('.oculus_device').css({'left':'-1%'});
$('.oculus_device_right').css({'left':'20%'})
$('.oculus_device_left').css({'right':'20%'})
if(sc<24000){$('.oculus_device_right').css({'opacity':'1'});
$('.oculus_device_left').css({'opacity':'1'})}}
if(sc>24000 && sc <=24500){$('.oculus_device').css({'transform':'scale('+(0.7+((sc-24000)*0.00025)) +')'});
$('.oculus_device_right').css({'opacity':1-(sc-24000)*0.02});
$('.oculus_device_left').css({'opacity':1-(sc-24000)*0.02})}
if(sc>24500){$('.oculus_device_right').css({'opacity':'0'});
$('.oculus_device_left').css({'opacity':'0'})}
if(sc<24500 || sc>27500){$('.oculus_charge_images').css({'opacity':'0'});
$('.oculus_charge_p').css({'opacity':'0'})}
if(sc>24500 && sc<=25000){$('.oculus_charge_images').css({'opacity':((sc-24500)*0.002)})
$('.oculus_charge_p').css({'opacity':((sc-24500)*0.002)})}
if(sc>24500 && sc<=25000){$('.oculus_device').css({'opacity':1-((sc-24500)*0.002)})}
if(sc>25000){$('.oculus_device').css({'opacity':'0'})}
if(sc<=25000){$('.oculus_charge_images').attr('src','images/oculus_charge_images/1.jpg')}
if(sc>25000 && sc<26000){$('.oculus_charge_images, .oculus_charge_p').css({'opacity':'1'})}
if(sc>25500 && sc<=26000){$('.oculus_charge_images, .oculus_charge_p').css({'opacity':1-((sc-25500)*0.002)})}
if(sc>26000){$('.oculus_charge_images, .oculus_charge_p').css({'opacity':'0'});
$('.mouse').css({'color':'#fff','border':'2px solid #fff'})
$('.mouse_wheel').css({'background-color':'#fff'})}
if(sc<26500){$('.xr2_Tumb').css({'opacity':'0'})}
if(sc>26500 && sc<=27000){$('.xr2_Tumb').css({'opacity':((sc-26500)*0.002)})}
if(sc>20000 && sc<=27500){$('.content1').css({'background-color':'#fff'})}
if(sc>27500 && sc<=28500){$('.content1').css({'background-color':'rgb('+(255-((sc-27500)*0.255))+','+(255-((sc-27500)*0.255))+','+(255-((sc-27500)*0.255))+')'})}
if(sc>28500){$('.content1').css({'background-color':'#000'})}
if(sc<=27005){$('.xr2_images_box').css({'margin-top':'0px','position':'relative'});
$('.xr2_images').attr('src','images/xr2_images/1.jpeg');
$('.xr2_comparison').css({'opacity':'1'})}
if(sc>27005 && sc<=28440){$('.xr2_images_box').css({'position':'fixed','margin-top':'0px'});
$('.xr2_comparison').css({'opacity':'0'})}
if(sc>28440){$('.xr2_images_box').css({'position':'relative','margin-top':'1440px'});
$('.xr2_images').attr('src','images/xr2_images/144.jpg');
$('.xr2_comparison').css({'opacity':'1'})}
if(sc<29200){$('.xr2_comparison div').stop().css({'width':'0%'});
$('.xr2_comparison p').css({'opacity':'0'})}
if(sc>=29200){
$('.xr2_comparison_list1>li:nth-child(1)>div').stop().css({'width': '40%'},0);
$('.xr2_comparison_list1>li:nth-child(2)>div').stop().css({'width':'20%'},50);
$('.xr2_comparison_list2>li:nth-child(1)>div').stop().css({'width':'50%'},100);
$('.xr2_comparison_list2>li:nth-child(2)>div').stop().css({'width':'20%'},150);
$('.xr2_comparison_list3>li:nth-child(1)>div').stop().css({'width':'60%'},200);
$('.xr2_comparison_list3>li:nth-child(2)>div').stop().css({'width':'20%'},250);
$('.xr2_comparison_list4>li:nth-child(1)>div').stop().css({'width':'70%'},300);
$('.xr2_comparison_list4>li:nth-child(2)>div').stop().css({'width':'10%'},350);
$('.xr2_comparison p').css({'opacity':'1'});
}
if(sc<=29800){$('.oculus_device_up_retouch').css({'top':'20%'})}
if(sc>29900){$('.oculus_device_up_retouch').css({'top':'50%'})}
if(sc>30000){$('.mouse').css({'color':'#000','border':'2px solid #000'});
$('.mouse_wheel').css({'background-color':'#000'})}
if(sc<=30700){$('.oculus_sound_effect').css({'opacity':'1'})}
if(sc>30700 && sc<=31000){$('.oculus_sound_effect').css({'opacity':(1-((sc-30700)*0.003))})}
if(sc>31000 && sc<=31200){$('.oculus_sound_effect').css({'opacity':(0.1+((sc-31000)*0.004))})}
if(sc>31200){$('.oculus_sound_effect').css({'opacity':'1'})}
if(sc<=32100){$('.oculus_sound_img1_box_p').css({'opacity':'0','margin-top':'70px'})}
if(sc>32100 && sc<32300){$('.oculus_sound_img1_box_p').css({'opacity':(sc-32100)*0.005,'margin-top':((70-(sc-32100)*0.1))+'px'})}
if(sc<=33500){$('.xr2_2_box').css({'position':'relative','margin-top':'0px'});
$('.xr2_2_left_box','.xr2_2_right_box').css({'position':'relative'})}
if(sc>33200){$('.oculus_sound_img1_box_p').css({'opacity':'1','margin-top':'50px'})}
if(sc>33390 && sc<=35490){$('.xr2_2_box').css({'position':'fixed','margin-top':'0px'});
$('.xr2_2_left_box','.xr2_2_right_box').css({'position':'fixed'})}
if(sc>35490){$('.xr2_2_box').css({'position':'absolute','margin-top':'2100px'});
$('.xr2_2_left_box','.xr2_2_right_box').css({'position':'relative'})}
if(sc<=34100){$('.xr2_2_left_box_p1').css({'opacity':'1','top':'45%'});
$('.xr2_2_game_img').css({'opacity':'1'});
$('.xr2_2_left_box').css({'background-color':'rgb(0,163,0)'})}
if(sc>34100 && sc<=34300){$('.xr2_2_left_box_p1').css({'top':(45-((sc-34100))*0.01)+'%','opacity':(1-((sc-34100)*0.005))});
$('.xr2_2_game_img').css({'opacity':(1-((sc-34100)*0.005))})}
if(sc>34300){$('.xr2_2_left_box_p1').css({'opacity':'0'});
$('.xr2_2_game_img').css({'opacity':'0'})}
if(sc<=34200){$('.xr2_2_left_box_p2').css({'opacity':'0','top':'47%'})}
$('.xr2_2_cv_img').css({'opacity':'0'});
if(sc>34200 && sc<=34400){$('.xr2_2_left_box_p2').css({'top':(47-((sc-34200))*0.01)+'%','opacity':((sc-34200)*0.005)});
$('.xr2_2_cv_img').css({'opacity':(((sc-34200)*0.005))})}
if(sc>34100 && sc<34400){$('.xr2_2_left_box').css({'background-color':'rgb('+((sc-34100)*0.85)+','+(163-((sc-34100)*0.21))+',0)'})}
if(sc>34400 && sc<=34900){$('.xr2_2_cv_img').css({'opacity':'1'});
$('.xr2_2_left_box').css({'background-color':'rgb(255,100,0)'})}
if(sc>34400 && sc<34600){$('.xr2_2_left_box_p2').css({'opacity':'1','top':'45%'});}
if(sc>34900 && sc<=35100){$('.xr2_2_left_box_p2').css({'top':(45-((sc-34900))*0.01)+'%','opacity':(1-((sc-34900)*0.005))});
$('.xr2_2_cv_img').css({'opacity':(1-((sc-34900)*0.005))})}
if(sc>35100){$('.xr2_2_left_box_p2').css({'opacity':'0'});
$('.xr2_2_cv_img').css({'opacity':'0'})}
if(sc<=35000){$('.xr2_2_left_box_p3').css({'opacity':'0'});
$('.xr2_2_5g_img').css({'opacity':'0'})}
if(sc>34900 & sc<=35100){$('.xr2_2_left_box').css({'background-color':'rgb(255,'+(100+((sc-34900)*0.775))+','+((sc-34900)*1.275)+')'});}
if(sc>35100){$('.xr2_2_left_box').css({'background-color':'rgb(255,255,255)'})}
if(sc>35000 && sc<=35200){$('.xr2_2_left_box_p3').css({'top':(47-((sc-35000))*0.01)+'%','opacity':((sc-35000)*0.005)});
$('.xr2_2_5g_img').css({'opacity':(((sc-35000)*0.005))})}
$('.companys_list>li>img').mouseenter(function(){
$(this).css({'opacity':'1'})})
$('.companys_list>li>img').mouseleave(function(){
$(this).css({'opacity':'0.7'})})
$('.comparison_list>li').click(function(){
$(this).children('ul').fadeIn().parent().siblings().children('ul').fadeOut();
$('.comparison_list>h2').text($(this).children('span').text())})
$('.comparison_list>h2').click(function(){
$('.comparison_list>li>span').stop().fadeToggle().css({'display':'inline-block'})})
})