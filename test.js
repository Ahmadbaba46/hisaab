const Hisaab = require('./index.js');

// Test cases
console.log('=== Hisaab Library Test ===\n');

try {
    // Test 1: Basic functionality
    console.log('Test 1: Basic functionality');
    const name1 = new Hisaab('محمد'); // Muhammad
    console.log(`Name: ${name1.getName()}`);
    console.log(`Value: ${name1.getValue()}`);
    console.log(`String: ${name1.toString()}`);
    console.log('Breakdown:', name1.getBreakdown());
    console.log('');

    // Test 2: Another common name
    console.log('Test 2: Another name');
    const name2 = new Hisaab('علي'); // Ali
    console.log(`${name2.toString()}`);
    console.log('Breakdown:', name2.getBreakdown());
    console.log('');

    // Test 3: Static method
    console.log('Test 3: Static method');
    const staticValue = Hisaab.calculate('فاطمة'); // Fatima
    console.log(`Static calculation for فاطمة: ${staticValue}`);
    console.log('');

    // Test 4: Name with Alif variants
    console.log('Test 4: Name with Alif variants');
    const name3 = new Hisaab('إبراهيم'); // Ibrahim
    console.log(`${name3.toString()}`);
    console.log('Breakdown:', name3.getBreakdown());
    console.log('');

    // Test 5: Error handling
    console.log('Test 5: Error handling');
    try {
        const invalid = new Hisaab('');
    } catch (error) {
        console.log(`Error caught: ${error.message}`);
    }

    try {
        const invalid2 = new Hisaab(null);
    } catch (error) {
        console.log(`Error caught: ${error.message}`);
    }

} catch (error) {
    console.error('Test failed:', error.message);
}