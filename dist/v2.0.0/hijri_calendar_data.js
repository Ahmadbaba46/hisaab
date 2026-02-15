/**
 * Hijri Calendar Data Module - Islamic Calendar System
 * التقويم الهجري - نظام التقويم الإسلامي
 */

const HIJRI_MONTHS = [
    {
        number: 1,
        arabic: 'محرم',
        name: 'Muharram',
        meaning: 'Forbidden',
        meaningArabic: 'محرم - شهر حرام لا تحل فيه الحرب',
        days: 29,
        significance: [
            'أحد الأشهر الحرم',
            'يوم عاشوراء (10 محرم)',
            'بداية السنة الهجرية'
        ],
        blessedDays: [1, 10],
        recommended: ['صيام عاشوراء', 'الصدقة', 'الدعاء'],
        historicalEvents: [
            { year: 61, event: 'مقتل الحسين رضي الله عنه', day: 10 }
        ]
    },
    {
        number: 2,
        arabic: 'صفر',
        name: 'Safar',
        meaning: 'Empty/Whistling wind',
        meaningArabic: 'صفر - خلو أو صفير الرياح',
        days: 29,
        significance: [
            'شهر هجرة النبي ﷺ إلى المدينة',
            'لا علاقة له بالتشاؤم'
        ],
        blessedDays: [],
        recommended: ['الصيام', 'التعوذ من السوء'],
        historicalEvents: [
            { year: 1, event: 'بدء الهجرة' }
        ]
    },
    {
        number: 3,
        arabic: 'ربيع الأول',
        name: 'Rabi al-Awwal',
        meaning: 'First spring',
        meaningArabic: 'الربيع الأول',
        days: 30,
        significance: [
            'مولد النبي ﷺ',
            'وفاة النبي ﷺ'
        ],
        blessedDays: [12],
        recommended: ['الاحتفال بالمولد', 'قراءة السيرة', 'الصلاة على النبي'],
        historicalEvents: [
            { year: 570, event: 'مولد النبي ﷺ', day: 12 },
            { year: 11, event: 'وفاة النبي ﷺ', day: 12 }
        ]
    },
    {
        number: 4,
        arabic: 'ربيع الثاني',
        name: 'Rabi al-Thani',
        meaning: 'Second spring',
        meaningArabic: 'الربيع الثاني',
        days: 29,
        significance: [
            'شهر مبارك للتجارة والسفر'
        ],
        blessedDays: [],
        recommended: ['الصيام', 'الذكر'],
        historicalEvents: []
    },
    {
        number: 5,
        arabic: 'جمادى الأولى',
        name: 'Jumada al-Awwal',
        meaning: 'First frozen',
        meaningArabic: 'جمادى الأولى - وقت تجمد الماء',
        days: 30,
        significance: ['شهر شتوي'],
        blessedDays: [],
        recommended: ['الصيام', 'الاستغفار'],
        historicalEvents: []
    },
    {
        number: 6,
        arabic: 'جمادى الثانية',
        name: 'Jumada al-Thani',
        meaning: 'Second frozen',
        meaningArabic: 'جمادى الثانية',
        days: 29,
        significance: ['شهر شتوي'],
        blessedDays: [],
        recommended: ['الصيام', 'الذكر'],
        historicalEvents: []
    },
    {
        number: 7,
        arabic: 'رجب',
        name: 'Rajab',
        meaning: 'Respect/Honor',
        meaningArabic: 'رجب - شهر حرام معظم',
        days: 30,
        significance: [
            'أحد الأشهر الحرم',
            'شهر الإسراء والمعراج (27 رجب)',
            'شهر التحضير لرمضان'
        ],
        blessedDays: [1, 15, 27],
        recommended: ['الصيام', 'الصلاة', 'الدعاء', 'الاستغفار'],
        historicalEvents: [
            { year: 621, event: 'الإسراء والمعراج', day: 27 }
        ]
    },
    {
        number: 8,
        arabic: 'شعبان',
        name: 'Shaaban',
        meaning: 'Branch/Dissipate',
        meaningArabic: 'شعبان - تشعب فيه القبائل للماء',
        days: 29,
        significance: [
            'شهر التحضير لرمضان',
            'ليلة البراءة (15 شعبان)',
            'أكثر الشهور صياما للنبي ﷺ بعد رمضان'
        ],
        blessedDays: [15],
        recommended: ['الصيام', 'القيام', 'الاستغفار', 'التحضير لرمضان'],
        historicalEvents: [
            { year: 2, event: 'تحويل القبلة', day: 15 }
        ]
    },
    {
        number: 9,
        arabic: 'رمضان',
        name: 'Ramadan',
        meaning: 'Heat/Aridness',
        meaningArabic: 'رمضان - من الرمضاء الحر',
        days: 30,
        significance: [
            'شهر الصيام',
            'شهر نزول القرآن',
            'ليلة القدر',
            'أفضل شهور السنة'
        ],
        blessedDays: [1, 21, 23, 25, 27, 29],
        recommended: [
            'الصيام',
            'القيام',
            'تلاوة القرآن',
            'الصدقة',
            'الاعتكاف',
            'الدعاء'
        ],
        historicalEvents: [
            { year: 610, event: 'نزول القرآن', day: 17 },
            { year: 2, event: 'غزوة بدر الكبرى', day: 17 },
            { year: 8, event: 'فتح مكة', day: 20 }
        ]
    },
    {
        number: 10,
        arabic: 'شوال',
        name: 'Shawwal',
        meaning: 'Raised tail',
        meaningArabic: 'شوال - من شولت الناقة ذنبها',
        days: 29,
        significance: [
            'عيد الفطر (1 شوال)',
            'أيام التشريق الستة',
            'شهر الصيام التطوعي'
        ],
        blessedDays: [1, 2, 3, 4, 5, 6],
        recommended: ['صيام ست من شوال', 'التعجيل بالفطر', 'الصدقة'],
        historicalEvents: [
            { year: 2, event: 'غزوة أحد', day: 15 }
        ]
    },
    {
        number: 11,
        arabic: 'ذو القعدة',
        name: 'Dhul Qadah',
        meaning: 'Truce/Sitting',
        meaningArabic: 'ذو القعدة - شهر القعود عن الحرب',
        days: 30,
        significance: [
            'أحد الأشهر الحرم',
            'شهر الحج'
        ],
        blessedDays: [],
        recommended: ['الصيام', 'التحضير للحج'],
        historicalEvents: []
    },
    {
        number: 12,
        arabic: 'ذو الحجة',
        name: 'Dhul Hijjah',
        meaning: 'Pilgrimage',
        meaningArabic: 'ذو الحجة - شهر الحج',
        days: 29,
        significance: [
            'أحد الأشهر الحرم',
            'شهر الحج',
            'عيد الأضحى (10 ذو الحجة)',
            'أفضل أيام السنة (العشر الأوائل)'
        ],
        blessedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        recommended: [
            'الحج',
            'الأضحية',
            'التكبير',
            'الصيام خاصة يوم عرفة',
            'الأعمال الصالحة في العشر'
        ],
        historicalEvents: [
            { year: 10, event: 'حجة الوداع', day: 9 }
        ]
    }
];

