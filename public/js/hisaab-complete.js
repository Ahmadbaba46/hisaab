/**
 * Hisaab Browser Bundle - Self-contained version
 * Version: 1.5.0
 * Generated: 2026-02-15T06:30:47.956Z
 * 
 * Features:
 * - Geographic & Regional Analysis
 * - AI Recommendations
 * - Export & Reporting
 * - Historical Database
 * - Hijri Calendar
 * - Visualization & Charts
 */

(function(window) {
    'use strict';
    
    console.log('📦 Loading Hisaab Browser Bundle v1.5.0...');
    
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
    
    modules['./regional_patterns_data.js'] = function(module, exports, require) {
/**
 * Regional Patterns Data Module - Geographic Arabic Naming Conventions
 * أنماط إقليمية - التسميات العربية حسب المناطق
 */

const REGIONAL_PATTERNS = {
    gulf: {
        name: 'Gulf',
        arabic: 'الخليج',
        countries: ['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
        countriesArabic: ['السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عُمان'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم الجد', 'اسم العائلة/القبيلة'],
            example: 'محمد بن عبدالله بن عبدالعزيز آل سعود',
            characteristics: [
                'Use of "بن" (son of) between names',
                'Tribal/family name prominence (آل)',
                'Multiple given names common',
                'Grandfather name often included'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'عبدالله', meaning: 'Servant of Allah', popularity: 9 },
                { name: 'عبدالرحمن', meaning: 'Servant of the Most Gracious', popularity: 9 },
                { name: 'سلطان', meaning: 'Sultan/Ruler', popularity: 8 },
                { name: 'خالد', meaning: 'Eternal', popularity: 8 },
                { name: 'فهد', meaning: 'Leopard', popularity: 7 },
                { name: 'ناصر', meaning: 'Victorious', popularity: 7 },
                { name: 'حمد', meaning: 'Praise', popularity: 7 },
                { name: 'سعود', meaning: 'Happiness', popularity: 6 },
                { name: 'فيصل', meaning: 'Decisive', popularity: 6 }
            ],
            female: [
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'نورة', meaning: 'Light', popularity: 9 },
                { name: 'هند', meaning: 'India/Group', popularity: 8 },
                { name: 'سارة', meaning: 'Princess', popularity: 8 },
                { name: 'منال', meaning: 'Achievement', popularity: 7 },
                { name: 'عبير', meaning: 'Fragrance', popularity: 7 },
                { name: 'موضي', meaning: 'Affectionate', popularity: 6 },
                { name: 'جواهر', meaning: 'Jewels', popularity: 6 },
                { name: 'لطيفة', meaning: 'Gentle', popularity: 6 },
                { name: 'مريم', meaning: 'Mary', popularity: 5 }
            ]
        },
        tribalPrefixes: ['آل', 'بن', 'الع'],
        culturalNotes: [
            'Tribal affiliation is very important',
            'Royal family names carry prestige',
            'Naming after prophets and companions is common',
            'Modern names coexist with traditional ones'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [7, 9, 5],
            avoidedDigitRoots: [6, 3],
            reasoning: {
                7: 'Seven represents completeness and blessing',
                9: 'Nine is associated with wisdom and leadership',
                5: 'Five relates to the five pillars of Islam'
            }
        }
    },

    levantine: {
        name: 'Levantine',
        arabic: 'الشام',
        countries: ['Syria', 'Lebanon', 'Jordan', 'Palestine'],
        countriesArabic: ['سوريا', 'لبنان', 'الأردن', 'فلسطين'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم العائلة'],
            example: 'محمد أحمد الحسين',
            characteristics: [
                'Family name often indicates origin or profession',
                'Christian names common alongside Muslim',
                'Use of "أبو" (father of) as kunya',
                'Compound names less common than Gulf'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'أحمد', meaning: 'Most praised', popularity: 9 },
                { name: 'علي', meaning: 'High/Exalted', popularity: 9 },
                { name: 'حسن', meaning: 'Good/Beautiful', popularity: 8 },
                { name: 'ماهر', meaning: 'Skilled', popularity: 7 },
                { name: 'سمير', meaning: 'Companion', popularity: 7 },
                { name: 'طاهر', meaning: 'Pure', popularity: 6 },
                { name: 'غازي', meaning: 'Warrior', popularity: 6 },
                { name: 'عادل', meaning: 'Just', popularity: 6 },
                { name: 'أنور', meaning: 'Luminous', popularity: 5 }
            ],
            female: [
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'زينب', meaning: 'Fragrant flower', popularity: 9 },
                { name: 'خديجة', meaning: 'Premature child', popularity: 8 },
                { name: 'عائشة', meaning: 'Alive/Living', popularity: 8 },
                { name: 'دانا', meaning: 'Pearl', popularity: 7 },
                { name: 'لينا', meaning: 'Tender', popularity: 7 },
                { name: 'راما', meaning: 'Pleasing', popularity: 6 },
                { name: 'لمى', meaning: 'Dark lips', popularity: 6 },
                { name: 'سلمى', meaning: 'Peaceful', popularity: 6 },
                { name: 'رنا', meaning: 'Gaze', popularity: 5 }
            ]
        },
        familyIndicators: ['الحسين', 'الخطيب', 'النعسان', 'القدحة'],
        culturalNotes: [
            'Family names often indicate profession (e.g., الحداد - blacksmith)',
            'Palestinian names often include village of origin',
            'Christian names like جورج, ميشيل are common',
            'Refugee communities have naming adaptations'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [2, 4, 8],
            avoidedDigitRoots: [9],
            reasoning: {
                2: 'Represents balance and partnership',
                4: 'Stability and foundation',
                8: 'Prosperity and success'
            }
        }
    },

    northAfrican: {
        name: 'North African',
        arabic: 'المغرب العربي',
        countries: ['Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Mauritania'],
        countriesArabic: ['مصر', 'المغرب', 'الجزائر', 'تونس', 'ليبيا', 'موريتانيا'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم الجد (optional)', 'اسم العائلة'],
            example: 'محمد علي محمد السيد',
            characteristics: [
                'Egypt: often includes multiple generations',
                'Morocco/Algeria: Berber influence on names',
                'Compound names like محمد علي common',
                'Family names often indicate tribe or region'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'أحمد', meaning: 'Most praised', popularity: 9 },
                { name: 'محمود', meaning: 'Praised', popularity: 9 },
                { name: 'علي', meaning: 'High/Exalted', popularity: 8 },
                { name: 'حسين', meaning: 'Handsome', popularity: 8 },
                { name: 'يوسف', meaning: 'God increases', popularity: 7 },
                { name: 'عمر', meaning: 'Life/Age', popularity: 7 },
                { name: 'كريم', meaning: 'Generous', popularity: 6 },
                { name: 'طارق', meaning: 'Morning star', popularity: 6 },
                { name: 'سعيد', meaning: 'Happy', popularity: 6 }
            ],
            female: [
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'مريم', meaning: 'Mary', popularity: 9 },
                { name: 'عائشة', meaning: 'Alive/Living', popularity: 8 },
                { name: 'زينب', meaning: 'Fragrant flower', popularity: 8 },
                { name: 'سامية', meaning: 'Elevated', popularity: 7 },
                { name: 'نادية', meaning: 'Moist/Tender', popularity: 7 },
                { name: 'ليلى', meaning: 'Night', popularity: 6 },
                { name: 'هدى', meaning: 'Guidance', popularity: 6 },
                { name: 'سحر', meaning: 'Magic/Charm', popularity: 6 },
                { name: 'منى', meaning: 'Wish', popularity: 5 }
            ]
        },
        berberInfluencedNames: ['ياسين', 'أيمن', 'سيف الدين', 'طارق', 'يزيد'],
        culturalNotes: [
            'Egypt: names often include Abdul prefix',
            'Morocco: Berber names like ياسين, طارق common',
            'Algeria: French influence on some naming',
            'Tunisia: Mix of Arab and Mediterranean influences'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [1, 3, 5],
            avoidedDigitRoots: [4, 8],
            reasoning: {
                1: 'Unity and leadership',
                3: 'Creativity and expression',
                5: 'Freedom and change'
            }
        }
    },

    iraqi: {
        name: 'Iraqi',
        arabic: 'العراق',
        countries: ['Iraq'],
        countriesArabic: ['العراق'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم الجد', 'اسم العشيرة'],
            example: 'محمد بن علي بن حسين التكريتي',
            characteristics: [
                'Tribal system very important',
                'Use of "بن" between names',
                'Family/clan name indicates region',
                'Both Shia and Sunni naming traditions'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'علي', meaning: 'High/Exalted', popularity: 10 },
                { name: 'حسين', meaning: 'Handsome', popularity: 9 },
                { name: 'حسن', meaning: 'Good/Beautiful', popularity: 9 },
                { name: 'عباس', meaning: 'Lion', popularity: 8 },
                { name: 'قتيبة', meaning: 'Leader', popularity: 7 },
                { name: 'طارق', meaning: 'Morning star', popularity: 7 },
                { name: 'موفق', meaning: 'Successful', popularity: 6 },
                { name: 'عامر', meaning: 'Prosperous', popularity: 6 },
                { name: 'ثامر', meaning: 'Fruitful', popularity: 5 }
            ],
            female: [
                { name: 'زينب', meaning: 'Fragrant flower', popularity: 10 },
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'سكينة', meaning: 'Tranquility', popularity: 9 },
                { name: 'رقيّة', meaning: 'Rising', popularity: 8 },
                { name: 'أم كلثوم', meaning: 'Mother of Kulthum', popularity: 7 },
                { name: 'رشا', meaning: 'Gazelle', popularity: 7 },
                { name: 'هناء', meaning: 'Happiness', popularity: 6 },
                { name: 'سندس', meaning: 'Silk', popularity: 6 },
                { name: 'ندى', meaning: 'Dew', popularity: 6 },
                { name: 'هديل', meaning: 'Cooing', popularity: 5 }
            ]
        },
        tribalIndicators: ['التكريتي', 'البغدادي', 'البصري', 'الموصلي', 'النجفي'],
        culturalNotes: [
            'Shia families favor names of Ahl al-Bayt',
            'Tribal names like الدليم, الجبوري common',
            'Mesopotamian heritage influences naming',
            'Kurdish names in northern regions'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [7, 8, 9],
            avoidedDigitRoots: [3, 6],
            reasoning: {
                7: 'Spiritual perfection',
                8: 'Abundance and power',
                9: 'Completion and wisdom'
            }
        }
    },

    yemeni: {
        name: 'Yemeni',
        arabic: 'اليمن',
        countries: ['Yemen'],
        countriesArabic: ['اليمن'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم الجد', 'اسم القبيلة'],
            example: 'محمد بن علي بن حسين الأحمر',
            characteristics: [
                'Ancient tribal traditions',
                'Unique Yemeni naming conventions',
                'Influence of Himyarite civilization',
                'Regional variations (North vs South)'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'علي', meaning: 'High/Exalted', popularity: 9 },
                { name: 'عبدالله', meaning: 'Servant of Allah', popularity: 9 },
                { name: 'صالح', meaning: 'Righteous', popularity: 8 },
                { name: 'عبدالعزيز', meaning: 'Servant of the Mighty', popularity: 8 },
                { name: 'يحيى', meaning: 'God is gracious', popularity: 7 },
                { name: 'حسين', meaning: 'Handsome', popularity: 7 },
                { name: 'سالم', meaning: 'Safe', popularity: 6 },
                { name: 'ناصر', meaning: 'Victorious', popularity: 6 },
                { name: 'حمود', meaning: 'Praised', popularity: 5 }
            ],
            female: [
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'عائشة', meaning: 'Alive/Living', popularity: 9 },
                { name: 'مريم', meaning: 'Mary', popularity: 8 },
                { name: 'آمنة', meaning: 'Safe', popularity: 8 },
                { name: 'خديجة', meaning: 'Premature child', popularity: 7 },
                { name: 'حليمة', meaning: 'Gentle', popularity: 7 },
                { name: 'سعيدة', meaning: 'Happy', popularity: 6 },
                { name: 'نجاة', meaning: 'Salvation', popularity: 6 },
                { name: 'عزيزة', meaning: 'Precious', popularity: 6 },
                { name: 'فوزية', meaning: 'Victorious', popularity: 5 }
            ]
        },
        tribalIndicators: ['الأحمر', 'الحوثي', 'الهيثم', 'المشيطي', 'الشامي'],
        culturalNotes: [
            'Ancient Sabaean influence on naming',
            'Tribal affiliation very prominent',
            'Names often reflect tribal history',
            'Distinct North/South naming patterns'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [1, 4, 7],
            avoidedDigitRoots: [2, 5],
            reasoning: {
                1: 'Unity and primacy',
                4: 'Stability and tradition',
                7: 'Spiritual completion'
            }
        }
    },

    sudanese: {
        name: 'Sudanese',
        arabic: 'السودان',
        countries: ['Sudan', 'South Sudan'],
        countriesArabic: ['السودان', 'جنوب السودان'],
        namingPatterns: {
            structure: ['اسم شخصي', 'اسم الأب', 'اسم الجد', 'اسم العائلة/القبيلة'],
            example: 'محمد أحمد علي المهدي',
            characteristics: [
                'Nubian and Arab fusion',
                'Family lineage emphasized',
                'Sufi influence on naming',
                'Tribal names common'
            ]
        },
        commonNames: {
            male: [
                { name: 'محمد', meaning: 'Praised', popularity: 10 },
                { name: 'أحمد', meaning: 'Most praised', popularity: 9 },
                { name: 'علي', meaning: 'High/Exalted', popularity: 8 },
                { name: 'عثمان', meaning: 'Baby bustard', popularity: 8 },
                { name: 'حسن', meaning: 'Good/Beautiful', popularity: 7 },
                { name: 'عبدالله', meaning: 'Servant of Allah', popularity: 7 },
                { name: 'يوسف', meaning: 'God increases', popularity: 6 },
                { name: 'إبراهيم', meaning: 'Father of many', popularity: 6 },
                { name: 'خالد', meaning: 'Eternal', popularity: 6 },
                { name: 'الصادق', meaning: 'Truthful', popularity: 5 }
            ],
            female: [
                { name: 'فاطمة', meaning: 'One who abstains', popularity: 10 },
                { name: 'زينب', meaning: 'Fragrant flower', popularity: 9 },
                { name: 'خديجة', meaning: 'Premature child', popularity: 8 },
                { name: 'مريم', meaning: 'Mary', popularity: 8 },
                { name: 'آمنة', meaning: 'Safe', popularity: 7 },
                { name: 'سارة', meaning: 'Princess', popularity: 7 },
                { name: 'عزة', meaning: 'Glory', popularity: 6 },
                { name: 'سهام', meaning: 'Arrows', popularity: 6 },
                { name: 'نجوى', meaning: 'Secret conversation', popularity: 6 },
                { name: 'سعاد', meaning: 'Happiness', popularity: 5 }
            ]
        },
        tribalIndicators: ['المهدي', 'الميرغني', 'البشير', 'الطيب', 'الكباشي'],
        culturalNotes: [
            'Sufi orders influence naming (المهدي, الميرغني)',
            'Nubian names coexist with Arabic',
            'Tribal identity very important',
            'Names reflect religious devotion'
        ],
        numerologicalPreferences: {
            favoredDigitRoots: [5, 7, 9],
            avoidedDigitRoots: [2, 4],
            reasoning: {
                5: 'Associated with the five daily prayers',
                7: 'Spiritual perfection',
                9: 'Completion and fulfillment'
            }
        }
    }
};

