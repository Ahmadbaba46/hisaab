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