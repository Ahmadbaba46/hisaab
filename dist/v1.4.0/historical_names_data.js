/**
 * Historical Names Data Module - Famous Personalities Database
 * الأسماء التاريخية - قاعدة بيانات الشخصيات الشهيرة
 */

const HISTORICAL_FIGURES = {
    prophets: [
        {
            name: 'محمد',
            fullName: 'محمد بن عبدالله',
            title: 'خاتم الأنبياء',
            titleEnglish: 'Seal of the Prophets',
            birth: 570,
            death: 632,
            birthPlace: 'مكة المكرمة',
            significance: 'Last prophet of Islam, brought the Quran',
            significanceArabic: 'آخر الأنبياء، جاء بالقرآن الكريم',
            keyEvents: ['البعثة', 'الهجرة', 'فتح مكة', 'حجة الوداع']
        },
        {
            name: 'إبراهيم',
            title: 'أبو الأنبياء',
            titleEnglish: 'Father of the Prophets',
            era: '~2000 BCE',
            significance: 'Built the Kaaba, father of Ishmael and Isaac',
            significanceArabic: 'بنى الكعبة، أبو إسماعيل وإسحاق',
            keyEvents: ['بناء الكعبة', 'الذبح العظيم']
        },
        {
            name: 'موسى',
            title: 'كليم الله',
            titleEnglish: 'One who spoke with God',
            era: '~1300 BCE',
            significance: 'Received the Torah, led Israelites from Egypt',
            significanceArabic: 'تلقى التوراة، قاد بني إسرائيل من مصر',
            keyEvents: ['فرعون', 'البحر الأحمر', 'طور سيناء']
        },
        {
            name: 'عيسى',
            title: 'روح الله',
            titleEnglish: 'Spirit of God',
            birth: 0,
            significance: 'Received the Gospel, performed miracles',
            significanceArabic: 'تلقى الإنجيل، أجرى المعجزات',
            keyEvents: ['الميلاد', 'المعجزات', 'الصعود']
        },
        {
            name: 'داود',
            title: 'خليفة الله',
            titleEnglish: 'Vicegerent of God',
            era: '~1000 BCE',
            significance: 'Received the Psalms, king of Israel',
            significanceArabic: 'تلقى الزبور، ملك بني إسرائيل',
            keyEvents: ['جالوت', 'المملكة', 'الزبور']
        },
        {
            name: 'سليمان',
            title: 'نبي الله وملكه',
            titleEnglish: 'Prophet and King',
            era: '~970 BCE',
            significance: 'Wisest prophet, ruled jinn and animals',
            significanceArabic: 'أحكم الأنبياء، ملك الجن والحيوان',
            keyEvents: ['العرش', 'سبأ', 'الهيكل']
        },
        {
            name: 'يوسف',
            title: 'صديق',
            titleEnglish: 'The Truthful',
            era: '~1700 BCE',
            significance: 'Beautiful story in Quran, became vizier of Egypt',
            significanceArabic: 'له أجمل قصة في القرآن، أصبح عزيز مصر',
            keyEvents: ['البئر', 'السجن', 'عزيز مصر']
        },
        {
            name: 'نوح',
            title: 'نبي الله الأول',
            titleEnglish: 'First Prophet',
            era: '~3000 BCE',
            significance: 'Built the Ark, preached for 950 years',
            significanceArabic: 'بنى السفينة، دعا 950 سنة',
            keyEvents: ['السفينة', 'الطوفان']
        }
    ],
    sahaba: [
        {
            name: 'أبو بكر',
            fullName: 'أبو بكر الصديق',
            title: 'الصديق',
            titleEnglish: 'The Truthful',
            birth: 573,
            death: 634,
            significance: 'First caliph, closest companion of Prophet',
            significanceArabic: 'أول الخلفاء، أقرب صحابة النبي',
            role: 'أول الخلفاء الراشدين',
            keyEvents: ['الإسلام الأول', 'الهجرة', 'حروب الردة']
        },
        {
            name: 'عمر',
            fullName: 'عمر بن الخطاب',
            title: 'الفاروق',
            titleEnglish: 'The Distinguisher',
            birth: 584,
            death: 644,
            significance: 'Second caliph, expanded Islamic empire',
            significanceArabic: 'ثاني الخلفاء، وسّع الدولة الإسلامية',
            role: 'ثاني الخلفاء الراشدين',
            keyEvents: ['الإسلام', 'القدس', 'توسع الدولة']
        },
        {
            name: 'عثمان',
            fullName: 'عثمان بن عفان',
            title: 'ذو النورين',
            titleEnglish: 'Possessor of Two Lights',
            birth: 576,
            death: 656,
            significance: 'Third caliph, compiled the Quran',
            significanceArabic: 'ثالث الخلفاء، جمع القرآن',
            role: 'ثالث الخلفاء الراشدين',
            keyEvents: ['جمع القرآن', 'توسع الدولة']
        },
        {
            name: 'علي',
            fullName: 'علي بن أبي طالب',
            title: 'أمير المؤمنين',
            titleEnglish: 'Commander of the Faithful',
            birth: 600,
            death: 661,
            significance: 'Fourth caliph, cousin and son-in-law of Prophet',
            significanceArabic: 'رابع الخلفاء، ابن عم النبي وزوج ابنته',
            role: 'رابع الخلفاء الراشدين',
            keyEvents: ['الإسلام', 'الخلافة', 'الجمل', 'صفين']
        },
        {
            name: 'خالد',
            fullName: 'خالد بن الوليد',
            title: 'سيف الله',
            titleEnglish: 'Sword of God',
            death: 642,
            significance: 'Greatest military commander in Islamic history',
            significanceArabic: 'أعظم قائد عسكري في التاريخ الإسلامي',
            role: 'قائد عسكري',
            keyEvents: ['أحد', 'اليرموك', 'فتح الشام']
        },
        {
            name: 'حمزة',
            fullName: 'حمزة بن عبدالمطلب',
            title: 'سيد الشهداء',
            titleEnglish: 'Master of Martyrs',
            death: 625,
            significance: 'Uncle of Prophet, martyred at Uhud',
            significanceArabic: 'عم النبي، استشهد في أحد',
            role: 'عم النبي ﷺ',
            keyEvents: ['الإسلام', 'بدر', 'أحد']
        },
        {
            name: 'بلال',
            fullName: 'بلال بن رباح',
            title: 'أول مؤذن',
            titleEnglish: 'First Muezzin',
            significance: 'First muezzin in Islam, known for beautiful voice',
            significanceArabic: 'أول مؤذن في الإسلام، معروف بصوته الجميل',
            role: 'مؤذن النبي ﷺ',
            keyEvents: ['التعذيب', 'الهجرة', 'الأذان']
        },
        {
            name: 'سلمان',
            fullName: 'سلمان الفارسي',
            title: 'سلمان الخير',
            titleEnglish: 'Salman the Good',
            death: 656,
            significance: 'Persian companion, suggested trench strategy',
            significanceArabic: 'صحابي فارسي، اقترح حفر الخندق',
            role: 'صحابي جليل',
            keyEvents: ['البحث عن النبي', 'الخندق', 'مدائن']
        }
    ],
    scholars: [
        {
            name: 'البخاري',
            fullName: 'محمد بن إسماعيل البخاري',
            title: 'أمير المؤمنين في الحديث',
            titleEnglish: 'Commander of the Faithful in Hadith',
            birth: 810,
            death: 870,
            birthPlace: 'بخارى',
            significance: 'Compiled Sahih al-Bukhari, most authentic hadith collection',
            significanceArabic: 'جمع صحيح البخاري، أصح كتب الحديث',
            works: ['صحيح البخاري', 'الأدب المفرد', 'التاريخ الكبير']
        },
        {
            name: 'مسلم',
            fullName: 'مسلم بن الحجاج النيسابوري',
            title: 'إمام المحدثين',
            titleEnglish: 'Imam of Hadith Scholars',
            birth: 821,
            death: 875,
            significance: 'Compiled Sahih Muslim, second most authentic hadith collection',
            significanceArabic: 'جمع صحيح مسلم، ثاني أصح كتب الحديث',
            works: ['صحيح مسلم']
        },
        {
            name: 'الغزالي',
            fullName: 'أبو حامد الغزالي',
            title: 'حجة الإسلام',
            titleEnglish: 'Proof of Islam',
            birth: 1058,
            death: 1111,
            significance: 'Reviver of Islamic spirituality and philosophy',
            significanceArabic: 'مجدد التصوف والفلسفة الإسلامية',
            works: ['إحياء علوم الدين', 'تهافت الفلاسفة', 'المنقذ من الضلال']
        },
        {
            name: 'ابن سينا',
            fullName: 'أبو علي الحسين بن سينا',
            title: 'الشيخ الرئيس',
            titleEnglish: 'The Master Sheikh',
            birth: 980,
            death: 1037,
            significance: 'Father of early modern medicine, polymath',
            significanceArabic: 'أبو الطب الحديث، عالم موسوعي',
            works: ['القانون في الطب', 'الشفاء', 'الإشارات والتنبيهات']
        },
        {
            name: 'ابن رشد',
            fullName: 'أبو الوليد ابن رشد',
            title: 'الشارح الأكبر',
            titleEnglish: 'The Great Commentator',
            birth: 1126,
            death: 1198,
            significance: 'Philosopher and jurist, bridge between Islamic and Western thought',
            significanceArabic: 'فيلسوف وفقيه، جسر بين الفكر الإسلامي والغربي',
            works: ['تهافت التهافت', 'بداية المجتهد']
        },
        {
            name: 'ابن تيمية',
            fullName: 'تقي الدين ابن تيمية',
            title: 'شيخ الإسلام',
            titleEnglish: 'Sheikh of Islam',
            birth: 1263,
            death: 1328,
            significance: 'Reformer, influential theologian and jurist',
            significanceArabic: 'مجدد، عالم ومفكر مؤثر',
            works: ['مجموع الفتاوى', 'درء تعارض العقل والنقل']
        }
    ],
    rulers: [
        {
            name: 'صلاح الدين',
            fullName: 'صلاح الدين الأيوبي',
            title: 'السلطان الناصر',
            titleEnglish: 'The Victorious Sultan',
            birth: 1137,
            death: 1193,
            significance: 'Liberated Jerusalem from Crusaders',
            significanceArabic: 'حرر القدس من الصليبيين',
            keyEvents: ['حطين', 'تحرير القدس', 'الصليبيين']
        },
        {
            name: 'نور الدين',
            fullName: 'نور الدين محمود زنكي',
            title: 'المجاهد',
            titleEnglish: 'The Striver',
            birth: 1118,
            death: 1174,
            significance: 'United Muslims against Crusaders',
            significanceArabic: 'وحد المسلمين ضد الصليبيين',
            keyEvents: ['توحيد الشام', 'الإعداد لتحرير القدس']
        },
        {
            name: 'المأمون',
            fullName: 'محمد المأمون العباسي',
            title: 'أمير المؤمنين',
            titleEnglish: 'Commander of the Faithful',
            birth: 786,
            death: 833,
            significance: 'Golden age of Islamic science and translation',
            significanceArabic: 'العصر الذهبي للعلم والترجمة',
            keyEvents: ['بيت الحكمة', 'المأمونية']
        },
        {
            name: 'عبدالرحمن',
            fullName: 'عبدالرحمن الداخل',
            title: 'صقر قريش',
            titleEnglish: 'The Falcon of Quraysh',
            birth: 731,
            death: 788,
            significance: 'Founded Umayyad dynasty in Andalusia',
            significanceArabic: 'أسس الدولة الأموية في الأندلس',
            keyEvents: ['الهروب', 'الأندلس', 'قرطبة']
        },
        {
            name: 'محمد الفاتح',
            fullName: 'محمد الثاني',
            title: 'الفاتح',
            titleEnglish: 'The Conqueror',
            birth: 1432,
            death: 1481,
            significance: 'Conquered Constantinople, fulfilled prophecy',
            significanceArabic: 'فتح القسطنطينية، حقق البشارة',
            keyEvents: ['فتح القسطنطينية', '1453']
        }
    ],
    poets: [
        {
            name: 'المتنبي',
            fullName: 'أبو الطيب المتنبي',
            title: 'أمير الشعراء',
            titleEnglish: 'Prince of Poets',
            birth: 915,
            death: 965,
            significance: 'Greatest Arabic poet of all time',
            significanceArabic: 'أعظم شاعر عربي في التاريخ',
            famousVerses: ['إذا رأيت نيوب الليث بارزة', 'الخيل والليل والبيداء تعرفني']
        },
        {
            name: 'أبو نؤاس',
            fullName: 'أبو نؤاس الحسن بن هاني',
            title: 'شاعر الخمر',
            titleEnglish: 'Poet of Wine',
            birth: 756,
            death: 814,
            significance: 'Master of wine poetry and humor',
            significanceArabic: 'سيد شعر الخمر والفكاهة',
            famousVerses: ['دعني أصف لك ما عاينت', 'ما قلت طيقاء ولا كذبت']
        },
        {
            name: 'المعري',
            fullName: 'أبو العلاء المعري',
            title: 'رهين المحبسين',
            titleEnglish: 'Prisoner of Two Confinements',
            birth: 973,
            death: 1057,
            significance: 'Philosopher poet, blind visionary',
            significanceArabic: 'شاعر فيلسوف، رؤيوي أعمى',
            works: ['رسالة الغفران', 'لزوم ما لا يلزم']
        },
        {
            name: 'أحمد شوقي',
            fullName: 'أحمد شوقي',
            title: 'أمير الشعراء',
            titleEnglish: 'Prince of Poets',
            birth: 1868,
            death: 1932,
            significance: 'Modern Arab poetic renaissance leader',
            significanceArabic: 'رائد النهضة الشعرية العربية الحديثة',
            works: ['علي بك الكبير', 'مجنون ليلى', 'مصرع كليوباترا']
        }
    ],
    mystics: [
        {
            name: 'الجنيد',
            fullName: 'الجنيد البغدادي',
            title: 'سيد الطائفة',
            titleEnglish: 'Master of the Sufis',
            birth: 830,
            death: 910,
            significance: 'Father of sober Sufism',
            significanceArabic: 'أبوالتصوف المتزن',
            teachings: ['الفناء', 'الصحو', 'التوحيد']
        },
        {
            name: 'الرفاعي',
            fullName: 'أحمد الرفاعي',
            title: 'القطب الأكبر',
            titleEnglish: 'The Greatest Pole',
            birth: 1118,
            death: 1182,
            significance: 'Founder of Rifai Sufi order',
            significanceArabic: 'مؤسس الطريقة الرفاعية',
            teachings: ['المحبة', 'الخدمة', 'الذكر']
        },
        {
            name: 'الجيلاني',
            fullName: 'عبدالقادر الجيلاني',
            title: 'محبوب السنة',
            titleEnglish: 'Beloved of the Sunnah',
            birth: 1077,
            death: 1166,
            significance: 'Founder of Qadiri Sufi order',
            significanceArabic: 'مؤسس الطريقة القادرية',
            teachings: ['التوحيد', 'الزهد', 'الخدمة']
        },
        {
            name: 'ابن عربي',
            fullName: 'محيي الدين ابن عربي',
            title: 'الشيخ الأكبر',
            titleEnglish: 'The Greatest Sheikh',
            birth: 1165,
            death: 1240,
            significance: 'Greatest metaphysical philosopher of Sufism',
            significanceArabic: 'أعظم فيلسوف ميتافيزيقي في التصوف',
            works: ['الفتوحات المكية', 'فصوص الحكم']
        }
    ]
};

