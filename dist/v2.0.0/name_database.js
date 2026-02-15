/**
 * Name Database Module - Comprehensive Arabic Names Collection
 * قاعدة بيانات الأسماء - مجموعة شاملة من الأسماء العربية
 */

const ARABIC_NAME_DATABASE = {
    male: [
        { name: 'محمد', meaning: 'Praised, praiseworthy', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'أحمد', meaning: 'Most praised, commendable', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'علي', meaning: 'High, exalted, sublime', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'حسن', meaning: 'Good, beautiful, handsome', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'حسين', meaning: 'Handsome, good-looking', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'عمر', meaning: 'Life, age, flourishing', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'عثمان', meaning: 'Baby bustard', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'أبو بكر', meaning: 'Father of the young camel', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'خالد', meaning: 'Eternal, immortal', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'سعد', meaning: 'Happiness, good fortune', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'عبدالله', meaning: 'Servant of Allah', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'عبدالرحمن', meaning: 'Servant of the Most Gracious', origin: 'Arabic', quranic: false, prophetic: false },
        { name: 'عبدالعزيز', meaning: 'Servant of the Mighty', origin: 'Arabic', quranic: false },
        { name: 'عبدالكريم', meaning: 'Servant of the Generous', origin: 'Arabic', quranic: false },
        { name: 'عبدالحميد', meaning: 'Servant of the Praiseworthy', origin: 'Arabic', quranic: false },
        { name: 'يوسف', meaning: 'God increases', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'إبراهيم', meaning: 'Father of many nations', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'موسى', meaning: 'Drawn from water', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'عيسى', meaning: 'God saves', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'داود', meaning: 'Beloved', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'سليمان', meaning: 'Peace', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'يحيى', meaning: 'God is gracious', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'زكريا', meaning: 'God remembers', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'يونس', meaning: 'Dove', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'إسماعيل', meaning: 'God hears', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'إسحاق', meaning: 'He laughs', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'يعقوب', meaning: 'Supplanter', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'نوح', meaning: 'Rest, comfort', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'هود', meaning: 'He who turns to God', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'صالح', meaning: 'Righteous, virtuous', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'شعيب', meaning: 'Who treats well', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'لوط', meaning: 'Veil, covering', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'إلياس', meaning: 'God is my Lord', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'طه', meaning: 'Surah name, mystical letters', origin: 'Arabic', quranic: true },
        { name: 'يس', meaning: 'Surah name, mystical letters', origin: 'Arabic', quranic: true },
        { name: 'طارق', meaning: 'Morning star, night visitor', origin: 'Arabic', quranic: true },
        { name: 'سعيد', meaning: 'Happy, fortunate', origin: 'Arabic', quranic: true },
        { name: 'عماد', meaning: 'Pillar, support', origin: 'Arabic', quranic: false },
        { name: 'فهد', meaning: 'Leopard, panther', origin: 'Arabic', quranic: false },
        { name: 'سلطان', meaning: 'Authority, ruler', origin: 'Arabic', quranic: true },
        { name: 'فيصل', meaning: 'Decisive, arbitrator', origin: 'Arabic', quranic: false },
        { name: 'ماجد', meaning: 'Glorious, noble', origin: 'Arabic', quranic: false },
        { name: 'نادر', meaning: 'Rare, precious', origin: 'Arabic', quranic: false },
        { name: 'أمين', meaning: 'Trustworthy, faithful', origin: 'Arabic', quranic: true },
        { name: 'باسم', meaning: 'Smiling', origin: 'Arabic', quranic: false },
        { name: 'جمال', meaning: 'Beauty', origin: 'Arabic', quranic: false },
        { name: 'رامي', meaning: 'Archer, thrower', origin: 'Arabic', quranic: false },
        { name: 'زياد', meaning: 'Growth, increase', origin: 'Arabic', quranic: true },
        { name: 'فارس', meaning: 'Knight, horseman', origin: 'Arabic', quranic: false },
        { name: 'كريم', meaning: 'Generous, noble', origin: 'Arabic', quranic: true },
        { name: 'لؤي', meaning: 'Shield', origin: 'Arabic', quranic: false },
        { name: 'مازن', meaning: 'Clouds, rain-bearing', origin: 'Arabic', quranic: false },
        { name: 'ناصر', meaning: 'Victorious, helper', origin: 'Arabic', quranic: true },
        { name: 'هاني', meaning: 'Happy, pleased', origin: 'Arabic', quranic: false },
        { name: 'وليد', meaning: 'Newborn', origin: 'Arabic', quranic: true },
        { name: 'ياسر', meaning: 'Easy, wealthy', origin: 'Arabic', quranic: false },
        { name: 'عادل', meaning: 'Just, fair', origin: 'Arabic', quranic: false },
        { name: 'فؤاد', meaning: 'Heart', origin: 'Arabic', quranic: true },
        { name: 'منير', meaning: 'Illuminating', origin: 'Arabic', quranic: false },
        { name: 'عصام', meaning: 'Bond, safeguard', origin: 'Arabic', quranic: false },
        { name: 'حاتم', meaning: 'Decisive, judge', origin: 'Arabic', quranic: false },
        { name: 'عامر', meaning: 'Prosperous, full of life', origin: 'Arabic', quranic: true },
        { name: 'سالم', meaning: 'Safe, sound', origin: 'Arabic', quranic: false },
        { name: 'صالح', meaning: 'Righteous', origin: 'Arabic', quranic: true },
        { name: 'أنس', meaning: 'Affection, love', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'براء', meaning: 'Innocent, free', origin: 'Arabic', quranic: false },
        { name: 'حارث', meaning: 'Plower, cultivator', origin: 'Arabic', quranic: false },
        { name: 'عباس', meaning: 'Lion', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'حمزة', meaning: 'Lion', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'بلال', meaning: 'Moisture', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'سلمان', meaning: 'Safe, sound', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'عمار', meaning: 'Long-lived', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'مصعب', meaning: 'One who spreads', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'طلحة', meaning: 'Kind of tree', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'زبير', meaning: 'Strong', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'سعد', meaning: 'Happiness', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'سعيد', meaning: 'Happy', origin: 'Arabic', quranic: true, sahabi: true },
        { name: 'عثمان', meaning: 'Baby bustard', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'يزيد', meaning: 'He increases', origin: 'Arabic', quranic: false },
        { name: 'معاذ', meaning: 'Protected', origin: 'Arabic', quranic: false, sahabi: true },
        { name: 'معتز', meaning: 'Proud, mighty', origin: 'Arabic', quranic: false },
        { name: 'مهدي', meaning: 'Guided one', origin: 'Arabic', quranic: true },
        { name: 'مراد', meaning: 'Desired, wished', origin: 'Arabic', quranic: false },
        { name: 'راشد', meaning: 'Rightly guided', origin: 'Arabic', quranic: true },
        { name: 'رشيد', meaning: 'Wise, rightly guided', origin: 'Arabic', quranic: true },
        { name: 'حميد', meaning: 'Praised', origin: 'Arabic', quranic: true },
        { name: 'توفيق', meaning: 'Success, divine guidance', origin: 'Arabic', quranic: false },
        { name: 'عزمي', meaning: 'Determined', origin: 'Arabic', quranic: false },
        { name: 'فخري', meaning: 'Proud', origin: 'Arabic', quranic: false },
        { name: 'بشير', meaning: 'Bringer of good news', origin: 'Arabic', quranic: true },
        { name: 'نذير', meaning: 'Warner', origin: 'Arabic', quranic: true },
        { name: 'عزيز', meaning: 'Mighty, beloved', origin: 'Arabic', quranic: true },
        { name: 'جلال', meaning: 'Majesty', origin: 'Arabic', quranic: false },
        { name: 'كمال', meaning: 'Perfection', origin: 'Arabic', quranic: false },
        { name: 'نور', meaning: 'Light', origin: 'Arabic', quranic: true },
        { name: 'ضياء', meaning: 'Light, illumination', origin: 'Arabic', quranic: true },
        { name: 'سرور', meaning: 'Happiness, joy', origin: 'Arabic', quranic: false },
        { name: 'جود', meaning: 'Generosity', origin: 'Arabic', quranic: false },
        { name: 'سديم', meaning: 'Nebula', origin: 'Arabic', quranic: false },
        { name: 'أيان', meaning: 'Gift of God', origin: 'Arabic', quranic: false },
        { name: 'ريان', meaning: 'Gates of Paradise', origin: 'Arabic', quranic: false },
        { name: 'جبريل', meaning: 'Archangel Gabriel', origin: 'Hebrew/Arabic', quranic: true },
        { name: 'ميكائيل', meaning: 'Archangel Michael', origin: 'Hebrew/Arabic', quranic: true },
        { name: 'عزرائيل', meaning: 'Angel of Death', origin: 'Hebrew/Arabic', quranic: false },
        { name: 'إسرافيل', meaning: 'Archangel Israfil', origin: 'Arabic', quranic: false }
    ],
    female: [
        { name: 'فاطمة', meaning: 'One who abstains, weaning', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'عائشة', meaning: 'Alive, living, prosperous', origin: 'Arabic', quranic: true, propheticFamily: true },
        { name: 'خديجة', meaning: 'Premature child', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'زينب', meaning: 'Fragrant flower, ornamental tree', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'مريم', meaning: 'Beloved, wished-for child', origin: 'Hebrew/Arabic', quranic: true, prophetic: true },
        { name: 'آمنة', meaning: 'Safe, secure', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'صفية', meaning: 'Pure, clear', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'رقية', meaning: 'Rise, ascent', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'أم كلثوم', meaning: 'Mother of Kulthum', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'حفصة', meaning: 'Young lioness', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'جويرية', meaning: 'Small rose', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'ميمونة', meaning: 'Blessed, favorable', origin: 'Arabic', quranic: true, propheticFamily: true },
        { name: 'سودة', meaning: 'Black', origin: 'Arabic', quranic: false, propheticFamily: true },
        { name: 'أسماء', meaning: 'Names, lofty', origin: 'Arabic', quranic: true, sahabia: true },
        { name: 'نورا', meaning: 'Light', origin: 'Arabic', quranic: true },
        { name: 'سارة', meaning: 'Princess, noblewoman', origin: 'Hebrew/Arabic', quranic: false, prophetic: true },
        { name: 'هاجر', meaning: 'Flight, emigration', origin: 'Arabic', quranic: true, prophetic: true },
        { name: 'لينا', meaning: 'Tender, soft', origin: 'Arabic', quranic: false },
        { name: 'دانا', meaning: 'Pearl', origin: 'Persian/Arabic', quranic: false },
        { name: 'ريم', meaning: 'White antelope, gazelle', origin: 'Arabic', quranic: false },
        { name: 'منى', meaning: 'Wish, desire', origin: 'Arabic', quranic: true },
        { name: 'هند', meaning: 'India, group of camels', origin: 'Arabic', quranic: false, sahabia: true },
        { name: 'ليلى', meaning: 'Night, born at night', origin: 'Arabic', quranic: false },
        { name: 'أميرة', meaning: 'Princess', origin: 'Arabic', quranic: false },
        { name: 'جميلة', meaning: 'Beautiful', origin: 'Arabic', quranic: false },
        { name: 'حنان', meaning: 'Compassion, affection', origin: 'Arabic', quranic: false },
        { name: 'رانيا', meaning: 'Gazing, looking at', origin: 'Arabic', quranic: false },
        { name: 'سلمى', meaning: 'Peaceful, safe', origin: 'Arabic', quranic: false },
        { name: 'فرح', meaning: 'Joy, happiness', origin: 'Arabic', quranic: true },
        { name: 'قمر', meaning: 'Moon', origin: 'Arabic', quranic: true },
        { name: 'لمياء', meaning: 'Shining, radiant', origin: 'Arabic', quranic: false },
        { name: 'ناديا', meaning: 'Tender, delicate', origin: 'Slavic/Arabic', quranic: false },
        { name: 'هدى', meaning: 'Guidance', origin: 'Arabic', quranic: true },
        { name: 'ياسمين', meaning: 'Jasmine flower', origin: 'Persian/Arabic', quranic: false },
        { name: 'عبير', meaning: 'Fragrance, perfume', origin: 'Arabic', quranic: false },
        { name: 'فداء', meaning: 'Sacrifice, redemption', origin: 'Arabic', quranic: false },
        { name: 'منال', meaning: 'Achievement, attainment', origin: 'Arabic', quranic: false },
        { name: 'نهى', meaning: 'Intelligence, wisdom', origin: 'Arabic', quranic: true },
        { name: 'وفاء', meaning: 'Faithfulness, loyalty', origin: 'Arabic', quranic: false },
        { name: 'سحر', meaning: 'Magic, charm', origin: 'Arabic', quranic: false },
        { name: 'دلال', meaning: 'Pampering, fondling', origin: 'Arabic', quranic: false },
        { name: 'غادة', meaning: 'Beautiful woman', origin: 'Arabic', quranic: false },
        { name: 'رنا', meaning: 'Gaze, look', origin: 'Arabic', quranic: false },
        { name: 'لمى', meaning: 'Dark lips', origin: 'Arabic', quranic: false },
        { name: 'سمر', meaning: 'Conversation at night', origin: 'Arabic', quranic: false },
        { name: 'ضحى', meaning: 'Forenoon', origin: 'Arabic', quranic: true },
        { name: 'سماح', meaning: 'Forgiveness', origin: 'Arabic', quranic: false },
        { name: 'إخلاص', meaning: 'Sincerity', origin: 'Arabic', quranic: true },
        { name: 'آية', meaning: 'Sign, verse', origin: 'Arabic', quranic: true },
        { name: 'براءة', meaning: 'Innocence', origin: 'Arabic', quranic: true },
        { name: 'سكينة', meaning: 'Tranquility', origin: 'Arabic', quranic: true },
        { name: 'ملاك', meaning: 'Angel', origin: 'Arabic', quranic: false },
        { name: 'روضة', meaning: 'Garden', origin: 'Arabic', quranic: true },
        { name: 'حنين', meaning: 'Longing, yearning', origin: 'Arabic', quranic: true },
        { name: 'سناء', meaning: 'Brilliance, radiance', origin: 'Arabic', quranic: false },
        { name: 'غيداء', meaning: 'Young, tender', origin: 'Arabic', quranic: false },
        { name: 'نورهان', meaning: 'Light of grace', origin: 'Arabic', quranic: false },
        { name: 'جنان', meaning: 'Paradise, gardens', origin: 'Arabic', quranic: true },
        { name: 'حور', meaning: 'Heavenly maidens', origin: 'Arabic', quranic: true },
        { name: 'عيناء', meaning: 'One with beautiful eyes', origin: 'Arabic', quranic: false },
        { name: 'جنى', meaning: 'Fruits, harvest', origin: 'Arabic', quranic: true },
        { name: 'روقا', meaning: 'Grace, elegance', origin: 'Arabic', quranic: false },
        { name: 'ميرا', meaning: 'Provisions, provisions of journey', origin: 'Arabic', quranic: false },
        { name: 'يانا', meaning: 'Gift from God', origin: 'Arabic', quranic: false },
        { name: 'ليان', meaning: 'Softness, gentleness', origin: 'Arabic', quranic: false },
        { name: 'جوريا', meaning: 'Rose', origin: 'Arabic', quranic: false },
        { name: 'راما', meaning: 'Pleasing', origin: 'Arabic', quranic: false },
        { name: 'دانية', meaning: 'Close, near', origin: 'Arabic', quranic: true },
        { name: 'سجى', meaning: 'Quiet, calm', origin: 'Arabic', quranic: false },
        { name: 'نغم', meaning: 'Melody, tune', origin: 'Arabic', quranic: false },
        { name: 'هدى', meaning: 'Guidance', origin: 'Arabic', quranic: true },
        { name: 'بسمة', meaning: 'Smile', origin: 'Arabic', quranic: false },
        { name: 'تالا', meaning: 'Small palm tree', origin: 'Arabic', quranic: false },
        { name: 'جودي', meaning: 'Name of hill', origin: 'Arabic', quranic: true },
        { name: 'حلا', meaning: 'Sweetness', origin: 'Arabic', quranic: false },
        { name: 'سدين', meaning: 'Musk', origin: 'Arabic', quranic: false },
        { name: 'عالية', meaning: 'High, exalted', origin: 'Arabic', quranic: false },
        { name: 'غالية', meaning: 'Precious, dear', origin: 'Arabic', quranic: false },
        { name: 'فريال', meaning: 'Beautiful', origin: 'Persian/Arabic', quranic: false },
        { name: 'كوثر', meaning: 'Abundance', origin: 'Arabic', quranic: true },
        { name: 'لورا', meaning: 'Laurel tree', origin: 'Latin/Arabic', quranic: false },
        { name: 'ميساء', meaning: 'Walking proudly', origin: 'Arabic', quranic: false },
        { name: 'نادين', meaning: 'Moist, tender', origin: 'Arabic', quranic: false },
        { name: 'هيفاء', meaning: 'Slender, beautiful', origin: 'Arabic', quranic: false },
        { name: 'ورود', meaning: 'Roses', origin: 'Arabic', quranic: false }
    ],
    unisex: [
        { name: 'نور', meaning: 'Light', origin: 'Arabic', quranic: true },
        { name: 'أمل', meaning: 'Hope', origin: 'Arabic', quranic: false },
        { name: 'سرى', meaning: 'Night journey', origin: 'Arabic', quranic: true },
        { name: 'سمير', meaning: 'Companion in evening talk', origin: 'Arabic', quranic: false },
        { name: 'عزة', meaning: 'Glory, power', origin: 'Arabic', quranic: true },
        { name: 'وفاء', meaning: 'Faithfulness', origin: 'Arabic', quranic: false },
        { name: 'هدى', meaning: 'Guidance', origin: 'Arabic', quranic: true },
        { name: 'إيمان', meaning: 'Faith', origin: 'Arabic', quranic: true },
        { name: 'حسن', meaning: 'Beauty, goodness', origin: 'Arabic', quranic: true },
        { name: 'حسين', meaning: 'Handsome', origin: 'Arabic', quranic: false },
        { name: 'جلاء', meaning: 'Clarity', origin: 'Arabic', quranic: false },
        { name: 'سناء', meaning: 'Radiance', origin: 'Arabic', quranic: false }
    ]
};

