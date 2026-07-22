/* ==========================================
   درگاه خدمات الکترونیکی
   دبیرستان شهید بهشتی ۱ شهرکرد
   نسخه 2.0
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("سامانه دبیرستان شهید بهشتی ۱ با موفقیت بارگذاری شد.");

    /* انیمیشن ورود دکمه‌ها */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {

        btn.style.opacity = "0";
        btn.style.transform = "translateY(30px)";

        setTimeout(() => {
            btn.style.transition = "all 0.6s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, index * 150);

    });

    /* افکت کلیک */

    buttons.forEach(btn => {

        btn.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {
                this.style.transform = "";
            }, 150);

        });

    });

    /* پیام خوش آمد */

    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "🌞 صبح بخیر، به سامانه دبیرستان شهید بهشتی ۱ خوش آمدید.";

    } else if (hour < 18) {

        message = "🌤 عصر بخیر، برای شما آرزوی موفقیت داریم.";

    } else {

        message = "🌙 شب بخیر، از حضور شما سپاسگزاریم.";

    }

    console.log(message);

});
