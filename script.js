/* =====================================================
   سامانه خدمات الکترونیکی دبیرستان شهید بهشتی ۱
   Version 1.0
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("سامانه شهید بهشتی ۱ با موفقیت بارگذاری شد.");

    // افکت ورود دکمه‌ها
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {

        btn.style.opacity = "0";
        btn.style.transform = "translateY(25px)";

        setTimeout(() => {

            btn.style.transition = "all .6s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";

        }, index * 200);

    });

    // نمایش پیام خوش‌آمدگویی
    const welcome = document.getElementById("welcomeMessage");

    if (welcome) {

        const hour = new Date().getHours();

        let text = "";

        if (hour < 12)
            text = "🌸 صبح بخیر، به درگاه خدمات الکترونیکی دبیرستان شهید بهشتی ۱ خوش آمدید.";

        else if (hour < 18)
            text = "☀️ عصر بخیر، به درگاه خدمات الکترونیکی دبیرستان شهید بهشتی ۱ خوش آمدید.";

        else
            text = "🌙 شب بخیر، به درگاه خدمات الکترونیکی دبیرستان شهید بهشتی ۱ خوش آمدید.";

        welcome.innerHTML = text;
    }

});



/* ===========================
   باز کردن لینک در صفحه جدید
=========================== */

function openLink(url){

    window.open(url,"_blank");

}



/* ===========================
   عضویت در ایتا
=========================== */

function openEitaa(){

    openLink("https://eitaa.com/");

}



/* ===========================
   ثبت نام علوم تجربی
=========================== */

function sabtenamTajrobi(){

    openLink("https://digiform.ir/");

}



/* ===========================
   ثبت نام ریاضی
=========================== */

function sabtenamRiazi(){

    openLink("https://digiform.ir/");

}



/* ===========================
   فرم همکاران
=========================== */

function teachersForm(){

    openLink("https://digiform.ir/wbc6b57c9");

}



/* ===========================
   اسکرول نرم
=========================== */

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/* ===========================
   نمایش تاریخ فارسی
=========================== */

function showDate(){

    const today = new Date();

    const target = document.getElementById("today");

    if(target){

        target.innerHTML = today.toLocaleDateString('fa-IR');

    }

}

showDate();



/* ===========================
   ساعت زنده
=========================== */

function liveClock(){

    const clock=document.getElementById("clock");

    if(clock){

        clock.innerHTML=new Date().toLocaleTimeString('fa-IR');

    }

}

setInterval(liveClock,1000);



/* ===========================
   پایان فایل
=========================== */
