/**
 * Visualization Data Module - Chart Configurations for Hisaab
 * وحدة بيانات التصور - تكوينات الرسوم البيانية
 */

const CHART_COLORS = {
    elements: {
        Fire: '#ef4444',
        Earth: '#84cc16',
        Air: '#06b6d4',
        Water: '#3b82f6'
    },
    planets: {
        Sun: '#fbbf24',
        Moon: '#94a3b8',
        Mars: '#dc2626',
        Mercury: '#06b6d4',
        Jupiter: '#8b5cf6',
        Venus: '#ec4899',
        Saturn: '#64748b'
    },
    compatibility: {
        excellent: '#22c55e',
        good: '#84cc16',
        neutral: '#fbbf24',
        challenging: '#f97316',
        bad: '#ef4444'
    },
    digitRoots: {
        1: '#ef4444',
        2: '#f97316',
        3: '#fbbf24',
        4: '#84cc16',
        5: '#22c55e',
        6: '#06b6d4',
        7: '#3b82f6',
        8: '#8b5cf6',
        9: '#a855f7'
    },
    primary: '#1e6b3e',
    secondary: '#d4af37',
    accent: '#1e3a8a'
};

const CHART_CONFIGS = {
    compatibilityRadar: {
        type: 'radar',
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        },
        labels: ['Partnership', 'Spirituality', 'Business', 'Leadership', 'Creativity', 'Stability']
    },
    
    elementPie: {
        type: 'pie',
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    },
    
    digitRootBar: {
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    },
    
    compatibilityGauge: {
        type: 'doughnut',
        options: {
            responsive: true,
            circumference: 180,
            rotation: -90,
            plugins: {
                legend: { display: false }
            }
        }
    },
    
    familyTree: {
        type: 'bar',
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            }
        }
    }
};

function generateCompatibilityRadarData(name1Analysis, name2Analysis) {
    return {
        labels: CHART_CONFIGS.compatibilityRadar.labels,
        datasets: [
            {
                label: name1Analysis.name,
                data: [
                    name1Analysis.digitRootScores?.partnership || 50,
                    name1Analysis.digitRootScores?.spirituality || 50,
                    name1Analysis.digitRootScores?.business || 50,
                    name1Analysis.digitRootScores?.leadership || 50,
                    name1Analysis.digitRootScores?.creativity || 50,
                    name1Analysis.digitRootScores?.stability || 50
                ],
                backgroundColor: 'rgba(30, 107, 62, 0.2)',
                borderColor: CHART_COLORS.primary,
                borderWidth: 2
            },
            {
                label: name2Analysis?.name || 'Partner',
                data: [
                    name2Analysis?.digitRootScores?.partnership || 50,
                    name2Analysis?.digitRootScores?.spirituality || 50,
                    name2Analysis?.digitRootScores?.business || 50,
                    name2Analysis?.digitRootScores?.leadership || 50,
                    name2Analysis?.digitRootScores?.creativity || 50,
                    name2Analysis?.digitRootScores?.stability || 50
                ],
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: CHART_COLORS.secondary,
                borderWidth: 2
            }
        ]
    };
}

function generateElementPieData(analyses) {
    const elementCounts = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
    
    analyses.forEach(a => {
        if (a.element && elementCounts.hasOwnProperty(a.element)) {
            elementCounts[a.element]++;
        }
    });
    
    return {
        labels: ['Fire (النار)', 'Earth (التراب)', 'Air (الهواء)', 'Water (الماء)'],
        datasets: [{
            data: Object.values(elementCounts),
            backgroundColor: [
                CHART_COLORS.elements.Fire,
                CHART_COLORS.elements.Earth,
                CHART_COLORS.elements.Air,
                CHART_COLORS.elements.Water
            ],
            borderWidth: 2
        }]
    };
}

function generateDigitRootBarData(analyses) {
    const rootCounts = {};
    for (let i = 1; i <= 9; i++) rootCounts[i] = 0;
    
    analyses.forEach(a => {
        if (a.digitRoot) {
            rootCounts[a.digitRoot]++;
        }
    });
    
    return {
        labels: Object.keys(rootCounts).map(r => `Root ${r}`),
        datasets: [{
            label: 'Count',
            data: Object.values(rootCounts),
            backgroundColor: Object.keys(rootCounts).map(r => CHART_COLORS.digitRoots[r]),
            borderWidth: 1
        }]
    };
}

function generateCompatibilityGaugeData(score) {
    return {
        labels: ['Compatibility'],
        datasets: [{
            data: [score, 100 - score],
            backgroundColor: [
                score >= 70 ? CHART_COLORS.compatibility.excellent :
                score >= 50 ? CHART_COLORS.compatibility.good :
                score >= 30 ? CHART_COLORS.compatibility.neutral :
                CHART_COLORS.compatibility.challenging,
                '#e2e8f0'
            ],
            borderWidth: 0
        }]
    };
}

function generateFamilyTreeBarData(members) {
    return {
        labels: members.map(m => m.name),
        datasets: [{
            label: 'Abjad Value',
            data: members.map(m => m.value),
            backgroundColor: members.map(m => 
                CHART_COLORS.elements[m.element] || CHART_COLORS.primary
            ),
            borderWidth: 1
        }]
    };
}

function generatePartnerHouseChart(name1, name2, house) {
    const houseData = [];
    for (let h = 1; h <= 9; h++) {
        houseData.push(h === house ? 100 : 20);
    }
    
    return {
        labels: ['House 1', 'House 2', 'House 3', 'House 4', 'House 5', 'House 6', 'House 7', 'House 8', 'House 9'],
        datasets: [{
            label: `${name1} + ${name2}`,
            data: houseData,
            backgroundColor: houseData.map((v, i) => 
                i + 1 === house ? 
                    (house === 7 ? CHART_COLORS.compatibility.excellent : 
                     house === 4 ? CHART_COLORS.compatibility.good :
                     CHART_COLORS.compatibility.neutral) :
                    '#e2e8f0'
            ),
            borderWidth: 1
        }]
    };
}

function generateRegionalComparisonChart(comparisons) {
    return {
        labels: comparisons.map(c => c.regionArabic),
        datasets: [{
            label: 'Compatibility Score',
            data: comparisons.map(c => c.compatibility),
            backgroundColor: comparisons.map(c => 
                c.isFavored ? CHART_COLORS.compatibility.excellent :
                c.compatibility >= 60 ? CHART_COLORS.compatibility.good :
                c.compatibility >= 40 ? CHART_COLORS.compatibility.neutral :
                CHART_COLORS.compatibility.challenging
            ),
            borderWidth: 1
        }]
    };
}

function generateTimelineData(years, values) {
    return {
        labels: years,
        datasets: [{
            label: 'Numerological Journey',
            data: values,
            borderColor: CHART_COLORS.primary,
            backgroundColor: 'rgba(30, 107, 62, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };
}

function getChartConfig(type, customOptions = {}) {
    const baseConfig = CHART_CONFIGS[type];
    if (!baseConfig) return null;
    
    return {
        ...baseConfig,
        options: {
            ...baseConfig.options,
            ...customOptions
        }
    };
}

function getChartColors() {
    return CHART_COLORS;
}

module.exports = {
    CHART_COLORS,
    CHART_CONFIGS,
    generateCompatibilityRadarData,
    generateElementPieData,
    generateDigitRootBarData,
    generateCompatibilityGaugeData,
    generateFamilyTreeBarData,
    generatePartnerHouseChart,
    generateRegionalComparisonChart,
    generateTimelineData,
    getChartConfig,
    getChartColors
};