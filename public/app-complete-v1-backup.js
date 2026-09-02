/**
 * Hisaab Complete Web Application v2.0
 * Includes all library features for browser use
 */

(function() {
    'use strict';

    // ==================== DATA MODULES ====================

    // 99 Names of Allah
    const ASMA_UL_HUSNA = [
        { arabic: 'الله', transliteration: 'Allah', meaning: 'The God', attribute: 'The One and Only', category: 'power' },
        { arabic: 'الرحمن', transliteration: 'Ar-Rahman', meaning: 'The Most Merciful', attribute: 'Universal Mercy', category: 'mercy' },
        { arabic: 'الرحيم', transliteration: 'Ar-Raheem', meaning: 'The Most Compassionate', attribute: 'Specific Mercy', category: 'mercy' },
        { arabic: 'الملك', transliteration: 'Al-Malik', meaning: 'The King', attribute: 'Absolute Sovereignty', category: 'royalty' },
        { arabic: 'القدوس', transliteration: 'Al-Quddus', meaning: 'The Holy One', attribute: 'Perfect Purity', category: 'power' },
        { arabic: 'السلام', transliteration: 'As-Salaam', meaning: 'The Source of Peace', attribute: 'Perfect Peace', category: 'mercy' },
        { arabic: 'المؤمن', transliteration: 'Al-Mu\'min', meaning: 'The Faithful', attribute: 'Perfect Faith', category: 'power' },
        { arabic: 'المهيمن', transliteration: 'Al-Muhaymin', meaning: 'The Guardian', attribute: 'Divine Protection', category: 'power' },
        { arabic: 'العزيز', transliteration: 'Al-Aziz', meaning: 'The Mighty One', attribute: 'Invincible Power', category: 'power' },
        { arabic: 'الجبار', transliteration: 'Al-Jabbar', meaning: 'The Compeller', attribute: 'Overwhelming Force', category: 'power' },
        { arabic: 'المتكبر', transliteration: 'Al-Mutakabbir', meaning: 'The Supreme', attribute: 'Divine Pride', category: 'power' },
        { arabic: 'الخالق', transliteration: 'Al-Khaliq', meaning: 'The Creator', attribute: 'Creative Power', category: 'knowledge' },
        { arabic: 'البارئ', transliteration: 'Al-Bari\'', meaning: 'The Maker', attribute: 'Divine Formation', category: 'knowledge' },
        { arabic: 'المصور', transliteration: 'Al-Musawwir', meaning: 'The Shaper', attribute: 'Perfect Design', category: 'knowledge' },
        { arabic: 'الغفار', transliteration: 'Al-Ghafaar', meaning: 'The Great Forgiver', attribute: 'Endless Forgiveness', category: 'mercy' },
        { arabic: 'القهار', transliteration: 'Al-Qahhar', meaning: 'The Dominant', attribute: 'Supreme Authority', category: 'power' },
        { arabic: 'الوهاب', transliteration: 'Al-Wahhaab', meaning: 'The Great Giver', attribute: 'Generous Bestowal', category: 'mercy' },
        { arabic: 'الرزاق', transliteration: 'Ar-Razzaq', meaning: 'The Provider', attribute: 'Divine Sustenance', category: 'mercy' },
        { arabic: 'الفتاح', transliteration: 'Al-Fattaah', meaning: 'The Opener', attribute: 'Divine Solutions', category: 'power' },
        { arabic: 'العليم', transliteration: 'Al-Aleem', meaning: 'The All-Knowing', attribute: 'Perfect Knowledge', category: 'knowledge' },
        { arabic: 'القابض', transliteration: 'Al-Qaabid', meaning: 'The Restrainer', attribute: 'Divine Restriction', category: 'power' },
        { arabic: 'الباسط', transliteration: 'Al-Baasit', meaning: 'The Expander', attribute: 'Divine Expansion', category: 'power' },
        { arabic: 'الخافض', transliteration: 'Al-Khaafid', meaning: 'The Abaser', attribute: 'Divine Humbling', category: 'power' },
        { arabic: 'الرافع', transliteration: 'Ar-Raafi\'', meaning: 'The Exalter', attribute: 'Divine Elevation', category: 'power' },
        { arabic: 'المعز', transliteration: 'Al-Mu\'izz', meaning: 'The Honorer', attribute: 'Divine Honor', category: 'power' },
        { arabic: 'المذل', transliteration: 'Al-Muzill', meaning: 'The Humiliator', attribute: 'Divine Justice', category: 'power' },
        { arabic: 'السميع', transliteration: 'As-Samee\'', meaning: 'The All-Hearing', attribute: 'Perfect Hearing', category: 'knowledge' },
        { arabic: 'البصير', transliteration: 'Al-Baseer', meaning: 'The All-Seeing', attribute: 'Perfect Sight', category: 'knowledge' },
        { arabic: 'الحكم', transliteration: 'Al-Hakam', meaning: 'The Judge', attribute: 'Divine Judgment', category: 'knowledge' },
        { arabic: 'العدل', transliteration: 'Al-Adl', meaning: 'The Just', attribute: 'Perfect Justice', category: 'knowledge' },
        { arabic: 'اللطيف', transliteration: 'Al-Lateef', meaning: 'The Subtle One', attribute: 'Divine Gentleness', category: 'mercy' },
        { arabic: 'الخبير', transliteration: 'Al-Khabeer', meaning: 'The All-Aware', attribute: 'Perfect Awareness', category: 'knowledge' },
        { arabic: 'الحليم', transliteration: 'Al-Haleem', meaning: 'The Forbearing', attribute: 'Divine Patience', category: 'mercy' },
        { arabic: 'العظيم', transliteration: 'Al-Azeem', meaning: 'The Magnificent', attribute: 'Divine Grandeur', category: 'power' },
        { arabic: 'الغفور', transliteration: 'Al-Ghafoor', meaning: 'The Forgiving', attribute: 'Merciful Forgiveness', category: 'mercy' },
        { arabic: 'الشكور', transliteration: 'Ash-Shakoor', meaning: 'The Appreciative', attribute: 'Divine Gratitude', category: 'mercy' },
        { arabic: 'العلي', transliteration: 'Al-Ali', meaning: 'The Most High', attribute: 'Supreme Height', category: 'power' },
        { arabic: 'الكبير', transliteration: 'Al-Kabeer', meaning: 'The Most Great', attribute: 'Divine Greatness', category: 'power' },
        { arabic: 'الحفيظ', transliteration: 'Al-Hafeez', meaning: 'The Preserver', attribute: 'Divine Protection', category: 'power' },
        { arabic: 'المقيت', transliteration: 'Al-Muqeet', meaning: 'The Nourisher', attribute: 'Divine Sustenance', category: 'mercy' },
        { arabic: 'الحسيب', transliteration: 'Al-Haseeb', meaning: 'The Reckoner', attribute: 'Divine Accounting', category: 'knowledge' },
        { arabic: 'الجليل', transliteration: 'Al-Jaleel', meaning: 'The Majestic', attribute: 'Divine Majesty', category: 'power' },
        { arabic: 'الكريم', transliteration: 'Al-Kareem', meaning: 'The Generous', attribute: 'Noble Generosity', category: 'mercy' },
        { arabic: 'الرقيب', transliteration: 'Ar-Raqeeb', meaning: 'The Watchful', attribute: 'Divine Vigilance', category: 'knowledge' },
        { arabic: 'المجيب', transliteration: 'Al-Mujeeb', meaning: 'The Responsive', attribute: 'Divine Response', category: 'mercy' },
        { arabic: 'الواسع', transliteration: 'Al-Waasi\'', meaning: 'The All-Encompassing', attribute: 'Infinite Vastness', category: 'power' },
        { arabic: 'الحكيم', transliteration: 'Al-Hakeem', meaning: 'The Wise', attribute: 'Perfect Wisdom', category: 'knowledge' },
        { arabic: 'الودود', transliteration: 'Al-Wadood', meaning: 'The Loving', attribute: 'Divine Love', category: 'mercy' },
        { arabic: 'المجيد', transliteration: 'Al-Majeed', meaning: 'The Glorious', attribute: 'Divine Glory', category: 'power' },
        { arabic: 'الباعث', transliteration: 'Al-Baa\'ith', meaning: 'The Resurrector', attribute: 'Divine Revival', category: 'power' },
        { arabic: 'الشهيد', transliteration: 'Ash-Shaheed', meaning: 'The Witness', attribute: 'Divine Testimony', category: 'knowledge' },
        { arabic: 'الحق', transliteration: 'Al-Haqq', meaning: 'The Truth', attribute: 'Absolute Truth', category: 'knowledge' },
        { arabic: 'الوكيل', transliteration: 'Al-Wakeel', meaning: 'The Trustee', attribute: 'Divine Trusteeship', category: 'power' },
        { arabic: 'القوي', transliteration: 'Al-Qawi', meaning: 'The Strong', attribute: 'Divine Strength', category: 'power' },
        { arabic: 'المتين', transliteration: 'Al-Mateen', meaning: 'The Firm', attribute: 'Unshakeable Firmness', category: 'power' },
        { arabic: 'الولي', transliteration: 'Al-Wali', meaning: 'The Friend', attribute: 'Divine Friendship', category: 'mercy' },
        { arabic: 'الحميد', transliteration: 'Al-Hameed', meaning: 'The Praiseworthy', attribute: 'Perfect Praise', category: 'power' },
        { arabic: 'المحصي', transliteration: 'Al-Muhsee', meaning: 'The Counter', attribute: 'Divine Enumeration', category: 'knowledge' },
        { arabic: 'المبدئ', transliteration: 'Al-Mubdi\'', meaning: 'The Initiator', attribute: 'Divine Beginning', category: 'knowledge' },
        { arabic: 'المعيد', transliteration: 'Al-Mu\'eed', meaning: 'The Restorer', attribute: 'Divine Restoration', category: 'knowledge' },
        { arabic: 'المحيي', transliteration: 'Al-Muhyee', meaning: 'The Giver of Life', attribute: 'Divine Life', category: 'power' },
        { arabic: 'المميت', transliteration: 'Al-Mumeet', meaning: 'The Taker of Life', attribute: 'Divine Death', category: 'power' },
        { arabic: 'الحي', transliteration: 'Al-Hayy', meaning: 'The Living', attribute: 'Eternal Life', category: 'power' },
        { arabic: 'القيوم', transliteration: 'Al-Qayyoom', meaning: 'The Self-Sustaining', attribute: 'Divine Self-Sufficiency', category: 'power' },
        { arabic: 'الواجب', transliteration: 'Al-Waajid', meaning: 'The Finder', attribute: 'Divine Discovery', category: 'power' },
        { arabic: 'الماجد', transliteration: 'Al-Maajid', meaning: 'The Noble', attribute: 'Divine Nobility', category: 'power' },
        { arabic: 'الواحد', transliteration: 'Al-Waahid', meaning: 'The One', attribute: 'Divine Unity', category: 'power' },
        { arabic: 'الأحد', transliteration: 'Al-Ahad', meaning: 'The Unique', attribute: 'Absolute Uniqueness', category: 'power' },
        { arabic: 'الصمد', transliteration: 'As-Samad', meaning: 'The Eternal', attribute: 'Divine Independence', category: 'power' },
        { arabic: 'القادر', transliteration: 'Al-Qaadir', meaning: 'The Capable', attribute: 'Divine Capability', category: 'power' },
        { arabic: 'المقتدر', transliteration: 'Al-Muqtadir', meaning: 'The Powerful', attribute: 'Supreme Power', category: 'power' },
        { arabic: 'المقدم', transliteration: 'Al-Muqaddim', meaning: 'The Expediter', attribute: 'Divine Advancement', category: 'power' },
        { arabic: 'المؤخر', transliteration: 'Al-Mu\'akhkhar', meaning: 'The Delayer', attribute: 'Divine Timing', category: 'power' },
        { arabic: 'الأول', transliteration: 'Al-Awwal', meaning: 'The First', attribute: 'Divine Primacy', category: 'knowledge' },
        { arabic: 'الآخر', transliteration: 'Al-Aakhir', meaning: 'The Last', attribute: 'Divine Finality', category: 'knowledge' },
        { arabic: 'الظاهر', transliteration: 'Az-Zaahir', meaning: 'The Manifest', attribute: 'Divine Manifestation', category: 'knowledge' },
        { arabic: 'الباطن', transliteration: 'Al-Baatin', meaning: 'The Hidden', attribute: 'Divine Mystery', category: 'knowledge' },
        { arabic: 'الوالي', transliteration: 'Al-Waali', meaning: 'The Governor', attribute: 'Divine Governance', category: 'power' },
        { arabic: 'المتعالي', transliteration: 'Al-Muta\'aali', meaning: 'The Exalted', attribute: 'Supreme Exaltation', category: 'power' },
        { arabic: 'البر', transliteration: 'Al-Barr', meaning: 'The Righteous', attribute: 'Divine Righteousness', category: 'mercy' },
        { arabic: 'التواب', transliteration: 'At-Tawwaab', meaning: 'The Acceptor of Repentance', attribute: 'Merciful Acceptance', category: 'mercy' },
        { arabic: 'المنتقم', transliteration: 'Al-Muntaqim', meaning: 'The Avenger', attribute: 'Divine Retribution', category: 'power' },
        { arabic: 'العفو', transliteration: 'Al-\'Afuw', meaning: 'The Pardoner', attribute: 'Divine Pardon', category: 'mercy' },
        { arabic: 'الرؤوف', transliteration: 'Ar-Ra\'oof', meaning: 'The Compassionate', attribute: 'Gentle Compassion', category: 'mercy' },
        { arabic: 'مالك الملك', transliteration: 'Maalik-ul-Mulk', meaning: 'Master of the Kingdom', attribute: 'Divine Kingship', category: 'royalty' },
        { arabic: 'ذو الجلال والإكرام', transliteration: 'Zul-Jalaali-wal-Ikraam', meaning: 'Lord of Majesty and Bounty', attribute: 'Divine Majesty and Generosity', category: 'royalty' },
        { arabic: 'المقسط', transliteration: 'Al-Muqsit', meaning: 'The Equitable', attribute: 'Divine Equity', category: 'knowledge' },
        { arabic: 'الجامع', transliteration: 'Al-Jaami\'', meaning: 'The Gatherer', attribute: 'Divine Assembly', category: 'knowledge' },
        { arabic: 'الغني', transliteration: 'Al-Ghaniyy', meaning: 'The Rich', attribute: 'Divine Self-Sufficiency', category: 'power' },
        { arabic: 'المغني', transliteration: 'Al-Mughni', meaning: 'The Enricher', attribute: 'Divine Enrichment', category: 'mercy' },
        { arabic: 'المانع', transliteration: 'Al-Maani\'', meaning: 'The Preventer', attribute: 'Divine Protection', category: 'power' },
        { arabic: 'الضار', transliteration: 'Ad-Daarr', meaning: 'The Distressor', attribute: 'Divine Testing', category: 'power' },
        { arabic: 'النافع', transliteration: 'An-Naafi\'', meaning: 'The Benefactor', attribute: 'Divine Benefit', category: 'mercy' },
        { arabic: 'النور', transliteration: 'An-Noor', meaning: 'The Light', attribute: 'Divine Illumination', category: 'knowledge' },
        { arabic: 'الهادي', transliteration: 'Al-Haadi', meaning: 'The Guide', attribute: 'Divine Guidance', category: 'knowledge' },
        { arabic: 'البديع', transliteration: 'Al-Badee\'', meaning: 'The Innovator', attribute: 'Divine Innovation', category: 'knowledge' },
        { arabic: 'الباقي', transliteration: 'Al-Baaqi', meaning: 'The Everlasting', attribute: 'Divine Permanence', category: 'power' },
        { arabic: 'الوارث', transliteration: 'Al-Waarith', meaning: 'The Inheritor', attribute: 'Divine Inheritance', category: 'power' },
        { arabic: 'الرشيد', transliteration: 'Ar-Rasheed', meaning: 'The Rightly Guided', attribute: 'Perfect Guidance', category: 'knowledge' },
        { arabic: 'الصبور', transliteration: 'As-Saboor', meaning: 'The Patient', attribute: 'Divine Patience', category: 'mercy' }
    ];

    // Sahaba Database
    const SAHABA_DATABASE = {
        asharaMubashara: [
            { name: 'أبو بكر', title: 'الصديق', fullName: 'عبدالله بن عثمان', virtues: ['أول من أسلم', 'صاحب النبي في الغار', 'أول الخلفاء'] },
            { name: 'عمر', title: 'الفاروق', fullName: 'عمر بن الخطاب', virtues: ['أعز الله به الإسلام', 'ثاني الخلفاء', 'فتح بلاد الشام'] },
            { name: 'عثمان', title: 'ذو النورين', fullName: 'عثمان بن عفان', virtues: ['جمع القرآن', 'جهيز جيش العسرة', 'ثالث الخلفاء'] },
            { name: 'علي', title: 'أمير المؤمنين', fullName: 'علي بن أبي طالب', virtues: ['ابن عم النبي', 'زوج فاطمة', 'باب مدينة العلم'] },
            { name: 'طلحة', title: 'طلحة الخير', virtues: ['من العشرة المبشرين', 'نزلت فيه آية المؤمنين', 'وقى النبي يوم أحد'] },
            { name: 'زبير', title: 'حواري الرسول', virtues: ['من العشرة المبشرين', 'ابن عمة النبي', 'سيف من سيوف الله'] },
            { name: 'سعد', title: 'الفاتح', virtues: ['من العشرة المبشرين', 'فاتح العراق', 'أول من رمى'] },
            { name: 'سعيد', title: 'السعيد', virtues: ['من العشرة المبشرين', 'شهد المشاهد كلها'] },
            { name: 'عبدالرحمن', title: 'التاجر الأمين', virtues: ['من العشرة المبشرين', 'كثير الصدقة'] },
            { name: 'أبو عبيدة', title: 'أمين الأمة', virtues: ['من العشرة المبشرين', 'فتح الشام'] }
        ],
        prominentSahaba: [
            { name: 'حمزة', title: 'سيد الشهيد', virtues: ['أسد الله وأسد رسوله', 'عم النبي'] },
            { name: 'خالد', title: 'سيف الله', virtues: ['لم يهزم في معركة', 'سيف الله المسلول'] },
            { name: 'بلال', title: 'أول مؤذن', virtues: ['أول مؤذن', 'صبر على التعذيب'] },
            { name: 'سلمان', title: 'سلمان الخير', virtues: ['صاحب فكرة الخندق', 'من أهل البيت'] },
            { name: 'عبدالله بن مسعود', virtues: ['أعلم بالقرآن', 'أول من جهر بالقرآن'] },
            { name: 'أبي بن كعب', title: 'سيد القراء', virtues: ['أحد كتاب الوحي', 'أعلم الناس بالقرآن'] },
            { name: 'معاذ بن جبل', virtues: ['أعلم الأمة بالحلال والحرام', 'أرسله النبي قاضيا'] },
            { name: 'أنس', title: 'خادم النبي', virtues: ['خدم النبي عشر سنين', 'أكثر راوية للحديث'] }
        ],
        sahabiyat: [
            { name: 'خديجة', title: 'أم المؤمنين', virtues: ['أول من أسلم', 'أم المؤمنين الأولى'] },
            { name: 'عائشة', title: 'أم المؤمنين', virtues: ['أحب الناس إلى النبي', 'أعلم نساء المسلمين'] },
            { name: 'فاطمة', title: 'سيدة نساء الجنة', virtues: ['ابنة النبي', 'أم الحسن والحسين'] },
            { name: 'حفصة', title: 'أم المؤمنين', virtues: ['حفظت المصحف الأول'] },
            { name: 'أسماء', title: 'ذات النطاقين', virtues: ['شقت نطاقها لإطعام النبي'] }
        ]
    };

    // Hijri Months
    const HIJRI_MONTHS = [
        { number: 1, arabic: 'محرم', name: 'Muharram', meaning: 'Forbidden', blessedDays: [1, 10], significance: ['أحد الأشهر الحرم', 'يوم عاشوراء'] },
        { number: 2, arabic: 'صفر', name: 'Safar', meaning: 'Empty', blessedDays: [] },
        { number: 3, arabic: 'ربيع الأول', name: 'Rabi al-Awwal', meaning: 'First spring', blessedDays: [12], significance: ['مولد النبي', 'وفاة النبي'] },
        { number: 4, arabic: 'ربيع الثاني', name: 'Rabi al-Thani', meaning: 'Second spring', blessedDays: [] },
        { number: 5, arabic: 'جمادى الأولى', name: 'Jumada al-Awwal', meaning: 'First frozen', blessedDays: [] },
        { number: 6, arabic: 'جمادى الثانية', name: 'Jumada al-Thani', meaning: 'Second frozen', blessedDays: [] },
        { number: 7, arabic: 'رجب', name: 'Rajab', meaning: 'Respect', blessedDays: [1, 15, 27], significance: ['أحد الأشهر الحرم', 'الإسراء والمعراج'] },
        { number: 8, arabic: 'شعبان', name: 'Shaaban', meaning: 'Branch', blessedDays: [15], significance: ['ليلة البراءة'] },
        { number: 9, arabic: 'رمضان', name: 'Ramadan', meaning: 'Heat', blessedDays: [1, 21, 23, 25, 27, 29], significance: ['شهر الصيام', 'ليلة القدر'] },
        { number: 10, arabic: 'شوال', name: 'Shawwal', meaning: 'Raised tail', blessedDays: [1, 2, 3], significance: ['عيد الفطر'] },
        { number: 11, arabic: 'ذو القعدة', name: 'Dhul Qadah', meaning: 'Truce', blessedDays: [], significance: ['أحد الأشهر الحرم', 'شهر الحج'] },
        { number: 12, arabic: 'ذو الحجة', name: 'Dhul Hijjah', meaning: 'Pilgrimage', blessedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], significance: ['شهر الحج', 'عيد الأضحى', 'أفضل أيام السنة'] }
    ];

    // Blessed Days
    const BLESSED_DAYS = [
        { name: 'عاشوراء', month: 1, day: 10, significance: 'نجاة موسى من فرعون', recommendation: 'صيام يوم عاشوراء والتاسع' },
        { name: 'المولد النبوي', month: 3, day: 12, significance: 'مولد النبي ﷺ', recommendation: 'قراءة السيرة والصلاة على النبي' },
        { name: 'الإسراء والمعراج', month: 7, day: 27, significance: 'رحلة النبي من مكة إلى السماء', recommendation: 'الصلاة والدعاء' },
        { name: 'ليلة البراءة', month: 8, day: 15, significance: 'ليلة المغفرة والبراءة من النار', recommendation: 'الاستغفار والدعاء' },
        { name: 'ليلة القدر', month: 9, day: 'وتر', significance: 'خير من ألف شهر', recommendation: 'القيام والدعاء' },
        { name: 'يوم عرفة', month: 12, day: 9, significance: 'أفضل يوم في السنة', recommendation: 'الصيام لغير الحاج' },
        { name: 'عيد الفطر', month: 10, day: 1, significance: 'بعد رمضان', recommendation: 'الصلاة والزكاة' },
        { name: 'عيد الأضحى', month: 12, day: 10, significance: 'عيد الحج والأضحية', recommendation: 'الأضحية والتكبير' }
    ];

    // Regional Patterns
    const REGIONAL_PATTERNS = {
        gulf: { names: ['محمد', 'أحمد', 'عبدالله', 'خالد', 'سعود', 'فيصل', 'نايف', 'تركي', 'عمر', 'يوسف'], characteristics: 'Strong Islamic heritage, royal names common' },
        levantine: { names: ['محمد', 'أحمد', 'علي', 'يوسف', 'ابراهيم', 'محمود', 'مصطفى', 'طارق', 'وائل', 'نادر'], characteristics: 'Mix of Arabic and Turkish influences' },
        northAfrican: { names: ['محمد', 'أحمد', 'علي', 'عبدالله', 'ياسين', 'إبراهيم', 'كريم', 'نور الدين', 'بلال', 'سفيان'], characteristics: 'Berber and Arabic fusion' },
        iraqi: { names: ['محمد', 'علي', 'حسين', 'جعفر', 'هادي', 'مرتضى', 'كاظم', 'صادق', 'رضا', 'عباس'], characteristics: 'Strong religious scholarly tradition' },
        yemeni: { names: ['علي', 'عبدالله', 'أحمد', 'محمد', 'إبراهيم', 'يحيى', 'صالح', 'قاسم', 'حسن', 'يوسف'], characteristics: 'Ancient Yemeni naming traditions' },
        sudanese: { names: ['محمد', 'أحمد', 'علي', 'عبدالله', 'إبراهيم', 'الحاج', 'صالح', 'كمال', 'منصور', 'عثمان'], characteristics: 'African-Arabic naming blend' }
    };

    // Name Database
    const NAME_DATABASE = {
        quranic: ['محمد', 'أحمد', 'إبراهيم', 'موسى', 'عيسى', 'نوح', 'إدريس', 'شعيب', 'يونس', 'أيوب', 'ذو الكفل', 'زاكر', 'الياس', 'المهدي'],
        prophetic: ['إسماعيل', ' إسحاق', ' يعقوب', ' يوسف', ' موسى', ' هارون', '大卫', ' سليمان', ' أيوب', ' شعيب', ' محمد'],
        sahaba: ['أبو بكر', 'عمر', 'عثمان', 'علي', 'طلحة', 'زبير', 'سعد', 'سعيد', 'عبدالرحمن', 'أبو عبيدة', 'حمزة', 'خالد', 'بلال', 'سلمان', 'أنس']
    };

    // Lunar Mansions
    const LUNAR_MANSIONS = [
        { number: 1, arabic: 'الشرطان', transliteration: 'Ash-Sharatan', meaning: 'The Two Signs', element: 'Fire', influence: 'Leadership' },
        { number: 2, arabic: 'البطين', transliteration: 'Al-Butain', meaning: 'The Little Belly', element: 'Fire', influence: 'Patience' },
        { number: 3, arabic: 'الثريا', transliteration: 'Ath-Thurayya', meaning: 'The Pleiades', element: 'Earth', influence: 'Prosperity' },
        { number: 4, arabic: 'الدبران', transliteration: 'Ad-Dabaran', meaning: 'The Follower', element: 'Earth', influence: 'Loyalty' },
        { number: 5, arabic: 'الهقعة', transliteration: 'Al-Haq\'ah', meaning: 'The White Spot', element: 'Air', influence: 'Clarity' },
        { number: 6, arabic: 'الهنعة', transliteration: 'Al-Han\'ah', meaning: 'The Brand Mark', element: 'Air', influence: 'Identity' },
        { number: 7, arabic: 'الذراع', transliteration: 'Adh-Dhira\'', meaning: 'The Arm', element: 'Air', influence: 'Reach' },
        { number: 8, arabic: 'النثرة', transliteration: 'An-Nathrah', meaning: 'The Tip', element: 'Water', influence: 'Focus' },
        { number: 9, arabic: 'الطرف', transliteration: 'At-Tarf', meaning: 'The Glance', element: 'Fire', influence: 'Perception' },
        { number: 10, arabic: 'الجبهة', transliteration: 'Al-Jabhah', meaning: 'The Forehead', element: 'Fire', influence: 'Honor' },
        { number: 11, arabic: 'الزبرة', transliteration: 'Az-Zubrah', meaning: 'The Mane', element: 'Fire', influence: 'Power' },
        { number: 12, arabic: 'الصرفة', transliteration: 'As-Sarfah', meaning: 'The Turn', element: 'Fire', influence: 'Change' },
        { number: 13, arabic: 'العواء', transliteration: 'Al-\'Awwa', meaning: 'The Howler', element: 'Earth', influence: 'Expression' },
        { number: 14, arabic: 'السماك', transliteration: 'As-Simak', meaning: 'The Unarmed', element: 'Earth', influence: 'Peace' },
        { number: 15, arabic: 'الغفر', transliteration: 'Al-Ghafr', meaning: 'The Covering', element: 'Earth', influence: 'Protection' },
        { number: 16, arabic: 'الزبنى', transliteration: 'Az-Zubana', meaning: 'The Claws', element: 'Air', influence: 'Justice' },
        { number: 17, arabic: 'الإكليل', transliteration: 'Al-Iklil', meaning: 'The Crown', element: 'Water', influence: 'Achievement' },
        { number: 18, arabic: 'القلب', transliteration: 'Al-Qalb', meaning: 'The Heart', element: 'Water', influence: 'Emotion' },
        { number: 19, arabic: 'الشولة', transliteration: 'Ash-Shawlah', meaning: 'The Sting', element: 'Water', influence: 'Defense' },
        { number: 20, arabic: 'النعائم', transliteration: 'An-Na\'a\'im', meaning: 'The Ostriches', element: 'Fire', influence: 'Speed' },
        { number: 21, arabic: 'البلدة', transliteration: 'Al-Baldah', meaning: 'The City', element: 'Fire', influence: 'Community' },
        { number: 22, arabic: 'سعد الذابح', meaning: 'Slaughterer\'s Luck', element: 'Earth', influence: 'Sacrifice' },
        { number: 23, arabic: 'سعد بلع', meaning: 'Swallower\'s Luck', element: 'Air', influence: 'Integration' },
        { number: 24, arabic: 'سعد السعود', meaning: 'Ultimate Luck', element: 'Air', influence: 'Fortune' },
        { number: 25, arabic: 'سعد الأخبية', meaning: 'Tents\' Luck', element: 'Air', influence: 'Shelter' },
        { number: 26, arabic: 'فرغ المقدم', meaning: 'First Pouring', element: 'Air', influence: 'Beginnings' },
        { number: 27, arabic: 'فرغ المؤخر', meaning: 'Second Pouring', element: 'Air', influence: 'Completion' },
        { number: 28, arabic: 'الرشا', transliteration: 'Ar-Risha', meaning: 'The Well Rope', element: 'Water', influence: 'Connection' }
    ];

    // ==================== HISAAB CLASS ====================

    class Hisaab {
        constructor(arabicName) {
            if (!arabicName || typeof arabicName !== 'string') {
                throw new Error('Arabic name must be provided');
            }
            this.abjadMap = {
                'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'ة': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9,
                'ي': 10, 'ى': 10, 'ئ': 10, 'ؤ': 10, 'ك': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60, 'ع': 70, 'ف': 80, 'ص': 90,
                'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000
            };
            this.name = arabicName.trim();
            this.value = this.calculateValue();
        }

        calculateValue() {
            let total = 0;
            for (let i = 0; i < this.name.length; i++) {
                const val = this.abjadMap[this.name[i]];
                if (val !== undefined) total += val;
            }
            return total;
        }

        getValue() { return this.value; }
        getName() { return this.name; }

        getDigitRoot() {
            let sum = this.value;
            while (sum >= 10) {
                sum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
            }
            return sum;
        }

        getBreakdown() {
            const breakdown = [];
            for (let i = 0; i < this.name.length; i++) {
                const val = this.abjadMap[this.name[i]];
                if (val !== undefined) breakdown.push({ letter: this.name[i], value: val });
            }
            return breakdown;
        }

        getArabicAstrology() {
            const v = this.value;
            const elements = ['Water', 'Fire', 'Air', 'Earth'];
            const planets = ['Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus'];
            const zodiacs = ['Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius'];
            const elementsAr = ['الماء', 'النار', 'الهواء', 'الأرض'];
            const planetsAr = ['زحل', 'الشمس', 'القمر', 'المريخ', 'عطارد', 'المشتري', 'الزهرة'];
            const zodiacsAr = ['الحوت', 'الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'السنبلة', 'الميزان', 'العقرب', 'القوس', 'الجدي', 'الدلو'];
            
            const el = elements[(v % 4 + 4) % 4];
            const pl = planets[(v % 7 + 7) % 7];
            const zod = zodiacs[(v % 12 + 12) % 12];
            
            return {
                element: { name: el, arabic: elementsAr[(v % 4 + 4) % 4] },
                planet: { name: pl, arabic: planetsAr[(v % 7 + 7) % 7] },
                zodiac: { name: zod, arabic: zodiacsAr[(v % 12 + 12) % 12] }
            };
        }

        getLunarMansion() {
            const num = (this.value % 28) || 28;
            return LUNAR_MANSIONS.find(m => m.number === num) || LUNAR_MANSIONS[0];
        }

        getAsmaUlHusnaMatch() {
            return ASMA_UL_HUSNA.find(n => n.arabic === this.name) || null;
        }

        getNumerology() {
            const dr = this.getDigitRoot();
            const categories = { 1: 'Leadership', 2: 'Cooperation', 3: 'Creativity', 4: 'Stability', 5: 'Freedom', 6: 'Nurturing', 7: 'Spirituality', 8: 'Power', 9: 'Completion' };
            return { value: this.value, digitRoot: dr, category: categories[dr], isEven: this.value % 2 === 0 };
        }

        getLuckyNumbers() {
            const dr = this.getDigitRoot();
            return [dr, this.value % 100, (this.value * 2) % 100, (this.value + dr) % 100].filter((v, i, a) => a.indexOf(v) === i);
        }

        static getArabicCompatibility(name1, name2) {
            const h1 = new Hisaab(name1), h2 = new Hisaab(name2);
            const dr1 = h1.getDigitRoot(), dr2 = h2.getDigitRoot();
            const house = ((dr1 + dr2 + 7 - 1) % 9) + 1;
            const interpretations = {
                1: { rating: '6/10', quality: 'Bad', arabic: 'سيء', details: 'Starts well but faces challenges later' },
                2: { rating: '6/10', quality: 'Good', arabic: 'جيد', details: 'Wealth with complications' },
                3: { rating: '7/10', quality: 'Very Bad', arabic: 'سيء جداً', details: 'Family conflicts' },
                4: { rating: '7/10', quality: 'Very Good', arabic: 'جيد جداً', details: 'Clean wealth, possible divorce' },
                5: { rating: '5/10', quality: 'Neutral', arabic: 'محايد', details: 'Good for politicians, many children' },
                6: { rating: '9/10', quality: 'Very Bad', arabic: 'سيء جداً', details: 'Misfortune but peaceful' },
                7: { rating: '10/10', quality: 'Very Good', arabic: 'ممتاز', details: 'Perfect harmony - most blessed!' },
                8: { rating: '5/10', quality: 'Neutral', arabic: 'محايد', details: 'Good for scholars' },
                9: { rating: '10/10', quality: 'Very Bad', arabic: 'سيء جداً', details: 'Worst case - avoid!' }
            };
            return { name1, name2, digitRoot1: dr1, digitRoot2: dr2, partnerHouse: house, calculation: `${dr1} + ${dr2} + 7 = ${dr1+dr2+7} → ${house}`, interpretation: interpretations[house] };
        }

        static generateNames(criteria = {}) {
            const { targetRoot, element, purpose, maxResults = 10 } = criteria;
            const allNames = [...ASMA_UL_HUSNA.map(n => n.arabic), ...SAHABA_DATABASE.asharaMubashara.map(s => s.name), 'محمد', 'أحمد', 'فاطمة', 'عائشة', 'علي', 'حسن', 'حسين', 'ابراهيم', 'يوسف', 'خالد', 'سعد', 'صالح', 'طارق'];
            const suggestions = [];
            allNames.forEach(name => {
                try {
                    const h = new Hisaab(name);
                    let score = 0, reasons = [];
                    if (targetRoot && h.getDigitRoot() === parseInt(targetRoot)) { score += 50; reasons.push('Digit root match'); }
                    if (element && h.getArabicAstrology().element.name === element) { score += 30; reasons.push('Element match'); }
                    if (score > 0 || !targetRoot) suggestions.push({ name, value: h.getValue(), digitRoot: h.getDigitRoot(), element: h.getArabicAstrology().element.name, score, reasons });
                } catch(e) {}
            });
            return suggestions.sort((a, b) => b.score - a.score).slice(0, maxResults);
        }
    }

    // ==================== HIJRI CALCULATIONS ====================

    function gregorianToHijri(year, month, day) {
        const jd = Math.floor((1461 * (year + 4800 + (month - 14) / 12)) / 4 + (367 * (month - 2 - 12 * ((month - 14) / 12))) / 12 - (3 * ((year + 4900 + (month - 14) / 12) / 100)) / 4 + day - 32075);
        const l = jd - 1948440 + 10632;
        const n = Math.floor((l - 1) / 10631);
        const l2 = l - 10631 * n + 354;
        const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) + Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
        const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
        const month = Math.floor((24 * l3) / 709);
        const day = l3 - Math.floor((709 * month) / 24);
        const yearHijri = 30 * n + j - 30;
        return { year: yearHijri, month, day };
    }

    function hijriToGregorian(year, month, day) {
        const jd = day + Math.floor(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((11 * year + 3) / 30) + 1948440 - 1;
        const z = jd + 0.5;
        const a = Math.floor((z - 1867216.25) / 36524.25);
        const b = z + 1 + a - Math.floor(a / 4);
        const c = b + 1524;
        const d = Math.floor((c - 122.1) / 365.25);
        const e = Math.floor(365.25 * d);
        const f = Math.floor((c - e) / 30.6001);
        const day = Math.floor(c - e + Math.floor(30.6001 * f));
        const month = f - 1 - 12 * Math.floor(f / 14);
        const year = d - 4715 - Math.floor((7 + month) / 10);
        return { year, month, day };
    }

    // ==================== UI FUNCTIONS ====================

    let currentResults = null;

    function init() {
        // Calculator
        document.getElementById('calculateBtn').addEventListener('click', calculateName);
        document.getElementById('compatibilityBtn').addEventListener('click', checkCompatibility);
        
        // Asma Ul Husna
        document.getElementById('asmaSearch').addEventListener('input', renderAsmaUlHusna);
        document.getElementById('asmaFilter').addEventListener('change', renderAsmaUlHusna);
        
        // Sahaba
        document.querySelectorAll('.sahaba-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sahaba-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderSahaba(btn.dataset.tab);
            });
        });
        
        // Hijri
        document.getElementById('convertBtn').addEventListener('click', convertDate);
        
        // AI
        document.getElementById('aiRecommendBtn').addEventListener('click', getAIRecommendations);
        
        // Regional
        document.getElementById('regionalBtn').addEventListener('click', doRegionalAnalysis);
        
        // Names
        document.getElementById('searchNamesBtn').addEventListener('click', searchNames);
        
        // Initialize displays
        renderAsmaUlHusna();
        renderSahaba('ashara');
        renderHijriMonths();
        renderBlessedDays();
        updateCurrentHijriDate();
    }

    function calculateName() {
        const nameInput = document.getElementById('arabicName');
        const name = nameInput.value.trim();
        if (!name) { showError('الرجاء إدخال اسم عربي'); return; }
        
        try {
            const hisaab = new Hisaab(name);
            currentResults = hisaab;
            displayResults(hisaab);
        } catch(e) { showError('خطأ في الحساب: ' + e.message); }
    }

    function checkCompatibility() {
        const name1 = document.getElementById('arabicName').value.trim();
        const name2 = document.getElementById('partnerName').value.trim();
        if (!name1 || !name2) { showError('الرجاء إدخال الاسمين'); return; }
        
        try {
            const comp = Hisaab.getArabicCompatibility(name1, name2);
            displayCompatibility(comp);
        } catch(e) { showError('خطأ: ' + e.message); }
    }

    function displayResults(hisaab) {
        const breakdown = hisaab.getBreakdown();
        const astro = hisaab.getArabicAstrology();
        const mansion = hisaab.getLunarMansion();
        const numerology = hisaab.getNumerology();
        const luckyNumbers = hisaab.getLuckyNumbers();
        const asmaMatch = hisaab.getAsmaUlHusnaMatch();
        
        const html = `
            <div class="results-container">
                <div class="result-header">
                    <h2>${hisaab.getName()}</h2>
                    <div class="total-value">${hisaab.getValue()}</div>
                </div>
                
                <div class="result-grid">
                    <div class="result-card">
                        <h3>📊 ${numerology.category}</h3>
                        <p>Digit Root: <strong>${numerology.digitRoot}</strong></p>
                        <p>Value: <strong>${numerology.value}</strong></p>
                        <p>Type: <strong>${numerology.isEven ? 'Even (Yin)' : 'Odd (Yang)'}</strong></p>
                    </div>
                    
                    <div class="result-card">
                        <h3>🌙 Lunar Mansion</h3>
                        <div class="mansion-name">${mansion.arabic}</div>
                        <p>${mansion.transliteration || mansion.meaning}</p>
                        <p>Element: <strong>${mansion.element}</strong></p>
                        <p>Influence: <strong>${mansion.influence}</strong></p>
                    </div>
                    
                    <div class="result-card">
                        <h3>🌟 Arabic Astrology</h3>
                        <p>Element: <strong>${astro.element.arabic} (${astro.element.name})</strong></p>
                        <p>Planet: <strong>${astro.planet.arabic} (${astro.planet.name})</strong></p>
                        <p>Zodiac: <strong>${astro.zodiac.arabic} (${astro.zodiac.name})</strong></p>
                    </div>
                    
                    <div class="result-card">
                        <h3>🔤 Letter Breakdown</h3>
                        <div class="breakdown-grid">
                            ${breakdown.map(b => `<div class="breakdown-item"><span class="letter">${b.letter}</span><span class="value">${b.value}</span></div>`).join('')}
                        </div>
                    </div>
                    
                    <div class="result-card">
                        <h3>🎯 Lucky Numbers</h3>
                        <div class="lucky-numbers">${luckyNumbers.join(', ')}</div>
                    </div>
                    
                    ${asmaMatch ? `
                    <div class="result-card highlight">
                        <h3>✨ Match: ${asmaMatch.transliteration}</h3>
                        <p>${asmaMatch.meaning}</p>
                        <p class="attribute">${asmaMatch.attribute}</p>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        document.getElementById('results').innerHTML = html;
        document.getElementById('results').style.display = 'block';
    }

    function displayCompatibility(comp) {
        const colors = { 'Very Good': '#22c55e', 'Good': '#84cc16', 'Neutral': '#f59e0b', 'Bad': '#ef4444', 'Very Bad': '#dc2626' };
        const color = colors[comp.interpretation.quality] || '#666';
        
        const html = `
            <div class="compatibility-result">
                <h3>💕 حساب الشريك / Partner Compatibility</h3>
                <div class="names-row">
                    <span class="name1">${comp.name1}</span>
                    <span class="heart">💖</span>
                    <span class="name2">${comp.name2}</span>
                </div>
                <div class="calculation">
                    <p>Digit Roots: ${comp.digitRoot1} + ${comp.digitRoot2} + 7 = ${comp.calculation}</p>
                </div>
                <div class="house-result" style="border-color: ${color};">
                    <div class="house-number">${comp.partnerHouse}</div>
                    <div class="house-quality" style="color: ${color};">${comp.interpretation.quality}</div>
                    <div class="house-arabic">${comp.interpretation.arabic}</div>
                    <div class="house-rating">${comp.interpretation.rating}</div>
                    <div class="house-details">${comp.interpretation.details}</div>
                </div>
            </div>
        `;
        
        const container = document.getElementById('results');
        container.innerHTML = html;
        container.style.display = 'block';
    }

    function renderAsmaUlHusna() {
        const search = document.getElementById('asmaSearch').value.toLowerCase();
        const filter = document.getElementById('asmaFilter').value;
        let names = ASMA_UL_HUSNA;
        if (search) names = names.filter(n => n.arabic.includes(search) || n.transliteration.toLowerCase().includes(search));
        if (filter !== 'all') names = names.filter(n => n.category === filter);
        
        document.getElementById('asmaGrid').innerHTML = names.slice(0, 50).map(n => `
            <div class="asma-card">
                <div class="asma-arabic">${n.arabic}</div>
                <div class="asma-transliteration">${n.transliteration}</div>
                <div class="asma-meaning">${n.meaning}</div>
                <div class="asma-attribute">${n.attribute}</div>
            </div>
        `).join('');
    }

    function renderSahaba(tab) {
        let data;
        if (tab === 'ashara') data = SAHABA_DATABASE.asharaMubashara;
        else if (tab === 'prominent') data = SAHABA_DATABASE.prominentSahaba;
        else data = SAHABA_DATABASE.sahabiyat;
        
        document.getElementById('sahabaResults').innerHTML = data.map(s => `
            <div class="sahaba-card">
                <div class="sahaba-name">${s.name}${s.title ? ` <span class="sahaba-title">(${s.title})</span>` : ''}</div>
                ${s.fullName ? `<div class="sahaba-fullname">${s.fullName}</div>` : ''}
                <div class="sahaba-virtues">${s.virtues ? s.virtues.slice(0, 2).join('، ') : ''}</div>
            </div>
        `).join('');
    }

    function renderHijriMonths() {
        document.getElementById('monthsGrid').innerHTML = HIJRI_MONTHS.map(m => `
            <div class="month-card">
                <div class="month-number">${m.number}</div>
                <div class="month-name">${m.arabic}</div>
                <div class="month-blessed">${m.blessedDays.length} days</div>
            </div>
        `).join('');
    }

    function renderBlessedDays() {
        document.getElementById('blessedDaysList').innerHTML = BLESSED_DAYS.map(b => `
            <div class="blessed-card">
                <div class="blessed-name">${b.name}</div>
                <div class="blessed-significance">${b.significance}</div>
                <div class="blessed-recommendation">${b.recommendation}</div>
            </div>
        `).join('');
    }

    function updateCurrentHijriDate() {
        const now = new Date();
        const hijri = gregorianToHijri(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const month = HIJRI_MONTHS.find(m => m.number === hijri.month);
        document.getElementById('currentHijriDay').textContent = hijri.day;
        document.getElementById('currentHijriMonth').textContent = month ? month.arabic : '';
        document.getElementById('currentHijriYear').textContent = hijri.year;
        document.getElementById('currentGregorian').textContent = now.toLocaleDateString('ar-SA');
    }

    function convertDate() {
        const day = parseInt(document.getElementById('convDay').value);
        const month = parseInt(document.getElementById('convMonth').value);
        const year = parseInt(document.getElementById('convYear').value);
        if (!day || !month || !year) { document.getElementById('conversionResult').innerHTML = '<p class="error">الرجاء إدخال التاريخ الكامل</p>'; return; }
        
        const greg = hijriToGregorian(year, month, day);
        document.getElementById('conversionResult').innerHTML = `
            <div class="converted-date">
                <p>التاريخ الميلادي:</p>
                <div class="gregorian-result">${greg.day} / ${greg.month} / ${greg.year}</div>
            </div>
        `;
    }

    function getAIRecommendations() {
        const purpose = document.getElementById('aiPurpose').value;
        const root = document.getElementById('aiDigitRoot').value;
        const industry = document.getElementById('aiIndustry').value;
        const element = document.getElementById('aiElement').value;
        
        const suggestions = Hisaab.generateNames({ targetRoot: root, element, purpose });
        
        document.getElementById('aiResults').innerHTML = `
            <div class="ai-suggestions">
                <h3>Recommended Names</h3>
                ${suggestions.map(s => `
                    <div class="ai-suggestion">
                        <span class="ai-name">${s.name}</span>
                        <span class="ai-value">Value: ${s.value}</span>
                        <span class="ai-root">Root: ${s.digitRoot}</span>
                        <span class="ai-element">${s.element}</span>
                        ${s.reasons.length ? `<div class="ai-reasons">${s.reasons.join(', ')}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('aiResults').style.display = 'block';
    }

    function doRegionalAnalysis() {
        const name = document.getElementById('regionalName').value.trim();
        const region = document.getElementById('regionalSelect').value;
        if (!name) { showError('الرجاء إدخال اسم'); return; }
        
        try {
            const hisaab = new Hisaab(name);
            const data = REGIONAL_PATTERNS[region];
            const similar = data.names.filter(n => {
                try { return Math.abs(new Hisaab(n).getValue() - hisaab.getValue()) <= 50; } catch { return false; }
            });
            
            document.getElementById('regionalResults').innerHTML = `
                <div class="regional-analysis">
                    <h3>Regional Analysis: ${data.names[0] ? 'Gulf' : region}</h3>
                    <p>${data.characteristics}</p>
                    <div class="similar-names">
                        <h4>Similar Names in Region:</h4>
                        <div class="names-list">${similar.slice(0, 5).map(n => `<span class="region-name">${n}</span>`).join('') || 'No close matches'}</div>
                    </div>
                </div>
            `;
            document.getElementById('regionalResults').style.display = 'block';
        } catch(e) { showError('Error: ' + e.message); }
    }

    function searchNames() {
        const query = document.getElementById('nameSearch').value.trim().toLowerCase();
        const origin = document.getElementById('nameOrigin').value;
        
        let results = [];
        if (origin === 'quranic' || !origin) results = [...results, ...NAME_DATABASE.quranic.filter(n => n.includes(query))];
        if (origin === 'prophetic' || !origin) results = [...results, ...NAME_DATABASE.prophetic.filter(n => n.includes(query))];
        if (origin === 'sahaba' || !origin) results = [...results, ...NAME_DATABASE.sahaba.filter(n => n.includes(query))];
        
        document.getElementById('namesResults').innerHTML = results.length ? 
            results.map(n => `<span class="name-tag">${n}</span>`).join('') : '<p>No names found</p>';
        document.getElementById('namesResults').style.display = 'block';
    }

    function exportAs(format) {
        if (!currentResults) { showError('لا توجد نتائج للتصدير'); return; }
        const data = { name: currentResults.getName(), value: currentResults.getValue(), digitRoot: currentResults.getDigitRoot() };
        let content;
        if (format === 'json') content = JSON.stringify(data, null, 2);
        else if (format === 'html') content = `<html><body><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`;
        else if (format === 'text') content = `Name: ${data.name}\nValue: ${data.value}\nDigit Root: ${data.digitRoot}`;
        else if (format === 'markdown') content = `| Name | Value | Digit Root |\n|------|-------|------------|\n| ${data.name} | ${data.value} | ${data.digitRoot} |`;
        else if (format === 'clipboard') { navigator.clipboard.writeText(JSON.stringify(data)); content = 'Copied!'; }
        
        if (format !== 'clipboard') {
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `hisaab-export.${format === 'html' ? 'html' : format === 'markdown' ? 'md' : format}`;
            a.click();
        }
    }

    function showError(msg) {
        const div = document.createElement('div');
        div.className = 'error-toast';
        div.textContent = msg;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for external use
    window.Hisaab = Hisaab;
    window.exportAs = exportAs;
})();