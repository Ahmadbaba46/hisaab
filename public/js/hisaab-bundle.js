/**
 * Hisaab Browser Bundle
 * Self-contained version for browser use
 * This includes all data and the core library
 */

(function(window) {
    'use strict';

    console.log('📦 Loading Hisaab Browser Bundle...');

    // We'll inject the actual library code here
    // For now, let's create a loader that uses fetch to load the files

    window.HisaabLoader = {
        loaded: false,
        
        async init() {
            if (this.loaded) {
                console.log('✅ Hisaab already loaded');
                return true;
            }

            try {
                // Load all data files by executing them
                await this.loadFile('../islamic_data.js');
                await this.loadFile('../lunar_mansions_data.js');
                await this.loadFile('../enhanced_islamic_data.js');
                await this.loadFile('../business_analysis_data.js');
                await this.loadFile('../advanced_numerology_data.js');
                
                // Load main library
                await this.loadFile('../index.js');
                
                // Make Hisaab available globally
                if (typeof module !== 'undefined' && module.exports) {
                    window.Hisaab = module.exports;
                }
                
                this.loaded = true;
                console.log('✅ Hisaab bundle loaded successfully');
                return true;
            } catch (error) {
                console.error('❌ Failed to load Hisaab:', error);
                return false;
            }
        },

        async loadFile(url) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.async = false;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
    };

    // Auto-initialize on load
    window.loadHisaabLibrary = () => window.HisaabLoader.init();

})(window);