const BLESSED_DAYS = {
    weekly: {
        friday: {
            arabic: 'الجمعة',
            significance: 'أفضل أيام الأسبوع',
            hadith: 'خير يوم طلعت فيه الشمس يوم الجمعة',
            recommended: ['الغسل', 'التبكير للصلاة', 'قراءة الكهف', 'الصلاة على النبي']
        },
        monday: {
            arabic: 'الاثنين',
            significance: 'يوم مولد النبي ويوم وفاته',
            recommended: ['الصيام', 'الصلاة على النبي']
        },
        thursday: {
            arabic: 'الخميس',
            significance: 'كان النبي يصومه',
            recommended: ['الصيام', 'الصدقة']
        }
    },
    yearly: {
        ashura: {
            arabic: 'عاشوراء',
            month: 'محرم',
            day: 10,
            significance: 'نجاة موسى من فرعون',
            recommended: ['صيام يوم عاشوراء والتاسع', 'الصدقة', 'إطعام الأهل'],
            hadith: 'صيام يوم عاشوراء يكفر سنة ماضية'
        },
        mawlid: {
            arabic: 'المولد النبوي',
            month: 'ربيع الأول',
            day: 12,
            significance: 'مولد النبي ﷺ',
            recommended: ['قراءة السيرة', 'الصلاة على النبي', 'الاحتفال']
        },
        israMiraj: {
            arabic: 'الإسراء والمعراج',
            month: 'رجب',
            day: 27,
            significance: 'رحلة النبي من مكة إلى القدس ثم السماء',
            recommended: ['القيام', 'الصيام', 'الدعاء']
        },
        laylatulBaraa: {
            arabic: 'ليلة البراءة',
            month: 'شعبان',
            day: 15,
            significance: 'ليلة المغفرة والبراءة من النار',
            recommended: ['القيام', 'الصيام', 'الاستغفار', 'الدعاء']
        },
        laylatulQadr: {
            arabic: 'ليلة القدر',
            month: 'رمضان',
            night: 'إحدى الليالي الوترية العشر الأواخر',
            significance: 'خير من ألف شهر، نزول القرآن',
            recommended: ['القيام', 'الدعاء', 'الاعتكاف', 'العبادة'],
            hadith: 'من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه'
        },
        arafah: {
            arabic: 'يوم عرفة',
            month: 'ذو الحجة',
            day: 9,
            significance: 'أفضل يوم في السنة، يوم الحج الأكبر',
            recommended: ['الصيام لغير الحاج', 'الدعاء', 'التكبير'],
            hadith: 'صيام يوم عرفة يكفر سنتين ماضية ومستقبلة'
        },
        eidFitr: {
            arabic: 'عيد الفطر',
            month: 'شوال',
            day: 1,
            significance: 'عيد المسلمين بعد رمضان',
            recommended: ['صلاة العيد', 'الزكاة', 'التهنئة', 'الأكل قبل الصلاة']
        },
        eidAdha: {
            arabic: 'عيد الأضحى',
            month: 'ذو الحجة',
            day: 10,
            significance: 'عيد الحج والأضحية',
            recommended: ['صلاة العيد', 'الأضحية', 'التكبير', 'التشريق']
        }
    }
};

