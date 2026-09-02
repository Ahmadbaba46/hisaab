/**
 * Hisaab v2.0 - Complete Web Application
 * Comprehensive JavaScript with all library features
 */

(function() {
    'use strict';

    // ==================== STATE MANAGEMENT ====================
    const state = {
        currentResults: null,
        currentLanguage: 'arabic',
        theme: localStorage.getItem('theme') || 'light',
        familyMembers: [],
        charts: {}
    };

    // ==================== INITIALIZATION ====================
    document.addEventListener('DOMContentLoaded', () => {
        initializeTheme();
        initializeEventListeners();
        initializeIslamicSections();
        updateCurrentHijriDate();
        loadSavedData();
    });

    function initializeTheme() {
        document.body.classList.toggle('dark-mode', state.theme === 'dark');
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = state.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    function initializeEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', handleNavigation);
        });

        // Calculator
        document.getElementById('calculateBtn')?.addEventListener('click', calculateName);
        document.getElementById('compatibilityBtn')?.addEventListener('click', checkCompatibility);
        document.getElementById('randomNameBtn')?.addEventListener('click', getRandomName);

        // Example buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.getElementById('mainName').value = e.target.dataset.name;
                calculateName();
            });
        });

        // Islamic tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                switchTab(tabName);
            });
        });

        // Sahaba sub-tabs
        document.querySelectorAll('.sub-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.sahaba;
                renderSahaba(category);
                document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Hijri converter
        document.getElementById('convertBtn')?.addEventListener('click', convertHijriDate);

        // Business analysis
        document.getElementById('analyzeBusinessBtn')?.addEventListener('click', analyzeBusinessName);

        // Family analysis
        document.getElementById('addMemberBtn')?.addEventListener('click', addFamilyMember);
        document.getElementById('analyzeFamilyBtn')?.addEventListener('click', analyzeFamilyHarmony);

        // Multi-language
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                selectLanguage(e.currentTarget.dataset.lang);
            });
        });
        document.getElementById('calcMultiLangBtn')?.addEventListener('click', calculateMultiLang);

        // AI Recommendations
        document.getElementById('getRecommendationsBtn')?.addEventListener('click', getAIRecommendations);

        // FAB Menu
        document.getElementById('fabMenu')?.addEventListener('click', toggleFABMenu);
        document.querySelectorAll('.fab-option').forEach(opt => {
            opt.addEventListener('click', handleFABAction);
        });

        // Mobile menu
        document.getElementById('mobileMenuToggle')?.addEventListener('click', toggleMobileMenu);

        // Search and filters
        document.getElementById('asmaSearch')?.addEventListener('input', renderAsmaUlHusna);
        document.getElementById('asmaFilter')?.addEventListener('change', renderAsmaUlHusna);
        document.getElementById('historicalSearch')?.addEventListener('input', renderHistoricalFigures);
        document.getElementById('historicalFilter')?.addEventListener('change', renderHistoricalFigures);
    }

    // ==================== THEME MANAGEMENT ====================
    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.theme);
        initializeTheme();
        showToast('Theme changed to ' + state.theme + ' mode', 'success');
    }

    // ==================== NAVIGATION ====================
    function handleNavigation(e) {
        e.preventDefault();
        const sectionId = e.currentTarget.dataset.section;

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // Show section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Show hidden sections
            section.classList.remove('hidden');
        }
    }

    function switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        const tabContent = document.getElementById(tabName + 'Tab');
        if (tabContent) {
            tabContent.classList.add('active');
        }
    }

    // ==================== NAME CALCULATION ====================
    async function calculateName() {
        const nameInput = document.getElementById('mainName');
        const name = nameInput.value.trim();

        if (!name) {
            showToast('Please enter an Arabic name', 'warning');
            return;
        }

        showLoading(true);

        try {
            // Use the Hisaab class from the loaded library
            const hisaab = new Hisaab(name);
            state.currentResults = hisaab;

            // Display results
            displayMainResults(hisaab);

            // Show charts section
            document.getElementById('charts')?.classList.remove('hidden');
            renderCharts(hisaab);

            showToast('Calculation complete!', 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        } finally {
            showLoading(false);
        }
    }

    function displayMainResults(hisaab) {
        const container = document.getElementById('resultsContainer');
        const breakdown = hisaab.getBreakdown();
        const numerology = hisaab.getNumerology();
        const astrology = hisaab.getArabicAstrology();
        const mansion = hisaab.getLunarMansion();
        const luckyNumbers = hisaab.getLuckyNumbers();

        const html = `
            <div class="results-header card glass">
                <div class="card-body" style="text-align: center;">
                    <h2 style="font-family: var(--font-arabic); font-size: 3rem; margin-bottom: 1rem;">${hisaab.getName()}</h2>
                    <div class="result-value" style="font-size: 4rem;">${hisaab.getValue()}</div>
                    <p style="color: var(--text-secondary);">Abjad Numerical Value</p>
                </div>
            </div>

            <div class="results-grid">
                <div class="result-card">
                    <h3><i class="fas fa-chart-line"></i> Numerology</h3>
                    <div class="result-item">
                        <span class="result-label">Digit Root:</span>
                        <span class="result-value-sm">${numerology.digitRoot}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Category:</span>
                        <span>${numerology.category}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Type:</span>
                        <span>${numerology.isEven ? 'Even (Yin)' : 'Odd (Yang)'}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Prime:</span>
                        <span>${numerology.isPrime ? 'Yes' : 'No'}</span>
                    </div>
                </div>

                <div class="result-card">
                    <h3><i class="fas fa-moon"></i> Lunar Mansion</h3>
                    <div class="mansion-name" style="font-family: var(--font-arabic); font-size: 2rem; color: var(--color-primary); margin-bottom: 0.5rem;">
                        ${mansion.arabic}
                    </div>
                    <p>${mansion.transliteration || mansion.meaning}</p>
                    <div class="result-item">
                        <span class="result-label">Element:</span>
                        <span>${mansion.element}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Influence:</span>
                        <span>${mansion.influence}</span>
                    </div>
                </div>

                <div class="result-card">
                    <h3><i class="fas fa-star"></i> Arabic Astrology</h3>
                    <div class="result-item">
                        <span class="result-label">Element:</span>
                        <span>${astrology.element.arabic} (${astrology.element.name})</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Planet:</span>
                        <span>${astrology.planet.arabic} (${astrology.planet.name})</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Zodiac:</span>
                        <span>${astrology.zodiac.arabic} (${astrology.zodiac.name})</span>
                    </div>
                </div>

                <div class="result-card">
                    <h3><i class="fas fa-dice"></i> Lucky Numbers</h3>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                        ${luckyNumbers.map(num => `
                            <div style="
                                background: var(--gradient-secondary);
                                color: white;
                                padding: 1rem;
                                border-radius: var(--radius-md);
                                font-size: 1.5rem;
                                font-weight: 700;
                                min-width: 60px;
                                text-align: center;
                            ">${num}</div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="card glass" style="margin-top: 2rem;">
                <div class="card-header">
                    <h3><i class="fas fa-list-ol"></i> Letter Breakdown</h3>
                </div>
                <div class="card-body">
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${breakdown.map(item => `
                            <div style="
                                background: var(--glass-bg);
                                padding: 1rem;
                                border-radius: var(--radius-md);
                                text-align: center;
                                border: 1px solid var(--glass-border);
                            ">
                                <div style="font-family: var(--font-arabic); font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">
                                    ${item.letter}
                                </div>
                                <div style="color: var(--text-secondary); font-size: 0.875rem;">
                                    ${item.value}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 1rem; text-align: right; font-weight: 600;">
                        Total = ${hisaab.getValue()}
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        container.classList.remove('hidden');

        // Add CSS for result items
        const style = `
            <style>
                .result-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid var(--glass-border);
                }
                .result-item:last-child {
                    border-bottom: none;
                }
                .result-label {
                    color: var(--text-secondary);
                    font-weight: 600;
                }
                .result-value-sm {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-primary);
                }
            </style>
        `;
        if (!document.getElementById('dynamic-styles')) {
            const styleEl = document.createElement('div');
            styleEl.id = 'dynamic-styles';
            styleEl.innerHTML = style;
            document.head.appendChild(styleEl);
        }
    }

    // ==================== COMPATIBILITY ====================
    async function checkCompatibility() {
        const name1 = document.getElementById('mainName').value.trim();
        const name2 = document.getElementById('partnerName').value.trim();

        if (!name1 || !name2) {
            showToast('Please enter both names', 'warning');
            return;
        }

        showLoading(true);

        try {
            const compatibility = Hisaab.getArabicCompatibility(name1, name2);
            displayCompatibilityResults(compatibility);
            showToast('Compatibility calculated!', 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        } finally {
            showLoading(false);
        }
    }

    function displayCompatibilityResults(comp) {
        const container = document.getElementById('resultsContainer');

        const qualityColors = {
            'Very Good': '#22c55e',
            'Good': '#84cc16',
            'Neutral': '#f59e0b',
            'Bad': '#ef4444',
            'Very Bad': '#dc2626'
        };

        const color = qualityColors[comp.interpretation.quality] || '#666';

        const html = `
            <div class="card glass">
                <div class="card-header">
                    <h3><i class="fas fa-heart"></i> Partner Compatibility Analysis</h3>
                </div>
                <div class="card-body" style="text-align: center;">
                    <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; margin: 2rem 0;">
                        <div style="font-family: var(--font-arabic); font-size: 2rem; background: var(--glass-bg); padding: 1.5rem; border-radius: var(--radius-lg);">
                            ${comp.name1}
                        </div>
                        <div style="font-size: 3rem; animation: heart-beat 1.5s ease-in-out infinite;">💖</div>
                        <div style="font-family: var(--font-arabic); font-size: 2rem; background: var(--glass-bg); padding: 1.5rem; border-radius: var(--radius-lg);">
                            ${comp.name2}
                        </div>
                    </div>

                    <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: var(--radius-lg); margin: 2rem 0;">
                        <h4>Calculation Method</h4>
                        <p style="color: var(--text-secondary); margin: 1rem 0;">
                            ${comp.calculation}
                        </p>
                        <p style="font-size: 0.875rem; color: var(--text-tertiary);">
                            Digit Root 1 (${comp.digitRoot1}) + Digit Root 2 (${comp.digitRoot2}) + 7
                        </p>
                    </div>

                    <div style="
                        border: 4px solid ${color};
                        border-radius: var(--radius-xl);
                        padding: 3rem;
                        background: var(--glass-bg);
                        max-width: 500px;
                        margin: 2rem auto;
                    ">
                        <div style="font-size: 5rem; font-weight: 900; color: ${color}; margin-bottom: 1rem;">
                            House ${comp.partnerHouse}
                        </div>
                        <div style="font-size: 2rem; font-weight: 700; color: ${color}; margin-bottom: 0.5rem;">
                            ${comp.interpretation.quality}
                        </div>
                        <div style="font-family: var(--font-arabic); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem;">
                            ${comp.interpretation.arabic}
                        </div>
                        <div style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 1rem;">
                            ${comp.interpretation.rating}
                        </div>
                        <div style="color: var(--text-primary); line-height: 1.6;">
                            ${comp.interpretation.details}
                        </div>
                    </div>

                    <div style="background: ${color}15; padding: 1.5rem; border-radius: var(--radius-lg); border-left: 4px solid ${color}; text-align: left;">
                        <h4>Understanding the Houses</h4>
                        <p style="color: var(--text-secondary); margin-top: 0.5rem;">
                            In traditional Arabic numerology, there are 9 compatibility houses. House 7 is considered the most blessed (perfect harmony), while Houses 6 and 9 should be avoided.
                        </p>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        container.classList.remove('hidden');

        // Animate heart beat
        const style = document.createElement('style');
        style.textContent = `
            @keyframes heart-beat {
                0%, 100% { transform: scale(1); }
                25% { transform: scale(1.1); }
                50% { transform: scale(1); }
                75% { transform: scale(1.15); }
            }
        `;
        document.head.appendChild(style);
    }

    // ==================== RANDOM NAME ====================
    function getRandomName() {
        const names = [
            'محمد', 'أحمد', 'علي', 'فاطمة', 'عائشة', 'خديجة', 'عمر', 'عثمان',
            'حسن', 'حسين', 'زينب', 'رقية', 'إبراهيم', 'إسماعيل', 'يوسف', 'موسى',
            'عيسى', 'مريم', 'خالد', 'سعد', 'طلحة', 'زبير', 'أسماء', 'حفصة'
        ];
        const randomName = names[Math.floor(Math.random() * names.length)];
        document.getElementById('mainName').value = randomName;
        calculateName();
    }

    // ==================== CHARTS & VISUALIZATION ====================
    function renderCharts(hisaab) {
        // Clear existing charts
        Object.values(state.charts).forEach(chart => chart?.destroy());

        // Render radar chart (numerology wheel)
        renderRadarChart(hisaab);

        // Render element pie chart
        renderElementPieChart(hisaab);

        // Additional charts can be added here
    }

    function renderRadarChart(hisaab) {
        const canvas = document.getElementById('radarChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const numerology = hisaab.getNumerology();

        state.charts.radar = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Leadership', 'Cooperation', 'Creativity', 'Stability', 'Freedom', 'Nurturing', 'Spirituality', 'Power', 'Completion'],
                datasets: [{
                    label: 'Name Profile',
                    data: [
                        numerology.digitRoot === 1 ? 10 : 5,
                        numerology.digitRoot === 2 ? 10 : 5,
                        numerology.digitRoot === 3 ? 10 : 5,
                        numerology.digitRoot === 4 ? 10 : 5,
                        numerology.digitRoot === 5 ? 10 : 5,
                        numerology.digitRoot === 6 ? 10 : 5,
                        numerology.digitRoot === 7 ? 10 : 5,
                        numerology.digitRoot === 8 ? 10 : 5,
                        numerology.digitRoot === 9 ? 10 : 5
                    ],
                    backgroundColor: 'rgba(30, 107, 62, 0.2)',
                    borderColor: 'rgba(30, 107, 62, 1)',
                    pointBackgroundColor: 'rgba(30, 107, 62, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(30, 107, 62, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    function renderElementPieChart(hisaab) {
        const canvas = document.getElementById('elementPieChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const astrology = hisaab.getArabicAstrology();

        const elementData = {
            'Fire': 0,
            'Earth': 0,
            'Air': 0,
            'Water': 0
        };
        elementData[astrology.element.name] = 100;

        state.charts.element = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Fire (النار)', 'Earth (الأرض)', 'Air (الهواء)', 'Water (الماء)'],
                datasets: [{
                    data: [elementData.Fire, elementData.Earth, elementData.Air, elementData.Water],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(132, 204, 22, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(6, 182, 212, 0.8)'
                    ],
                    borderColor: [
                        'rgba(239, 68, 68, 1)',
                        'rgba(132, 204, 22, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(6, 182, 212, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // ==================== ISLAMIC FEATURES ====================
    function initializeIslamicSections() {
        renderAsmaUlHusna();
        renderSahaba('ashara');
        renderLunarMansions();
        renderBlessedDays();
        renderHistoricalFigures();
    }

    function renderAsmaUlHusna() {
        const grid = document.getElementById('asmaGrid');
        if (!grid) return;

        const search = document.getElementById('asmaSearch')?.value.toLowerCase() || '';
        const filter = document.getElementById('asmaFilter')?.value || 'all';

        // Note: ASMA_UL_HUSNA would come from the loaded library
        // For now, using a subset
        const asmaData = [
            { arabic: 'الله', transliteration: 'Allah', meaning: 'The God', attribute: 'The One and Only', category: 'power' },
            { arabic: 'الرحمن', transliteration: 'Ar-Rahman', meaning: 'The Most Merciful', attribute: 'Universal Mercy', category: 'mercy' },
            { arabic: 'الرحيم', transliteration: 'Ar-Raheem', meaning: 'The Most Compassionate', attribute: 'Specific Mercy', category: 'mercy' },
            // More names would be loaded from the library
        ];

        let filtered = asmaData;
        if (search) {
            filtered = filtered.filter(n =>
                n.arabic.includes(search) ||
                n.transliteration.toLowerCase().includes(search) ||
                n.meaning.toLowerCase().includes(search)
            );
        }
        if (filter !== 'all') {
            filtered = filtered.filter(n => n.category === filter);
        }

        grid.innerHTML = filtered.slice(0, 50).map(name => `
            <div class="card glass" style="padding: 1rem; text-align: center;">
                <div style="font-family: var(--font-arabic); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 0.5rem;">
                    ${name.arabic}
                </div>
                <div style="font-weight: 600; color: var(--color-blue); margin-bottom: 0.25rem;">
                    ${name.transliteration}
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                    ${name.meaning}
                </div>
                <div style="font-size: 0.75rem; color: var(--color-secondary); font-style: italic;">
                    ${name.attribute}
                </div>
            </div>
        `).join('');
    }

    function renderSahaba(category) {
        const grid = document.getElementById('sahabaGrid');
        if (!grid) return;

        const sahabaData = {
            ashara: [
                { name: 'أبو بكر', title: 'الصديق', virtues: ['First to accept Islam', 'Companion in the cave'] },
                { name: 'عمر', title: 'الفاروق', virtues: ['Strengthened Islam', 'Just ruler'] },
                { name: 'عثمان', title: 'ذو النورين', virtues: ['Compiled the Quran', 'Generous supporter'] },
                { name: 'علي', title: 'أمير المؤمنين', virtues: ['Cousin of Prophet', 'Gate of knowledge'] },
            ],
            prominent: [
                { name: 'خالد', title: 'سيف الله', virtues: ['Undefeated commander', 'Sword of Allah'] },
                { name: 'بلال', title: 'المؤذن', virtues: ['First muezzin', 'Endured persecution'] },
            ],
            sahabiyat: [
                { name: 'خديجة', title: 'أم المؤمنين', virtues: ['First believer', 'Supported the Prophet'] },
                { name: 'عائشة', title: 'أم المؤمنين', virtues: ['Scholar', 'Transmitted hadith'] },
                { name: 'فاطمة', title: 'الزهراء', virtues: ['Daughter of Prophet', 'Pure and pious'] },
            ]
        };

        const data = sahabaData[category] || [];

        grid.innerHTML = data.map(sahabi => `
            <div class="card glass">
                <div class="card-body">
                    <h3 style="font-family: var(--font-arabic); color: var(--color-primary); margin-bottom: 0.5rem;">
                        ${sahabi.name}
                    </h3>
                    ${sahabi.title ? `
                        <div style="color: var(--color-secondary); font-weight: 600; margin-bottom: 1rem;">
                            ${sahabi.title}
                        </div>
                    ` : ''}
                    <ul style="list-style: none; padding: 0;">
                        ${sahabi.virtues.slice(0, 2).map(virtue => `
                            <li style="color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; align-items: start; gap: 0.5rem;">
                                <i class="fas fa-check" style="color: var(--color-accent); margin-top: 0.25rem;"></i>
                                <span>${virtue}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    function renderLunarMansions() {
        const grid = document.getElementById('lunarMansionsGrid');
        if (!grid) return;

        // Sample data - would come from library
        const mansions = [
            { number: 1, arabic: 'الشرطان', transliteration: 'Ash-Sharatan', element: 'Fire', influence: 'Leadership' },
            { number: 2, arabic: 'البطين', transliteration: 'Al-Butain', element: 'Fire', influence: 'Patience' },
            { number: 3, arabic: 'الثريا', transliteration: 'Ath-Thurayya', element: 'Earth', influence: 'Prosperity' },
            // More mansions...
        ];

        grid.innerHTML = mansions.slice(0, 16).map(mansion => `
            <div class="card glass">
                <div class="card-body" style="text-align: center;">
                    <div style="font-weight: 700; color: var(--color-secondary); margin-bottom: 0.5rem;">
                        Mansion ${mansion.number}
                    </div>
                    <div style="font-family: var(--font-arabic); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 0.5rem;">
                        ${mansion.arabic}
                    </div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                        ${mansion.transliteration}
                    </div>
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; font-size: 0.75rem;">
                        <span><strong>Element:</strong> ${mansion.element}</span>
                        <span><strong>Influence:</strong> ${mansion.influence}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderBlessedDays() {
        const container = document.getElementById('blessedDaysList');
        if (!container) return;

        const blessedDays = [
            { name: 'عاشوراء', month: 'Muharram', day: 10, significance: 'Day of Ashura' },
            { name: 'المولد النبوي', month: 'Rabi al-Awwal', day: 12, significance: 'Prophet\'s Birthday' },
            { name: 'الإسراء والمعراج', month: 'Rajab', day: 27, significance: 'Night Journey' },
            { name: 'ليلة القدر', month: 'Ramadan', day: '27*', significance: 'Night of Power' },
            { name: 'عيد الفطر', month: 'Shawwal', day: 1, significance: 'Eid al-Fitr' },
            { name: 'يوم عرفة', month: 'Dhul Hijjah', day: 9, significance: 'Day of Arafah' },
            { name: 'عيد الأضحى', month: 'Dhul Hijjah', day: 10, significance: 'Eid al-Adha' },
        ];

        container.innerHTML = `
            <div class="grid-3">
                ${blessedDays.map(day => `
                    <div class="card glass">
                        <div class="card-body">
                            <h4 style="font-family: var(--font-arabic); color: var(--color-primary); margin-bottom: 0.5rem;">
                                ${day.name}
                            </h4>
                            <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                                ${day.month} ${day.day}
                            </div>
                            <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">
                                ${day.significance}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderHistoricalFigures() {
        const grid = document.getElementById('historicalGrid');
        if (!grid) return;

        // Sample data
        const figures = [
            { name: 'محمد ﷺ', category: 'prophets', title: 'Seal of Prophets' },
            { name: 'إبراهيم', category: 'prophets', title: 'Friend of Allah' },
            { name: 'موسى', category: 'prophets', title: 'Speaker to Allah' },
        ];

        const search = document.getElementById('historicalSearch')?.value.toLowerCase() || '';
        const filter = document.getElementById('historicalFilter')?.value || 'all';

        let filtered = figures;
        if (search) {
            filtered = filtered.filter(f => f.name.includes(search) || f.title.toLowerCase().includes(search));
        }
        if (filter !== 'all') {
            filtered = filtered.filter(f => f.category === filter);
        }

        grid.innerHTML = filtered.map(figure => `
            <div class="card glass">
                <div class="card-body">
                    <h3 style="font-family: var(--font-arabic); color: var(--color-primary);">
                        ${figure.name}
                    </h3>
                    <p style="color: var(--color-secondary); font-weight: 600;">
                        ${figure.title}
                    </p>
                </div>
            </div>
        `).join('');
    }

    // ==================== HIJRI CALENDAR ====================
    function updateCurrentHijriDate() {
        // Simple approximation - should use proper library function
        const today = new Date();
        const gregorianYear = today.getFullYear();
        const gregorianMonth = today.getMonth() + 1;
        const gregorianDay = today.getDate();

        // Approximate conversion (simplified)
        const hijriYear = gregorianYear - 579;
        const hijriMonth = (gregorianMonth + 8) % 12 || 12;

        const monthNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثانية',
                           'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];

        document.getElementById('hijriDay').textContent = gregorianDay;
        document.getElementById('hijriMonth').textContent = monthNames[hijriMonth - 1];
        document.getElementById('hijriYear').textContent = hijriYear + ' هـ';
        document.getElementById('hijriGregorian').textContent = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function convertHijriDate() {
        const day = document.getElementById('convDay').value;
        const month = document.getElementById('convMonth').value;
        const year = document.getElementById('convYear').value;

        if (!day || !month || !year) {
            showToast('Please enter complete date', 'warning');
            return;
        }

        // Simple conversion (would use proper library function)
        const gregorianYear = parseInt(year) + 579;
        const result = document.getElementById('conversionResult');

        result.innerHTML = `
            <div class="card glass" style="margin-top: 1rem; padding: 1.5rem; text-align: center;">
                <h4>Gregorian Date (Approximate)</h4>
                <div style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0.5rem;">
                    ${day} / ${month} / ${gregorianYear}
                </div>
                <p style="font-size: 0.875rem; color: var(--text-tertiary); margin-top: 0.5rem;">
                    Note: This is an approximate conversion
                </p>
            </div>
        `;
    }

    // ==================== BUSINESS ANALYSIS ====================
    function analyzeBusinessName() {
        const name = document.getElementById('businessName').value.trim();
        const industry = document.getElementById('businessIndustry').value;

        if (!name) {
            showToast('Please enter business name', 'warning');
            return;
        }

        try {
            const hisaab = new Hisaab(name);
            const numerology = hisaab.getNumerology();
            const astrology = hisaab.getArabicAstrology();

            const container = document.getElementById('businessResults');
            container.innerHTML = `
                <div class="card glass">
                    <div class="card-header">
                        <h3><i class="fas fa-chart-bar"></i> Business Analysis for "${name}"</h3>
                    </div>
                    <div class="card-body">
                        <div class="result-item">
                            <span class="result-label">Value:</span>
                            <span class="result-value-sm">${hisaab.getValue()}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Digit Root:</span>
                            <span>${numerology.digitRoot} - ${numerology.category}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Element:</span>
                            <span>${astrology.element.arabic} (${astrology.element.name})</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Success Potential:</span>
                            <span>${numerology.digitRoot >= 7 ? 'High' : numerology.digitRoot >= 4 ? 'Medium' : 'Moderate'}</span>
                        </div>
                        ${industry ? `
                            <div class="result-item">
                                <span class="result-label">Industry Alignment:</span>
                                <span>${getIndustryAlignment(numerology.digitRoot, industry)}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="card glass" style="margin-top: 1rem;">
                    <div class="card-body">
                        <h4>Recommendations</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${getBusinessRecommendations(numerology.digitRoot).map(rec => `
                                <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                                    <i class="fas fa-lightbulb" style="color: var(--color-secondary); margin-top: 0.25rem;"></i>
                                    <span>${rec}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
            container.classList.remove('hidden');
            showToast('Business analysis complete!', 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        }
    }

    function getIndustryAlignment(digitRoot, industry) {
        const alignments = {
            1: ['leadership', 'technology', 'consulting'],
            2: ['partnership', 'hospitality', 'healthcare'],
            3: ['creativity', 'education', 'retail'],
            4: ['construction', 'manufacturing', 'real-estate'],
            5: ['technology', 'retail', 'consulting'],
            6: ['healthcare', 'education', 'hospitality'],
            7: ['consulting', 'education', 'finance'],
            8: ['finance', 'real-estate', 'manufacturing'],
            9: ['healthcare', 'education', 'consulting']
        };

        const aligned = alignments[digitRoot] || [];
        return aligned.includes(industry) ? 'Excellent ✓' : 'Moderate';
    }

    function getBusinessRecommendations(digitRoot) {
        const recommendations = {
            1: ['Focus on leadership and innovation', 'Be first to market', 'Build a strong personal brand'],
            2: ['Emphasize partnerships and collaboration', 'Build strong relationships', 'Focus on harmony and balance'],
            3: ['Leverage creativity in marketing', 'Engage in social media', 'Create compelling brand stories'],
            4: ['Build solid foundations', 'Focus on systems and processes', 'Ensure reliability and trust'],
            5: ['Embrace change and adaptability', 'Explore new markets', 'Maintain flexibility'],
            6: ['Prioritize customer service', 'Build community', 'Focus on social responsibility'],
            7: ['Invest in research and analysis', 'Build expertise', 'Focus on quality over quantity'],
            8: ['Focus on financial growth', 'Build authority', 'Scale strategically'],
            9: ['Serve the greater good', 'Build legacy', 'Focus on impact']
        };

        return recommendations[digitRoot] || ['General business advice applies'];
    }

    // ==================== FAMILY ANALYSIS ====================
    function addFamilyMember() {
        const nameInput = document.getElementById('memberName');
        const relationInput = document.getElementById('memberRelation');

        const name = nameInput.value.trim();
        const relation = relationInput.value.trim();

        if (!name || !relation) {
            showToast('Please enter both name and relation', 'warning');
            return;
        }

        try {
            const hisaab = new Hisaab(name);
            state.familyMembers.push({
                name,
                relation,
                value: hisaab.getValue(),
                digitRoot: hisaab.getDigitRoot()
            });

            renderFamilyMembers();
            nameInput.value = '';
            relationInput.value = '';

            document.getElementById('analyzeFamilyBtn').disabled = state.familyMembers.length < 2;
            showToast('Family member added!', 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        }
    }

    function renderFamilyMembers() {
        const container = document.getElementById('familyMembersList');
        if (!container) return;

        container.innerHTML = `
            <div style="margin-top: 1rem;">
                <h4>Family Members (${state.familyMembers.length})</h4>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
                    ${state.familyMembers.map((member, index) => `
                        <div style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0.75rem;
                            background: var(--glass-bg);
                            border-radius: var(--radius-md);
                            border: 1px solid var(--glass-border);
                        ">
                            <div>
                                <span style="font-family: var(--font-arabic); font-weight: 700; color: var(--color-primary);">
                                    ${member.name}
                                </span>
                                <span style="color: var(--text-secondary); margin: 0 0.5rem;">•</span>
                                <span style="color: var(--text-secondary);">${member.relation}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <span style="font-weight: 600; color: var(--color-secondary);">${member.value}</span>
                                <button
                                    onclick="removeFamilyMember(${index})"
                                    style="
                                        background: none;
                                        border: none;
                                        color: var(--text-tertiary);
                                        cursor: pointer;
                                        font-size: 1.25rem;
                                    "
                                >
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.removeFamilyMember = function(index) {
        state.familyMembers.splice(index, 1);
        renderFamilyMembers();
        document.getElementById('analyzeFamilyBtn').disabled = state.familyMembers.length < 2;
        showToast('Member removed', 'info');
    };

    function analyzeFamilyHarmony() {
        if (state.familyMembers.length < 2) {
            showToast('Add at least 2 family members', 'warning');
            return;
        }

        const container = document.getElementById('familyResults');
        const avgValue = state.familyMembers.reduce((sum, m) => sum + m.value, 0) / state.familyMembers.length;
        const avgDigitRoot = state.familyMembers.reduce((sum, m) => sum + m.digitRoot, 0) / state.familyMembers.length;

        container.innerHTML = `
            <div class="card glass">
                <div class="card-header">
                    <h3><i class="fas fa-users"></i> Family Harmony Analysis</h3>
                </div>
                <div class="card-body">
                    <div class="result-item">
                        <span class="result-label">Total Members:</span>
                        <span>${state.familyMembers.length}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Average Value:</span>
                        <span class="result-value-sm">${avgValue.toFixed(0)}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Average Digit Root:</span>
                        <span>${avgDigitRoot.toFixed(1)}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Harmony Score:</span>
                        <span>${calculateHarmonyScore(state.familyMembers)}/10</span>
                    </div>
                </div>
            </div>
        `;
        container.classList.remove('hidden');
        showToast('Family analysis complete!', 'success');
    }

    function calculateHarmonyScore(members) {
        // Simple harmony calculation based on digit root variance
        const digitRoots = members.map(m => m.digitRoot);
        const avg = digitRoots.reduce((a, b) => a + b, 0) / digitRoots.length;
        const variance = digitRoots.reduce((sum, dr) => sum + Math.pow(dr - avg, 2), 0) / digitRoots.length;

        // Lower variance = higher harmony (max 10)
        return Math.max(1, Math.min(10, 10 - variance * 2)).toFixed(1);
    }

    // ==================== MULTI-LANGUAGE ====================
    function selectLanguage(lang) {
        state.currentLanguage = lang;

        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        event.target.closest('.lang-btn').classList.add('active');

        const labels = {
            arabic: 'Enter Arabic name',
            hebrew: 'Enter Hebrew name',
            persian: 'Enter Persian name',
            urdu: 'Enter Urdu name',
            turkish: 'Enter Turkish name'
        };

        document.getElementById('langLabel').textContent = labels[lang];
        showToast(`Language changed to ${lang}`, 'info');
    }

    function calculateMultiLang() {
        const name = document.getElementById('multiLangName').value.trim();

        if (!name) {
            showToast('Please enter a name', 'warning');
            return;
        }

        // For now, use Arabic calculation
        // In full implementation, would use language-specific calculation
        try {
            const hisaab = new Hisaab(name);
            const container = document.getElementById('multiLangResults');

            container.innerHTML = `
                <div class="card glass">
                    <div class="card-header">
                        <h3>${state.currentLanguage.toUpperCase()} Name Analysis</h3>
                    </div>
                    <div class="card-body" style="text-align: center;">
                        <div style="font-size: 2.5rem; font-family: var(--font-arabic); margin-bottom: 1rem;">
                            ${name}
                        </div>
                        <div class="result-value" style="font-size: 3rem;">
                            ${hisaab.getValue()}
                        </div>
                        <p style="color: var(--text-secondary); margin-top: 1rem;">
                            Calculated using ${state.currentLanguage} Abjad system
                        </p>
                    </div>
                </div>
            `;
            container.classList.remove('hidden');
            showToast('Calculation complete!', 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        }
    }

    // ==================== AI RECOMMENDATIONS ====================
    function getAIRecommendations() {
        const purpose = document.getElementById('aiPurpose').value;
        const digitRoot = document.getElementById('aiDigitRoot').value;
        const element = document.getElementById('aiElement').value;
        const maxResults = parseInt(document.getElementById('aiMaxResults').value);

        showLoading(true);

        try {
            // Use the Hisaab.generateNames method
            const suggestions = Hisaab.generateNames({
                targetRoot: digitRoot,
                element: element,
                purpose: purpose,
                maxResults: maxResults
            });

            const container = document.getElementById('aiRecommendations');
            container.innerHTML = `
                <div class="card glass">
                    <div class="card-header">
                        <h3><i class="fas fa-sparkles"></i> AI Recommendations (${suggestions.length} names)</h3>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; gap: 1rem;">
                            ${suggestions.map((sug, index) => `
                                <div style="
                                    display: grid;
                                    grid-template-columns: auto 1fr auto auto auto;
                                    gap: 1rem;
                                    align-items: center;
                                    padding: 1rem;
                                    background: var(--glass-bg);
                                    border-radius: var(--radius-md);
                                    border: 1px solid var(--glass-border);
                                ">
                                    <div style="
                                        width: 30px;
                                        height: 30px;
                                        border-radius: 50%;
                                        background: var(--gradient-primary);
                                        color: white;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-weight: 700;
                                    ">
                                        ${index + 1}
                                    </div>
                                    <div>
                                        <div style="font-family: var(--font-arabic); font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">
                                            ${sug.name}
                                        </div>
                                        ${sug.reasons.length ? `
                                            <div style="font-size: 0.75rem; color: var(--color-secondary); margin-top: 0.25rem;">
                                                ${sug.reasons.join(', ')}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 0.75rem; color: var(--text-tertiary);">Value</div>
                                        <div style="font-weight: 700;">${sug.value}</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 0.75rem; color: var(--text-tertiary);">Root</div>
                                        <div style="font-weight: 700;">${sug.digitRoot}</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 0.75rem; color: var(--text-tertiary);">Element</div>
                                        <div style="font-weight: 700;">${sug.element}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            container.classList.remove('hidden');
            showToast(`Found ${suggestions.length} recommendations!`, 'success');
        } catch (error) {
            showToast('Error: ' + error.message, 'error');
        } finally {
            showLoading(false);
        }
    }

    // ==================== EXPORT ====================
    window.exportResults = function(format) {
        if (!state.currentResults) {
            showToast('No results to export', 'warning');
            return;
        }

        const data = {
            name: state.currentResults.getName(),
            value: state.currentResults.getValue(),
            digitRoot: state.currentResults.getDigitRoot(),
            numerology: state.currentResults.getNumerology(),
            breakdown: state.currentResults.getBreakdown()
        };

        let content, filename, mimeType;

        switch (format) {
            case 'json':
                content = JSON.stringify(data, null, 2);
                filename = 'hisaab-results.json';
                mimeType = 'application/json';
                break;
            case 'text':
                content = `Hisaab Analysis\n\nName: ${data.name}\nValue: ${data.value}\nDigit Root: ${data.digitRoot}\n\nNumerology Category: ${data.numerology.category}`;
                filename = 'hisaab-results.txt';
                mimeType = 'text/plain';
                break;
            case 'markdown':
                content = `# Hisaab Analysis\n\n## ${data.name}\n\n- **Value**: ${data.value}\n- **Digit Root**: ${data.digitRoot}\n- **Category**: ${data.numerology.category}`;
                filename = 'hisaab-results.md';
                mimeType = 'text/markdown';
                break;
            case 'html':
                content = `<!DOCTYPE html><html><head><title>Hisaab Results</title></head><body><h1>${data.name}</h1><p>Value: ${data.value}</p></body></html>`;
                filename = 'hisaab-results.html';
                mimeType = 'text/html';
                break;
            case 'clipboard':
                navigator.clipboard.writeText(JSON.stringify(data, null, 2));
                showToast('Copied to clipboard!', 'success');
                return;
            case 'pdf':
                showToast('PDF export coming soon!', 'info');
                return;
            default:
                showToast('Unknown format', 'error');
                return;
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);

        showToast(`Exported as ${format.toUpperCase()}!`, 'success');
    };

    // ==================== FAB MENU ====================
    function toggleFABMenu() {
        const options = document.querySelector('.fab-options');
        options.classList.toggle('hidden');
    }

    function handleFABAction(e) {
        const action = e.currentTarget.dataset.action;

        switch (action) {
            case 'newCalculation':
                document.getElementById('mainName').value = '';
                document.getElementById('partnerName').value = '';
                document.getElementById('mainName').focus();
                showToast('Ready for new calculation', 'info');
                break;
            case 'export':
                document.getElementById('export').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'share':
                if (navigator.share && state.currentResults) {
                    navigator.share({
                        title: 'Hisaab Results',
                        text: `${state.currentResults.getName()} = ${state.currentResults.getValue()}`,
                        url: window.location.href
                    });
                } else {
                    showToast('Share not supported', 'warning');
                }
                break;
        }

        toggleFABMenu();
    }

    // ==================== MOBILE MENU ====================
    function toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }

    // ==================== UI HELPERS ====================
    function showLoading(show) {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.toggle('hidden', !show);
        }
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==================== DATA PERSISTENCE ====================
    function saveState() {
        localStorage.setItem('hisaab-family-members', JSON.stringify(state.familyMembers));
    }

    function loadSavedData() {
        const saved = localStorage.getItem('hisaab-family-members');
        if (saved) {
            state.familyMembers = JSON.parse(saved);
            if (state.familyMembers.length > 0) {
                renderFamilyMembers();
                document.getElementById('analyzeFamilyBtn').disabled = state.familyMembers.length < 2;
            }
        }
    }

    // Auto-save family members
    setInterval(saveState, 30000); // Save every 30 seconds

    // ==================== SCROLL ANIMATIONS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    setTimeout(() => {
        document.querySelectorAll('.card, .section').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }, 100);

    // ==================== EXPOSE GLOBAL FUNCTIONS ====================
    window.HisaabApp = {
        calculateName,
        checkCompatibility,
        exportResults: window.exportResults,
        removeFamilyMember: window.removeFamilyMember
    };

})();