const NAME_VARIATIONS = {
    'محمد': ['محمد', 'أحمد', 'محمود', 'محمد أحمد', 'أبو محمد'],
    'علي': ['علي', 'علياء', 'علا'],
    'فاطمة': ['فاطمة', 'فاطمه', 'فطوم'],
    'عبدالله': ['عبدالله', 'عبد الله', 'عبدالإله'],
    'عبدالرحمن': ['عبدالرحمن', 'عبد الرحمن', 'عبدالرحيم']
};

const NAME_PAIRS_COMPATIBLE = [
    { name1: 'محمد', name2: 'فاطمة', house: 9, note: 'Prophetic family - blessed pair' },
    { name1: 'أحمد', name2: 'خديجة', house: 7, note: 'Excellent compatibility' },
    { name1: 'علي', name2: 'زينب', house: 5, note: 'Neutral - good for public service' },
    { name1: 'حسن', name2: 'عائشة', house: 7, note: 'Very good - harmonious' },
    { name1: 'عمر', name2: 'مريم', house: 4, note: 'Good - stable foundation' },
    { name1: 'خالد', name2: 'نورا', house: 7, note: 'Excellent - blessed union' }
];

function searchNames(criteria) {
    const { gender, startsWith, contains, meaning, quranic, prophetic, sahabi, maxResults = 50 } = criteria;
    let results = [];
    
    const pools = gender ? [ARABIC_NAME_DATABASE[gender]] : [ARABIC_NAME_DATABASE.male, ARABIC_NAME_DATABASE.female, ARABIC_NAME_DATABASE.unisex];
    
    pools.forEach(pool => {
        pool.forEach(entry => {
            let matches = true;
            
            if (startsWith && !entry.name.startsWith(startsWith)) matches = false;
            if (contains && !entry.name.includes(contains)) matches = false;
            if (meaning && !entry.meaning.toLowerCase().includes(meaning.toLowerCase())) matches = false;
            if (quranic !== undefined && entry.quranic !== quranic) matches = false;
            if (prophetic !== undefined && entry.prophetic !== prophetic) matches = false;
            if (sahabi !== undefined && entry.sahabi !== sahabi) matches = false;
            
            if (matches) {
                results.push(entry);
            }
        });
    });
    
    return results.slice(0, maxResults);
}

