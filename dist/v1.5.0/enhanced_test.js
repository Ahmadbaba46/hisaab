const Hisaab = require('./index.js');

console.log('=== Enhanced Hisaab Library Features ===\n');

// Test the enhanced features
const name1 = new Hisaab('محمد');
const name2 = new Hisaab('فاطمة');

console.log('1. Basic Information:');
console.log(`${name1.toString()}`);
console.log(`${name2.toString()}\n`);

console.log('2. Digit Root Calculation:');
console.log(`محمد digit root: ${name1.getDigitRoot()}`);
console.log(`فاطمة digit root: ${name2.getDigitRoot()}\n`);

console.log('3. Numerological Analysis:');
console.log('محمد numerology:', name1.getNumerology());
console.log('فاطمة numerology:', name2.getNumerology());
console.log('');

console.log('4. Lucky Numbers:');
console.log(`محمد lucky numbers: ${name1.getLuckyNumbers().join(', ')}`);
console.log(`فاطمة lucky numbers: ${name2.getLuckyNumbers().join(', ')}\n`);

console.log('5. Compatibility Analysis:');
const compatibility = name1.compareWith(name2);
console.log('محمد & فاطمة compatibility:', compatibility);
console.log('');

console.log('6. Static Comparison Method:');
const staticComparison = Hisaab.compare('علي', 'عائشة');
console.log('علي & عائشة compatibility:', staticComparison);
console.log('');

console.log('7. Detailed Analysis:');
console.log(name1.getDetailedAnalysis());

console.log('8. More Examples:');
const names = ['الله', 'الرحمن', 'الرحيم', 'عبدالله'];
names.forEach(name => {
    const hisaab = new Hisaab(name);
    console.log(`${name}: Value=${hisaab.getValue()}, DigitRoot=${hisaab.getDigitRoot()}, Category="${hisaab.getNumerology().category}"`);
});