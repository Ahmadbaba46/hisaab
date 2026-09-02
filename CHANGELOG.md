# Changelog

All notable changes to the Hisaab library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### 🔮 **Planned for Future**
- Machine Learning: Enhanced AI-powered insights
- Mobile Apps: Native iOS/Android applications
- Database Integration: User accounts and history
- Progressive Web App (PWA)
- Voice input for names
- Advanced analytics dashboard

---

## [2.0.0-web] - 2025-01-XX

### 🎨 **Complete Web Interface Redesign**

#### ✨ **Modern UI/UX**
- **Glassmorphism Design** - Frosted glass effect with backdrop blur
- **Dark Mode** - Toggle between light/dark themes with persistent preference (localStorage)
- **Smooth Animations** - Fade, slide, scale effects with scroll reveal
- **CSS Custom Properties** - Consistent theming system
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Interactive Elements** - Hover effects, transitions, progressive reveal
- **Modern Typography** - Tajawal (Arabic) + Inter (English) fonts

#### 📊 **Interactive Charts & Visualizations**
- **Chart.js Integration** - Interactive, responsive charts
- **Numerology Wheel** - Radar chart showing personality profile
- **Element Distribution** - Pie chart for elemental analysis
- **Compatibility Gauge** - Visual compatibility meter
- **Regional Comparison** - Bar charts for geographic patterns

#### 🌍 **Multi-Language Support UI**
- **Language Switcher** - Toggle between Arabic, Hebrew, Persian, Urdu, Turkish
- **Multi-Language Calculator** - Calculate values in all 5 Abjad systems
- **Cross-Language Comparison** - Compare names across different scripts
- **Language-Specific Results** - Display in native language format

#### ☪️ **Complete Islamic Features**
- **99 Names of Allah** - Searchable database with filter by category
- **Sahaba Database** - Three categories: Ashara Mubashara, Prominent Sahaba, Sahabiyat
- **Hijri Calendar** - Current date display, date converter (Hijri ↔ Gregorian)
- **28 Lunar Mansions** - Complete mansions with elements and influences
- **Historical Figures** - Prophets, Scholars, Rulers, Poets database
- **Blessed Days** - Major Islamic dates and significance

#### 💼 **Business Analysis Features**
- **Business Name Optimizer** - Industry-specific recommendations
- **Success Indicators** - Potential scoring based on numerology
- **Industry Alignment** - Element-industry matching
- **Strategic Recommendations** - Business guidance by digit root

#### 👨‍👩‍👧‍👦 **Family & Group Analysis**
- **Add Family Members** - Build family tree with names and relations
- **Harmony Scoring** - Calculate family compatibility
- **Group Compatibility** - Average values and digit roots
- **Data Persistence** - Save family members in localStorage

#### 🤖 **Enhanced AI Recommendations**
- **Advanced Filtering** - Purpose, digit root, element, max results
- **Smart Scoring** - AI-powered relevance scoring
- **Detailed Reasons** - Explanation for each recommendation
- **Customizable Results** - Choose 5, 10, 15, or 20 suggestions

#### 💾 **Export & Share**
- **6 Export Formats** - JSON, HTML, PDF, Text, Markdown, Clipboard
- **Quick Export** - One-click export to any format
- **Beautiful Reports** - Formatted HTML reports
- **Native Share** - Share API integration for mobile

#### 🚀 **UI Enhancements**
- **FAB Menu** - Floating action button for quick actions
- **Toast Notifications** - Non-intrusive user feedback
- **Loading States** - Overlays and spinners
- **Quick Examples** - One-click name insertion
- **Search & Filter** - Real-time search in all databases
- **Tab Navigation** - Organized sections with smooth transitions

#### 🎯 **User Experience**
- **Progressive Enhancement** - Works without JavaScript
- **Keyboard Navigation** - Full keyboard accessibility
- **Touch Optimized** - Mobile-friendly buttons (44x44px minimum)
- **Scroll Animations** - Elements reveal on scroll
- **Error Handling** - Graceful error messages
- **Auto-save** - Family members auto-save every 30 seconds