const NAME_HISTORICAL_EVENTS = {
    'محمد': [
        { year: 610, event: 'بدء الوحي', eventArabic: 'بدء الوحي في غار حراء' },
        { year: 622, event: 'الهجرة', eventArabic: 'الهجرة إلى المدينة المنورة' },
        { year: 630, event: 'فتح مكة', eventArabic: 'فتح مكة المكرمة' }
    ],
    'أحمد': [
        { year: 610, event: 'اسم النبي', eventArabic: 'أحد أسماء النبي محمد ﷺ' }
    ],
    'عمر': [
        { year: 634, event: 'الخلافة', eventArabic: 'تولى الخلافة الراشدة' },
        { year: 637, event: 'فتح القدس', eventArabic: 'فتح بيت المقدس' }
    ],
    'خالد': [
        { year: 636, event: 'اليرموك', eventArabic: 'معركة اليرموك' }
    ],
    'صلاح الدين': [
        { year: 1187, event: 'حطين', eventArabic: 'معركة حطين' },
        { year: 1187, event: 'تحرير القدس', eventArabic: 'تحرير بيت المقدس' }
    ]
};

function findHistoricalFigures(name) {
    const results = [];
    
    Object.keys(HISTORICAL_FIGURES).forEach(category => {
        HISTORICAL_FIGURES[category].forEach(figure => {
            const matchesName = figure.name === name;
            const matchesFullName = figure.fullName && figure.fullName.includes(name);
            
            if (matchesName || matchesFullName) {
                results.push({
                    ...figure,
                    category: category
                });
            }
        });
    });
    
    return results;
}

function getFiguresByCategory(category) {
    return HISTORICAL_FIGURES[category] || [];
}

function getHistoricalEvents(name) {
    return NAME_HISTORICAL_EVENTS[name] || [];
}

function getAllCategories() {
    return Object.keys(HISTORICAL_FIGURES);
}

module.exports = {
    HISTORICAL_FIGURES,
    NAME_HISTORICAL_EVENTS,
    findHistoricalFigures,
    getFiguresByCategory,
    getHistoricalEvents,
    getAllCategories
};