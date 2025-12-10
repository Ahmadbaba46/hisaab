/**
 * Hisaab Library Loader for Browser
 * Loads the main Hisaab library and all data files
 */

// Load the main library from parent directory
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

// Load all required files
async function loadHisaabLibrary() {
    try {
        // Load data files first
        await loadScript('../islamic_data.js');
        await loadScript('../lunar_mansions_data.js');
        await loadScript('../enhanced_islamic_data.js');
        await loadScript('../business_analysis_data.js');
        await loadScript('../advanced_numerology_data.js');
        
        // Load main library
        await loadScript('../index.js');
        
        console.log('✅ Hisaab library loaded successfully');
        return true;
    } catch (error) {
        console.error('❌ Error loading Hisaab library:', error);
        return false;
    }
}

// Export for use
window.loadHisaabLibrary = loadHisaabLibrary;
