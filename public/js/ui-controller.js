/**
 * UI Controller Module
 * Manages all UI interactions and updates
 */

class UIController {
    constructor() {
        this.elements = {
            nameInput: null,
            calculateBtn: null,
            resultsContainer: null,
            errorContainer: null,
            loadingIndicator: null
        };
    }

    init() {
        // Get DOM elements
        this.elements.nameInput = document.getElementById('arabicName');
        this.elements.calculateBtn = document.getElementById('calculateBtn');
        this.elements.resultsContainer = document.getElementById('results');
        this.elements.errorContainer = document.getElementById('errorMessage');
        // Also capture optional partner elements BEFORE wiring listeners
        this.elements.partnerInput = document.getElementById('partnerName');
        this.elements.compatibilityBtn = document.getElementById('compatibilityBtn');

        // Setup event listeners (now elements are available)
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Calculate button click
        if (this.elements.calculateBtn) {
            this.elements.calculateBtn.addEventListener('click', () => {
                this.handleCalculate();
            });
        }

        // Enter key press
        if (this.elements.nameInput) {
            this.elements.nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleCalculate();
                }
            });

            // Clear error on input
            this.elements.nameInput.addEventListener('input', () => {
                this.hideError();
            });
        }

        // Compatibility button
        if (this.elements.compatibilityBtn) {
            this.elements.compatibilityBtn.addEventListener('click', () => {
                const name = this.elements.nameInput.value.trim();
                const partner = this.elements.partnerInput?.value.trim();
                if (!name) {
                    this.showError('ادخل اسمك أولاً / Please enter your name first');
                    return;
                }
                if (!partner) {
                    this.showError('ادخل اسم الشريك / Please enter partner name');
                    return;
                }
                this.hideError();
                this.showLoading();
                try {
                    const event = new CustomEvent('compatibility', { detail: { name, partner } });
                    window.dispatchEvent(event);
                } catch (error) {
                    this.showError('Error: ' + error.message);
                    this.hideLoading();
                }
            });
        }

        // Smooth scrolling for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    handleCalculate() {
        const name = this.elements.nameInput.value.trim();
        
        if (!name) {
            this.showError('الرجاء إدخال اسم عربي / Please enter an Arabic name');
            return;
        }

        this.hideError();
        this.showLoading();

        try {
            // Trigger custom event for calculation
            const event = new CustomEvent('calculate', { detail: { name } });
            window.dispatchEvent(event);
        } catch (error) {
            this.showError('Error: ' + error.message);
            this.hideLoading();
        }
    }

    showLoading() {
        if (this.elements.calculateBtn) {
            this.elements.calculateBtn.disabled = true;
            this.elements.calculateBtn.textContent = 'جاري الحساب... / Calculating...';
        }
    }

    hideLoading() {
        if (this.elements.calculateBtn) {
            this.elements.calculateBtn.disabled = false;
            this.elements.calculateBtn.textContent = 'احسب / Calculate';
        }
    }

    showError(message) {
        if (this.elements.errorContainer) {
            this.elements.errorContainer.textContent = message;
            this.elements.errorContainer.style.display = 'block';
        }
    }

    hideError() {
        if (this.elements.errorContainer) {
            this.elements.errorContainer.style.display = 'none';
        }
    }

    displayResults(html) {
        if (this.elements.resultsContainer) {
            this.elements.resultsContainer.innerHTML = html;
            this.elements.resultsContainer.style.display = 'block';
            
            // Scroll to results
            setTimeout(() => {
                this.elements.resultsContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }

    clearResults() {
        if (this.elements.resultsContainer) {
            this.elements.resultsContainer.innerHTML = '';
            this.elements.resultsContainer.style.display = 'none';
        }
    }
}

// Export
window.UIController = UIController;
