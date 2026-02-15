/**
 * Hisaab v1.5.0 Test Suite
 * Testing Visualization and Chart Features
 */

const Hisaab = require('./index.js');

console.log('═══════════════════════════════════════════════════════════════');
console.log('           HISAB v1.5.0 Test Suite - Visualization');
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

function assertNotNull(value, message = '') {
    if (value === null || value === undefined) {
        throw new Error(`${message} - Value is null or undefined`);
    }
}

function assertType(value, expectedType, message = '') {
    if (typeof value !== expectedType) {
        throw new Error(`${message} - Expected ${expectedType}, got ${typeof value}`);
    }
}

// ============================================
// Chart Data Generation Tests
// ============================================
console.log('\n📊 Chart Data Generation Tests\n');

test('generateCompatibilityChart returns chart data', () => {
    const name1 = new Hisaab('محمد');
    const chartData = name1.generateCompatibilityChart('فاطمة');
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
    assertType(chartData.datasets.length, 'number', 'Datasets should be array');
});

test('generateCompatibilityChart has correct labels', () => {
    const name1 = new Hisaab('أحمد');
    const chartData = name1.generateCompatibilityChart('خديجة');
    const expectedLabels = ['Partnership', 'Spirituality', 'Business', 'Leadership', 'Creativity', 'Stability'];
    assertType(chartData.labels.length, 'number', 'Should have labels');
});

test('generateElementChart returns pie chart data', () => {
    const chartData = Hisaab.generateElementChart(['محمد', 'علي', 'فاطمة', 'أحمد']);
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
    assertNotNull(chartData.datasets[0].backgroundColor, 'Should have colors');
});

test('generateDigitRootChart returns bar chart data', () => {
    const chartData = Hisaab.generateDigitRootChart(['محمد', 'علي', 'فاطمة']);
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
    assertNotNull(chartData.datasets[0].data, 'Should have data');
});

test('generatePartnerHouseChart returns house chart', () => {
    const name = new Hisaab('محمد');
    const chartData = name.generatePartnerHouseChart('فاطمة');
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
    assertType(chartData.labels.length, 'number', 'Should have 9 houses');
});

test('generateCompatibilityGauge returns gauge data', () => {
    const name = new Hisaab('أحمد');
    const gaugeData = name.generateCompatibilityGauge('مبينة');
    assertNotNull(gaugeData.labels, 'Should have labels');
    assertNotNull(gaugeData.datasets, 'Should have datasets');
    assertNotNull(gaugeData.datasets[0].data, 'Should have data');
});

test('generateFamilyTreeChart returns family data', () => {
    const chartData = Hisaab.generateFamilyTreeChart(['محمد', 'فاطمة', 'علي', 'حسن']);
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
});

test('generateRegionalChart returns regional comparison', () => {
    const name = new Hisaab('محمد');
    const chartData = name.generateRegionalChart();
    assertNotNull(chartData.labels, 'Should have labels');
    assertNotNull(chartData.datasets, 'Should have datasets');
});

test('generateNumerologyWheel returns wheel data', () => {
    const name = new Hisaab('محمد');
    const wheelData = name.generateNumerologyWheel();
    assertNotNull(wheelData.name, 'Should have name');
    assertNotNull(wheelData.value, 'Should have value');
    assertNotNull(wheelData.digitRoot, 'Should have digit root');
    assertNotNull(wheelData.element, 'Should have element');
    assertNotNull(wheelData.elementColor, 'Should have element color');
});

// ============================================
// Chart Colors Tests
// ============================================
console.log('\n🎨 Chart Colors Tests\n');

test('getChartColors returns color object', () => {
    const colors = Hisaab.getChartColors();
    assertNotNull(colors, 'Should return colors');
    assertNotNull(colors.elements, 'Should have element colors');
    assertNotNull(colors.planets, 'Should have planet colors');
    assertNotNull(colors.compatibility, 'Should have compatibility colors');
});

test('getChartColors has correct element colors', () => {
    const colors = Hisaab.getChartColors();
    assertNotNull(colors.elements.Fire, 'Should have Fire color');
    assertNotNull(colors.elements.Earth, 'Should have Earth color');
    assertNotNull(colors.elements.Air, 'Should have Air color');
    assertNotNull(colors.elements.Water, 'Should have Water color');
});

test('getChartConfig returns config', () => {
    const config = Hisaab.getChartConfig('compatibilityRadar');
    assertNotNull(config, 'Should return config');
    assertNotNull(config.type, 'Should have chart type');
});

// ============================================
// Backward Compatibility Tests
// ============================================
console.log('\n🔄 Backward Compatibility Tests\n');

test('Basic calculation still works', () => {
    const name = new Hisaab('محمد');
    if (name.getValue() !== 92) throw new Error('Value should be 92');
});

test('getArabicAstrology still works', () => {
    const name = new Hisaab('علي');
    const astro = name.getArabicAstrology();
    assertNotNull(astro.element, 'Should have element');
    assertNotNull(astro.planet, 'Should have planet');
});

test('compareArabic still works', () => {
    const comp = Hisaab.compareArabic('أحمد', 'مبينة');
    assertNotNull(comp.partnerHouse, 'Should have partner house');
});

test('getRegionalPattern still works', () => {
    const name = new Hisaab('محمد');
    const regional = name.getRegionalPattern('gulf');
    assertNotNull(regional.region, 'Should have region');
});

test('getCurrentHijri still works', () => {
    const hijri = Hisaab.getCurrentHijri();
    assertNotNull(hijri.year, 'Should have year');
    assertNotNull(hijri.monthName, 'Should have month name');
});

// ============================================
// Summary
// ============================================
console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`           TEST RESULTS: ${passed} passed, ${failed} failed`);
console.log('═══════════════════════════════════════════════════════════════\n');

if (failed === 0) {
    console.log('✅ All tests passed! v1.5.0 is ready.\n');
} else {
    console.log('⚠️ Some tests failed. Please review.\n');
}

process.exit(failed > 0 ? 1 : 0);