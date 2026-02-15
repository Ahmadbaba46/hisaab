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