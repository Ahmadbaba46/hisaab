/**
 * Hisaab Browser Wrapper
 * Makes the Node.js Hisaab library work in browser without module.exports
 */

// This file loads the main Hisaab library and exposes it to the browser
(function() {
    'use strict';

    // Polyfill for require() and module.exports in browser
    if (typeof window.module === 'undefined') {
        window.module = { exports: {} };
    }

    if (typeof window.require === 'undefined') {
        window.require = function(moduleName) {
            // Map module names to window objects
            const modules = {
                './islamic_data.js': window.IslamicData,
                './lunar_mansions_data.js': window.LunarMansionsData,
                './enhanced_islamic_data.js': window.EnhancedIslamicData,
                './business_analysis_data.js': window.BusinessAnalysisData,
                './advanced_numerology_data.js': window.AdvancedNumerologyData
            };

            if (modules[moduleName]) {
                return modules[moduleName];
            }

            console.warn('Module not found:', moduleName);
            return {};
        };
    }

    // Function to load scripts sequentially
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false; // Load in order
            script.onload = () => {
                console.log('✅ Loaded:', src);
                resolve();
            };
            script.onerror = () => {
                console.error('❌ Failed to load:', src);
                reject(new Error('Failed to load ' + src));
            };
            document.head.appendChild(script);
        });
    }

    // Load all required files
    window.loadHisaabLibrary = async function() {
        try {
            console.log('📦 Loading Hisaab library...');

            // Load data files first (these will set window.IslamicData, etc.)
            await loadScript('../islamic_data.js');
            await loadScript('../lunar_mansions_data.js');
            await loadScript('../enhanced_islamic_data.js');
            await loadScript('../business_analysis_data.js');
            await loadScript('../advanced_numerology_data.js');

            // Now load main library
            await loadScript('../index.js');

            // Check if Hisaab is available
            if (typeof window.Hisaab !== 'undefined') {
                console.log('✅ Hisaab library loaded successfully!');
                return true;
            } else {
                console.error('❌ Hisaab class not found after loading');
                return false;
            }
        } catch (error) {
            console.error('❌ Error loading Hisaab library:', error);
            return false;
        }
    };

})();
