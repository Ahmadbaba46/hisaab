/**
 * Data Loader - Loads all data files and exposes them globally
 */

(function(window) {
    'use strict';

    window.DataLoader = {
        loaded: false,

        async loadDataFile(url, globalName) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.async = false;
                
                script.onload = () => {
                    // After loading, module.exports contains the data
                    if (typeof module !== 'undefined' && module.exports) {
                        window[globalName] = module.exports;
                        // Reset module.exports for next file
                        module.exports = {};
                        console.log('✅ Loaded data:', globalName);
                    }
                    resolve();
                };
                
                script.onerror = () => {
                    console.error('❌ Failed to load:', url);
                    reject(new Error('Failed to load ' + url));
                };
                
                document.head.appendChild(script);
            });
        },

        async loadAllData() {
            if (this.loaded) {
                console.log('Data already loaded');
                return true;
            }

            try {
                console.log('📦 Loading data files...');

                // Load each data file and store in global scope
                await this.loadDataFile('../islamic_data.js', 'IslamicData');
                await this.loadDataFile('../lunar_mansions_data.js', 'LunarMansionsData');
                await this.loadDataFile('../enhanced_islamic_data.js', 'EnhancedIslamicData');
                await this.loadDataFile('../business_analysis_data.js', 'BusinessAnalysisData');
                await this.loadDataFile('../advanced_numerology_data.js', 'AdvancedNumerologyData');

                this.loaded = true;
                console.log('✅ All data files loaded');
                return true;
            } catch (error) {
                console.error('❌ Error loading data:', error);
                return false;
            }
        }
    };

})(window);
