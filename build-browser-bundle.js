/**
 * Build Browser Bundle Script
 * Creates a self-contained browser version of Hisaab v1.4.0
 */

const fs = require('fs');
const path = require('path');

console.log('📦 Building Hisaab Browser Bundle v1.4.0...\n');

// Read all source files with UTF-8 encoding
const files = {
    islamicData: fs.readFileSync('islamic_data.js', 'utf8'),
    lunarMansions: fs.readFileSync('lunar_mansions_data.js', 'utf8'),
    enhancedIslamic: fs.readFileSync('enhanced_islamic_data.js', 'utf8'),
    businessData: fs.readFileSync('business_analysis_data.js', 'utf8'),
    advancedData: fs.readFileSync('advanced_numerology_data.js', 'utf8'),
    regionalData: fs.readFileSync('regional_patterns_data.js', 'utf8'),
    aiData: fs.readFileSync('ai_patterns_data.js', 'utf8'),
    nameData: fs.readFileSync('name_database.js', 'utf8'),
    exportData: fs.readFileSync('export_templates_data.js', 'utf8'),
    historicalData: fs.readFileSync('historical_names_data.js', 'utf8'),
    sahabaData: fs.readFileSync('sahaba_names_data.js', 'utf8'),
    hijriData: fs.readFileSync('hijri_calendar_data.js', 'utf8'),
    mainLibrary: fs.readFileSync('index.js', 'utf8')
};

// Create the browser bundle
const bundle = `/**
 * Hisaab Browser Bundle - Self-contained version
 * Version: 1.4.0
 * Generated: ${new Date().toISOString()}
 * 
 * Features:
 * - Geographic & Regional Analysis
 * - AI Recommendations
 * - Export & Reporting
 * - Historical Database
 * - Hijri Calendar
 */

(function(window) {
    'use strict';
    
    console.log('📦 Loading Hisaab Browser Bundle v1.4.0...');
    
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
${files.islamicData}
    };
    
    modules['./lunar_mansions_data.js'] = function(module, exports, require) {
${files.lunarMansions}
    };
    
    modules['./enhanced_islamic_data.js'] = function(module, exports, require) {
${files.enhancedIslamic}
    };
    
    modules['./business_analysis_data.js'] = function(module, exports, require) {
${files.businessData}
    };
    
    modules['./advanced_numerology_data.js'] = function(module, exports, require) {
${files.advancedData}
    };
    
    modules['./regional_patterns_data.js'] = function(module, exports, require) {
${files.regionalData}
    };
    
    modules['./ai_patterns_data.js'] = function(module, exports, require) {
${files.aiData}
    };
    
    modules['./name_database.js'] = function(module, exports, require) {
${files.nameData}
    };
    
    modules['./export_templates_data.js'] = function(module, exports, require) {
${files.exportData}
    };
    
    modules['./historical_names_data.js'] = function(module, exports, require) {
${files.historicalData}
    };
    
    modules['./sahaba_names_data.js'] = function(module, exports, require) {
${files.sahabaData}
    };
    
    modules['./hijri_calendar_data.js'] = function(module, exports, require) {
${files.hijriData}
    };
    
    // Register main library
    modules['./index.js'] = function(module, exports, require) {
${files.mainLibrary}
    };
    
    // Load and expose Hisaab
    try {
        const Hisaab = require('./index.js');
        window.Hisaab = Hisaab;
        console.log('✅ Hisaab v1.4.0 loaded successfully');
        console.log('🎉 Ready to use: new Hisaab("اسم عربي")');
        console.log('📋 New features: getRegionalPattern(), getSmartRecommendations(), getCurrentHijri()');
        
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
console.log('\n🎉 v1.4.0 Browser Bundle Ready!');
console.log('📋 Includes: Regional, AI, Export, Historical, Hijri features');