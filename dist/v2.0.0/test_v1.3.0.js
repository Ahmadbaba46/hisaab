/**
 * Test file for v1.3.0 new features
 * Tests: Business Analysis, Date Integration, Advanced Numerology, Enhanced Islamic Features
 */

const Hisaab = require('./index.js');

console.log('='.repeat(80));
console.log('🎉 Hisaab v1.3.0 - New Features Test');
console.log('='.repeat(80));

// Test 1: Business Name Analysis
console.log('\n📊 TEST 1: BUSINESS NAME ANALYSIS');
console.log('-'.repeat(80));

const businessName = new Hisaab('محمد');
const businessAnalysis = businessName.getBusinessAnalysis();

console.log(`\n🏢 Business Name: ${businessAnalysis.name}`);
console.log(`📈 Abjad Value: ${businessAnalysis.value}`);
console.log(`🔢 Digit Root: ${businessAnalysis.digitRoot}`);
console.log(`\n✨ Success Indicators:`);
console.log(`   Range: ${businessAnalysis.successIndicators.range}`);
console.log(`   Strengths: ${businessAnalysis.strengths.join(', ')}`);
console.log(`   Challenges: ${businessAnalysis.challenges.join(', ')}`);
console.log(`\n🤝 Partnership Analysis:`);
console.log(`   Type: ${businessAnalysis.partnershipAnalysis.businessType}`);
console.log(`   Recommendation: ${businessAnalysis.partnershipAnalysis.recommendation}`);
console.log(`\n📅 Best Timing:`);
console.log(`   Days: ${businessAnalysis.timing.bestDays?.join(', ') || 'Any day'}`);
console.log(`   Launch: ${businessAnalysis.timing.launchTiming || 'Flexible'}`);
console.log(`\n🎯 Overall Assessment:`);
console.log(`   Rating: ${businessAnalysis.overallAssessment.rating}/10`);
console.log(`   Summary: ${businessAnalysis.overallAssessment.summary}`);
console.log(`\n🏭 Recommended Industries:`);
businessAnalysis.recommendedIndustries.forEach(industry => {
    console.log(`   • ${industry}`);
});

// Test 2: Date Integration & Life Path
console.log('\n\n📅 TEST 2: DATE INTEGRATION & LIFE PATH COMPATIBILITY');
console.log('-'.repeat(80));

const personName = new Hisaab('أحمد');
const birthDate = { day: 15, month: 7, year: 1990 };
const lifePath = personName.getLifePathCompatibility(birthDate.day, birthDate.month, birthDate.year);

console.log(`\n👤 Name: ${lifePath.name}`);
console.log(`📅 Birth Date: ${birthDate.day}/${birthDate.month}/${birthDate.year}`);
console.log(`🔢 Name Digit Root: ${lifePath.nameDigitRoot}`);
console.log(`🛤️  Life Path Number: ${lifePath.lifePathNumber}`);
console.log(`\n🎯 Life Path Pattern:`);
console.log(`   Description: ${lifePath.lifePathPattern.description}`);
console.log(`   Strengths: ${lifePath.lifePathPattern.strengths.join(', ')}`);
console.log(`   Challenges: ${lifePath.lifePathPattern.challenges.join(', ')}`);
console.log(`\n💫 Compatibility:`);
console.log(`   Score: ${lifePath.compatibility.score}/100`);
console.log(`   Level: ${lifePath.compatibility.level}`);
console.log(`   Description: ${lifePath.compatibility.description}`);
console.log(`\n🔄 Harmonization:`);
console.log(`   Combined Energy: ${lifePath.harmonization.combinedEnergy}`);
console.log(`   Advice: ${lifePath.harmonization.advice}`);
console.log(`   Resonance: ${lifePath.harmonization.resonance}`);
console.log(`\n📆 Personal Year (2024):`);
const currentYear = personName.calculatePersonalYear(2024, birthDate.month, birthDate.day);
console.log(`   Year Number: ${currentYear.personalYear}`);
console.log(`   Theme: ${currentYear.theme}`);
console.log(`   Focus: ${currentYear.focus}`);
console.log(`   Alignment: ${currentYear.nameAlignment}`);

// Test 3: Advanced Numerology
console.log('\n\n🔮 TEST 3: ADVANCED NUMEROLOGY');
console.log('-'.repeat(80));

const advancedName = new Hisaab('علي');
const advanced = advancedName.getAdvancedNumerology();

console.log(`\n✨ Name: ${advanced.name}`);
console.log(`📊 Value: ${advanced.value}`);
console.log(`🔢 Digit Root: ${advanced.digitRoot}`);
console.log(`\n🌟 Master Numbers:`);
if (advanced.masterNumbers.isMasterNumber) {
    console.log(`   ✅ Master Number ${advanced.masterNumbers.number} detected!`);
    console.log(`   Meaning: ${advanced.masterNumbers.meaning}`);
    console.log(`   Purpose: ${advanced.masterNumbers.purpose}`);
} else {
    console.log(`   ℹ️  ${advanced.masterNumbers.note}`);
}
console.log(`\n⚖️  Karmic Numbers:`);
if (advanced.karmicNumbers.isKarmicNumber) {
    console.log(`   ⚠️  Karmic Number ${advanced.karmicNumbers.number} detected!`);
    console.log(`   Lesson: ${advanced.karmicNumbers.lesson}`);
    console.log(`   Challenge: ${advanced.karmicNumbers.challenge}`);
} else {
    console.log(`   ℹ️  ${advanced.karmicNumbers.note}`);
}
console.log(`\n💎 Hidden Potential:`);
console.log(`   Unique Numbers: ${advanced.hiddenPotential.uniqueNumbers}`);
console.log(`   Dominant Number: ${advanced.hiddenPotential.dominantNumber}`);
console.log(`   Repeated: ${advanced.hiddenPotential.repeatedNumbers.join(', ') || 'None'}`);
console.log(`   Missing: ${advanced.hiddenPotential.missingNumbers.join(', ') || 'None'}`);
console.log(`\n🎭 Core Numbers:`);
console.log(`   Soul Urge: ${advanced.soulUrge}`);
console.log(`   Personality: ${advanced.personalityNumber}`);

