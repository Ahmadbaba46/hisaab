/**
 * UI Enhancements Module
 * Tabs, Animations, Export functionality
 */

class UIEnhancements {
    constructor() {
        this.currentTab = 'all';
        this.exportData = null;
    }

    init() {
        this.setupTabs();
        this.setupExport();
        this.setupAnimations();
        console.log('✅ UI Enhancements initialized');
    }

    setupTabs() {
        // Create tabs container if results exist
        const resultsContainer = document.getElementById('results');
        if (!resultsContainer) return;

        // Observe results container for changes
        const observer = new MutationObserver(() => {
            if (resultsContainer.innerHTML.trim() !== '') {
                this.injectTabs();
            }
        });

        observer.observe(resultsContainer, { childList: true, subtree: true });
    }

    injectTabs() {
        const resultsContainer = document.getElementById('results');
        if (!resultsContainer || resultsContainer.querySelector('.results-tabs')) return;

        // Create tabs
        const tabsHTML = `
            <div class="results-tabs">
                <button class="tab-btn active" data-tab="all">
                    📋 All Features
                </button>
                <button class="tab-btn" data-tab="v13">
                    ✨ v1.3.0 Features
                </button>
                <button class="tab-btn" data-tab="islamic">
                    ☪️ Islamic
                </button>
                <button class="tab-btn" data-tab="astrology">
                    ⭐ Astrology
                </button>
                <button class="tab-btn" data-tab="export">
                    💾 Export
                </button>
            </div>
            <div class="tab-content active" data-content="all">
                ${resultsContainer.innerHTML}
            </div>
        `;

        resultsContainer.innerHTML = tabsHTML;

        // Add event listeners
        resultsContainer.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Organize results into tabs
        this.organizeResults();
    }

    switchTab(tab) {
        this.currentTab = tab;

        // Update active button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // Show/hide content based on tab
        const allContent = document.querySelector('[data-content="all"]');
        if (!allContent) return;

        const cards = allContent.querySelectorAll('.result-card');
        
        cards.forEach(card => {
            const cardTitle = card.querySelector('h3')?.textContent || '';
            let show = false;

            switch(tab) {
                case 'all':
                    show = true;
                    break;
                case 'v13':
                    show = cardTitle.includes('Business') || 
                           cardTitle.includes('Date') || 
                           cardTitle.includes('Advanced') || 
                           cardTitle.includes('Prayer');
                    break;
                case 'islamic':
                    show = cardTitle.includes('Islamic') || 
                           cardTitle.includes('Prayer') || 
                           cardTitle.includes('Asma') || 
                           cardTitle.includes('Quranic') ||
                           cardTitle.includes('Lunar');
                    break;
                case 'astrology':
                    show = cardTitle.includes('Astrology') || 
                           cardTitle.includes('Lunar') ||
                           cardTitle.includes('Compatibility');
                    break;
                case 'export':
                    this.showExportPanel();
                    return;
            }

            if (show) {
                // Remove fade-in first, then show, then re-add for animation
                card.classList.remove('fade-in');
                card.style.display = 'block';
                // Force reflow
                void card.offsetWidth;
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
    }

    organizeResults() {
        // Results are already organized by renderer
        // This method can be extended for future organization needs
    }

    setupExport() {
        // Export functionality will be added when tab is clicked
    }

    showExportPanel() {
        const allContent = document.querySelector('[data-content="all"]');
        if (!allContent) return;

        // Hide all cards
        allContent.querySelectorAll('.result-card').forEach(card => {
            card.style.display = 'none';
        });

        // Show export panel if not exists
        let exportPanel = allContent.querySelector('.export-panel');
        if (!exportPanel) {
            exportPanel = document.createElement('div');
            exportPanel.className = 'export-panel result-card';
            exportPanel.innerHTML = `
                <h3>💾 Export Results</h3>
                <p>Choose your export format:</p>
                <div class="export-buttons">
                    <button class="export-btn" onclick="window.uiEnhancements.exportAsText()">
                        📄 Text File
                    </button>
                    <button class="export-btn" onclick="window.uiEnhancements.exportAsJSON()">
                        📊 JSON
                    </button>
                    <button class="export-btn" onclick="window.uiEnhancements.exportAsHTML()">
                        🌐 HTML
                    </button>
                    <button class="export-btn" onclick="window.uiEnhancements.printResults()">
                        🖨️ Print / PDF
                    </button>
                    <button class="export-btn" onclick="window.uiEnhancements.copyToClipboard()">
                        📋 Copy to Clipboard
                    </button>
                </div>
                <div id="export-preview" style="margin-top: 20px;"></div>
            `;
            allContent.appendChild(exportPanel);
        }

        exportPanel.style.display = 'block';
        exportPanel.classList.add('fade-in');
    }

    exportAsText() {
        const text = this.collectResultsAsText();
        this.downloadFile(text, 'hisaab-results.txt', 'text/plain');
    }

    exportAsJSON() {
        const data = this.collectResultsAsJSON();
        this.downloadFile(JSON.stringify(data, null, 2), 'hisaab-results.json', 'application/json');
    }

    exportAsHTML() {
        const html = this.collectResultsAsHTML();
        this.downloadFile(html, 'hisaab-results.html', 'text/html');
    }

    printResults() {
        const printWindow = window.open('', '_blank');
        const html = this.collectResultsAsHTML();
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
    }

    copyToClipboard() {
        const text = this.collectResultsAsText();
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Results copied to clipboard!');
        }).catch(err => {
            alert('❌ Failed to copy: ' + err.message);
        });
    }

    collectResultsAsText() {
        let text = '='.repeat(60) + '\n';
        text += 'HISAAB - Arabic Name Analysis Results\n';
        text += '='.repeat(60) + '\n\n';

        const cards = document.querySelectorAll('.result-card');
        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent || '';
            const content = card.innerText;
            text += title + '\n';
            text += '-'.repeat(title.length) + '\n';
            text += content + '\n\n';
        });

        text += '='.repeat(60) + '\n';
        text += 'Generated by Hisaab v1.3.0\n';
        text += new Date().toLocaleString() + '\n';
        
        return text;
    }

    collectResultsAsJSON() {
        const data = {
            timestamp: new Date().toISOString(),
            version: '1.3.0',
            results: []
        };

        const cards = document.querySelectorAll('.result-card');
        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent || '';
            const value = card.querySelector('.result-value')?.textContent || '';
            const content = card.innerText;

            data.results.push({
                title: title,
                value: value,
                content: content
            });
        });

        return data;
    }

    collectResultsAsHTML() {
        const content = document.querySelector('[data-content="all"]')?.innerHTML || '';
        return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hisaab Results</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .result-card {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .result-value {
            font-size: 48px;
            font-weight: bold;
            margin: 20px 0;
        }
        h3 {
            color: #333;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        .export-panel { display: none; }
        @media print {
            body { background: white; }
            .result-card { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <h1>Hisaab - Arabic Name Analysis Results</h1>
    <p>Generated: ${new Date().toLocaleString()}</p>
    ${content}
    <footer style="text-align: center; margin-top: 40px; color: #666;">
        <p>Generated by Hisaab v1.3.0 | https://github.com/Ahmadbaba46/hisaab</p>
    </footer>
</body>
</html>
        `;
    }

    downloadFile(content, filename, type) {
        const blob = new Blob([content], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    setupAnimations() {
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll reveal animations
        this.setupScrollReveal();
    }

    setupScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe feature cards
        document.querySelectorAll('.feature-card, .result-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Export globally
window.UIEnhancements = UIEnhancements;
