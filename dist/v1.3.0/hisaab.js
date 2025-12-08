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