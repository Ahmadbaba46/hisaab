// Hisaab Web Interface Application
// Browser-compatible version with all v1.3.0 features

// Complete Hisaab class for browser use
class HisaabWeb {
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

    calculateValue() {
        let totalValue = 0;
        
        for (let i = 0; i < this.name.length; i++) {
            const letter = this.name[i];
            const letterValue = this.abjadMap[letter];
            
            if (letterValue !== undefined) {
                totalValue += letterValue;
            }
        }
        
        return totalValue;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    getDigitRoot() {
        let sum = this.value;
        while (sum >= 10) {
            sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return sum;
    }

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

    // Arabic Astrology
    getArabicAstrology() {
        const value = this.value;
        
        // Arabic Elements (value % 4)
        const elementIndex = value % 4;
        const elements = ['Fire', 'Earth', 'Air', 'Water'];
        const arabicElements = ['النار', 'الأرض', 'الهواء', 'الماء'];
        const element = elements[elementIndex === 0 ? 3 : elementIndex - 1];
        const elementArabic = arabicElements[elementIndex === 0 ? 3 : elementIndex - 1];
        
        // Arabic Planets (value % 7)
        const planetIndex = value % 7;
        const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
        const planetsArabic = ['الشمس', 'القمر', 'المريخ', 'عطارد', 'المشتري', 'الزهرة', 'زحل'];
        const planet = planets[planetIndex === 0 ? 6 : planetIndex - 1];
        const planetArabic = planetsArabic[planetIndex === 0 ? 6 : planetIndex - 1];
        
        // Arabic Zodiac Signs (value % 12)
        const zodiacIndex = value % 12;
        const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                            'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        const zodiacArabic = ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'السنبلة',
                             'الميزان', 'العقرب', 'القوس', 'الجدي', 'الدلو', 'الحوت'];
        const zodiacSign = zodiacSigns[zodiacIndex === 0 ? 11 : zodiacIndex - 1];
        const zodiacSignArabic = zodiacArabic[zodiacIndex === 0 ? 11 : zodiacIndex - 1];
        
        return {
            element: {
                name: element,
                arabic: elementArabic,
                calculation: `${value} % 4 = ${value % 4} → ${element}`
            },
            planet: {
                name: planet,
                arabic: planetArabic,
                calculation: `${value} % 7 = ${value % 7} → ${planet}`
            },
            zodiac: {
                sign: zodiacSign,
                arabic: zodiacSignArabic,
                calculation: `${value} % 12 = ${value % 12} → ${zodiacSign}`
            },
            value: value
        };
    }

    // Arabic Compatibility - حساب الشريك
    static getArabicCompatibility(name1, name2) {
        const hisaab1 = new HisaabWeb(name1);
        const hisaab2 = new HisaabWeb(name2);
        
        const thisDigitRoot = hisaab1.getDigitRoot();
        const otherDigitRoot = hisaab2.getDigitRoot();
        
        // حساب الشريك calculation: root1 + root2 + 7, then get digit root
        const partnerSum = thisDigitRoot + otherDigitRoot + 7;
        let partnerHouse = partnerSum;
        while (partnerHouse >= 10) {
            partnerHouse = partnerHouse.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        
        // Arabic interpretations for each house
        const arabicInterpretations = {
            1: {
                rating: '6/10',
                quality: 'Bad',
                arabic: 'سيء',
                details: 'Starts well but faces challenges later'
            },
            2: {
                rating: '6/10', 
                quality: 'Good',
                arabic: 'جيد',
                details: 'Wealth with complications, woman may face family issues'
            },
            3: {
                rating: '7/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                details: 'Family conflicts, wealth after loss'
            },
            4: {
                rating: '7/10',
                quality: 'Very Good',
                arabic: 'جيد جداً', 
                details: 'Clean wealth but relationship challenges, possible divorce'
            },
            5: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                details: 'Good for politicians/famous people, many children'
            },
            6: {
                rating: '9/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                details: 'Misfortune but peaceful coexistence'
            },
            7: {
                rating: '10/10',
                quality: 'Very Good',
                arabic: 'ممتاز',
                details: 'Most wanted house - perfect harmony and peace'
            },
            8: {
                rating: '5/10',
                quality: 'Neutral',
                arabic: 'محايد',
                details: 'Excellent for scholars/royals, bad for business'
            },
            9: {
                rating: '10/10',
                quality: 'Very Bad',
                arabic: 'سيء جداً',
                details: 'Worst case - loss before marriage, ultimate breakup'
            }
        };
        
        const interpretation = arabicInterpretations[partnerHouse];
        
        return {
            name1: name1,
            name2: name2,
            digitRoot1: thisDigitRoot,
            digitRoot2: otherDigitRoot,
            calculation: `${thisDigitRoot} + ${otherDigitRoot} + 7 = ${partnerSum} → ${partnerHouse}`,
            partnerHouse: partnerHouse,
            interpretation: interpretation
        };
    }

    // v1.1.0 Feature: Smart Name Generator
    static generateNames(criteria = {}) {
        const {
            targetValue = null,
            element = null,
            partnerHouse = null,
            gender = null,
            maxResults = 5
        } = criteria;

        // Sample Arabic names database for browser
        const arabicNames = {
            male: ['محمد', 'أحمد', 'علي', 'حسن', 'حسين', 'عمر', 'عبدالله', 'يوسف', 'إبراهيم', 'خالد', 'سعد', 'صالح', 'طارق', 'فيصل', 'ماجد', 'أمين', 'كريم', 'نادر', 'وليد', 'ياسر'],
            female: ['فاطمة', 'عائشة', 'خديجة', 'زينب', 'مريم', 'آمنة', 'صفية', 'رقية', 'نورا', 'سارة', 'لينا', 'ريم', 'منى', 'هند', 'ليلى', 'أميرة', 'حنان', 'سلمى', 'فرح', 'ياسمين']
        };

        let namePool = [];
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
                const hisaab = new HisaabWeb(name);
                let score = 0;
                let reasons = [];

                // Target value match
                if (targetValue !== null) {
                    const diff = Math.abs(hisaab.getValue() - targetValue);
                    if (diff === 0) {
                        score += 50;
                        reasons.push(`Exact value match: ${targetValue}`);
                    } else if (diff <= 10) {
                        score += 30;
                        reasons.push(`Close to target (±${diff})`);
                    } else if (diff <= 25) {
                        score += 15;
                        reasons.push(`Reasonably close (±${diff})`);
                    }
                }

                // Element match
                if (element !== null) {
                    const astrology = hisaab.getArabicAstrology();
                    if (astrology.element.name === element) {
                        score += 25;
                        reasons.push(`Element match: ${element}`);
                    }
                }

                // Partner house match (self-compatibility)
                if (partnerHouse !== null) {
                    const digitRoot = hisaab.getDigitRoot();
                    const selfHouse = this.calculateDigitRoot(digitRoot + digitRoot + 7);
                    if (selfHouse === partnerHouse) {
                        score += 40;
                        reasons.push(`Self-compatibility house: ${partnerHouse}`);
                    }
                }

                if (score > 0 || (targetValue === null && element === null && partnerHouse === null)) {
                    suggestions.push({
                        name: name,
                        value: hisaab.getValue(),
                        score: score,
                        reasons: reasons,
                        element: hisaab.getArabicAstrology().element.name
                    });
                }
            } catch (error) {
                // Skip invalid names
            }
        });

        return suggestions
            .sort((a, b) => b.score - a.score)
            .slice(0, maxResults);
    }

    // Helper method for digit root calculation
    static calculateDigitRoot(num) {
        while (num >= 10) {
            num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return num;
    }

    // Check if name matches any of the 99 Names of Allah
    getAsmaUlHusnaMatch() {
        const asmaUlHusna = [
            { arabic: 'الله', transliteration: 'Allah', meaning: 'The God', attribute: 'The One and Only' },
            { arabic: 'الرحمن', transliteration: 'Ar-Rahman', meaning: 'The Most Merciful', attribute: 'Universal Mercy' },
            { arabic: 'الرحيم', transliteration: 'Ar-Raheem', meaning: 'The Most Compassionate', attribute: 'Specific Mercy' },
            { arabic: 'الملك', transliteration: 'Al-Malik', meaning: 'The King', attribute: 'Absolute Sovereignty' },
            { arabic: 'القدوس', transliteration: 'Al-Quddus', meaning: 'The Holy One', attribute: 'Perfect Purity' },
            { arabic: 'السلام', transliteration: 'As-Salaam', meaning: 'The Source of Peace', attribute: 'Perfect Peace' },
            { arabic: 'المؤمن', transliteration: 'Al-Mu\'min', meaning: 'The Faithful', attribute: 'Perfect Faith' },
            { arabic: 'المهيمن', transliteration: 'Al-Muhaymin', meaning: 'The Guardian', attribute: 'Divine Protection' },
            { arabic: 'العزيز', transliteration: 'Al-Aziz', meaning: 'The Mighty One', attribute: 'Invincible Power' },
            { arabic: 'الجبار', transliteration: 'Al-Jabbar', meaning: 'The Compeller', attribute: 'Overwhelming Force' }
            // Adding just a few for demonstration - full list would be much longer
        ];

        const match = asmaUlHusna.find(name => name.arabic === this.name);
        if (match) {
            return {
                ...match,
                numericalValue: this.value,
                digitRoot: this.getDigitRoot()
            };
        }
        return null;
    }

    // v1.2.0 Feature: Lunar Mansions
    getLunarMansion() {
        const lunarMansions = [
            { number: 1, arabic: 'الشرطان', transliteration: 'Ash-Sharatan', meaning: 'The Two Signs', element: 'Fire', influence: 'Leadership and Initiative' },
            { number: 2, arabic: 'البطين', transliteration: 'Al-Butain', meaning: 'The Little Belly', element: 'Fire', influence: 'Patience and Endurance' },
            { number: 3, arabic: 'الثريا', transliteration: 'Ath-Thurayya', meaning: 'The Pleiades', element: 'Earth', influence: 'Abundance and Prosperity' },
            { number: 4, arabic: 'الدبران', transliteration: 'Ad-Dabaran', meaning: 'The Follower', element: 'Earth', influence: 'Loyalty and Devotion' },
            { number: 5, arabic: 'الهقعة', transliteration: 'Al-Haq\'ah', meaning: 'The White Spot', element: 'Air', influence: 'Clarity and Illumination' },
            { number: 6, arabic: 'الهنعة', transliteration: 'Al-Han\'ah', meaning: 'The Brand Mark', element: 'Air', influence: 'Recognition and Identity' },
            { number: 7, arabic: 'الذراع', transliteration: 'Adh-Dhira\'', meaning: 'The Outstretched Arm', element: 'Air', influence: 'Reach and Extension' },
            { number: 8, arabic: 'النثرة', transliteration: 'An-Nathrah', meaning: 'The Tip of the Arrow', element: 'Water', influence: 'Precision and Focus' },
            { number: 9, arabic: 'الطرف', transliteration: 'At-Tarf', meaning: 'The Glance', element: 'Fire', influence: 'Quick Perception' },
            { number: 10, arabic: 'الجبهة', transliteration: 'Al-Jabhah', meaning: 'The Forehead', element: 'Fire', influence: 'Dignity and Honor' },
            { number: 11, arabic: 'الزبرة', transliteration: 'Az-Zubrah', meaning: 'The Mane', element: 'Fire', influence: 'Strength and Power' },
            { number: 12, arabic: 'الصرفة', transliteration: 'As-Sarfah', meaning: 'The Turn', element: 'Fire', influence: 'Change and Transition' },
            { number: 13, arabic: 'العواء', transliteration: 'Al-\'Awwa', meaning: 'The Howler', element: 'Earth', influence: 'Communication and Expression' },
            { number: 14, arabic: 'السماك', transliteration: 'As-Simak', meaning: 'The Unarmed', element: 'Earth', influence: 'Peaceful Achievement' },
            { number: 15, arabic: 'الغفر', transliteration: 'Al-Ghafr', meaning: 'The Covering', element: 'Earth', influence: 'Protection and Forgiveness' },
            { number: 16, arabic: 'الزبانى', transliteration: 'Az-Zubana', meaning: 'The Claws', element: 'Air', influence: 'Justice and Balance' },
            { number: 17, arabic: 'الإكليل', transliteration: 'Al-Iklil', meaning: 'The Crown', element: 'Water', influence: 'Honor and Achievement' },
            { number: 18, arabic: 'القلب', transliteration: 'Al-Qalb', meaning: 'The Heart', element: 'Water', influence: 'Emotion and Passion' },
            { number: 19, arabic: 'الشولة', transliteration: 'Ash-Shawlah', meaning: 'The Sting', element: 'Water', influence: 'Defense and Warning' },
            { number: 20, arabic: 'النعائم', transliteration: 'An-Na\'a\'im', meaning: 'The Ostriches', element: 'Fire', influence: 'Speed and Agility' },
            { number: 21, arabic: 'البلدة', transliteration: 'Al-Baldah', meaning: 'The City', element: 'Fire', influence: 'Community and Civilization' },
            { number: 22, arabic: 'سعد الذابح', transliteration: 'Sa\'d adh-Dhabih', meaning: 'The Luck of the Slaughterer', element: 'Earth', influence: 'Sacrifice and Transformation' },
            { number: 23, arabic: 'سعد بلع', transliteration: 'Sa\'d Bula\'', meaning: 'The Luck of the Swallower', element: 'Air', influence: 'Acceptance and Integration' },
            { number: 24, arabic: 'سعد السعود', transliteration: 'Sa\'d as-Su\'ud', meaning: 'The Luck of Lucks', element: 'Air', influence: 'Ultimate Fortune' },
            { number: 25, arabic: 'سعد الأخبية', transliteration: 'Sa\'d al-Akhbiyah', meaning: 'The Luck of the Tents', element: 'Air', influence: 'Shelter and Protection' },
            { number: 26, arabic: 'فرغ المقدم', transliteration: 'Fargh al-Muqaddam', meaning: 'The First Pouring', element: 'Air', influence: 'New Beginnings' },
            { number: 27, arabic: 'فرغ المؤخر', transliteration: 'Fargh al-Mu\'akhkhar', meaning: 'The Second Pouring', element: 'Air', influence: 'Completion and Fulfillment' },
            { number: 28, arabic: 'الرشا', transliteration: 'Ar-Risha', meaning: 'The Well Rope', element: 'Water', influence: 'Connection and Support' }
        ];

        const mansionNumber = (this.value % 28) || 28;
        const mansion = lunarMansions.find(m => m.number === mansionNumber);
        
        return {
            ...mansion,
            calculation: `${this.value} % 28 = ${this.value % 28} → Mansion ${mansionNumber}`,
            personalizedInsight: `Your name ${this.name} resonates with ${mansion.arabic} (${mansion.transliteration}), bringing the energy of ${mansion.influence.toLowerCase()}.`
        };
    }

    // =================== v1.3.0 NEW FEATURES ===================

    // Business Analysis
    getBusinessAnalysis() {
        const digitRoot = this.getDigitRoot();
        const value = this.value;
        
        let successIndicators;
        if (value < 100) {
            successIndicators = { range: 'Low (< 100)', rating: 6, potential: 'Moderate' };
        } else if (value < 300) {
            successIndicators = { range: 'Medium (100-300)', rating: 7, potential: 'Good' };
        } else if (value < 500) {
            successIndicators = { range: 'High (300-500)', rating: 8, potential: 'Excellent' };
        } else {
            successIndicators = { range: 'Very High (> 500)', rating: 9, potential: 'Outstanding' };
        }

        const businessHouses = {
            1: { type: 'Leadership', rating: 8, recommendation: 'Excellent for startups and innovative ventures' },
            2: { type: 'Partnership', rating: 7, recommendation: 'Good for collaborative business' },
            3: { type: 'Solo', rating: 6, recommendation: 'Better as sole proprietorship' },
            4: { type: 'Stable', rating: 9, recommendation: 'Perfect for long-term business' },
            5: { type: 'Dynamic', rating: 7, recommendation: 'Great for service-oriented business' },
            6: { type: 'Challenging', rating: 4, recommendation: 'Proceed with caution' },
            7: { type: 'Blessed', rating: 10, recommendation: 'Most favorable for any business' },
            8: { type: 'Knowledge', rating: 7, recommendation: 'Ideal for education/consulting' },
            9: { type: 'Risky', rating: 3, recommendation: 'High risk - consider alternatives' }
        };

        return {
            name: this.name,
            value: value,
            digitRoot: digitRoot,
            successIndicators: successIndicators,
            businessHouse: businessHouses[digitRoot],
            overallRating: businessHouses[digitRoot].rating
        };
    }

    // Date Compatibility
    getLifePathCompatibility(day, month, year) {
        const digitRoot = (num) => {
            while (num >= 10) {
                num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
            }
            return num;
        };

        const lifePathNumber = digitRoot(digitRoot(day) + digitRoot(month) + digitRoot(year));
        const nameDigitRoot = this.getDigitRoot();
        const diff = Math.abs(nameDigitRoot - lifePathNumber);
        
        let score, level;
        if (diff === 0) {
            score = 100;
            level = 'Perfect Harmony';
        } else if (diff <= 2) {
            score = 85;
            level = 'Excellent Compatibility';
        } else if (diff <= 4) {
            score = 70;
            level = 'Good Compatibility';
        } else {
            score = 50;
            level = 'Moderate Compatibility';
        }

        return {
            name: this.name,
            nameDigitRoot: nameDigitRoot,
            lifePathNumber: lifePathNumber,
            compatibility: { score: score, level: level },
            difference: diff
        };
    }

    // Advanced Numerology
    getAdvancedNumerology() {
        const value = this.value;
        const digitRoot = this.getDigitRoot();
        const breakdown = this.getBreakdown();
        
        // Check for master numbers
        const masterNumbers = [11, 22, 33, 44];
        const isMasterNumber = masterNumbers.includes(value);
        
        // Check for karmic numbers
        const karmicNumbers = [13, 14, 16, 19];
        const isKarmicNumber = karmicNumbers.includes(value);
        
        // Get unique and repeated numbers
        const values = breakdown.map(b => b.value);
        const uniqueValues = [...new Set(values)];
        const repeated = values.filter((v, i) => values.indexOf(v) !== i);
        
        return {
            name: this.name,
            value: value,
            digitRoot: digitRoot,
            masterNumber: isMasterNumber ? { detected: true, number: value } : { detected: false },
            karmicNumber: isKarmicNumber ? { detected: true, number: value } : { detected: false },
            uniqueNumbers: uniqueValues.length,
            repeatedNumbers: [...new Set(repeated)]
        };
    }

    // Prayer Time Correlations
    getPrayerTimeCorrelations() {
        const digitRoot = this.getDigitRoot();
        
        const prayerMap = {
            1: { prayer: 'Fajr', arabic: 'الفجر', significance: 'New beginnings and spiritual awakening' },
            2: { prayer: 'Dhuhr', arabic: 'الظهر', significance: 'Balance and midday reflection' },
            3: { prayer: 'Asr', arabic: 'العصر', significance: 'Afternoon energy and productivity' },
            4: { prayer: 'Maghrib', arabic: 'المغرب', significance: 'Transition and gratitude' },
            5: { prayer: 'Isha', arabic: 'العشاء', significance: 'Rest and contemplation' },
            6: { prayer: 'Fajr', arabic: 'الفجر', significance: 'Dawn spiritual connection' },
            7: { prayer: 'All Prayers', arabic: 'جميع الصلوات', significance: 'Complete spiritual harmony' },
            8: { prayer: 'Dhuhr', arabic: 'الظهر', significance: 'Wisdom and knowledge' },
            9: { prayer: 'Maghrib', arabic: 'المغرب', significance: 'Completion and reflection' }
        };

        const dhikrMap = {
            1: { morning: 'لا إله إلا الله (100x)', evening: 'أستغفر الله (70x)' },
            2: { morning: 'الرحمن الرحيم (50x)', evening: 'حسبي الله (40x)' },
            3: { morning: 'سبحان الله (100x)', evening: 'الحمد لله (100x)' },
            4: { morning: 'الله أكبر (100x)', evening: 'لا حول ولا قوة إلا بالله (50x)' },
            5: { morning: 'استغفر الله (100x)', evening: 'يا حي يا قيوم (40x)' },
            6: { morning: 'الحمد لله (100x)', evening: 'يا رب العالمين (50x)' },
            7: { morning: 'حسبنا الله ونعم الوكيل (70x)', evening: 'لا إله إلا الله (100x)' },
            8: { morning: 'ما شاء الله (50x)', evening: 'بارك الله (50x)' },
            9: { morning: 'لا حول ولا قوة إلا بالله (100x)', evening: 'رب اغفر وارحم (70x)' }
        };

        return {
            name: this.name,
            digitRoot: digitRoot,
            favorablePrayer: prayerMap[digitRoot].prayer,
            arabicPrayer: prayerMap[digitRoot].arabic,
            significance: prayerMap[digitRoot].significance,
            dhikrPlan: dhikrMap[digitRoot]
        };
    }
}

