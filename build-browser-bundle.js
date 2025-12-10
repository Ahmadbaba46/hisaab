/**
 * Build Browser Bundle Script
 * Creates a self-contained browser version of Hisaab
 */

const fs = require('fs');
const path = require('path');

console.log('📦 Building Hisaab Browser Bundle...\n');

// Read all source files with UTF-8 encoding
const islamicData = fs.readFileSync('islamic_data.js', 'utf8');
const lunarMansions = fs.readFileSync('lunar_mansions_data.js', 'utf8');
const enhancedIslamic = fs.readFileSync('enhanced_islamic_data.js', 'utf8');
const businessData = fs.readFileSync('business_analysis_data.js', 'utf8');
const advancedData = fs.readFileSync('advanced_numerology_data.js', 'utf8');
const mainLibrary = fs.readFileSync('index.js', 'utf8');

// Create the browser bundle
const bundle = `/**
 * Hisaab Browser Bundle - Self-contained version
 * Version: 1.3.0
 * Generated: ${new Date().toISOString()}
 */

(function(window) {
    'use strict';
    
    console.log('📦 Loading Hisaab Browser Bundle v1.3.0...');
    
    // Create module system
    const modules = {};
    const moduleCache = {};
    
    function require(moduleName) {
        if (moduleCache[moduleName]) {
            return moduleCache[moduleName];
        }
        
        if (modules[moduleName]) {
            const module = { exports: {} };
            modules[moduleName](module, module.exports, require);
            moduleCache[moduleName] = module.exports;
            return module.exports;
        }
        
        throw new Error('Module not found: ' + moduleName);
    }
    
    // Register data modules
    modules['./islamic_data.js'] = function(module, exports, require) {
${islamicData}
    };
    
    modules['./lunar_mansions_data.js'] = function(module, exports, require) {
${lunarMansions}
    };
    
    modules['./enhanced_islamic_data.js'] = function(module, exports, require) {
${enhancedIslamic}
    };
    
    modules['./business_analysis_data.js'] = function(module, exports, require) {
${businessData}
    };
    
    modules['./advanced_numerology_data.js'] = function(module, exports, require) {
${advancedData}
    };
    
    // Register main library
    modules['./index.js'] = function(module, exports, require) {
${mainLibrary}
    };
    
    // Load and expose Hisaab
    try {
        const Hisaab = require('./index.js');
        window.Hisaab = Hisaab;
        console.log('✅ Hisaab class loaded successfully');
        console.log('🎉 Ready to use: new Hisaab("اسم عربي")');
        
        // Provide a load function for compatibility
        window.loadHisaabLibrary = function() {
            return Promise.resolve(true);
        };
    } catch (error) {
        console.error('❌ Error loading Hisaab:', error);
        console.error(error.stack);
    }
    
})(window);
`;

// Write the bundle with UTF-8 encoding
const outputPath = path.join('public', 'js', 'hisaab-complete.js');
fs.writeFileSync(outputPath, bundle, 'utf8');

const stats = fs.statSync(outputPath);
console.log('✅ Bundle created successfully!');
console.log(`📁 Location: ${outputPath}`);
console.log(`📦 Size: ${(stats.size / 1024).toFixed(2)} KB`);
console.log(`📝 Lines: ${bundle.split('\n').length}`);
console.log('\n🎉 Ready to use in browser!');
