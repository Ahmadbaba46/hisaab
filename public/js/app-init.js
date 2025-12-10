/**
 * Main Application Initialization
 * Coordinates all modules and handles application flow
 */

class HisaabApp {
    constructor() {
        this.calculator = null;
        this.uiController = null;
        this.resultsRenderer = null;
        this.isLibraryLoaded = false;
    }

    async init() {
        console.log('🚀 Initializing Hisaab Web App...');

        // Show loading message
        this.showLoadingMessage();

        // Load Hisaab library
        const loaded = await this.loadLibrary();
        
        if (!loaded) {
            this.showErrorMessage('Failed to load Hisaab library. Please refresh the page.');
            return;
        }

        // Initialize modules
        this.calculator = new Calculator();
        this.uiController = new UIController();
        this.resultsRenderer = new ResultsRenderer();

        // Initialize UI
        this.uiController.init();

        // Setup event handlers
        this.setupEventHandlers();

        // Hide loading message and pre-fill demo name for quick test
        this.hideLoadingMessage();
        const demo = document.getElementById('arabicName');
        if (demo && !demo.value) demo.value = 'محمد';

        // Initialize UI enhancements
        if (typeof UIEnhancements !== 'undefined') {
            this.uiEnhancements = new UIEnhancements();
            this.uiEnhancements.init();
            window.uiEnhancements = this.uiEnhancements; // Make globally accessible
        }

        console.log('✅ Hisaab Web App initialized successfully');
    }

    async loadLibrary() {
        try {
            // Check if Hisaab is already available (loaded by bundle)
            if (typeof window.Hisaab !== 'undefined') {
                console.log('✅ Hisaab already available');
                this.isLibraryLoaded = true;
                return true;
            }

            // Check if running from file:// protocol
            if (window.location.protocol === 'file:') {
                console.warn('⚠️ Running from file:// protocol. Module loading may not work.');
                console.warn('Please use: npm run serve');
            }

            // Wait for loadHisaabLibrary to be available
            if (typeof window.loadHisaabLibrary === 'function') {
                this.isLibraryLoaded = await window.loadHisaabLibrary();
                return this.isLibraryLoaded;
            } else {
                console.error('loadHisaabLibrary function not found');
                console.error('window.Hisaab:', typeof window.Hisaab);
                return false;
            }
        } catch (error) {
            console.error('Error loading library:', error);
            return false;
        }
    }

    setupEventHandlers() {
        // Listen for calculate event
        window.addEventListener('calculate', (e) => {
            this.handleCalculation(e.detail.name);
        });

        // Listen for compatibility event
        window.addEventListener('compatibility', (e) => {
            this.handleCompatibility(e.detail.name, e.detail.partner);
        });
    }

    handleCompatibility(name, partner) {
        try {
            // Calculate base first (if not already)
            this.calculator.calculate(name);

            // Get compatibility
            const compat = this.calculator.getArabicCompatibility(partner);

            // Render main results and compatibility together
            const mainHtml = this.resultsRenderer.renderComplete(this.calculator);
            const compatHtml = this.resultsRenderer.renderCompatibility(compat);
            
            this.uiController.displayResults(mainHtml + `<div class="result-grid" style="margin-top: 20px;">${compatHtml}</div>`);
            this.uiController.hideLoading();
        } catch (error) {
            console.error('Compatibility error:', error);
            this.uiController.showError('خطأ في التوافق / ' + error.message);
            this.uiController.hideLoading();
        }
    }

    handleCalculation(name) {
        try {
            // Calculate
            this.calculator.calculate(name);

            // Render results
            const html = this.resultsRenderer.renderComplete(this.calculator);

            // Display results
            this.uiController.displayResults(html);

            // Hide loading
            this.uiController.hideLoading();

        } catch (error) {
            console.error('Calculation error:', error);
            this.uiController.showError('خطأ في الحساب / ' + error.message);
            this.uiController.hideLoading();
        }
    }

    showLoadingMessage() {
        const loading = document.getElementById('app-loading');
        if (loading) {
            loading.style.display = 'block';
        }
    }

    hideLoadingMessage() {
        const loading = document.getElementById('app-loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    showErrorMessage(message) {
        const loading = document.getElementById('app-loading');
        if (loading) {
            loading.innerHTML = `
                <div style="background: #fee2e2; color: #991b1b; padding: 20px; border-radius: 10px; text-align: center;">
                    <h3>❌ Error</h3>
                    <p>${message}</p>
                </div>
            `;
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.hisaabApp = new HisaabApp();
    window.hisaabApp.init();
});
