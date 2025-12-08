# 📚 Hisaab Usage Examples & Tutorials

Complete guide with practical examples for all features in Hisaab v1.3.0

---

## 📖 Table of Contents

1. [Getting Started](#getting-started)
2. [Basic Calculations](#basic-calculations)
3. [Business Name Analysis](#business-name-analysis)
4. [Date Integration & Life Path](#date-integration--life-path)
5. [Advanced Numerology](#advanced-numerology)
6. [Islamic Features](#islamic-features)
7. [Real-World Use Cases](#real-world-use-cases)
8. [Best Practices](#best-practices)

---

## 🚀 Getting Started

### Installation

```javascript
// Node.js
const Hisaab = require('./index.js');

// Or from dist
const Hisaab = require('./dist/v1.3.0/hisaab.js');

// Browser
<script src="dist/v1.3.0/hisaab.js"></script>
```

### First Example

```javascript
const Hisaab = require('./index.js');

// Create instance with Arabic name
const name = new Hisaab('محمد');

// Get basic information
console.log('Name:', name.getName());          // محمد
console.log('Value:', name.getValue());        // 92
console.log('Digit Root:', name.getDigitRoot()); // 2
```

---

## 📊 Basic Calculations

### Example 1: Simple Name Calculation

```javascript
const Hisaab = require('./index.js');

// Different Arabic names
const names = ['محمد', 'أحمد', 'فاطمة', 'عائشة', 'علي'];

names.forEach(name => {
    const h = new Hisaab(name);
    console.log(`\n${name}:`);
    console.log(`  Value: ${h.getValue()}`);
    console.log(`  Digit Root: ${h.getDigitRoot()}`);
});
```

**Output:**
```
محمد:
  Value: 92
  Digit Root: 2

أحمد:
  Value: 53
  Digit Root: 8

فاطمة:
  Value: 135
  Digit Root: 9
...
```

### Example 2: Letter-by-Letter Breakdown

```javascript
const name = new Hisaab('محمد');
const breakdown = name.getBreakdown();

console.log('Letter Breakdown:');
breakdown.forEach(letter => {
    console.log(`  ${letter.letter}: ${letter.value}`);
});

// Output:
// م: 40
// ح: 8
// م: 40
// د: 4
```

### Example 3: Static Calculation

```javascript
// Quick calculation without creating instance
const value = Hisaab.calculate('علي');
console.log('Value of علي:', value); // 110
```

---

## 💼 Business Name Analysis

### Example 4: Complete Business Analysis

```javascript
const Hisaab = require('./index.js');

const companyName = new Hisaab('شركة التقنية');
const analysis = companyName.getBusinessAnalysis();

console.log('=== Business Analysis ===');
console.log('Company:', analysis.name);
console.log('Abjad Value:', analysis.value);
console.log('Digit Root:', analysis.digitRoot);
console.log('\nSuccess Indicators:');
console.log('  Range:', analysis.successIndicators.range);
console.log('  Strengths:', analysis.strengths);
console.log('  Challenges:', analysis.challenges);
console.log('\nPartnership Analysis:');
console.log('  Type:', analysis.partnershipAnalysis.businessType);
console.log('  Recommendation:', analysis.partnershipAnalysis.recommendation);
console.log('\nOverall Assessment:');
console.log('  Rating:', analysis.overallAssessment.rating, '/10');
console.log('  Summary:', analysis.overallAssessment.summary);
console.log('\nRecommended Industries:');
analysis.recommendedIndustries.forEach(industry => {
    console.log('  •', industry);
});
```

### Example 5: Compare Multiple Business Names

```javascript
const businessNames = [
    'شركة النور',
    'مؤسسة الأمل',
    'التجارة الذهبية'
];

console.log('=== Business Name Comparison ===\n');

businessNames.forEach(name => {
    const business = new Hisaab(name);
    const analysis = business.getBusinessAnalysis();
    
    console.log(`${name}:`);
    console.log(`  Rating: ${analysis.overallAssessment.rating}/10`);
    console.log(`  Value Range: ${analysis.successIndicators.range}`);
    console.log(`  Best For: ${analysis.partnershipAnalysis.businessType}`);
    console.log(`  Top Industry: ${analysis.recommendedIndustries[0]}`);
    console.log('');
});
```

### Example 6: Business Timing Advice

```javascript
const business = new Hisaab('متجر الكتب');
const analysis = business.getBusinessAnalysis();

console.log('Best Launch Timing:');
console.log('  Days:', analysis.timing.bestDays?.join(', '));
console.log('  Months:', analysis.timing.bestMonths?.join(', '));
console.log('  Guidance:', analysis.timing.launchTiming);
```

---

## 📅 Date Integration & Life Path

### Example 7: Name-Date Compatibility

```javascript
const Hisaab = require('./index.js');

const person = new Hisaab('أحمد');
const birthDate = { day: 15, month: 7, year: 1990 };

const compatibility = person.getLifePathCompatibility(
    birthDate.day,
    birthDate.month,
    birthDate.year
);

console.log('=== Life Path Compatibility ===');
console.log('Name:', compatibility.name);
console.log('Birth Date:', `${birthDate.day}/${birthDate.month}/${birthDate.year}`);
console.log('\nNumerology:');
console.log('  Name Digit Root:', compatibility.nameDigitRoot);
console.log('  Life Path Number:', compatibility.lifePathNumber);
console.log('\nCompatibility:');
console.log('  Score:', compatibility.compatibility.score, '/100');
console.log('  Level:', compatibility.compatibility.level);
console.log('  Description:', compatibility.compatibility.description);
console.log('\nLife Path Pattern:');
console.log('  Description:', compatibility.lifePathPattern.description);
console.log('  Strengths:', compatibility.lifePathPattern.strengths.join(', '));
console.log('  Challenges:', compatibility.lifePathPattern.challenges.join(', '));
console.log('\nHarmonization:');
console.log('  Combined Energy:', compatibility.harmonization.combinedEnergy);
console.log('  Advice:', compatibility.harmonization.advice);
console.log('  Resonance:', compatibility.harmonization.resonance);
```

### Example 8: Personal Year Analysis

```javascript
const person = new Hisaab('فاطمة');
const currentYear = 2024;
const birthMonth = 3;
const birthDay = 20;

const personalYear = person.calculatePersonalYear(
    currentYear,
    birthMonth,
    birthDay
);

console.log('=== Personal Year 2024 ===');
console.log('Personal Year Number:', personalYear.personalYear);
console.log('Theme:', personalYear.theme);
console.log('Focus:', personalYear.focus);
console.log('\nOpportunities:');
personalYear.opportunities.forEach(opp => {
    console.log('  •', opp);
});
console.log('\nChallenges:');
personalYear.challenges.forEach(challenge => {
    console.log('  •', challenge);
});
console.log('\nAdvice:', personalYear.advice);
console.log('Name Alignment:', personalYear.nameAlignment);
```

### Example 9: Find Best Name for Birth Date

```javascript
const birthDate = { day: 10, month: 5, year: 1995 };
const candidateNames = ['محمد', 'أحمد', 'علي', 'حسن', 'خالد'];

console.log('=== Finding Best Name Match ===');
console.log('Birth Date:', `${birthDate.day}/${birthDate.month}/${birthDate.year}\n`);

const results = candidateNames.map(name => {
    const person = new Hisaab(name);
    const compat = person.getLifePathCompatibility(
        birthDate.day,
        birthDate.month,
        birthDate.year
    );
    return {
        name: name,
        score: compat.compatibility.score,
        level: compat.compatibility.level
    };
});

// Sort by score
results.sort((a, b) => b.score - a.score);

console.log('Best Matches:');
results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.name}`);
    console.log(`   Score: ${result.score}/100 - ${result.level}\n`);
});
```

---

## 🔮 Advanced Numerology

### Example 10: Master Number Detection

```javascript
const Hisaab = require('./index.js');

// Names with different values
const testNames = [
    { name: 'نور', expectedValue: 256 },  // Check if master
    { name: 'أمل', expectedValue: 71 }
];

testNames.forEach(test => {
    const name = new Hisaab(test.name);
    const advanced = name.getAdvancedNumerology();
    
    console.log(`\n=== ${test.name} ===`);
    console.log('Value:', advanced.value);
    console.log('Digit Root:', advanced.digitRoot);
    
    if (advanced.masterNumbers.isMasterNumber) {
        console.log('✨ MASTER NUMBER DETECTED!');
        console.log('  Number:', advanced.masterNumbers.number);
        console.log('  Meaning:', advanced.masterNumbers.meaning);
        console.log('  Purpose:', advanced.masterNumbers.purpose);
        console.log('  Vibration:', advanced.masterNumbers.vibration);
    } else {
        console.log('No master number detected');
    }
});
```

### Example 11: Karmic Debt Analysis

```javascript
const name = new Hisaab('اسم'); // Use name with specific value
const advanced = name.getAdvancedNumerology();

console.log('=== Karmic Analysis ===');
console.log('Name:', advanced.name);
console.log('Value:', advanced.value);

if (advanced.karmicNumbers.isKarmicNumber) {
    console.log('\n⚠️  KARMIC DEBT DETECTED');
    console.log('  Number:', advanced.karmicNumbers.number);
    console.log('  Lesson:', advanced.karmicNumbers.lesson);
    console.log('  Challenge:', advanced.karmicNumbers.challenge);
    console.log('  Redemption:', advanced.karmicNumbers.redemption);
    console.log('  Gift:', advanced.karmicNumbers.gift);
} else {
    console.log('\n✅ No karmic debt');
}
```

### Example 12: Hidden Potential Discovery

```javascript
const name = new Hisaab('محمد علي');
const advanced = name.getAdvancedNumerology();

console.log('=== Hidden Potential Analysis ===');
console.log('Name:', advanced.name);
console.log('\nNumber Patterns:');
console.log('  Unique Numbers:', advanced.hiddenPotential.uniqueNumbers);
console.log('  Dominant Number:', advanced.hiddenPotential.dominantNumber);
console.log('  Repeated Numbers:', advanced.hiddenPotential.repeatedNumbers.join(', ') || 'None');
console.log('  Missing Numbers:', advanced.hiddenPotential.missingNumbers.join(', ') || 'None');
console.log('\nCore Numbers:');
console.log('  Soul Urge:', advanced.soulUrge);
console.log('  Personality:', advanced.personalityNumber);
console.log('  Digit Root:', advanced.digitRoot);
```

### Example 13: Complete Numerological Profile

```javascript
const person = new Hisaab('فاطمة الزهراء');

// Get all numerology data
const basic = {
    value: person.getValue(),
    digitRoot: person.getDigitRoot(),
    breakdown: person.getBreakdown()
};

const advanced = person.getAdvancedNumerology();
const lifePath = person.getLifePathCompatibility(5, 3, 1990);

console.log('=== Complete Numerological Profile ===');
console.log('\n📊 Basic Numerology:');
console.log('  Name:', person.getName());
console.log('  Total Value:', basic.value);
console.log('  Digit Root:', basic.digitRoot);
console.log('  Letter Count:', basic.breakdown.length);

console.log('\n🔮 Advanced Analysis:');
console.log('  Master Number:', advanced.masterNumbers.isMasterNumber ? 'Yes' : 'No');
console.log('  Karmic Debt:', advanced.karmicNumbers.isKarmicNumber ? 'Yes' : 'No');
console.log('  Unique Numbers:', advanced.hiddenPotential.uniqueNumbers);
console.log('  Soul Urge:', advanced.soulUrge);
console.log('  Personality:', advanced.personalityNumber);

console.log('\n🛤️  Life Path:');
console.log('  Life Path Number:', lifePath.lifePathNumber);
console.log('  Compatibility:', lifePath.compatibility.score + '/100');
console.log('  Pattern:', lifePath.lifePathPattern.description);
```

---

## 🕌 Islamic Features

### Example 14: Prayer Time Correlations

```javascript
const Hisaab = require('./index.js');

const name = new Hisaab('عبدالله');
const prayer = name.getPrayerTimeCorrelations();

console.log('=== Prayer Guidance ===');
console.log('Name:', prayer.name);
console.log('Digit Root:', prayer.digitRoot);
console.log('\n🕌 Favorable Prayer:');
console.log('  English:', prayer.favorablePrayer);
console.log('  Arabic:', prayer.arabicPrayer);
console.log('  Significance:', prayer.significance);
console.log('  Timing:', prayer.timing);
console.log('\n🤲 Personalized Guidance:');
console.log('  ', prayer.personalizedGuidance);

if (prayer.bestTimes) {
    console.log('\n⏰ Best Prayer Times:');
    prayer.bestTimes.forEach(time => {
        console.log('  •', time);
    });
}

if (prayer.dhikrPlan) {
    console.log('\n📿 Daily Dhikr Plan:');
    console.log('  Morning:', prayer.dhikrPlan.morning);
    console.log('  Evening:', prayer.dhikrPlan.evening);
    if (prayer.dhikrPlan.afterPrayer) {
        console.log('  After Prayer:', prayer.dhikrPlan.afterPrayer);
    }
}
```

### Example 15: Asma ul Husna Matching

```javascript
const name = new Hisaab('الرحمن');
const asmaMatch = name.getAsmaUlHusnaMatch();

if (asmaMatch) {
    console.log('=== Divine Name Match ===');
    console.log('✨ This name matches one of Allah\'s 99 Names!');
    console.log('\nDetails:');
    console.log('  Number:', asmaMatch.number);
    console.log('  Arabic:', asmaMatch.arabic);
    console.log('  Transliteration:', asmaMatch.transliteration);
    console.log('  Meaning:', asmaMatch.meaning);
    console.log('  Attribute:', asmaMatch.attribute);
} else {
    console.log('This name does not match any of the 99 Names');
}
```

### Example 16: Quranic Connections

```javascript
const name = new Hisaab('محمد');
const quranic = name.getQuranicConnection();

console.log('=== Quranic Connection ===');
console.log('Name Value:', name.getValue());

if (quranic) {
    console.log('\n📖 Connected Verse:');
    console.log('  Surah:', quranic.surah);
    console.log('  Ayah:', quranic.ayah);
    console.log('  Arabic:', quranic.arabic);
    console.log('  Translation:', quranic.translation);
    console.log('  Theme:', quranic.theme);
}

// Extended connections
const extended = name.getExtendedQuranicConnections();
console.log('\n📚 Extended Connections:', extended.length, 'verses found');
extended.slice(0, 3).forEach((conn, i) => {
    console.log(`\n${i + 1}. ${conn.type}`);
    console.log('   Surah ${conn.surah}:${conn.ayah}');
    console.log('   ', conn.significance);
});
```

### Example 17: Complete Islamic Analysis

```javascript
const name = new Hisaab('عمر');
const islamic = name.getIslamicAnalysis();

console.log('=== Complete Islamic Analysis ===');
console.log('Name:', name.getName());
console.log('Value:', islamic.value);
console.log('Digit Root:', islamic.digitRoot);

console.log('\n✨ Spiritual Analysis:');
if (islamic.asmaUlHusna) {
    console.log('  Divine Name Match: Yes -', islamic.asmaUlHusna.transliteration);
}

if (islamic.quranicConnection) {
    console.log('  Quranic Connection: Yes');
    console.log('  Surah:', islamic.quranicConnection.surah);
}

console.log('\n🌟 Islamic Qualities:');
const qualities = name.getIslamicQualities();
console.log('  Primary:', qualities.primary);
console.log('  Secondary:', qualities.secondary);
console.log('  Characteristics:', qualities.characteristics.join(', '));

console.log('\n🤲 Spiritual Guidance:');
const guidance = name.getIslamicGuidance();
console.log('  ', guidance.dhikr);
console.log('  ', guidance.prayer);
console.log('  ', guidance.charity);
```

---

## 🌟 Real-World Use Cases

### Use Case 1: Baby Name Selection

```javascript
const Hisaab = require('./index.js');

// Parents' information
const father = new Hisaab('أحمد');
const mother = new Hisaab('فاطمة');
const babyBirthDate = { day: 15, month: 6, year: 2024 };

// Candidate names
const candidates = ['محمد', 'علي', 'حسن', 'عمر', 'خالد'];

console.log('=== Baby Name Selection Tool ===\n');

const analysis = candidates.map(name => {
    const baby = new Hisaab(name);
    
    // Check compatibility with parents
    const fatherCompat = father.getMarriageCompatibility(baby);
    const motherCompat = mother.getMarriageCompatibility(baby);
    
    // Check life path
    const lifePath = baby.getLifePathCompatibility(
        babyBirthDate.day,
        babyBirthDate.month,
        babyBirthDate.year
    );
    
    // Check Islamic significance
    const islamic = baby.getIslamicAnalysis();
    const prayer = baby.getPrayerTimeCorrelations();
    
    return {
        name: name,
        value: baby.getValue(),
        digitRoot: baby.getDigitRoot(),
        fatherCompat: fatherCompat.score,
        motherCompat: motherCompat.score,
        lifePathScore: lifePath.compatibility.score,
        hasAsmaMatch: islamic.asmaUlHusna ? 'Yes' : 'No',
        favorablePrayer: prayer.favorablePrayer,
        overallScore: (fatherCompat.score + motherCompat.score + lifePath.compatibility.score) / 3
    };
});

// Sort by overall score
analysis.sort((a, b) => b.overallScore - a.overallScore);

console.log('Recommended Names (Best to Good):\n');
analysis.forEach((result, index) => {
    console.log(`${index + 1}. ${result.name} (${result.digitRoot})`);
    console.log(`   Overall Score: ${result.overallScore.toFixed(1)}/100`);
    console.log(`   Father Compatibility: ${result.fatherCompat}/100`);
    console.log(`   Mother Compatibility: ${result.motherCompat}/100`);
    console.log(`   Life Path Match: ${result.lifePathScore}/100`);
    console.log(`   Divine Name: ${result.hasAsmaMatch}`);
    console.log(`   Prayer Focus: ${result.favorablePrayer}`);
    console.log('');
});
```

### Use Case 2: Business Partner Compatibility

```javascript
const partner1 = new Hisaab('أحمد التجاري');
const partner2 = new Hisaab('محمد الصناعي');
const businessName = new Hisaab('شركة الشراكة');

console.log('=== Business Partnership Analysis ===\n');

// Individual analysis
console.log('Partner 1:', partner1.getName());
const p1Business = partner1.getBusinessAnalysis();
console.log('  Business Rating:', p1Business.overallAssessment.rating + '/10');
console.log('  Strength:', p1Business.partnershipAnalysis.businessType);

console.log('\nPartner 2:', partner2.getName());
const p2Business = partner2.getBusinessAnalysis();
console.log('  Business Rating:', p2Business.overallAssessment.rating + '/10');
console.log('  Strength:', p2Business.partnershipAnalysis.businessType);

// Partnership compatibility
const compatibility = partner1.getMarriageCompatibility(partner2);
console.log('\nPartnership Compatibility:', compatibility.score + '/100');
console.log('Level:', compatibility.level);

// Business name analysis
console.log('\nBusiness Name:', businessName.getName());
const bizAnalysis = businessName.getBusinessAnalysis();
console.log('  Rating:', bizAnalysis.overallAssessment.rating + '/10');
console.log('  Summary:', bizAnalysis.overallAssessment.summary);
console.log('  Recommended:', bizAnalysis.recommendedIndustries[0]);

// Overall recommendation
const overallScore = (
    p1Business.overallAssessment.rating +
    p2Business.overallAssessment.rating +
    bizAnalysis.overallAssessment.rating +
    (compatibility.score / 10)
) / 4;

console.log('\n=== Overall Partnership Assessment ===');
console.log('Combined Score:', overallScore.toFixed(1) + '/10');
if (overallScore >= 7) {
    console.log('✅ HIGHLY RECOMMENDED partnership');
} else if (overallScore >= 5) {
    console.log('⚠️  PROCEED WITH CAUTION - needs planning');
} else {
    console.log('❌ NOT RECOMMENDED - consider alternatives');
}
```

### Use Case 3: Personal Year Planning

```javascript
const person = new Hisaab('سارة');
const birthDate = { day: 20, month: 4, year: 1992 };
const currentYear = 2024;

console.log('=== Personal Year Planning 2024 ===\n');
console.log('Name:', person.getName());
console.log('Birth Date:', `${birthDate.day}/${birthDate.month}/${birthDate.year}\n`);

// Get personal year
const yearAnalysis = person.calculatePersonalYear(
    currentYear,
    birthDate.month,
    birthDate.day
);

console.log('Personal Year Number:', yearAnalysis.personalYear);
console.log('Theme:', yearAnalysis.theme);
console.log('\n📋 Year Focus:', yearAnalysis.focus);

console.log('\n✨ Opportunities This Year:');
yearAnalysis.opportunities.forEach(opp => {
    console.log('  •', opp);
});

console.log('\n⚠️  Challenges to Watch:');
yearAnalysis.challenges.forEach(challenge => {
    console.log('  •', challenge);
});

console.log('\n💡 Recommended Actions:', yearAnalysis.advice);

// Prayer guidance
const prayer = person.getPrayerTimeCorrelations();
console.log('\n🕌 Spiritual Focus:');
console.log('  Emphasis on:', prayer.favorablePrayer);
console.log('  Daily Practice:', prayer.dhikrPlan.morning);

// Business considerations if applicable
const business = person.getBusinessAnalysis();
console.log('\n💼 Business Considerations:');
console.log('  Business Rating:', business.overallAssessment.rating + '/10');
if (yearAnalysis.theme.includes('Work') || yearAnalysis.theme.includes('Achievement')) {
    console.log('  ✅ Good year for business initiatives');
} else {
    console.log('  ⚠️  Focus on other priorities this year');
}
```

---

## 💡 Best Practices

### 1. Error Handling

```javascript
try {
    const name = new Hisaab('محمد');
    const value = name.getValue();
    console.log('Value:', value);
} catch (error) {
    console.error('Error calculating name:', error.message);
}
```

### 2. Input Validation

```javascript
function analyzeName(arabicName) {
    // Validate input
    if (!arabicName || typeof arabicName !== 'string') {
        throw new Error('Invalid name: must be a non-empty string');
    }
    
    // Check if contains Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;
    if (!arabicRegex.test(arabicName)) {
        console.warn('Warning: Name may not contain Arabic characters');
    }
    
    const name = new Hisaab(arabicName);
    return name.getValue();
}
```

### 3. Batch Processing

```javascript
const names = ['محمد', 'أحمد', 'علي', 'فاطمة', 'عائشة'];

// Process multiple names efficiently
const results = names.map(name => {
    const h = new Hisaab(name);
    return {
        name: name,
        value: h.getValue(),
        digitRoot: h.getDigitRoot(),
        islamic: h.getIslamicAnalysis()
    };
});

// Sort by value
results.sort((a, b) => b.value - a.value);

console.log('Names sorted by value:');
results.forEach(r => {
    console.log(`${r.name}: ${r.value} (Root: ${r.digitRoot})`);
});
```

### 4. Caching Results

```javascript
class NameAnalysisCache {
    constructor() {
        this.cache = new Map();
    }
    
    analyze(name) {
        if (this.cache.has(name)) {
            console.log('Using cached result');
            return this.cache.get(name);
        }
        
        const h = new Hisaab(name);
        const result = {
            value: h.getValue(),
            digitRoot: h.getDigitRoot(),
            business: h.getBusinessAnalysis(),
            prayer: h.getPrayerTimeCorrelations()
        };
        
        this.cache.set(name, result);
        return result;
    }
}

// Usage
const cache = new NameAnalysisCache();
const analysis1 = cache.analyze('محمد'); // Calculates
const analysis2 = cache.analyze('محمد'); // Uses cache
```

---

## 🎓 Learning Path

### Beginner Level
1. Start with basic calculations (Examples 1-3)
2. Understand digit root concept
3. Try marriage compatibility

### Intermediate Level
1. Explore business analysis (Examples 4-6)
2. Learn date integration (Examples 7-9)
3. Study Islamic features (Examples 14-17)

### Advanced Level
1. Master advanced numerology (Examples 10-13)
2. Build custom analysis tools
3. Create comprehensive reports (Use Cases 1-3)

---

## 📝 Notes

- All examples use Arabic names for authentic results
- Business analysis works best with company names in Arabic
- Date integration requires accurate birth dates
- Islamic features respect traditional knowledge
- Test examples with your own data for best learning

---

**For More Information:**
- Main Documentation: [README.md](README.md)
- API Reference: [index.js](index.js)
- Release Notes: [RELEASE_NOTES_v1.3.0.md](RELEASE_NOTES_v1.3.0.md)

---

*Created for Hisaab v1.3.0 - May this guide benefit all learners* 🌟
