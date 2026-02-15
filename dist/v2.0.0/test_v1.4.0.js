/**
 * Hisaab v1.4.0 Test Suite
 * Testing Geographic, AI, Export, Historical, and Hijri features
 */

const Hisaab = require('./index.js');

console.log('═══════════════════════════════════════════════════════════════');
console.log('           HISAB v1.4.0 Test Suite');
console.log('═══════════════════════════════════════════════════════════════\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${name}`);
        passed++;
    } catch (error) {
        console.log(`❌ FAIL: ${name}`);
        console.log(`   Error: ${error.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`${message} - Expected: ${expected}, Got: ${actual}`);
    }
}

function assertNotNull(value, message = '') {
    if (value === null || value === undefined) {
        throw new Error(`${message} - Value is null or undefined`);
    }
}

// ============================================
// Geographic & Regional Analysis Tests
// ============================================
console.log('\n📍 Geographic & Regional Analysis Tests\n');

test('getRegionalPattern returns valid data for Gulf region', () => {
    const name = new Hisaab('محمد');
    const result = name.getRegionalPattern('gulf');
    assertNotNull(result.region, 'Should have region data');
    assertEqual(result.region.name, 'Gulf', 'Region name should be Gulf');
    assertNotNull(result.regionalCompatibility, 'Should have compatibility data');
});

test('getRegionalPattern returns valid data for Levantine region', () => {
    const name = new Hisaab('أحمد');
    const result = name.getRegionalPattern('levantine');
    assertNotNull(result.region, 'Should have region data');
    assertEqual(result.region.name, 'Levantine', 'Region name should be Levantine');
});

test('getGeographicInfluence returns valid data', () => {
    const name = new Hisaab('فاطمة');
    const result = name.getGeographicInfluence();
    assertNotNull(result.element, 'Should have element');
    assertNotNull(result.planetaryByRegion, 'Should have planetary data');
});

test('compareRegionalVariants returns comparison for all regions', () => {
    const name = new Hisaab('علي');
    const result = name.compareRegionalVariants();
    assertNotNull(result.comparisons, 'Should have comparisons');
    assertEqual(result.comparisons.length, 6, 'Should have 6 region comparisons');
    assertNotNull(result.bestRegion, 'Should have best region');
});

test('getCulturalSignificance returns historical data', () => {
    const name = new Hisaab('عمر');
    const result = name.getCulturalSignificance('Saudi Arabia');
    assertNotNull(result.nameInfo, 'Should have name info');
    assertNotNull(result.isSahabi, 'Should check if Sahabi');
});

// ============================================
// AI-Powered Features Tests
// ============================================
console.log('\n🤖 AI-Powered Features Tests\n');

test('getSmartRecommendations returns recommendations', () => {
    const result = Hisaab.getSmartRecommendations({ desiredDigitRoot: 7, maxResults: 5 });
    assertNotNull(result.recommendations, 'Should have recommendations');
    assertEqual(result.recommendations.length <= 5, true, 'Should respect maxResults');
});

test('getSmartRecommendations with purpose filters correctly', () => {
    const result = Hisaab.getSmartRecommendations({ purpose: 'business', maxResults: 10 });
    assertNotNull(result.criteria, 'Should have criteria');
    assertNotNull(result.recommendations, 'Should have recommendations');
});

test('generateCompatibleNames returns names for target house', () => {
    const result = Hisaab.generateCompatibleNames('أحمد', { targetHouse: 7, maxResults: 10 });
    assertNotNull(result.suggestions, 'Should have suggestions');
    assertNotNull(result.targetDigitRoots, 'Should have target digit roots');
});

test('optimizeBusinessNames returns industry-optimized names', () => {
    const result = Hisaab.optimizeBusinessNames('technology', 5);
    assertNotNull(result.industryRequirements, 'Should have industry requirements');
    assertNotNull(result.suggestions, 'Should have suggestions');
});

test('analyzeNamingTrends returns trend data', () => {
    const result = Hisaab.analyzeNamingTrends();
    assertNotNull(result.databaseStats, 'Should have database stats');
    assertNotNull(result.averageValues, 'Should have average values');
    assertNotNull(result.spiritualNames, 'Should have spiritual names count');
});

// ============================================
// Export & Reporting Tests
// ============================================
console.log('\n📄 Export & Reporting Tests\n');

test('exportAnalysis returns JSON by default', () => {
    const name = new Hisaab('محمد');
    const result = name.exportAnalysis('json');
    const parsed = JSON.parse(result);
    assertNotNull(parsed.metadata, 'Should have metadata');
    assertEqual(parsed.metadata.version, '1.4.0', 'Should be version 1.4.0');
});

test('exportAnalysis returns HTML format', () => {
    const name = new Hisaab('أحمد');
    const result = name.exportAnalysis('html');
    assertEqual(result.includes('<!DOCTYPE html>'), true, 'Should be HTML document');
    assertEqual(result.includes('أحمد'), true, 'Should include name');
});

test('exportAnalysis returns text format', () => {
    const name = new Hisaab('علي');
    const result = name.exportAnalysis('text');
    assertEqual(result.includes('علي'), true, 'Should include name');
    assertEqual(result.includes('القيمة'), true, 'Should have value label');
});

test('exportAnalysis returns markdown format', () => {
    const name = new Hisaab('خالد');
    const result = name.exportAnalysis('markdown');
    assertEqual(result.includes('#'), true, 'Should have markdown headers');
    assertEqual(result.includes('خالد'), true, 'Should include name');
});

test('generateShareableReport returns valid report', () => {
    const name = new Hisaab('محمد');
    const result = name.generateShareableReport();
    assertNotNull(result.metadata, 'Should have metadata');
    assertNotNull(result.summary, 'Should have summary');
    assertEqual(result.metadata.version, '1.4.0', 'Should be version 1.4.0');
});

test('getClipboardText returns text for sharing', () => {
    const name = new Hisaab('فاطمة');
    const short = name.getClipboardText('short');
    const medium = name.getClipboardText('medium');
    assertNotNull(short, 'Should return short text');
    assertNotNull(medium, 'Should return medium text');
});

// ============================================
// Historical & Educational Tests
// ============================================
console.log('\n📚 Historical & Educational Tests\n');

test('getHistoricalContext returns historical data', () => {
    const name = new Hisaab('محمد');
    const result = name.getHistoricalContext();
    assertNotNull(result.historicalFigures, 'Should have historical figures');
    assertEqual(result.historicalFigures.length > 0, true, 'Should find figures for محمد');
});

test('findFamousPersonalities returns categorized figures', () => {
    const name = new Hisaab('علي');
    const result = name.findFamousPersonalities();
    assertNotNull(result.categories, 'Should have categories');
    assertEqual(result.totalFigures > 0, true, 'Should find figures for علي');
});

test('getPropheticConnection identifies prophetic names', () => {
    const muhammad = new Hisaab('محمد');
    const result = muhammad.getPropheticConnection();
    assertEqual(result.isPropheticName, true, 'محمد should be prophetic name');
});

test('getSahabaInfo identifies Sahaba names', () => {
    const omar = new Hisaab('عمر');
    const result = omar.getSahabaInfo();
    assertEqual(result.isSahaba, true, 'عمر should be Sahabi');
    assertNotNull(result.sahabiInfo, 'Should have Sahabi info');
});

test('getSahabaInfo returns null for non-Sahabi names', () => {
    const test = new Hisaab('جمال');
    const result = test.getSahabaInfo();
    assertEqual(result.isSahaba, false, 'جمال is not a Sahabi name');
});

// ============================================
// Hijri Calendar Tests
// ============================================
console.log('\n🌙 Hijri Calendar Tests\n');

test('toHijri converts Gregorian to Hijri', () => {
    const result = Hisaab.toHijri(2024, 1, 1);
    assertNotNull(result.year, 'Should have year');
    assertNotNull(result.month, 'Should have month');
    assertNotNull(result.day, 'Should have day');
});

test('toGregorian converts Hijri to Gregorian', () => {
    const result = Hisaab.toGregorian(1446, 1, 1);
    assertNotNull(result.year, 'Should have year');
    assertNotNull(result.month, 'Should have month');
    assertNotNull(result.day, 'Should have day');
});

test('getCurrentHijri returns current date', () => {
    const result = Hisaab.getCurrentHijri();
    assertNotNull(result.year, 'Should have year');
    assertNotNull(result.monthName, 'Should have month name');
    assertEqual(typeof result.isHolyMonth, 'boolean', 'Should have isHolyMonth boolean');
});

test('getBlessedDates returns blessed dates for year', () => {
    const result = Hisaab.getBlessedDates(1446);
    assertNotNull(result.blessedDates, 'Should have blessed dates');
    assertEqual(result.blessedDates.length > 0, true, 'Should have blessed dates');
    assertNotNull(result.yearlyEvents, 'Should have yearly events');
});

test('getMonthlyRecommendations returns month info', () => {
    const ramadan = Hisaab.getMonthlyRecommendations(9);
    assertEqual(ramadan.arabic, 'رمضان', 'Month 9 should be Ramadan');
    assertNotNull(ramadan.recommended, 'Should have recommendations');
    assertEqual(ramadan.blessedDays.length > 0, true, 'Ramadan should have blessed days');
});

test('getTimingRecommendations returns timing data', () => {
    const name = new Hisaab('محمد');
    const result = name.getTimingRecommendations();
    assertNotNull(result.planet, 'Should have planet');
    assertNotNull(result.favorableDay, 'Should have favorable day');
    assertNotNull(result.hijriDate, 'Should have Hijri date');
});

// ============================================
// Group & Family Analysis Tests
// ============================================
console.log('\n👨‍👩‍👧‍👦 Group & Family Analysis Tests\n');

test('analyzeFamilyTree returns family analysis', () => {
    const result = Hisaab.analyzeFamilyTree(['محمد', 'فاطمة', 'علي', 'حسن']);
    assertEqual(result.totalMembers, 4, 'Should have 4 members');
    assertNotNull(result.elementDistribution, 'Should have element distribution');
    assertNotNull(result.dominantElement, 'Should have dominant element');
});

test('getGroupCompatibility returns pair analysis', () => {
    const result = Hisaab.getGroupCompatibility(['أحمد', 'مبينة', 'محمد']);
    assertEqual(result.names.length, 3, 'Should have 3 names');
    assertEqual(result.totalPairs, 3, 'Should have 3 pairs');
    assertNotNull(result.averageScore, 'Should have average score');
    assertNotNull(result.harmonyLevel, 'Should have harmony level');
});

// ============================================
// Backward Compatibility Tests
// ============================================
console.log('\n🔄 Backward Compatibility Tests\n');

test('Basic calculation still works', () => {
    const name = new Hisaab('محمد');
    assertEqual(name.getValue(), 92, 'محمد should equal 92');
    assertEqual(name.getDigitRoot(), 2, 'Digit root should be 2');
});

test('getBreakdown still works', () => {
    const name = new Hisaab('علي');
    const breakdown = name.getBreakdown();
    assertEqual(breakdown.length, 3, 'علي has 3 letters');
    assertEqual(breakdown[0].value, 70, 'ع = 70');
});

test('getArabicAstrology still works', () => {
    const name = new Hisaab('محمد');
    const astro = name.getArabicAstrology();
    assertNotNull(astro.element, 'Should have element');
    assertNotNull(astro.planet, 'Should have planet');
    assertNotNull(astro.zodiac, 'Should have zodiac');
});

test('compareArabic still works', () => {
    const result = Hisaab.compareArabic('أحمد', 'مبينة');
    assertNotNull(result.partnerHouse, 'Should have partner house');
    assertNotNull(result.interpretation, 'Should have interpretation');
});

test('getBusinessAnalysis still works', () => {
    const name = new Hisaab('شركة');
    const biz = name.getBusinessAnalysis();
    assertNotNull(biz.overallAssessment, 'Should have overall assessment');
    assertNotNull(biz.recommendedIndustries, 'Should have industries');
});

test('getIslamicAnalysis still works', () => {
    const name = new Hisaab('محمد');
    const islamic = name.getIslamicAnalysis();
    assertNotNull(islamic.islamicQualities, 'Should have qualities');
});

// ============================================
// Summary
// ============================================
console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`           TEST RESULTS: ${passed} passed, ${failed} failed`);
console.log('═══════════════════════════════════════════════════════════════\n');

if (failed === 0) {
    console.log('✅ All tests passed! v1.4.0 is ready.\n');
} else {
    console.log('⚠️ Some tests failed. Please review.\n');
}

process.exit(failed > 0 ? 1 : 0);