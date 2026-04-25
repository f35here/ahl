  (function(){
    // ---------- GROUPED MENU DATA (with sizes L/M and prices) ----------
    const groupedMenu = [
      // بوكسات (Boxes) - no sizes (single price)
      { name: "بوكس الزعيم", desc: "ميكس - بوكس الزعيم", category: "boxes", sizes: { ميكس: 335 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس العظمة", desc: "دجاج / لحم / ميكس", category: "boxes", sizes: { دجاج: 345, لحم: 400, ميكس: 370 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس الفتوة", desc: "دجاج / لحم / ميكس", category: "boxes", sizes: { دجاج: 320, لحم: 380, ميكس: 350 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس المعلم", desc: "دجاج / لحم", category: "boxes", sizes: { دجاج: 300, لحم: 330 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس البركة", desc: "", category: "boxes", sizes: { دجاج: 390 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس الديناميت", desc: "دجاج / لحم / ميكس", category: "boxes", sizes: { دجاج: 365, لحم: 450, ميكس: 410 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      { name: "بوكس القرمشة", desc: "كريسبي / بروست / ميكس", category: "boxes", sizes: { كريسبي: 200, بروست: 250, ميكس: 300 }, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop" },
      
      // شاورما (Sandwiches with L/M sizes)
      { name: "شاورما سوبر تشارجر", desc: "ساندويش مميز", category: "shawarma", sizes: { دجاج: 200, لحم: 250 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما ساندويش", desc: "دجاج / لحم / ميكس", category: "shawarma", sizes: { "M دجاج": 70, "M لحم": 90, "M ميكس": 80, "L دجاج": 85, "L لحم": 105, "L ميكس": 95 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما مع بطاطس وموزريلا", desc: "دجاج / لحم / ميكس", category: "shawarma", sizes: { دجاج: 110, لحم: 120, ميكس: 110 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما فينو", desc: "دجاج / لحم / ميكس", category: "shawarma", sizes: { دجاج: 90, لحم: 110, ميكس: 100 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما ديزل", desc: "دجاج / لحم / ميكس", category: "shawarma", sizes: { دجاج: 120, لحم: 140, ميكس: 130 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما كايزر", desc: "دجاج / لحم", category: "shawarma", sizes: { دجاج: 60, لحم: 75 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "ربع شاورما", desc: "دجاج / لحم", category: "shawarma", sizes: { دجاج: 155, لحم: 185 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "نص شاورما", desc: "دجاج / لحم", category: "shawarma", sizes: { دجاج: 290, لحم: 360 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      
      // وجبات شاورا (meals)
        // وجبات شاورما
      { name: "شاورما عربي", desc: "وجبة عربي", category: "shawarma_meals", sizes: { دجاج: 125, لحمة: 150, ميكس: 135 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما اكسترا", desc: "وجبة اكسترا", category: "shawarma_meals", sizes: { دجاج: 170, لحمة: 200, ميكس: 185 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما دبل", desc: "وجبة دبل", category: "shawarma_meals", sizes: { دجاج: 200, لحمة: 250, ميكس: 225 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },
      { name: "شاورما ماريا", desc: "وجبة ماريا", category: "shawarma_meals", sizes: { دجاج: 160, لحمة: 185, ميكس: 180 }, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop" },

      { name: "فتة شاورما (صغيرة)", desc: "فتة شاورما", category: "shawarma_meals", sizes: { دجاج: 95, لحمة: 110, ميكس: 105 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      { name: "فتة شاورما (متوسطة)", desc: "فتة شاورما", category: "shawarma_meals", sizes: { دجاج: 130, لحمة: 145, ميكس: 140 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      { name: "فتة شاورما أهل الشام", desc: "فتة أهل الشام", category: "shawarma_meals", sizes: { دجاج: 125, لحمة: 145, ميكس: 175 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      { name: "فتة شاورما أهل الشام (كبيرة)", desc: "فتة كبيرة", category: "shawarma_meals", sizes: { دجاج: 155, لحمة: 180 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      { name: "ميكس فتة أهل الشام", desc: "ميكس مميز", category: "shawarma_meals", sizes: { ميكس: 175 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      // بروست وبوكسات بروست
      { name: "ميني بوكس بروست (5 قطع)", desc: "2 صدر - 1 زرق - 1 جناح + بطاطس + تومية + صوص حار + كول سلو + خبز", category: "broast", sizes: { حار: 210 ,بارد: 210 }, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=400&fit=crop" },
      { name: "وجبة ربع صدر بروست", desc: "ربع صدر بروست + أرز + بطاطس مقلية + تومية + كول سلو + خبز", category: "broast", sizes: { حار: 150 ,بارد: 150 }, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=400&fit=crop" },
      { name: "وجبة ربع ورك بروست", desc: "ربع ورك بروست + أرز + بطاطس مقلية + تومية + كول سلو + خبز", category: "broast", sizes: { حار: 125 ,بارد: 125 }, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=400&fit=crop" },

      // دجاج مشوي (شواية)
      { name: "ربع دجاجة مشوي صدر", desc: "صدر دجاج مشوي + أرز + بطاطس مقلية + مايونيز خاص", category: "broast", sizes: { صدر: 140 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "ربع دجاجة مشوي ورك", desc: "ورك دجاج مشوي + أرز + بطاطس مقلية + مايونيز خاص", category: "broast", sizes: { ورك: 115 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "نص دجاجة مشوية", desc: "نصف دجاجة مع أرز و بطاطس مقلية و مايونيز خاص", category: "broast", sizes: { "سادة": 175, "إضافات": 210 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "دجاجة كاملة مشوية", desc: " دجاجة كاملة مع أرز و بطاطس مقلية و مايونيز خاص", category: "broast", sizes: { "سادة": 350, "إضافات": 400 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "ربع صدر مشوي مع كريسبي", desc: "صدر مشوي + قطع كريسبي + أرز + بطاطس + تومية + خبز", category: "broast", sizes: { صدر: 200 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "ربع ورك مشوي مع كريسبي", desc: "ورك مشوي + قطع كريسبي + أرز + بطاطس + تومية + خبز", category: "broast", sizes: { ورك: 175 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "وجبة توفير ورك", desc: "ورك + كفته + أرز + بطاطس + تومية + خبز + مخلل", category: "broast", sizes: { ورك: 180 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "وجبة توفير صدر", desc: "صدر + كفته + أرز + بطاطس + تومية + خبز + مخلل", category: "broast", sizes: { صدر: 210 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      // فرايز تشيكن (تصحيح الأسعار حسب الصورة)
      { name: "فرايز تشيكن", desc: "قطع كريسبي مقرمشة مع صوصات من اختيارك (باربيكيو - شيدر - رانش - مايونيز)", category: "fraz", sizes: { M: 105, L: 140 }, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop" },
      { name: "فرايز شاورما دجاج",  desc: "قطع كريسبي مقرمشة مع صوصات من اختيارك (باربيكيو - شيدر - رانش - مايونيز)",category: "fraz", sizes: { M: 95, L: 125 }, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=400&fit=crop" },
      // باستا
      // باستا (حسب الصورة)
      { name: "باستا نجرسكو", desc: "مكرونة بصوص الكريمة مع قطع صدور دجاج وفلفل وزيتون وموزريلا", category: "pasta", sizes: { نجرسكو: 95 }, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop" },
      { name: "باستا شاورما دجاج", desc: "مكرونة بصوص الكريمة مع شرائح شاورما دجاج", category: "pasta", sizes: { pasta: 105 }, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop" },
      { name: "باستا شاورما لحمة", desc: "مكرونة بصوص الكريمة مع شرائح شاورما لحمة", category: "pasta", sizes: { pasta: 120 }, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop" },
      { name: "باستا شاورما ميكس", desc: "مكرونة بصوص الكريمة مع شرائح شاورما ميكس (دجاج ولحمة)", category: "pasta", sizes: { pasta: 115 }, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop" } ,   
      // برجر
      { name: "تشيكن تكساس برجر", desc: "ساندويش دجاج تكساس", category: "burger", sizes: { NEW: 120 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "تشيكن بوفالو برجر", desc: "ساندويش دجاج بوفالو", category: "burger", sizes: { NEW: 120 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "تشيكن كلاسيك برجر", desc: "ساندويش دجاج كلاسيك", category: "burger", sizes: { كلاسيك: 100 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "تشيكن تشيز برجر", desc: "ساندويش دجاج بجبنة تشيدر", category: "burger", sizes: { تشيز: 110 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "بيف كلاسيك برجر", desc: "ساندويش لحم كلاسيك", category: "burger", sizes: { كلاسيك: 110 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "دبل أهل الشام المميز", desc: "دبل برجر مميز", category: "burger", sizes: { مميز: 150 }, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      // وجبات غربي
      // ساندويش غربي (وجبات غربي - ساندويشات)
      { name: "ساندويش مكسيكي", desc: "ساندويش مكسيكي", category: "western_meals", sizes: { ساندوتش: 95 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش فاهيتا", desc: "ساندويش فاهيتا", category: "western_meals", sizes: { ساندوتش: 95 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش زنجر دجاج", desc: "زنجر مقرمش", category: "western_meals", sizes: { ساندوتش: 100 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش كريسبي", desc: "كريسبي دجاج", category: "western_meals", sizes: { ساندوتش: 100 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش اسكالوب بانيه", desc: "اسكالوب بانيه", category: "western_meals", sizes: { ساندوتش: 100 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش تشيز اسكالوب بانيه", desc: "اسكالوب بانيه بالجبنة", category: "western_meals", sizes: { ساندوتش: 110 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش شيش طاووق", desc: "شيش طاووق", category: "western_meals", sizes: { ساندوتش: 100 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش سوبريم", desc: "سوبريم دجاج", category: "western_meals", sizes: { ساندوتش: 110 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش سوبر كرانشي", desc: "سوبر كرانشي", category: "western_meals", sizes: { ساندوتش: 110 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "ساندويش كفته جريل", desc: "كفتة مشوية", category: "western_meals", sizes: { ساندوتش: 100 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
        { name: "تشيز بطاطس", desc: "بطاطس بالجبنة", category: "western_meals", sizes: { ساندوتش: 50 }, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop" },
      { name: "بطاطس سويري", desc: "بطاطس سويري", category: "western_meals", sizes: { ساندوتش: 40 }, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop" },
      // كريب
            // وجبات غربي (وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار)
      { name: "سبيشال أهل الشام", desc: " وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 200 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة كريسبي", desc: " وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 210 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة زنجر", desc: " وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 200 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة مكسيكي", desc: " وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 190 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة فاهيتا", desc: "ووجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حارج", category: "western_meals", sizes: { وجبات: 190 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة اسكالوب بانيه", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 200 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة تشيز اسكالوب بانيه", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 210 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة شيش طاووق", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 190 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة سوبر كرانشي", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 210 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca5₀f₅?w=4₀₀&h=4₀₀&fit=crop" },
      { name: "وجبة سوبريم", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 210 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة كفته جريل", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 200 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "وجبة ميكس جريل", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 230 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      { name: "فتة الريزو", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 95 }, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop" },
      { name: "وجبة الأطفال", desc: "وجبات كاملة مع أز + بطاطس + خبز + تومية + مخلل + صوص حار", category: "western_meals", sizes: { وجبات: 150 }, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
      // كريب 
      { name: "كريب أهل الشام", desc: "كريب مميز", category: "crepe", sizes: { كريب: 125 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "سوبر كرانشي", desc: "كريب سوبر كرانشي", category: "crepe", sizes: { كريب: 110 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "كريب زنجر", desc: "كريب زنجر", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "كريسبي", desc: "كريب كريسبي", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "تشيكن رانش", desc: "كريب تشيكن رانش", category: "crepe", sizes: { كريب: 110 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "اسكالوب بانيه", desc: "كريب اسكالوب بانيه", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "مكسيكي دجاج", desc: "كريب مكسيكي", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "فاهيتا دجاج", desc: "كريب فاهيتا", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "شيش طاووق", desc: "كريب شيش طاووق", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "شاورما دجاج", desc: "كريب شاورما دجاج", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "شاورما لحمة", desc: "كريب شاورما لحمة", category: "crepe", sizes: { كريب: 115 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "شاورما ميكس", desc: "كريب شاورما ميكس", category: "crepe", sizes: { كريب: 110 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "مشكل دجاج", desc: "كريب مشكل دجاج", category: "crepe", sizes: { كريب: 100 }, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "بطاطس موزيل", desc: "بطاطس بالجبنة الموزريلا", category: "crepe", sizes: { كريب: 70 }, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop" },
      // بيتزا (حسب الجدول المرفق)
      { name: "بيتزا مارغريتا", desc: "مارغريتا", category: "pizza", sizes: { S: 70, M: 100, L: 125 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا فيجي", desc: "خضروات", category: "pizza", sizes: { S: 85, M: 120, L: 150 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا اكستر تشيز", desc: "جبنة إضافية", category: "pizza", sizes: { S: 100, M: 140, L: 170 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا سوسيس", desc: "سجق", category: "pizza", sizes: { S: 115, M: 150, L: 200 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا تشيكن كريسبي", desc: "دجاج كريسبي", category: "pizza", sizes: { S: 120, M: 160, L: 200 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا تشيكن رانش", desc: "دجاج رانش", category: "pizza", sizes: { S: 130, M: 170, L: 220 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا تشكن باربيكيو", desc: "دجاج باربيكيو", category: "pizza", sizes: { S: 125, M: 165, L: 215 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا تشيكن سوبريم", desc: "دجاج سوبريم", category: "pizza", sizes: { S: 120, M: 165, L: 215 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا سوبر سوبريم", desc: "سوبر سوبريم", category: "pizza", sizes: { S: 130, M: 180, L: 230 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا شاورما دجاج", desc: "شاورما دجاج", category: "pizza", sizes: { S: 115, M: 160, L: 200 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا شاورما لحمة", desc: "شاورما لحمة", category: "pizza", sizes: { S: 120, M: 165, L: 210 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      { name: "بيتزا شاورما ميكس", desc: "شاورما ميكس", category: "pizza", sizes: { S: 115, M: 160, L: 200 }, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },
      // مناقيش (حسب الجدول المرفق - يحتوي على S, M, L)
      { name: "منقوشة حلوم", desc: "جبنة حلوم", category: "manakeesh", sizes: { S: 25, M: 30, L: 30 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة محمرة", desc: "فلفل أحمر محمر", category: "manakeesh", sizes: { S: 15, M: 20, L: 20 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة زعتر", desc: "زعتر وزيت", category: "manakeesh", sizes: { S: 15, M: 20, L: 20 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة سنفورة", desc: "سنفورة", category: "manakeesh", sizes: { S: 20, M: 25, L: 50 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة سبانخ", desc: "سبانخ", category: "manakeesh", sizes: { S: 15, M: 20, L: 20 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة قشقوان", desc: "جبنة قشقوان", category: "manakeesh", sizes: { S: 20, M: 25, L: 50 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة مشكل جبن", desc: "مشكل جبن", category: "manakeesh", sizes: { L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة بيتزا سواريه", desc: "بيتزا سواريه", category: "manakeesh", sizes: { M: 20, L: 20 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة شيش طاووق", desc: "شيش طاووق", category: "manakeesh", sizes: { M: 30, L: 40 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة مكسيكي", desc: "مكسيكي", category: "manakeesh", sizes: { M: 25, L: 35 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة توشكا", desc: "توشكا", category: "manakeesh", sizes: { S: 30 , M: 45, L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة محمرة و قشقوان", desc: "محمرة مع قشقوان", category: "manakeesh", sizes: {S:20, M: 25, L: 50 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة زعتر و قشقوان", desc: "زعتر مع قشقوان", category: "manakeesh", sizes: {S:20, M: 25, L: 50 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة كيري و قشقوان", desc: "جبنة كيري مع قشقوان", category: "manakeesh", sizes: {S:25, M: 30, L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة حلوم و قشقوان", desc: "حلوم مع قشقوان", category: "manakeesh", sizes: { L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة شيش و قشقوان", desc: "شيش طاووق مع قشقوان", category: "manakeesh", sizes: {S:35, M: 45, L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      { name: "منقوشة مكسيكي و قشقوان", desc: "مكسيكي مع قشقوان", category: "manakeesh", sizes: {S:30, M: 40, L: 75 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop" },
      // مقبلات (سلطات، شوربات، مقبلات ساخنة) حسب الصورة
      // سلطات
      { name: "فتوش", desc: "سلطة فتوش", category: "appetizers", sizes: { سلطات: 40 }, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" },
      { name: "سلطة خضراء", desc: "سلطة خضار طازجة", category: "appetizers", sizes: { سلطات: 35 }, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" },
      { name: "كلوسلو", desc: "سلطة كول سلو", category: "appetizers", sizes: { سلطات: 30 }, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" },
      { name: "خبز محمص وتومية", desc: "خبز محمص مع ثومية", category: "appetizers", sizes: { سلطات: 30 }, image: "https://images.unsplash.com/photo-1509440159596-0249085222e9?w=400&h=400&fit=crop" },
      { name: "طبق تومية", desc: "طبق ثومية", category: "appetizers", sizes: { سلطات: 35 }, image: "https://images.unsplash.com/photo-1509440159596-0249085222e9?w=400&h=400&fit=crop" },
      { name: "مخلل صغير", desc: "مخلل مشكل حجم صغير", category: "appetizers", sizes: { مخلل: 10 }, image: "https://images.unsplash.com/photo-1604909052743-94e4b6c7a375?w=400&h=400&fit=crop" },
      { name: "مخلل كبير", desc: "مخلل مشكل حجم كبير", category: "appetizers", sizes: { مخلل: 20 }, image: "https://images.unsplash.com/photo-1604909052743-94e4b6c7a375?w=400&h=400&fit=crop" },
      // شوربات
      { name: "شوربة كريمة دجاج", desc: "شوربة كريمة الدجاج", category: "appetizers", sizes: { شوربات: 50 }, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop" },
      { name: "شوربة كريمة مشروم", desc: "شوربة كريمة المشروم", category: "appetizers", sizes: { شوربات: 50 }, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop" },
      { name: "شوربة كريمة ميكس", desc: "شوربة كريمة مشكلة", category: "appetizers", sizes: { شوربات: 50 }, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop" },
      // مقبلات ساخنة
      { name: "بطاطس مقلية", desc: "بطاطس مقلية مقرمشة", category: "appetizers", sizes: { مقبلات: 25 }, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop" },
      { name: "طبق أز صغير", desc: "أرز أبيض حجم صغير", category: "appetizers", sizes: { مقبلات: 30 }, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
      { name: "طبق أز كبير", desc: "أرز أبيض حجم كبير", category: "appetizers", sizes: { مقبلات: 45 }, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
      // عصائر (Juices)
      { name: "عصير برتقال", desc: "برتقال طازج", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير فراولة", desc: "فراولة طازجة", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير مانجا", desc: "مانجا طازجة", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير جوفافة", desc: "جوافة طازجة", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير ليمون", desc: "ليمون طازج", category: "drinks", sizes: { عصائر: 40 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير كيوي", desc: "كيوي طازج", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير بطيخ", desc: "بطيخ طازج", category: "drinks", sizes: { عصائر: 40 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير ليمون نعناع", desc: "ليمون بالنعناع", category: "drinks", sizes: { عصائر: 40 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير موز باللبن", desc: "موز مع اللبن", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "عصير فراولة موز باللبن", desc: "فراولة وموز مع اللبن", category: "drinks", sizes: { عصائر: 50 }, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },

      // مشروبات غازية ومياه
      { name: "مشروب غازي (كان)", desc: "كوكاكولا / سبرايت / فانتا", category: "drinks", sizes: { مشروبات: 20 }, image: "https://images.unsplash.com/photo-1622484211884-8e8e5eb5df12?w=400&h=400&fit=crop" },
      { name: "مياه معدنية صغيرة", desc: "مياه 330 مل", category: "drinks", sizes: { مشروبات: 6 }, image: "https://images.unsplash.com/photo-1616118132534-381e8988ff92?w=400&h=400&fit=crop" },
      { name: "مياه معدنية كبيرة", desc: "مياه 1.5 لتر", category: "drinks", sizes: { مشروبات: 10 }, image: "https://images.unsplash.com/photo-1616118132534-381e8988ff92?w=400&h=400&fit=crop" },

      // كوكتيل وحلويات
      { name: "فروت سلاد", desc: "سلطة فواكه طازجة", category: "drinks", sizes: { حلو: 55 }, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" },
      { name: "نوتيلا", desc: "حلوى نوتيلا", category: "drinks", sizes: { حلو: 55 }, image: "https://images.unsplash.com/photo-1541783245831-57f6f8c7e7e7?w=400&h=400&fit=crop" },
      { name: "مولتن كيك", desc: "كيك الشوكولاتة السائلة", category: "drinks", sizes: { حلو: 70 }, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop" },
      { name: "شوكولاتة كيك", desc: "كيك شوكولاتة", category: "drinks", sizes: { حلو: 40 }, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9581?w=400&h=400&fit=crop" },
      { name: "تشيز كيك", desc: "تشيز كيك كلاسيك", category: "drinks", sizes: { حلو: 40 }, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop" },
      { name: "امبراطورية وايت", desc: "كوكتيل امبراطورية وايت", category: "drinks", sizes: { حلو: 50 }, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" },
      { name: "امبراطورية ريد", desc: "كوكتيل امبراطورية ريد", category: "drinks", sizes: { حلو: 50 }, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" },
      { name: "كرانشي", desc: "كوكتيل كرانشي", category: "drinks", sizes: { حلو: 50 }, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" },
      { name: "كوكتيل استوائي", desc: "كوكتيل استوائي", category: "drinks", sizes: { حلو: 50 }, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" }
    ];

    // Categories as before
    const categories = [
      { id: "boxes", name: "بوكسات", icon: "fas fa-box" },
      { id: "shawarma", name: "شاورما", icon: "fas fa-stroopwafel" },
      { id: "shawarma_meals", name: "وجبات شاورما", icon: "fas fa-utensils" },
      { id: "broast", name: "بروست", icon: "fas fa-drumstick-bite" },
      { id: "fraz", name: "فرايد تشيكن", icon: "fas fa-drumstick-bite" },
      { id: "pasta", name: "باستا", icon: "fas fa-bowl-food" },
      { id: "burger", name: "برجر", icon: "fas fa-burger" },
      { id: "western_meals", name: "غربي", icon: "fas fa-plate-wheat" },
      { id: "crepe", name: "كريب", icon: "fas fa-stroopwafel" },
      { id: "pizza", name: "بيتزا", icon: "fas fa-pizza-slice" },
      { id: "manakeesh", name: "مناقيش", icon: "fas fa-bread-slice" },
      { id: "appetizers", name: "مقبلات", icon: "fas fa-seedling" },
      { id: "drinks", name: "عصائر", icon: "fas fa-glass-water" },
      { id: "selection", name: "طلبك", icon: "fas fa-basket-shopping" }
    ];

    const STORAGE_KEY = 'ahlalsham_grouped';
    let selection = []; // each item: { id, name, size, price, quantity, fullName }
    let nextId = 0;
    let activeCategory = "boxes";
    let currentSearch = "";
    let isLoading = false;
    let loadTimeout = null;
    let cardObserver = null;
    let currentItemSelectedSize = {}; // store selected size key per card (by item name)

    const dynamicContainer = document.getElementById("dynamicContent");
    const searchInput = document.getElementById("searchInput");
    const searchWrapper = document.getElementById("searchWrapper");
    const bottomNav = document.getElementById("bottomNav");

    function loadSelection() {
      const stored = localStorage.getItem(STORAGE_KEY);
      if(stored) {
        try {
          let parsed = JSON.parse(stored);
          if(Array.isArray(parsed)) { selection = parsed; if(selection.length) nextId = Math.max(...selection.map(i=>i.id)) + 1; }
        } catch(e) {}
      }
    }
    function saveSelection() { localStorage.setItem(STORAGE_KEY, JSON.stringify(selection)); }

    function showToast(msg) {
      let toast = document.querySelector('.toast-notification');
      if(toast) toast.remove();
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
      document.body.appendChild(toast);
      setTimeout(()=> toast.classList.add('show'), 10);
      setTimeout(()=> { toast.classList.remove('show'); setTimeout(()=>toast.remove(), 300); }, 1800);
    }

    function addToSelection(itemName, sizeKey, price) {
      let sizeLabel = sizeKey === 'default' ? '' : ` (${sizeKey})`;
      let displayName = itemName + sizeLabel;
      let existing = selection.find(i => i.name === itemName && i.size === sizeKey);
      if(existing) existing.quantity++;
      else selection.push({ id: nextId++, name: itemName, size: sizeKey, price, quantity: 1, displayName });
      saveSelection();
      showToast(`تم إضافة ${displayName || itemName}`);
      if(activeCategory === "selection") renderSelectionPage();
    }

    function updateQty(id, delta) {
      let idx = selection.findIndex(i=> i.id === id);
      if(idx !== -1) {
        let newQty = selection[idx].quantity + delta;
        if(newQty <= 0) selection.splice(idx,1);
        else selection[idx].quantity = newQty;
        saveSelection();
        if(activeCategory === "selection") renderSelectionPage();
      }
    }
    function removeItem(id) { selection = selection.filter(i=> i.id !== id); saveSelection(); if(activeCategory === "selection") renderSelectionPage(); }
    function clearAll() { selection = []; saveSelection(); if(activeCategory === "selection") renderSelectionPage(); }

    function renderSelectionPage() {
      if(!selection.length) {
        dynamicContainer.innerHTML = `<div class="selection-view"><div class="selection-header"><h3><i class="fas fa-basket-shopping"></i> طلبك الحالي</h3><button id="clearAllBtn" class="clear-btn"><i class="fas fa-trash-alt"></i> مسح</button></div><div class="empty-selection">✋ لم تضف أي عنصر بعد. اضغط + على أي صنف.</div><div class="selection-total"><span>الإجمالي:</span><span>0 ج.م</span></div></div>`;
        let btn = document.getElementById("clearAllBtn"); if(btn) btn.onclick = clearAll;
        return;
      }
      let total = 0;
      let itemsHtml = selection.map(item => {
        total += item.price * item.quantity;
        let nameDisplay = item.displayName || item.name + (item.size && item.size !== 'default' ? ` (${item.size})` : '');
        return `<div class="selection-item" data-id="${item.id}"><div class="item-details"><div class="item-title">${nameDisplay}</div><div class="item-price-sm">${item.price} ج.م</div></div><div class="item-actions"><button class="qty-btn dec-qty" data-id="${item.id}">-</button><span class="item-qty">${item.quantity}</span><button class="qty-btn inc-qty" data-id="${item.id}">+</button><button class="remove-item" data-id="${item.id}"><i class="fas fa-trash-can"></i></button></div></div>`;
      }).join('');
      dynamicContainer.innerHTML = `<div class="selection-view"><div class="selection-header"><h3><i class="fas fa-basket-shopping"></i> طلبك الحالي</h3><button id="clearAllBtn" class="clear-btn"><i class="fas fa-trash-alt"></i> مسح</button></div><div class="selection-list">${itemsHtml}</div><div class="selection-total"><span>الإجمالي:</span><span>${total} ج.م</span></div></div>`;
      document.querySelectorAll(".dec-qty").forEach(btn=> btn.addEventListener("click",(e)=> updateQty(parseInt(btn.dataset.id), -1)));
      document.querySelectorAll(".inc-qty").forEach(btn=> btn.addEventListener("click",(e)=> updateQty(parseInt(btn.dataset.id), 1)));
      document.querySelectorAll(".remove-item").forEach(btn=> btn.addEventListener("click",(e)=> removeItem(parseInt(btn.dataset.id))));
      let clearBtn = document.getElementById("clearAllBtn"); if(clearBtn) clearBtn.onclick = clearAll;
    }

    function getFilteredMenu() {
      let filtered = groupedMenu.filter(i=> i.category === activeCategory);
      if(currentSearch.trim()) {
        let kw = currentSearch.toLowerCase();
        filtered = filtered.filter(i=> i.name.includes(kw) || i.desc.includes(kw));
      }
      return filtered;
    }

    function renderMenuCards(items) {
      if(!items.length) { dynamicContainer.innerHTML = `<div class="no-results"><i class="fas fa-search"></i> لا توجد عناصر</div>`; return; }
      let cardsHtml = '';
      items.forEach(item => {
        let sizeOptions = Object.keys(item.sizes);
        let defaultSize = sizeOptions[0];
        let selectedSize = currentItemSelectedSize[item.name] || defaultSize;
        let currentPrice = item.sizes[selectedSize];
        let sizeButtonsHtml = sizeOptions.map(sz => `<button class="size-btn ${selectedSize === sz ? 'active' : ''}" data-item="${item.name}" data-size="${sz}">${sz === 'default' ? 'عادي' : sz}</button>`).join('');
        cardsHtml += `
          <div class="menu-card" data-item-name="${item.name}">
            <div class="card-img"><img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=أهل+الشام'"></div>
            <div class="card-info">
              <div class="item-name">${item.name}</div>
              <div class="item-desc">${item.desc}</div>
              <div class="size-buttons">${sizeButtonsHtml}</div>
              <div class="price-row">
                <div class="price"><i class="fas fa-coins"></i> ${currentPrice} ج.م</div>
                <button class="add-btn" data-name="${item.name}" data-price="${currentPrice}" data-size="${selectedSize}"><i class="fas fa-plus"></i></button>
              </div>
            </div>
          </div>`;
      });
      dynamicContainer.innerHTML = cardsHtml;
      // attach size button events
      document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          let itemName = btn.dataset.item;
          let newSize = btn.dataset.size;
          // update active class
          let parentCard = btn.closest(".menu-card");
          parentCard.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          // update price and add-btn data
          let itemData = groupedMenu.find(i => i.name === itemName);
          let newPrice = itemData.sizes[newSize];
          let priceSpan = parentCard.querySelector(".price");
          priceSpan.innerHTML = `<i class="fas fa-coins"></i> ${newPrice} ج.م`;
          let addBtn = parentCard.querySelector(".add-btn");
          addBtn.dataset.price = newPrice;
          addBtn.dataset.size = newSize;
          currentItemSelectedSize[itemName] = newSize;
        });
      });
      document.querySelectorAll(".add-btn").forEach(btn=> btn.addEventListener("click",(e)=>{
        e.stopPropagation();
        let name = btn.dataset.name;
        let price = parseInt(btn.dataset.price);
        let size = btn.dataset.size;
        btn.classList.add("added-animation"); setTimeout(()=> btn.classList.remove("added-animation"),300);
        addToSelection(name, size, price);
      }));
    }

    function observeCards() {
      if(cardObserver) cardObserver.disconnect();
      let cards = document.querySelectorAll(".menu-card");
      cards.forEach(c=>c.classList.remove("revealed"));
      cardObserver = new IntersectionObserver(entries=> entries.forEach(e=> { if(e.isIntersecting){ e.target.classList.add("revealed"); cardObserver.unobserve(e.target); } }), { threshold:0.1 });
      cards.forEach(c=>cardObserver.observe(c));
      cards.forEach(c=>{ if(c.getBoundingClientRect().top < window.innerHeight-80) c.classList.add("revealed"); });
    }

    function refreshMenu() {
      if(isLoading || activeCategory === "selection") return;
      renderMenuCards(getFilteredMenu());
      observeCards();
    }

    function switchCategory(catId) {
      if(loadTimeout) clearTimeout(loadTimeout);
      isLoading = true;
      dynamicContainer.innerHTML = `<div class="loading-spinner"><div class="spinner"></div></div>`;
      loadTimeout = setTimeout(()=>{
        activeCategory = catId;
        if(activeCategory === "selection") { searchWrapper.classList.add("search-hidden"); renderSelectionPage(); }
        else { searchWrapper.classList.remove("search-hidden"); renderMenuCards(getFilteredMenu()); observeCards(); }
        isLoading = false;
        loadTimeout = null;
      }, 200);
    }

    function renderBottomNav() {
      bottomNav.innerHTML = categories.map(cat => `<button class="nav-item ${activeCategory===cat.id ? 'active':''}" data-category="${cat.id}"><i class="${cat.icon}"></i><span>${cat.name}</span></button>`).join('');
      document.querySelectorAll(".nav-item").forEach(btn=> btn.addEventListener("click",()=>{
        let catId = btn.dataset.category;
        if(catId === activeCategory || isLoading) return;
        if(catId !== "selection") { searchInput.value = ""; currentSearch = ""; }
        document.querySelectorAll(".nav-item").forEach(n=> n.classList.remove("active"));
        btn.classList.add("active");
        switchCategory(catId);
        document.querySelector(".menu-section").scrollIntoView({ behavior: "smooth", block:"start" });
      }));
    }

    let searchDeb;
    function handleSearch(e) {
      if(activeCategory === "selection") return;
      if(searchDeb) clearTimeout(searchDeb);
      searchDeb = setTimeout(()=>{
        currentSearch = e.target.value.trim();
        if(!isLoading){
          dynamicContainer.style.opacity = "0.6";
          setTimeout(()=>{ refreshMenu(); dynamicContainer.style.opacity="1"; }, 120);
        } else refreshMenu();
      }, 250);
    }

    loadSelection();
    renderBottomNav();
    searchInput.addEventListener("input", handleSearch);
    switchCategory("boxes");
  })();
