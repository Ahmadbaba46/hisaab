/**
 * Sahaba Names Data Module - Companions of the Prophet ﷺ
 * أسماء الصحابة - رضوان الله عليهم
 */

const SAHABA_DATABASE = {
    asharaMubashara: [
        {
            name: 'أبو بكر',
            fullName: 'أبو بكر الصديق عبدالله بن عثمان',
            kunya: 'أبو بكر',
            title: 'الصديق',
            titleMeaning: 'The one who confirms truth',
            birth: 573,
            death: 634,
            deathPlace: 'المدينة المنورة',
            burialPlace: 'بجانب النبي ﷺ',
            islamYear: 'أول من أسلم من الرجال',
            lineage: 'تيم قريش',
            virtues: [
                'أول من أسلم من الرجال الأحرار',
                'صاحب النبي ﷺ في الغار',
                'أول الخلفاء الراشدين',
                'أمر النبي ﷺ بالصلاة خلفه'
            ],
            hadithsAbout: [
                'لو وزن إيمان أبي بكر بإيمان الناس لرجح',
                'أبو بكر في الجنة، عمر في الجنة، عثمان في الجنة، علي في الجنة'
            ],
            value: null,
            digitRoot: null
        },
        {
            name: 'عمر',
            fullName: 'عمر بن الخطاب بن نفيل',
            kunya: 'أبو حفص',
            title: 'الفاروق',
            titleMeaning: 'The one who distinguishes truth from falsehood',
            birth: 584,
            death: 644,
            deathPlace: 'المدينة المنورة',
            burialPlace: 'بجانب النبي ﷺ وأبي بكر',
            islamYear: '5 قبل الهجرة',
            lineage: 'عدي قريش',
            virtues: [
                'أعز الله به الإسلام',
                'ثاني الخلفاء الراشدين',
                'فتح في عهده بلاد الشام ومصر والعراق وفارس',
                'أول من سمي بأمير المؤمنين'
            ],
            hadithsAbout: [
                'لو كان بعدي نبي لكان عمر',
                'إن الله يضع الحق على لسان عمر وقلبه'
            ],
            value: null,
            digitRoot: null
        },
        {
            name: 'عثمان',
            fullName: 'عثمان بن عفان بن أبي العاص',
            kunya: 'أبو عبدالله',
            title: 'ذو النورين',
            titleMeaning: 'Possessor of two lights - married two daughters of the Prophet',
            birth: 576,
            death: 656,
            deathPlace: 'المدينة المنورة',
            burialPlace: 'البقيع',
            islamYear: 'من أوائل المسلمين',
            lineage: 'أمية قريش',
            virtues: [
                'جمع القرآن في مصحف واحد',
                'جهز جيش العسرة',
                'ثالث الخلفاء الراشدين',
                'تزوج ابنتي النبي ﷺ'
            ],
            hadithsAbout: [
                'ألا أستحي ممن تستحي منه الملائكة',
                'لكل نبي رفيق في الجنة ورفيقي عثمان'
            ],
            value: null,
            digitRoot: null
        },
        {
            name: 'علي',
            fullName: 'علي بن أبي طالب بن عبدالمطلب',
            kunya: 'أبو الحسن',
            title: 'أمير المؤمنين',
            titleMeaning: 'Commander of the Faithful',
            birth: 600,
            death: 661,
            deathPlace: 'الكوفة',
            burialPlace: 'النجف',
            islamYear: 'أول من أسلم من الصبيان',
            lineage: 'هاشم قريش',
            virtues: [
                'ابن عم النبي ﷺ',
                'زوج فاطمة الزهراء',
                'باب مدينة العلم',
                'رابع الخلفاء الراشدين'
            ],
            hadithsAbout: [
                'أنت مني بمنزلة هارون من موسى',
                'علي مع الحق والحق مع علي'
            ],
            value: 110,
            digitRoot: 2
        },
        {
            name: 'طلحة',
            fullName: 'طلحة بن عبيدالله التيمي',
            kunya: 'أبو محمد',
            title: 'طلحة الخير',
            titleMeaning: 'Talha the Good',
            death: 656,
            islamYear: 'من أوائل المسلمين',
            lineage: 'تيم قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'نزل فيه آية: {من المؤمنين رجال صدقوا}',
                'وقى النبي ﷺ يوم أحد'
            ],
            hadithsAbout: ['من سره أن ينظر إلى شهيد يمشي على وجه الأرض فلينظر إلى طلحة']
        },
        {
            name: 'زبير',
            fullName: 'الزبير بن العوام الأسدي',
            kunya: 'أبو عبدالله',
            title: 'حواري الرسول',
            titleMeaning: 'Disciple of the Messenger',
            death: 656,
            islamYear: 'من أوائل المسلمين',
            lineage: 'أسد قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'ابن عمة النبي ﷺ',
                'سيف من سيوف الله'
            ],
            hadithsAbout: ['إن لكل نبي حواريا وحواري الزبير']
        },
        {
            name: 'سعد',
            fullName: 'سعد بن أبي وقاص الزهري',
            kunya: 'أبو إسحاق',
            title: 'الفاتح',
            titleMeaning: 'The Conqueror',
            death: 674,
            burialPlace: 'المدينة المنورة',
            islamYear: 'من أوائل المسلمين',
            lineage: 'زهرة قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'فاتح العراق وفارس',
                'أول من رمى في سبيل الله'
            ],
            hadithsAbout: ['ارمِ سعد فداك أبي وأمي']
        },
        {
            name: 'سعيد',
            fullName: 'سعيد بن زيد بن عمرو',
            kunya: 'أبو الأعور',
            title: 'السعيد',
            titleMeaning: 'The Happy One',
            death: 670,
            burialPlace: 'المدينة المنورة',
            islamYear: 'من أوائل المسلمين',
            lineage: 'عدي قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'ابن أخي عمر بن الخطاب',
                'شهد المشاهد كلها'
            ],
            hadithsAbout: ['مات عمر وسعيد بن زيد في الدنيا لم يبق أحد يشك في فضله']
        },
        {
            name: 'عبدالرحمن',
            fullName: 'عبدالرحمن بن عوف الزهري',
            kunya: 'أبو محمد',
            title: 'التاجر الأمين',
            titleMeaning: 'The Trustworthy Merchant',
            death: 652,
            burialPlace: 'البقيع',
            islamYear: 'من أوائل المسلمين',
            lineage: 'زهرة قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'كثير الصدقة والإنفاق',
                'صاحب المباضعة في التجارة'
            ],
            hadithsAbout: ['عبدالرحمن بن عوف سيد من سادات أهل الجنة']
        },
        {
            name: 'أبو عبيدة',
            fullName: 'أبو عبيدة عامر بن عبدالله الجراح',
            kunya: 'أبو عبيدة',
            title: 'أمين الأمة',
            titleMeaning: 'Trustee of the Ummah',
            death: 639,
            deathPlace: 'عمواس',
            islamYear: 'من أوائل المسلمين',
            lineage: 'فهر قريش',
            virtues: [
                'من العشرة المبشرين بالجنة',
                'فتح الشام',
                'نزع الحلقتين من وجه النبي ﷺ يوم أحد'
            ],
            hadithsAbout: ['إن لكل أمة أمينا وأمين هذه الأمة أبو عبيدة بن الجراح']
        }
    ],
    prominentSahaba: [
        {
            name: 'حمزة',
            fullName: 'حمزة بن عبدالمطلب',
            kunya: 'أبو عمارة',
            title: 'سيد الشهداء',
            titleMeaning: 'Master of Martyrs',
            death: 625,
            deathPlace: 'أحد',
            burialPlace: 'أحد',
            lineage: 'هاشم قريش',
            relation: 'عم النبي ﷺ',
            virtues: ['أعظم الشهداء', 'أسد الله وأسد رسوله'],
            value: null,
            digitRoot: null
        },
        {
            name: 'خالد',
            fullName: 'خالد بن الوليد المخزومي',
            kunya: 'أبو سليمان',
            title: 'سيف الله',
            titleMeaning: 'Sword of God',
            death: 642,
            burialPlace: 'حمص',
            lineage: 'مخزوم قريش',
            virtues: ['أعظم قائد عسكري', 'لم يهزم في معركة', 'سيف الله المسلول'],
            value: 635,
            digitRoot: 5
        },
        {
            name: 'بلال',
            fullName: 'بلال بن رباح الحبشي',
            kunya: 'أبو عبدالله',
            title: 'أول مؤذن',
            titleMeaning: 'First Muezzin',
            death: 640,
            lineage: 'حبشي',
            virtues: ['أول مؤذن في الإسلام', 'صبر على التعذيب', 'رفيق النبي ﷺ'],
            value: null,
            digitRoot: null
        },
        {
            name: 'سلمان',
            fullName: 'سلمان الفارسي',
            kunya: 'أبو عبدالله',
            title: 'سلمان الخير',
            titleMeaning: 'Salman the Good',
            death: 656,
            lineage: 'فارسي',
            virtues: ['صاحب فكرة الخندق', 'من أهل البيت', 'باحث عن الحق'],
            value: null,
            digitRoot: null
        },
        {
            name: 'عبدالله بن مسعود',
            fullName: 'عبدالله بن مسعود الهذلي',
            kunya: 'أبو عبدالرحمن',
            title: 'أمير التابعين',
            titleMeaning: 'Leader of the Followers',
            death: 653,
            lineage: 'هذيل',
            virtues: ['أعلم بالقرآن', 'أول من جهر بالقرآن', 'قرأ على النبي ﷺ'],
            value: null,
            digitRoot: null
        },
        {
            name: 'أبي بن كعب',
            fullName: 'أبي بن كعب بن قيس',
            kunya: 'أبو المنذر',
            title: 'سيد القراء',
            titleMeaning: 'Master of Reciters',
            death: 640,
            lineage: 'نجار - أنصار',
            virtues: ['أحد كتاب الوحي', 'أعلم الناس بالقرآن', 'أمره النبي بالقراءة عليه'],
            value: null,
            digitRoot: null
        },
        {
            name: 'معاذ بن جبل',
            fullName: 'معاذ بن جبل الأنصاري',
            kunya: 'أبو عبدالرحمن',
            title: 'أعلم الأمة بالحلال والحرام',
            titleMeaning: 'Most knowledgeable about lawful and unlawful',
            death: 640,
            lineage: 'أنصار - خزرج',
            virtues: ['أرسله النبي قاضيا إلى اليمن', 'عالم الأمة'],
            value: null,
            digitRoot: null
        },
        {
            name: 'مصعب',
            fullName: 'مصعب بن عمير العبدرلي',
            kunya: 'أبو عبدالله',
            title: 'أول سفير في الإسلام',
            titleMeaning: 'First ambassador in Islam',
            death: 625,
            deathPlace: 'أحد',
            lineage: 'عبد الدار قريش',
            virtues: ['أول سفير للإسلام', 'حامل الراية يوم أحد', 'استشهد في سبيل الله'],
            value: null,
            digitRoot: null
        },
        {
            name: 'عمار',
            fullName: 'عمار بن ياسر',
            kunya: 'أبو اليقظان',
            title: 'السابقون الأولون',
            titleMeaning: 'Among the foremost',
            death: 657,
            lineage: 'عنز',
            virtues: ['من المعذبين في الله', 'بنى أول مسجد', 'بشره النبي بالجنة'],
            value: null,
            digitRoot: null
        },
        {
            name: 'أنس',
            fullName: 'أنس بن مالك الأنصاري',
            kunya: 'أبو حمزة',
            title: 'خادم النبي',
            titleMeaning: 'Servant of the Prophet',
            birth: 612,
            death: 709,
            lineage: 'أنصار - نجار',
            virtues: ['خدم النبي ﷺ عشر سنين', 'أكثر راوية للحديث', 'مات آخر الصحابة في البصرة'],
            value: null,
            digitRoot: null
        }
    ],
    sahabiyat: [
        {
            name: 'خديجة',
            fullName: 'خديجة بنت خويلد',
            title: 'أم المؤمنين',
            titleMeaning: 'Mother of the Believers',
            death: 619,
            burialPlace: 'مكة المكرمة',
            relation: 'أولى زوجات النبي ﷺ',
            virtues: [
                'أول من أسلم',
                'أم المؤمنين الأولى',
                'سندت النبي ﷺ في بداية الدعوة'
            ],
            hadithsAbout: ['أعطيت خديجة بيتا في الجنة من قصب لا صخب فيه ولا نصب']
        },
        {
            name: 'عائشة',
            fullName: 'عائشة بنت أبي بكر',
            kunya: 'أم المؤمنين',
            title: 'أم المؤمنين',
            titleMeaning: 'Mother of the Believers',
            birth: 614,
            death: 678,
            burialPlace: 'البقيع',
            relation: 'ابنة أبي بكر الصديق، زوجة النبي ﷺ',
            virtues: [
                'أحب الناس إلى النبي ﷺ',
                'أعلم نساء المسلمين',
                'راوية للحديث'
            ],
            hadithsAbout: ['فضل عائشة على النساء كفضل الثريد على سائر الطعام']
        },
        {
            name: 'فاطمة',
            fullName: 'فاطمة بنت محمد',
            kunya: 'أم الحسن',
            title: 'سيدة نساء الجنة',
            titleMeaning: 'Leader of the women of Paradise',
            birth: 605,
            death: 632,
            burialPlace: 'البقيع',
            relation: 'ابنة النبي ﷺ، زوجة علي',
            virtues: [
                'سيدة نساء أهل الجنة',
                'ابنة النبي ﷺ',
                'أم الحسن والحسين'
            ],
            hadithsAbout: ['فاطمة سيدة نساء أهل الجنة']
        },
        {
            name: 'حفصة',
            fullName: 'حفصة بنت عمر',
            title: 'أم المؤمنين',
            titleMeaning: 'Mother of the Believers',
            death: 665,
            burialPlace: 'البقيع',
            relation: 'ابنة عمر بن الخطاب، زوجة النبي ﷺ',
            virtues: ['حفظت المصحف الأول', 'أم المؤمنين'],
            value: null,
            digitRoot: null
        },
        {
            name: 'أسماء',
            fullName: 'أسماء بنت أبي بكر',
            kunya: 'ذات النطاقين',
            title: 'ذات النطاقين',
            titleMeaning: 'One with two belts',
            death: 692,
            relation: 'ابنة أبي بكر الصديق، أخت عائشة',
            virtues: [
                'شقت نطاقها لإطعام النبي ﷺ وأبيها',
                'ابنة الصديق',
                'أم عبدالله بن الزبير'
            ],
            value: null,
            digitRoot: null
        },
        {
            name: 'زينب',
            fullName: 'زينب بنت علي',
            title: 'سيدة الشام',
            titleMeaning: 'Lady of Sham',
            virtues: ['ابنة علي وفاطمة', 'حفيدة النبي ﷺ', 'هاجرت إلى الشام'],
            value: null,
            digitRoot: null
        },
        {
            name: 'نسيبة',
            fullName: 'نسيبة بنت كعب المازنية',
            kunya: 'أم عمارة',
            title: 'المجاهدة',
            titleMeaning: 'The Fighter',
            death: 634,
            virtues: [
                'قاتلت دفاعا عن النبي ﷺ يوم أحد',
                'شهدت بيعة العقبة',
                'جرحت اثني عشر جراحة'
            ],
            value: null,
            digitRoot: null
        }
    ]
};

