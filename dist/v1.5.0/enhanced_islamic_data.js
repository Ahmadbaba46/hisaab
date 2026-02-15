/**
 * Enhanced Islamic Data Module - v1.3.0
 * Prayer Time Correlations, Extended Quranic Database, Cultural Preservation
 */

// Islamic Prayer Time Correlations
const PRAYER_TIME_CORRELATIONS = {
    // Based on digit root associations with Islamic prayer times
    1: {
        favorablePrayer: 'Fajr',
        arabicPrayer: 'الفجر',
        significance: 'New beginnings and divine light',
        timing: 'Dawn prayers bring special blessings for leadership',
        dhikr: 'سبحان الله (33 times after Fajr)',
        spiritualAdvice: 'Start important decisions at dawn'
    },
    2: {
        favorablePrayer: 'Dhuhr',
        arabicPrayer: 'الظهر', 
        significance: 'Balance and harmony in midday',
        timing: 'Noon prayers enhance cooperation and partnership',
        dhikr: 'الحمد لله (33 times after Dhuhr)',
        spiritualAdvice: 'Seek balance and make peaceful decisions'
    },
    3: {
        favorablePrayer: 'Asr',
        arabicPrayer: 'العصر',
        significance: 'Creative expression in afternoon',
        timing: 'Afternoon prayers boost creativity and communication',
        dhikr: 'الله أكبر (33 times after Asr)',
        spiritualAdvice: 'Express creativity and share knowledge'
    },
    4: {
        favorablePrayer: 'Maghrib',
        arabicPrayer: 'المغرب',
        significance: 'Grounding and stability at sunset',
        timing: 'Sunset prayers strengthen foundations',
        dhikr: 'أستغفر الله (100 times after Maghrib)',
        spiritualAdvice: 'Build solid foundations and plan carefully'
    },
    5: {
        favorablePrayer: 'Isha',
        arabicPrayer: 'العشاء',
        significance: 'Freedom and spiritual journey',
        timing: 'Night prayers open paths to spiritual growth',
        dhikr: 'لا إله إلا الله (100 times before sleep)',
        spiritualAdvice: 'Embark on spiritual journeys and seek knowledge'
    },
    6: {
        favorablePrayer: 'Fajr',
        arabicPrayer: 'الفجر',
        significance: 'Nurturing and family care',
        timing: 'Dawn prayers bless family relationships',
        dhikr: 'رب اغفر لي ولوالدي (After Fajr)',
        spiritualAdvice: 'Focus on family and community care'
    },
    7: {
        favorablePrayer: 'Tahajjud',
        arabicPrayer: 'التهجد',
        significance: 'Deep spiritual connection',
        timing: 'Night prayers bring mystical insights',
        dhikr: 'الله (1000 times in night prayer)',
        spiritualAdvice: 'Seek deep spiritual understanding'
    },
    8: {
        favorablePrayer: 'Dhuhr',
        arabicPrayer: 'الظهر',
        significance: 'Material success and authority',
        timing: 'Noon prayers bless lawful business',
        dhikr: 'رب اجعلني مقيم الصلاة (After Dhuhr)',
        spiritualAdvice: 'Lead with wisdom and seek halal success'
    },
    9: {
        favorablePrayer: 'All Five',
        arabicPrayer: 'الخمس صلوات',
        significance: 'Universal service and completion',
        timing: 'All prayers bring universal blessings',
        dhikr: 'سبحان الله والحمد لله والله أكبر (33 each)',
        spiritualAdvice: 'Serve humanity and complete your mission'
    }
};

// Extended Quranic Database
const EXTENDED_QURANIC_CONNECTIONS = {
    // More verse connections based on numerical values
    19: {
        verse: 'وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ',
        translation: 'And mentions the name of his Lord and prays',
        reference: 'Al-A\'la 87:15',
        significance: 'The importance of remembering Allah',
        context: '19 is a special number in Quran structure',
        application: 'Remember Allah frequently throughout the day'
    },
    66: {
        verse: 'وَهُوَ اللَّهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ',
        translation: 'And He is Allah in the heavens and on earth',
        reference: 'Al-An\'am 6:3',
        significance: 'Allah\'s presence everywhere',
        context: 'Same value as الله (66)',
        application: 'Feel Allah\'s presence in all your actions'
    },
    92: {
        verse: 'وَاللَّيْلِ إِذَا يَغْشَىٰ',
        translation: 'By the night when it covers',
        reference: 'Al-Layl 92:1',
        significance: 'The night and its mysteries',
        context: 'Chapter 92, same as محمد value',
        application: 'Use night time for reflection and prayer'
    },
    99: {
        verse: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
        translation: 'And to Allah belong the best names, so invoke Him by them',
        reference: 'Al-A\'raf 7:180',
        significance: 'The 99 Beautiful Names of Allah',
        context: 'Direct connection to Asma ul-Husna',
        application: 'Call upon Allah by His beautiful names'
    },
    114: {
        verse: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        translation: 'Say: I seek refuge in the Lord of mankind',
        reference: 'An-Nas 114:1',
        significance: 'Divine protection and refuge',
        context: '114 chapters in Quran',
        application: 'Seek Allah\'s protection in all matters'
    },
    135: {
        verse: 'قُلْ إِنَّنِي هَدَانِي رَبِّي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
        translation: 'Say: Indeed, my Lord has guided me to a straight path',
        reference: 'Al-An\'am 6:161',
        significance: 'Divine guidance to the right path',
        context: 'Seeking Allah\'s guidance',
        application: 'Ask Allah for guidance in all decisions'
    },
    156: {
        verse: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
        translation: 'Who, when disaster strikes them, say: Indeed we belong to Allah, and indeed to Him we will return',
        reference: 'Al-Baqarah 2:156',
        significance: 'Patience in trials and returning to Allah',
        context: 'Famous verse about patience',
        application: 'Show patience and remember your return to Allah'
    },
    200: {
        verse: 'وَبَشِّرِ الصَّابِرِينَ',
        translation: 'And give good tidings to the patient',
        reference: 'Al-Baqarah 2:155',
        significance: 'Reward for patience',
        context: 'Value of ر (Ra) - 200',
        application: 'Be patient and expect Allah\'s reward'
    }
};