const ISLAMIC_EVENTS = [
    { name: 'الهجرة', year: 1, month: 1, significance: 'بداية التقويم الهجري' },
    { name: 'غزوة بدر', year: 2, month: 9, day: 17, significance: 'أول غزوة كبرى' },
    { name: 'غزوة أحد', year: 3, month: 10, day: 15, significance: 'معركة أحد' },
    { name: 'صلح الحديبية', year: 6, month: 11, significance: 'معاهدة سلام' },
    { name: 'فتح مكة', year: 8, month: 9, day: 20, significance: 'فتح مكة المكرمة' },
    { name: 'غزوة تبوك', year: 9, month: 7, significance: 'آخر غزوة للنبي ﷺ' },
    { name: 'حجة الوداع', year: 10, month: 12, day: 9, significance: 'آخر حج للنبي ﷺ' },
    { name: 'وفاة النبي', year: 11, month: 3, day: 12, significance: 'انتقال النبي ﷺ للرفيق الأعلى' },
    { name: 'فتح الشام', year: 14, significance: 'فتح بلاد الشام' },
    { name: 'فتح مصر', year: 20, significance: 'فتح مصر' },
    { name: 'فتح القسطنطينية', year: 857, significance: 'تحقق البشارة النبوية' }
];

const HIJRI_CONVERSION_CONSTANTS = {
    julianDayOffset: 1948440,
    yearOffset: -1,
    monthOffset: -1,
    daysPerMonth: [29, 30],
    daysPerYear: 354.3666666666667,
    lunarCycle: 29.53058868,
    epoch: 1948439.5
};

function gregorianToHijri(year, month, day) {
    const jd = gregorianToJulianDay(year, month, day);
    return julianDayToHijri(jd);
}

function hijriToGregorian(year, month, day) {
    const jd = hijriToJulianDay(year, month, day);
    return julianDayToGregorian(jd);
}

function gregorianToJulianDay(year, month, day) {
    if (month <= 2) {
        year -= 1;
        month += 12;
    }
    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}

