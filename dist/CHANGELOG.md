# Hisaab Distribution Changelog

## v1.3.0 (2024)

### 🎉 Major Features Added

#### 💼 Business Name Analysis
- Complete company name analysis with success indicators
- Industry recommendations based on name energy
- Partnership house analysis (1-9 houses)
- Best timing guidance for business launches
- Overall business potential rating (1-10)

**New Files:**
- `business_analysis_data.js` - Business success indicators and industry patterns

**New Methods:**
- `getBusinessAnalysis()` - Complete business name analysis
- `getRecommendedIndustries()` - Industry recommendations
- `getBusinessOverallAssessment()` - Business potential rating

#### 📅 Date Integration & Life Path
- Birth date numerology integration with name analysis
- Life path number calculation from birth date
- Name-date compatibility scoring (0-100)
- Personal year cycles (1-9)
- Energy harmonization guidance

**New Methods:**
- `getLifePathCompatibility(day, month, year)` - Birth date compatibility
- `calculatePersonalYear(year, month, day)` - Current year analysis
- `calculateNameDateCompatibility()` - Compatibility scoring
- `getNameDateHarmonization()` - Harmonization advice

#### 🔮 Advanced Numerology
- Master numbers detection (11, 22, 33, 44)
- Karmic debt identification (13, 14, 16, 19)
- Hidden potential discovery (dominant/missing numbers)
- Soul urge & personality numbers
- Unique number pattern analysis

**New Files:**
- `advanced_numerology_data.js` (enhanced) - Life path patterns, master numbers, karmic numbers

**New Methods:**
- `getAdvancedNumerology()` - Complete advanced analysis
- `checkMasterNumbers()` - Master number detection
- `checkKarmicNumbers()` - Karmic debt analysis
- `getHiddenPotential()` - Pattern discovery
- `calculateSoulUrge()` - Soul urge number
- `calculatePersonalityNumber()` - Personality number

#### 🕌 Enhanced Islamic Features
- Prayer time correlations with name energy
- Personalized dhikr recommendations
- Daily dhikr plans (morning/evening/after-prayer)
- Extended Quranic verse connections
- Spiritual alignment guidance

**New Methods:**
- `getPrayerTimeCorrelations()` - Prayer guidance with dhikr
- `getDailyDhikrPlan()` - Personalized daily dhikr
- `getPrayerTimingAdvice()` - Best prayer times
- `getExtendedQuranicConnections()` - More Quranic verses

### 📦 Files in v1.3.0 Distribution:
- `hisaab.js` (93.9 KB) - Main library with all v1.3.0 features
- `islamic_data.js` (13.6 KB) - 99 Names of Allah & Quranic connections
- `lunar_mansions_data.js` (21.8 KB) - 28 Lunar mansions
- `enhanced_islamic_data.js` (11.6 KB) - Extended Quranic database & prayer correlations
- `business_analysis_data.js` (11.7 KB) - Business success indicators ✨ NEW
- `advanced_numerology_data.js` (17.8 KB) - Life path, master & karmic numbers ✨ NEW
- `package.json` - Package configuration
- `README.md` - Documentation

### 🔧 Technical Details:
- **Total Methods:** 50+ (15+ new in v1.3.0)
- **Lines of Code:** ~2,400 added
- **Backward Compatible:** ✅ Yes
- **Breaking Changes:** ❌ None

---

## v1.2.0 (Previous Release)

### Features:
- 28 Lunar Mansions (منازل القمر)
- Cultural context and historical significance
- Prophetic names recognition
- Enhanced Quranic connections
- Psychological patterns

### Files:
- `hisaab.js` (71.7 KB)
- `islamic_data.js` (13.6 KB)
- `lunar_mansions_data.js` (21.8 KB)
- `package.json`

---

## v1.1.0

### Features:
- Lunar mansions support
- Extended Islamic analysis
- Cultural preservation features

### Files:
- `hisaab.js` (59.7 KB)
- `package.json`
- `README.md`

---

## v1.0.0 (Foundation)

### Features:
- Complete Abjad calculation
- 99 Names of Allah matching
- Quranic verse connections
- Marriage compatibility
- Arabic astrology (% 4, % 7, % 12)
- Islamic spiritual analysis

### Files:
- `hisaab.js` (45.5 KB)
- `package.json`
- `README.md`

---

## Version Comparison

| Feature | v1.0.0 | v1.1.0 | v1.2.0 | v1.3.0 |
|---------|--------|--------|--------|--------|
| Abjad Calculation | ✅ | ✅ | ✅ | ✅ |
| Islamic Analysis | ✅ | ✅ | ✅ | ✅ |
| Marriage Compatibility | ✅ | ✅ | ✅ | ✅ |
| Arabic Astrology | ✅ | ✅ | ✅ | ✅ |
| Lunar Mansions | ❌ | ✅ | ✅ | ✅ |
| Cultural Context | ❌ | ✅ | ✅ | ✅ |
| **Business Analysis** | ❌ | ❌ | ❌ | ✅ |
| **Date Integration** | ❌ | ❌ | ❌ | ✅ |
| **Advanced Numerology** | ❌ | ❌ | ❌ | ✅ |
| **Prayer Correlations** | ❌ | ❌ | ❌ | ✅ |
| File Size | 45 KB | 60 KB | 72 KB | 94 KB |
| Total Methods | 20+ | 30+ | 35+ | 50+ |

---

## Download Specific Versions

- **Latest (v1.3.0):** `/dist/latest/`
- **v1.3.0:** `/dist/v1.3.0/`
- **v1.2.0:** `/dist/v1.2.0/`
- **v1.1.0:** `/dist/v1.1.0/`
- **v1.0.0:** `/dist/v1.0.0/`

---

## Usage

### Install Latest Version:
```bash
# Copy from dist/latest/
npm install hisaab@latest
```

### Install Specific Version:
```bash
# Copy from dist/v1.3.0/
npm install hisaab@1.3.0
```

### Use Directly:
```javascript
const Hisaab = require('./dist/v1.3.0/hisaab.js');
```

---

## Compatibility Matrix

| Your Version | Compatible With | Notes |
|-------------|-----------------|-------|
| v1.3.0 | v1.0.0, v1.1.0, v1.2.0 | Fully backward compatible |
| v1.2.0 | v1.0.0, v1.1.0 | Fully backward compatible |
| v1.1.0 | v1.0.0 | Fully backward compatible |
| v1.0.0 | - | Foundation version |

---

**Current Release:** v1.3.0  
**Status:** ✅ Production Ready  
**Last Updated:** 2024

*Alhamdulillah - All versions preserved for your convenience* 🌙
