/**
 * Hisaab v1.4.0 Features Handler
 * Handles Hijri Calendar, AI Recommendations, and Regional Analysis
 */

const HisaabV14 = {
    initialized: false,

    init: function() {
        if (this.initialized) return;
        this.initialized = true;
        
        console.log(' Initializing Hisaab v1.4.0 features...');
        
        this.initHijriCalendar();
        this.initAIRecommendations();
        this.initRegionalAnalysis();
        
        console.log('✅ Hisaab v1.4.0 features initialized');
    },

    // ============================================
    // Hijri Calendar
    // ============================================
    initHijriCalendar: function() {
        this.updateHijriDisplay();
        
        // Update every hour
        setInterval(() => {
            this.updateHijriDisplay();
        }, 3600000);
    },

    updateHijriDisplay: function() {
        if (typeof Hisaab === 'undefined') return;
        
        try {
            const hijri = Hisaab.getCurrentHijri();
            
            document.getElementById('hijriDay').textContent = hijri.day;
            document.getElementById('hijriMonth').textContent = hijri.monthName;
            document.getElementById('hijriYear').textContent = hijri.year;
            
            const statusEl = document.getElementById('hijriStatus');
            if (hijri.isHolyMonth) {
                statusEl.innerHTML = '🕌 شهر حرام - Holy Month';
            } else {
                statusEl.innerHTML = '';
            }
            
            // Show upcoming blessed days
            const upcoming = Hisaab.getUpcomingBlessedDay();
            const blessedEl = document.getElementById('hijriBlessed');
            if (upcoming) {
                blessedEl.innerHTML = `🌙 Next blessed day: ${upcoming.day} ${upcoming.monthName}`;
            } else {
                const monthInfo = Hisaab.getMonthlyRecommendations(hijri.month);
                if (monthInfo && monthInfo.blessedDays && monthInfo.blessedDays.length > 0) {
                    blessedEl.innerHTML = `🌙 Blessed days this month: ${monthInfo.blessedDays.join(', ')}`;
                } else {
                    blessedEl.innerHTML = '';
                }
            }
        } catch (e) {
            console.error('Error updating Hijri display:', e);
        }
    },

    // ============================================
    // AI Recommendations
    // ============================================
    initAIRecommendations: function() {
        const btn = document.getElementById('aiRecommendBtn');
        if (btn) {
            btn.addEventListener('click', () => this.getAIRecommendations());
        }
    },

    getAIRecommendations: function() {
        if (typeof Hisaab === 'undefined') {
            alert('Hisaab library not loaded');
            return;
        }
        
        const purpose = document.getElementById('aiPurpose').value || null;
        const digitRoot = document.getElementById('aiDigitRoot').value;
        const industry = document.getElementById('aiIndustry').value || null;
        
        const criteria = {
            maxResults: 8
        };
        
        if (purpose) criteria.purpose = purpose;
        if (digitRoot) criteria.desiredDigitRoot = parseInt(digitRoot);
        if (industry) criteria.industry = industry;
        
        try {
            const result = Hisaab.getSmartRecommendations(criteria);
            this.displayAIResults(result);
        } catch (e) {
            console.error('Error getting AI recommendations:', e);
            document.getElementById('aiResults').innerHTML = '<p class="error">Error getting recommendations</p>';
        }
        
        document.getElementById('aiResults').style.display = 'block';
    },

    displayAIResults: function(result) {
        const container = document.getElementById('aiResults');
        
        if (!result.recommendations || result.recommendations.length === 0) {
            container.innerHTML = '<p>No recommendations found for the selected criteria.</p>';
            return;
        }
        
        let html = '<div class="ai-results">';
        
        result.recommendations.forEach((rec, index) => {
            const reasons = rec.reasons ? rec.reasons.slice(0, 2).join('<br>') : '';
            
            html += `
                <div class="ai-result-item fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="name">${rec.name}</div>
                    <div class="value">Value: ${rec.value}</div>
                    <div class="score">Score: ${rec.score}/100</div>
                    <div class="element">Element: ${rec.element}</div>
                    <div class="reasons">${reasons}</div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },

    // ============================================
    // Regional Analysis
    // ============================================
    initRegionalAnalysis: function() {
        const btn = document.getElementById('regionalBtn');
        if (btn) {
            btn.addEventListener('click', () => this.getRegionalAnalysis());
        }
    },

    getRegionalAnalysis: function() {
        if (typeof Hisaab === 'undefined') {
            alert('Hisaab library not loaded');
            return;
        }
        
        const nameInput = document.getElementById('arabicName');
        const name = nameInput ? nameInput.value.trim() : '';
        
        if (!name) {
            alert('Please enter an Arabic name first');
            return;
        }
        
        const region = document.getElementById('regionalSelect').value;
        
        try {
            const hisaab = new Hisaab(name);
            
            // Get comparison across all regions
            const comparison = hisaab.compareRegionalVariants();
            const specific = hisaab.getRegionalPattern(region);
            
            this.displayRegionalResults(comparison, specific, region);
        } catch (e) {
            console.error('Error getting regional analysis:', e);
            document.getElementById('regionalResults').innerHTML = '<p class="error">Error analyzing region</p>';
        }
        
        document.getElementById('regionalResults').style.display = 'block';
    },

    displayRegionalResults: function(comparison, specific, selectedRegion) {
        const container = document.getElementById('regionalResults');
        
        let html = '<h3 style="text-align: center; margin-bottom: 20px;">Regional Compatibility</h3>';
        
        // Show comparison across all regions
        html += '<div class="regional-compatibility">';
        
        comparison.comparisons.forEach(c => {
            const isSelected = c.region === selectedRegion;
            const isFavored = c.isFavored;
            const className = isFavored ? 'favored' : (c.score < 40 ? 'avoided' : '');
            
            html += `
                <div class="regional-compat-item ${className} fade-in" style="${isSelected ? 'border-width: 3px;' : ''}">
                    <div class="region-name">${c.regionArabic}</div>
                    <div class="score">${c.score}/100</div>
                    ${isSelected ? '<div style="font-size: 0.8em; color: #666;">Selected</div>' : ''}
                </div>
            `;
        });
        
        html += '</div>';
        
        // Show specific region details
        if (specific && specific.region) {
            html += `
                <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 10px;">
                    <h4>${specific.region.name} (${specific.region.arabic})</h4>
                    <p><strong>Countries:</strong> ${specific.region.countries.join(', ')}</p>
                    <p><strong>Compatibility:</strong> ${specific.regionalCompatibility.score}/100</p>
                    <p><strong>Status:</strong> ${specific.regionalCompatibility.isFavored ? '✅ Favored' : 'Standard'}</p>
                </div>
            `;
        }
        
        container.innerHTML = html;
    },

    // ============================================
    // Export Functions (for results renderer)
    // ============================================
    getHijriInfoForName: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.getTimingRecommendations();
        } catch (e) {
            return null;
        }
    },

    getHistoricalInfoForName: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.getHistoricalContext();
        } catch (e) {
            return null;
        }
    },

    getSahabaInfoForName: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.getSahabaInfo();
        } catch (e) {
            return null;
        }
    },

    exportToJSON: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.exportAnalysis('json');
        } catch (e) {
            return null;
        }
    },

    exportToHTML: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.exportAnalysis('html');
        } catch (e) {
            return null;
        }
    },

    exportToText: function(name) {
        if (typeof Hisaab === 'undefined') return null;
        
        try {
            const hisaab = new Hisaab(name);
            return hisaab.exportAnalysis('text');
        } catch (e) {
            return null;
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Hisaab library to load
    const checkHisaab = setInterval(function() {
        if (typeof Hisaab !== 'undefined') {
            clearInterval(checkHisaab);
            HisaabV14.init();
        }
    }, 100);
    
    // Timeout after 10 seconds
    setTimeout(function() {
        clearInterval(checkHisaab);
    }, 10000);
});