const GEOGRAPHIC_CORRELATIONS = {
    elements: {
        desert: {
            regions: ['gulf', 'saudi', 'yemeni'],
            favoredElements: ['Fire', 'Earth'],
            reasoning: 'Desert regions traditionally favor elements associated with warmth and stability'
        },
        coastal: {
            regions: ['levantine', 'northAfrican'],
            favoredElements: ['Water', 'Air'],
            reasoning: 'Coastal regions favor elements associated with fluidity and communication'
        },
        mountainous: {
            regions: ['yemeni', 'levantine'],
            favoredElements: ['Earth', 'Air'],
            reasoning: 'Mountainous regions favor elements of height and stability'
        },
        riverine: {
            regions: ['iraqi', 'northAfrican'],
            favoredElements: ['Water', 'Earth'],
            reasoning: 'River valleys favor elements of fertility and growth'
        }
    },
    planetary: {
        byRegion: {
            gulf: { primary: 'Sun', secondary: 'Jupiter', reasoning: 'Leadership and expansion' },
            levantine: { primary: 'Mercury', secondary: 'Venus', reasoning: 'Trade and beauty' },
            northAfrican: { primary: 'Moon', secondary: 'Mercury', reasoning: 'Intuition and communication' },
            iraqi: { primary: 'Mars', secondary: 'Jupiter', reasoning: 'Strength and wisdom' },
            yemeni: { primary: 'Saturn', secondary: 'Moon', reasoning: 'Tradition and cycles' },
            sudanese: { primary: 'Jupiter', secondary: 'Venus', reasoning: 'Spirituality and harmony' }
        }
    }
};

const CULTURAL_CONTEXTS = {
    tribalNames: {
        arabic: 'أسماء القبائل',
        description: 'Names indicating tribal or clan affiliation',
        examples: [
            { name: 'قريش', region: 'Arabian Peninsula', significance: 'Prophet\'s tribe' },
            { name: 'تميم', region: 'Gulf/Iraq', significance: 'Major Arab tribe' },
            { name: 'عنزة', region: 'Gulf', significance: 'Large tribal confederation' },
            { name: 'شمّر', region: 'Gulf/Iraq', significance: 'Prominent tribe' },
            { name: 'الدليم', region: 'Iraq', significance: 'Large Anbar tribe' },
            { name: 'الهذيل', region: 'Saudi Arabia', significance: 'Ancient tribe' }
        ]
    },
    religiousNames: {
        arabic: 'أسماء دينية',
        description: 'Names with strong religious significance',
        categories: {
            prophetic: ['محمد', 'أحمد', 'محمود', 'إبراهيم', 'موسى', 'عيسى', 'يوسف', 'داود', 'سليمان', 'زكريا', 'يحيى', 'إسماعيل', 'إدريس', 'ذي الكفل', 'هارون', 'إلياس', 'اليسع', 'يونس', 'نوح', 'هود', 'صالح', 'شعيب', 'لوط', 'آدم', 'إدريس'],
            sahaba: ['أبو بكر', 'عمر', 'عثمان', 'علي', 'خالد', 'سعد', 'طلحة', 'الزبير', 'عبدالرحمن', 'أبو عبيدة', 'سعيد', 'سعد بن معاذ', 'أسييد بن حضير', 'عمار', 'مصعب', 'بلال', 'سلمان', 'صهيب', 'المقداد'],
            ahlulBayt: ['علي', 'حسن', 'حسين', 'زين العابدين', 'محمد الباقر', 'جعفر الصادق', 'موسى الكاظم', 'علي الرضا', 'محمد الجواد', 'علي الهادي', 'الحسن العسكري', 'المهدي']
        }
    },
    professionBasedNames: {
        arabic: 'أسماء المهن',
        description: 'Family names derived from professions',
        examples: [
            { name: 'الحداد', profession: 'Blacksmith', arabicProfession: 'حداد' },
            { name: 'النجار', profession: 'Carpenter', arabicProfession: 'نجار' },
            { name: 'الطحان', profession: 'Miller', arabicProfession: 'طحان' },
            { name: 'القصاب', profession: 'Butcher', arabicProfession: 'قصاب' },
            { name: 'الخياط', profession: 'Tailor', arabicProfession: 'خياط' },
            { name: 'البزاز', profession: 'Cloth merchant', arabicProfession: 'بزاز' },
            { name: 'العطار', profession: 'Perfumer', arabicProfession: 'عطار' },
            { name: 'الحريري', profession: 'Silk merchant', arabicProfession: 'حرير' },
            { name: 'الذهبي', profession: 'Goldsmith', arabicProfession: 'ذهبي' },
            { name: 'الزجاجي', profession: 'Glassmaker', arabicProfession: 'زجاج' }
        ]
    }
};

function getRegionByName(regionName) {
    const regionMap = {
        'gulf': REGIONAL_PATTERNS.gulf,
        'خليج': REGIONAL_PATTERNS.gulf,
        'الخليج': REGIONAL_PATTERNS.gulf,
        'levantine': REGIONAL_PATTERNS.levantine,
        'sham': REGIONAL_PATTERNS.levantine,
        'شام': REGIONAL_PATTERNS.levantine,
        'الشام': REGIONAL_PATTERNS.levantine,
        'northafrican': REGIONAL_PATTERNS.northAfrican,
        'maghreb': REGIONAL_PATTERNS.northAfrican,
        'مغرب': REGIONAL_PATTERNS.northAfrican,
        'المغرب': REGIONAL_PATTERNS.northAfrican,
        'iraqi': REGIONAL_PATTERNS.iraqi,
        'iraq': REGIONAL_PATTERNS.iraqi,
        'عراق': REGIONAL_PATTERNS.iraqi,
        'العراق': REGIONAL_PATTERNS.iraqi,
        'yemeni': REGIONAL_PATTERNS.yemeni,
        'yemen': REGIONAL_PATTERNS.yemeni,
        'يمن': REGIONAL_PATTERNS.yemeni,
        'اليمن': REGIONAL_PATTERNS.yemeni,
        'sudanese': REGIONAL_PATTERNS.sudanese,
        'sudan': REGIONAL_PATTERNS.sudanese,
        'سودان': REGIONAL_PATTERNS.sudanese,
        'السودان': REGIONAL_PATTERNS.sudanese
    };
    
    const key = regionName.toLowerCase().replace(/[^a-z\u0600-\u06FF]/g, '');
    return regionMap[key] || null;
}

function getAllRegions() {
    return Object.keys(REGIONAL_PATTERNS).map(key => ({
        id: key,
        name: REGIONAL_PATTERNS[key].name,
        arabic: REGIONAL_PATTERNS[key].arabic,
        countries: REGIONAL_PATTERNS[key].countries
    }));
}