const SAHABA_BY_LINEAGE = {
    quraysh: {
        hashim: ['علي', 'جعفر', 'عقيل', 'حمزة'],
        umayah: ['عثمان', 'خالد بن سعيد'],
        taim: ['أبو بكر', 'طلحة'],
        adiy: ['عمر', 'سعيد بن زيد'],
        zuhra: ['سعد', 'عبدالرحمن بن عوف'],
        makzum: ['خالد بن الوليد'],
        asad: ['الزبير'],
        fahr: ['أبو عبيدة']
    },
    ansar: {
        aws: ['سعد بن معاذ', 'أسيد بن حضير'],
        khazraj: ['معاذ بن جبل', 'أبي بن كعب', 'أنس بن مالك']
    },
    others: ['بلال', 'سلمان', 'صهيب', 'عمار', 'عبدالله بن مسعود']
};

const SAHABA_VIRTUES_INDEX = {
    firstMuslims: ['أبو بكر', 'خديجة', 'علي', 'زبير', 'طلحة', 'سعد', 'سعيد', 'عبدالرحمن', 'أبو عبيدة'],
    promisedParadise: ['أبو بكر', 'عمر', 'عثمان', 'علي', 'طلحة', 'زبير', 'سعد', 'سعيد', 'عبدالرحمن', 'أبو عبيدة'],
    badrParticipants: ['أبو بكر', 'عمر', 'علي', 'طلحة', 'زبير', 'سعد', 'عبدالرحمن', 'أبو عبيدة', 'بلال', 'حمزة'],
    uhudMartyrs: ['حمزة', 'مصعب', 'أنس بن مالك الأنصاري'],
    conquerors: ['خالد', 'سعد', 'أبو عبيدة', 'عمرو بن العاص']
};

