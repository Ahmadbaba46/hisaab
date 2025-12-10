/**
 * Module Polyfill for Browser
 * Allows Node.js modules to work in browser
 */

(function(window) {
    'use strict';

    // Create a module system for browser
    window.__modules = {};
    window.__moduleCache = {};

    // Create module object
    if (typeof window.module === 'undefined') {
        window.module = {
            exports: {}
        };
    }

    // Create require function
    if (typeof window.require === 'undefined') {
        window.require = function(modulePath) {
            // Return cached module if exists
            if (window.__moduleCache[modulePath]) {
                return window.__moduleCache[modulePath];
            }

            // Map module paths to global objects
            const moduleMap = {
                './islamic_data.js': 'IslamicData',
                './lunar_mansions_data.js': 'LunarMansionsData',
                './enhanced_islamic_data.js': 'EnhancedIslamicData',
                './business_analysis_data.js': 'BusinessAnalysisData',
                './advanced_numerology_data.js': 'AdvancedNumerologyData'
            };

            const globalName = moduleMap[modulePath];
            if (globalName && window[globalName]) {
                window.__moduleCache[modulePath] = window[globalName];
                return window[globalName];
            }

            console.warn('Module not found:', modulePath);
            return {};
        };
    }

    console.log('✅ Module polyfill loaded');

})(window);
