/**
 * Hisaab Browser Bundle - Self-contained version
 * Version: 1.3.0
 * Generated: 2025-12-10T15:45:03.522Z
 */

(function(window) {
    'use strict';
    
    console.log('📦 Loading Hisaab Browser Bundle v1.3.0...');
    
    // Create module system
    const modules = {};
    const moduleCache = {};
    
    function require(moduleName) {
        if (moduleCache[moduleName]) {
            return moduleCache[moduleName];
        }
        
        if (modules[moduleName]) {
            const module = { exports: {} };
            modules[moduleName](module, module.exports, require);
            moduleCache[moduleName] = module.exports;
            return module.exports;
        }
        
        throw new Error('Module not found: ' + moduleName);
    }
    
    // Register data modules
    modules['./islamic_data.js'] = function(module, exports, require) {
/**
 * Islamic Data Module - 99 Names of Allah and Quranic References
 * Contains the Asma ul-Husna and their meanings for numerical analysis
 */

const ASMA_UL_HUSNA = [
    { arabic: 'الله', transliteration: 'Allah', meaning: 'The God', attribute: 'The One and Only' },
    { arabic: 'الرحمن', transliteration: 'Ar-Rahman', meaning: 'The Most Merciful', attribute: 'Universal Mercy' },
    { arabic: 'الرحيم', transliteration: 'Ar-Raheem', meaning: 'The Most Compassionate', attribute: 'Specific Mercy' },
    { arabic: 'الملك', transliteration: 'Al-Malik', meaning: 'The King', attribute: 'Absolute Sovereignty' },
    { arabic: 'القدوس', transliteration: 'Al-Quddus', meaning: 'The Holy One', attribute: 'Perfect Purity' },
    { arabic: 'السلام', transliteration: 'As-Salaam', meaning: 'The Source of Peace', attribute: 'Perfect Peace' },
    { arabic: 'المؤمن', transliteration: 'Al-Mu\'min', meaning: 'The Faithful', attribute: 'Perfect Faith' },
    { arabic: 'المهيمن', transliteration: 'Al-Muhaymin', meaning: 'The Guardian', attribute: 'Divine Protection' },
    { arabic: 'العزيز', transliteration: 'Al-Aziz', meaning: 'The Mighty One', attribute: 'Invincible Power' },
    { arabic: 'الجبار', transliteration: 'Al-Jabbar', meaning: 'The Compeller', attribute: 'Overwhelming Force' },
    { arabic: 'المتكبر', transliteration: 'Al-Mutakabbir', meaning: 'The Supreme', attribute: 'Divine Pride' },
    { arabic: 'الخالق', transliteration: 'Al-Khaliq', meaning: 'The Creator', attribute: 'Creative Power' },
    { arabic: 'البارئ', transliteration: 'Al-Bari\'', meaning: 'The Maker', attribute: 'Divine Formation' },
    { arabic: 'المصور', transliteration: 'Al-Musawwir', meaning: 'The Shaper', attribute: 'Perfect Design' },
    { arabic: 'الغفار', transliteration: 'Al-Ghafaar', meaning: 'The Great Forgiver', attribute: 'Endless Forgiveness' },
    { arabic: 'القهار', transliteration: 'Al-Qahhar', meaning: 'The Dominant', attribute: 'Supreme Authority' },
    { arabic: 'الوهاب', transliteration: 'Al-Wahhaab', meaning: 'The Great Giver', attribute: 'Generous Bestowal' },
    { arabic: 'الرزاق', transliteration: 'Ar-Razzaq', meaning: 'The Provider', attribute: 'Divine Sustenance' },
    { arabic: 'الفتاح', transliteration: 'Al-Fattaah', meaning: 'The Opener', attribute: 'Divine Solutions' },
    { arabic: 'العليم', transliteration: 'Al-Aleem', meaning: 'The All-Knowing', attribute: 'Perfect Knowledge' },
    { arabic: 'القابض', transliteration: 'Al-Qaabid', meaning: 'The Restrainer', attribute: 'Divine Restriction' },
    { arabic: 'الباسط', transliteration: 'Al-Baasit', meaning: 'The Expander', attribute: 'Divine Expansion' },
    { arabic: 'الخافض', transliteration: 'Al-Khaafid', meaning: 'The Abaser', attribute: 'Divine Humbling' },
    { arabic: 'الرافع', transliteration: 'Ar-Raafi\'', meaning: 'The Exalter', attribute: 'Divine Elevation' },
    { arabic: 'المعز', transliteration: 'Al-Mu\'izz', meaning: 'The Honorer', attribute: 'Divine Honor' },
    { arabic: 'المذل', transliteration: 'Al-Muzill', meaning: 'The Humiliator', attribute: 'Divine Justice' },
    { arabic: 'السميع', transliteration: 'As-Samee\'', meaning: 'The All-Hearing', attribute: 'Perfect Hearing' },
    { arabic: 'البصير', transliteration: 'Al-Baseer', meaning: 'The All-Seeing', attribute: 'Perfect Sight' },
    { arabic: 'الحكم', transliteration: 'Al-Hakam', meaning: 'The Judge', attribute: 'Divine Judgment' },
    { arabic: 'العدل', transliteration: 'Al-Adl', meaning: 'The Just', attribute: 'Perfect Justice' },
    { arabic: 'اللطيف', transliteration: 'Al-Lateef', meaning: 'The Subtle One', attribute: 'Divine Gentleness' },
    { arabic: 'الخبير', transliteration: 'Al-Khabeer', meaning: 'The All-Aware', attribute: 'Perfect Awareness' },
    { arabic: 'الحليم', transliteration: 'Al-Haleem', meaning: 'The Forbearing', attribute: 'Divine Patience' },
    { arabic: 'العظيم', transliteration: 'Al-Azeem', meaning: 'The Magnificent', attribute: 'Divine Grandeur' },
    { arabic: 'الغفور', transliteration: 'Al-Ghafoor', meaning: 'The Forgiving', attribute: 'Merciful Forgiveness' },
    { arabic: 'الشكور', transliteration: 'Ash-Shakoor', meaning: 'The Appreciative', attribute: 'Divine Gratitude' },
    { arabic: 'العلي', transliteration: 'Al-Ali', meaning: 'The Most High', attribute: 'Supreme Height' },
    { arabic: 'الكبير', transliteration: 'Al-Kabeer', meaning: 'The Most Great', attribute: 'Divine Greatness' },
    { arabic: 'الحفيظ', transliteration: 'Al-Hafeez', meaning: 'The Preserver', attribute: 'Divine Protection' },
    { arabic: 'المقيت', transliteration: 'Al-Muqeet', meaning: 'The Nourisher', attribute: 'Divine Sustenance' },
    { arabic: 'الحسيب', transliteration: 'Al-Haseeb', meaning: 'The Reckoner', attribute: 'Divine Accounting' },
    { arabic: 'الجليل', transliteration: 'Al-Jaleel', meaning: 'The Majestic', attribute: 'Divine Majesty' },
    { arabic: 'الكريم', transliteration: 'Al-Kareem', meaning: 'The Generous', attribute: 'Noble Generosity' },
    { arabic: 'الرقيب', transliteration: 'Ar-Raqeeb', meaning: 'The Watchful', attribute: 'Divine Vigilance' },
    { arabic: 'المجيب', transliteration: 'Al-Mujeeb', meaning: 'The Responsive', attribute: 'Divine Response' },
    { arabic: 'الواسع', transliteration: 'Al-Waasi\'', meaning: 'The All-Encompassing', attribute: 'Infinite Vastness' },
    { arabic: 'الحكيم', transliteration: 'Al-Hakeem', meaning: 'The Wise', attribute: 'Perfect Wisdom' },
    { arabic: 'الودود', transliteration: 'Al-Wadood', meaning: 'The Loving', attribute: 'Divine Love' },
    { arabic: 'المجيد', transliteration: 'Al-Majeed', meaning: 'The Glorious', attribute: 'Divine Glory' },
    { arabic: 'الباعث', transliteration: 'Al-Baa\'ith', meaning: 'The Resurrector', attribute: 'Divine Revival' },
    { arabic: 'الشهيد', transliteration: 'Ash-Shaheed', meaning: 'The Witness', attribute: 'Divine Testimony' },
    { arabic: 'الحق', transliteration: 'Al-Haqq', meaning: 'The Truth', attribute: 'Absolute Truth' },
    { arabic: 'الوكيل', transliteration: 'Al-Wakeel', meaning: 'The Trustee', attribute: 'Divine Trusteeship' },
    { arabic: 'القوي', transliteration: 'Al-Qawi', meaning: 'The Strong', attribute: 'Divine Strength' },
    { arabic: 'المتين', transliteration: 'Al-Mateen', meaning: 'The Firm', attribute: 'Unshakeable Firmness' },
    { arabic: 'الولي', transliteration: 'Al-Wali', meaning: 'The Friend', attribute: 'Divine Friendship' },
    { arabic: 'الحميد', transliteration: 'Al-Hameed', meaning: 'The Praiseworthy', attribute: 'Perfect Praise' },
    { arabic: 'المحصي', transliteration: 'Al-Muhsee', meaning: 'The Counter', attribute: 'Divine Enumeration' },
    { arabic: 'المبدئ', transliteration: 'Al-Mubdi\'', meaning: 'The Initiator', attribute: 'Divine Beginning' },
    { arabic: 'المعيد', transliteration: 'Al-Mu\'eed', meaning: 'The Restorer', attribute: 'Divine Restoration' },
    { arabic: 'المحيي', transliteration: 'Al-Muhyee', meaning: 'The Giver of Life', attribute: 'Divine Life' },
    { arabic: 'المميت', transliteration: 'Al-Mumeet', meaning: 'The Taker of Life', attribute: 'Divine Death' },
    { arabic: 'الحي', transliteration: 'Al-Hayy', meaning: 'The Living', attribute: 'Eternal Life' },
    { arabic: 'القيوم', transliteration: 'Al-Qayyoom', meaning: 'The Self-Sustaining', attribute: 'Divine Self-Sufficiency' },
    { arabic: 'الواجد', transliteration: 'Al-Waajid', meaning: 'The Finder', attribute: 'Divine Discovery' },
    { arabic: 'الماجد', transliteration: 'Al-Maajid', meaning: 'The Noble', attribute: 'Divine Nobility' },
    { arabic: 'الواحد', transliteration: 'Al-Waahid', meaning: 'The One', attribute: 'Divine Unity' },
    { arabic: 'الأحد', transliteration: 'Al-Ahad', meaning: 'The Unique', attribute: 'Absolute Uniqueness' },
    { arabic: 'الصمد', transliteration: 'As-Samad', meaning: 'The Eternal', attribute: 'Divine Independence' },
    { arabic: 'القادر', transliteration: 'Al-Qaadir', meaning: 'The Capable', attribute: 'Divine Capability' },
    { arabic: 'المقتدر', transliteration: 'Al-Muqtadir', meaning: 'The Powerful', attribute: 'Supreme Power' },
    { arabic: 'المقدم', transliteration: 'Al-Muqaddim', meaning: 'The Expediter', attribute: 'Divine Advancement' },
    { arabic: 'المؤخر', transliteration: 'Al-Mu\'akhkhir', meaning: 'The Delayer', attribute: 'Divine Timing' },
    { arabic: 'الأول', transliteration: 'Al-Awwal', meaning: 'The First', attribute: 'Divine Primacy' },
    { arabic: 'الآخر', transliteration: 'Al-Aakhir', meaning: 'The Last', attribute: 'Divine Finality' },
    { arabic: 'الظاهر', transliteration: 'Az-Zaahir', meaning: 'The Manifest', attribute: 'Divine Manifestation' },
    { arabic: 'الباطن', transliteration: 'Al-Baatin', meaning: 'The Hidden', attribute: 'Divine Mystery' },
    { arabic: 'الوالي', transliteration: 'Al-Waali', meaning: 'The Governor', attribute: 'Divine Governance' },
    { arabic: 'المتعالي', transliteration: 'Al-Muta\'aali', meaning: 'The Exalted', attribute: 'Supreme Exaltation' },
    { arabic: 'البر', transliteration: 'Al-Barr', meaning: 'The Righteous', attribute: 'Divine Righteousness' },
    { arabic: 'التواب', transliteration: 'At-Tawwaab', meaning: 'The Acceptor of Repentance', attribute: 'Merciful Acceptance' },
    { arabic: 'المنتقم', transliteration: 'Al-Muntaqim', meaning: 'The Avenger', attribute: 'Divine Retribution' },
    { arabic: 'العفو', transliteration: 'Al-\'Afuw', meaning: 'The Pardoner', attribute: 'Divine Pardon' },
    { arabic: 'الرؤوف', transliteration: 'Ar-Ra\'oof', meaning: 'The Compassionate', attribute: 'Gentle Compassion' },
    { arabic: 'مالك الملك', transliteration: 'Maalik-ul-Mulk', meaning: 'Master of the Kingdom', attribute: 'Divine Kingship' },
    { arabic: 'ذو الجلال والإكرام', transliteration: 'Zul-Jalaali-wal-Ikraam', meaning: 'Lord of Majesty and Bounty', attribute: 'Divine Majesty and Generosity' },
    { arabic: 'المقسط', transliteration: 'Al-Muqsit', meaning: 'The Equitable', attribute: 'Divine Equity' },
    { arabic: 'الجامع', transliteration: 'Al-Jaami\'', meaning: 'The Gatherer', attribute: 'Divine Assembly' },
    { arabic: 'الغني', transliteration: 'Al-Ghaniyy', meaning: 'The Rich', attribute: 'Divine Self-Sufficiency' },
    { arabic: 'المغني', transliteration: 'Al-Mughni', meaning: 'The Enricher', attribute: 'Divine Enrichment' },
    { arabic: 'المانع', transliteration: 'Al-Maani\'', meaning: 'The Preventer', attribute: 'Divine Protection' },
    { arabic: 'الضار', transliteration: 'Ad-Daarr', meaning: 'The Distressor', attribute: 'Divine Testing' },
    { arabic: 'النافع', transliteration: 'An-Naafi\'', meaning: 'The Benefactor', attribute: 'Divine Benefit' },
    { arabic: 'النور', transliteration: 'An-Noor', meaning: 'The Light', attribute: 'Divine Illumination' },
    { arabic: 'الهادي', transliteration: 'Al-Haadi', meaning: 'The Guide', attribute: 'Divine Guidance' },
    { arabic: 'البديع', transliteration: 'Al-Badee\'', meaning: 'The Innovator', attribute: 'Divine Innovation' },
    { arabic: 'الباقي', transliteration: 'Al-Baaqi', meaning: 'The Everlasting', attribute: 'Divine Permanence' },
    { arabic: 'الوارث', transliteration: 'Al-Waarith', meaning: 'The Inheritor', attribute: 'Divine Inheritance' },
    { arabic: 'الرشيد', transliteration: 'Ar-Rasheed', meaning: 'The Rightly Guided', attribute: 'Perfect Guidance' },
    { arabic: 'الصبور', transliteration: 'As-Saboor', meaning: 'The Patient', attribute: 'Divine Patience' }
];

// Quranic verses with their numerical significance
const QURANIC_CONNECTIONS = {
    // Verses organized by their numerical values and significance
    66: { // Value of الله (Allah)
        verse: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translation: 'Say: He is Allah, the One',
        reference: 'Al-Ikhlas 112:1',
        significance: 'Declaration of Divine Unity'
    },
    92: { // Value of محمد (Muhammad)
        verse: 'مُّحَمَّدٌ رَّسُولُ اللَّهِ',
        translation: 'Muhammad is the Messenger of Allah',
        reference: 'Al-Fath 48:29',
        significance: 'Prophetic Mission'
    },
    114: { // Number of Surahs in Quran
        verse: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'Praise be to Allah, Lord of all the worlds',
        reference: 'Al-Fatiha 1:2',
        significance: 'Opening of the Quran'
    },
    19: { // Special number in Quran
        verse: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
        translation: 'And I did not create the jinn and mankind except to worship Me',
        reference: 'Adh-Dhariyat 51:56',
        significance: 'Purpose of Creation'
    }
};

module.exports = {
    ASMA_UL_HUSNA,
    QURANIC_CONNECTIONS
};
    };
    
    modules['./lunar_mansions_data.js'] = function(module, exports, require) {
/**
 * Lunar Mansions Data Module - 28 Traditional Arabic Astronomical Stations
 * منازل القمر - The 28 stations the moon passes through in its monthly cycle
 */

const LUNAR_MANSIONS = [
    {
        number: 1,
        arabic: 'الشرطان',
        transliteration: 'Ash-Sharatan',
        meaning: 'The Two Signs',
        constellation: 'Aries',
        stars: 'Beta and Gamma Arietis',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Leadership and Initiative',
        fortune: 'Excellent for new beginnings and leadership roles',
        personality: ['Pioneer', 'Leader', 'Independent', 'Courageous'],
        favorable: ['Starting new projects', 'Leadership decisions', 'Breaking new ground'],
        unfavorable: ['Following others', 'Passive activities', 'Waiting'],
        spiritual: 'Connected to divine guidance and new paths',
        traditional_use: 'Marking the start of spring and new agricultural cycles'
    },
    {
        number: 2,
        arabic: 'البطين',
        transliteration: 'Al-Butain',
        meaning: 'The Little Belly',
        constellation: 'Aries',
        stars: 'Three stars in Aries',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Patience and Endurance',
        fortune: 'Good for steady progress and building foundations',
        personality: ['Patient', 'Enduring', 'Steady', 'Reliable'],
        favorable: ['Long-term planning', 'Building foundations', 'Steady work'],
        unfavorable: ['Rushing', 'Impatience', 'Quick decisions'],
        spiritual: 'Teaches the value of patience in spiritual growth',
        traditional_use: 'Time for preparing soil and planting seeds'
    },
    {
        number: 3,
        arabic: 'الثريا',
        transliteration: 'Ath-Thurayya',
        meaning: 'The Pleiades',
        constellation: 'Taurus',
        stars: 'The Pleiades star cluster',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Abundance and Prosperity',
        fortune: 'Excellent for wealth, abundance, and group activities',
        personality: ['Abundant', 'Social', 'Prosperous', 'Generous'],
        favorable: ['Financial ventures', 'Group projects', 'Social gatherings'],
        unfavorable: ['Isolation', 'Poverty mindset', 'Selfish acts'],
        spiritual: 'Represents divine abundance and community blessings',
        traditional_use: 'Celebrated as a sign of coming prosperity'
    },
    {
        number: 4,
        arabic: 'الدبران',
        transliteration: 'Ad-Dabaran',
        meaning: 'The Follower',
        constellation: 'Taurus',
        stars: 'Aldebaran (Alpha Tauri)',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Loyalty and Devotion',
        fortune: 'Good for faithful service and loyal partnerships',
        personality: ['Loyal', 'Devoted', 'Faithful', 'Supportive'],
        favorable: ['Partnerships', 'Service to others', 'Following guidance'],
        unfavorable: ['Betrayal', 'Disloyalty', 'Breaking commitments'],
        spiritual: 'Teaches devotion to higher principles',
        traditional_use: 'Time for honoring commitments and relationships'
    },
    {
        number: 5,
        arabic: 'الهقعة',
        transliteration: 'Al-Haq\'ah',
        meaning: 'The White Spot',
        constellation: 'Orion',
        stars: 'Lambda, Phi Orionis',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Clarity and Illumination',
        fortune: 'Excellent for gaining clarity and understanding',
        personality: ['Clear-minded', 'Illuminated', 'Wise', 'Perceptive'],
        favorable: ['Study', 'Research', 'Seeking truth', 'Teaching'],
        unfavorable: ['Confusion', 'Deception', 'Unclear thinking'],
        spiritual: 'Brings divine illumination and clarity of purpose',
        traditional_use: 'Time for learning and seeking knowledge'
    },
    {
        number: 6,
        arabic: 'الهنعة',
        transliteration: 'Al-Han\'ah',
        meaning: 'The Brand Mark',
        constellation: 'Orion',
        stars: 'Gamma, Delta, Epsilon Orionis',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Recognition and Identity',
        fortune: 'Good for establishing identity and gaining recognition',
        personality: ['Distinctive', 'Recognizable', 'Unique', 'Memorable'],
        favorable: ['Branding', 'Identity work', 'Recognition seeking'],
        unfavorable: ['Anonymity', 'Blending in', 'Loss of identity'],
        spiritual: 'Helps discover one\'s unique spiritual purpose',
        traditional_use: 'Time for marking territory and establishing presence'
    },
    {
        number: 7,
        arabic: 'الذراع',
        transliteration: 'Adh-Dhira\'',
        meaning: 'The Outstretched Arm',
        constellation: 'Gemini',
        stars: 'Alpha, Beta Geminorum',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Reach and Extension',
        fortune: 'Excellent for extending influence and reaching goals',
        personality: ['Reaching', 'Extending', 'Ambitious', 'Far-sighted'],
        favorable: ['Expansion', 'Networking', 'Long-distance communication'],
        unfavorable: ['Withdrawal', 'Isolation', 'Short-sighted planning'],
        spiritual: 'Represents reaching toward divine connection',
        traditional_use: 'Time for expanding territories and influence'
    },
    {
        number: 8,
        arabic: 'النثرة',
        transliteration: 'An-Nathrah',
        meaning: 'The Tip of the Arrow',
        constellation: 'Cancer',
        stars: 'Praesepe cluster (M44)',
        element: 'Water',
        nature: 'Cold and Wet',
        influence: 'Precision and Focus',
        fortune: 'Good for focused effort and precise action',
        personality: ['Precise', 'Focused', 'Sharp', 'Accurate'],
        favorable: ['Precision work', 'Focused effort', 'Sharp decisions'],
        unfavorable: ['Scattered energy', 'Imprecision', 'Lack of focus'],
        spiritual: 'Teaches the importance of spiritual focus and direction',
        traditional_use: 'Time for precise agricultural work and hunting'
    },
    {
        number: 9,
        arabic: 'الطرف',
        transliteration: 'At-Tarf',
        meaning: 'The Glance',
        constellation: 'Leo',
        stars: 'Cancer/Leo border stars',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Quick Perception',
        fortune: 'Excellent for quick understanding and rapid assessment',
        personality: ['Perceptive', 'Quick', 'Alert', 'Intuitive'],
        favorable: ['Quick decisions', 'Rapid assessment', 'First impressions'],
        unfavorable: ['Slow analysis', 'Over-thinking', 'Missing opportunities'],
        spiritual: 'Develops spiritual intuition and quick divine insight',
        traditional_use: 'Time for quick judgments and rapid responses'
    },
    {
        number: 10,
        arabic: 'الجبهة',
        transliteration: 'Al-Jabhah',
        meaning: 'The Forehead',
        constellation: 'Leo',
        stars: 'Four stars forming Leo\'s forehead',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Dignity and Honor',
        fortune: 'Excellent for leadership and gaining respect',
        personality: ['Dignified', 'Honorable', 'Noble', 'Respected'],
        favorable: ['Leadership roles', 'Public speaking', 'Commanding respect'],
        unfavorable: ['Dishonor', 'Humiliation', 'Loss of dignity'],
        spiritual: 'Represents the nobility of the human spirit',
        traditional_use: 'Time for ceremonies and establishing authority'
    },
    {
        number: 11,
        arabic: 'الزبرة',
        transliteration: 'Az-Zubrah',
        meaning: 'The Mane',
        constellation: 'Leo',
        stars: 'Delta, Theta Leonis',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Strength and Power',
        fortune: 'Good for demonstrating strength and personal power',
        personality: ['Strong', 'Powerful', 'Majestic', 'Commanding'],
        favorable: ['Showing strength', 'Power displays', 'Bold action'],
        unfavorable: ['Weakness', 'Submission', 'Timidity'],
        spiritual: 'Teaches the proper use of spiritual power',
        traditional_use: 'Time for demonstrations of strength and courage'
    },
    {
        number: 12,
        arabic: 'الصرفة',
        transliteration: 'As-Sarfah',
        meaning: 'The Turn',
        constellation: 'Leo',
        stars: 'Beta Leonis (Denebola)',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Change and Transition',
        fortune: 'Good for making important life changes',
        personality: ['Adaptable', 'Flexible', 'Transformative', 'Dynamic'],
        favorable: ['Life changes', 'Transitions', 'New directions'],
        unfavorable: ['Rigidity', 'Resistance to change', 'Stagnation'],
        spiritual: 'Marks important spiritual transitions and growth',
        traditional_use: 'Time for changing agricultural practices and methods'
    },
    {
        number: 13,
        arabic: 'العواء',
        transliteration: 'Al-\'Awwa',
        meaning: 'The Howler',
        constellation: 'Virgo',
        stars: 'Five stars in Virgo',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Communication and Expression',
        fortune: 'Good for vocal expression and communication',
        personality: ['Expressive', 'Communicative', 'Vocal', 'Articulate'],
        favorable: ['Public speaking', 'Artistic expression', 'Communication'],
        unfavorable: ['Silence', 'Suppression', 'Poor communication'],
        spiritual: 'Encourages expressing spiritual truths',
        traditional_use: 'Time for vocal celebrations and announcements'
    },
    {
        number: 14,
        arabic: 'السماك',
        transliteration: 'As-Simak',
        meaning: 'The Unarmed',
        constellation: 'Virgo',
        stars: 'Alpha Virginis (Spica)',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Peaceful Achievement',
        fortune: 'Excellent for achieving goals through peaceful means',
        personality: ['Peaceful', 'Diplomatic', 'Skillful', 'Refined'],
        favorable: ['Peaceful solutions', 'Diplomatic missions', 'Skillful work'],
        unfavorable: ['Aggression', 'Force', 'Crude methods'],
        spiritual: 'Teaches achieving spiritual goals through peace',
        traditional_use: 'Time for peaceful negotiations and skilled craftsmanship'
    },
    {
        number: 15,
        arabic: 'الغفر',
        transliteration: 'Al-Ghafr',
        meaning: 'The Covering',
        constellation: 'Virgo',
        stars: 'Three stars in Virgo',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Protection and Forgiveness',
        fortune: 'Good for seeking protection and offering forgiveness',
        personality: ['Protective', 'Forgiving', 'Covering', 'Merciful'],
        favorable: ['Forgiveness', 'Protection', 'Covering faults', 'Mercy'],
        unfavorable: ['Exposure', 'Revenge', 'Holding grudges'],
        spiritual: 'Emphasizes divine protection and forgiveness',
        traditional_use: 'Time for protecting crops and seeking divine mercy'
    },
    {
        number: 16,
        arabic: 'الزبانى',
        transliteration: 'Az-Zubana',
        meaning: 'The Claws',
        constellation: 'Libra',
        stars: 'Alpha, Beta Librae',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Justice and Balance',
        fortune: 'Excellent for legal matters and restoring balance',
        personality: ['Just', 'Balanced', 'Fair', 'Equitable'],
        favorable: ['Legal matters', 'Justice', 'Restoring balance', 'Fairness'],
        unfavorable: ['Injustice', 'Imbalance', 'Unfairness'],
        spiritual: 'Represents divine justice and cosmic balance',
        traditional_use: 'Time for legal proceedings and restoring order'
    },
    {
        number: 17,
        arabic: 'الإكليل',
        transliteration: 'Al-Iklil',
        meaning: 'The Crown',
        constellation: 'Scorpio',
        stars: 'Three stars forming Scorpio\'s head',
        element: 'Water',
        nature: 'Cold and Wet',
        influence: 'Honor and Achievement',
        fortune: 'Excellent for receiving honors and achieving recognition',
        personality: ['Honorable', 'Distinguished', 'Crowned', 'Achieved'],
        favorable: ['Receiving honors', 'Achievements', 'Recognition', 'Success'],
        unfavorable: ['Dishonor', 'Failure', 'Loss of status'],
        spiritual: 'Represents spiritual achievement and divine blessing',
        traditional_use: 'Time for ceremonies honoring achievements'
    },
    {
        number: 18,
        arabic: 'القلب',
        transliteration: 'Al-Qalb',
        meaning: 'The Heart',
        constellation: 'Scorpio',
        stars: 'Alpha Scorpii (Antares)',
        element: 'Water',
        nature: 'Cold and Wet',
        influence: 'Emotion and Passion',
        fortune: 'Good for matters of the heart and emotional decisions',
        personality: ['Emotional', 'Passionate', 'Heart-centered', 'Feeling'],
        favorable: ['Love', 'Emotional expression', 'Heart-centered decisions'],
        unfavorable: ['Coldness', 'Emotional suppression', 'Heartlessness'],
        spiritual: 'Centers on the spiritual heart and divine love',
        traditional_use: 'Time for matters of love and emotional significance'
    },
    {
        number: 19,
        arabic: 'الشولة',
        transliteration: 'Ash-Shawlah',
        meaning: 'The Sting',
        constellation: 'Scorpio',
        stars: 'Lambda, Upsilon Scorpii',
        element: 'Water',
        nature: 'Cold and Wet',
        influence: 'Defense and Warning',
        fortune: 'Good for defensive actions and giving warnings',
        personality: ['Defensive', 'Protective', 'Warning', 'Cautious'],
        favorable: ['Defense', 'Protection', 'Warnings', 'Caution'],
        unfavorable: ['Recklessness', 'Ignoring warnings', 'Vulnerability'],
        spiritual: 'Teaches spiritual discernment and protection',
        traditional_use: 'Time for protective measures and heeding warnings'
    },
    {
        number: 20,
        arabic: 'النعائم',
        transliteration: 'An-Na\'a\'im',
        meaning: 'The Ostriches',
        constellation: 'Sagittarius',
        stars: 'Eight stars in Sagittarius',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Speed and Agility',
        fortune: 'Excellent for quick action and rapid movement',
        personality: ['Swift', 'Agile', 'Quick', 'Mobile'],
        favorable: ['Quick action', 'Rapid movement', 'Speed', 'Agility'],
        unfavorable: ['Slowness', 'Hesitation', 'Immobility'],
        spiritual: 'Encourages swift spiritual progress',
        traditional_use: 'Time for rapid travel and quick decisions'
    },
    {
        number: 21,
        arabic: 'البلدة',
        transliteration: 'Al-Baldah',
        meaning: 'The City',
        constellation: 'Sagittarius',
        stars: 'Empty area in Sagittarius',
        element: 'Fire',
        nature: 'Hot and Dry',
        influence: 'Community and Civilization',
        fortune: 'Good for community building and social organization',
        personality: ['Social', 'Civilized', 'Community-minded', 'Organized'],
        favorable: ['Community work', 'Social organization', 'City planning'],
        unfavorable: ['Isolation', 'Anti-social behavior', 'Chaos'],
        spiritual: 'Emphasizes the spiritual community',
        traditional_use: 'Time for building communities and social structures'
    },
    {
        number: 22,
        arabic: 'سعد الذابح',
        transliteration: 'Sa\'d adh-Dhabih',
        meaning: 'The Luck of the Slaughterer',
        constellation: 'Capricorn',
        stars: 'Alpha, Beta Capricorni',
        element: 'Earth',
        nature: 'Cold and Dry',
        influence: 'Sacrifice and Transformation',
        fortune: 'Good for necessary sacrifices and transformations',
        personality: ['Sacrificing', 'Transformative', 'Determined', 'Committed'],
        favorable: ['Necessary sacrifices', 'Transformation', 'Commitment'],
        unfavorable: ['Selfishness', 'Resistance to change', 'Unwillingness to sacrifice'],
        spiritual: 'Teaches the spiritual value of sacrifice',
        traditional_use: 'Time for ritual sacrifices and major transformations'
    },
    {
        number: 23,
        arabic: 'سعد بلع',
        transliteration: 'Sa\'d Bula\'',
        meaning: 'The Luck of the Swallower',
        constellation: 'Aquarius',
        stars: 'Three stars in Aquarius',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Acceptance and Integration',
        fortune: 'Good for accepting challenges and integrating experiences',
        personality: ['Accepting', 'Integrating', 'Absorbing', 'Comprehensive'],
        favorable: ['Acceptance', 'Integration', 'Learning', 'Absorption'],
        unfavorable: ['Rejection', 'Segregation', 'Narrow-mindedness'],
        spiritual: 'Encourages accepting all of life\'s experiences',
        traditional_use: 'Time for accepting difficult circumstances'
    },
    {
        number: 24,
        arabic: 'سعد السعود',
        transliteration: 'Sa\'d as-Su\'ud',
        meaning: 'The Luck of Lucks',
        constellation: 'Aquarius',
        stars: 'Three stars in Aquarius',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Ultimate Fortune',
        fortune: 'The most fortunate of all mansions - excellent for everything',
        personality: ['Fortunate', 'Blessed', 'Lucky', 'Favored'],
        favorable: ['All endeavors', 'Major decisions', 'Important ventures'],
        unfavorable: ['Nothing - this is the most favorable mansion'],
        spiritual: 'Represents ultimate divine blessing and favor',
        traditional_use: 'Most auspicious time for all important activities'
    },
    {
        number: 25,
        arabic: 'سعد الأخبية',
        transliteration: 'Sa\'d al-Akhbiyah',
        meaning: 'The Luck of the Tents',
        constellation: 'Aquarius',
        stars: 'Four stars in Aquarius',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Shelter and Protection',
        fortune: 'Good for establishing homes and finding shelter',
        personality: ['Protective', 'Sheltering', 'Home-loving', 'Secure'],
        favorable: ['Establishing homes', 'Family matters', 'Providing shelter'],
        unfavorable: ['Homelessness', 'Exposure', 'Family discord'],
        spiritual: 'Emphasizes spiritual home and divine protection',
        traditional_use: 'Time for establishing permanent dwellings'
    },
    {
        number: 26,
        arabic: 'فرغ المقدم',
        transliteration: 'Fargh al-Muqaddam',
        meaning: 'The First Pouring',
        constellation: 'Pegasus',
        stars: 'Alpha, Beta Pegasi',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'New Beginnings',
        fortune: 'Excellent for starting new ventures and fresh beginnings',
        personality: ['Initiating', 'Fresh', 'New', 'Beginning'],
        favorable: ['New starts', 'Fresh ventures', 'Initiating projects'],
        unfavorable: ['Endings', 'Completion', 'Finishing'],
        spiritual: 'Represents new spiritual beginnings',
        traditional_use: 'Time for starting new agricultural cycles'
    },
    {
        number: 27,
        arabic: 'فرغ المؤخر',
        transliteration: 'Fargh al-Mu\'akhkhar',
        meaning: 'The Second Pouring',
        constellation: 'Pegasus/Andromeda',
        stars: 'Gamma Pegasi, Alpha Andromedae',
        element: 'Air',
        nature: 'Hot and Wet',
        influence: 'Completion and Fulfillment',
        fortune: 'Good for completing projects and achieving fulfillment',
        personality: ['Completing', 'Fulfilling', 'Finishing', 'Achieving'],
        favorable: ['Completion', 'Fulfillment', 'Achieving goals'],
        unfavorable: ['Incompletion', 'Unfulfillment', 'Abandoning projects'],
        spiritual: 'Represents the completion of spiritual cycles',
        traditional_use: 'Time for completing and harvesting'
    },
    {
        number: 28,
        arabic: 'الرشا',
        transliteration: 'Ar-Risha',
        meaning: 'The Well Rope',
        constellation: 'Andromeda/Pisces',
        stars: 'Beta Andromedae',
        element: 'Water',
        nature: 'Cold and Wet',
        influence: 'Connection and Support',
        fortune: 'Good for establishing connections and providing support',
        personality: ['Connecting', 'Supporting', 'Linking', 'Assisting'],
        favorable: ['Making connections', 'Providing support', 'Linking people'],
        unfavorable: ['Isolation', 'Breaking connections', 'Lack of support'],
        spiritual: 'Represents the connection between earth and heaven',
        traditional_use: 'Time for establishing vital connections and support systems'
    }
];

module.exports = {
    LUNAR_MANSIONS
};
    };
    
    modules['./enhanced_islamic_data.js'] = function(module, exports, require) {
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
    };
    
    modules['./business_analysis_data.js'] = function(module, exports, require) {
/**
 * Business Analysis Data Module - v1.3.0
 * Company name analysis, success indicators, timing recommendations
 */

// Business Success Indicators by Abjad Value Ranges
const BUSINESS_SUCCESS_INDICATORS = {
    // Low values (1-99)
    low: {
        range: '1-99',
        characteristics: ['Quick decisions', 'Agile operations', 'Innovation focus'],
        strengths: ['Fast adaptation', 'Low overhead', 'Nimble management'],
        challenges: ['Limited resources', 'Growth constraints', 'Market positioning'],
        industries: ['Startups', 'Consulting', 'Creative services', 'Digital businesses'],
        timing: 'Ideal for quick launches and rapid iteration',
        luckyNumbers: [1, 3, 5, 7, 9],
        recommendation: 'Focus on agility and quick market entry'
    },
    
    // Medium values (100-399)
    medium: {
        range: '100-399',
        characteristics: ['Balanced growth', 'Steady operations', 'Market stability'],
        strengths: ['Sustainable growth', 'Market presence', 'Resource balance'],
        challenges: ['Competition', 'Scaling decisions', 'Market changes'],
        industries: ['Manufacturing', 'Retail', 'Services', 'Technology', 'Healthcare'],
        timing: 'Good for steady expansion and market development',
        luckyNumbers: [2, 4, 6, 8],
        recommendation: 'Build strong foundations and steady growth strategies'
    },
    
    // High values (400-699)
    high: {
        range: '400-699',
        characteristics: ['Strong presence', 'Market leadership', 'Resource abundance'],
        strengths: ['Market influence', 'Resource capacity', 'Brand recognition'],
        challenges: ['Bureaucracy', 'Innovation speed', 'Competition pressure'],
        industries: ['Finance', 'Real estate', 'Large manufacturing', 'Infrastructure'],
        timing: 'Perfect for major investments and market expansion',
        luckyNumbers: [4, 8, 12, 16],
        recommendation: 'Leverage strength for market dominance and innovation'
    },
    
    // Very high values (700+)
    veryHigh: {
        range: '700+',
        characteristics: ['Market dominance', 'Global reach', 'Industry leadership'],
        strengths: ['Market control', 'Global influence', 'Resource mastery'],
        challenges: ['Regulation', 'Public scrutiny', 'Innovation disruption'],
        industries: ['Multinational corporations', 'Oil & gas', 'Banking', 'Technology giants'],
        timing: 'Ideal for global expansion and industry transformation',
        luckyNumbers: [7, 14, 21, 28],
        recommendation: 'Focus on global leadership and sustainable practices'
    }
};

// Industry-Specific Analysis
const INDUSTRY_ANALYSIS = {
    'technology': {
        favorableElements: ['Air', 'Fire'],
        favorableNumbers: [3, 5, 8, 9],
        luckyDays: ['Wednesday', 'Thursday'],
        characteristics: 'Innovation, communication, rapid change',
        successFactors: ['Agility', 'Innovation', 'Market timing'],
        nameGuidance: 'Choose names with Air/Fire elements for innovation energy'
    },
    
    'finance': {
        favorableElements: ['Earth', 'Water'],
        favorableNumbers: [2, 4, 6, 8],
        luckyDays: ['Monday', 'Friday', 'Saturday'],
        characteristics: 'Stability, trust, long-term growth',
        successFactors: ['Reliability', 'Trust', 'Steady growth'],
        nameGuidance: 'Choose names with Earth/Water elements for stability'
    },
    
    'retail': {
        favorableElements: ['Air', 'Earth'],
        favorableNumbers: [2, 3, 6, 9],
        luckyDays: ['Friday', 'Saturday', 'Sunday'],
        characteristics: 'Customer service, accessibility, variety',
        successFactors: ['Customer focus', 'Location', 'Service quality'],
        nameGuidance: 'Balance communication (Air) with stability (Earth)'
    },
    
    'manufacturing': {
        favorableElements: ['Earth', 'Fire'],
        favorableNumbers: [4, 6, 8],
        luckyDays: ['Tuesday', 'Saturday'],
        characteristics: 'Production, quality, efficiency',
        successFactors: ['Quality', 'Efficiency', 'Reliability'],
        nameGuidance: 'Strong Earth element for stability, Fire for production energy'
    },
    
    'healthcare': {
        favorableElements: ['Water', 'Earth'],
        favorableNumbers: [2, 6, 9],
        luckyDays: ['Monday', 'Thursday'],
        characteristics: 'Healing, care, service to humanity',
        successFactors: ['Trust', 'Expertise', 'Compassion'],
        nameGuidance: 'Water element for healing, Earth for reliability'
    },
    
    'education': {
        favorableElements: ['Air', 'Water'],
        favorableNumbers: [3, 5, 7, 9],
        luckyDays: ['Wednesday', 'Thursday'],
        characteristics: 'Knowledge, growth, enlightenment',
        successFactors: ['Expertise', 'Innovation', 'Student success'],
        nameGuidance: 'Air for communication, Water for wisdom and flow'
    },
    
    'construction': {
        favorableElements: ['Earth'],
        favorableNumbers: [4, 8],
        luckyDays: ['Saturday'],
        characteristics: 'Building, stability, long-term projects',
        successFactors: ['Quality', 'Reliability', 'Project management'],
        nameGuidance: 'Strong Earth element for stability and foundation'
    },
    
    'hospitality': {
        favorableElements: ['Water', 'Air'],
        favorableNumbers: [2, 3, 6],
        luckyDays: ['Friday', 'Sunday'],
        characteristics: 'Service, comfort, experience',
        successFactors: ['Service quality', 'Customer experience', 'Location'],
        nameGuidance: 'Water for hospitality, Air for communication'
    }
};

// Success Timing Recommendations
const BUSINESS_TIMING = {
    // Best days for business activities by digit root
    1: {
        launchDay: 'Sunday',
        meetingDays: ['Sunday', 'Tuesday'],
        contractDays: ['Sunday'],
        avoidDays: ['Saturday'],
        monthlyBest: [1, 10, 19, 28],
        yearlyBest: 'Years ending in 1, 3, 5, 7, 9',
        islamicCalendar: 'Start on 1st of Muharram or Rajab'
    },
    
    2: {
        launchDay: 'Monday',
        meetingDays: ['Monday', 'Friday'],
        contractDays: ['Monday', 'Friday'],
        avoidDays: ['Tuesday', 'Sunday'],
        monthlyBest: [2, 11, 20, 29],
        yearlyBest: 'Years ending in 2, 4, 6, 8',
        islamicCalendar: 'Start on 2nd of Safar or Sha\'ban'
    },
    
    3: {
        launchDay: 'Thursday',
        meetingDays: ['Wednesday', 'Thursday'],
        contractDays: ['Thursday'],
        avoidDays: ['Saturday'],
        monthlyBest: [3, 12, 21, 30],
        yearlyBest: 'Years ending in 3, 6, 9',
        islamicCalendar: 'Start on 3rd of Rabi\' al-Awwal'
    },
    
    4: {
        launchDay: 'Saturday',
        meetingDays: ['Saturday', 'Wednesday'],
        contractDays: ['Saturday'],
        avoidDays: ['Sunday', 'Tuesday'],
        monthlyBest: [4, 13, 22, 31],
        yearlyBest: 'Years ending in 4, 8',
        islamicCalendar: 'Start on 4th of Rabi\' al-Thani'
    },
    
    5: {
        launchDay: 'Wednesday',
        meetingDays: ['Wednesday', 'Friday'],
        contractDays: ['Wednesday'],
        avoidDays: ['Saturday'],
        monthlyBest: [5, 14, 23],
        yearlyBest: 'Years ending in 5',
        islamicCalendar: 'Start on 5th of Jumada al-Awwal'
    },
    
    6: {
        launchDay: 'Friday',
        meetingDays: ['Friday', 'Monday'],
        contractDays: ['Friday'],
        avoidDays: ['Tuesday', 'Saturday'],
        monthlyBest: [6, 15, 24],
        yearlyBest: 'Years ending in 6',
        islamicCalendar: 'Start on 6th of Jumada al-Thani'
    },
    
    7: {
        launchDay: 'Monday',
        meetingDays: ['Monday', 'Thursday'],
        contractDays: ['Monday'],
        avoidDays: ['Tuesday', 'Sunday'],
        monthlyBest: [7, 16, 25],
        yearlyBest: 'Years ending in 7',
        islamicCalendar: 'Start on 7th of Rajab (blessed month)'
    },
    
    8: {
        launchDay: 'Saturday',
        meetingDays: ['Saturday', 'Tuesday'],
        contractDays: ['Saturday'],
        avoidDays: ['Sunday', 'Monday'],
        monthlyBest: [8, 17, 26],
        yearlyBest: 'Years ending in 8',
        islamicCalendar: 'Start on 8th of Sha\'ban'
    },
    
    9: {
        launchDay: 'Tuesday',
        meetingDays: ['Tuesday', 'Thursday'],
        contractDays: ['Tuesday'],
        avoidDays: ['Saturday', 'Wednesday'],
        monthlyBest: [9, 18, 27],
        yearlyBest: 'Years ending in 9',
        islamicCalendar: 'Start on 9th of Ramadan (blessed)'
    }
};

// Partnership House Analysis for Business
const BUSINESS_PARTNERSHIP_HOUSES = {
    1: {
        businessType: 'Solo ventures or small partnerships',
        recommendation: 'Good for individual expertise businesses',
        challenges: 'May face initial difficulties, plan for steady growth',
        suitableFor: ['Consulting', 'Freelancing', 'Professional services']
    },
    
    2: {
        businessType: 'Trade and commerce',
        recommendation: 'Excellent for businesses involving money flow',
        challenges: 'Ensure ethical practices, may face family business issues',
        suitableFor: ['Import/Export', 'Trading', 'Finance', 'Retail']
    },
    
    3: {
        businessType: 'Avoid business partnerships',
        recommendation: 'Better as sole proprietorship',
        challenges: 'Partnership conflicts, family interference in business',
        suitableFor: ['Individual ventures', 'Creative work', 'Consulting']
    },
    
    4: {
        businessType: 'Excellent for partnerships',
        recommendation: 'Great for legitimate business with good profits',
        challenges: 'Possible relationship issues among partners after 5 years',
        suitableFor: ['Professional partnerships', 'Clean business', 'Service industry']
    },
    
    5: {
        businessType: 'Good for public-facing businesses',
        recommendation: 'Excellent for businesses serving the public',
        challenges: 'May face challenges if serving only private clients',
        suitableFor: ['Public services', 'Government contracts', 'Media', 'Politics']
    },
    
    6: {
        businessType: 'Challenging for business',
        recommendation: 'Avoid major business ventures',
        challenges: 'Potential for losses and misfortune',
        suitableFor: ['Small services', 'Low-risk ventures', 'Charity work']
    },
    
    7: {
        businessType: 'Perfect for all business types',
        recommendation: 'Most favorable for success and harmony',
        challenges: 'None - this is the most blessed combination',
        suitableFor: ['All business types', 'Partnerships', 'Large ventures']
    },
    
    8: {
        businessType: 'Good for knowledge-based business',
        recommendation: 'Excellent for educational and consultancy businesses',
        challenges: 'May struggle in pure commercial ventures',
        suitableFor: ['Education', 'Consulting', 'Research', 'Advisory services']
    },
    
    9: {
        businessType: 'Avoid business partnerships',
        recommendation: 'High risk of failure and losses',
        challenges: 'Potential for complete business failure',
        suitableFor: ['Individual work', 'Employment rather than business']
    }
};

module.exports = {
    BUSINESS_SUCCESS_INDICATORS,
    INDUSTRY_ANALYSIS,
    BUSINESS_TIMING,
    BUSINESS_PARTNERSHIP_HOUSES
};
    };
    
    modules['./advanced_numerology_data.js'] = function(module, exports, require) {
/**
 * Advanced Numerology Data Module - v1.3.0
 * Date integration, birth date analysis, advanced patterns
 */

// Hijri Month Correlations
const HIJRI_MONTHS = {
    1: { name: 'Muharram', arabic: 'محرم', significance: 'Sacred month, new beginnings', element: 'Fire' },
    2: { name: 'Safar', arabic: 'صفر', significance: 'Journey and travel', element: 'Earth' },
    3: { name: 'Rabi al-Awwal', arabic: 'ربيع الأول', significance: 'Prophet\'s birth month', element: 'Air' },
    4: { name: 'Rabi al-Thani', arabic: 'ربيع الثاني', significance: 'Spring continuation', element: 'Water' },
    5: { name: 'Jumada al-Awwal', arabic: 'جمادى الأول', significance: 'Dry season', element: 'Earth' },
    6: { name: 'Jumada al-Thani', arabic: 'جمادى الثاني', significance: 'Continued dryness', element: 'Fire' },
    7: { name: 'Rajab', arabic: 'رجب', significance: 'Sacred month of respect', element: 'Water' },
    8: { name: 'Sha\'ban', arabic: 'شعبان', significance: 'Scattered blessings', element: 'Air' },
    9: { name: 'Ramadan', arabic: 'رمضان', significance: 'Fasting and purification', element: 'Fire' },
    10: { name: 'Shawwal', arabic: 'شوال', significance: 'Elevation and lifting', element: 'Earth' },
    11: { name: 'Dhu al-Qa\'dah', arabic: 'ذو القعدة', significance: 'Sacred month of sitting', element: 'Air' },
    12: { name: 'Dhu al-Hijjah', arabic: 'ذو الحجة', significance: 'Pilgrimage month', element: 'Water' }
};

// Day of Week Significance
const DAY_OF_WEEK_ANALYSIS = {
    0: { // Sunday
        name: 'Sunday',
        arabic: 'الأحد',
        planet: 'Sun',
        element: 'Fire',
        energy: 'Leadership',
        characteristics: ['Authority', 'Leadership', 'New beginnings', 'Success'],
        favorable: ['Starting projects', 'Leadership decisions', 'Public speaking'],
        personality: ['Natural leader', 'Confident', 'Ambitious', 'Influential']
    },
    1: { // Monday
        name: 'Monday',
        arabic: 'الاثنين',
        planet: 'Moon',
        element: 'Water',
        energy: 'Intuition',
        characteristics: ['Intuition', 'Emotions', 'Creativity', 'Sensitivity'],
        favorable: ['Creative work', 'Family matters', 'Healing', 'Spiritual activities'],
        personality: ['Intuitive', 'Caring', 'Artistic', 'Empathetic']
    },
    2: { // Tuesday
        name: 'Tuesday',
        arabic: 'الثلاثاء',
        planet: 'Mars',
        element: 'Fire',
        energy: 'Action',
        characteristics: ['Energy', 'Courage', 'Competition', 'Initiative'],
        favorable: ['Physical activities', 'Competitions', 'Courage', 'Action'],
        personality: ['Energetic', 'Brave', 'Competitive', 'Direct']
    },
    3: { // Wednesday
        name: 'Wednesday',
        arabic: 'الأربعاء',
        planet: 'Mercury',
        element: 'Air',
        energy: 'Communication',
        characteristics: ['Communication', 'Learning', 'Adaptability', 'Intelligence'],
        favorable: ['Learning', 'Communication', 'Travel', 'Business'],
        personality: ['Intelligent', 'Communicative', 'Adaptable', 'Quick-minded']
    },
    4: { // Thursday
        name: 'Thursday',
        arabic: 'الخميس',
        planet: 'Jupiter',
        element: 'Air',
        energy: 'Expansion',
        characteristics: ['Wisdom', 'Growth', 'Optimism', 'Teaching'],
        favorable: ['Education', 'Religious activities', 'Growth', 'Expansion'],
        personality: ['Wise', 'Optimistic', 'Generous', 'Philosophical']
    },
    5: { // Friday
        name: 'Friday',
        arabic: 'الجمعة',
        planet: 'Venus',
        element: 'Earth',
        energy: 'Harmony',
        characteristics: ['Love', 'Beauty', 'Harmony', 'Relationships'],
        favorable: ['Relationships', 'Art', 'Beauty', 'Social activities'],
        personality: ['Harmonious', 'Artistic', 'Social', 'Loving']
    },
    6: { // Saturday
        name: 'Saturday',
        arabic: 'السبت',
        planet: 'Saturn',
        element: 'Earth',
        energy: 'Structure',
        characteristics: ['Discipline', 'Structure', 'Patience', 'Responsibility'],
        favorable: ['Planning', 'Organization', 'Long-term projects', 'Discipline'],
        personality: ['Disciplined', 'Patient', 'Responsible', 'Methodical']
    }
};

// Birth Date Integration Patterns
const BIRTH_DATE_PATTERNS = {
    // Life path calculations based on birth date + name
    lifePath: {
        1: 'Natural leader, independent, pioneering spirit',
        2: 'Cooperative, diplomatic, seeks harmony and balance',
        3: 'Creative, expressive, optimistic, social',
        4: 'Practical, hardworking, reliable, builds foundations',
        5: 'Freedom-loving, adventurous, versatile, curious',
        6: 'Nurturing, responsible, family-oriented, service',
        7: 'Spiritual, analytical, introspective, seeker',
        8: 'Ambitious, material success, leadership, business',
        9: 'Humanitarian, wise, universal love, completion'
    },
    
    // Destiny number interpretations
    destiny: {
        1: 'Destined to lead and innovate',
        2: 'Destined to bring peace and cooperation',
        3: 'Destined to inspire and create',
        4: 'Destined to build and organize',
        5: 'Destined to explore and liberate',
        6: 'Destined to nurture and heal',
        7: 'Destined to seek truth and wisdom',
        8: 'Destined for material achievement',
        9: 'Destined to serve humanity'
    }
};

// Advanced Pattern Recognition
const ADVANCED_PATTERNS = {
    // Master numbers
    masterNumbers: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    
    // Karmic debt numbers
    karmicDebt: [13, 14, 16, 19],
    
    // Angel numbers
    angelNumbers: [111, 222, 333, 444, 555, 666, 777, 888, 999],
    
    // Perfect numbers
    perfectNumbers: [6, 28, 496, 8128],
    
    // Prime number significance
    primeSignificance: {
        2: 'Duality and partnership',
        3: 'Divine trinity and creativity',
        5: 'Human experience and freedom',
        7: 'Spiritual completion and mysticism',
        11: 'Master intuition and inspiration',
        13: 'Transformation and rebirth',
        17: 'Immortality and eternal life',
        19: 'Completion of a major cycle'
    }
};

// Islamic Date Correlations
const ISLAMIC_DATE_CORRELATIONS = {
    // Special Islamic dates and their significance
    specialDates: {
        '1/1': 'Islamic New Year - New beginnings and fresh starts',
        '12/9': 'Day of Arafah - Forgiveness and spiritual elevation',
        '12/10': 'Eid al-Adha - Sacrifice and devotion',
        '10/1': 'First day of Shawwal - Celebration after achievement',
        '3/12': 'Mawlid an-Nabi - Prophetic blessings and guidance',
        '7/27': 'Laylat al-Miraj - Spiritual ascension and divine connection',
        '9/27': 'Laylat al-Qadr - Night of power and divine decree'
    },
    
    // Sacred months
    sacredMonths: [1, 7, 11, 12], // Muharram, Rajab, Dhu al-Qa'dah, Dhu al-Hijjah
    
    // Blessed days
    blessedDays: {
        monday: 'Prophet was born on Monday',
        thursday: 'Prophet often fasted on Thursday',
        friday: 'Day of congregation and blessings',
        '15th': 'Middle of lunar month, full moon blessings'
    }
};

// Psychological and Behavioral Patterns
const PSYCHOLOGICAL_PATTERNS = {
    // Cognitive patterns based on numerological analysis
    cognitiveStyles: {
        1: 'Linear thinker, decisive, goal-oriented',
        2: 'Collaborative thinker, considers multiple perspectives',
        3: 'Creative thinker, generates innovative ideas',
        4: 'Systematic thinker, methodical approach',
        5: 'Flexible thinker, adapts quickly to change',
        6: 'Caring thinker, considers impact on others',
        7: 'Analytical thinker, deep researcher',
        8: 'Strategic thinker, focuses on outcomes',
        9: 'Holistic thinker, sees big picture'
    },
    
    // Communication styles
    communicationStyles: {
        1: 'Direct, authoritative, confident',
        2: 'Diplomatic, gentle, considerate',
        3: 'Expressive, enthusiastic, inspiring',
        4: 'Clear, practical, detailed',
        5: 'Engaging, versatile, persuasive',
        6: 'Supportive, nurturing, encouraging',
        7: 'Thoughtful, precise, profound',
        8: 'Powerful, commanding, results-focused',
        9: 'Compassionate, inclusive, wise'
    },
    
    // Decision-making patterns
    decisionMaking: {
        1: 'Quick decisions, trusts instincts',
        2: 'Seeks input, weighs options carefully',
        3: 'Creative solutions, optimistic outlook',
        4: 'Methodical analysis, practical choices',
        5: 'Flexible approach, adapts as needed',
        6: 'Considers impact on relationships',
        7: 'Deep analysis, seeks truth',
        8: 'Strategic thinking, long-term planning',
        9: 'Considers greater good, humanitarian impact'
    }
};

// Life Path Patterns (1-9)
const LIFE_PATH_PATTERNS = {
    1: {
        description: 'The Leader - Independent and pioneering',
        strengths: ['Leadership', 'Independence', 'Innovation', 'Courage'],
        challenges: ['Loneliness', 'Aggression', 'Stubbornness', 'Ego'],
        purpose: 'To lead and inspire others through innovation'
    },
    2: {
        description: 'The Peacemaker - Diplomatic and harmonious',
        strengths: ['Cooperation', 'Diplomacy', 'Sensitivity', 'Balance'],
        challenges: ['Indecisiveness', 'Over-sensitivity', 'Shyness', 'Self-doubt'],
        purpose: 'To bring peace and harmony to relationships'
    },
    3: {
        description: 'The Creative - Expressive and optimistic',
        strengths: ['Creativity', 'Communication', 'Optimism', 'Enthusiasm'],
        challenges: ['Scattered energy', 'Superficiality', 'Mood swings', 'Excess'],
        purpose: 'To inspire through creative expression'
    },
    4: {
        description: 'The Builder - Practical and disciplined',
        strengths: ['Organization', 'Discipline', 'Reliability', 'Hard work'],
        challenges: ['Rigidity', 'Over-working', 'Stubbornness', 'Limitation'],
        purpose: 'To build solid foundations and systems'
    },
    5: {
        description: 'The Freedom Seeker - Adventurous and versatile',
        strengths: ['Freedom', 'Adaptability', 'Adventure', 'Versatility'],
        challenges: ['Restlessness', 'Irresponsibility', 'Addiction', 'Inconsistency'],
        purpose: 'To experience freedom and teach through example'
    },
    6: {
        description: 'The Nurturer - Responsible and caring',
        strengths: ['Nurturing', 'Responsibility', 'Harmony', 'Service'],
        challenges: ['Perfectionism', 'Worry', 'Interference', 'Self-sacrifice'],
        purpose: 'To serve and nurture family and community'
    },
    7: {
        description: 'The Seeker - Spiritual and analytical',
        strengths: ['Wisdom', 'Spirituality', 'Analysis', 'Intuition'],
        challenges: ['Isolation', 'Skepticism', 'Coldness', 'Anxiety'],
        purpose: 'To seek truth and share spiritual wisdom'
    },
    8: {
        description: 'The Powerhouse - Ambitious and successful',
        strengths: ['Ambition', 'Authority', 'Success', 'Material mastery'],
        challenges: ['Materialism', 'Workaholism', 'Imbalance', 'Control issues'],
        purpose: 'To achieve material success and empower others'
    },
    9: {
        description: 'The Humanitarian - Compassionate and wise',
        strengths: ['Compassion', 'Wisdom', 'Idealism', 'Global vision'],
        challenges: ['Martyrdom', 'Self-neglect', 'Disconnection', 'Disappointment'],
        purpose: 'To serve humanity with compassion and wisdom'
    }
};

// Personal Year Cycles (1-9)
const PERSONAL_YEAR_CYCLES = {
    1: {
        theme: 'New Beginnings',
        focus: 'Starting fresh, taking initiative, planting seeds',
        opportunities: ['New projects', 'Leadership roles', 'Personal growth', 'Independence'],
        challenges: ['Impatience', 'Isolation', 'Overconfidence'],
        advice: 'Take bold steps and trust your instincts'
    },
    2: {
        theme: 'Cooperation & Patience',
        focus: 'Building relationships, patience, cooperation',
        opportunities: ['Partnerships', 'Collaboration', 'Diplomacy', 'Details'],
        challenges: ['Delays', 'Indecision', 'Dependency'],
        advice: 'Be patient and focus on relationships'
    },
    3: {
        theme: 'Creative Expression',
        focus: 'Self-expression, creativity, communication',
        opportunities: ['Creative projects', 'Social activities', 'Communication', 'Joy'],
        challenges: ['Scattered energy', 'Superficiality', 'Over-spending'],
        advice: 'Express yourself creatively and enjoy life'
    },
    4: {
        theme: 'Hard Work & Foundation',
        focus: 'Building foundations, discipline, organization',
        opportunities: ['Career building', 'Organization', 'Stability', 'Health'],
        challenges: ['Overwork', 'Limitation', 'Frustration'],
        advice: 'Work hard and build solid foundations'
    },
    5: {
        theme: 'Change & Freedom',
        focus: 'Change, freedom, adventure, expansion',
        opportunities: ['Travel', 'New experiences', 'Freedom', 'Learning'],
        challenges: ['Instability', 'Restlessness', 'Excess'],
        advice: 'Embrace change and seek new experiences'
    },
    6: {
        theme: 'Responsibility & Service',
        focus: 'Family, home, responsibility, service',
        opportunities: ['Family harmony', 'Home improvements', 'Service', 'Healing'],
        challenges: ['Burden', 'Perfectionism', 'Interference'],
        advice: 'Take responsibility and serve with love'
    },
    7: {
        theme: 'Spiritual Growth',
        focus: 'Inner development, spirituality, introspection',
        opportunities: ['Spiritual growth', 'Study', 'Solitude', 'Wisdom'],
        challenges: ['Isolation', 'Doubt', 'Confusion'],
        advice: 'Look within and develop spiritually'
    },
    8: {
        theme: 'Power & Achievement',
        focus: 'Material success, power, achievement',
        opportunities: ['Career advancement', 'Financial gain', 'Recognition', 'Authority'],
        challenges: ['Materialism', 'Stress', 'Imbalance'],
        advice: 'Focus on material goals with integrity'
    },
    9: {
        theme: 'Completion & Letting Go',
        focus: 'Endings, completion, humanitarianism',
        opportunities: ['Completion', 'Forgiveness', 'Service', 'Transformation'],
        challenges: ['Loss', 'Sadness', 'Confusion'],
        advice: 'Let go of the old and serve others'
    }
};

// Master Numbers (11, 22, 33, 44)
const MASTER_NUMBERS = {
    11: {
        meaning: 'The Illuminator - Master Intuitive',
        purpose: 'Spiritual messenger and teacher',
        vibration: 'High spiritual awareness and intuition',
        challenges: 'Nervous tension, impracticality, fanaticism',
        gifts: 'Intuition, inspiration, spiritual insight, illumination'
    },
    22: {
        meaning: 'The Master Builder - Practical Visionary',
        purpose: 'Building dreams into reality',
        vibration: 'Master of material world',
        challenges: 'Inner turmoil, self-sabotage, nervous tension',
        gifts: 'Practical idealism, master builder, large-scale achievement'
    },
    33: {
        meaning: 'The Master Teacher - Compassionate Healer',
        purpose: 'Selfless service and healing',
        vibration: 'Master of compassion',
        challenges: 'Martyrdom, emotional overwhelm, self-sacrifice',
        gifts: 'Universal love, healing, teaching, nurturing'
    },
    44: {
        meaning: 'The Master Healer - Material Mastery',
        purpose: 'Healing the material world',
        vibration: 'Rare master number of material mastery',
        challenges: 'Overwhelming responsibility, materialization difficulty',
        gifts: 'Discipline, efficiency, large-scale healing, material mastery'
    }
};

// Karmic Debt Numbers (13, 14, 16, 19)
const KARMIC_NUMBERS = {
    13: {
        lesson: 'Hard work and discipline',
        challenge: 'Laziness and taking shortcuts in past life',
        redemption: 'Focus through effort, discipline, and hard work',
        gift: 'Once overcome, brings great success through effort'
    },
    14: {
        lesson: 'Freedom through moderation',
        challenge: 'Abuse of freedom in past life',
        redemption: 'Practice moderation in all things',
        gift: 'True freedom through self-control and balance'
    },
    16: {
        lesson: 'Spiritual rebirth through humility',
        challenge: 'Ego and misuse of power in past life',
        redemption: 'Develop humility and spiritual understanding',
        gift: 'Spiritual awakening and true wisdom'
    },
    19: {
        lesson: 'Independence through service',
        challenge: 'Misuse of power and selfishness in past life',
        redemption: 'Learn to serve others while maintaining independence',
        gift: 'Leadership through compassionate service'
    }
};

module.exports = {
    HIJRI_MONTHS,
    DAY_OF_WEEK_ANALYSIS,
    BIRTH_DATE_PATTERNS,
    ADVANCED_PATTERNS,
    ISLAMIC_DATE_CORRELATIONS,
    PSYCHOLOGICAL_PATTERNS,
    LIFE_PATH_PATTERNS,
    PERSONAL_YEAR_CYCLES,
    MASTER_NUMBERS,
    KARMIC_NUMBERS
};
    };
    
    // Register main library
    modules['./index.js'] = function(module, exports, require) {
/**
 * Hisaab - Arabic Name Value Calculator using Abjad System
 * Enhanced with Islamic features including 99 Names of Allah analysis
 * 
 * The Abjad system assigns numerical values to Arabic letters:
 * ا=1, ب=2, ج=3, د=4, ه=5, و=6, ز=7, ح=8, ط=9, ي=10,
 * ك=20, ل=30, م=40, ن=50, س=60, ع=70, ف=80, ص=90, ق=100,
 * ر=200, ش=300, ت=400, ث=500, خ=600, ذ=700, ض=800, ظ=900, غ=1000
 */

const { ASMA_UL_HUSNA, QURANIC_CONNECTIONS } = require('./islamic_data.js');
const { LUNAR_MANSIONS } = require('./lunar_mansions_data.js');
const { PRAYER_TIME_CORRELATIONS, EXTENDED_QURANIC_CONNECTIONS, PROPHETIC_NAMES, CULTURAL_CONTEXTS } = require('./enhanced_islamic_data.js');
const { BUSINESS_SUCCESS_INDICATORS, INDUSTRY_ANALYSIS, BUSINESS_TIMING, BUSINESS_PARTNERSHIP_HOUSES } = require('./business_analysis_data.js');
const { LIFE_PATH_PATTERNS, PERSONAL_YEAR_CYCLES, KARMIC_NUMBERS, MASTER_NUMBERS } = require('./advanced_numerology_data.js');

class Hisaab {
    constructor(arabicName) {
        if (!arabicName || typeof arabicName !== 'string') {
            throw new Error('Arabic name must be provided as a string');
        }

        // Abjad letter-to-value mapping
        this.abjadMap = {
            'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1,  // Alif variants
            'ب': 2,   // Ba
            'ج': 3,   // Jim
            'د': 4,   // Dal
            'ه': 5,   // Ha
            'ة': 5,   // Ta Marbuta
            'و': 6,   // Waw
            'ز': 7,   // Zay
            'ح': 8,   // Ha (different from ه)
            'ط': 9,   // Ta
            'ي': 10, 'ى': 10, 'ئ': 10, 'ؤ': 10,  // Ya variants
            'ك': 20,  // Kaf
            'ل': 30,  // Lam
            'م': 40,  // Mim
            'ن': 50,  // Nun
            'س': 60,  // Sin
            'ع': 70,  // Ain
            'ف': 80,  // Fa
            'ص': 90,  // Sad
            'ق': 100, // Qaf
            'ر': 200, // Ra
            'ش': 300, // Shin
            'ت': 400, // Ta
            'ث': 500, // Tha
            'خ': 600, // Kha
            'ذ': 700, // Dhal
            'ض': 800, // Dad
            'ظ': 900, // Zha
            'غ': 1000 // Ghayn
        };

        this.name = arabicName.trim();
        this.value = this.calculateValue();
    }

    /**
     * Calculate the Abjad value of the Arabic name
     * @returns {number} The total numerical value
     */
    calculateValue() {
        let totalValue = 0;
        
        for (let i = 0; i < this.name.length; i++) {
            const letter = this.name[i];
            const letterValue = this.abjadMap[letter];
            
            if (letterValue !== undefined) {
                totalValue += letterValue;
            }
            // Ignore non-Arabic characters and diacritics
        }
        
        return totalValue;
    }

    /**
     * Get the stored name
     * @returns {string} The Arabic name
     */
    getName() {
        return this.name;
    }

    /**
     * Get the calculated value
     * @returns {number} The Abjad value
     */
    getValue() {
        return this.value;
    }

    /**
     * Get detailed breakdown of each letter's value
     * @returns {Array} Array of objects with letter and value
     */
    getBreakdown() {
        const breakdown = [];
        
        for (let i = 0; i < this.name.length; i++) {
            const letter = this.name[i];
            const letterValue = this.abjadMap[letter];
            
            if (letterValue !== undefined) {
                breakdown.push({
                    letter: letter,
                    value: letterValue
                });
            }
        }
        
        return breakdown;
    }

    /**
     * Calculate the digit root (repeated sum until single digit)
     * @returns {number} The digit root of the Abjad value
     */
    getDigitRoot() {
        let sum = this.value;
        while (sum >= 10) {
            sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return sum;
    }

    /**
     * Get numerological properties
     * @returns {Object} Object with various numerological interpretations
     */
    getNumerology() {
        const digitRoot = this.getDigitRoot();
        const isEven = this.value % 2 === 0;
        const isPrime = this.isPrime(this.value);
        
        return {
            value: this.value,
            digitRoot: digitRoot,
            isEven: isEven,
            isOdd: !isEven,
            isPrime: isPrime,
            digitSum: this.getDigitSum(),
            category: this.getNumerologicalCategory(digitRoot)
        };
    }

    /**
     * Get sum of all digits in the value
     * @returns {number} Sum of digits
     */
    getDigitSum() {
        return this.value.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    /**
     * Check if a number is prime
     * @param {number} num - Number to check
     * @returns {boolean} True if prime
     */
    isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    /**
     * Get numerological category based on digit root
     * @param {number} digitRoot - The digit root
     * @returns {string} Category description
     */
    getNumerologicalCategory(digitRoot) {
        const categories = {
            1: 'Leadership & Independence',
            2: 'Cooperation & Balance', 
            3: 'Creativity & Communication',
            4: 'Stability & Hard Work',
            5: 'Freedom & Adventure',
            6: 'Nurturing & Responsibility',
            7: 'Spirituality & Analysis',
            8: 'Material Success & Power',
            9: 'Universal Love & Completion'
        };
        return categories[digitRoot] || 'Unknown';
    }

    /**
     * Western compatibility analysis
     * @param {string|Hisaab} otherName - Another Arabic name or Hisaab instance
     * @returns {Object} Western compatibility analysis
     */
    getWesternCompatibility(otherName) {
        const other = typeof otherName === 'string' ? new Hisaab(otherName) : otherName;
        
        const thisDigitRoot = this.getDigitRoot();
        const otherDigitRoot = other.getDigitRoot();
        const difference = Math.abs(this.value - other.value);
        const ratio = this.value / other.value;
        
        // Simple compatibility rules
        let compatibilityScore = 0;
        if (thisDigitRoot === otherDigitRoot) compatibilityScore += 30;
        if (Math.abs(thisDigitRoot - otherDigitRoot) <= 2) compatibilityScore += 20;
        if (this.value % 10 === other.value % 10) compatibilityScore += 15;
        if (difference <= 50) compatibilityScore += 10;
        if (ratio >= 0.8 && ratio <= 1.2) compatibilityScore += 15;
        if (this.getNumerology().isEven === other.getNumerology().isEven) compatibilityScore += 10;
        
        return {
            system: 'Western (Pythagorean Numerology)',
            name1: this.name,
            name2: other.name,
            value1: this.value,
            value2: other.value,
            digitRoot1: thisDigitRoot,
            digitRoot2: otherDigitRoot,
            difference: difference,
            compatibilityScore: Math.min(compatibilityScore, 100),
            compatibility: this.getWesternCompatibilityLevel(Math.min(compatibilityScore, 100))
        };
    }

    /**
     * Arabic compatibility analysis - حساب الشريك (Partner Calculation)
     * @param {string|Hisaab} otherName - Another Arabic name or Hisaab instance
     * @returns {Object} Arabic compatibility analysis
     */
    getArabicCompatibility(otherName) {
        const other = typeof otherName === 'string' ? new Hisaab(otherName) : otherName;
        
        const thisDigitRoot = this.getDigitRoot();
        const otherDigitRoot = other.getDigitRoot();
        
        // حساب الشريك calculation: root1 + root2 + 7, then get digit root
        const partnerSum = thisDigitRoot + otherDigitRoot + 7;
        const partnerHouse = this.calculateDigitRoot(partnerSum);
        
        // Arabic interpretations for each house
        const arabicInterpretations = {
            1: {
                rating: '6/10',
                quality: 'Bad',
                arabic: 'سيء',
                description: 'There will be hardships in the relationship after marriage which at beginning starts good',
                details: 'Starts well but faces challenges later'
            },
            2: {
                rating: '6/10', 
                quality: 'Good',
                arabic: 'جيد',
                description: 'There will be wealth pumping, but the money could be not clean, but the relationship could be hard to the woman where she may face issues with her relatives',
                details: 'Wealth with complications, woman may face family issues'
            },
            3: {
                rating: '7/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'They will both face difficulties, the man will face issues with the girl\'s parents and relatives, he may gain wealth but after the dismiss of his parents',
                details: 'Family conflicts, wealth after loss'
            },
            4: {
                rating: '7/10',
                quality: 'Very Good',
                arabic: 'جيد جداً', 
                description: 'Good wealth and clean money, but not much as 2, but the girl will face hardship with the boy after marriage, they may divorce in 5 years',
                details: 'Clean wealth but relationship challenges, possible divorce'
            },
            5: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                description: 'Good for people such as politicians, where they gain fame, but bad for poor people, but there would be so many children',
                details: 'Good for politicians/famous people, many children'
            },
            6: {
                rating: '9/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'Mis-fortune and hardships, could lose job too, but could live together with no quarrels',
                details: 'Misfortune but peaceful coexistence'
            },
            7: {
                rating: '10/10',
                quality: 'Very Good',
                arabic: 'ممتاز',
                description: 'Healthy life and understanding with balance, no hardships, they will live in peace',
                details: 'Most wanted house - perfect harmony and peace'
            },
            8: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                description: 'Good for scholars, royals and people that serves knowledge and mankind, but bad for business men and hardships, loss of food for them. but strength for scholars and people having relations with royals and politicians',
                details: 'Excellent for scholars/royals, bad for business'
            },
            9: {
                rating: '10/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'Losing health and wealth even before marriage, mis fourtunes, and worst nightmeres, it takes time and struggle before marriage, and at last it brakes',
                details: 'Worst case - loss before marriage, ultimate breakup'
            }
        };
        
        const interpretation = arabicInterpretations[partnerHouse];
        
        return {
            system: 'Arabic (حساب الشريك - Partner Calculation)',
            name1: this.name,
            name2: other.name,
            digitRoot1: thisDigitRoot,
            digitRoot2: otherDigitRoot,
            calculation: `${thisDigitRoot} + ${otherDigitRoot} + 7 = ${partnerSum} → ${partnerHouse}`,
            partnerHouse: partnerHouse,
            houseSignificance: 'The house of relation between two people (marriage or business)',
            interpretation: interpretation
        };
    }

    /**
     * Calculate digit root for any number
     * @param {number} num - Number to reduce
     * @returns {number} Digit root
     */
    calculateDigitRoot(num) {
        while (num >= 10) {
            num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return num;
    }

    /**
     * Get Arabic compatibility interpretation for a specific house
     * @param {number} house - House number (1-9)
     * @returns {Object} House interpretation
     */
    getArabicCompatibilityInterpretation(house) {
        const interpretations = {
            1: {
                rating: '6/10',
                quality: 'Bad',
                arabic: 'سيء',
                description: 'There will be hardships in the relationship after marriage which at beginning starts good',
                details: 'Starts well but faces challenges later'
            },
            2: {
                rating: '6/10', 
                quality: 'Good',
                arabic: 'جيد',
                description: 'There will be wealth pumping, but the money could be not clean, but the relationship could be hard to the woman where she may face issues with her relatives',
                details: 'Wealth with complications, woman may face family issues'
            },
            3: {
                rating: '7/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'They will both face difficulties, the man will face issues with the girl\'s parents and relatives, he may gain wealth but after the dismiss of his parents',
                details: 'Family conflicts, wealth after loss'
            },
            4: {
                rating: '7/10',
                quality: 'Very Good',
                arabic: 'جيد جداً', 
                description: 'Good wealth and clean money, but not much as 2, but the girl will face hardship with the boy after marriage, they may divorce in 5 years',
                details: 'Clean wealth but relationship challenges, possible divorce'
            },
            5: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                description: 'Good for people such as politicians, where they gain fame, but bad for poor people, but there would be so many children',
                details: 'Good for politicians/famous people, many children'
            },
            6: {
                rating: '9/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'Mis-fortune and hardships, could lose job too, but could live together with no quarrels',
                details: 'Misfortune but peaceful coexistence'
            },
            7: {
                rating: '10/10',
                quality: 'Very Good',
                arabic: 'ممتاز',
                description: 'Healthy life and understanding with balance, no hardships, they will live in peace',
                details: 'Most wanted house - perfect harmony and peace'
            },
            8: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                description: 'Good for scholars, royals and people that serves knowledge and mankind, but bad for business men and hardships, loss of food for them. but strength for scholars and people having relations with royals and politicians',
                details: 'Excellent for scholars/royals, bad for business'
            },
            9: {
                rating: '10/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                description: 'Losing health and wealth even before marriage, mis fourtunes, and worst nightmeres, it takes time and struggle before marriage, and at last it brakes',
                details: 'Worst case - loss before marriage, ultimate breakup'
            }
        };
        
        return interpretations[house] || interpretations[1];
    }

    /**
     * Compare compatibility with another name (both systems)
     * @param {string|Hisaab} otherName - Another Arabic name or Hisaab instance
     * @returns {Object} Complete compatibility analysis
     */
    compareWith(otherName) {
        return {
            western: this.getWesternCompatibility(otherName),
            arabic: this.getArabicCompatibility(otherName)
        };
    }

    /**
     * Get Western compatibility level description
     * @param {number} score - Compatibility score
     * @returns {string} Compatibility description
     */
    getWesternCompatibilityLevel(score) {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Very Good';
        if (score >= 40) return 'Good';
        if (score >= 20) return 'Fair';
        return 'Poor';
    }


    /**
     * Get lucky numbers based on the name value
     * @returns {Array} Array of lucky numbers
     */
    getLuckyNumbers() {
        const base = this.value;
        const digitRoot = this.getDigitRoot();
        
        return [
            digitRoot,
            base % 100,
            (base * 2) % 100,
            (base + digitRoot) % 100,
            Math.floor(base / 10) % 100
        ].filter((num, index, arr) => arr.indexOf(num) === index).sort((a, b) => a - b);
    }

    /**
     * Get a formatted string representation
     * @returns {string} Formatted string with name and value
     */
    toString() {
        return `${this.name} = ${this.value}`;
    }

    /**
     * Get detailed analysis as formatted string
     * @returns {string} Complete analysis
     */
    getDetailedAnalysis() {
        const numerology = this.getNumerology();
        const breakdown = this.getBreakdown();
        const luckyNumbers = this.getLuckyNumbers();
        
        let analysis = `=== Analysis for ${this.name} ===\n`;
        analysis += `Total Value: ${this.value}\n`;
        analysis += `Digit Root: ${numerology.digitRoot}\n`;
        analysis += `Category: ${numerology.category}\n`;
        analysis += `Properties: ${numerology.isEven ? 'Even' : 'Odd'}${numerology.isPrime ? ', Prime' : ''}\n`;
        analysis += `Lucky Numbers: ${luckyNumbers.join(', ')}\n\n`;
        analysis += `Letter Breakdown:\n`;
        breakdown.forEach(item => {
            analysis += `  ${item.letter} = ${item.value}\n`;
        });
        
        return analysis;
    }

    /**
     * Static method to calculate value without creating instance
     * @param {string} arabicName - The Arabic name
     * @returns {number} The Abjad value
     */
    static calculate(arabicName) {
        const instance = new Hisaab(arabicName);
        return instance.getValue();
    }

    /**
     * Get name classification with both Western and Arabic systems
     * @returns {Object} Classification information
     */
    getClassification() {
        const value = this.value;
        let strength, energy;
        
        // Strength classification
        if (value < 100) strength = 'Gentle';
        else if (value < 300) strength = 'Moderate'; 
        else if (value < 500) strength = 'Strong';
        else strength = 'Powerful';
        
        // Energy type
        energy = this.value % 2 === 0 ? 'Yin (Receptive)' : 'Yang (Active)';
        
        // Western element classification (based on digit root)
        const digitRoot = this.getDigitRoot();
        const westernElements = {
            1: 'Fire', 2: 'Water', 3: 'Air', 
            4: 'Earth', 5: 'Air', 6: 'Earth',
            7: 'Water', 8: 'Fire', 9: 'Air'
        };
        const westernElement = westernElements[digitRoot];
        
        // Arabic element classification (based on value % 4)
        const arabicAstro = this.getArabicAstrology();
        
        return { 
            strength, 
            energy, 
            range: this.getValueRange(),
            western: {
                element: westernElement,
                basis: 'Digit Root'
            },
            arabic: {
                element: arabicAstro.element.name,
                elementArabic: arabicAstro.element.arabic,
                basis: 'Abjad Value % 4'
            }
        };
    }
    
    /**
     * Get value range category
     * @returns {string} Range description
     */
    getValueRange() {
        const value = this.value;
        if (value < 50) return 'Low (1-49)';
        if (value < 100) return 'Medium-Low (50-99)';
        if (value < 200) return 'Medium (100-199)';
        if (value < 400) return 'Medium-High (200-399)';
        if (value < 700) return 'High (400-699)';
        return 'Very High (700+)';
    }

    /**
     * Get astrological associations (Western system)
     * @returns {Object} Western astrological information
     */
    getWesternAstrology() {
        const digitRoot = this.getDigitRoot();
        
        const planets = {
            1: 'Sun', 2: 'Moon', 3: 'Jupiter',
            4: 'Uranus', 5: 'Mercury', 6: 'Venus',
            7: 'Neptune', 8: 'Saturn', 9: 'Mars'
        };
        
        const colors = {
            1: 'Gold/Orange', 2: 'Silver/White', 3: 'Purple/Violet',
            4: 'Blue/Grey', 5: 'Yellow/Green', 6: 'Pink/Blue',
            7: 'Sea Green/Purple', 8: 'Dark Blue/Black', 9: 'Red/Crimson'
        };
        
        const days = {
            1: 'Sunday', 2: 'Monday', 3: 'Thursday',
            4: 'Sunday', 5: 'Wednesday', 6: 'Friday',
            7: 'Monday', 8: 'Saturday', 9: 'Tuesday'
        };
        
        return {
            system: 'Western (Pythagorean/Chaldean)',
            planet: planets[digitRoot],
            favorableColor: colors[digitRoot],
            favorableDay: days[digitRoot],
            digitRoot: digitRoot
        };
    }

    /**
     * Get Arabic astrological associations (Traditional Islamic/Arabic system)
     * @returns {Object} Arabic astrological information
     */
    getArabicAstrology() {
        const value = this.value;
        
        // Arabic Elements (value % 4)
        const elementIndex = value % 4;
        const elements = ['Fire', 'Earth', 'Air', 'Water']; // 1,2,3,0 -> 0,1,2,3
        const arabicElements = ['النار', 'الأرض', 'الهواء', 'الماء'];
        const element = elements[elementIndex === 0 ? 3 : elementIndex - 1];
        const elementArabic = arabicElements[elementIndex === 0 ? 3 : elementIndex - 1];
        
        // Arabic Planets (value % 7)
        const planetIndex = value % 7;
        const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']; // 1,2,3,4,5,6,0
        const planetsArabic = ['الشمس', 'القمر', 'المريخ', 'عطارد', 'المشتري', 'الزهرة', 'زحل'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const daysArabic = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        const planet = planets[planetIndex === 0 ? 6 : planetIndex - 1];
        const planetArabic = planetsArabic[planetIndex === 0 ? 6 : planetIndex - 1];
        const day = days[planetIndex === 0 ? 6 : planetIndex - 1];
        const dayArabic = daysArabic[planetIndex === 0 ? 6 : planetIndex - 1];
        
        // Arabic Zodiac Signs (value % 12)
        const zodiacIndex = value % 12;
        const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                            'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        const zodiacArabic = ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'السنبلة',
                             'الميزان', 'العقرب', 'القوس', 'الجدي', 'الدلو', 'الحوت'];
        const zodiacSign = zodiacSigns[zodiacIndex === 0 ? 11 : zodiacIndex - 1];
        const zodiacSignArabic = zodiacArabic[zodiacIndex === 0 ? 11 : zodiacIndex - 1];
        
        // Element qualities in Arabic tradition
        const elementQualities = {
            'Fire': { nature: 'Hot & Dry', temperament: 'Choleric', quality: 'Active' },
            'Earth': { nature: 'Cold & Dry', temperament: 'Melancholic', quality: 'Stable' },
            'Air': { nature: 'Hot & Wet', temperament: 'Sanguine', quality: 'Balanced' },
            'Water': { nature: 'Cold & Wet', temperament: 'Phlegmatic', quality: 'Receptive' }
        };
        
        return {
            system: 'Arabic (Traditional Islamic Astrology)',
            element: {
                name: element,
                arabic: elementArabic,
                calculation: `${value} % 4 = ${value % 4} → ${element}`,
                qualities: elementQualities[element]
            },
            planet: {
                name: planet,
                arabic: planetArabic,
                calculation: `${value} % 7 = ${value % 7} → ${planet}`,
                favorableDay: day,
                favorableDayArabic: dayArabic
            },
            zodiac: {
                sign: zodiacSign,
                arabic: zodiacSignArabic,
                calculation: `${value} % 12 = ${value % 12} → ${zodiacSign}`,
                position: zodiacIndex === 0 ? 12 : zodiacIndex
            },
            value: value
        };
    }

    /**
     * Get comprehensive astrological analysis (both systems)
     * @returns {Object} Complete astrological information
     */
    getAstrological() {
        return {
            western: this.getWesternAstrology(),
            arabic: this.getArabicAstrology()
        };
    }

    /**
     * Get personality traits based on numerological analysis
     * @returns {Array} Array of personality traits
     */
    getPersonalityTraits() {
        const digitRoot = this.getDigitRoot();
        const isEven = this.value % 2 === 0;
        
        const traits = {
            1: ['Independent', 'Leader', 'Pioneer', 'Original'],
            2: ['Cooperative', 'Diplomatic', 'Sensitive', 'Peaceful'],
            3: ['Creative', 'Expressive', 'Optimistic', 'Social'],
            4: ['Practical', 'Reliable', 'Hardworking', 'Organized'],
            5: ['Adventurous', 'Freedom-loving', 'Curious', 'Versatile'],
            6: ['Nurturing', 'Responsible', 'Caring', 'Family-oriented'],
            7: ['Analytical', 'Spiritual', 'Intuitive', 'Mysterious'],
            8: ['Ambitious', 'Successful', 'Material-focused', 'Authoritative'],
            9: ['Humanitarian', 'Generous', 'Wise', 'Universal']
        };
        
        let personalityTraits = [...traits[digitRoot]];
        
        // Add traits based on even/odd
        if (isEven) {
            personalityTraits.push('Balanced', 'Stable');
        } else {
            personalityTraits.push('Dynamic', 'Energetic');
        }
        
        return personalityTraits;
    }

    /**
     * Generate a comprehensive name report
     * @returns {Object} Complete name analysis report
     */
    getCompleteReport() {
        return {
            basic: {
                name: this.name,
                value: this.value,
                digitRoot: this.getDigitRoot(),
                digitSum: this.getDigitSum()
            },
            numerology: this.getNumerology(),
            classification: this.getClassification(),
            astrological: this.getAstrological(),
            personality: this.getPersonalityTraits(),
            luckyNumbers: this.getLuckyNumbers(),
            letterBreakdown: this.getBreakdown()
        };
    }

    /**
     * Find names with similar values (within range)
     * @param {Array} nameList - Array of Arabic names to compare
     * @param {number} tolerance - Value tolerance (default: 10)
     * @returns {Array} Similar names with their values
     */
    findSimilarNames(nameList, tolerance = 10) {
        const similar = [];
        
        nameList.forEach(name => {
            try {
                const other = new Hisaab(name);
                const difference = Math.abs(this.value - other.value);
                
                if (difference <= tolerance && name !== this.name) {
                    similar.push({
                        name: name,
                        value: other.value,
                        difference: difference,
                        digitRoot: other.getDigitRoot()
                    });
                }
            } catch (error) {
                // Skip invalid names
            }
        });
        
        return similar.sort((a, b) => a.difference - b.difference);
    }

    // =================== ISLAMIC FEATURES ===================

    /**
     * Check if the name matches any of the 99 Names of Allah
     * @returns {Object|null} Information about the Divine Name if found
     */
    getAsmaUlHusnaMatch() {
        const match = ASMA_UL_HUSNA.find(name => name.arabic === this.name);
        if (match) {
            return {
                ...match,
                numericalValue: this.value,
                digitRoot: this.getDigitRoot(),
                spiritualSignificance: this.getIslamicSpiritual(match)
            };
        }
        return null;
    }

    /**
     * Find Names of Allah with similar numerical values
     * @param {number} tolerance - Value tolerance (default: 20)
     * @returns {Array} Similar Divine Names
     */
    findSimilarAsmaUlHusna(tolerance = 20) {
        const similar = [];
        
        ASMA_UL_HUSNA.forEach(name => {
            const nameHisaab = new Hisaab(name.arabic);
            const difference = Math.abs(this.value - nameHisaab.getValue());
            
            if (difference <= tolerance) {
                similar.push({
                    ...name,
                    numericalValue: nameHisaab.getValue(),
                    difference: difference,
                    digitRoot: nameHisaab.getDigitRoot(),
                    connection: this.getNameConnection(name, difference)
                });
            }
        });
        
        return similar.sort((a, b) => a.difference - b.difference);
    }

    /**
     * Get Quranic connections based on numerical value
     * @returns {Object|null} Quranic verse connection if found
     */
    getQuranicConnection() {
        const connection = QURANIC_CONNECTIONS[this.value];
        if (connection) {
            return {
                ...connection,
                nameValue: this.value,
                name: this.name,
                spiritualMeaning: this.getQuranicSpiritual(connection)
            };
        }
        
        // Check for digit root connections
        const digitRoot = this.getDigitRoot();
        const digitConnection = QURANIC_CONNECTIONS[digitRoot];
        if (digitConnection) {
            return {
                ...digitConnection,
                nameValue: this.value,
                name: this.name,
                connectionType: 'digit_root',
                spiritualMeaning: this.getQuranicSpiritual(digitConnection)
            };
        }
        
        return null;
    }

    /**
     * Get spiritual significance based on Islamic numerology
     * @returns {Object} Islamic spiritual analysis
     */
    getIslamicAnalysis() {
        const asmaMatch = this.getAsmaUlHusnaMatch();
        const quranicConnection = this.getQuranicConnection();
        const similarNames = this.findSimilarAsmaUlHusna();
        
        return {
            name: this.name,
            value: this.value,
            digitRoot: this.getDigitRoot(),
            asmaUlHusnaMatch: asmaMatch,
            quranicConnection: quranicConnection,
            similarDivineNames: similarNames.slice(0, 5), // Top 5 similar
            islamicQualities: this.getIslamicQualities(),
            spiritualGuidance: this.getIslamicGuidance()
        };
    }

    /**
     * Get Islamic qualities based on numerical analysis
     * @returns {Array} Array of Islamic qualities
     */
    getIslamicQualities() {
        const digitRoot = this.getDigitRoot();
        const isEven = this.value % 2 === 0;
        
        const qualities = {
            1: ['Tawhid (Unity)', 'Leadership in Faith', 'Divine Connection'],
            2: ['Balance in Deen', 'Harmony', 'Partnership in Good'],
            3: ['Creative Worship', 'Communication of Faith', 'Community Building'],
            4: ['Steadfast in Prayer', 'Foundation in Faith', 'Discipline'],
            5: ['Spiritual Journey', 'Seeking Knowledge', 'Freedom in Worship'],
            6: ['Family Values', 'Responsibility', 'Care for Ummah'],
            7: ['Spiritual Reflection', 'Deep Faith', 'Mystical Connection'],
            8: ['Success in Halal', 'Material Blessings', 'Worldly Leadership'],
            9: ['Service to Humanity', 'Completion of Faith', 'Universal Brotherhood']
        };
        
        let islamicQualities = [...qualities[digitRoot]];
        
        // Add qualities based on even/odd
        if (isEven) {
            islamicQualities.push('Balanced Character', 'Peaceful Nature');
        } else {
            islamicQualities.push('Active in Worship', 'Dynamic Faith');
        }
        
        return islamicQualities;
    }

    /**
     * Get spiritual guidance based on name analysis
     * @returns {Object} Spiritual guidance and recommendations
     */
    getIslamicGuidance() {
        const digitRoot = this.getDigitRoot();
        const asmaMatch = this.getAsmaUlHusnaMatch();
        
        const guidance = {
            1: {
                dhikr: 'لا إله إلا الله (La ilaha illa Allah)',
                prayer: 'Focus on Tawhid and unity with Allah',
                action: 'Lead others to righteousness'
            },
            2: {
                dhikr: 'الرحمن الرحيم (Ar-Rahman Ar-Raheem)',
                prayer: 'Seek balance in all aspects of life',
                action: 'Be a peacemaker in your community'
            },
            3: {
                dhikr: 'سبحان الله (Subhan Allah)',
                prayer: 'Express gratitude through creative worship',
                action: 'Share Islamic knowledge with others'
            },
            4: {
                dhikr: 'الله أكبر (Allahu Akbar)',
                prayer: 'Maintain discipline in worship',
                action: 'Build strong foundations in faith'
            },
            5: {
                dhikr: 'استغفر الله (Astaghfir Allah)',
                prayer: 'Seek spiritual growth and knowledge',
                action: 'Embark on spiritual journeys'
            },
            6: {
                dhikr: 'الحمد لله (Alhamdulillah)',
                prayer: 'Strengthen family and community bonds',
                action: 'Care for those in need'
            },
            7: {
                dhikr: 'حسبنا الله ونعم الوكيل (Hasbuna Allah wa ni\'mal wakeel)',
                prayer: 'Deepen spiritual reflection and meditation',
                action: 'Seek divine wisdom in all matters'
            },
            8: {
                dhikr: 'ما شاء الله (Ma sha Allah)',
                prayer: 'Use worldly success for Allah\'s cause',
                action: 'Be generous with your blessings'
            },
            9: {
                dhikr: 'لا حول ولا قوة إلا بالله (La hawla wa la quwwata illa billah)',
                prayer: 'Serve humanity with compassion',
                action: 'Complete your spiritual journey'
            }
        };
        
        let result = guidance[digitRoot];
        
        // Add specific guidance if name matches Asma ul-Husna
        if (asmaMatch) {
            result.divineConnection = `Your name reflects the attribute: ${asmaMatch.meaning}`;
            result.specialDhikr = `Recite ${asmaMatch.arabic} regularly`;
        }
        
        return result;
    }

    /**
     * Get spiritual significance for Asma ul-Husna match
     * @param {Object} match - The matched Divine Name
     * @returns {string} Spiritual significance
     */
    getIslamicSpiritual(match) {
        return `Carrying the name ${match.arabic} (${match.meaning}) connects you to the Divine attribute of ${match.attribute}. This is a blessed name that carries great spiritual significance.`;
    }

    /**
     * Get spiritual meaning for Quranic connection
     * @param {Object} connection - The Quranic connection
     * @returns {string} Spiritual meaning
     */
    getQuranicSpiritual(connection) {
        return `Your name's numerical value connects to the Quranic verse: "${connection.translation}" which represents ${connection.significance}.`;
    }

    /**
     * Get name connection significance
     * @param {Object} divineName - Divine name object
     * @param {number} difference - Numerical difference
     * @returns {string} Connection significance
     */
    getNameConnection(divineName, difference) {
        if (difference === 0) {
            return `Exact match - your name shares the same numerical value as ${divineName.meaning}`;
        } else if (difference <= 5) {
            return `Very strong connection to ${divineName.meaning}`;
        } else if (difference <= 15) {
            return `Strong resonance with ${divineName.meaning}`;
        } else {
            return `Gentle connection to ${divineName.meaning}`;
        }
    }

    // =================== v1.2.0 NEW FEATURES ===================

    /**
     * Get the lunar mansion (منزل القمر) for this name
     * @returns {Object} Lunar mansion information
     */
    getLunarMansion() {
        const mansionNumber = (this.value % 28) || 28; // 1-28, not 0-27
        const mansion = LUNAR_MANSIONS.find(m => m.number === mansionNumber);
        
        if (!mansion) {
            throw new Error(`Lunar mansion ${mansionNumber} not found`);
        }

        return {
            ...mansion,
            nameValue: this.value,
            name: this.name,
            calculation: `${this.value} % 28 = ${this.value % 28} → Mansion ${mansionNumber}`,
            personalizedInsight: this.getLunarMansionPersonalizedInsight(mansion),
            compatibleActivities: this.getLunarMansionActivities(mansion),
            spiritualGuidance: this.getLunarMansionSpiritualGuidance(mansion)
        };
    }

    /**
     * Get personalized insight based on lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {string} Personalized insight
     */
    getLunarMansionPersonalizedInsight(mansion) {
        const insights = {
            1: `Your name ${this.name} carries the energy of new beginnings and leadership. Like الشرطان, you are meant to pioneer new paths.`,
            2: `The name ${this.name} embodies patience and endurance. البطين teaches you the value of steady, consistent progress.`,
            3: `${this.name} resonates with abundance and prosperity. الثريا blesses you with the energy of collective success.`,
            4: `Your name ${this.name} reflects loyalty and devotion. الدبران guides you to be faithful in all relationships.`,
            5: `${this.name} carries the light of clarity and wisdom. الهقعة illuminates your path to understanding.`,
            6: `The name ${this.name} helps you establish unique identity. الهنعة marks you as distinctive and memorable.`,
            7: `${this.name} gives you the power to extend your influence. الذراع enables you to reach your highest goals.`,
            8: `Your name ${this.name} embodies precision and focus. النثرة sharpens your ability to hit your targets.`,
            9: `${this.name} grants quick perception and insight. الطرف blesses you with rapid understanding.`,
            10: `The name ${this.name} carries dignity and honor. الجبهة elevates you to positions of respect.`,
            11: `${this.name} embodies strength and majesty. الزبرة gives you the power to lead with authority.`,
            12: `Your name ${this.name} facilitates change and growth. الصرفة guides you through life's transitions.`,
            13: `${this.name} enhances your communication abilities. العواء amplifies your voice and expression.`,
            14: `The name ${this.name} brings peaceful achievement. السماك helps you succeed through skillful means.`,
            15: `${this.name} offers protection and forgiveness. الغفر covers you with divine mercy.`,
            16: `Your name ${this.name} embodies justice and balance. الزبانى helps you restore harmony.`,
            17: `${this.name} carries the energy of honor and achievement. الإكليل crowns your efforts with success.`,
            18: `The name ${this.name} centers on emotion and passion. القلب connects you to matters of the heart.`,
            19: `${this.name} provides defense and protection. الشولة warns you of dangers and keeps you safe.`,
            20: `Your name ${this.name} grants speed and agility. النعائم accelerates your progress.`,
            21: `${this.name} builds community and civilization. البلدة connects you to social progress.`,
            22: `The name ${this.name} teaches sacrifice for transformation. سعد الذابح brings growth through dedication.`,
            23: `${this.name} helps you accept and integrate experiences. سعد بلع expands your understanding.`,
            24: `Your name ${this.name} is blessed with ultimate fortune! سعد السعود brings the highest luck.`,
            25: `${this.name} provides shelter and security. سعد الأخبية protects your home and family.`,
            26: `The name ${this.name} initiates fresh beginnings. فرغ المقدم starts new chapters in your life.`,
            27: `${this.name} brings completion and fulfillment. فرغ المؤخر helps you achieve your goals.`,
            28: `Your name ${this.name} creates vital connections. الرشا links you to important relationships.`
        };

        return insights[mansion.number] || `Your name ${this.name} carries the special energy of mansion ${mansion.number}.`;
    }

    /**
     * Get activities compatible with lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {Object} Compatible and incompatible activities
     */
    getLunarMansionActivities(mansion) {
        return {
            favorable: mansion.favorable || [],
            unfavorable: mansion.unfavorable || [],
            bestTimes: this.getLunarMansionBestTimes(mansion),
            recommendations: this.getLunarMansionRecommendations(mansion)
        };
    }

    /**
     * Get best times for lunar mansion activities
     * @param {Object} mansion - The lunar mansion data
     * @returns {Array} Best timing recommendations
     */
    getLunarMansionBestTimes(mansion) {
        const timingMap = {
            Fire: ['Sunrise', 'Midday', 'Tuesday', 'Sunday'],
            Earth: ['Dawn', 'Evening', 'Saturday', 'Friday'],
            Air: ['Morning', 'Afternoon', 'Wednesday', 'Thursday'],
            Water: ['Sunset', 'Night', 'Monday', 'Thursday']
        };

        return timingMap[mansion.element] || ['Anytime'];
    }

    /**
     * Get recommendations based on lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {Array} Personalized recommendations
     */
    getLunarMansionRecommendations(mansion) {
        const recommendations = [];

        // Element-based recommendations
        if (mansion.element === 'Fire') {
            recommendations.push('Take bold action and lead initiatives');
            recommendations.push('Channel your energy into creative projects');
        } else if (mansion.element === 'Water') {
            recommendations.push('Trust your intuition and emotional wisdom');
            recommendations.push('Focus on healing and nurturing activities');
        } else if (mansion.element === 'Air') {
            recommendations.push('Enhance communication and learning');
            recommendations.push('Network and build social connections');
        } else if (mansion.element === 'Earth') {
            recommendations.push('Build solid foundations and practical skills');
            recommendations.push('Focus on stability and long-term planning');
        }

        // Personality-based recommendations
        if (mansion.personality) {
            mansion.personality.forEach(trait => {
                if (trait === 'Leader') {
                    recommendations.push('Step into leadership roles with confidence');
                } else if (trait === 'Patient') {
                    recommendations.push('Practice patience and persistence');
                } else if (trait === 'Social') {
                    recommendations.push('Engage in community and group activities');
                }
            });
        }

        return recommendations.slice(0, 5); // Return top 5 recommendations
    }

    /**
     * Get spiritual guidance based on lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {Object} Spiritual guidance and practices
     */
    getLunarMansionSpiritualGuidance(mansion) {
        const guidance = {
            spiritual: mansion.spiritual || 'Connect with the divine energy of this mansion',
            meditation: this.getLunarMansionMeditation(mansion),
            dhikr: this.getLunarMansionDhikr(mansion),
            prayer: this.getLunarMansionPrayer(mansion),
            reflection: mansion.traditional_use || 'Reflect on the traditional wisdom of this mansion'
        };

        return guidance;
    }

    /**
     * Get meditation practice for lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {string} Meditation guidance
     */
    getLunarMansionMeditation(mansion) {
        const meditations = {
            Fire: 'Meditate on inner strength and divine light. Visualize golden flames purifying your spirit.',
            Earth: 'Ground yourself in stillness. Feel your connection to the earth and divine stability.',
            Air: 'Focus on breath and divine inspiration. Feel the flow of wisdom entering your mind.',
            Water: 'Meditate on divine mercy and emotional healing. Let divine love flow through your heart.'
        };

        return meditations[mansion.element] || 'Meditate on the divine qualities of this mansion.';
    }

    /**
     * Get dhikr (remembrance) for lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {string} Recommended dhikr
     */
    getLunarMansionDhikr(mansion) {
        const dhikrMap = {
            1: 'لا إله إلا الله (La ilaha illa Allah)', // Leadership
            2: 'الصبور (As-Saboor)', // Patience
            3: 'الغني (Al-Ghani)', // Abundance
            4: 'الودود (Al-Wadood)', // Loyalty/Love
            5: 'النور (An-Noor)', // Light/Clarity
            6: 'المنان (Al-Mannan)', // Recognition
            7: 'الواسع (Al-Wasi\')', // Extension
            8: 'الهادي (Al-Haadi)', // Precision/Guidance
            9: 'البصير (Al-Baseer)', // Perception
            10: 'الكريم (Al-Kareem)', // Honor
            11: 'العزيز (Al-Aziz)', // Strength
            12: 'المقلب (Al-Muqallib)', // Change
            13: 'السميع (As-Samee\')', // Communication
            14: 'السلام (As-Salaam)', // Peace
            15: 'الغفور (Al-Ghafoor)', // Forgiveness
            16: 'العدل (Al-\'Adl)', // Justice
            17: 'المجيد (Al-Majeed)', // Honor
            18: 'الرحيم (Ar-Raheem)', // Heart/Mercy
            19: 'الحفيظ (Al-Hafeez)', // Protection
            20: 'المسرع (Al-Musri\')', // Speed
            21: 'الجامع (Al-Jaami\')', // Community
            22: 'الشكور (Ash-Shakoor)', // Sacrifice/Gratitude
            23: 'الواسع (Al-Wasi\')', // Acceptance
            24: 'المبارك (Al-Mubaarak)', // Ultimate blessing
            25: 'المؤمن (Al-Mu\'min)', // Security
            26: 'البديع (Al-Badee\')', // New beginnings
            27: 'التواب (At-Tawwaab)', // Completion
            28: 'الواصل (Al-Waasil)' // Connection
        };

        return dhikrMap[mansion.number] || 'سبحان الله (Subhan Allah)';
    }

    /**
     * Get prayer guidance for lunar mansion
     * @param {Object} mansion - The lunar mansion data
     * @returns {string} Prayer guidance
     */
    getLunarMansionPrayer(mansion) {
        const prayers = {
            Fire: 'Pray for strength and courage to lead with wisdom',
            Earth: 'Pray for patience and stability in all endeavors',  
            Air: 'Pray for clear communication and understanding',
            Water: 'Pray for emotional healing and spiritual purification'
        };

        return prayers[mansion.element] || 'Pray for guidance in embodying this mansion\'s qualities';
    }

    /**
     * Static method to compare two names (both systems)
     * @param {string} name1 - First Arabic name
     * @param {string} name2 - Second Arabic name
     * @returns {Object} Complete compatibility analysis
     */
    static compare(name1, name2) {
        const hisaab1 = new Hisaab(name1);
        return hisaab1.compareWith(name2);
    }

    /**
     * Static method for Arabic compatibility only
     * @param {string} name1 - First Arabic name
     * @param {string} name2 - Second Arabic name
     * @returns {Object} Arabic compatibility analysis
     */
    static compareArabic(name1, name2) {
        const hisaab1 = new Hisaab(name1);
        return hisaab1.getArabicCompatibility(name2);
    }

    /**
     * Static method for Western compatibility only
     * @param {string} name1 - First Arabic name
     * @param {string} name2 - Second Arabic name
     * @returns {Object} Western compatibility analysis
     */
    static compareWestern(name1, name2) {
        const hisaab1 = new Hisaab(name1);
        return hisaab1.getWesternCompatibility(name2);
    }

    /**
     * Static method to analyze multiple names
     * @param {Array} names - Array of Arabic names
     * @returns {Array} Analysis results for all names
     */
    static analyzeMultiple(names) {
        return names.map(name => {
            try {
                const hisaab = new Hisaab(name);
                return {
                    name: name,
                    value: hisaab.getValue(),
                    digitRoot: hisaab.getDigitRoot(),
                    category: hisaab.getNumerology().category,
                    success: true
                };
            } catch (error) {
                return {
                    name: name,
                    error: error.message,
                    success: false
                };
            }
        });
    }

    /**
     * Static method to find the most compatible pair from a list
     * @param {Array} names - Array of Arabic names
     * @returns {Object} Most compatible pair information
     */
    static findMostCompatible(names) {
        let bestMatch = null;
        let highestScore = 0;
        
        for (let i = 0; i < names.length; i++) {
            for (let j = i + 1; j < names.length; j++) {
                try {
                    const comparison = Hisaab.compare(names[i], names[j]);
                    if (comparison.compatibilityScore > highestScore) {
                        highestScore = comparison.compatibilityScore;
                        bestMatch = comparison;
                    }
                } catch (error) {
                    // Skip invalid pairs
                }
            }
        }
        
        return bestMatch;
    }

    // =================== STATIC ISLAMIC METHODS ===================

    /**
     * Get analysis of all 99 Names of Allah
     * @returns {Array} Complete analysis of Asma ul-Husna
     */
    static getAsmaUlHusnaAnalysis() {
        return ASMA_UL_HUSNA.map(name => {
            const hisaab = new Hisaab(name.arabic);
            return {
                ...name,
                numericalValue: hisaab.getValue(),
                digitRoot: hisaab.getDigitRoot(),
                numerology: hisaab.getNumerology(),
                astrological: hisaab.getAstrological()
            };
        });
    }

    /**
     * Find Divine Names by numerical value
     * @param {number} value - Numerical value to search for
     * @returns {Array} Divine Names with matching value
     */
    static findAsmaByValue(value) {
        return ASMA_UL_HUSNA.filter(name => {
            const hisaab = new Hisaab(name.arabic);
            return hisaab.getValue() === value;
        });
    }

    /**
     * Get Quranic connections for a specific value
     * @param {number} value - Numerical value
     * @returns {Object|null} Quranic connection if found
     */
    static getQuranicConnectionByValue(value) {
        return QURANIC_CONNECTIONS[value] || null;
    }

    /**
     * Analyze multiple names with Islamic context
     * @param {Array} names - Array of Arabic names
     * @returns {Array} Complete Islamic analysis for all names
     */
    static analyzeNamesIslamically(names) {
        return names.map(name => {
            try {
                const hisaab = new Hisaab(name);
                return {
                    name: name,
                    basicAnalysis: {
                        value: hisaab.getValue(),
                        digitRoot: hisaab.getDigitRoot(),
                        category: hisaab.getNumerology().category
                    },
                    islamicAnalysis: hisaab.getIslamicAnalysis(),
                    success: true
                };
            } catch (error) {
                return {
                    name: name,
                    error: error.message,
                    success: false
                };
            }
        });
    }

    /**
     * Get comprehensive Divine Names statistics
     * @returns {Object} Statistics about the 99 Names
     */
    static getAsmaStatistics() {
        const analysis = Hisaab.getAsmaUlHusnaAnalysis();
        
        const values = analysis.map(item => item.numericalValue);
        const digitRoots = analysis.map(item => item.digitRoot);
        
        return {
            totalNames: analysis.length,
            averageValue: Math.round(values.reduce((a, b) => a + b, 0) / values.length),
            minValue: Math.min(...values),
            maxValue: Math.max(...values),
            digitRootDistribution: this.getDistribution(digitRoots),
            mostCommonDigitRoot: this.getMostCommon(digitRoots),
            valueRanges: {
                low: analysis.filter(item => item.numericalValue < 100).length,
                medium: analysis.filter(item => item.numericalValue >= 100 && item.numericalValue < 300).length,
                high: analysis.filter(item => item.numericalValue >= 300).length
            }
        };
    }

    /**
     * Helper method to get distribution of values
     * @param {Array} values - Array of values
     * @returns {Object} Distribution object
     */
    static getDistribution(values) {
        const distribution = {};
        values.forEach(value => {
            distribution[value] = (distribution[value] || 0) + 1;
        });
        return distribution;
    }

    /**
     * Helper method to get most common value
     * @param {Array} values - Array of values
     * @returns {*} Most common value
     */
    static getMostCommon(values) {
        const counts = {};
        values.forEach(value => {
            counts[value] = (counts[value] || 0) + 1;
        });
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }

    // =================== v1.3.0 NEW FEATURES ===================

    /**
     * Get prayer time correlations based on digit root
     * @returns {Object} Prayer time guidance and correlations
     */
    getPrayerTimeCorrelations() {
        const digitRoot = this.getDigitRoot();
        const correlation = PRAYER_TIME_CORRELATIONS[digitRoot];
        
        if (!correlation) {
            return {
                digitRoot: digitRoot,
                favorablePrayer: 'All five daily prayers',
                guidance: 'Maintain regular prayer times for spiritual growth'
            };
        }

        return {
            name: this.name,
            digitRoot: digitRoot,
            ...correlation,
            personalizedGuidance: this.getPersonalizedPrayerGuidance(correlation),
            bestTimes: this.getPrayerTimingAdvice(correlation),
            dhikrPlan: this.getDailyDhikrPlan(correlation)
        };
    }

    /**
     * Get personalized prayer guidance
     * @param {Object} correlation - Prayer time correlation data
     * @returns {string} Personalized prayer guidance
     */
    getPersonalizedPrayerGuidance(correlation) {
        return `Your name ${this.name} resonates with ${correlation.favorablePrayer} (${correlation.arabicPrayer}). ${correlation.timing} Focus on ${correlation.significance.toLowerCase()} during this prayer time.`;
    }

    /**
     * Get prayer timing advice
     * @param {Object} correlation - Prayer time correlation data
     * @returns {Array} Prayer timing recommendations
     */
    getPrayerTimingAdvice(correlation) {
        const timings = [];
        
        if (correlation.favorablePrayer) {
            timings.push(`Best time: ${correlation.favorablePrayer}`);
        }
        
        if (correlation.timing) {
            timings.push(correlation.timing);
        }
        
        return timings.length > 0 ? timings : ['Maintain all five daily prayers'];
    }

    /**
     * Get daily dhikr plan
     * @param {Object} correlation - Prayer time correlation data
     * @returns {Object} Daily dhikr recommendations
     */
    getDailyDhikrPlan(correlation) {
        const digitRoot = this.getDigitRoot();
        
        const dhikrPlans = {
            1: {
                morning: 'لا إله إلا الله (100 times)',
                evening: 'أستغفر الله (70 times)',
                afterPrayer: 'سبحان الله، الحمد لله، الله أكبر (33 times each)'
            },
            2: {
                morning: 'الرحمن الرحيم (50 times)',
                evening: 'حسبي الله ونعم الوكيل (40 times)',
                afterPrayer: 'سبحان الله وبحمده (100 times)'
            },
            3: {
                morning: 'سبحان الله (100 times)',
                evening: 'الحمد لله (100 times)',
                afterPrayer: 'لا إله إلا أنت سبحانك (33 times)'
            },
            4: {
                morning: 'الله أكبر (100 times)',
                evening: 'لا حول ولا قوة إلا بالله (50 times)',
                afterPrayer: 'أستغفر الله وأتوب إليه (70 times)'
            },
            5: {
                morning: 'استغفر الله (100 times)',
                evening: 'يا حي يا قيوم (40 times)',
                afterPrayer: 'رب اغفر لي (50 times)'
            },
            6: {
                morning: 'الحمد لله (100 times)',
                evening: 'يا رب العالمين (50 times)',
                afterPrayer: 'اللهم صل على محمد (100 times)'
            },
            7: {
                morning: 'حسبنا الله ونعم الوكيل (70 times)',
                evening: 'لا إله إلا الله (100 times)',
                afterPrayer: 'سبحان الله العظيم (100 times)'
            },
            8: {
                morning: 'ما شاء الله (50 times)',
                evening: 'بارك الله (50 times)',
                afterPrayer: 'الحمد لله رب العالمين (70 times)'
            },
            9: {
                morning: 'لا حول ولا قوة إلا بالله (100 times)',
                evening: 'رب اغفر وارحم (70 times)',
                afterPrayer: 'سبحان الله، الحمد لله، لا إله إلا الله (33 times each)'
            }
        };
        
        return dhikrPlans[digitRoot] || {
            morning: 'سبحان الله (100 times)',
            evening: 'الحمد لله (100 times)',
            afterPrayer: 'الله أكبر (100 times)'
        };
    }

    /**
     * Get extended Quranic connections
     * @returns {Array} Extended Quranic verse connections
     */
    getExtendedQuranicConnections() {
        const connections = [];
        
        // Check main value
        if (EXTENDED_QURANIC_CONNECTIONS[this.value]) {
            connections.push({
                type: 'Direct Value Match',
                ...EXTENDED_QURANIC_CONNECTIONS[this.value],
                nameValue: this.value
            });
        }

        // Check digit root
        const digitRoot = this.getDigitRoot();
        if (EXTENDED_QURANIC_CONNECTIONS[digitRoot]) {
            connections.push({
                type: 'Digit Root Match',
                ...EXTENDED_QURANIC_CONNECTIONS[digitRoot],
                nameValue: this.value,
                digitRoot: digitRoot
            });
        }

        return connections;
    }

    /**
     * Check if name has prophetic significance
     * @returns {Object|null} Prophetic significance if found
     */
    getPropheticSignificance() {
        const propheticData = PROPHETIC_NAMES[this.name];
        
        if (propheticData) {
            return {
                name: this.name,
                ...propheticData,
                numericalValue: this.value,
                digitRoot: this.getDigitRoot(),
                modernGuidance: `Follow the example of ${propheticData.type}: ${propheticData.guidance}`
            };
        }

        return null;
    }

    /**
     * Get cultural and regional context
     * @param {string} region - Region to analyze (optional)
     * @returns {Object} Cultural context and significance
     */
    getCulturalContext(region = null) {
        const context = {
            name: this.name,
            value: this.value,
            letterCount: this.name.length,
            letterBreakdown: this.getBreakdown(),
            culturalSignificance: 'Arabic Islamic naming tradition'
        };

        if (region && CULTURAL_CONTEXTS[region]) {
            context.regionalContext = {
                region: region,
                ...CULTURAL_CONTEXTS[region]
            };
        }

        return context;
    }

    /**
     * Analyze business name for success indicators
     * @returns {Object} Complete business analysis
     */
    getBusinessAnalysis() {
        const digitRoot = this.getDigitRoot();
        const value = this.value;
        
        // Determine value range category
        let rangeCategory;
        if (value < 100) rangeCategory = BUSINESS_SUCCESS_INDICATORS.low;
        else if (value < 300) rangeCategory = BUSINESS_SUCCESS_INDICATORS.medium;
        else if (value < 500) rangeCategory = BUSINESS_SUCCESS_INDICATORS.high;
        else rangeCategory = BUSINESS_SUCCESS_INDICATORS.veryHigh;
        
        // Get partnership house analysis
        const partnershipAnalysis = BUSINESS_PARTNERSHIP_HOUSES[digitRoot] || {
            businessType: 'General business',
            recommendation: 'Proceed with standard business practices',
            challenges: 'Normal business challenges apply'
        };
        
        // Get timing recommendations
        const timing = BUSINESS_TIMING[digitRoot] || {
            bestDays: ['Any day'],
            bestMonths: ['Any month'],
            launchTiming: 'Flexible timing recommended'
        };
        
        return {
            name: this.name,
            value: value,
            digitRoot: digitRoot,
            successIndicators: rangeCategory,
            partnershipAnalysis: partnershipAnalysis,
            timing: timing,
            recommendedIndustries: this.getRecommendedIndustries(),
            strengths: rangeCategory.strengths,
            challenges: rangeCategory.challenges,
            overallAssessment: this.getBusinessOverallAssessment(digitRoot, value)
        };
    }

    /**
     * Get recommended industries for business name
     * @returns {Array} List of recommended industries
     */
    getRecommendedIndustries() {
        const value = this.value;
        let industries = [];
        
        if (value < 100) {
            industries = BUSINESS_SUCCESS_INDICATORS.low.industries;
        } else if (value < 300) {
            industries = BUSINESS_SUCCESS_INDICATORS.medium.industries;
        } else if (value < 500) {
            industries = BUSINESS_SUCCESS_INDICATORS.high.industries;
        } else {
            industries = BUSINESS_SUCCESS_INDICATORS.veryHigh.industries;
        }
        
        return industries;
    }

    /**
     * Get overall business assessment
     * @param {number} digitRoot - The digit root
     * @param {number} value - The name value
     * @returns {Object} Overall business assessment
     */
    getBusinessOverallAssessment(digitRoot, value) {
        const assessments = {
            1: { rating: 8, summary: 'Excellent for leadership-driven businesses and startups' },
            2: { rating: 7, summary: 'Good for partnerships and collaborative ventures' },
            3: { rating: 6, summary: 'Avoid partnerships, better for sole proprietorship' },
            4: { rating: 9, summary: 'Perfect for partnerships and legitimate business' },
            5: { rating: 7, summary: 'Excellent for public-facing and service businesses' },
            6: { rating: 4, summary: 'Challenging - proceed with caution' },
            7: { rating: 10, summary: 'Most blessed - ideal for any business type' },
            8: { rating: 7, summary: 'Great for knowledge-based and educational ventures' },
            9: { rating: 3, summary: 'High risk - consider employment over business' }
        };
        
        const assessment = assessments[digitRoot] || { rating: 5, summary: 'Neutral business prospects' };
        
        // Adjust based on value range
        if (value > 500) {
            assessment.note = 'High value suggests established, authoritative presence';
        } else if (value < 100) {
            assessment.note = 'Low value suggests agile, innovative approach';
        }
        
        return assessment;
    }

    /**
     * Calculate life path number from birth date
     * @param {number} day - Birth day
     * @param {number} month - Birth month
     * @param {number} year - Birth year
     * @returns {Object} Life path analysis
     */
    getLifePathCompatibility(day, month, year) {
        // Calculate life path number
        const daySum = this.calculateDigitRoot(day);
        const monthSum = this.calculateDigitRoot(month);
        const yearSum = this.calculateDigitRoot(year);
        const lifePathNumber = this.calculateDigitRoot(daySum + monthSum + yearSum);
        
        const nameDigitRoot = this.getDigitRoot();
        
        // Check compatibility
        const compatibility = this.calculateNameDateCompatibility(nameDigitRoot, lifePathNumber);
        
        // Get life path pattern
        const lifePathPattern = LIFE_PATH_PATTERNS[lifePathNumber] || {
            description: 'Unique life path',
            strengths: ['Individual journey'],
            challenges: ['Personal growth']
        };
        
        return {
            name: this.name,
            nameDigitRoot: nameDigitRoot,
            birthDate: { day, month, year },
            lifePathNumber: lifePathNumber,
            lifePathPattern: lifePathPattern,
            compatibility: compatibility,
            harmonization: this.getNameDateHarmonization(nameDigitRoot, lifePathNumber),
            personalYear: this.calculatePersonalYear(year, month, day)
        };
    }

    /**
     * Calculate name-date compatibility
     * @param {number} nameRoot - Name digit root
     * @param {number} lifePathNumber - Life path number
     * @returns {Object} Compatibility analysis
     */
    calculateNameDateCompatibility(nameRoot, lifePathNumber) {
        const diff = Math.abs(nameRoot - lifePathNumber);
        let score, level, description;
        
        if (nameRoot === lifePathNumber) {
            score = 100;
            level = 'Perfect Harmony';
            description = 'Your name and life path are in complete alignment';
        } else if (diff === 1 || diff === 8) {
            score = 85;
            level = 'Excellent Compatibility';
            description = 'Your name supports your life path beautifully';
        } else if (diff <= 3) {
            score = 70;
            level = 'Good Compatibility';
            description = 'Your name and life path work well together';
        } else if (diff <= 5) {
            score = 55;
            level = 'Moderate Compatibility';
            description = 'Some adjustment needed for optimal harmony';
        } else {
            score = 40;
            level = 'Challenging';
            description = 'Consider name modifications for better alignment';
        }
        
        return { score, level, description, difference: diff };
    }

    /**
     * Get name-date harmonization advice
     * @param {number} nameRoot - Name digit root
     * @param {number} lifePathNumber - Life path number
     * @returns {Object} Harmonization guidance
     */
    getNameDateHarmonization(nameRoot, lifePathNumber) {
        const combined = this.calculateDigitRoot(nameRoot + lifePathNumber);
        
        const harmonizationAdvice = {
            1: 'Focus on leadership and independence in your endeavors',
            2: 'Embrace partnerships and diplomatic approaches',
            3: 'Express yourself creatively and communicate openly',
            4: 'Build solid foundations and work systematically',
            5: 'Seek freedom and embrace change',
            6: 'Nurture relationships and take responsibility',
            7: 'Develop spirituality and inner wisdom',
            8: 'Pursue material success with ethical practices',
            9: 'Serve humanity and seek universal understanding'
        };
        
        return {
            combinedEnergy: combined,
            advice: harmonizationAdvice[combined] || 'Follow your unique path',
            resonance: this.getEnergyResonance(nameRoot, lifePathNumber)
        };
    }

    /**
     * Get energy resonance between name and date
     * @param {number} nameRoot - Name digit root
     * @param {number} lifePathNumber - Life path number
     * @returns {string} Resonance description
     */
    getEnergyResonance(nameRoot, lifePathNumber) {
        if (nameRoot === lifePathNumber) {
            return 'Strong resonance - name amplifies life path energy';
        } else if ((nameRoot + lifePathNumber) % 2 === 0) {
            return 'Balanced resonance - harmonious energy flow';
        } else {
            return 'Dynamic resonance - creates active energy exchange';
        }
    }

    /**
     * Calculate personal year
     * @param {number} currentYear - Current year
     * @param {number} birthMonth - Birth month
     * @param {number} birthDay - Birth day
     * @returns {Object} Personal year analysis
     */
    calculatePersonalYear(currentYear, birthMonth, birthDay) {
        const yearSum = this.calculateDigitRoot(currentYear);
        const monthSum = this.calculateDigitRoot(birthMonth);
        const daySum = this.calculateDigitRoot(birthDay);
        const personalYear = this.calculateDigitRoot(yearSum + monthSum + daySum);
        
        const yearCycle = PERSONAL_YEAR_CYCLES[personalYear] || {
            theme: 'Personal growth year',
            focus: 'Self-development',
            opportunities: ['Learning', 'Growing'],
            challenges: ['Change']
        };
        
        return {
            personalYear: personalYear,
            ...yearCycle,
            nameAlignment: this.getPersonalYearNameAlignment(personalYear)
        };
    }

    /**
     * Get personal year name alignment
     * @param {number} personalYear - Personal year number
     * @returns {string} Alignment description
     */
    getPersonalYearNameAlignment(personalYear) {
        const nameRoot = this.getDigitRoot();
        if (nameRoot === personalYear) {
            return 'Your name fully supports this year\'s energy';
        } else {
            return `Your name (${nameRoot}) offers complementary energy to this year (${personalYear})`;
        }
    }

    /**
     * Get advanced numerology analysis
     * @returns {Object} Complete advanced numerology
     */
    getAdvancedNumerology() {
        const digitRoot = this.getDigitRoot();
        const value = this.value;
        
        // Check for master numbers
        const masterNumberCheck = this.checkMasterNumbers();
        
        // Check for karmic numbers
        const karmicCheck = this.checkKarmicNumbers();
        
        return {
            name: this.name,
            value: value,
            digitRoot: digitRoot,
            masterNumbers: masterNumberCheck,
            karmicNumbers: karmicCheck,
            lifePath: LIFE_PATH_PATTERNS[digitRoot],
            hiddenPotential: this.getHiddenPotential(),
            soulUrge: this.calculateSoulUrge(),
            personalityNumber: this.calculatePersonalityNumber()
        };
    }

    /**
     * Check for master numbers
     * @returns {Object} Master number analysis
     */
    checkMasterNumbers() {
        const value = this.value;
        const isMaster = value === 11 || value === 22 || value === 33 || value === 44;
        
        if (isMaster && MASTER_NUMBERS[value]) {
            return {
                isMasterNumber: true,
                number: value,
                ...MASTER_NUMBERS[value]
            };
        }
        
        return {
            isMasterNumber: false,
            note: 'No master number present'
        };
    }

    /**
     * Check for karmic numbers
     * @returns {Object} Karmic number analysis
     */
    checkKarmicNumbers() {
        const value = this.value;
        const karmicNumbers = [13, 14, 16, 19];
        const isKarmic = karmicNumbers.includes(value);
        
        if (isKarmic && KARMIC_NUMBERS[value]) {
            return {
                isKarmicNumber: true,
                number: value,
                ...KARMIC_NUMBERS[value]
            };
        }
        
        return {
            isKarmicNumber: false,
            note: 'No karmic debt indicated'
        };
    }

    /**
     * Get hidden potential from name
     * @returns {Object} Hidden potential analysis
     */
    getHiddenPotential() {
        const breakdown = this.getBreakdown();
        const uniqueValues = [...new Set(breakdown.map(b => b.value))];
        const repeatedNumbers = breakdown
            .map(b => b.value)
            .filter((v, i, arr) => arr.indexOf(v) !== i);
        
        return {
            uniqueNumbers: uniqueValues.length,
            repeatedNumbers: [...new Set(repeatedNumbers)],
            dominantNumber: this.getDominantNumber(breakdown),
            missingNumbers: this.getMissingNumbers(uniqueValues)
        };
    }

    /**
     * Get dominant number in name
     * @param {Array} breakdown - Letter breakdown
     * @returns {number} Most frequent number
     */
    getDominantNumber(breakdown) {
        const frequency = {};
        breakdown.forEach(b => {
            frequency[b.value] = (frequency[b.value] || 0) + 1;
        });
        
        let maxCount = 0;
        let dominant = null;
        for (const [num, count] of Object.entries(frequency)) {
            if (count > maxCount) {
                maxCount = count;
                dominant = parseInt(num);
            }
        }
        
        return dominant;
    }

    /**
     * Get missing numbers (1-9)
     * @param {Array} uniqueValues - Unique values in name
     * @returns {Array} Missing single-digit numbers
     */
    getMissingNumbers(uniqueValues) {
        const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return allDigits.filter(d => !uniqueValues.includes(d));
    }

    /**
     * Calculate soul urge number
     * @returns {number} Soul urge number
     */
    calculateSoulUrge() {
        // Simplified: based on sum of all values
        return this.getDigitRoot();
    }

    /**
     * Calculate personality number
     * @returns {number} Personality number
     */
    calculatePersonalityNumber() {
        // Simplified: based on first letter
        const firstLetter = this.getBreakdown()[0];
        return firstLetter ? this.calculateDigitRoot(firstLetter.value) : 0;
    }

    // =================== v1.1.0 NEW FEATURES ===================

    /**
     * Generate names matching specific criteria
     * @param {Object} criteria - Generation criteria
     * @returns {Array} Array of generated name suggestions
     */
    static generateNames(criteria = {}) {
        const {
            targetValue = null,
            partnerHouse = null,
            element = null,
            gender = null,
            length = [3, 8],
            startsWith = null,
            maxResults = 10
        } = criteria;

        // Arabic name database (sample - can be expanded)
        const arabicNames = {
            male: [
                'محمد', 'أحمد', 'علي', 'حسن', 'حسين', 'عمر', 'عبدالله', 'عبدالرحمن',
                'يوسف', 'إبراهيم', 'موسى', 'عيسى', 'داود', 'سليمان', 'يحيى', 'زكريا',
                'خالد', 'سعد', 'سالم', 'صالح', 'طارق', 'فيصل', 'ماجد', 'نادر',
                'أمين', 'باسم', 'جمال', 'رامي', 'زياد', 'فارس', 'كريم', 'لؤي',
                'مازن', 'ناصر', 'هاني', 'وليد', 'ياسر', 'عادل', 'فؤاد', 'منير'
            ],
            female: [
                'فاطمة', 'عائشة', 'خديجة', 'زينب', 'مريم', 'آمنة', 'صفية', 'رقية',
                'أم كلثوم', 'حفصة', 'جويرية', 'ميمونة', 'سودة', 'زينب', 'أسماء', 'هاجر',
                'نورا', 'سارة', 'لينا', 'دانا', 'ريم', 'منى', 'هند', 'ليلى',
                'أميرة', 'جميلة', 'حنان', 'رانيا', 'سلمى', 'فرح', 'قمر', 'لمياء',
                'ناديا', 'هدى', 'ياسمين', 'عبير', 'فداء', 'منال', 'نهى', 'وفاء'
            ]
        };

        let namePool = [];
        
        // Build name pool based on gender
        if (gender === 'male') {
            namePool = [...arabicNames.male];
        } else if (gender === 'female') {
            namePool = [...arabicNames.female];
        } else {
            namePool = [...arabicNames.male, ...arabicNames.female];
        }

        const suggestions = [];

        namePool.forEach(name => {
            try {
                const hisaab = new Hisaab(name);
                let score = 0;
                let reasons = [];

                // Check criteria and calculate match score
                
                // Target value match
                if (targetValue !== null) {
                    const diff = Math.abs(hisaab.getValue() - targetValue);
                    if (diff === 0) {
                        score += 50;
                        reasons.push(`Exact value match: ${targetValue}`);
                    } else if (diff <= 10) {
                        score += 30;
                        reasons.push(`Close to target value (±${diff})`);
                    } else if (diff <= 25) {
                        score += 15;
                        reasons.push(`Reasonably close to target (±${diff})`);
                    }
                }

                // Partner house match
                if (partnerHouse !== null) {
                    // For this, we need a reference name to compare with
                    // For now, we'll check if this name with itself produces the desired house
                    const digitRoot = hisaab.getDigitRoot();
                    const selfHouse = hisaab.calculateDigitRoot(digitRoot + digitRoot + 7);
                    if (selfHouse === partnerHouse) {
                        score += 40;
                        reasons.push(`Self-compatibility house: ${partnerHouse}`);
                    }
                }

                // Element match
                if (element !== null) {
                    const astrology = hisaab.getArabicAstrology();
                    if (astrology.element.name === element) {
                        score += 25;
                        reasons.push(`Element match: ${element} (${astrology.element.arabic})`);
                    }
                }

                // Length constraint
                if (name.length >= length[0] && name.length <= length[1]) {
                    score += 10;
                } else if (name.length < length[0] || name.length > length[1]) {
                    return; // Skip this name
                }

                // Starts with constraint
                if (startsWith !== null && !name.startsWith(startsWith)) {
                    return; // Skip this name
                }

                // Add name to suggestions if it has any score
                if (score > 0 || (targetValue === null && partnerHouse === null && element === null)) {
                    suggestions.push({
                        name: name,
                        value: hisaab.getValue(),
                        digitRoot: hisaab.getDigitRoot(),
                        element: hisaab.getArabicAstrology().element,
                        score: score,
                        reasons: reasons,
                        breakdown: hisaab.getBreakdown()
                    });
                }
            } catch (error) {
                // Skip invalid names
            }
        });

        // Sort by score and return top results
        return suggestions
            .sort((a, b) => b.score - a.score)
            .slice(0, maxResults);
    }

    /**
     * Analyze family harmony and compatibility
     * @param {Object} family - Family member names
     * @returns {Object} Family harmony analysis
     */
    static analyzeFamilyHarmony(family) {
        const { parents = [], children = [] } = family;
        const allMembers = [...parents, ...children];
        
        if (allMembers.length === 0) {
            throw new Error('Family must have at least one member');
        }

        const memberAnalyses = allMembers.map(name => {
            const hisaab = new Hisaab(name);
            return {
                name: name,
                value: hisaab.getValue(),
                digitRoot: hisaab.getDigitRoot(),
                element: hisaab.getArabicAstrology().element,
                planet: hisaab.getArabicAstrology().planet,
                islamicQualities: hisaab.getIslamicQualities()
            };
        });

        // Calculate element distribution
        const elementCounts = {};
        memberAnalyses.forEach(member => {
            const element = member.element.name;
            elementCounts[element] = (elementCounts[element] || 0) + 1;
        });

        // Find dominant element
        const dominantElement = Object.keys(elementCounts).reduce((a, b) => 
            elementCounts[a] > elementCounts[b] ? a : b
        );

        // Calculate average value
        const averageValue = Math.round(
            memberAnalyses.reduce((sum, member) => sum + member.value, 0) / memberAnalyses.length
        );

        // Check parent compatibility (if both parents provided)
        let parentCompatibility = null;
        if (parents.length === 2) {
            parentCompatibility = this.compareArabic(parents[0], parents[1]);
        }

        // Energy balance
        const evenCount = memberAnalyses.filter(member => member.value % 2 === 0).length;
        const oddCount = memberAnalyses.length - evenCount;
        const energyBalance = evenCount === oddCount ? 'Perfectly balanced' : 
                           evenCount > oddCount ? 'More Yin (receptive) energy' : 
                           'More Yang (active) energy';

        // Generate recommendations
        const recommendations = this.generateFamilyRecommendations({
            dominantElement,
            elementDistribution: elementCounts,
            parentCompatibility,
            energyBalance: { even: evenCount, odd: oddCount }
        });

        return {
            memberAnalyses: memberAnalyses,
            familyStats: {
                totalMembers: allMembers.length,
                averageValue: averageValue,
                dominantElement: {
                    name: dominantElement,
                    count: elementCounts[dominantElement],
                    percentage: Math.round((elementCounts[dominantElement] / allMembers.length) * 100)
                },
                elementDistribution: elementCounts,
                energyBalance: energyBalance
            },
            parentCompatibility: parentCompatibility,
            harmony: {
                score: this.calculateFamilyHarmonyScore(memberAnalyses, parentCompatibility),
                level: this.getFamilyHarmonyLevel(memberAnalyses, parentCompatibility)
            },
            recommendations: recommendations
        };
    }

    /**
     * Generate family recommendations
     * @param {Object} familyData - Family analysis data
     * @returns {Array} Array of recommendations
     */
    static generateFamilyRecommendations(familyData) {
        const recommendations = [];
        
        // Element balance recommendations
        if (familyData.dominantElement === 'Fire') {
            recommendations.push({
                category: 'Element Balance',
                suggestion: 'Family has strong Fire energy. Encourage patience and calm activities.',
                arabic: 'العائلة لديها طاقة نار قوية. شجع على الصبر والأنشطة الهادئة.'
            });
        } else if (familyData.dominantElement === 'Water') {
            recommendations.push({
                category: 'Element Balance', 
                suggestion: 'Family has Water dominance. Great for emotional bonding and intuition.',
                arabic: 'العائلة لديها هيمنة الماء. ممتاز للترابط العاطفي والحدس.'
            });
        }

        // Parent compatibility recommendations
        if (familyData.parentCompatibility) {
            const house = familyData.parentCompatibility.partnerHouse;
            if (house === 7) {
                recommendations.push({
                    category: 'Parent Relationship',
                    suggestion: 'Excellent parent compatibility! This creates a harmonious home environment.',
                    arabic: 'توافق ممتاز بين الوالدين! هذا يخلق بيئة منزلية متناغمة.'
                });
            } else if (house === 6 || house === 9) {
                recommendations.push({
                    category: 'Parent Relationship',
                    suggestion: 'Parents may face challenges. Focus on communication and understanding.',
                    arabic: 'قد يواجه الوالدان تحديات. ركز على التواصل والتفاهم.'
                });
            }
        }

        // Energy balance recommendations
        if (familyData.energyBalance.even > familyData.energyBalance.odd * 2) {
            recommendations.push({
                category: 'Energy Balance',
                suggestion: 'Family leans toward calm energy. Encourage some dynamic activities.',
                arabic: 'العائلة تميل نحو الطاقة الهادئة. شجع على بعض الأنشطة الديناميكية.'
            });
        } else if (familyData.energyBalance.odd > familyData.energyBalance.even * 2) {
            recommendations.push({
                category: 'Energy Balance',
                suggestion: 'Family has high active energy. Balance with quiet time and reflection.',
                arabic: 'العائلة لديها طاقة نشطة عالية. توازن مع الوقت الهادئ والتأمل.'
            });
        }

        return recommendations;
    }

    /**
     * Calculate family harmony score
     * @param {Array} memberAnalyses - Individual member analyses
     * @param {Object} parentCompatibility - Parent compatibility if available
     * @returns {number} Harmony score out of 100
     */
    static calculateFamilyHarmonyScore(memberAnalyses, parentCompatibility) {
        let score = 50; // Base score

        // Element diversity bonus
        const uniqueElements = new Set(memberAnalyses.map(m => m.element.name)).size;
        if (uniqueElements === 4) score += 20; // All 4 elements
        else if (uniqueElements === 3) score += 15;
        else if (uniqueElements === 2) score += 10;

        // Parent compatibility impact
        if (parentCompatibility) {
            const house = parentCompatibility.partnerHouse;
            if (house === 7) score += 20;
            else if (house === 4 || house === 2) score += 10;
            else if (house === 6 || house === 9) score -= 15;
        }

        // Value harmony (similar values get bonus)
        const values = memberAnalyses.map(m => m.value);
        const avgValue = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((acc, val) => acc + Math.pow(val - avgValue, 2), 0) / values.length;
        if (variance < 1000) score += 10;
        else if (variance > 5000) score -= 10;

        return Math.max(0, Math.min(100, score));
    }

    /**
     * Get family harmony level description
     * @param {Array} memberAnalyses - Individual member analyses
     * @param {Object} parentCompatibility - Parent compatibility if available
     * @returns {string} Harmony level description
     */
    static getFamilyHarmonyLevel(memberAnalyses, parentCompatibility) {
        const score = this.calculateFamilyHarmonyScore(memberAnalyses, parentCompatibility);
        
        if (score >= 80) return 'Excellent Harmony';
        if (score >= 65) return 'Very Good Harmony';
        if (score >= 50) return 'Good Harmony';
        if (score >= 35) return 'Fair Harmony';
        return 'Challenging Harmony';
    }
}

module.exports = Hisaab;
    };
    
    // Load and expose Hisaab
    try {
        const Hisaab = require('./index.js');
        window.Hisaab = Hisaab;
        console.log('✅ Hisaab class loaded successfully');
        console.log('🎉 Ready to use: new Hisaab("اسم عربي")');
        
        // Provide a load function for compatibility
        window.loadHisaabLibrary = function() {
            return Promise.resolve(true);
        };
    } catch (error) {
        console.error('❌ Error loading Hisaab:', error);
        console.error(error.stack);
    }
    
})(window);