// DOM Management and Event Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initializeCalculator();
    initializeCompatibility();
    initializeNavigation();
});

function initializeCalculator() {
    const nameInput = document.getElementById('arabicName');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');

    calculateBtn.addEventListener('click', function() {
        const arabicName = nameInput.value.trim();
        if (!arabicName) {
            showError('الرجاء إدخال اسم عربي', 'Please enter an Arabic name');
            return;
        }

        try {
            const hisaab = new HisaabWeb(arabicName);
            displayResults(hisaab, resultsDiv);
        } catch (error) {
            showError('خطأ في الحساب', 'Calculation Error: ' + error.message);
        }
    });

    // Calculate on Enter key
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateBtn.click();
        }
    });
}

function initializeCompatibility() {
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const compareBtn = document.getElementById('compareBtn');
    const compatibilityResults = document.getElementById('compatibilityResults');

    compareBtn.addEventListener('click', function() {
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();
        
        if (!name1 || !name2) {
            showError('الرجاء إدخال الاسمين', 'Please enter both names');
            return;
        }

        try {
            const compatibility = HisaabWeb.getArabicCompatibility(name1, name2);
            displayCompatibilityResults(compatibility, compatibilityResults);
        } catch (error) {
            showError('خطأ في حساب التوافق', 'Compatibility Error: ' + error.message);
        }
    });
}

