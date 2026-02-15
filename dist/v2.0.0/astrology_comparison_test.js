const Hisaab = require('./index.js');

console.log('🌟 === Arabic vs Western Astrology Comparison === 🌟\n');

const testNames = ['محمد', 'فاطمة', 'علي', 'الله', 'الرحمن', 'يوسف'];

testNames.forEach(name => {
    const hisaab = new Hisaab(name);
    const astrology = hisaab.getAstrological();
    const classification = hisaab.getClassification();
    
    console.log(`\n📖 ${name} (Value: ${hisaab.getValue()}):`);
    console.log('─'.repeat(50));
    
    // Arabic System
    console.log('🌙 ARABIC SYSTEM (Traditional Islamic Astrology):');
    console.log(`   🔥 Element: ${astrology.arabic.element.name} (${astrology.arabic.element.arabic})`);
    console.log(`       Calculation: ${astrology.arabic.element.calculation}`);
    console.log(`       Nature: ${astrology.arabic.element.qualities.nature}`);
    console.log(`       Temperament: ${astrology.arabic.element.qualities.temperament}`);
    
    console.log(`   🪐 Planet: ${astrology.arabic.planet.name} (${astrology.arabic.planet.arabic})`);
    console.log(`       Calculation: ${astrology.arabic.planet.calculation}`);
    console.log(`       Day: ${astrology.arabic.planet.favorableDay} (${astrology.arabic.planet.favorableDayArabic})`);
    
    console.log(`   ♈ Zodiac: ${astrology.arabic.zodiac.sign} (${astrology.arabic.zodiac.arabic})`);
    console.log(`       Calculation: ${astrology.arabic.zodiac.calculation}`);
    console.log(`       Position: ${astrology.arabic.zodiac.position}/12`);
    
    // Western System
    console.log('\n🌍 WESTERN SYSTEM (Pythagorean/Chaldean):');
    console.log(`   🔥 Element: ${classification.western.element} (${classification.western.basis})`);
    console.log(`   🪐 Planet: ${astrology.western.planet} (Digit Root: ${astrology.western.digitRoot})`);
    console.log(`   🎨 Color: ${astrology.western.favorableColor}`);
    console.log(`   📅 Day: ${astrology.western.favorableDay}`);
    
    // Common Classifications
    console.log('\n📊 GENERAL CLASSIFICATION:');
    console.log(`   💪 Strength: ${classification.strength}`);
    console.log(`   ⚡ Energy: ${classification.energy}`);
    console.log(`   📈 Range: ${classification.range}`);
    
    console.log('═'.repeat(50));
});

console.log('\n🔬 === SYSTEM COMPARISON SUMMARY ===');
console.log('Arabic System Features:');
console.log('  • Elements: Value % 4 (Fire, Earth, Air, Water)');
console.log('  • Planets: Value % 7 (Classical 7 planets)');
console.log('  • Zodiac: Value % 12 (12 zodiac signs)');
console.log('  • Includes Arabic names and temperaments');

console.log('\nWestern System Features:');
console.log('  • Elements: Digit Root based (Pythagorean)');
console.log('  • Planets: Includes modern planets (Uranus, Neptune)');
console.log('  • Colors: Traditional planetary color associations');
console.log('  • Based on reduced number (1-9)');

console.log('\n💡 Both systems provide different perspectives on the same name!');

// Demonstrate calculation methods
console.log('\n🧮 === CALCULATION EXAMPLES ===');
const example = new Hisaab('محمد'); // Value = 92
console.log(`Name: محمد (Value: ${example.getValue()})`);
console.log(`Arabic Element: ${example.getValue()} % 4 = ${example.getValue() % 4} → ${example.getArabicAstrology().element.name}`);
console.log(`Arabic Planet: ${example.getValue()} % 7 = ${example.getValue() % 7} → ${example.getArabicAstrology().planet.name}`);
console.log(`Arabic Zodiac: ${example.getValue()} % 12 = ${example.getValue() % 12} → ${example.getArabicAstrology().zodiac.sign}`);
console.log(`Western Element: Digit Root ${example.getDigitRoot()} → ${example.getClassification().western.element}`);