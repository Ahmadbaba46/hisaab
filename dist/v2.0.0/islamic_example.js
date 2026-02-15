const Hisaab = require('./index.js');

console.log('🕌 === Hisaab Islamic Features - Comprehensive Example === 🕌\n');

// Example 1: Divine Name Analysis
console.log('1. 📿 Divine Name Recognition:');
const allahAnalysis = new Hisaab('الله');
const asmaMatch = allahAnalysis.getAsmaUlHusnaMatch();
console.log(`✨ ${asmaMatch.arabic} (${asmaMatch.transliteration})`);
console.log(`   Value: ${asmaMatch.numericalValue}`);
console.log(`   Meaning: ${asmaMatch.meaning}`);
console.log(`   Attribute: ${asmaMatch.attribute}`);
console.log(`   🌟 ${asmaMatch.spiritualSignificance}`);
console.log('');

// Example 2: Prophet's Name Analysis
console.log('2. 🌙 Prophet Muhammad (ﷺ) Name Analysis:');
const muhammad = new Hisaab('محمد');
const islamicAnalysis = muhammad.getIslamicAnalysis();
console.log(`Name: ${islamicAnalysis.name} | Value: ${islamicAnalysis.value}`);
console.log(`📖 Quranic Connection: ${islamicAnalysis.quranicConnection.translation}`);
console.log(`📍 Reference: ${islamicAnalysis.quranicConnection.reference}`);
console.log(`🤲 Islamic Qualities: ${islamicAnalysis.islamicQualities.slice(0, 3).join(', ')}`);
console.log(`🤲 Dhikr: ${islamicAnalysis.spiritualGuidance.dhikr}`);
console.log('');

// Example 3: Finding Similar Divine Names
console.log('3. 🔍 Names with Divine Connections:');
const names = ['فاطمة', 'عائشة', 'علي', 'حسن'];
names.forEach(name => {
    const analysis = new Hisaab(name);
    const similar = analysis.findSimilarAsmaUlHusna(15);
    console.log(`\n${name} (Value: ${analysis.getValue()}):`);
    if (similar.length > 0) {
        const closest = similar[0];
        console.log(`   🔗 Closest Divine Name: ${closest.arabic} (${closest.meaning})`);
        console.log(`   ✨ Connection: ${closest.connection}`);
    } else {
        console.log(`   📝 No close Divine Name connections found`);
    }
});
console.log('');

// Example 4: Complete Islamic Guidance
console.log('4. 🎯 Complete Islamic Spiritual Guidance:');
const guidanceExample = new Hisaab('يوسف');
const guidance = guidanceExample.getIslamicGuidance();
console.log(`Name: يوسف (Yusuf) - Prophet Joseph`);
console.log(`🤲 Recommended Dhikr: ${guidance.dhikr}`);
console.log(`🤲 Prayer Focus: ${guidance.prayer}`);
console.log(`🎯 Action: ${guidance.action}`);
console.log('');

// Example 5: Asma ul-Husna Statistics
console.log('5. 📊 99 Names of Allah - Divine Statistics:');
const stats = Hisaab.getAsmaStatistics();
console.log(`📿 Total Names: ${stats.totalNames}`);
console.log(`📊 Average Value: ${stats.averageValue}`);
console.log(`🔢 Value Range: ${stats.minValue} - ${stats.maxValue}`);
console.log(`🎯 Most Common Digit Root: ${stats.mostCommonDigitRoot}`);
console.log(`📈 Value Distribution: Low(${stats.valueRanges.low}) | Medium(${stats.valueRanges.medium}) | High(${stats.valueRanges.high})`);
console.log('');

// Example 6: Family Names Islamic Analysis
console.log('6. 👨‍👩‍👧‍👦 Family Names - Islamic Analysis:');
const family = ['عبدالله', 'خديجة', 'إبراهيم', 'مريم'];
const familyAnalysis = Hisaab.analyzeNamesIslamically(family);

familyAnalysis.forEach(member => {
    if (member.success) {
        console.log(`\n👤 ${member.name}:`);
        console.log(`   📊 Value: ${member.basicAnalysis.value} | Digit Root: ${member.basicAnalysis.digitRoot}`);
        console.log(`   🌟 Category: ${member.basicAnalysis.category}`);
        console.log(`   ☪️ Islamic Qualities: ${member.islamicAnalysis.islamicQualities.slice(0, 2).join(', ')}`);
        
        if (member.islamicAnalysis.asmaUlHusnaMatch) {
            console.log(`   ✨ Divine Name Match: ${member.islamicAnalysis.asmaUlHusnaMatch.meaning}!`);
        }
        
        if (member.islamicAnalysis.quranicConnection) {
            console.log(`   📖 Quranic Connection: ${member.islamicAnalysis.quranicConnection.significance}`);
        }
    }
});

console.log('\n🤲 === May Allah bless these names and their bearers === 🤲');
console.log('💫 "And to Allah belong the best names, so invoke Him by them." - Quran 7:180');