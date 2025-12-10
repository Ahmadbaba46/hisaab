/**
 * Calculator Module
 * Handles name calculation functionality
 */

class Calculator {
    constructor() {
        this.currentResult = null;
    }

    calculate(arabicName) {
        if (!arabicName || !arabicName.trim()) {
            throw new Error('Please enter an Arabic name');
        }

        try {
            const hisaab = new Hisaab(arabicName);
            this.currentResult = {
                name: hisaab.getName(),
                value: hisaab.getValue(),
                digitRoot: hisaab.getDigitRoot(),
                breakdown: hisaab.getBreakdown(),
                hisaab: hisaab
            };
            return this.currentResult;
        } catch (error) {
            console.error('Calculation error:', error);
            throw new Error('Error calculating name value: ' + error.message);
        }
    }

    getBasicInfo() {
        if (!this.currentResult) return null;
        
        return {
            name: this.currentResult.name,
            value: this.currentResult.value,
            digitRoot: this.currentResult.digitRoot,
            breakdown: this.currentResult.breakdown
        };
    }

    getBusinessAnalysis() {
        if (!this.currentResult) return null;
        return this.currentResult.hisaab.getBusinessAnalysis();
    }

    getLifePathCompatibility(day, month, year) {
        if (!this.currentResult) return null;
        return this.currentResult.hisaab.getLifePathCompatibility(day, month, year);
    }

    getAdvancedNumerology() {
        if (!this.currentResult) return null;
        return this.currentResult.hisaab.getAdvancedNumerology();
    }

    getPrayerTimeCorrelations() {
        if (!this.currentResult) return null;
        return this.currentResult.hisaab.getPrayerTimeCorrelations();
    }

    getLunarMansion() {
        if (!this.currentResult) return null;
        if (typeof this.currentResult.hisaab.getLunarMansion !== 'function') return null;
        try {
            return this.currentResult.hisaab.getLunarMansion();
        } catch (e) {
            console.warn('Lunar mansion error:', e);
            return null;
        }
    }

    getAstrology() {
        if (!this.currentResult) return null;
        try {
            const h = this.currentResult.hisaab;
            return {
                elemental: typeof h.getElementalAnalysis === 'function' ? h.getElementalAnalysis() : null,
                planetary: typeof h.getPlanetaryInfluence === 'function' ? h.getPlanetaryInfluence() : null,
                zodiac: typeof h.getZodiacSign === 'function' ? h.getZodiacSign() : null
            };
        } catch (e) {
            console.warn('Astrology error:', e);
            return null;
        }
    }

    getAsmaUlHusnaMatch() {
        if (!this.currentResult) return null;
        if (typeof this.currentResult.hisaab.getAsmaUlHusnaMatch !== 'function') return null;
        try {
            return this.currentResult.hisaab.getAsmaUlHusnaMatch();
        } catch (e) {
            return null;
        }
    }

    getQuranicConnection() {
        if (!this.currentResult) return null;
        if (typeof this.currentResult.hisaab.getQuranicConnection !== 'function') return null;
        try {
            return this.currentResult.hisaab.getQuranicConnection();
        } catch (e) {
            return null;
        }
    }

    getExtendedQuranicConnections() {
        if (!this.currentResult) return null;
        if (typeof this.currentResult.hisaab.getExtendedQuranicConnections !== 'function') return null;
        try {
            return this.currentResult.hisaab.getExtendedQuranicConnections();
        } catch (e) {
            return null;
        }
    }

    getIslamicAnalysis() {
        if (!this.currentResult) return null;
        return this.currentResult.hisaab.getIslamicAnalysis();
    }

    getArabicCompatibility(partnerName) {
        if (!this.currentResult) return null;
        if (!partnerName || !partnerName.trim()) return null;
        try {
            const partner = new Hisaab(partnerName.trim());
            // Use Arabic (حساب الشريك) compatibility from core
            return this.currentResult.hisaab.getArabicCompatibility(partner);
        } catch (e) {
            console.warn('Compatibility error:', e);
            return null;
        }
    }
}

// Export
window.Calculator = Calculator;
