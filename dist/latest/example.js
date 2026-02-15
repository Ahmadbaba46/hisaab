const Hisaab = require('./index.js');

console.log('=== Hisaab Library Examples ===\n');

// Example 1: Popular Arabic names
const names = ['محمد', 'علي', 'فاطمة', 'عائشة', 'حسن', 'زينب'];

console.log('Popular Arabic Names and their Abjad values:');
names.forEach(name => {
    const hisaab = new Hisaab(name);
    console.log(`${name} = ${hisaab.getValue()}`);
});

console.log('\n=== Detailed Breakdown Example ===');
const detailedExample = new Hisaab('الرحمن'); // Ar-Rahman (The Most Merciful)
console.log(`Name: ${detailedExample.getName()}`);
console.log(`Total Value: ${detailedExample.getValue()}`);
console.log('Letter breakdown:');
detailedExample.getBreakdown().forEach(item => {
    console.log(`  ${item.letter} = ${item.value}`);
});

console.log('\n=== Quick Calculation (Static Method) ===');
console.log(`Value of 'الله': ${Hisaab.calculate('الله')}`); // Allah