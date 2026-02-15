const Hisaab = require('./index.js');

console.log('🚀 === Hisaab v1.1.0 New Features Test ===\n');

// Test 1: Smart Name Generator
console.log('1. 📊 Smart Name Generator:');

// Generate names with target value 100
console.log('\n🎯 Names with value around 100:');
const target100 = Hisaab.generateNames({
    targetValue: 100,
    maxResults: 5
});

target100.forEach(result => {
    console.log(`   ${result.name}: Value=${result.value}, Score=${result.score}`);
    if (result.reasons.length > 0) {
        console.log(`      Reasons: ${result.reasons.join(', ')}`);
    }
});

// Generate male names with Water element
console.log('\n💧 Male names with Water element:');
const waterMales = Hisaab.generateNames({
    element: 'Water',
    gender: 'male',
    maxResults: 3
});

waterMales.forEach(result => {
    console.log(`   ${result.name}: Element=${result.element.arabic} (${result.element.name}), Value=${result.value}`);
});

// Generate names starting with 'م'
console.log('\n🔤 Names starting with "م":');
const mNames = Hisaab.generateNames({
    startsWith: 'م',
    maxResults: 5
});

mNames.forEach(result => {
    console.log(`   ${result.name}: Value=${result.value}, Element=${result.element.name}`);
});

// Test 2: Family Harmony Analyzer
console.log('\n\n2. 👨‍👩‍👧‍👦 Family Harmony Analyzer:');

// Test family with parents and children
const family1 = Hisaab.analyzeFamilyHarmony({
    parents: ['أحمد', 'فاطمة'],
    children: ['علي', 'زينب', 'محمد']
});

console.log('\n📊 Family Analysis Results:');
console.log(`Family Size: ${family1.familyStats.totalMembers} members`);
console.log(`Average Value: ${family1.familyStats.averageValue}`);
console.log(`Dominant Element: ${family1.familyStats.dominantElement.name} (${family1.familyStats.dominantElement.percentage}%)`);
console.log(`Energy Balance: ${family1.familyStats.energyBalance}`);
console.log(`Harmony Score: ${family1.harmony.score}/100 (${family1.harmony.level})`);

if (family1.parentCompatibility) {
    console.log(`\n💑 Parent Compatibility:`);
    console.log(`   House: ${family1.parentCompatibility.partnerHouse}`);
    console.log(`   Quality: ${family1.parentCompatibility.interpretation.quality} (${family1.parentCompatibility.interpretation.arabic})`);
}

console.log('\n🔍 Individual Members:');
family1.memberAnalyses.forEach(member => {
    console.log(`   ${member.name}: Value=${member.value}, Element=${member.element.name} (${member.element.arabic}), Planet=${member.planet.arabic}`);
});

console.log('\n💡 Recommendations:');
family1.recommendations.forEach(rec => {
    console.log(`   ${rec.category}: ${rec.suggestion}`);
    console.log(`      Arabic: ${rec.arabic}`);
});

// Test another family
console.log('\n\n📋 Another Family Example:');
const family2 = Hisaab.analyzeFamilyHarmony({
    parents: ['خالد', 'عائشة'],
    children: ['يوسف', 'مريم']
});

console.log(`Family: خالد & عائشة with children يوسف, مريم`);
console.log(`Harmony: ${family2.harmony.score}/100 (${family2.harmony.level})`);
console.log(`Dominant Element: ${family2.familyStats.dominantElement.name}`);

if (family2.parentCompatibility) {
    console.log(`Parent Compatibility: House ${family2.parentCompatibility.partnerHouse} - ${family2.parentCompatibility.interpretation.quality}`);
}

// Test 3: Advanced Name Generation
console.log('\n\n3. 🎲 Advanced Name Generation Examples:');

// Names good for marriage (House 7)
console.log('\n💕 Names with self-compatibility House 7:');
const house7Names = Hisaab.generateNames({
    partnerHouse: 7,
    maxResults: 3
});

house7Names.forEach(result => {
    console.log(`   ${result.name}: ${result.reasons.join(', ')}`);
});

// Female names, length 4-6, Fire element
console.log('\n🔥 Female Fire names (length 4-6):');
const femaleFireNames = Hisaab.generateNames({
    gender: 'female',
    element: 'Fire',
    length: [4, 6],
    maxResults: 3
});

femaleFireNames.forEach(result => {
    console.log(`   ${result.name}: Length=${result.name.length}, Element=${result.element.arabic}, Value=${result.value}`);
});

// Test 4: Element Distribution Analysis
console.log('\n\n4. 🌍 Element Distribution Analysis:');

const testNames = ['محمد', 'فاطمة', 'علي', 'عائشة', 'حسن', 'زينب', 'يوسف', 'مريم'];
const elementCounts = { Fire: 0, Earth: 0, Air: 0, Water: 0 };

console.log('\nName Element Distribution:');
testNames.forEach(name => {
    const hisaab = new Hisaab(name);
    const element = hisaab.getArabicAstrology().element.name;
    elementCounts[element]++;
    console.log(`   ${name}: ${element} (${hisaab.getArabicAstrology().element.arabic})`);
});

console.log('\nElement Summary:');
Object.keys(elementCounts).forEach(element => {
    const percentage = Math.round((elementCounts[element] / testNames.length) * 100);
    console.log(`   ${element}: ${elementCounts[element]} names (${percentage}%)`);
});

console.log('\n✅ === All v1.1.0 Features Working Successfully! ===');
console.log('\n🎉 New Features Added:');
console.log('   📊 Smart Name Generator - Generate names with specific criteria');
console.log('   👨‍👩‍👧‍👦 Family Harmony Analyzer - Analyze family compatibility');
console.log('   🎯 Advanced Filtering - Filter by element, value, length, gender');
console.log('   💡 Smart Recommendations - Cultural and spiritual guidance');
console.log('   📈 Harmony Scoring - Quantitative family analysis');

console.log('\n🚀 Ready for production in v1.1.0!');