// Prophet and Sahaba Names Database
const PROPHETIC_NAMES = {
    'محمد': {
        type: 'Prophet',
        arabic: 'محمد',
        meaning: 'The Praised One',
        significance: 'The final messenger of Allah',
        blessing: 'Saying the name brings 10 rewards',
        salawat: 'اللهم صل على محمد وعلى آل محمد',
        historical: 'Born in Mecca, 570 CE, final prophet',
        qualities: ['Truthful', 'Trustworthy', 'Merciful', 'Just'],
        guidance: 'Follow the Sunnah and spread mercy'
    },
    'أحمد': {
        type: 'Prophet',
        arabic: 'أحمد',
        meaning: 'Most Praised',
        significance: 'Another name of Prophet Muhammad',
        blessing: 'Mentioned in the Gospel as the coming prophet',
        salawat: 'اللهم صل على أحمد النبي الأمي',
        historical: 'Name mentioned in Injeel (Gospel)',
        qualities: ['Most Praised', 'Beloved', 'Chosen', 'Guided'],
        guidance: 'Strive to be worthy of praise through good deeds'
    },
    'إبراهيم': {
        type: 'Prophet',
        arabic: 'إبراهيم',
        meaning: 'Friend of Allah',
        significance: 'Father of prophets, friend of Allah',
        blessing: 'Known as Khalil Allah (Friend of Allah)',
        salawat: 'اللهم صل على إبراهيم وعلى آل إبراهيم',
        historical: 'Built the Kaaba with Ismail',
        qualities: ['Friend of Allah', 'Patient', 'Generous', 'Devoted'],
        guidance: 'Be generous and devoted to Allah like Ibrahim'
    },
    'علي': {
        type: 'Sahabi',
        arabic: 'علي',
        meaning: 'High, Elevated',
        significance: 'Fourth Caliph, cousin of Prophet',
        blessing: 'Gate of knowledge, brave companion',
        relationship: 'Cousin and son-in-law of Prophet Muhammad',
        historical: 'First young male to accept Islam',
        qualities: ['Knowledgeable', 'Brave', 'Just', 'Eloquent'],
        guidance: 'Seek knowledge and stand for justice'
    },
    'فاطمة': {
        type: 'Sahabiya',
        arabic: 'فاطمة',
        meaning: 'One who abstains (from evil)',
        significance: 'Daughter of Prophet Muhammad',
        blessing: 'Leader of women in Paradise',
        relationship: 'Beloved daughter of Prophet Muhammad',
        historical: 'Mother of Hassan and Hussein',
        qualities: ['Pure', 'Devoted', 'Patient', 'Righteous'],
        guidance: 'Live with purity and devotion like Fatima'
    },
    'عائشة': {
        type: 'Sahabiya',
        arabic: 'عائشة',
        meaning: 'Alive, Living',
        significance: 'Wife of Prophet, Mother of Believers',
        blessing: 'Transmitted many Hadith',
        relationship: 'Beloved wife of Prophet Muhammad',
        historical: 'Great Islamic scholar and teacher',
        qualities: ['Knowledgeable', 'Intelligent', 'Devoted', 'Teacher'],
        guidance: 'Seek and share Islamic knowledge'
    }
};

// Cultural and Historical Context
const CULTURAL_CONTEXTS = {
    // Regional naming patterns and cultural significance
    'Arabian Peninsula': {
        commonElements: ['عبد', 'أبو', 'ابن', 'بنت'],
        namingTraditions: 'Names often include tribal affiliations',
        culturalValues: 'Honor, hospitality, courage, wisdom',
        historicalInfluence: 'Bedouin culture and Islamic traditions',
        modernTrends: 'Revival of classical Arabic names'
    },
    'Levant': {
        commonElements: ['جميل', 'نور', 'سلام'],
        namingTraditions: 'Emphasis on beauty and peace',
        culturalValues: 'Education, arts, harmony, trade',
        historicalInfluence: 'Byzantine, Ottoman, and Arab cultures',
        modernTrends: 'Blend of traditional and modern names'
    },
    'North Africa': {
        commonElements: ['أمين', 'صالح', 'فاطمة'],
        namingTraditions: 'Strong Islamic influence with Berber heritage',
        culturalValues: 'Faith, community, resilience, tradition',
        historicalInfluence: 'Islamic conquest and Berber culture',
        modernTrends: 'Islamic names with local pronunciations'
    },
    'Indian Subcontinent': {
        commonElements: ['محمد', 'علي', 'حسن'],
        namingTraditions: 'Often combined with local linguistic patterns',
        culturalValues: 'Scholarship, spirituality, family, respect',
        historicalInfluence: 'Mughal empire and Sufi traditions',
        modernTrends: 'Arabic names with subcontinental pronunciation'
    }
};

module.exports = {
    PRAYER_TIME_CORRELATIONS,
    EXTENDED_QURANIC_CONNECTIONS,
    PROPHETIC_NAMES,
    CULTURAL_CONTEXTS
};