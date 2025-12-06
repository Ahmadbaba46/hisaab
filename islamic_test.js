const Hisaab = require('./index.js');

console.log('=== Islamic Features Test ===\n');

// Test 1: Analysis of Divine Names
console.log('1. Testing Divine Name Recognition:');
const allahName = new Hisaab('الله');
const rahmanName = new Hisaab('الرحمن');

console.log(`الله analysis:`, allahName.getAsmaUlHusnaMatch());
console.log(`الرحمن analysis:`, rahmanName.getAsmaUlHusnaMatch());
console.log('');

// Test 2: Regular name with Islamic analysis
console.log('2. Islamic Analysis of Regular Name:');
const muhammadName = new Hisaab('محمد');
const islamicAnalysis = muhammadName.getIslamicAnalysis();
console.log('محمد Islamic analysis:', JSON.stringify(islamicAnalysis, null, 2));
console.log('');

// Test 3: Find similar Divine Names
console.log('3. Finding Similar Divine Names:');
const fatimaName = new Hisaab('فاطمة');
const similarNames = fatimaName.findSimilarAsmaUlHusna(30);
console.log('فاطمة similar Divine Names:', similarNames);
console.log('');

// Test 4: Quranic Connections
console.log('4. Quranic Connections:');
console.log('الله Quranic connection:', allahName.getQuranicConnection());
console.log('محمد Quranic connection:', muhammadName.getQuranicConnection());
console.log('');

// Test 5: Islamic Guidance
console.log('5. Islamic Spiritual Guidance:');
const guidance = muhammadName.getIslamicGuidance();
console.log('محمد spiritual guidance:', guidance);
console.log('');

// Test 6: Static methods - Asma ul-Husna analysis
console.log('6. Complete Asma ul-Husna Statistics:');
const asmaStats = Hisaab.getAsmaStatistics();
console.log('Divine Names Statistics:', asmaStats);
console.log('');

// Test 7: Find Divine Names by value
console.log('7. Finding Divine Names by Specific Value:');
const divineNames66 = Hisaab.findAsmaByValue(66); // Value of الله
console.log('Divine Names with value 66:', divineNames66);
console.log('');

// Test 8: Multiple names Islamic analysis
console.log('8. Multiple Names Islamic Analysis:');
const testNames = ['محمد', 'فاطمة', 'علي', 'عائشة', 'الله', 'الرحمن'];
const multipleAnalysis = Hisaab.analyzeNamesIslamically(testNames);
console.log('Multiple names analysis:');
multipleAnalysis.forEach(result => {
    if (result.success) {
        console.log(`${result.name}: Value=${result.basicAnalysis.value}, Islamic Qualities=${result.islamicAnalysis.islamicQualities.slice(0,2).join(', ')}`);
    }
});
console.log('');

// Test 9: Sample of Asma ul-Husna with values
console.log('9. Sample Divine Names with Numerical Values:');
const sampleAsma = Hisaab.getAsmaUlHusnaAnalysis().slice(0, 10);
sampleAsma.forEach(name => {
    console.log(`${name.arabic} (${name.transliteration}): ${name.numericalValue} - ${name.meaning}`);
});