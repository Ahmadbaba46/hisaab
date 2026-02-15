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