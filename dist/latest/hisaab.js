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
}

module.exports = Hisaab;