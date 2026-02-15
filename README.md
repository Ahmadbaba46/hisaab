# 🕌 Hisaab - Arabic Name Numerology Library

> Complete JavaScript library for Arabic name analysis using traditional Abjad calculation, Islamic wisdom, and authentic Arabic astrology.

[![Version](https://img.shields.io/badge/version-1.4.0-green.svg)](https://github.com/Ahmadbaba46/hisaab)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Islamic](https://img.shields.io/badge/Islamic-☪️-gold.svg)](#islamic-features)

## 🌐 **Live Demo & Documentation**

| 🚀 **Try It Now** | 📚 **Learn More** | 🎯 **Developers** |
|:------------------:|:------------------:|:------------------:|
| **[Web Calculator](https://ahmadbaba46.github.io/hisaab/public/)** | **[Documentation](https://ahmadbaba46.github.io/hisaab/docs/)** | **[Choose Version](https://ahmadbaba46.github.io/hisaab/version-selector.html)** |
| Try Arabic numerology instantly | Complete API guide | Select your preferred version |

## ✨ Features

### Core Features (v1.0.0)
- 🔢 **Complete Abjad Calculation** - All 28+ Arabic letters including ة
- ☪️ **Islamic Analysis** - 99 Names of Allah, Quranic connections, spiritual guidance
- 🌙 **Arabic Astrology** - Traditional elements, planets, zodiac (% 4, % 7, % 12)
- 💕 **حساب الشريك** - Authentic Arabic partner compatibility
- 📖 **Quranic Connections** - Verse matching and spiritual significance
- ✨ **Asma ul Husna Matching** - Divine name recognition

### v1.1.0 - Islamic Enhancement
- 🌙 **28 Lunar Mansions** (منازل القمر) - Traditional lunar station correlations
- 📚 **Extended Quranic Database** - More verse connections
- 🤲 **Enhanced Spiritual Guidance** - Deeper Islamic insights

### v1.2.0 - Cultural Expansion
- 👤 **Prophetic Names** - Recognition of Prophet's and Companions' names
- 🏛️ **Cultural Context** - Historical and regional significance
- 📜 **Enhanced Analysis** - More detailed interpretations

### v1.3.0 - Advanced Features
- 💼 **Business Name Analysis** - Company success indicators & industry recommendations
- 📅 **Date Integration** - Birth date compatibility & life path analysis
- 🔮 **Advanced Numerology** - Master numbers (11, 22, 33, 44), karmic debt (13, 14, 16, 19)
- 🕌 **Enhanced Prayer Guidance** - Prayer time correlations & personalized dhikr plans
- ⭐ **Complete Astrology** - Elements, planetary influences, zodiac signs

### v1.4.0 - Geographic & AI Features (Current)
- 🌍 **Geographic Analysis** - 6 regional patterns (Gulf, Levantine, North African, Iraqi, Yemeni, Sudanese)
- 🤖 **AI Recommendations** - Smart name suggestions based on criteria
- 💼 **Industry Optimization** - Business names optimized for 10 industries
- 📄 **Multi-Format Export** - JSON, HTML, Text, Markdown reports
- 📚 **Historical Database** - Prophets, Sahaba, Scholars, Rulers, Poets
- 🌙 **Hijri Calendar** - Full conversion, blessed dates, monthly recommendations
- 👨‍👩‍👧‍👦 **Group Analysis** - Family tree and group compatibility

### Web Interface
- 🌐 **Modular Web App** - Clean, maintainable architecture
- 📑 **Organized Tabs** - Filter results by category (All, v1.4.0, Islamic, Astrology, Export)
- 🎬 **Smooth Animations** - Scroll reveal, fade-in, hover effects
- 💾 **Export Options** - Text, JSON, HTML, Print/PDF, Clipboard
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Beautiful UI** - Islamic-themed with gradient accents
- 🌍 **Regional Analysis** - Geographic patterns in web interface
- 🤖 **AI Suggestions** - Smart recommendations tab
- 🌙 **Hijri Display** - Current Islamic date and blessed days

## 🚀 Quick Start

### 🌐 Try Online (No Installation)
**Live Demo**: [https://ahmadbaba46.github.io/hisaab/public/](https://ahmadbaba46.github.io/hisaab/public/)

### 📦 Installation
```bash
npm install hisaab
```

## Usage

### Basic Usage

```javascript
const Hisaab = require('hisaab');

// Create an instance with an Arabic name
const name = new Hisaab('محمد');

console.log(name.getName());    // 'محمد'
console.log(name.getValue());   // 92
console.log(name.toString());   // 'محمد = 92'
```

### Methods

#### Constructor
```javascript
new Hisaab(arabicName)
```
- `arabicName` (string): The Arabic name to calculate

#### Basic Methods

- `getName()`: Returns the stored Arabic name
- `getValue()`: Returns the calculated Abjad value
- `getBreakdown()`: Returns an array of objects showing each letter and its value
- `toString()`: Returns a formatted string representation

#### Enhanced Numerological Methods

- `getDigitRoot()`: Calculate digit root (repeated sum until single digit)
- `getNumerology()`: Get comprehensive numerological properties
- `getDigitSum()`: Get sum of all digits in the value
- `getLuckyNumbers()`: Generate lucky numbers based on name value
- `getDetailedAnalysis()`: Get complete formatted analysis

#### Advanced Analysis Methods

- `getClassification()`: Get name classification with both Western and Arabic elements
- `getAstrological()`: Get comprehensive astrological analysis (both systems)
- `getWesternAstrology()`: Get Western astrological associations (Pythagorean/Chaldean)
- `getArabicAstrology()`: Get Arabic astrological associations (Traditional Islamic)
- `getPersonalityTraits()`: Get personality traits based on numerology
- `getCompleteReport()`: Generate comprehensive analysis report
- `findSimilarNames(nameList, tolerance)`: Find names with similar values

#### Islamic Features

- `getAsmaUlHusnaMatch()`: Check if name matches 99 Names of Allah
- `findSimilarAsmaUlHusna(tolerance)`: Find similar Divine Names
- `getQuranicConnection()`: Get Quranic verse connections
- `getIslamicAnalysis()`: Complete Islamic spiritual analysis
- `getIslamicQualities()`: Get Islamic character qualities
- `getIslamicGuidance()`: Get spiritual guidance and dhikr recommendations
- `getPrayerTimeCorrelations()`: **NEW v1.3.0** - Prayer time guidance & dhikr plans
- `getExtendedQuranicConnections()`: **NEW v1.3.0** - Broader Quranic verse database
- `getDailyDhikrPlan()`: **NEW v1.3.0** - Personalized morning/evening/after-prayer dhikr

#### Business Analysis (v1.3.0)

- `getBusinessAnalysis()`: Complete business name analysis with success indicators
- `getRecommendedIndustries()`: Industry recommendations based on name energy
- `getBusinessOverallAssessment()`: Overall business potential rating (1-10)

#### Date Integration (v1.3.0)

- `getLifePathCompatibility(day, month, year)`: Birth date compatibility with name
- `calculatePersonalYear(year, month, day)`: Current year cycle analysis (1-9)
- `calculateNameDateCompatibility()`: Name-life path compatibility scoring (0-100)

#### Advanced Numerology (v1.3.0)

- `getAdvancedNumerology()`: Master numbers, karmic debt, hidden potential
- `checkMasterNumbers()`: Detect master numbers (11, 22, 33, 44)
- `checkKarmicNumbers()`: Identify karmic debt numbers (13, 14, 16, 19)
- `getHiddenPotential()`: Discover dominant and missing numbers in name

#### Compatibility Methods

- `compareWith(otherName)`: Complete compatibility analysis (both systems)
- `getWesternCompatibility(otherName)`: Western numerological compatibility
- `getArabicCompatibility(otherName)`: Arabic حساب الشريك (Partner Calculation)
- `getArabicCompatibilityInterpretation(house)`: Get interpretation for specific house

#### Static Methods

- `Hisaab.calculate(arabicName)`: Calculate value without creating an instance
- `Hisaab.compare(name1, name2)`: Compare two names (both systems)
- `Hisaab.compareArabic(name1, name2)`: Arabic compatibility only
- `Hisaab.compareWestern(name1, name2)`: Western compatibility only
- `Hisaab.analyzeMultiple(names)`: Analyze multiple names at once
- `Hisaab.findMostCompatible(names)`: Find most compatible pair from list

#### Static Islamic Methods

- `Hisaab.getAsmaUlHusnaAnalysis()`: Complete analysis of 99 Names of Allah
- `Hisaab.findAsmaByValue(value)`: Find Divine Names by numerical value
- `Hisaab.getQuranicConnectionByValue(value)`: Get Quranic connections
- `Hisaab.analyzeNamesIslamically(names)`: Islamic analysis of multiple names
- `Hisaab.getAsmaStatistics()`: Statistics about the 99 Names

### Examples

```javascript
const Hisaab = require('hisaab');

// Example 1: Basic calculation
const muhammad = new Hisaab('محمد');
console.log(muhammad.getValue()); // 92

// Example 2: Get breakdown
const ali = new Hisaab('علي');
console.log(ali.getBreakdown());
// [
//   { letter: 'ع', value: 70 },
//   { letter: 'ل', value: 30 },
//   { letter: 'ي', value: 10 }
// ]

// Example 3: Static calculation
const value = Hisaab.calculate('فاطمة');
console.log(value); // 135

// Example 4: Business Analysis (v1.3.0)
const business = new Hisaab('شركة');
const bizAnalysis = business.getBusinessAnalysis();
console.log(bizAnalysis.overallAssessment.rating); // 8/10
console.log(bizAnalysis.recommendedIndustries);
// ['Technology', 'Finance', 'Consulting']

// Example 5: Date Compatibility (v1.3.0)
const person = new Hisaab('أحمد');
const lifePath = person.getLifePathCompatibility(15, 7, 1990);
console.log(lifePath.compatibility.score); // 85/100
console.log(lifePath.compatibility.level); // "Excellent Compatibility"

// Example 6: Advanced Numerology (v1.3.0)
const advanced = muhammad.getAdvancedNumerology();
console.log(advanced.masterNumbers.isMasterNumber); // false
console.log(advanced.hiddenPotential.dominantNumber); // 2

// Example 7: Prayer Guidance (v1.3.0)
const prayer = muhammad.getPrayerTimeCorrelations();
console.log(prayer.favorablePrayer); // "Fajr"
console.log(prayer.dhikrPlan.morning); // "لا إله إلا الله (100 times)"

// Example 8: Geographic Analysis (v1.4.0)
const regional = muhammad.getRegionalPattern('gulf');
console.log(regional.regionalCompatibility.score); // 60

// Example 9: AI Recommendations (v1.4.0)
const suggestions = Hisaab.getSmartRecommendations({ 
    desiredDigitRoot: 7, 
    purpose: 'business',
    maxResults: 5
});
console.log(suggestions.recommendations[0].name); // "إبراهيم"

// Example 10: Hijri Calendar (v1.4.0)
const hijri = Hisaab.getCurrentHijri();
console.log(hijri.monthName); // "شعبان"
console.log(Hisaab.toHijri(2025, 1, 1)); // { year: 1446, month: 6, day: 1 }

// Example 11: Historical Context (v1.4.0)
const history = muhammad.getHistoricalContext();
console.log(history.sahabiInfo); // Sahaba information if name matches

// Example 12: Export Analysis (v1.4.0)
const report = muhammad.exportAnalysis('html'); // HTML report
const json = muhammad.exportAnalysis('json');   // JSON export

// Example 4: Advanced features
const report = muhammad.getCompleteReport();
console.log(report.astrological); // { planet: 'Moon', favorableColor: 'Silver/White', ... }

// Example 5: Compatibility analysis
const compatibility = Hisaab.compare('محمد', 'علي');
console.log(compatibility.compatibility); // 'Excellent'

// Example 6: Multiple name analysis
const results = Hisaab.analyzeMultiple(['محمد', 'فاطمة', 'علي']);
console.log(results); // Array of analysis results

// Example 7: Islamic Features
const muhammad = new Hisaab('محمد');
const islamicAnalysis = muhammad.getIslamicAnalysis();
console.log(islamicAnalysis.quranicConnection); // Prophetic connection
console.log(islamicAnalysis.islamicQualities); // ['Balance in Deen', 'Harmony', ...]

// Example 8: Divine Names Analysis
const allah = new Hisaab('الله');
const divineMatch = allah.getAsmaUlHusnaMatch();
console.log(divineMatch.spiritualSignificance); // Divine significance

// Example 9: Find similar Divine Names
const fatima = new Hisaab('فاطمة');
const similarDivine = fatima.findSimilarAsmaUlHusna(20);
console.log(similarDivine[0].connection); // 'Exact match - your name shares...'

// Example 10: Dual Astrology Systems
const name = new Hisaab('محمد');
const astrology = name.getAstrological();

// Arabic System
console.log(astrology.arabic.element); 
// { name: 'Water', arabic: 'الماء', calculation: '92 % 4 = 0 → Water' }

console.log(astrology.arabic.planet);
// { name: 'Sun', arabic: 'الشمس', favorableDay: 'Sunday' }

// Western System  
console.log(astrology.western.planet); // 'Moon'
console.log(astrology.western.favorableColor); // 'Silver/White'

// Example 11: Arabic Compatibility (حساب الشريك)
const compatibility = Hisaab.compareArabic('أحمد', 'خديجة');
console.log(compatibility.partnerHouse); // 7
console.log(compatibility.interpretation.quality); // 'Very Good (ممتاز)'
console.log(compatibility.calculation); // '8 + 1 + 7 = 16 → 7'

// Complete compatibility analysis (both systems)
const fullComp = Hisaab.compare('محمد', 'فاطمة');
console.log(fullComp.arabic.partnerHouse); // 9 (Very Bad)
console.log(fullComp.western.compatibilityScore); // 10%
```

## 🏠 Arabic Compatibility Houses (حساب الشريك)

| House | Quality | Rating | Description |
|-------|---------|--------|-------------|
| 1 | Bad | 6/10 | Starts good, faces challenges later |
| 2 | Good | 6/10 | Wealth but complications, woman faces family issues |
| 3 | Very Bad | 7/10 | Family conflicts, wealth after loss |
| 4 | Very Good | 7/10 | Clean wealth, possible divorce in 5 years |
| 5 | Neutral | 5/10 | Good for politicians/famous, many children |
| 6 | Very Bad | 9/10 | Misfortune but peaceful coexistence |
| **7** | **Very Good** | **10/10** | **Perfect harmony - Most wanted house** |
| 8 | Neutral | 5/10 | Excellent for scholars/royals, bad for business |
| 9 | Very Bad | 10/10 | Worst case - loss before marriage, breakup |
```

## Abjad System

The Abjad system assigns numerical values to Arabic letters according to their traditional order:

| Letter | Value | Letter | Value | Letter | Value |
|--------|-------|--------|-------|--------|-------|
| ا      | 1     | ك      | 20    | ر      | 200   |
| ب      | 2     | ل      | 30    | ش      | 300   |
| ج      | 3     | م      | 40    | ت      | 400   |
| د      | 4     | ن      | 50    | ث      | 500   |
| ه      | 5     | س      | 60    | خ      | 600   |
| و      | 6     | ع      | 70    | ذ      | 700   |
| ز      | 7     | ف      | 80    | ض      | 800   |
| ح      | 8     | ص      | 90    | ظ      | 900   |
| ط      | 9     | ق      | 100   | غ      | 1000  |
| ي      | 10    |        |       |        |       |

## Features

### Core Features
- ✅ Complete Abjad system implementation (28+ Arabic letters)
- ✅ Support for Arabic letter variants (أ، إ، آ، ة، etc.)
- ✅ Detailed breakdown of letter values
- ✅ Error handling for invalid inputs
- ✅ Static methods for quick calculations
- ✅ Ignores diacritics and non-Arabic characters

### Advanced Features
- ✅ **Numerological Analysis**: Digit root, numerology categories, personality traits
- ✅ **Dual Astrological Systems**: Both Western and Traditional Arabic astrology
- ✅ **Name Classification**: Strength levels, dual elemental associations, energy types
- ✅ **Dual Compatibility Systems**: Both Western scoring and Arabic حساب الشريك
- ✅ **Lucky Numbers**: Generate personalized lucky numbers
- ✅ **Batch Processing**: Analyze multiple names simultaneously
- ✅ **Similar Name Search**: Find names with similar numerical values
- ✅ **Comprehensive Reports**: Complete analysis in structured format

### Astrological Systems 🌟
- ✅ **Arabic Astrology**: Traditional Islamic system with classical 7 planets
  - Elements: Value % 4 (Fire=1, Earth=2, Air=3, Water=0)
  - Planets: Value % 7 (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn)
  - Zodiac: Value % 12 (12 zodiac signs starting with Aries)
  - Includes Arabic names and classical temperaments
- ✅ **Western Astrology**: Pythagorean/Chaldean system
  - Elements: Digit root based (includes modern planets)
  - Colors: Traditional planetary color associations
  - Based on numerological reduction (1-9)

### Islamic Features ☪️
- ✅ **99 Names of Allah**: Complete analysis of Asma ul-Husna with meanings
- ✅ **Quranic Connections**: Link names to Quranic verses and significance
- ✅ **Islamic Guidance**: Personalized dhikr and spiritual recommendations
- ✅ **Divine Name Matching**: Check if names match any of Allah's names
- ✅ **Islamic Qualities**: Character traits based on Islamic numerology
- ✅ **Spiritual Analysis**: Complete Islamic spiritual profile

### Compatibility Systems 💕
- ✅ **حساب الشريك (Arabic Partner Calculation)**: Traditional Arabic method
  - Formula: (DigitRoot1 + DigitRoot2 + 7) → Final Digit Root
  - 9 Houses with detailed predictions for relationships/marriage
  - Includes wealth, family, and life predictions
  - House 7 = Best (Perfect Harmony), Houses 6,9 = Avoid
- ✅ **Western Compatibility**: Pythagorean numerological scoring
  - Based on digit root harmony and value relationships
  - Percentage-based compatibility scoring

## License

MIT