function getNameInfo(name) {
    const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female, ...ARABIC_NAME_DATABASE.unisex];
    return allNames.find(entry => entry.name === name) || null;
}

function getRandomNames(gender, count = 5) {
    const pool = ARABIC_NAME_DATABASE[gender] || [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female];
    const shuffled = pool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getNamesByOrigin(origin) {
    const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female, ...ARABIC_NAME_DATABASE.unisex];
    return allNames.filter(entry => entry.origin.toLowerCase().includes(origin.toLowerCase()));
}

function getQuranicNames() {
    const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female, ...ARABIC_NAME_DATABASE.unisex];
    return allNames.filter(entry => entry.quranic);
}

function getPropheticNames() {
    const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female, ...ARABIC_NAME_DATABASE.unisex];
    return allNames.filter(entry => entry.prophetic || entry.propheticFamily);
}

function getSahabaNames() {
    const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female, ...ARABIC_NAME_DATABASE.unisex];
    return allNames.filter(entry => entry.sahabi || entry.sahabia);
}

function getNameCount() {
    return {
        male: ARABIC_NAME_DATABASE.male.length,
        female: ARABIC_NAME_DATABASE.female.length,
        unisex: ARABIC_NAME_DATABASE.unisex.length,
        total: ARABIC_NAME_DATABASE.male.length + ARABIC_NAME_DATABASE.female.length + ARABIC_NAME_DATABASE.unisex.length
    };
}

module.exports = {
    ARABIC_NAME_DATABASE,
    NAME_VARIATIONS,
    NAME_PAIRS_COMPATIBLE,
    searchNames,
    getNameInfo,
    getRandomNames,
    getNamesByOrigin,
    getQuranicNames,
    getPropheticNames,
    getSahabaNames,
    getNameCount
};