module.exports = {
    REGIONAL_PATTERNS,
    GEOGRAPHIC_CORRELATIONS,
    CULTURAL_CONTEXTS,
    getRegionByName,
    getAllRegions
};
    };
    
    modules['./ai_patterns_data.js'] = function(module, exports, require) {
/**
 * AI Patterns Data Module - Smart Name Recommendation System
 * أنماط الذكاء الاصطناعي - نظام التوصية الذكية للأسماء
 */

const AI_RECOMMENDATION_WEIGHTS = {
    digitRoot: {
        weights: {
            1: { leadership: 10, business: 8, partnership: 5, spirituality: 6 },
            2: { leadership: 5, business: 6, partnership: 10, spirituality: 8 },
            3: { leadership: 7, business: 6, partnership: 6, spirituality: 5 },
            4: { leadership: 6, business: 9, partnership: 7, spirituality: 6 },
            5: { leadership: 8, business: 7, partnership: 6, spirituality: 9 },
            6: { leadership: 5, business: 5, partnership: 8, spirituality: 10 },
            7: { leadership: 9, business: 8, partnership: 10, spirituality: 10 },
            8: { leadership: 10, business: 10, partnership: 7, spirituality: 6 },
            9: { leadership: 9, business: 9, partnership: 8, spirituality: 10 }
        },
        descriptions: {
            1: 'Leadership and independence - excellent for ambitious goals',
            2: 'Cooperation and harmony - ideal for partnerships and relationships',
            3: 'Creativity and expression - great for artistic and communicative pursuits',
            4: 'Stability and foundation - excellent for long-term business ventures',
            5: 'Freedom and change - ideal for dynamic and evolving situations',
            6: 'Responsibility and care - excellent for family and community focus',
            7: 'Spirituality and wisdom - ideal for blessed and sacred purposes',
            8: 'Power and abundance - excellent for wealth and success',
            9: 'Completion and humanitarianism - ideal for broad impact'
        }
    },
    element: {
        weights: {
            Fire: { energy: 10, passion: 10, leadership: 9, creativity: 8, stability: 4 },
            Earth: { energy: 6, passion: 4, leadership: 7, creativity: 5, stability: 10 },
            Air: { energy: 7, passion: 6, leadership: 6, creativity: 10, stability: 5 },
            Water: { energy: 8, passion: 7, leadership: 5, creativity: 9, stability: 7 }
        },
        recommendations: {
            Fire: {
                bestFor: ['Leadership roles', 'Entrepreneurship', 'Creative ventures', 'Public speaking'],
                avoid: ['Passive roles', 'Routine work', 'Behind-the-scenes positions'],
                complementaryElements: ['Air'],
                conflictingElements: ['Water']
            },
            Earth: {
                bestFor: ['Finance', 'Real estate', 'Construction', 'Agriculture', 'Banking'],
                avoid: ['High-risk ventures', 'Fast-changing environments', 'Abstract work'],
                complementaryElements: ['Water'],
                conflictingElements: ['Fire']
            },
            Air: {
                bestFor: ['Communication', 'Teaching', 'Writing', 'Technology', 'Networking'],
                avoid: ['Heavy physical work', 'Routine tasks', 'Isolated work'],
                complementaryElements: ['Fire'],
                conflictingElements: ['Earth']
            },
            Water: {
                bestFor: ['Healing', 'Counseling', 'Art', 'Spirituality', 'Family businesses'],
                avoid: ['High-pressure sales', 'Aggressive competition', 'Harsh environments'],
                complementaryElements: ['Earth'],
                conflictingElements: ['Fire']
            }
        }
    },
    planet: {
        weights: {
            Sun: { visibility: 10, leadership: 10, creativity: 8, wealth: 8 },
            Moon: { visibility: 8, leadership: 5, creativity: 9, wealth: 6 },
            Mars: { visibility: 7, leadership: 8, creativity: 6, wealth: 7 },
            Mercury: { visibility: 9, leadership: 6, creativity: 8, wealth: 7 },
            Jupiter: { visibility: 9, leadership: 9, creativity: 7, wealth: 10 },
            Venus: { visibility: 8, leadership: 5, creativity: 10, wealth: 8 },
            Saturn: { visibility: 6, leadership: 7, creativity: 5, wealth: 6 }
        },
        dayRecommendations: {
            Sun: { bestDay: 'Sunday', activities: ['Leadership decisions', 'Public appearances', 'Creative projects'] },
            Moon: { bestDay: 'Monday', activities: ['Family matters', 'Emotional work', 'Intuitive decisions'] },
            Mars: { bestDay: 'Tuesday', activities: ['Physical activities', 'Competition', 'Taking action'] },
            Mercury: { bestDay: 'Wednesday', activities: ['Communication', 'Learning', 'Trade'] },
            Jupiter: { bestDay: 'Thursday', activities: ['Expansion', 'Teaching', 'Spiritual growth', 'Wealth matters'] },
            Venus: { bestDay: 'Friday', activities: ['Relationships', 'Art', 'Beauty', 'Harmony'] },
            Saturn: { bestDay: 'Saturday', activities: ['Planning', 'Discipline', 'Long-term goals'] }
        }
    }
};

const COMPATIBILITY_SCORING = {
    partnerHouse: {
        1: { score: 60, weight: 0.8, note: 'Good start but challenges ahead' },
        2: { score: 60, weight: 0.8, note: 'Wealth potential with complications' },
        3: { score: 30, weight: 1.0, note: 'Family conflicts possible' },
        4: { score: 70, weight: 0.9, note: 'Good wealth, relationship challenges' },
        5: { score: 50, weight: 0.7, note: 'Good for public figures, many children' },
        6: { score: 10, weight: 1.0, note: 'Misfortune but peaceful coexistence' },
        7: { score: 100, weight: 1.0, note: 'Perfect harmony - most blessed' },
        8: { score: 50, weight: 0.7, note: 'Good for scholars, challenging for business' },
        9: { score: 0, weight: 1.0, note: 'Most challenging - avoid if possible' }
    },
    digitRootCompatibility: {
        same: { score: 70, note: 'Strong resonance, similar energies' },
        complementary: {
            pairs: [[1, 8], [2, 7], [3, 6], [4, 9], [5, 5]],
            score: 90,
            note: 'Excellent complementary energies'
        },
        challenging: {
            pairs: [[1, 4], [2, 5], [3, 8], [6, 9], [7, 9]],
            score: 40,
            note: 'Potential friction, requires understanding'
        }
    },
    elementCompatibility: {
        complementary: {
            pairs: [['Fire', 'Air'], ['Earth', 'Water']],
            score: 85,
            note: 'Elements enhance each other'
        },
        same: {
            score: 70,
            note: 'Similar energies, good understanding'
        },
        conflicting: {
            pairs: [['Fire', 'Water'], ['Earth', 'Air']],
            score: 45,
            note: 'Elements clash, requires balance'
        }
    }
};

const NAME_SCORING_FACTORS = {
    length: {
        optimal: { min: 4, max: 7, score: 10 },
        short: { min: 2, max: 3, score: 7 },
        long: { min: 8, max: 12, score: 6 }
    },
    uniqueness: {
        rare: { threshold: 0.1, score: 10 },
        uncommon: { threshold: 0.3, score: 8 },
        common: { threshold: 0.6, score: 5 },
        veryCommon: { threshold: 1.0, score: 3 }
    },
    phonetics: {
        pleasing: {
            patterns: ['ending_in_ا', 'ending_in_ة', 'contains_ين', 'contains_اء'],
            score: 8
        },
        strong: {
            patterns: ['contains_ع', 'contains_ق', 'contains_ح'],
            score: 7
        },
        soft: {
            patterns: ['contains_ي', 'contains_و', 'contains_ن'],
            score: 6
        }
    },
    spiritualWeight: {
        prophetic: { score: 15, note: 'Name of a prophet' },
        sahabi: { score: 12, note: 'Name of a companion' },
        asmaUlHusna: { score: 20, note: 'Divine name match' },
        quranic: { score: 10, note: 'Appears in Quran' }
    }
};

const RECOMMENDATION_ALGORITHMS = {
    nameGeneration: {
        steps: [
            'Analyze target criteria (value, element, purpose)',
            'Filter name database by gender and region',
            'Calculate compatibility scores for each candidate',
            'Apply spiritual and cultural bonuses',
            'Rank by combined score',
            'Return top recommendations with reasoning'
        ],
        weights: {
            targetValueMatch: 0.25,
            elementMatch: 0.15,
            partnerHouse: 0.20,
            spiritualSignificance: 0.15,
            regionalPreference: 0.10,
            phoneticQuality: 0.15
        }
    },
    compatibilityAnalysis: {
        steps: [
            'Calculate digit roots for both names',
            'Determine partnership house',
            'Analyze element compatibility',
            'Check planetary influences',
            'Evaluate spiritual connections',
            'Generate comprehensive compatibility report'
        ],
        weights: {
            partnerHouse: 0.35,
            digitRootHarmony: 0.20,
            elementMatch: 0.15,
            planetaryAlignment: 0.15,
            spiritualConnection: 0.15
        }
    },
    businessOptimization: {
        steps: [
            'Analyze name value and range indicators',
            'Evaluate element for industry suitability',
            'Check planetary influence for timing',
            'Assess growth potential indicators',
            'Consider regional naming conventions',
            'Generate business recommendations'
        ],
        weights: {
            valueRange: 0.20,
            elementIndustryMatch: 0.25,
            planetaryTiming: 0.15,
            growthPotential: 0.20,
            marketResonance: 0.20
        }
    }
};

const INDUSTRY_ELEMENT_MATCHING = {
    technology: {
        bestElements: ['Air', 'Fire'],
        bestPlanets: ['Mercury', 'Uranus'],
        favorableDigitRoots: [1, 3, 5, 8],
        notes: 'Innovation and communication elements favor tech ventures'
    },
    finance: {
        bestElements: ['Earth', 'Water'],
        bestPlanets: ['Jupiter', 'Saturn'],
        favorableDigitRoots: [4, 8, 9],
        notes: 'Stability and abundance elements suit financial services'
    },
    healthcare: {
        bestElements: ['Water', 'Earth'],
        bestPlanets: ['Moon', 'Jupiter'],
        favorableDigitRoots: [2, 6, 7, 9],
        notes: 'Healing and nurturing elements support healthcare'
    },
    education: {
        bestElements: ['Air', 'Fire'],
        bestPlanets: ['Mercury', 'Jupiter'],
        favorableDigitRoots: [3, 5, 7, 9],
        notes: 'Communication and wisdom elements enhance education'
    },
    retail: {
        bestElements: ['Air', 'Fire'],
        bestPlanets: ['Venus', 'Mercury'],
        favorableDigitRoots: [2, 5, 6, 8],
        notes: 'Beauty and trade elements favor retail businesses'
    },
    construction: {
        bestElements: ['Earth', 'Fire'],
        bestPlanets: ['Mars', 'Saturn'],
        favorableDigitRoots: [4, 8],
        notes: 'Building and strength elements support construction'
    },
    hospitality: {
        bestElements: ['Water', 'Air'],
        bestPlanets: ['Venus', 'Moon'],
        favorableDigitRoots: [2, 6, 7],
        notes: 'Nurturing and social elements suit hospitality'
    },
    agriculture: {
        bestElements: ['Earth', 'Water'],
        bestPlanets: ['Moon', 'Venus'],
        favorableDigitRoots: [4, 6, 9],
        notes: 'Growth and fertility elements enhance agriculture'
    },
    consulting: {
        bestElements: ['Air', 'Fire'],
        bestPlanets: ['Mercury', 'Jupiter'],
        favorableDigitRoots: [1, 3, 7, 8],
        notes: 'Wisdom and communication elements favor consulting'
    },
    manufacturing: {
        bestElements: ['Earth', 'Fire'],
        bestPlanets: ['Mars', 'Saturn'],
        favorableDigitRoots: [4, 8],
        notes: 'Production and stability elements support manufacturing'
    }
};

const PHONETIC_PATTERNS = {
    pleasingEndings: {
        'ا': { score: 8, effect: 'Open and expansive', examples: ['عليا', 'سميا', 'هدى'] },
        'ة': { score: 9, effect: 'Feminine and gentle', examples: ['فاطمة', 'خديجة', 'عائشة'] },
        'ين': { score: 7, effect: 'Harmonious and melodic', examples: ['أمين', 'ياسين', 'عدين'] },
        'ان': { score: 7, effect: 'Strong and complete', examples: ['عمران', 'سليمان', 'ريان'] },
        'ى': { score: 8, effect: 'Soft and flowing', examples: ['منى', 'ليلى', 'سلمى'] }
    },
    strongSounds: {
        'ع': { score: 9, effect: 'Deep and authoritative', examples: ['علي', 'عبدالله', 'عمر'] },
        'ق': { score: 8, effect: 'Powerful and decisive', examples: ['عبدالقادر', 'طارق', 'فاروق'] },
        'ح': { score: 7, effect: 'Spiritual and sincere', examples: ['أحمد', 'محمد', 'حسن'] },
        'ص': { score: 7, effect: 'Purity and clarity', examples: ['يوسف', 'عاصم', 'صلاح'] },
        'ض': { score: 8, effect: 'Strength and determination', examples: ['خالد', 'عاضد', 'فضل'] }
    },
    softSounds: {
        'ي': { score: 7, effect: 'Gentle and refined', examples: ['علي', 'حسين', 'يوسف'] },
        'و': { score: 6, effect: 'Flowing and warm', examples: ['داود', 'يوسف', 'عمر'] },
        'ن': { score: 6, effect: 'Smooth and pleasant', examples: ['حسن', 'حسين', 'عمران'] },
        'ل': { score: 6, effect: 'Light and elegant', examples: ['علي', 'لالا', 'عادل'] }
    }
};

const TREND_PATTERNS = {
    modernNaming: {
        characteristics: [
            'Shorter names preferred',
            'Unique spellings',
            'International compatibility',
            'Meaning-focused selection'
        ],
        popularModernNames: [
            'يانا', 'ليان', 'جنى', 'روقا', 'ميرا',
            'أيان', 'ريان', 'جود', 'سديم', 'فارس'
        ]
    },
    traditionalNaming: {
        characteristics: [
            'Family lineage honored',
            'Religious significance prioritized',
            'Longer compound names',
            'Tribal connections maintained'
        ],
        popularTraditionalNames: [
            'محمد', 'أحمد', 'عبدالله', 'عبدالرحمن',
            'فاطمة', 'عائشة', 'خديجة', 'زينب'
        ]
    }
};

function calculateRecommendationScore(name, criteria) {
    const Hisaab = require('./index.js');
    const hisaab = new Hisaab(name);
    
    let totalScore = 0;
    let maxScore = 100;
    let breakdown = {};
    
    if (criteria.targetValue) {
        const diff = Math.abs(hisaab.getValue() - criteria.targetValue);
        const valueScore = Math.max(0, 25 - diff);
        breakdown.targetValue = valueScore;
        totalScore += valueScore;
    }
    
    if (criteria.element) {
        const astrology = hisaab.getArabicAstrology();
        if (astrology.element.name === criteria.element) {
            breakdown.element = 15;
            totalScore += 15;
        } else {
            breakdown.element = 0;
        }
    }
    
    if (criteria.desiredDigitRoot) {
        if (hisaab.getDigitRoot() === criteria.desiredDigitRoot) {
            breakdown.digitRoot = 20;
            totalScore += 20;
        } else {
            breakdown.digitRoot = 0;
        }
    }
    
    if (criteria.gender) {
        breakdown.gender = 10;
        totalScore += 10;
    }
    
    if (criteria.purpose) {
        const digitRoot = hisaab.getDigitRoot();
        const purposeScore = AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[digitRoot][criteria.purpose] || 5;
        breakdown.purpose = purposeScore;
        totalScore += purposeScore;
    }
    
    return {
        name: name,
        value: hisaab.getValue(),
        digitRoot: hisaab.getDigitRoot(),
        totalScore: totalScore,
        maxScore: maxScore,
        percentage: Math.round((totalScore / maxScore) * 100),
        breakdown: breakdown
    };
}

function getIndustryRecommendation(industry) {
    return INDUSTRY_ELEMENT_MATCHING[industry.toLowerCase()] || null;
}

function getElementRecommendation(element) {
    return AI_RECOMMENDATION_WEIGHTS.element.recommendations[element] || null;
}

function getDigitRootRecommendation(digitRoot) {
    return {
        weights: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[digitRoot],
        description: AI_RECOMMENDATION_WEIGHTS.digitRoot.descriptions[digitRoot]
    };
}

module.exports = {
    AI_RECOMMENDATION_WEIGHTS,
    COMPATIBILITY_SCORING,
    NAME_SCORING_FACTORS,
    RECOMMENDATION_ALGORITHMS,
    INDUSTRY_ELEMENT_MATCHING,
    PHONETIC_PATTERNS,
    TREND_PATTERNS,
    calculateRecommendationScore,
    getIndustryRecommendation,
    getElementRecommendation,
    getDigitRootRecommendation
};
    };
    
    modules['./name_database.js'] = function(module, exports, require) {
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
    };
    
    modules['./export_templates_data.js'] = function(module, exports, require) {
/**
 * Export Templates Data Module - Report Generation Templates
 * قوالب التصدير - قوالب إنشاء التقارير
 */

const EXPORT_TEMPLATES = {
    text: {
        name: 'Text Report',
        extension: '.txt',
        mimeType: 'text/plain',
        template: `
═══════════════════════════════════════════════════════════════
                    تقرير حساب الاسم
                 HISAB NAME ANALYSIS REPORT
═══════════════════════════════════════════════════════════════

الاسم: {{name}}
القيمة: {{value}}
الجذر الرقمي: {{digitRoot}}

───────────────────────────────────────────────────────────────
                    التحليل الأساسي
───────────────────────────────────────────────────────────────
{{basicAnalysis}}

───────────────────────────────────────────────────────────────
                    علم الفلك العربي
───────────────────────────────────────────────────────────────
العنصر: {{element}}
الكوكب: {{planet}}
البرج: {{zodiac}}

───────────────────────────────────────────────────────────────
                    التحليل الإسلامي
───────────────────────────────────────────────────────────────
{{islamicAnalysis}}

───────────────────────────────────────────────────────────────
                    التوافق والمشاركة
───────────────────────────────────────────────────────────────
{{compatibility}}

═══════════════════════════════════════════════════════════════
                تم إنشاء هذا التقرير بواسطة حساب
                Generated by Hisaab v{{version}}
═══════════════════════════════════════════════════════════════
`
    },
    json: {
        name: 'JSON Export',
        extension: '.json',
        mimeType: 'application/json',
        structure: {
            metadata: {
                version: '{{version}}',
                generatedAt: '{{timestamp}}',
                generator: 'Hisaab Arabic Numerology Library'
            },
            name: {
                arabic: '{{name}}',
                value: '{{value}}',
                digitRoot: '{{digitRoot}}',
                breakdown: '{{breakdown}}'
            },
            analysis: {
                astrology: '{{astrology}}',
                islamic: '{{islamic}}',
                numerology: '{{numerology}}',
                business: '{{business}}'
            },
            compatibility: '{{compatibility}}',
            recommendations: '{{recommendations}}'
        }
    },
    html: {
        name: 'HTML Report',
        extension: '.html',
        mimeType: 'text/html',
        template: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تقرير حساب - {{name}}</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Amiri', 'Traditional Arabic', serif;
            background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #1a472a 100%);
            min-height: 100vh;
            padding: 20px;
            color: #fff;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255,255,255,0.95);
            border-radius: 15px;
            padding: 30px;
            color: #333;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #1a472a;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1a472a;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .header .subtitle {
            color: #c9a227;
            font-size: 1.2em;
        }
        .section {
            margin-bottom: 25px;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 10px;
            border-right: 4px solid #1a472a;
        }
        .section h2 {
            color: #1a472a;
            margin-bottom: 15px;
            font-size: 1.5em;
        }
        .value-box {
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #1a472a, #c9a227);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .value-box .value {
            font-size: 4em;
            font-weight: bold;
            color: #fff;
        }
        .value-box .label {
            font-size: 1.5em;
            color: #fff;
            margin-right: 15px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .info-item {
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        .info-item .label {
            color: #666;
            font-size: 0.9em;
        }
        .info-item .value {
            color: #1a472a;
            font-size: 1.5em;
            font-weight: bold;
        }
        .breakdown-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .breakdown-table th, .breakdown-table td {
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        .breakdown-table th {
            background: #1a472a;
            color: #fff;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #1a472a;
            color: #666;
        }
        .print-only { display: none; }
        @media print {
            body { background: #fff; }
            .container { box-shadow: none; }
            .print-only { display: block; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{name}}</h1>
            <div class="subtitle">تقرير حساب الاسم</div>
        </div>
        
        <div class="value-box">
            <span class="label">القيمة</span>
            <span class="value">{{value}}</span>
        </div>
        
        <div class="section">
            <h2>📊 التحليل الأساسي</h2>
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">الجذر الرقمي</div>
                    <div class="value">{{digitRoot}}</div>
                </div>
                <div class="info-item">
                    <div class="label">العنصر</div>
                    <div class="value">{{element}}</div>
                </div>
                <div class="info-item">
                    <div class="label">الكوكب</div>
                    <div class="value">{{planet}}</div>
                </div>
                <div class="info-item">
                    <div class="label">البرج</div>
                    <div class="value">{{zodiac}}</div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>📝 تفصيل الحروف</h2>
            <table class="breakdown-table">
                <thead>
                    <tr>
                        <th>الحرف</th>
                        <th>القيمة</th>
                    </tr>
                </thead>
                <tbody>
                    {{breakdownRows}}
                </tbody>
            </table>
        </div>
        
        <div class="section">
            <h2>☪️ التحليل الإسلامي</h2>
            <div>{{islamicAnalysis}}</div>
        </div>
        
        <div class="section">
            <h2>🔮 التوصيات</h2>
            <div>{{recommendations}}</div>
        </div>
        
        <div class="footer">
            <p>تم إنشاء هذا التقرير بواسطة <strong>حساب</strong> - مكتبة حساب الأسماء العربية</p>
            <p>الإصدار {{version}} | {{timestamp}}</p>
        </div>
    </div>
</body>
</html>`
    },
    markdown: {
        name: 'Markdown Report',
        extension: '.md',
        mimeType: 'text/markdown',
        template: `# تقرير حساب الاسم - {{name}}

## 📊 المعلومات الأساسية

| السمة | القيمة |
|-------|--------|
| **الاسم** | {{name}} |
| **القيمة العددية** | {{value}} |
| **الجذر الرقمي** | {{digitRoot}} |

## 🔤 تفصيل الحروف

| الحرف | القيمة |
|-------|--------|
{{breakdownTable}}

## 🌙 علم الفلك العربي

| السمة | القيمة |
|-------|--------|
| **العنصر** | {{element}} |
| **الكوكب** | {{planet}} |
| **البرج** | {{zodiac}} |

## ☪️ التحليل الإسلامي

{{islamicAnalysis}}

## 💼 تحليل الأعمال

{{businessAnalysis}}

## 🔮 التوصيات

{{recommendations}}

---

*تم إنشاء هذا التقرير بواسطة **حساب** v{{version}}*
*تاريخ الإنشاء: {{timestamp}}*
`
    }
};

const REPORT_SECTIONS = {
    basic: {
        title: { arabic: 'المعلومات الأساسية', english: 'Basic Information' },
        fields: ['name', 'value', 'digitRoot', 'classification']
    },
    astrology: {
        title: { arabic: 'علم الفلك العربي', english: 'Arabic Astrology' },
        fields: ['element', 'planet', 'zodiac', 'favorableDay']
    },
    islamic: {
        title: { arabic: 'التحليل الإسلامي', english: 'Islamic Analysis' },
        fields: ['asmaUlHusnaMatch', 'quranicConnection', 'islamicQualities', 'spiritualGuidance']
    },
    compatibility: {
        title: { arabic: 'التوافق', english: 'Compatibility' },
        fields: ['partnerHouse', 'compatibilityLevel', 'recommendations']
    },
    business: {
        title: { arabic: 'تحليل الأعمال', english: 'Business Analysis' },
        fields: ['overallRating', 'recommendedIndustries', 'timingGuidance', 'successIndicators']
    },
    numerology: {
        title: { arabic: 'علم الأرقام', english: 'Numerology' },
        fields: ['masterNumbers', 'karmicDebt', 'hiddenPotential', 'luckyNumbers']
    }
};

const CLIPBOARD_FORMATS = {
    short: {
        template: '{{name}} = {{value}} (الجذر: {{digitRoot}}, العنصر: {{element}})',
        maxLength: 100
    },
    medium: {
        template: `{{name}} | القيمة: {{value}} | الجذر: {{digitRoot}}
العنصر: {{element}} | الكوكب: {{planet}} | البرج: {{zodiac}}
{{islamicQualities}}`,
        maxLength: 500
    },
    detailed: {
        template: `═══════════════════════════
الاسم: {{name}}
القيمة: {{value}}
الجذر الرقمي: {{digitRoot}}
═══════════════════════════
العنصر: {{element}} ({{elementArabic}})
الكوكب: {{planet}} ({{planetArabic}})
البرج: {{zodiac}} ({{zodiacArabic}})
═══════════════════════════
{{islamicAnalysis}}
═══════════════════════════`,
        maxLength: 1000
    }
};

const PDF_PRINT_SETTINGS = {
    pageSettings: {
        format: 'A4',
        orientation: 'portrait',
        margins: {
            top: '20mm',
            bottom: '20mm',
            left: '15mm',
            right: '15mm'
        }
    },
    headerSettings: {
        title: 'تقرير حساب',
        showLogo: true,
        showDate: true
    },
    footerSettings: {
        showPageNumber: true,
        showVersion: true,
        copyrightText: '© Hisaab - Arabic Numerology Library'
    }
};

function generateTextReport(data) {
    const template = EXPORT_TEMPLATES.text.template;
    return template
        .replace(/\{\{name\}\}/g, data.name || '')
        .replace(/\{\{value\}\}/g, data.value || '')
        .replace(/\{\{digitRoot\}\}/g, data.digitRoot || '')
        .replace(/\{\{element\}\}/g, data.element || '')
        .replace(/\{\{planet\}\}/g, data.planet || '')
        .replace(/\{\{zodiac\}\}/g, data.zodiac || '')
        .replace(/\{\{basicAnalysis\}\}/g, data.basicAnalysis || '')
        .replace(/\{\{islamicAnalysis\}\}/g, data.islamicAnalysis || '')
        .replace(/\{\{compatibility\}\}/g, data.compatibility || '')
        .replace(/\{\{version\}\}/g, data.version || '1.4.0');
}

function generateHTMLReport(data) {
    let breakdownRows = '';
    if (data.breakdown && Array.isArray(data.breakdown)) {
        data.breakdown.forEach(item => {
            breakdownRows += `<tr><td>${item.letter}</td><td>${item.value}</td></tr>`;
        });
    }
    
    return EXPORT_TEMPLATES.html.template
        .replace(/\{\{name\}\}/g, data.name || '')
        .replace(/\{\{value\}\}/g, data.value || '')
        .replace(/\{\{digitRoot\}\}/g, data.digitRoot || '')
        .replace(/\{\{element\}\}/g, data.element || '')
        .replace(/\{\{planet\}\}/g, data.planet || '')
        .replace(/\{\{zodiac\}\}/g, data.zodiac || '')
        .replace(/\{\{breakdownRows\}\}/g, breakdownRows)
        .replace(/\{\{islamicAnalysis\}\}/g, data.islamicAnalysis || '')
        .replace(/\{\{recommendations\}\}/g, data.recommendations || '')
        .replace(/\{\{version\}\}/g, data.version || '1.4.0')
        .replace(/\{\{timestamp\}\}/g, new Date().toISOString());
}

function generateJSONExport(data) {
    return JSON.stringify({
        metadata: {
            version: data.version || '1.4.0',
            generatedAt: new Date().toISOString(),
            generator: 'Hisaab Arabic Numerology Library'
        },
        name: {
            arabic: data.name,
            value: data.value,
            digitRoot: data.digitRoot,
            breakdown: data.breakdown
        },
        analysis: {
            astrology: data.astrology,
            islamic: data.islamic,
            numerology: data.numerology,
            business: data.business
        },
        compatibility: data.compatibility,
        recommendations: data.recommendations
    }, null, 2);
}

function generateMarkdownReport(data) {
    let breakdownTable = '';
    if (data.breakdown && Array.isArray(data.breakdown)) {
        data.breakdown.forEach(item => {
            breakdownTable += `| ${item.letter} | ${item.value} |\n`;
        });
    }
    
    return EXPORT_TEMPLATES.markdown.template
        .replace(/\{\{name\}\}/g, data.name || '')
        .replace(/\{\{value\}\}/g, data.value || '')
        .replace(/\{\{digitRoot\}\}/g, data.digitRoot || '')
        .replace(/\{\{element\}\}/g, data.element || '')
        .replace(/\{\{planet\}\}/g, data.planet || '')
        .replace(/\{\{zodiac\}\}/g, data.zodiac || '')
        .replace(/\{\{breakdownTable\}\}/g, breakdownTable)
        .replace(/\{\{islamicAnalysis\}\}/g, data.islamicAnalysis || '')
        .replace(/\{\{businessAnalysis\}\}/g, data.businessAnalysis || '')
        .replace(/\{\{recommendations\}\}/g, data.recommendations || '')
        .replace(/\{\{version\}\}/g, data.version || '1.4.0')
        .replace(/\{\{timestamp\}\}/g, new Date().toISOString());
}

function generateClipboardText(data, format = 'medium') {
    const template = CLIPBOARD_FORMATS[format] || CLIPBOARD_FORMATS.medium;
    return template.template
        .replace(/\{\{name\}\}/g, data.name || '')
        .replace(/\{\{value\}\}/g, data.value || '')
        .replace(/\{\{digitRoot\}\}/g, data.digitRoot || '')
        .replace(/\{\{element\}\}/g, data.element || '')
        .replace(/\{\{elementArabic\}\}/g, data.elementArabic || '')
        .replace(/\{\{planet\}\}/g, data.planet || '')
        .replace(/\{\{planetArabic\}\}/g, data.planetArabic || '')
        .replace(/\{\{zodiac\}\}/g, data.zodiac || '')
        .replace(/\{\{zodiacArabic\}\}/g, data.zodiacArabic || '')
        .replace(/\{\{islamicQualities\}\}/g, data.islamicQualities || '')
        .replace(/\{\{islamicAnalysis\}\}/g, data.islamicAnalysis || '');
}

function getAvailableFormats() {
    return Object.keys(EXPORT_TEMPLATES).map(key => ({
        id: key,
        name: EXPORT_TEMPLATES[key].name,
        extension: EXPORT_TEMPLATES[key].extension,
        mimeType: EXPORT_TEMPLATES[key].mimeType
    }));
}

module.exports = {
    EXPORT_TEMPLATES,
    REPORT_SECTIONS,
    CLIPBOARD_FORMATS,
    PDF_PRINT_SETTINGS,
    generateTextReport,
    generateHTMLReport,
    generateJSONExport,
    generateMarkdownReport,
    generateClipboardText,
    getAvailableFormats
};
    };
    
    modules['./historical_names_data.js'] = function(module, exports, require) {
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
    };
    
    modules['./sahaba_names_data.js'] = function(module, exports, require) {
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
    };
    
    modules['./hijri_calendar_data.js'] = function(module, exports, require) {
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
    };
    
    modules['./visualization_data.js'] = function(module, exports, require) {
/**
 * Visualization Data Module - Chart Configurations for Hisaab
 * وحدة بيانات التصور - تكوينات الرسوم البيانية
 */

const CHART_COLORS = {
    elements: {
        Fire: '#ef4444',
        Earth: '#84cc16',
        Air: '#06b6d4',
        Water: '#3b82f6'
    },
    planets: {
        Sun: '#fbbf24',
        Moon: '#94a3b8',
        Mars: '#dc2626',
        Mercury: '#06b6d4',
        Jupiter: '#8b5cf6',
        Venus: '#ec4899',
        Saturn: '#64748b'
    },
    compatibility: {
        excellent: '#22c55e',
        good: '#84cc16',
        neutral: '#fbbf24',
        challenging: '#f97316',
        bad: '#ef4444'
    },
    digitRoots: {
        1: '#ef4444',
        2: '#f97316',
        3: '#fbbf24',
        4: '#84cc16',
        5: '#22c55e',
        6: '#06b6d4',
        7: '#3b82f6',
        8: '#8b5cf6',
        9: '#a855f7'
    },
    primary: '#1e6b3e',
    secondary: '#d4af37',
    accent: '#1e3a8a'
};

const CHART_CONFIGS = {
    compatibilityRadar: {
        type: 'radar',
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        },
        labels: ['Partnership', 'Spirituality', 'Business', 'Leadership', 'Creativity', 'Stability']
    },
    
    elementPie: {
        type: 'pie',
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    },
    
    digitRootBar: {
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    },
    
    compatibilityGauge: {
        type: 'doughnut',
        options: {
            responsive: true,
            circumference: 180,
            rotation: -90,
            plugins: {
                legend: { display: false }
            }
        }
    },
    
    familyTree: {
        type: 'bar',
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            }
        }
    }
};

function generateCompatibilityRadarData(name1Analysis, name2Analysis) {
    return {
        labels: CHART_CONFIGS.compatibilityRadar.labels,
        datasets: [
            {
                label: name1Analysis.name,
                data: [
                    name1Analysis.digitRootScores?.partnership || 50,
                    name1Analysis.digitRootScores?.spirituality || 50,
                    name1Analysis.digitRootScores?.business || 50,
                    name1Analysis.digitRootScores?.leadership || 50,
                    name1Analysis.digitRootScores?.creativity || 50,
                    name1Analysis.digitRootScores?.stability || 50
                ],
                backgroundColor: 'rgba(30, 107, 62, 0.2)',
                borderColor: CHART_COLORS.primary,
                borderWidth: 2
            },
            {
                label: name2Analysis?.name || 'Partner',
                data: [
                    name2Analysis?.digitRootScores?.partnership || 50,
                    name2Analysis?.digitRootScores?.spirituality || 50,
                    name2Analysis?.digitRootScores?.business || 50,
                    name2Analysis?.digitRootScores?.leadership || 50,
                    name2Analysis?.digitRootScores?.creativity || 50,
                    name2Analysis?.digitRootScores?.stability || 50
                ],
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: CHART_COLORS.secondary,
                borderWidth: 2
            }
        ]
    };
}

function generateElementPieData(analyses) {
    const elementCounts = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
    
    analyses.forEach(a => {
        if (a.element && elementCounts.hasOwnProperty(a.element)) {
            elementCounts[a.element]++;
        }
    });
    
    return {
        labels: ['Fire (النار)', 'Earth (التراب)', 'Air (الهواء)', 'Water (الماء)'],
        datasets: [{
            data: Object.values(elementCounts),
            backgroundColor: [
                CHART_COLORS.elements.Fire,
                CHART_COLORS.elements.Earth,
                CHART_COLORS.elements.Air,
                CHART_COLORS.elements.Water
            ],
            borderWidth: 2
        }]
    };
}

function generateDigitRootBarData(analyses) {
    const rootCounts = {};
    for (let i = 1; i <= 9; i++) rootCounts[i] = 0;
    
    analyses.forEach(a => {
        if (a.digitRoot) {
            rootCounts[a.digitRoot]++;
        }
    });
    
    return {
        labels: Object.keys(rootCounts).map(r => `Root ${r}`),
        datasets: [{
            label: 'Count',
            data: Object.values(rootCounts),
            backgroundColor: Object.keys(rootCounts).map(r => CHART_COLORS.digitRoots[r]),
            borderWidth: 1
        }]
    };
}

function generateCompatibilityGaugeData(score) {
    return {
        labels: ['Compatibility'],
        datasets: [{
            data: [score, 100 - score],
            backgroundColor: [
                score >= 70 ? CHART_COLORS.compatibility.excellent :
                score >= 50 ? CHART_COLORS.compatibility.good :
                score >= 30 ? CHART_COLORS.compatibility.neutral :
                CHART_COLORS.compatibility.challenging,
                '#e2e8f0'
            ],
            borderWidth: 0
        }]
    };
}

function generateFamilyTreeBarData(members) {
    return {
        labels: members.map(m => m.name),
        datasets: [{
            label: 'Abjad Value',
            data: members.map(m => m.value),
            backgroundColor: members.map(m => 
                CHART_COLORS.elements[m.element] || CHART_COLORS.primary
            ),
            borderWidth: 1
        }]
    };
}

function generatePartnerHouseChart(name1, name2, house) {
    const houseData = [];
    for (let h = 1; h <= 9; h++) {
        houseData.push(h === house ? 100 : 20);
    }
    
    return {
        labels: ['House 1', 'House 2', 'House 3', 'House 4', 'House 5', 'House 6', 'House 7', 'House 8', 'House 9'],
        datasets: [{
            label: `${name1} + ${name2}`,
            data: houseData,
            backgroundColor: houseData.map((v, i) => 
                i + 1 === house ? 
                    (house === 7 ? CHART_COLORS.compatibility.excellent : 
                     house === 4 ? CHART_COLORS.compatibility.good :
                     CHART_COLORS.compatibility.neutral) :
                    '#e2e8f0'
            ),
            borderWidth: 1
        }]
    };
}

function generateRegionalComparisonChart(comparisons) {
    return {
        labels: comparisons.map(c => c.regionArabic),
        datasets: [{
            label: 'Compatibility Score',
            data: comparisons.map(c => c.compatibility),
            backgroundColor: comparisons.map(c => 
                c.isFavored ? CHART_COLORS.compatibility.excellent :
                c.compatibility >= 60 ? CHART_COLORS.compatibility.good :
                c.compatibility >= 40 ? CHART_COLORS.compatibility.neutral :
                CHART_COLORS.compatibility.challenging
            ),
            borderWidth: 1
        }]
    };
}

function generateTimelineData(years, values) {
    return {
        labels: years,
        datasets: [{
            label: 'Numerological Journey',
            data: values,
            borderColor: CHART_COLORS.primary,
            backgroundColor: 'rgba(30, 107, 62, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };
}

function getChartConfig(type, customOptions = {}) {
    const baseConfig = CHART_CONFIGS[type];
    if (!baseConfig) return null;
    
    return {
        ...baseConfig,
        options: {
            ...baseConfig.options,
            ...customOptions
        }
    };
}

function getChartColors() {
    return CHART_COLORS;
}

module.exports = {
    CHART_COLORS,
    CHART_CONFIGS,
    generateCompatibilityRadarData,
    generateElementPieData,
    generateDigitRootBarData,
    generateCompatibilityGaugeData,
    generateFamilyTreeBarData,
    generatePartnerHouseChart,
    generateRegionalComparisonChart,
    generateTimelineData,
    getChartConfig,
    getChartColors
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
const { REGIONAL_PATTERNS, GEOGRAPHIC_CORRELATIONS, CULTURAL_CONTEXTS: REGIONAL_CULTURAL_CONTEXTS, getRegionByName } = require('./regional_patterns_data.js');
const { AI_RECOMMENDATION_WEIGHTS, COMPATIBILITY_SCORING, NAME_SCORING_FACTORS, RECOMMENDATION_ALGORITHMS, INDUSTRY_ELEMENT_MATCHING, PHONETIC_PATTERNS, calculateRecommendationScore, getIndustryRecommendation, getElementRecommendation, getDigitRootRecommendation } = require('./ai_patterns_data.js');
const { ARABIC_NAME_DATABASE, NAME_VARIATIONS, NAME_PAIRS_COMPATIBLE, searchNames, getNameInfo, getRandomNames, getNamesByOrigin, getQuranicNames, getPropheticNames, getSahabaNames, getNameCount } = require('./name_database.js');
const { EXPORT_TEMPLATES, REPORT_SECTIONS, CLIPBOARD_FORMATS, generateTextReport, generateHTMLReport, generateJSONExport, generateMarkdownReport, generateClipboardText, getAvailableFormats } = require('./export_templates_data.js');
const { HISTORICAL_FIGURES, NAME_HISTORICAL_EVENTS, findHistoricalFigures, getFiguresByCategory, getHistoricalEvents } = require('./historical_names_data.js');
const { SAHABA_DATABASE, SAHABA_BY_LINEAGE, SAHABA_VIRTUES_INDEX, getSahabaByName, getSahabaByTitle, getAsharaMubashara, getProminentSahaba, getSahabiyat, isSahabaName, getSahabaCount } = require('./sahaba_names_data.js');
const { HIJRI_MONTHS, BLESSED_DAYS, ISLAMIC_EVENTS, gregorianToHijri, hijriToGregorian, getCurrentHijriDate, getHijriMonthInfo, getMonthByName, getBlessedDaysInMonth, isBlessedDay, getHolyMonths, isHolyMonth, getRamadanInfo, getHajjMonths, getIslamicYearSignificance, getDaysInHijriMonth, getUpcomingBlessedDay } = require('./hijri_calendar_data.js');
const { CHART_COLORS, CHART_CONFIGS, generateCompatibilityRadarData, generateElementPieData, generateDigitRootBarData, generateCompatibilityGaugeData, generateFamilyTreeBarData, generatePartnerHouseChart, generateRegionalComparisonChart, generateTimelineData, getChartConfig, getChartColors } = require('./visualization_data.js');

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

    // ============================================
    // v1.4.0 - Geographic & Regional Analysis
    // ============================================

    /**
     * Get regional pattern analysis for this name
     * @param {string} region - Region name (gulf, levantine, northAfrican, iraqi, yemeni, sudanese)
     * @returns {Object} Regional pattern analysis
     */
    getRegionalPattern(region) {
        const regionData = getRegionByName(region);
        if (!regionData) {
            return { error: 'Region not found', availableRegions: ['gulf', 'levantine', 'northAfrican', 'iraqi', 'yemeni', 'sudanese'] };
        }

        const digitRoot = this.getDigitRoot();
        const favoredRoots = regionData.numerologicalPreferences.favoredDigitRoots;
        const avoidedRoots = regionData.numerologicalPreferences.avoidedDigitRoots;

        const isFavored = favoredRoots.includes(digitRoot);
        const isAvoided = avoidedRoots.includes(digitRoot);

        const nameInfo = getNameInfo(this.name);

        return {
            region: {
                name: regionData.name,
                arabic: regionData.arabic,
                countries: regionData.countries
            },
            name: this.name,
            value: this.value,
            digitRoot: digitRoot,
            regionalCompatibility: {
                isFavored: isFavored,
                isAvoided: isAvoided,
                score: isFavored ? 90 : (isAvoided ? 30 : 60)
            },
            culturalNotes: regionData.culturalNotes,
            namingPatterns: regionData.namingPatterns,
            regionalPreferences: regionData.numerologicalPreferences,
            commonNamesInRegion: nameInfo ? regionData.commonNames[nameInfo.gender || 'male'].filter(n => n.name === this.name) : []
        };
    }

    /**
     * Get geographic influence analysis
     * @returns {Object} Geographic influence data
     */
    getGeographicInfluence() {
        const element = this.getArabicAstrology().element.name;
        const geoCorrelations = GEOGRAPHIC_CORRELATIONS.elements;

        let matchedGeo = null;
        for (const [geoType, data] of Object.entries(geoCorrelations)) {
            if (data.favoredElements.includes(element)) {
                matchedGeo = { type: geoType, ...data };
                break;
            }
        }

        const planetInfluence = GEOGRAPHIC_CORRELATIONS.planetary.byRegion;

        return {
            element: element,
            geographicMatch: matchedGeo,
            planetaryByRegion: planetInfluence
        };
    }

    /**
     * Compare name variants across regions
     * @returns {Object} Regional variants comparison
     */
    compareRegionalVariants() {
        const regions = ['gulf', 'levantine', 'northAfrican', 'iraqi', 'yemeni', 'sudanese'];
        const comparisons = regions.map(region => {
            const pattern = this.getRegionalPattern(region);
            return {
                region: region,
                regionArabic: pattern.region?.arabic || region,
                compatibility: pattern.regionalCompatibility?.score || 0,
                isFavored: pattern.regionalCompatibility?.isFavored || false
            };
        });

        return {
            name: this.name,
            value: this.value,
            comparisons: comparisons,
            bestRegion: comparisons.reduce((a, b) => a.compatibility > b.compatibility ? a : b)
        };
    }

    /**
     * Get cultural significance in specific country
     * @param {string} country - Country name
     * @returns {Object} Cultural significance data
     */
    getCulturalSignificance(country) {
        const nameInfo = getNameInfo(this.name);
        const historical = findHistoricalFigures(this.name);
        const sahabi = getSahabaByName(this.name);

        return {
            name: this.name,
            country: country,
            nameInfo: nameInfo,
            historicalFigures: historical,
            isSahabi: sahabi !== null,
            sahabiInfo: sahabi,
            culturalContext: REGIONAL_CULTURAL_CONTEXTS
        };
    }

    // ============================================
    // v1.4.0 - AI-Powered Features
    // ============================================

    /**
     * Get smart name recommendations based on criteria
     * @param {Object} criteria - Recommendation criteria
     * @returns {Object} Smart recommendations
     */
    static getSmartRecommendations(criteria = {}) {
        const {
            gender = null,
            desiredDigitRoot = null,
            purpose = null,
            region = null,
            industry = null,
            maxResults = 20
        } = criteria;

        let namePool = [];
        if (gender) {
            namePool = ARABIC_NAME_DATABASE[gender] || [];
        } else {
            namePool = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female];
        }

        const recommendations = namePool.map(entry => {
            try {
                const hisaab = new Hisaab(entry.name);
                let score = 0;
                let reasons = [];

                if (desiredDigitRoot !== null) {
                    if (hisaab.getDigitRoot() === desiredDigitRoot) {
                        score += 40;
                        reasons.push(`Perfect digit root match: ${desiredDigitRoot}`);
                    }
                }

                if (purpose) {
                    const digitRoot = hisaab.getDigitRoot();
                    const purposeScore = AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[digitRoot]?.[purpose] || 0;
                    if (purposeScore > 0) {
                        score += purposeScore;
                        reasons.push(`Good for ${purpose}: score ${purposeScore}`);
                    }
                }

                if (industry) {
                    const industryMatch = getIndustryRecommendation(industry);
                    if (industryMatch) {
                        const element = hisaab.getArabicAstrology().element.name;
                        if (industryMatch.bestElements.includes(element)) {
                            score += 25;
                            reasons.push(`Element ${element} matches industry ${industry}`);
                        }
                    }
                }

                if (entry.quranic) {
                    score += 10;
                    reasons.push('Quranic name');
                }
                if (entry.prophetic) {
                    score += 15;
                    reasons.push('Prophetic name');
                }
                if (entry.sahabi) {
                    score += 12;
                    reasons.push('Sahaba name');
                }

                return {
                    name: entry.name,
                    meaning: entry.meaning,
                    value: hisaab.getValue(),
                    digitRoot: hisaab.getDigitRoot(),
                    element: hisaab.getArabicAstrology().element.name,
                    score: score,
                    reasons: reasons,
                    attributes: {
                        quranic: entry.quranic || false,
                        prophetic: entry.prophetic || false,
                        sahabi: entry.sahabi || false
                    }
                };
            } catch (e) {
                return null;
            }
        }).filter(r => r !== null && r.score > 0);

        recommendations.sort((a, b) => b.score - a.score);

        return {
            criteria: criteria,
            totalConsidered: namePool.length,
            recommendations: recommendations.slice(0, maxResults)
        };
    }

    /**
     * Generate compatible names for a partner
     * @param {string} partnerName - Partner name to match
     * @param {Object} options - Options for generation
     * @returns {Object} Compatible name suggestions
     */
    static generateCompatibleNames(partnerName, options = {}) {
        const { gender = null, targetHouse = 7, maxResults = 15 } = options;

        const partner = new Hisaab(partnerName);
        const partnerRoot = partner.getDigitRoot();

        const targetRoots = [];
        for (let root = 1; root <= 9; root++) {
            const sum = partnerRoot + root + 7;
            const house = new Hisaab('محمد').calculateDigitRoot(sum);
            if (house === targetHouse) {
                targetRoots.push(root);
            }
        }

        let namePool = gender ? (ARABIC_NAME_DATABASE[gender] || []) : [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female];

        const suggestions = namePool
            .map(entry => {
                try {
                    const h = new Hisaab(entry.name);
                    if (targetRoots.includes(h.getDigitRoot())) {
                        const comp = Hisaab.compareArabic(partnerName, entry.name);
                        return {
                            name: entry.name,
                            meaning: entry.meaning,
                            value: h.getValue(),
                            digitRoot: h.getDigitRoot(),
                            partnerHouse: comp.partnerHouse,
                            compatibility: comp.interpretation.quality
                        };
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            })
            .filter(s => s !== null)
            .slice(0, maxResults);

        return {
            partnerName: partnerName,
            partnerDigitRoot: partnerRoot,
            targetHouse: targetHouse,
            targetDigitRoots: targetRoots,
            suggestions: suggestions
        };
    }

    /**
     * Get AI-optimized business name suggestions
     * @param {string} industry - Industry type
     * @returns {Object} Business name recommendations
     */
    static optimizeBusinessNames(industry, maxResults = 10) {
        const industryMatch = getIndustryRecommendation(industry);
        if (!industryMatch) {
            return { error: 'Industry not found', availableIndustries: Object.keys(INDUSTRY_ELEMENT_MATCHING) };
        }

        const allNames = [...ARABIC_NAME_DATABASE.male, ...ARABIC_NAME_DATABASE.female];
        const suggestions = allNames
            .map(entry => {
                try {
                    const h = new Hisaab(entry.name);
                    const element = h.getArabicAstrology().element.name;
                    const digitRoot = h.getDigitRoot();

                    let score = 0;
                    if (industryMatch.bestElements.includes(element)) score += 30;
                    if (industryMatch.favorableDigitRoots.includes(digitRoot)) score += 20;
                    if (entry.quranic) score += 5;
                    if (h.value > 500) score += 10;

                    return {
                        name: entry.name,
                        value: h.getValue(),
                        digitRoot: digitRoot,
                        element: element,
                        industryScore: score,
                        industryMatch: industryMatch
                    };
                } catch (e) {
                    return null;
                }
            })
            .filter(s => s !== null && s.industryScore > 0)
            .sort((a, b) => b.industryScore - a.industryScore)
            .slice(0, maxResults);

        return {
            industry: industry,
            industryRequirements: industryMatch,
            suggestions: suggestions
        };
    }

    /**
     * Analyze naming trends
     * @returns {Object} Trend analysis
     */
    static analyzeNamingTrends() {
        const maleNames = ARABIC_NAME_DATABASE.male;
        const femaleNames = ARABIC_NAME_DATABASE.female;

        const maleValues = maleNames.map(n => {
            try { return new Hisaab(n.name).getValue(); } catch { return 0; }
        });
        const femaleValues = femaleNames.map(n => {
            try { return new Hisaab(n.name).getValue(); } catch { return 0; }
        });

        const avgMale = maleValues.reduce((a, b) => a + b, 0) / maleValues.length;
        const avgFemale = femaleValues.reduce((a, b) => a + b, 0) / femaleValues.length;

        const quranicCount = [...maleNames, ...femaleNames].filter(n => n.quranic).length;
        const propheticCount = [...maleNames, ...femaleNames].filter(n => n.prophetic).length;
        const sahabiCount = [...maleNames, ...femaleNames].filter(n => n.sahabi || n.sahabia).length;

        return {
            databaseStats: getNameCount(),
            averageValues: { male: Math.round(avgMale), female: Math.round(avgFemale) },
            spiritualNames: {
                quranic: quranicCount,
                prophetic: propheticCount,
                sahabi: sahabiCount
            },
            trends: {
                modern: 'Shorter names with international appeal',
                traditional: 'Classic prophetic and sahabi names remain popular'
            }
        };
    }

    // ============================================
    // v1.4.0 - Export & Reporting
    // ============================================

    /**
     * Export analysis in specified format
     * @param {string} format - Export format (text, json, html, markdown)
     * @returns {string} Formatted report
     */
    exportAnalysis(format = 'json') {
        const data = {
            name: this.name,
            value: this.value,
            digitRoot: this.getDigitRoot(),
            breakdown: this.getBreakdown(),
            element: this.getArabicAstrology().element.name,
            planet: this.getArabicAstrology().planet.name,
            zodiac: this.getArabicAstrology().zodiac.name,
            astrology: this.getArabicAstrology(),
            islamic: this.getIslamicAnalysis(),
            numerology: this.getNumerology(),
            business: this.getBusinessAnalysis(),
            recommendations: this.getLuckyNumbers(),
            version: '1.4.0'
        };

        switch (format.toLowerCase()) {
            case 'text':
                return generateTextReport(data);
            case 'html':
                return generateHTMLReport(data);
            case 'markdown':
            case 'md':
                return generateMarkdownReport(data);
            case 'json':
            default:
                return generateJSONExport(data);
        }
    }

    /**
     * Generate shareable report
     * @returns {Object} Shareable report object
     */
    generateShareableReport() {
        return {
            metadata: {
                generatedAt: new Date().toISOString(),
                version: '1.4.0',
                generator: 'Hisaab Arabic Numerology Library'
            },
            summary: {
                name: this.name,
                value: this.value,
                digitRoot: this.getDigitRoot()
            },
            astrology: this.getArabicAstrology(),
            islamic: this.getIslamicAnalysis(),
            business: this.getBusinessAnalysis(),
            compatibility: this.compareWith ? this.compareWith : null
        };
    }

    /**
     * Get clipboard text for sharing
     * @param {string} format - Format (short, medium, detailed)
     * @returns {string} Clipboard-ready text
     */
    getClipboardText(format = 'medium') {
        const data = {
            name: this.name,
            value: this.value,
            digitRoot: this.getDigitRoot(),
            element: this.getArabicAstrology().element.name,
            elementArabic: this.getArabicAstrology().element.arabic,
            planet: this.getArabicAstrology().planet.name,
            planetArabic: this.getArabicAstrology().planet.arabic,
            zodiac: this.getArabicAstrology().zodiac.name,
            zodiacArabic: this.getArabicAstrology().zodiac.arabic,
            islamicQualities: this.getIslamicQualities().join(', '),
            islamicAnalysis: ''
        };
        return generateClipboardText(data, format);
    }

    // ============================================
    // v1.4.0 - Historical & Educational
    // ============================================

    /**
     * Get historical context for the name
     * @returns {Object} Historical context
     */
    getHistoricalContext() {
        const figures = findHistoricalFigures(this.name);
        const events = getHistoricalEvents(this.name);
        const sahabi = getSahabaByName(this.name);
        const nameInfo = getNameInfo(this.name);

        return {
            name: this.name,
            nameInfo: nameInfo,
            historicalFigures: figures,
            sahabiInfo: sahabi,
            historicalEvents: events,
            significance: figures.length > 0 ? figures[0].significance : (sahabi ? sahabi.title : null)
        };
    }

    /**
     * Find famous personalities with this name
     * @returns {Object} Famous personalities
     */
    findFamousPersonalities() {
        const figures = findHistoricalFigures(this.name);
        const categories = {};

        figures.forEach(f => {
            if (!categories[f.category]) categories[f.category] = [];
            categories[f.category].push(f);
        });

        return {
            name: this.name,
            categories: categories,
            totalFigures: figures.length
        };
    }

    /**
     * Get prophetic connection
     * @returns {Object} Prophetic connection data
     */
    getPropheticConnection() {
        const nameInfo = getNameInfo(this.name);
        const propheticNames = getPropheticNames();
        const isProphetic = propheticNames.some(n => n.name === this.name);

        return {
            name: this.name,
            isPropheticName: isProphetic,
            nameInfo: nameInfo,
            propheticNames: isProphetic ? nameInfo : null
        };
    }

    /**
     * Get Sahaba (Companion) info for the name
     * @returns {Object} Sahaba information
     */
    getSahabaInfo() {
        const sahabi = getSahabaByName(this.name);
        const isSahaba = isSahabaName(this.name);

        return {
            name: this.name,
            isSahaba: isSahaba,
            sahabiInfo: sahabi,
            asharaMubashara: sahabi && SAHABA_DATABASE.asharaMubashara.some(s => s.name === this.name)
        };
    }

    // ============================================
    // v1.4.0 - Hijri Calendar Integration
    // ============================================

    /**
     * Get Hijri date for a given Gregorian date
     * @param {number} year - Gregorian year
     * @param {number} month - Gregorian month (1-12)
     * @param {number} day - Gregorian day
     * @returns {Object} Hijri date
     */
    static toHijri(year, month, day) {
        return gregorianToHijri(year, month, day);
    }

    /**
     * Get Gregorian date for a given Hijri date
     * @param {number} year - Hijri year
     * @param {number} month - Hijri month (1-12)
     * @param {number} day - Hijri day
     * @returns {Object} Gregorian date
     */
    static toGregorian(year, month, day) {
        return hijriToGregorian(year, month, day);
    }

    /**
     * Get current Hijri date
     * @returns {Object} Current Hijri date
     */
    static getCurrentHijri() {
        const hijri = getCurrentHijriDate();
        const monthInfo = getHijriMonthInfo(hijri.month);
        return {
            ...hijri,
            monthName: monthInfo?.arabic,
            monthNameEnglish: monthInfo?.name,
            isHolyMonth: isHolyMonth(hijri.month)
        };
    }

    /**
     * Get blessed dates for a Hijri year
     * @param {number} year - Hijri year
     * @returns {Object} Blessed dates in the year
     */
    static getBlessedDates(year) {
        const blessedDates = [];

        HIJRI_MONTHS.forEach(month => {
            month.blessedDays.forEach(day => {
                blessedDates.push({
                    hijriDate: { year, month: month.number, day },
                    monthName: month.arabic,
                    significance: month.significance
                });
            });
        });

        const yearlyEvents = BLESSED_DAYS.yearly;

        return {
            year: year,
            blessedDates: blessedDates,
            yearlyEvents: yearlyEvents
        };
    }

    /**
     * Get monthly recommendations for Hijri month
     * @param {number} month - Hijri month number
     * @returns {Object} Monthly recommendations
     */
    static getMonthlyRecommendations(month) {
        const monthInfo = getHijriMonthInfo(month);
        if (!monthInfo) return { error: 'Invalid month number' };

        return {
            month: month,
            arabic: monthInfo.arabic,
            english: monthInfo.name,
            significance: monthInfo.significance,
            blessedDays: monthInfo.blessedDays,
            recommended: monthInfo.recommended,
            historicalEvents: monthInfo.historicalEvents
        };
    }

    /**
     * Get timing recommendations based on name's planetary influence
     * @returns {Object} Timing recommendations
     */
    getTimingRecommendations() {
        const astrology = this.getArabicAstrology();
        const planet = astrology.planet.name;
        const digitRoot = this.getDigitRoot();

        const todayHijri = getCurrentHijriDate();
        const monthInfo = getHijriMonthInfo(todayHijri.month);

        return {
            name: this.name,
            planet: planet,
            favorableDay: astrology.planet.favorableDay,
            hijriDate: todayHijri,
            currentMonth: monthInfo?.arabic,
            monthRecommendations: monthInfo?.recommended || [],
            digitRootTiming: getDigitRootRecommendation(digitRoot)
        };
    }

    // ============================================
    // v1.4.0 - Group & Family Analysis
    // ============================================

    /**
     * Analyze family tree numerology
     * @param {Array} members - Family member names
     * @returns {Object} Family tree analysis
     */
    static analyzeFamilyTree(members) {
        const analyses = members.map(name => {
            try {
                const h = new Hisaab(name);
                return {
                    name: name,
                    value: h.getValue(),
                    digitRoot: h.getDigitRoot(),
                    element: h.getArabicAstrology().element.name,
                    planet: h.getArabicAstrology().planet.name
                };
            } catch (e) {
                return { name: name, error: 'Invalid name' };
            }
        });

        const validAnalyses = analyses.filter(a => !a.error);

        const elementCounts = {};
        validAnalyses.forEach(a => {
            elementCounts[a.element] = (elementCounts[a.element] || 0) + 1;
        });

        const rootCounts = {};
        validAnalyses.forEach(a => {
            rootCounts[a.digitRoot] = (rootCounts[a.digitRoot] || 0) + 1;
        });

        return {
            members: analyses,
            totalMembers: members.length,
            validMembers: validAnalyses.length,
            elementDistribution: elementCounts,
            digitRootDistribution: rootCounts,
            dominantElement: Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0]?.[0],
            dominantRoot: Object.entries(rootCounts).sort((a, b) => b[1] - a[1])[0]?.[0]
        };
    }

    /**
     * Get group compatibility score
     * @param {Array} names - Array of names
     * @returns {Object} Group compatibility analysis
     */
    static getGroupCompatibility(names) {
        if (names.length < 2) {
            return { error: 'At least 2 names required' };
        }

        const pairs = [];
        for (let i = 0; i < names.length; i++) {
            for (let j = i + 1; j < names.length; j++) {
                const comp = Hisaab.compareArabic(names[i], names[j]);
                pairs.push({
                    name1: names[i],
                    name2: names[j],
                    house: comp.partnerHouse,
                    quality: comp.interpretation.quality
                });
            }
        }

        const houseCounts = {};
        pairs.forEach(p => {
            houseCounts[p.house] = (houseCounts[p.house] || 0) + 1;
        });

        const avgScore = pairs.reduce((sum, p) => {
            const score = p.house === 7 ? 100 : (p.house === 4 || p.house === 2 ? 70 : (p.house === 6 || p.house === 9 ? 10 : 50));
            return sum + score;
        }, 0) / pairs.length;

        return {
            names: names,
            totalPairs: pairs.length,
            pairs: pairs,
            houseDistribution: houseCounts,
            averageScore: Math.round(avgScore),
            harmonyLevel: avgScore >= 70 ? 'Excellent' : (avgScore >= 50 ? 'Good' : 'Challenging')
        };
    }

    // ============================================
    // v1.5.0 - Visualization & Charts
    // ============================================

    /**
     * Generate compatibility radar chart data
     * @param {string} otherName - Partner name for comparison
     * @returns {Object} Radar chart data for Chart.js
     */
    generateCompatibilityChart(otherName) {
        const other = typeof otherName === 'string' ? new Hisaab(otherName) : otherName;
        
        const myRoot = this.getDigitRoot();
        const otherRoot = other.getDigitRoot();
        
        const myScores = {
            partnership: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[myRoot]?.partnership || 50,
            spirituality: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[myRoot]?.spirituality || 50,
            business: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[myRoot]?.business || 50,
            leadership: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[myRoot]?.leadership || 50,
            creativity: 50 + (myRoot * 5),
            stability: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[myRoot]?.business || 50
        };
        
        const otherScores = {
            partnership: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[otherRoot]?.partnership || 50,
            spirituality: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[otherRoot]?.spirituality || 50,
            business: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[otherRoot]?.business || 50,
            leadership: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[otherRoot]?.leadership || 50,
            creativity: 50 + (otherRoot * 5),
            stability: AI_RECOMMENDATION_WEIGHTS.digitRoot.weights[otherRoot]?.business || 50
        };
        
        return generateCompatibilityRadarData(
            { name: this.name, digitRootScores: myScores },
            { name: other.name, digitRootScores: otherScores }
        );
    }

    /**
     * Generate element distribution pie chart data
     * @param {Array} names - Array of names to analyze
     * @returns {Object} Pie chart data for Chart.js
     */
    static generateElementChart(names) {
        const analyses = names.map(n => {
            try {
                const h = new Hisaab(n);
                return { name: n, element: h.getArabicAstrology().element.name };
            } catch (e) {
                return null;
            }
        }).filter(a => a !== null);
        
        return generateElementPieData(analyses);
    }

    /**
     * Generate digit root distribution bar chart data
     * @param {Array} names - Array of names to analyze
     * @returns {Object} Bar chart data for Chart.js
     */
    static generateDigitRootChart(names) {
        const analyses = names.map(n => {
            try {
                const h = new Hisaab(n);
                return { name: n, digitRoot: h.getDigitRoot() };
            } catch (e) {
                return null;
            }
        }).filter(a => a !== null);
        
        return generateDigitRootBarData(analyses);
    }

    /**
     * Generate partner house comparison chart
     * @param {string} partnerName - Partner name
     * @returns {Object} Bar chart data showing partner house
     */
    generatePartnerHouseChart(partnerName) {
        const comp = Hisaab.compareArabic(this.name, partnerName);
        return generatePartnerHouseChart(this.name, partnerName, comp.partnerHouse);
    }

    /**
     * Generate compatibility gauge chart data
     * @param {string} partnerName - Partner name
     * @returns {Object} Gauge chart data for Chart.js
     */
    generateCompatibilityGauge(partnerName) {
        const comp = Hisaab.compareArabic(this.name, partnerName);
        const score = comp.partnerHouse === 7 ? 100 : 
                      comp.partnerHouse === 4 ? 85 :
                      comp.partnerHouse === 2 ? 75 :
                      comp.partnerHouse === 5 ? 60 :
                      comp.partnerHouse === 8 ? 55 :
                      comp.partnerHouse === 1 ? 50 :
                      comp.partnerHouse === 3 ? 30 :
                      comp.partnerHouse === 6 ? 20 : 10;
        
        return generateCompatibilityGaugeData(score);
    }

    /**
     * Generate family tree bar chart data
     * @param {Array} members - Family member names
     * @returns {Object} Bar chart data for Chart.js
     */
    static generateFamilyTreeChart(members) {
        const analyses = Hisaab.analyzeFamilyTree(members);
        return generateFamilyTreeBarData(analyses.members.filter(m => !m.error));
    }

    /**
     * Generate regional comparison chart data
     * @returns {Object} Bar chart data for regional comparison
     */
    generateRegionalChart() {
        const comparison = this.compareRegionalVariants();
        return generateRegionalComparisonChart(comparison.comparisons);
    }

    /**
     * Generate numerology wheel data
     * @returns {Object} Data for numerology wheel visualization
     */
    generateNumerologyWheel() {
        const root = this.getDigitRoot();
        const element = this.getArabicAstrology().element.name;
        const planet = this.getArabicAstrology().planet.name;
        
        return {
            name: this.name,
            value: this.value,
            digitRoot: root,
            element: element,
            elementColor: CHART_COLORS.elements[element],
            planet: planet,
            planetColor: CHART_COLORS.planets[planet],
            luckyNumbers: this.getLuckyNumbers(),
            wheelData: {
                labels: ['Value', 'Digit Root', 'Element Score', 'Planet Score'],
                data: [
                    Math.min(this.value / 10, 100),
                    root * 11,
                    CHART_CONFIGS.compatibilityRadar.labels.indexOf(element) >= 0 ? 75 : 50,
                    60
                ]
            }
        };
    }

    /**
     * Generate personal year timeline
     * @param {number} birthYear - Birth year
     * @param {number} birthMonth - Birth month
     * @param {number} birthDay - Birth day
     * @param {number} years - Number of years to calculate
     * @returns {Object} Timeline chart data
     */
    generatePersonalYearTimeline(birthYear, birthMonth, birthDay, years = 9) {
        const currentYear = new Date().getFullYear();
        const yearLabels = [];
        const yearValues = [];
        
        for (let i = 0; i < years; i++) {
            const year = currentYear + i;
            yearLabels.push(year.toString());
            
            const personalYear = this.calculatePersonalYear(year, birthMonth, birthDay);
            yearValues.push(personalYear);
        }
        
        return generateTimelineData(yearLabels, yearValues);
    }

    /**
     * Get chart colors
     * @returns {Object} Chart color definitions
     */
    static getChartColors() {
        return getChartColors();
    }

    /**
     * Get chart configuration
     * @param {string} type - Chart type
     * @returns {Object} Chart configuration
     */
    static getChartConfig(type) {
        return getChartConfig(type);
    }
}

module.exports = Hisaab;
    };
    
    // Load and expose Hisaab
    try {
        const Hisaab = require('./index.js');
        window.Hisaab = Hisaab;
        console.log('✅ Hisaab v1.5.0 loaded successfully');
        console.log('🎉 Ready to use: new Hisaab("اسم عربي")');
        console.log('📋 New features: generateCompatibilityChart(), generateElementChart(), generateNumerologyWheel()');
        
        // Provide a load function for compatibility
        window.loadHisaabLibrary = function() {
            return Promise.resolve(true);
        };
    } catch (error) {
        console.error('❌ Error loading Hisaab:', error);
        console.error(error.stack);
    }
    
})(window);