function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function displayResults(hisaab, container) {
    const breakdown = hisaab.getBreakdown();
    const astrology = hisaab.getArabicAstrology();
    const asmaMatch = hisaab.getAsmaUlHusnaMatch();
    const lunarMansion = hisaab.getLunarMansion();

    const html = `
        <div class="result-grid fade-in">
            <div class="result-card">
                <h3>📊 القيمة الأساسية / Basic Value</h3>
                <div class="result-value">${hisaab.getValue()}</div>
                <p><strong>الجذر الرقمي / Digit Root:</strong> ${hisaab.getDigitRoot()}</p>
            </div>

            <div class="result-card">
                <h3>🔤 تفصيل الحروف / Letter Breakdown</h3>
                <div class="letters-grid">
                    ${breakdown.map(item => 
                        `<span class="letter-item">${item.letter} = ${item.value}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="result-card">
                <h3>🌙 منزل القمر / Lunar Mansion</h3>
                <div class="result-value" style="color: #1e3a8a;">${lunarMansion.arabic}</div>
                <p><strong>English:</strong> ${lunarMansion.transliteration}</p>
                <p><strong>المعنى / Meaning:</strong> ${lunarMansion.meaning}</p>
                <p><strong>العنصر / Element:</strong> ${lunarMansion.element}</p>
                <p><strong>التأثير / Influence:</strong> ${lunarMansion.influence}</p>
                <p style="font-size: 0.9em; color: #64748b;">${lunarMansion.calculation}</p>
            </div>

            <div class="result-card">
                <h3>🌟 Personalized Insight</h3>
                <p style="font-style: italic; color: #1e6b3e; line-height: 1.6;">${lunarMansion.personalizedInsight}</p>
            </div>

            <div class="result-card">
                <h3>🌙 علم النجوم العربي / Arabic Astrology</h3>
                <p><strong>العنصر / Element:</strong> ${astrology.element.arabic} (${astrology.element.name})</p>
                <p><strong>الكوكب / Planet:</strong> ${astrology.planet.arabic} (${astrology.planet.name})</p>
                <p><strong>البرج / Zodiac:</strong> ${astrology.zodiac.arabic} (${astrology.zodiac.sign})</p>
            </div>

            <div class="result-card">
                <h3>📐 طريقة الحساب / Calculation Methods</h3>
                <p><strong>Element:</strong> ${astrology.element.calculation}</p>
                <p><strong>Planet:</strong> ${astrology.planet.calculation}</p>
                <p><strong>Zodiac:</strong> ${astrology.zodiac.calculation}</p>
                <p><strong>Lunar Mansion:</strong> ${lunarMansion.calculation}</p>
            </div>

            ${asmaMatch ? `
            <div class="result-card highlight" style="border-left-color: #d4af37;">
                <h3>✨ اسم من أسماء الله الحسنى / Divine Name Match</h3>
                <div class="result-value" style="color: #d4af37;">${asmaMatch.transliteration}</div>
                <p><strong>المعنى / Meaning:</strong> ${asmaMatch.meaning}</p>
                <p><strong>الصفة / Attribute:</strong> ${asmaMatch.attribute}</p>
                <p style="color: #1e6b3e; font-weight: bold;">🌟 This is a blessed name carrying divine significance!</p>
            </div>
            ` : ''}
        </div>
        
        <!-- v1.3.0 New Features -->
        <div class="result-grid fade-in" style="margin-top: 30px;">
            <div style="grid-column: 1 / -1; text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
                <h2 style="margin: 0; font-size: 28px;">✨ v1.3.0 New Features</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Business Analysis • Date Integration • Advanced Numerology • Prayer Guidance</p>
            </div>
            
            ${(() => {
                const business = hisaab.getBusinessAnalysis();
                return `
                <div class="result-card" style="border-left: 4px solid #667eea;">
                    <h3>💼 تحليل الأعمال / Business Analysis</h3>
                    <div class="result-value" style="color: #667eea;">${business.overallRating}/10</div>
                    <p><strong>Success Range:</strong> ${business.successIndicators.range}</p>
                    <p><strong>Potential:</strong> ${business.successIndicators.potential}</p>
                    <p><strong>Business Type:</strong> ${business.businessHouse.type}</p>
                    <p><strong>Recommendation:</strong> ${business.businessHouse.recommendation}</p>
                    <p style="margin-top: 10px; padding: 10px; background: #f0f4ff; border-radius: 8px; font-size: 14px;">
                        <strong>Analysis:</strong> This name scores ${business.overallRating}/10 for business success, 
                        indicating ${business.successIndicators.potential.toLowerCase()} potential in the ${business.businessHouse.type.toLowerCase()} sector.
                    </p>
                </div>
                `;
            })()}
            
            ${(() => {
                // Use example date for demo
                const dateComp = hisaab.getLifePathCompatibility(15, 7, 1990);
                return `
                <div class="result-card" style="border-left: 4px solid #10b981;">
                    <h3>📅 توافق التاريخ / Date Compatibility</h3>
                    <div class="result-value" style="color: #10b981;">${dateComp.compatibility.score}/100</div>
                    <p><strong>Example Date:</strong> 15/7/1990</p>
                    <p><strong>Life Path Number:</strong> ${dateComp.lifePathNumber}</p>
                    <p><strong>Name Digit Root:</strong> ${dateComp.nameDigitRoot}</p>
                    <p><strong>Compatibility Level:</strong> ${dateComp.compatibility.level}</p>
                    <p style="margin-top: 10px; padding: 10px; background: #f0fdf4; border-radius: 8px; font-size: 14px;">
                        <strong>Note:</strong> Try your own birth date! This shows how your name energy aligns with your life path.
                        The closer the numbers, the better the harmony.
                    </p>
                </div>
                `;
            })()}
            
            ${(() => {
                const advanced = hisaab.getAdvancedNumerology();
                return `
                <div class="result-card" style="border-left: 4px solid #8b5cf6;">
                    <h3>🔮 علم الأرقام المتقدم / Advanced Numerology</h3>
                    <p><strong>Master Number:</strong> ${advanced.masterNumber.detected ? 
                        `✅ Yes (${advanced.masterNumber.number})` : '❌ No'}</p>
                    <p><strong>Karmic Number:</strong> ${advanced.karmicNumber.detected ? 
                        `⚠️ Yes (${advanced.karmicNumber.number})` : '✅ No karmic debt'}</p>
                    <p><strong>Unique Numbers:</strong> ${advanced.uniqueNumbers}</p>
                    <p><strong>Repeated Numbers:</strong> ${advanced.repeatedNumbers.length > 0 ? 
                        advanced.repeatedNumbers.join(', ') : 'None'}</p>
                    <p style="margin-top: 10px; padding: 10px; background: #faf5ff; border-radius: 8px; font-size: 14px;">
                        <strong>Hidden Potential:</strong> ${advanced.masterNumber.detected ? 
                            'Master number detected - exceptional spiritual potential!' : 
                            'Your name carries unique energetic patterns worth exploring.'}
                    </p>
                </div>
                `;
            })()}
            
            ${(() => {
                const prayer = hisaab.getPrayerTimeCorrelations();
                return `
                <div class="result-card" style="border-left: 4px solid #d4af37;">
                    <h3>🕌 إرشادات الصلاة / Prayer Guidance</h3>
                    <div class="result-value" style="color: #d4af37;">${prayer.arabicPrayer}</div>
                    <p><strong>Favorable Prayer:</strong> ${prayer.favorablePrayer}</p>
                    <p><strong>Significance:</strong> ${prayer.significance}</p>
                    <div style="margin-top: 15px; padding: 15px; background: #fffbeb; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px 0; color: #92400e;">📿 Daily Dhikr Plan</h4>
                        <p style="margin: 5px 0;"><strong>Morning:</strong> ${prayer.dhikrPlan.morning}</p>
                        <p style="margin: 5px 0;"><strong>Evening:</strong> ${prayer.dhikrPlan.evening}</p>
                    </div>
                    <p style="margin-top: 10px; padding: 10px; background: #f0fdf4; border-radius: 8px; font-size: 14px; color: #166534;">
                        <strong>Spiritual Tip:</strong> Focus on ${prayer.favorablePrayer} prayer for enhanced spiritual connection.
                        ${prayer.significance}
                    </p>
                </div>
                `;
            })()}
        </div>`;

        <style>
            .letters-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 1rem;
            }
            .letter-item {
                background: #f8fafc;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Amiri', serif;
                font-weight: bold;
                color: #1e6b3e;
                border: 1px solid #d4af37;
            }
        </style>
    `;

    container.innerHTML = html;
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function displayCompatibilityResults(compatibility, container) {
    const quality = compatibility.interpretation.quality;
    const isGood = quality.includes('Good') || quality === 'Very Good';
    const isBad = quality.includes('Bad');
    const isNeutral = quality === 'Neutral';

    let qualityColor = '#1e6b3e'; // default green
    let qualityIcon = '✅';
    
    if (isBad) {
        qualityColor = '#dc2626'; // red
        qualityIcon = '❌';
    } else if (isNeutral) {
        qualityColor = '#f59e0b'; // yellow
        qualityIcon = '⚖️';
    } else if (compatibility.partnerHouse === 7) {
        qualityColor = '#d4af37'; // gold for perfect match
        qualityIcon = '🌟';
    }

    const html = `
        <div class="compatibility-result fade-in">
            <div class="compatibility-header">
                <h3>💕 نتيجة حساب الشريك / Partner Compatibility Result</h3>
                <div class="names-display">
                    <span class="name-1">${compatibility.name1}</span>
                    <span class="heart">💖</span>
                    <span class="name-2">${compatibility.name2}</span>
                </div>
            </div>

            <div class="compatibility-calculation">
                <h4>🧮 طريقة الحساب / Calculation Method</h4>
                <div class="calculation-steps">
                    <p><strong>الجذر الرقمي / Digit Roots:</strong> ${compatibility.digitRoot1} + ${compatibility.digitRoot2} + 7</p>
                    <p><strong>الحساب / Calculation:</strong> ${compatibility.calculation}</p>
                    <p><strong>بيت الشراكة / Partner House:</strong> ${compatibility.partnerHouse}</p>
                </div>
            </div>

            <div class="compatibility-result-card" style="border-color: ${qualityColor};">
                <div class="quality-header" style="color: ${qualityColor};">
                    ${qualityIcon} <strong>${compatibility.interpretation.quality} (${compatibility.interpretation.arabic})</strong>
                </div>
                <div class="rating">التقييم / Rating: ${compatibility.interpretation.rating}</div>
                <div class="details">${compatibility.interpretation.details}</div>
            </div>

            <div class="house-significance">
                <h4>🏠 معنى البيت / House Significance</h4>
                <p>The house of relation between two people (marriage or business partnership)</p>
                ${compatibility.partnerHouse === 7 ? 
                    '<p style="color: #d4af37; font-weight: bold;">🌟 This is the most wanted house - perfect for marriage!</p>' : 
                    compatibility.partnerHouse === 6 || compatibility.partnerHouse === 9 ? 
                    '<p style="color: #dc2626; font-weight: bold;">⚠️ This combination requires careful consideration</p>' : 
                    ''
                }
            </div>
        </div>

        <style>
            .compatibility-result {
                text-align: center;
            }
            .compatibility-header {
                margin-bottom: 2rem;
            }
            .names-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin: 1rem 0;
                font-size: 1.5rem;
                font-family: 'Amiri', serif;
                font-weight: bold;
            }
            .name-1, .name-2 {
                color: #1e6b3e;
                padding: 0.5rem 1rem;
                background: #f0f9ff;
                border-radius: 0.5rem;
                border: 2px solid #1e6b3e;
            }
            .heart {
                animation: heart-beat 2s ease-in-out infinite;
            }
            .compatibility-calculation {
                background: #f8fafc;
                padding: 1.5rem;
                border-radius: 1rem;
                margin: 1.5rem 0;
                text-align: left;
            }
            .calculation-steps p {
                margin: 0.5rem 0;
                font-family: 'Amiri', serif;
            }
            .compatibility-result-card {
                background: white;
                padding: 2rem;
                border-radius: 1rem;
                border: 3px solid;
                margin: 1.5rem 0;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            .quality-header {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            .rating {
                font-size: 1.2rem;
                font-weight: bold;
                margin: 1rem 0;
                color: #1e6b3e;
            }
            .details {
                font-size: 1.1rem;
                line-height: 1.6;
                color: #374151;
            }
            .house-significance {
                background: #fefdf6;
                padding: 1.5rem;
                border-radius: 1rem;
                border: 2px solid #d4af37;
                text-align: left;
            }
        </style>
    `;

    container.innerHTML = html;
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(arabicMessage, englishMessage) {
    // Create temporary error display
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message fade-in';
    errorDiv.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <div>
                <div class="arabic">${arabicMessage}</div>
                <div class="english">${englishMessage}</div>
            </div>
        </div>
        <style>
            .error-message {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #fee2e2;
                border: 2px solid #dc2626;
                color: #dc2626;
                padding: 1rem;
                border-radius: 0.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                max-width: 400px;
            }
            .error-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .error-icon {
                font-size: 1.5rem;
            }
        </style>
    `;

    document.body.appendChild(errorDiv);

    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// Islamic Features Functions
function showAsmaUlHusna() {
    alert('🕌 99 Names of Allah feature - In development!\nThis will show a beautiful grid of all Allah\'s names with their numerical values.');
}

function showQuranicConnections() {
    alert('📖 Quranic Connections feature - In development!\nThis will show verses related to your name\'s numerical value.');
}

function showSpiritualGuidance() {
    alert('🤲 Spiritual Guidance feature - In development!\nThis will provide personalized dhikr and Islamic guidance.');
}

function showPartnershipHouses() {
    const houses = `
🏠 Partnership Houses (حساب الشريك):

House 1 (6/10): Bad - Starts well, challenges later
House 2 (6/10): Good - Wealth with complications  
House 3 (7/10): Very Bad - Family conflicts
House 4 (7/10): Very Good - Clean wealth, possible divorce
House 5 (5/10): Neutral - Good for politicians, many children
House 6 (9/10): Very Bad - Misfortune but peaceful
House 7 (10/10): Very Good - PERFECT HARMONY! 🌟
House 8 (5/10): Neutral - Excellent for scholars
House 9 (10/10): Very Bad - Worst case, avoid!

House 7 is the most wanted for marriage!
    `;
    alert(houses);
}

// New Feature Demo Functions
function showLunarMansionDemo() {
    const input = document.getElementById('mansionDemo');
    const result = document.getElementById('mansionResult');
    const name = input.value.trim();
    
    if (!name) {
        result.innerHTML = 'Please enter an Arabic name';
        result.classList.add('show');
        return;
    }
    
    try {
        const hisaab = new HisaabWeb(name);
        const mansion = hisaab.getLunarMansion();
        
        result.innerHTML = `
            <div style="text-align: center;">
                <h4 style="color: #1e3a8a; margin: 0.5rem 0;">${mansion.arabic}</h4>
                <p style="margin: 0.5rem 0;"><strong>${mansion.transliteration}</strong></p>
                <p style="margin: 0.5rem 0;">"${mansion.meaning}"</p>
                <p style="margin: 0.5rem 0;">Element: <strong>${mansion.element}</strong></p>
                <p style="margin: 0.5rem 0; font-style: italic;">${mansion.influence}</p>
                <p style="font-size: 0.8em; color: #64748b;">${mansion.calculation}</p>
            </div>
        `;
        result.classList.add('show');
    } catch (error) {
        result.innerHTML = 'Error calculating lunar mansion. Please try an Arabic name.';
        result.classList.add('show');
    }
}

function showNameGeneratorDemo() {
    const criteria = document.getElementById('generatorCriteria').value;
    const result = document.getElementById('generatorResult');
    
    try {
        let suggestions = [];
        
        // Use the actual smart name generator
        if (criteria === 'value100') {
            suggestions = HisaabWeb.generateNames({ targetValue: 100, maxResults: 5 });
        } else if (criteria === 'water') {
            suggestions = HisaabWeb.generateNames({ element: 'Water', maxResults: 5 });
        } else if (criteria === 'house7') {
            suggestions = HisaabWeb.generateNames({ partnerHouse: 7, maxResults: 5 });
        }
        
        if (suggestions.length === 0) {
            result.innerHTML = 'No suggestions found for this criteria.';
            result.classList.add('show');
            return;
        }
        
        let html = '<h4 style="margin-bottom: 1rem;">Smart Name Suggestions:</h4>';
        suggestions.forEach(item => {
            html += `
                <div style="margin: 0.5rem 0; padding: 0.5rem; background: white; border-radius: 0.25rem; border-left: 3px solid #1e6b3e;">
                    <strong>${item.name}</strong> (Value: ${item.value}, Score: ${item.score})
                    <br><small style="color: #64748b;">Element: ${item.element}</small>
                    ${item.reasons.length > 0 ? `<br><small style="color: #1e6b3e;">${item.reasons.join(', ')}</small>` : ''}
                </div>
            `;
        });
        
        result.innerHTML = html;
        result.classList.add('show');
        
    } catch (error) {
        result.innerHTML = 'Error generating names. Please try again.';
        result.classList.add('show');
        console.error('Name generator error:', error);
    }
}

function showFamilyHarmonyDemo() {
    const input = document.getElementById('familyDemo');
    const result = document.getElementById('familyResult');
    const namesInput = input.value.trim();
    
    if (!namesInput) {
        result.innerHTML = 'Please enter family names separated by commas (e.g., أحمد, فاطمة, علي)';
        result.classList.add('show');
        return;
    }
    
    try {
        const names = namesInput.split(',').map(name => name.trim()).filter(name => name);
        
        if (names.length < 2) {
            result.innerHTML = 'Please enter at least 2 family members.';
            result.classList.add('show');
            return;
        }
        
        // Analyze family elements
        const elements = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
        let totalValue = 0;
        
        names.forEach(name => {
            try {
                const hisaab = new HisaabWeb(name);
                const astrology = hisaab.getArabicAstrology();
                elements[astrology.element.name]++;
                totalValue += hisaab.getValue();
            } catch (error) {
                // Skip invalid names
            }
        });
        
        const dominantElement = Object.keys(elements).reduce((a, b) => 
            elements[a] > elements[b] ? a : b
        );
        
        const averageValue = Math.round(totalValue / names.length);
        const evenCount = names.filter(name => {
            try {
                const hisaab = new HisaabWeb(name);
                return hisaab.getValue() % 2 === 0;
            } catch { return false; }
        }).length;
        
        const energyBalance = evenCount > names.length / 2 ? 'More Yin (receptive)' : 'More Yang (active)';
        
        result.innerHTML = `
            <h4 style="margin-bottom: 1rem;">Family Harmony Analysis:</h4>
            <div style="background: white; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                <p><strong>Family Size:</strong> ${names.length} members</p>
                <p><strong>Average Value:</strong> ${averageValue}</p>
                <p><strong>Dominant Element:</strong> ${dominantElement}</p>
                <p><strong>Energy Balance:</strong> ${energyBalance}</p>
                <p><strong>Element Distribution:</strong></p>
                <ul style="margin-left: 1rem;">
                    ${Object.keys(elements).map(element => 
                        `<li>${element}: ${elements[element]} member(s)</li>`
                    ).join('')}
                </ul>
            </div>
            <div style="background: #f0f9ff; padding: 1rem; border-radius: 0.5rem;">
                <h5>Recommendation:</h5>
                <p style="margin: 0.5rem 0;">
                    ${dominantElement === 'Fire' ? 'Your family has strong Fire energy. Encourage patience and calm activities.' :
                      dominantElement === 'Water' ? 'Your family has Water dominance. Great for emotional bonding and intuition.' :
                      dominantElement === 'Air' ? 'Your family has Air energy. Excellent for communication and learning.' :
                      'Your family has Earth stability. Focus on building strong foundations.'}
                </p>
            </div>
        `;
        result.classList.add('show');
        
    } catch (error) {
        result.innerHTML = 'Error analyzing family. Please check the names and try again.';
        result.classList.add('show');
    }
}

// Add some sample names for quick testing
function addSampleNames() {
    const sampleNames = ['محمد', 'فاطمة', 'علي', 'عائشة', 'الله', 'الرحمن'];
    const nameInput = document.getElementById('arabicName');
    
    // Add quick buttons for sample names (could be implemented later)
    console.log('Sample names available:', sampleNames);
}