#### 📱 **Mobile Optimizations**
- **Responsive Grid** - Adapts from 4 columns to 1 column
- **Collapsible Sections** - Save screen space
- **Touch Gestures** - Swipe support
- **Adaptive Fonts** - Scales from 16px to 14px on mobile
- **Mobile Menu** - Hamburger navigation

#### 🔧 **Technical Improvements**
- **Performance** - Lazy-loaded charts, debounced search
- **Caching** - LocalStorage for theme and data
- **Modern JavaScript** - ES6+ features
- **GPU Acceleration** - CSS transforms for animations
- **Code Organization** - Modular, maintainable structure

#### 📄 **Documentation**
- **Web Interface Guide** - Complete feature documentation (WEB_INTERFACE_V2_README.md)
- **Deployment Guide** - Step-by-step deployment instructions (DEPLOYMENT_V2.md)
- **Backup Files** - Old interface preserved (v1-backup files)

#### 🎨 **Design System**
- **Color Palette** - Islamic-themed greens and golds
- **Spacing System** - Consistent spacing scale (xs to 3xl)
- **Border Radius** - Consistent rounded corners (sm to xl)
- **Shadow System** - 4 levels of elevation
- **Z-index Scale** - Organized layer management

#### 📊 **Statistics**
- **11 files changed**
- **9,484 lines added**
- **2,596 lines removed**
- **3 new documentation files**
- **Commit**: 2ab9632
- **Tag**: v2.0.0-web

---

## [2.0.0] - 2026-02-15

### 🚀 **Multi-Language Support Release**

#### 🌍 **5 Language Abjad Systems**
- **Arabic** (العربية) - Traditional 28-letter Abjad
- **Hebrew** (עברית) - Full Gematria with final letters (ך, ם, ן, ף, ץ)
- **Persian** (فارسی) - Extended with پ, چ, ژ, گ
- **Urdu** (اردو) - Extended with ٹ, ڈ, ڑ, ں, ھ, ے
- **Turkish** (Türkçe) - Latin script with special characters (Ç, Ğ, İ, Ö, Ş, Ü)

#### 🔍 **Language Detection**
- `detectLanguage()` - Auto-detect script and language
- Hebrew script detection (עברית)
- Arabic script detection with Persian/Urdu differentiation
- Turkish Latin script detection

#### 📚 **Multi-Language Methods**
- `createForLanguage(name, language)` - Create instance for specific language
- `getLanguageInfo()` - Get language metadata
- `getElementInLanguage()` - Element in current language
- `getPlanetInLanguage()` - Planet in current language
- `compareCrossLanguage()` - Compare names across languages
- `getSupportedLanguages()` - List all 5 languages
- `getNamesByLanguage()` - Get names by language/gender
- `analyzeInAllLanguages()` - Analyze name in all 5 systems
- `getAbjadChart()` - Get letter-value chart for language
- `toLanguageDisplay()` - Convert analysis display language

#### 📦 **New Data File**
- `languages_data.js` - 5 language abjad systems, elements, planets, zodiac, name databases

#### 📊 **Statistics**
- **5 supported languages**
- **10 multi-language methods**
- **1 new data file**
- **25 passing tests**

---

## [1.5.0] - 2026-02-15

### 🚀 **Visualization & Charts Release**

#### 📊 **Chart Data Generation**
- `generateCompatibilityChart()` - Chart.js compatible data for partner compatibility
- `generateElementChart()` - Pie chart data for element distribution
- `generateDigitRootChart()` - Bar chart for digit root comparison
- `generatePartnerHouseChart()` - House-specific visualization data
- `generateCompatibilityGauge()` - Gauge/speedometer data for compatibility score
- `generateFamilyTreeChart()` - Family hierarchy visualization data
- `generateRegionalChart()` - Regional comparison bar chart
- `generateNumerologyWheel()` - Radar/spider chart for full numerology profile

