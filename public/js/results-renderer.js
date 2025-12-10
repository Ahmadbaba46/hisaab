/**
 * Results Renderer Module
 * Generates HTML for displaying results
 */

class ResultsRenderer {
    constructor() {}

    renderBasicInfo(data) {
        return `
            <div class="result-card highlight">
                <h3>📊 القيمة الأساسية / Basic Value</h3>
                <div class="result-value">${data.value}</div>
                <p><strong>الاسم / Name:</strong> ${data.name}</p>
                <p><strong>الجذر الرقمي / Digit Root:</strong> ${data.digitRoot}</p>
            </div>

            <div class="result-card">
                <h3>🔢 التفصيل / Letter Breakdown</h3>
                <div class="breakdown-grid">
                    ${data.breakdown.map(item => `
                        <div class="breakdown-item">
                            <div class="breakdown-letter">${item.letter}</div>
                            <div class="breakdown-value">${item.value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderBusinessAnalysis(analysis) {
        if (!analysis) return '';
        
        return `
            <div class="result-card" style="border-left: 4px solid #667eea;">
                <h3>💼 تحليل الأعمال / Business Analysis</h3>
                <div class="result-value" style="color: #667eea;">${analysis.overallAssessment.rating}/10</div>
                <p><strong>Success Range:</strong> ${analysis.successIndicators.range}</p>
                <p><strong>Potential:</strong> ${analysis.successIndicators.potential || 'Good'}</p>
                <p><strong>Business Type:</strong> ${analysis.partnershipAnalysis?.businessType || analysis.businessHouse?.type || 'General'}</p>
                <p><strong>Recommendation:</strong> ${analysis.partnershipAnalysis?.recommendation || analysis.businessHouse?.recommendation || 'Proceed with planning'}</p>
                <div style="margin-top: 15px; padding: 15px; background: #f0f4ff; border-radius: 8px;">
                    <h4 style="margin: 0 0 10px 0;">🏭 Recommended Industries:</h4>
                    ${analysis.recommendedIndustries?.slice(0, 5).map(industry => 
                        `<span style="display: inline-block; background: #667eea; color: white; padding: 5px 10px; border-radius: 5px; margin: 3px;">${industry}</span>`
                    ).join('') || '<p>Technology, Finance, Services</p>'}
                </div>
            </div>
        `;
    }

    renderDateCompatibility(compatibility) {
        if (!compatibility) return '';

        return `
            <div class="result-card" style="border-left: 4px solid #10b981;">
                <h3>📅 توافق التاريخ / Date Compatibility</h3>
                <div class="result-value" style="color: #10b981;">${compatibility.compatibility.score}/100</div>
                <p><strong>Life Path Number:</strong> ${compatibility.lifePathNumber}</p>
                <p><strong>Name Digit Root:</strong> ${compatibility.nameDigitRoot}</p>
                <p><strong>Compatibility Level:</strong> ${compatibility.compatibility.level}</p>
                <p><strong>Description:</strong> ${compatibility.compatibility.description}</p>
                <div style="margin-top: 15px; padding: 15px; background: #f0fdf4; border-radius: 8px;">
                    <h4 style="margin: 0 0 10px 0;">🎯 Life Path Pattern:</h4>
                    <p><strong>${compatibility.lifePathPattern?.description || 'Unique path'}</strong></p>
                    <p><strong>Strengths:</strong> ${compatibility.lifePathPattern?.strengths?.join(', ') || 'Personal growth'}</p>
                </div>
            </div>
        `;
    }

    renderAdvancedNumerology(advanced) {
        if (!advanced) return '';

        return `
            <div class="result-card" style="border-left: 4px solid #8b5cf6;">
                <h3>🔮 علم الأرقام المتقدم / Advanced Numerology</h3>
                <p><strong>Master Number:</strong> ${advanced.masterNumbers?.isMasterNumber ? 
                    `✅ Yes (${advanced.masterNumbers.number})` : '❌ No'}</p>
                <p><strong>Karmic Number:</strong> ${advanced.karmicNumbers?.isKarmicNumber ? 
                    `⚠️ Yes (${advanced.karmicNumbers.number})` : '✅ No karmic debt'}</p>
                <p><strong>Unique Numbers:</strong> ${advanced.hiddenPotential?.uniqueNumbers || 'N/A'}</p>
                <p><strong>Repeated Numbers:</strong> ${advanced.hiddenPotential?.repeatedNumbers?.join(', ') || 'None'}</p>
                
                ${advanced.masterNumbers?.isMasterNumber ? `
                    <div style="margin-top: 15px; padding: 15px; background: #faf5ff; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px 0; color: #8b5cf6;">🌟 Master Number Detected!</h4>
                        <p><strong>Meaning:</strong> ${advanced.masterNumbers.meaning}</p>
                        <p><strong>Purpose:</strong> ${advanced.masterNumbers.purpose}</p>
                    </div>
                ` : ''}
                
                ${advanced.karmicNumbers?.isKarmicNumber ? `
                    <div style="margin-top: 15px; padding: 15px; background: #fef3c7; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px 0; color: #92400e;">⚖️ Karmic Debt</h4>
                        <p><strong>Lesson:</strong> ${advanced.karmicNumbers.lesson}</p>
                        <p><strong>Challenge:</strong> ${advanced.karmicNumbers.challenge}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderPrayerGuidance(prayer) {
        if (!prayer) return '';

        return `
            <div class="result-card" style="border-left: 4px solid #d4af37;">
                <h3>🕌 إرشادات الصلاة / Prayer Guidance</h3>
                <div class="result-value" style="color: #d4af37;">${prayer.arabicPrayer || prayer.favorablePrayer}</div>
                <p><strong>Favorable Prayer:</strong> ${prayer.favorablePrayer}</p>
                <p><strong>Significance:</strong> ${prayer.significance}</p>
                
                ${prayer.dhikrPlan ? `
                    <div style="margin-top: 15px; padding: 15px; background: #fffbeb; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px 0; color: #92400e;">📿 Daily Dhikr Plan</h4>
                        <p><strong>Morning:</strong> ${prayer.dhikrPlan.morning}</p>
                        <p><strong>Evening:</strong> ${prayer.dhikrPlan.evening}</p>
                    </div>
                ` : ''}
                
                <p style="margin-top: 10px; padding: 10px; background: #f0fdf4; border-radius: 8px; font-size: 14px; color: #166534;">
                    <strong>💡 Spiritual Tip:</strong> Focus on ${prayer.favorablePrayer} prayer for enhanced spiritual connection.
                </p>
            </div>
        `;
    }

    renderLunarMansion(m) {
        if (!m) return '';
        return `
            <div class="result-card" style="border-left: 4px solid #0ea5e9;">
                <h3>🌙 منازل القمر / Lunar Mansion</h3>
                <div class="result-value" style="color: #0ea5e9;">${m.number}</div>
                <p><strong>Name (Arabic):</strong> ${m.arabic || m.nameArabic || ''}</p>
                <p><strong>Transliteration:</strong> ${m.transliteration || m.name || ''}</p>
                ${m.influence ? `<p><strong>Influence:</strong> ${m.influence}</p>` : ''}
                ${m.influenceArabic ? `<p><strong>التأثير:</strong> ${m.influenceArabic}</p>` : ''}
                ${m.personalizedInsight ? `<div style="margin-top: 10px; padding: 10px; background: #eff6ff; border-radius: 8px;">${m.personalizedInsight}</div>` : ''}
                ${m.spiritualGuidance?.dhikr ? `<div style="margin-top: 10px; padding: 10px; background: #faf5ff; border-radius: 8px;">
                    <strong>📿 Dhikr:</strong> ${m.spiritualGuidance.dhikr}
                </div>` : ''}
            </div>
        `;
    }

    renderAsmaUlHusna(asma) {
        if (!asma) return '';
        return `
            <div class="result-card" style="border-left: 4px solid #d4af37;">
                <h3>✨ أسماء الله الحسنى / Divine Name Match</h3>
                <div class="result-value" style="color: #d4af37;">#{${asma.number}}</div>
                <p><strong>Arabic:</strong> ${asma.arabic}</p>
                <p><strong>Transliteration:</strong> ${asma.transliteration}</p>
                <p><strong>المعنى / Meaning:</strong> ${asma.meaning}</p>
                <p><strong>الصفة / Attribute:</strong> ${asma.attribute}</p>
                <div style="margin-top: 10px; padding: 10px; background: #fffbeb; border-radius: 8px; color: #78350f;">
                    <strong>🌟 This is a blessed name carrying divine significance!</strong>
                </div>
            </div>
        `;
    }

    renderQuranicConnections(primary, extended) {
        if (!primary && (!extended || extended.length === 0)) return '';
        let html = `<div class="result-card" style="border-left: 4px solid #15803d;">
            <h3>📖 القرآن الكريم / Quranic Connections</h3>`;
        
        if (primary) {
            html += `
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="color: #15803d; margin: 0 0 10px 0;">Primary Connection</h4>
                    <p><strong>Surah ${primary.surah}:${primary.ayah}</strong></p>
                    ${primary.arabic ? `<p style="font-size: 20px; line-height: 1.8; direction: rtl;">${primary.arabic}</p>` : ''}
                    ${primary.translation ? `<p style="opacity: 0.9;">${primary.translation}</p>` : ''}
                    ${primary.theme ? `<p><strong>Theme:</strong> ${primary.theme}</p>` : ''}
                </div>
            `;
        }

        if (extended && extended.length > 0) {
            html += `<h4 style="margin: 15px 0 10px 0;">Extended Connections (${extended.length})</h4>`;
            extended.slice(0, 3).forEach((conn, i) => {
                html += `
                    <div style="background: #fef3c7; padding: 10px; border-radius: 8px; margin-bottom: 10px; font-size: 14px;">
                        <p><strong>${i+1}. Surah ${conn.surah}:${conn.ayah}</strong> — ${conn.type || 'Connection'}</p>
                        ${conn.translation ? `<p style="opacity: 0.85;">"${conn.translation.substring(0, 100)}..."</p>` : ''}
                        ${conn.significance ? `<p style="opacity: 0.75;"><em>${conn.significance}</em></p>` : ''}
                    </div>
                `;
            });
            if (extended.length > 3) {
                html += `<p style="opacity: 0.6; font-size: 14px;">...and ${extended.length - 3} more connections</p>`;
            }
        }

        html += `</div>`;
        return html;
    }

    renderAstrology(astro) {
        if (!astro || (!astro.elemental && !astro.planetary && !astro.zodiac)) return '';
        let html = `<div class="result-card" style="border-left: 4px solid #7c3aed;">
            <h3>⭐ علم الفلك / Arabic Astrology</h3>`;

        if (astro.elemental) {
            const el = astro.elemental;
            html += `
                <div style="background: #faf5ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="color: #7c3aed; margin: 0 0 10px 0;">🔥 Elemental (% 4)</h4>
                    <p><strong>Element:</strong> ${el.element || el.name || '—'}</p>
                    ${el.arabic ? `<p><strong>Arabic:</strong> ${el.arabic}</p>` : ''}
                    ${el.quality ? `<p><strong>Quality:</strong> ${el.quality}</p>` : ''}
                    ${el.characteristics ? `<p><strong>Characteristics:</strong> ${el.characteristics.join(', ')}</p>` : ''}
                </div>
            `;
        }

        if (astro.planetary) {
            const pl = astro.planetary;
            html += `
                <div style="background: #ede9fe; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="color: #6b21a8; margin: 0 0 10px 0;">🪐 Planetary (% 7)</h4>
                    <p><strong>Planet:</strong> ${pl.planet || pl.name || '—'}</p>
                    ${pl.arabic ? `<p><strong>Arabic:</strong> ${pl.arabic}</p>` : ''}
                    ${pl.influence ? `<p><strong>Influence:</strong> ${pl.influence}</p>` : ''}
                    ${pl.day ? `<p><strong>Day:</strong> ${pl.day}</p>` : ''}
                </div>
            `;
        }

        if (astro.zodiac) {
            const zd = astro.zodiac;
            html += `
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px;">
                    <h4 style="color: #92400e; margin: 0 0 10px 0;">♈ Zodiac (% 12)</h4>
                    <p><strong>Sign:</strong> ${zd.sign || zd.name || '—'}</p>
                    ${zd.arabic ? `<p><strong>Arabic:</strong> ${zd.arabic}</p>` : ''}
                    ${zd.personality ? `<p><strong>Personality:</strong> ${zd.personality}</p>` : ''}
                    ${zd.strengths ? `<p><strong>Strengths:</strong> ${zd.strengths.join(', ')}</p>` : ''}
                </div>
            `;
        }

        html += `</div>`;
        return html;
    }

    renderIslamicAnalysis(islamic) {
        if (!islamic) return '';

        let html = `<div class="result-card" style="border-left: 4px solid #1e6b3e;">
            <h3>☪️ التحليل الإسلامي / Islamic Analysis</h3>`;

        if (islamic.asmaUlHusna) {
            html += `
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="color: #1e6b3e; margin: 0 0 10px 0;">✨ اسم من أسماء الله الحسنى / Divine Name Match</h4>
                    <p><strong>${islamic.asmaUlHusna.transliteration}</strong> (#${islamic.asmaUlHusna.number})</p>
                    <p><strong>المعنى / Meaning:</strong> ${islamic.asmaUlHusna.meaning}</p>
                    <p><strong>الصفة / Attribute:</strong> ${islamic.asmaUlHusna.attribute}</p>
                </div>
            `;
        }

        if (islamic.quranicConnection) {
            html += `
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px;">
                    <h4 style="color: #92400e; margin: 0 0 10px 0;">📖 Quranic Connection</h4>
                    <p><strong>Surah:</strong> ${islamic.quranicConnection.surah}</p>
                    <p><strong>Ayah:</strong> ${islamic.quranicConnection.ayah}</p>
                    <p><strong>Theme:</strong> ${islamic.quranicConnection.theme}</p>
                </div>
            `;
        }

        html += `</div>`;
        return html;
    }

    renderCompatibility(compat) {
        if (!compat) return '';
        if (!compat) return '';
        // compat is from getArabicCompatibility(); has interpretation with rating, quality, arabic, description
        const interp = compat.interpretation || {};
        const ratingText = interp.rating || '';
        const numeric = ratingText.includes('/') ? parseInt(ratingText.split('/')[0], 10) : null;
        const scoreDisplay = numeric !== null && !isNaN(numeric) ? `${numeric}/10` : (ratingText || '—');
        return `
            <div class="result-card" style="border-left: 4px solid #f59e0b;">
                <h3>💕 حساب الشريك / Partner Compatibility</h3>
                <p><strong>${compat.name1}</strong> + <strong>${compat.name2}</strong></p>
                <p><strong>Calculation:</strong> ${compat.calculation}</p>
                <div class="result-value" style="color: #f59e0b;">${scoreDisplay}</div>
                <p><strong>House:</strong> ${compat.partnerHouse} — ${compat.houseSignificance}</p>
                ${interp.quality ? `<p><strong>Quality:</strong> ${interp.quality} (${interp.arabic || ''})</p>` : ''}
                ${interp.description ? `<p>${interp.description}</p>` : ''}
                ${interp.details ? `<p style="opacity:.85;">${interp.details}</p>` : ''}
            </div>
        `;
    }

    renderComplete(calculator) {
        if (!calculator || typeof calculator.getBasicInfo !== 'function') return '';
        const basic = calculator.getBasicInfo();
        if (!basic) return '';
        const business = calculator.getBusinessAnalysis && calculator.getBusinessAnalysis();
        const advanced = calculator.getAdvancedNumerology && calculator.getAdvancedNumerology();
        const prayer = calculator.getPrayerTimeCorrelations && calculator.getPrayerTimeCorrelations();
        const islamic = calculator.getIslamicAnalysis && calculator.getIslamicAnalysis();
        
        // Safe sample date for demonstration
        const dateComp = calculator.getLifePathCompatibility && calculator.getLifePathCompatibility(15, 7, 1990);

        return `
            <div class="result-grid fade-in">
                ${this.renderBasicInfo(basic)}
            </div>

            <div class="result-grid fade-in" style="margin-top: 30px;">
                <div style="grid-column: 1 / -1; text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
                    <h2 style="margin: 0; font-size: 28px;">✨ v1.3.0 Features</h2>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Business • Date • Advanced • Prayer</p>
                </div>
                
                ${this.renderBusinessAnalysis(business)}
                ${this.renderDateCompatibility(dateComp)}
                ${this.renderAdvancedNumerology(advanced)}
                ${this.renderPrayerGuidance(prayer)}
                ${this.renderLunarMansion(calculator.getLunarMansion())}
                ${this.renderAstrology(calculator.getAstrology())}
                ${this.renderAsmaUlHusna(calculator.getAsmaUlHusnaMatch())}
                ${this.renderQuranicConnections(calculator.getQuranicConnection(), calculator.getExtendedQuranicConnections())}
                ${this.renderIslamicAnalysis(islamic)}
            </div>
        `;
    }
}

// Export
window.ResultsRenderer = ResultsRenderer;
