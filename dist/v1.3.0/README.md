# Hisaab v1.3.0

> Arabic Abjad Numerology Library with Business Analysis, Date Integration, Advanced Numerology, and Enhanced Islamic Features

## 🎉 What's New in v1.3.0

### 💼 Business Name Analysis
- Complete company name analysis with success indicators
- Industry recommendations based on name energy
- Partnership house analysis (1-9 houses)
- Best timing guidance for business launches
- Overall business potential rating (1-10)

### 📅 Date Integration & Life Path
- Birth date numerology integration with name analysis
- Life path number calculation
- Name-date compatibility scoring (0-100)
- Personal year cycles (1-9)
- Energy harmonization guidance

### 🔮 Advanced Numerology
- Master numbers detection (11, 22, 33, 44)
- Karmic debt identification (13, 14, 16, 19)
- Hidden potential discovery
- Soul urge & personality numbers
- Dominant/missing number analysis

### 🕌 Enhanced Islamic Features
- Prayer time correlations with name energy
- Personalized dhikr recommendations
- Daily dhikr plans (morning/evening/after-prayer)
- Extended Quranic verse connections
- Spiritual alignment guidance

## 📦 Installation

```bash
npm install hisaab@1.3.0
```

Or download directly from dist folder.

## 🚀 Quick Start

```javascript
const Hisaab = require('./hisaab.js');

// Basic calculation
const name = new Hisaab('محمد');
console.log(name.getValue());      // 92
console.log(name.getDigitRoot());  // 2

// 💼 Business Analysis (NEW in v1.3.0)
const business = new Hisaab('شركة');
const analysis = business.getBusinessAnalysis();
console.log(analysis.overallAssessment.rating);  // 8/10
console.log(analysis.recommendedIndustries);

// 📅 Date Compatibility (NEW in v1.3.0)
const person = new Hisaab('أحمد');
const lifePath = person.getLifePathCompatibility(15, 7, 1990);
console.log(lifePath.compatibility.score);  // 85/100
console.log(lifePath.lifePathPattern);

// 🔮 Advanced Numerology (NEW in v1.3.0)
const advanced = name.getAdvancedNumerology();
console.log(advanced.masterNumbers);  // Master number detection
console.log(advanced.hiddenPotential);

// 🕌 Prayer Guidance (NEW in v1.3.0)
const prayer = name.getPrayerTimeCorrelations();
console.log(prayer.favorablePrayer);  // Best prayer time
console.log(prayer.dhikrPlan);  // Daily dhikr schedule
```

## 📚 New Methods in v1.3.0

### Business Analysis
- `getBusinessAnalysis()` - Complete business name analysis
- `getRecommendedIndustries()` - Industry recommendations
- `getBusinessOverallAssessment()` - Business potential rating

### Date Integration
- `getLifePathCompatibility(day, month, year)` - Birth date compatibility
- `calculatePersonalYear(year, month, day)` - Current year analysis
- `calculateNameDateCompatibility()` - Compatibility scoring

### Advanced Numerology
- `getAdvancedNumerology()` - Complete advanced analysis
- `checkMasterNumbers()` - Master number detection
- `checkKarmicNumbers()` - Karmic debt analysis
- `getHiddenPotential()` - Pattern discovery

### Enhanced Islamic Features
- `getPrayerTimeCorrelations()` - Prayer guidance
- `getDailyDhikrPlan()` - Personalized dhikr
- `getExtendedQuranicConnections()` - More Quranic verses

## 📋 Files Included

- `hisaab.js` - Main library (v1.3.0)
- `islamic_data.js` - 99 Names of Allah & Quranic connections
- `lunar_mansions_data.js` - 28 Lunar mansions data
- `enhanced_islamic_data.js` - Extended Quranic database & prayer correlations
- `business_analysis_data.js` - Business success indicators & industry patterns
- `advanced_numerology_data.js` - Life path, master numbers, karmic numbers

## 🔄 Compatibility

✅ **Fully backward compatible** with v1.0.0, v1.1.0, and v1.2.0  
✅ All previous methods still work  
✅ No breaking changes

## 📖 Documentation

For complete documentation, visit:
- [Main Repository](https://github.com/Ahmadbaba46/hisaab)
- [Release Notes](https://github.com/Ahmadbaba46/hisaab/blob/main/RELEASE_NOTES_v1.3.0.md)

## ✨ Features Summary

- ✅ Complete Abjad calculation (28+ Arabic letters)
- ✅ Islamic analysis (99 Names of Allah, Quranic connections)
- ✅ Marriage compatibility (حساب الشريك)
- ✅ Arabic astrology (Elements, planets, zodiac)
- ✅ 28 Lunar mansions (منازل القمر)
- ✅ Cultural context and prophetic names
- ✅ **Business name analysis** (NEW)
- ✅ **Birth date integration** (NEW)
- ✅ **Advanced numerology** (NEW)
- ✅ **Prayer time correlations** (NEW)

## 🙏 Credits

This library respects and preserves:
- Traditional Arabic numerology (Abjad/Hisaab)
- Islamic spiritual practices
- Cultural authenticity
- Historical knowledge

## 📄 License

MIT License - Free to use and modify

---

**Version:** 1.3.0  
**Release Date:** 2024  
**Status:** ✅ Production Ready

*Alhamdulillah - May this benefit the Ummah* 🌙