#### 🎨 **Chart Configuration**
- `getChartColors()` - Element and planet color mappings
- `getChartConfig()` - Chart.js compatible configuration objects
- Pre-defined color palettes for consistent visualization
- Dark/light theme support

#### 📦 **New Data File**
- `visualization_data.js` - Chart configurations, colors, labels

#### 📊 **Statistics**
- **9 visualization methods**
- **1 new data file**
- **Chart.js compatible output**
- **17 passing tests**

---

## [1.4.0] - 2025-02-15

### 🚀 **Geographic, AI, Export, Historical & Hijri Features Release**

#### 🌍 **Geographic & Regional Analysis**
- Regional Arabic patterns for 6 regions (Gulf, Levantine, North African, Iraqi, Yemeni, Sudanese)
- `getRegionalPattern()` - Get regional compatibility analysis
- `getGeographicInfluence()` - Geographic element correlations
- `compareRegionalVariants()` - Compare name across all regions
- `getCulturalSignificance()` - Country-specific cultural context

#### 🤖 **AI-Powered Features**
- Smart name recommendations based on multiple criteria
- `getSmartRecommendations()` - AI-based name suggestions
- `generateCompatibleNames()` - Partner-compatible name generator
- `optimizeBusinessNames()` - Industry-optimized business names
- `analyzeNamingTrends()` - Database trend analysis
- 10 industry categories with element/planet matching

#### 📄 **Export & Reporting**
- Multi-format export: JSON, HTML, Text, Markdown
- `exportAnalysis()` - Export in specified format
- `generateShareableReport()` - Shareable report object
- `getClipboardText()` - Quick copy for sharing

#### 📚 **Historical & Educational**
- Historical figures database (Prophets, Sahaba, Scholars, Rulers, Poets, Mystics)
- `getHistoricalContext()` - Historical background
- `findFamousPersonalities()` - Famous people with name
- `getPropheticConnection()` - Prophetic significance
- `getSahabaInfo()` - Sahaba (Companion) information

#### 🌙 **Hijri Calendar Integration**
- Full Hijri/Gregorian conversion
- `toHijri()` / `toGregorian()` - Date conversion
- `getCurrentHijri()` - Current Hijri date
- `getBlessedDates()` - Blessed dates in year
- `getMonthlyRecommendations()` - Month-specific guidance
- `getTimingRecommendations()` - Personal timing based on name

#### 👨‍👩‍👧‍👦 **Group & Family Analysis**
- `analyzeFamilyTree()` - Family numerology analysis
- `getGroupCompatibility()` - Group harmony scoring

#### 📦 **New Data Files**
- `regional_patterns_data.js` - 6 regional patterns
- `ai_patterns_data.js` - AI weights and scoring
- `name_database.js` - 200+ Arabic names
- `export_templates_data.js` - Report templates
- `historical_names_data.js` - Famous personalities
- `sahaba_names_data.js` - Companions database
- `hijri_calendar_data.js` - Islamic calendar

#### 📊 **Statistics**
- **30+ new methods**
- **7 new data files**
- **200+ name database entries**
- **6 regional patterns**
- **35 passing tests**

---

## [1.3.0] - 2024-12-22

### 🚀 **Advanced Features Release**

#### 💼 **Business Name Analysis**
- Success indicators by value range
- Industry recommendations
- Partnership house analysis (1-9)
- Best timing guidance
- Overall business rating (1-10)

#### 📅 **Date Integration & Life Path**
- Birth date numerology integration
- Life path number calculation
- Name-date compatibility (0-100 score)
- Personal year cycles (1-9)
- Energy harmonization guidance

