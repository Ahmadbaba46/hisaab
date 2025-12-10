# Simple bundler for Hisaab
Write-Host "Building browser bundle..." -ForegroundColor Cyan

# Read all data files
$islamicData = Get-Content "islamic_data.js" -Raw
$lunarMansions = Get-Content "lunar_mansions_data.js" -Raw
$enhancedIslamic = Get-Content "enhanced_islamic_data.js" -Raw
$businessData = Get-Content "business_analysis_data.js" -Raw
$advancedData = Get-Content "advanced_numerology_data.js" -Raw
$mainLibrary = Get-Content "index.js" -Raw

# Create bundle
$bundle = @"
/**
 * Hisaab Browser Bundle - Self-contained version
 * Generated from source files
 */

(function(window) {
    'use strict';
    
    console.log('📦 Loading Hisaab Browser Bundle...');
    
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
        $islamicData
    };
    
    modules['./lunar_mansions_data.js'] = function(module, exports, require) {
        $lunarMansions
    };
    
    modules['./enhanced_islamic_data.js'] = function(module, exports, require) {
        $enhancedIslamic
    };
    
    modules['./business_analysis_data.js'] = function(module, exports, require) {
        $businessData
    };
    
    modules['./advanced_numerology_data.js'] = function(module, exports, require) {
        $advancedData
    };
    
    // Register main library
    modules['./index.js'] = function(module, exports, require) {
        $mainLibrary
    };
    
    // Load and expose Hisaab
    const Hisaab = require('./index.js');
    window.Hisaab = Hisaab;
    
    console.log('✅ Hisaab loaded successfully');
    window.loadHisaabLibrary = function() {
        return Promise.resolve(true);
    };
    
})(window);
"@

$bundle | Out-File -FilePath "public/js/hisaab-complete.js" -Encoding UTF8
Write-Host "✅ Bundle created: public/js/hisaab-complete.js" -ForegroundColor Green
