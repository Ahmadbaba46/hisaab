const Hisaab = require('./index.js');

console.log('💕 === حساب الشريك (Arabic Partner Calculation) Test === 💕\n');

// Test famous couples and pairs
const testPairs = [
    ['محمد', 'فاطمة'],     // Prophet Muhammad & Fatima
    ['علي', 'فاطمة'],      // Ali & Fatima  
    ['إبراهيم', 'سارة'],   // Abraham & Sarah
    ['يوسف', 'مريم'],      // Joseph & Mary
    ['عبدالله', 'آمنة'],   // Abdullah & Amina (Prophet's parents)
    ['أحمد', 'خديجة'],     // Ahmad & Khadijah
    ['حسن', 'زينب'],       // Hassan & Zeinab
    ['عمر', 'عائشة']       // Omar & Aisha
];

console.log('🔍 === Arabic vs Western Compatibility Comparison ===\n');

testPairs.forEach((pair, index) => {
    const [name1, name2] = pair;
    const hisaab1 = new Hisaab(name1);
    const hisaab2 = new Hisaab(name2);
    
    console.log(`${index + 1}. 👫 ${name1} & ${name2}:`);
    console.log(`   Values: ${hisaab1.getValue()} & ${hisaab2.getValue()}`);
    console.log(`   Digit Roots: ${hisaab1.getDigitRoot()} & ${hisaab2.getDigitRoot()}`);
    
    // Arabic System
    const arabicComp = hisaab1.getArabicCompatibility(name2);
    console.log(`\n   🌙 ARABIC (حساب الشريك):`);
    console.log(`      📊 Calculation: ${arabicComp.calculation}`);
    console.log(`      🏠 Partner House: ${arabicComp.partnerHouse}`);
    console.log(`      📈 Rating: ${arabicComp.interpretation.rating}`);
    console.log(`      🎯 Quality: ${arabicComp.interpretation.quality} (${arabicComp.interpretation.arabic})`);
    console.log(`      📝 Prediction: ${arabicComp.interpretation.details}`);
    
    // Western System
    const westernComp = hisaab1.getWesternCompatibility(name2);
    console.log(`\n   🌍 WESTERN:`);
    console.log(`      📊 Score: ${westernComp.compatibilityScore}%`);
    console.log(`      🎯 Level: ${westernComp.compatibility}`);
    
    console.log(`\n   💡 House Significance: ${arabicComp.houseSignificance}`);
    console.log('   ─'.repeat(60));
    console.log('');
});

// Demonstrate all 9 houses
console.log('\n📚 === Complete حساب الشريك Houses (1-9) ===\n');

// Create examples for each house
const houseExamples = [
    { names: ['علي', 'نور'], expectedHouse: 1 },
    { names: ['محمد', 'زينب'], expectedHouse: 2 },
    { names: ['أحمد', 'سارة'], expectedHouse: 3 },
    { names: ['حسن', 'مريم'], expectedHouse: 4 },
    { names: ['يوسف', 'فاطمة'], expectedHouse: 5 },
    { names: ['عمر', 'خديجة'], expectedHouse: 6 },
    { names: ['إبراهيم', 'عائشة'], expectedHouse: 7 },
    { names: ['عبدالله', 'آمنة'], expectedHouse: 8 },
    { names: ['خالد', 'ليلى'], expectedHouse: 9 }
];

// Find actual examples for each house
console.log('🏠 House Examples:');
for (let house = 1; house <= 9; house++) {
    const arabicComp = Hisaab.compareArabic('محمد', 'فاطمة'); // Example calculation
    console.log(`\nHouse ${house} (${house === 7 ? '🌟 BEST' : house === 9 || house === 6 ? '⚠️ WORST' : '📊'}):`);
    
    // Get interpretation for this house
    const testName1 = new Hisaab('test');
    const interpretation = testName1.getArabicCompatibilityInterpretation(house);
    console.log(`   Quality: ${interpretation.quality} (${interpretation.arabic}) - ${interpretation.rating}`);
    console.log(`   Details: ${interpretation.details}`);
}

// Statistical analysis
console.log('\n📊 === Statistical Analysis of Test Couples ===');
let houseDistribution = {};
let averageRating = 0;
let bestHouses = [];
let worstHouses = [];

testPairs.forEach(pair => {
    const arabicComp = Hisaab.compareArabic(pair[0], pair[1]);
    const house = arabicComp.partnerHouse;
    
    houseDistribution[house] = (houseDistribution[house] || 0) + 1;
    
    if (house === 7) bestHouses.push(pair);
    if (house === 6 || house === 9) worstHouses.push(pair);
});

console.log('\nHouse Distribution:', houseDistribution);
console.log(`Best Matches (House 7): ${bestHouses.length > 0 ? bestHouses.map(p => p.join(' & ')).join(', ') : 'None in test set'}`);
console.log(`Challenging Matches (Houses 6,9): ${worstHouses.length > 0 ? worstHouses.map(p => p.join(' & ')).join(', ') : 'None in test set'}`);

console.log('\n🤲 === Traditional Arabic Wisdom ===');
console.log('💍 "The number 7 represents the house of perfect harmony"');
console.log('⚖️ "Add 7 to bind two souls in calculation"');  
console.log('🏠 "Each house reveals the destiny of partnership"');
console.log('📖 "This ancient method guides marriage decisions"');

// Quick reference guide
console.log('\n📋 === Quick Reference Guide ===');
console.log('🔥 Best Houses: 7 (Perfect), 4 (Good wealth), 2 (Wealth)');
console.log('⚡ Neutral Houses: 5 (Politicians), 8 (Scholars)'); 
console.log('⚠️ Challenging Houses: 1 (Initial good), 3 (Family issues)');
console.log('❌ Avoid Houses: 6 (Misfortune), 9 (Complete breakdown)');