#### 🔮 **Advanced Numerology**
- Master numbers detection (11, 22, 33, 44)
- Karmic debt identification (13, 14, 16, 19)
- Hidden potential discovery
- Soul urge & personality numbers
- Dominant/missing number analysis

#### 🕌 **Enhanced Islamic Features**
- Prayer time correlations
- Personalized dhikr recommendations (morning/evening/after-prayer)
- Extended Quranic verse connections
- Spiritual alignment guidance

#### 🌐 **Web Interface Improvements**
- Modular Architecture: Clean separation (calculator, UI, renderer, enhancements)
- Tabs System: 5 tabs (All, v1.3.0, Islamic, Astrology, Export)
- Animations: Scroll reveal, fade-in, hover effects
- Export Functionality: Text, JSON, HTML, Print/PDF, Clipboard
- Browser Bundle: Self-contained 168 KB bundle

#### 📊 **Statistics**
- **40+ new methods**
- **6 data files** (2 new: business_analysis_data.js, advanced_numerology_data.js)
- **5 JS modules** in modular web app
- **172 KB** distribution size
- **168 KB** browser bundle

---

## [1.2.0] - 2024-12-21

### 🌙 **Lunar Mansions Release**

#### ✨ **28 Lunar Mansions (منازل القمر)**
- Complete database of 28 traditional Arabic astronomical stations
- Each mansion includes: Arabic name, transliteration, meaning, constellation
- Element associations: Fire, Earth, Air, Water
- Nature classifications: Hot/Cold, Dry/Wet
- Influence and fortune guidance
- Personality traits per mansion
- Favorable and unfavorable activities
- Spiritual significance and traditional uses

#### 📚 **Extended Quranic Database**
- More verse connections based on numerical values
- Enhanced spiritual significance mapping

#### 🤲 **Enhanced Spiritual Guidance**
- Deeper Islamic insights per lunar mansion
- Traditional agricultural and timing wisdom

#### 📊 **Statistics**
- **28 Lunar Mansions**: Complete traditional Arabic system
- **4 Element mappings**: Per mansion association
- **Enhanced cultural context**: Traditional uses and timing

---

## [1.1.0] - 2024-12-20

### 🎉 **Enhanced Features Release**

#### ✨ **Smart Name Generator**
- Target Value Matching: Find names with specific Abjad values
- Element Filtering: Water, Fire, Earth, Air element names
- Gender-Specific: Separate male/female name pools
- Length Constraints: Control name length precisely
- Starting Letter: Names beginning with specific letters
- Intelligent Scoring: Reasons provided for each suggestion

#### 👨‍👩‍👧‍👦 **Family Harmony Analyzer**
- Complete Family Profiling: Parents + children analysis
- Element Distribution: Track dominant family elements
- Parent Compatibility: Integration with حساب الشريك
- Energy Balance: Yin/Yang family dynamics
- Smart Recommendations: Cultural and spiritual guidance
- Harmony Scoring: Quantitative 0-100 scoring system

#### 📊 **Statistics**
- **+400 lines**: Smart generation and analysis algorithms
- **80+ Arabic names**: Curated male/female name database
- **Advanced filtering**: Multiple simultaneous criteria

---

## [1.0.0] - 2024-12-19

### 🎉 **Initial Release - Complete Foundation**

#### ✨ **Core Features**
- **Abjad Calculation**: Complete Arabic letter-to-number mapping (28+ letters including ة)
- **Digit Root Calculation**: Iterative reduction to single digits
- **Letter Breakdown**: Detailed analysis of each letter's contribution
- **Input Validation**: Robust error handling for invalid names

#### ☪️ **Islamic Features**
- **99 Names of Allah**: Complete database with Arabic, transliteration, meanings, attributes
- **Divine Name Recognition**: Automatic detection when names match Asma ul-Husna
- **Quranic Connections**: Links to specific Quranic verses based on numerical values
- **Islamic Spiritual Analysis**: Personalized spiritual guidance and qualities
- **Islamic Guidance**: Dhikr recommendations and spiritual actions