function julianDayToGregorian(jd) {
    const z = Math.floor(jd + 0.5);
    const a = Math.floor((z - 1867216.25) / 36524.25);
    const b = z + 1 + a - Math.floor(a / 4);
    const c = b + 1524;
    const d = Math.floor((c - 122.1) / 365.25);
    const e = Math.floor(365.25 * d);
    const f = Math.floor((c - e) / 30.6001);
    
    const day = Math.floor(c - e + Math.floor(30.6001 * f));
    const month = Math.floor(f - 1);
    const year = Math.floor(d - 4716);
    
    if (month > 12) {
        return { year: year + 1, month: month - 12, day };
    }
    return { year, month, day };
}

function hijriToJulianDay(year, month, day) {
    const adjustment = Math.floor((11 * year + 3) / 30);
    return day + Math.floor(29.5 * (month - 1)) + (year - 1) * 354 + adjustment + 1948439.5;
}

function julianDayToHijri(jd) {
    const l = Math.floor(jd - 1948439.5) + 10632;
    const n = Math.floor((l - 1) / 10631);
    const l2 = l - 10631 * n + 354;
    const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) + Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
    const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
    const month = Math.floor((24 * l3) / 709);
    const day = l3 - Math.floor((709 * month) / 24);
    const year = 30 * n + j - 30;
    
    return { year, month, day };
}

function getCurrentHijriDate() {
    const now = new Date();
    return gregorianToHijri(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

function getHijriMonthInfo(monthNumber) {
    return HIJRI_MONTHS.find(m => m.number === monthNumber) || null;
}

function getMonthByName(name) {
    return HIJRI_MONTHS.find(m => 
        m.arabic === name || 
        m.name.toLowerCase() === name.toLowerCase()
    ) || null;
}

function getBlessedDaysInMonth(monthNumber) {
    const month = getHijriMonthInfo(monthNumber);
    return month ? month.blessedDays : [];
}

function isBlessedDay(month, day) {
    const monthInfo = getHijriMonthInfo(month);
    if (!monthInfo) return false;
    return monthInfo.blessedDays.includes(day);
}

function getHolyMonths() {
    return [1, 7, 11, 12];
}

function isHolyMonth(monthNumber) {
    return getHolyMonths().includes(monthNumber);
}

function getRamadanInfo() {
    return getHijriMonthInfo(9);
}

function getHajjMonths() {
    return [11, 12];
}

function getIslamicYearSignificance(year) {
    const events = ISLAMIC_EVENTS.filter(e => e.year === year);
    return events.length > 0 ? events : null;
}

function getDaysInHijriMonth(month, year) {
    const monthInfo = getHijriMonthInfo(month);
    if (!monthInfo) return 30;
    
    const isLeapYear = ((11 * year + 14) % 30) < 11;
    const baseDays = monthInfo.days;
    
    if (month === 12 && isLeapYear) {
        return baseDays + 1;
    }
    return baseDays;
}

function getUpcomingBlessedDay() {
    const currentHijri = getCurrentHijriDate();
    
    for (let m = currentHijri.month; m <= 12; m++) {
        const month = getHijriMonthInfo(m);
        const blessedDays = month.blessedDays.filter(d => 
            (m === currentHijri.month && d > currentHijri.day) || m > currentHijri.month
        );
        if (blessedDays.length > 0) {
            return {
                month: m,
                day: blessedDays[0],
                monthName: month.arabic,
                significance: month.significance
            };
        }
    }
    return null;
}

module.exports = {
    HIJRI_MONTHS,
    BLESSED_DAYS,
    ISLAMIC_EVENTS,
    HIJRI_CONVERSION_CONSTANTS,
    gregorianToHijri,
    hijriToGregorian,
    getCurrentHijriDate,
    getHijriMonthInfo,
    getMonthByName,
    getBlessedDaysInMonth,
    isBlessedDay,
    getHolyMonths,
    isHolyMonth,
    getRamadanInfo,
    getHajjMonths,
    getIslamicYearSignificance,
    getDaysInHijriMonth,
    getUpcomingBlessedDay
};