# 🕌 Hisaab v1.4.0 - Geographic & AI Enhanced Release

> Complete JavaScript library for Arabic name analysis with AI recommendations, regional patterns, and Hijri calendar integration.

## ✨ What's New in v1.4.0

### 🌍 Geographic & Regional Analysis
- 6 regional patterns: Gulf, Levantine, North African, Iraqi, Yemeni, Sudanese
- Regional compatibility scoring
- Cultural context by country

### 🤖 AI-Powered Features
- Smart name recommendations based on criteria
- Industry-optimized business names
- Compatible partner name generator
- Naming trend analysis

### 📄 Export & Reporting
- Multi-format export: JSON, HTML, Text, Markdown
- Clipboard-ready sharing
- Shareable reports

### 📚 Historical & Educational
- Historical figures database
- Sahaba (Companions) information
- Prophetic connection detection

### 🌙 Hijri Calendar Integration
- Gregorian/Hijri date conversion
- Blessed dates identification
- Monthly recommendations

## 🚀 Quick Start

```javascript
const Hisaab = require('./hisaab.js');

// Basic usage (v1.0.0+)
const name = new Hisaab('محمد');
console.log(name.getValue()); // 92

// v1.4.0 - Geographic Analysis
const regional = name.getRegionalPattern('gulf');
console.log(regional.regionalCompatibility.score); // 60

// v1.4.0 - AI Recommendations
const recommendations = Hisaab.getSmartRecommendations({ 
    desiredDigitRoot: 7, 
    purpose: 'business' 
});

// v1.4.0 - Hijri Calendar
const hijri = Hisaab.getCurrentHijri();
console.log(hijri.monthName); // رمضان

// v1.4.0 - Historical Context
const history = name.getHistoricalContext();
console.log(history.sahabiInfo);
```

## 📋 All Methods

### Core (v1.0.0+)
- `getName()`, `getValue()`, `getBreakdown()`, `getDigitRoot()`
- `getArabicAstrology()`, `getClassification()`, `getNumerology()`
- `getIslamicAnalysis()`, `getIslamicQualities()`

### Geographic (v1.4.0)
- `getRegionalPattern(region)`
- `getGeographicInfluence()`
- `compareRegionalVariants()`
- `getCulturalSignificance(country)`

### AI (v1.4.0)
- `Hisaab.getSmartRecommendations(criteria)`
- `Hisaab.generateCompatibleNames(partnerName, options)`
- `Hisaab.optimizeBusinessNames(industry)`
- `Hisaab.analyzeNamingTrends()`

### Export (v1.4.0)
- `exportAnalysis(format)` - json, html, text, markdown
- `generateShareableReport()`
- `getClipboardText(format)`

### Historical (v1.4.0)
- `getHistoricalContext()`
- `findFamousPersonalities()`
- `getPropheticConnection()`
- `getSahabaInfo()`

### Hijri Calendar (v1.4.0)
- `Hisaab.toHijri(year, month, day)`
- `Hisaab.toGregorian(year, month, day)`
- `Hisaab.getCurrentHijri()`
- `Hisaab.getBlessedDates(year)`
- `Hisaab.getMonthlyRecommendations(month)`
- `getTimingRecommendations()`

### Group Analysis (v1.4.0)
- `Hisaab.analyzeFamilyTree(members)`
- `Hisaab.getGroupCompatibility(names)`

## 📦 Files Included

| File | Purpose |
|------|---------|
| `hisaab.js` | Main library |
| `islamic_data.js` | 99 Names of Allah, Quranic connections |
| `lunar_mansions_data.js` | 28 Lunar Mansions |
| `enhanced_islamic_data.js` | Prayer times, prophetic names |
| `business_analysis_data.js` | Business analysis data |
| `advanced_numerology_data.js` | Master numbers, karmic debt |
| `regional_patterns_data.js` | 6 regional patterns |
| `ai_patterns_data.js` | AI weights and scoring |
| `name_database.js` | 200+ Arabic names |
| `export_templates_data.js` | Export templates |
| `historical_names_data.js` | Historical figures |
| `sahaba_names_data.js` | Sahaba database |
| `hijri_calendar_data.js` | Hijri calendar system |

## 📊 Statistics

- **200+ Arabic names** in database
- **30+ new methods** in v1.4.0
- **6 regional patterns**
- **10 industry categories**
- **100% backward compatible**

## 📜 License

MIT