#### 🌙 **Arabic Astrology System**
- **Elements**: Traditional Arabic calculation (Value % 4 → Fire, Earth, Air, Water)
- **Planets**: Classical 7 planets (Value % 7 → Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn)
- **Zodiac Signs**: 12 signs (Value % 12 → starting with Aries)
- **Arabic Names**: Complete bilingual support with Arabic terminology
- **Temperaments**: Classical humoral theory integration

#### 🌍 **Western Astrology System (Optional)**
- **Elements**: Pythagorean digit root mapping
- **Planets**: Modern planets including Uranus, Neptune
- **Colors**: Traditional planetary color associations
- **Clear Labeling**: Distinguished from Arabic system

#### 💕 **Compatibility Systems**
- **حساب الشريك (Arabic Partner Calculation)**: Traditional formula (DigitRoot1 + DigitRoot2 + 7)
- **Partnership Houses**: Complete 1-9 house system with detailed interpretations
- **Arabic Wisdom**: Authentic cultural guidance for relationships
- **Western Compatibility**: Pythagorean scoring system (optional)
- **Batch Analysis**: Multiple name compatibility checking

#### 🔧 **Advanced Features**
- **Complete Reports**: Comprehensive analysis combining all systems
- **Personality Traits**: Islamic character qualities based on numerology
- **Lucky Numbers**: Personalized number generation
- **Name Classification**: Strength levels and energy types
- **Similar Name Search**: Find names with similar numerical values
- **Statistical Analysis**: Batch processing and analysis tools

#### 🌐 **Web Interface**
- **Beautiful Design**: Islamic-themed green, gold, blue color palette
- **Arabic Typography**: Proper RTL support with Amiri font
- **Interactive Calculator**: Real-time Abjad calculation
- **Compatibility Checker**: Complete حساب الشريك interface
- **Mobile Responsive**: Perfect experience on all devices
- **Smooth Animations**: Elegant transitions and user feedback

#### 📚 **Documentation**
- **Comprehensive Guide**: Complete API reference with examples
- **Interactive Features**: Search, navigation, code copying
- **Cultural Context**: Proper explanation of Arabic traditions
- **Beautiful Tables**: Abjad letters and partnership houses
- **Print Optimized**: Documentation ready for offline use
- **Mobile Friendly**: Responsive design with collapsible sidebar

#### 🛠️ **Technical Excellence**
- **Static Methods**: Quick calculations without instantiation
- **Error Handling**: Graceful handling of invalid inputs
- **Performance Optimized**: Efficient calculations for large datasets
- **Browser Compatible**: Works in both Node.js and browser environments
- **Clean Architecture**: Well-structured, maintainable code
- **Extensive Testing**: Multiple test suites covering all features

#### 🎯 **Cultural Authenticity**
- **Respectful Implementation**: Traditional methods properly honored
- **Clear Attribution**: Arabic vs Western systems clearly distinguished
- **Educational Value**: Explains calculation methods and significance
- **Community Focus**: Built for Arabic and Islamic communities

#### 📊 **Statistics**
- **800+ lines** of core JavaScript code
- **28+ Arabic letters** with variants supported
- **99 Names of Allah** with complete metadata
- **9 Partnership Houses** with detailed interpretations
- **4 Element systems** (Arabic traditional)
- **7 Classical planets** (Arabic astrology)
- **12 Zodiac signs** with Arabic names
- **Multiple test suites** with comprehensive coverage

#### 🌟 **What Makes v1.0.0 Special**
- **First of its kind**: Complete Arabic numerology library for JavaScript
- **Culturally authentic**: Real traditional methods, not approximations
- **Dual systems**: Both Arabic and Western approaches available
- **Beautiful interface**: Professional-grade web calculator
- **Educational**: Teaches users about Arabic traditions
- **Community-focused**: Built for real-world Islamic/Arabic use cases