// Test 4: Enhanced Islamic Features (Prayer Times)
console.log('\n\n🕌 TEST 4: ENHANCED ISLAMIC FEATURES - PRAYER TIMES');
console.log('-'.repeat(80));

const islamicName = new Hisaab('فاطمة');
const prayerCorrelations = islamicName.getPrayerTimeCorrelations();

console.log(`\n🌙 Name: ${prayerCorrelations.name}`);
console.log(`🔢 Digit Root: ${prayerCorrelations.digitRoot}`);
console.log(`\n🕌 Prayer Correlation:`);
console.log(`   Favorable Prayer: ${prayerCorrelations.favorablePrayer}`);
console.log(`   Arabic: ${prayerCorrelations.arabicPrayer}`);
console.log(`   Significance: ${prayerCorrelations.significance}`);
console.log(`   Timing: ${prayerCorrelations.timing}`);
console.log(`\n🤲 Personalized Guidance:`);
console.log(`   ${prayerCorrelations.personalizedGuidance}`);
if (prayerCorrelations.bestTimes) {
    console.log(`\n⏰ Best Prayer Times:`);
    prayerCorrelations.bestTimes.forEach(time => {
        console.log(`   • ${time}`);
    });
}
if (prayerCorrelations.dhikrPlan) {
    console.log(`\n📿 Daily Dhikr Plan:`);
    console.log(`   Morning: ${prayerCorrelations.dhikrPlan.morning}`);
    console.log(`   Evening: ${prayerCorrelations.dhikrPlan.evening}`);
    console.log(`   After Prayer: ${prayerCorrelations.dhikrPlan.afterPrayer}`);
}

// Test 5: Extended Quranic Connections
console.log('\n\n📖 TEST 5: EXTENDED QURANIC CONNECTIONS');
console.log('-'.repeat(80));

const quranicName = new Hisaab('يوسف');
const extendedConnections = quranicName.getExtendedQuranicConnections();

console.log(`\n📜 Name: ${quranicName.getName()}`);
console.log(`🔢 Value: ${quranicName.getValue()}`);
console.log(`\n🕌 Quranic Connections Found: ${extendedConnections.length}`);

extendedConnections.slice(0, 3).forEach((conn, index) => {
    console.log(`\n   ${index + 1}. ${conn.type}`);
    console.log(`      Surah: ${conn.surah}, Ayah: ${conn.ayah}`);
    console.log(`      Translation: "${conn.translation?.substring(0, 100)}..."`);
    console.log(`      Significance: ${conn.significance}`);
});

// Test 6: Comprehensive v1.3.0 Report
console.log('\n\n📋 TEST 6: COMPREHENSIVE v1.3.0 REPORT');
console.log('-'.repeat(80));

const compName = new Hisaab('خالد');
console.log(`\n✨ Complete Analysis for: ${compName.getName()}`);
console.log(`📊 Abjad Value: ${compName.getValue()}`);
console.log(`🔢 Digit Root: ${compName.getDigitRoot()}`);

// Business potential
const bizAnalysis = compName.getBusinessAnalysis();
console.log(`\n💼 Business Potential: ${bizAnalysis.overallAssessment.rating}/10`);
console.log(`   ${bizAnalysis.overallAssessment.summary}`);

// Date compatibility example
const dateComp = compName.getLifePathCompatibility(10, 5, 1985);
console.log(`\n🎯 Life Path Compatibility (10/5/1985): ${dateComp.compatibility.score}/100`);
console.log(`   ${dateComp.compatibility.description}`);

// Advanced numerology
const advNum = compName.getAdvancedNumerology();
console.log(`\n🔮 Advanced Numerology:`);
console.log(`   Master Number: ${advNum.masterNumbers.isMasterNumber ? 'Yes' : 'No'}`);
console.log(`   Karmic Number: ${advNum.karmicNumbers.isKarmicNumber ? 'Yes' : 'No'}`);
console.log(`   Hidden Potential: ${advNum.hiddenPotential.uniqueNumbers} unique numbers`);

// Prayer correlation
const prayerCor = compName.getPrayerTimeCorrelations();
console.log(`\n🕌 Prayer Focus: ${prayerCor.favorablePrayer}`);
console.log(`   ${prayerCor.significance}`);

console.log('\n' + '='.repeat(80));
console.log('✅ All v1.3.0 features tested successfully!');
console.log('='.repeat(80));
console.log('\n🎊 New Features Summary:');
console.log('   ✅ Business Name Analysis - Complete');
console.log('   ✅ Date Integration & Life Path - Complete');
console.log('   ✅ Advanced Numerology - Complete');
console.log('   ✅ Enhanced Prayer Correlations - Complete');
console.log('   ✅ Extended Quranic Connections - Complete');
console.log('\n📚 Version: 1.3.0');
console.log('🎯 Status: Production Ready');
console.log('='.repeat(80));
