/**
 * Hisaab v2.0.0 Test Suite - Multi-Language Support
 */

const Hisaab = require('./index.js');

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${name}`);
        passed++;
    } catch (e) {
        console.log(`❌ FAIL: ${name}`);
        console.log(`   Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`${message} Expected: ${expected}, Got: ${actual}`);
    }
}

function assertTrue(condition, message = '') {
    if (!condition) {
        throw new Error(`${message} Expected true, got false`);
    }
}

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('           HISAB v2.0.0 Test Suite - Multi-Language');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log('🌍 Language Detection Tests\n');

test('detectLanguage identifies Arabic', () => {
    const lang = Hisaab.detectLanguage('محمد');
    assertEqual(lang, 'arabic');
});

test('detectLanguage identifies Hebrew', () => {
    const lang = Hisaab.detectLanguage('דוד');
    assertEqual(lang, 'hebrew');
});

test('detectLanguage identifies Persian', () => {
    const lang = Hisaab.detectLanguage('پیمان');
    assertEqual(lang, 'persian');
});

test('detectLanguage identifies Urdu', () => {
    const lang = Hisaab.detectLanguage('ٹھاکر');
    assertEqual(lang, 'urdu');
});

test('detectLanguage identifies Turkish', () => {
    const lang = Hisaab.detectLanguage('Mehmet');
    assertEqual(lang, 'turkish');
});

console.log('\n📚 Multi-Language Abjad Tests\n');

test('Arabic name calculation works', () => {
    const h = Hisaab.createForLanguage('محمد', 'arabic');
    assertEqual(h.getValue(), 92);
});

test('Hebrew name calculation works', () => {
    const h = Hisaab.createForLanguage('דוד', 'hebrew');
    assertEqual(h.getValue(), 14);
});

test('Persian name calculation works', () => {
    const h = Hisaab.createForLanguage('رضا', 'persian');
    assertEqual(h.getValue(), 1001);
});

test('Turkish name calculation works', () => {
    const h = Hisaab.createForLanguage('Ali', 'turkish');
    assertEqual(h.getValue(), 41);
});

test('getLanguageInfo returns correct info', () => {
    const h = Hisaab.createForLanguage('محمد', 'arabic');
    const info = h.getLanguageInfo();
    assertEqual(info.code, 'arabic');
    assertEqual(info.name, 'Arabic');
    assertEqual(info.rtl, true);
});

console.log('\n🔄 Cross-Language Comparison Tests\n');

test('compareCrossLanguage works for Arabic-Hebrew', () => {
    const comp = Hisaab.compareCrossLanguage('محمد', 'arabic', 'דוד', 'hebrew');
    assertTrue(comp.name1.value === 92);
    assertTrue(comp.name2.value === 14);
    assertTrue(typeof comp.scriptSimilarity === 'number');
});

test('compareCrossLanguage detects digit root match', () => {
    const comp = Hisaab.compareCrossLanguage('محمد', 'arabic', 'Ali', 'turkish');
    assertTrue(typeof comp.digitRootMatch === 'boolean');
});

console.log('\n📋 Language Support Tests\n');

test('getSupportedLanguages returns 5 languages', () => {
    const langs = Hisaab.getSupportedLanguages();
    assertEqual(langs.length, 5);
});

test('getSupportedLanguages includes Arabic', () => {
    const langs = Hisaab.getSupportedLanguages();
    assertTrue(langs.some(l => l.code === 'arabic'));
});

test('getSupportedLanguages includes Hebrew', () => {
    const langs = Hisaab.getSupportedLanguages();
    assertTrue(langs.some(l => l.code === 'hebrew'));
});

test('getNamesByLanguage returns Arabic male names', () => {
    const names = Hisaab.getNamesByLanguage('arabic', 'male', 5);
    assertEqual(names.length, 5);
    assertTrue(names.includes('محمد'));
});

test('getNamesByLanguage returns Hebrew names', () => {
    const names = Hisaab.getNamesByLanguage('hebrew', 'male', 5);
    assertEqual(names.length, 5);
});

test('getNamesByLanguage returns Persian names', () => {
    const names = Hisaab.getNamesByLanguage('persian', 'female', 5);
    assertEqual(names.length, 5);
});

console.log('\n📊 Abjad Chart Tests\n');

test('getAbjadChart returns Arabic chart', () => {
    const chart = Hisaab.getAbjadChart('arabic');
    assertTrue(chart !== null);
    assertTrue(chart.totalLetters > 0);
});

test('getAbjadChart returns Hebrew chart', () => {
    const chart = Hisaab.getAbjadChart('hebrew');
    assertEqual(chart.language, 'Hebrew');
    assertTrue(chart.totalLetters > 0);
});

test('getAbjadChart returns null for invalid language', () => {
    const chart = Hisaab.getAbjadChart('invalid');
    assertEqual(chart, null);
});

console.log('\n🔄 Backward Compatibility Tests\n');

test('Basic Arabic calculation still works', () => {
    const h = new Hisaab('محمد');
    assertEqual(h.getValue(), 92);
});

test('Digit root still works', () => {
    const h = new Hisaab('محمد');
    assertEqual(h.getDigitRoot(), 2);
});

test('Arabic astrology still works', () => {
    const h = new Hisaab('محمد');
    const astrology = h.getArabicAstrology();
    assertTrue(astrology.element !== undefined);
});

test('Compare Arabic still works', () => {
    const comp = Hisaab.compareArabic('محمد', 'فاطمة');
    assertTrue(comp.partnerHouse >= 1 && comp.partnerHouse <= 9);
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`           TEST RESULTS: ${passed} passed, ${failed} failed`);
console.log('═══════════════════════════════════════════════════════════════\n');

if (failed === 0) {
    console.log('✅ All tests passed! v2.0.0 is ready.');
} else {
    console.log('❌ Some tests failed. Please review.');
    process.exit(1);
}