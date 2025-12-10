/**
 * Library Loader - Loads the main Hisaab library
 */

(function(window) {
    'use strict';

    window.LibraryLoader = {
        loaded: false,

        async loadMainLibrary() {
            if (this.loaded) {
                console.log('Library already loaded');
                return true;
            }

            return new Promise((resolve, reject) => {
                console.log('📚 Loading main Hisaab library...');

                const script = document.createElement('script');
                script.src = '../index.js';
                script.async = false;

                script.onload = () => {
                    // After loading, module.exports contains the Hisaab class
                    if (typeof module !== 'undefined' && module.exports) {
                        window.Hisaab = module.exports;
                        this.loaded = true;
                        console.log('✅ Hisaab library loaded successfully');
                        console.log('Hisaab class available:', typeof window.Hisaab);
                        resolve(true);
                    } else {
                        console.error('❌ module.exports not found');
                        reject(new Error('Failed to load Hisaab class'));
                    }
                };

                script.onerror = () => {
                    console.error('❌ Failed to load main library');
                    reject(new Error('Failed to load index.js'));
                };

                document.head.appendChild(script);
            });
        }
    };

    // Main loader function
    window.loadHisaabLibrary = async function() {
        try {
            console.log('🚀 Starting Hisaab library initialization...');

            // Step 1: Load data files
            const dataLoaded = await window.DataLoader.loadAllData();
            if (!dataLoaded) {
                throw new Error('Failed to load data files');
            }

            // Step 2: Load main library
            const libraryLoaded = await window.LibraryLoader.loadMainLibrary();
            if (!libraryLoaded) {
                throw new Error('Failed to load main library');
            }

            // Step 3: Verify Hisaab is available
            if (typeof window.Hisaab === 'undefined') {
                throw new Error('Hisaab class not available after loading');
            }

            console.log('✅ Hisaab library fully initialized!');
            console.log('🎉 Ready to calculate Arabic names');
            return true;

        } catch (error) {
            console.error('❌ Failed to load Hisaab library:', error);
            return false;
        }
    };

})(window);