function getSahabaByName(name) {
    const allSahaba = [
        ...SAHABA_DATABASE.asharaMubashara,
        ...SAHABA_DATABASE.prominentSahaba,
        ...SAHABA_DATABASE.sahabiyat
    ];
    
    return allSahaba.find(s => s.name === name || s.fullName.includes(name)) || null;
}

function getSahabaByTitle(title) {
    const allSahaba = [
        ...SAHABA_DATABASE.asharaMubashara,
        ...SAHABA_DATABASE.prominentSahaba,
        ...SAHABA_DATABASE.sahabiyat
    ];
    
    return allSahaba.filter(s => s.title && s.title.includes(title));
}

function getAsharaMubashara() {
    return SAHABA_DATABASE.asharaMubashara;
}

function getProminentSahaba() {
    return SAHABA_DATABASE.prominentSahaba;
}

function getSahabiyat() {
    return SAHABA_DATABASE.sahabiyat;
}

function isSahabaName(name) {
    const allSahaba = [
        ...SAHABA_DATABASE.asharaMubashara,
        ...SAHABA_DATABASE.prominentSahaba,
        ...SAHABA_DATABASE.sahabiyat
    ];
    return allSahaba.some(s => s.name === name);
}

function getSahabaCount() {
    return {
        asharaMubashara: SAHABA_DATABASE.asharaMubashara.length,
        prominentSahaba: SAHABA_DATABASE.prominentSahaba.length,
        sahabiyat: SAHABA_DATABASE.sahabiyat.length,
        total: SAHABA_DATABASE.asharaMubashara.length + 
               SAHABA_DATABASE.prominentSahaba.length + 
               SAHABA_DATABASE.sahabiyat.length
    };
}

module.exports = {
    SAHABA_DATABASE,
    SAHABA_BY_LINEAGE,
    SAHABA_VIRTUES_INDEX,
    getSahabaByName,
    getSahabaByTitle,
    getAsharaMubashara,
    getProminentSahaba,
    getSahabiyat,
    isSahabaName,
    getSahabaCount
};