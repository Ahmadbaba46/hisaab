const Hisaab = require('./index.js');

console.log('=== Advanced Hisaab Library Features ===\n');

// Test advanced features
const name = new Hisaab('محمد');

console.log('1. Name Classification:');
console.log('محمد classification:', name.getClassification());
console.log('');

console.log('2. Astrological Information:');
console.log('محمد astrology:', name.getAstrological());
console.log('');

console.log('3. Personality Traits:');
console.log('محمد traits:', name.getPersonalityTraits());
console.log('');

console.log('4. Complete Report:');
const report = name.getCompleteReport();
console.log('محمد complete report:', JSON.stringify(report, null, 2));
console.log('');

console.log('5. Finding Similar Names:');
const arabicNames = ['محمد', 'أحمد', 'علي', 'حسن', 'حسين', 'عمر', 'يوسف', 'إبراهيم'];
const similar = name.findSimilarNames(arabicNames, 20);
console.log('Names similar to محمد (within 20 points):', similar);
console.log('');

console.log('6. Multiple Name Analysis:');
const analysis = Hisaab.analyzeMultiple(['محمد', 'فاطمة', 'علي', 'عائشة', 'زينب']);
console.log('Multiple names analysis:', analysis);
console.log('');

console.log('7. Most Compatible Pair:');
const testNames = ['محمد', 'فاطمة', 'علي', 'عائشة', 'حسن', 'زينب'];
const mostCompatible = Hisaab.findMostCompatible(testNames);
console.log('Most compatible pair:', mostCompatible);
console.log('');

console.log('8. Different Name Classifications:');
const examples = ['الله', 'الرحمن', 'عبدالله', 'عبدالرحمن'];
examples.forEach(exampleName => {
    const h = new Hisaab(exampleName);
    console.log(`${exampleName}:`);
    console.log(`  Value: ${h.getValue()}`);
    console.log(`  Classification: ${h.getClassification().strength} ${h.getClassification().element}`);
    console.log(`  Energy: ${h.getClassification().energy}`);
    console.log(`  Astrology: ${h.getAstrological().planet} - ${h.getAstrological().favorableColor}`);
    console.log('');
});