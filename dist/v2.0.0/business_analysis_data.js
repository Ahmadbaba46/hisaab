/**
 * Business Analysis Data Module - v1.3.0
 * Company name analysis, success indicators, timing recommendations
 */

// Business Success Indicators by Abjad Value Ranges
const BUSINESS_SUCCESS_INDICATORS = {
    // Low values (1-99)
    low: {
        range: '1-99',
        characteristics: ['Quick decisions', 'Agile operations', 'Innovation focus'],
        strengths: ['Fast adaptation', 'Low overhead', 'Nimble management'],
        challenges: ['Limited resources', 'Growth constraints', 'Market positioning'],
        industries: ['Startups', 'Consulting', 'Creative services', 'Digital businesses'],
        timing: 'Ideal for quick launches and rapid iteration',
        luckyNumbers: [1, 3, 5, 7, 9],
        recommendation: 'Focus on agility and quick market entry'
    },
    
    // Medium values (100-399)
    medium: {
        range: '100-399',
        characteristics: ['Balanced growth', 'Steady operations', 'Market stability'],
        strengths: ['Sustainable growth', 'Market presence', 'Resource balance'],
        challenges: ['Competition', 'Scaling decisions', 'Market changes'],
        industries: ['Manufacturing', 'Retail', 'Services', 'Technology', 'Healthcare'],
        timing: 'Good for steady expansion and market development',
        luckyNumbers: [2, 4, 6, 8],
        recommendation: 'Build strong foundations and steady growth strategies'
    },
    
    // High values (400-699)
    high: {
        range: '400-699',
        characteristics: ['Strong presence', 'Market leadership', 'Resource abundance'],
        strengths: ['Market influence', 'Resource capacity', 'Brand recognition'],
        challenges: ['Bureaucracy', 'Innovation speed', 'Competition pressure'],
        industries: ['Finance', 'Real estate', 'Large manufacturing', 'Infrastructure'],
        timing: 'Perfect for major investments and market expansion',
        luckyNumbers: [4, 8, 12, 16],
        recommendation: 'Leverage strength for market dominance and innovation'
    },
    
    // Very high values (700+)
    veryHigh: {
        range: '700+',
        characteristics: ['Market dominance', 'Global reach', 'Industry leadership'],
        strengths: ['Market control', 'Global influence', 'Resource mastery'],
        challenges: ['Regulation', 'Public scrutiny', 'Innovation disruption'],
        industries: ['Multinational corporations', 'Oil & gas', 'Banking', 'Technology giants'],
        timing: 'Ideal for global expansion and industry transformation',
        luckyNumbers: [7, 14, 21, 28],
        recommendation: 'Focus on global leadership and sustainable practices'
    }
};

// Industry-Specific Analysis
const INDUSTRY_ANALYSIS = {
    'technology': {
        favorableElements: ['Air', 'Fire'],
        favorableNumbers: [3, 5, 8, 9],
        luckyDays: ['Wednesday', 'Thursday'],
        characteristics: 'Innovation, communication, rapid change',
        successFactors: ['Agility', 'Innovation', 'Market timing'],
        nameGuidance: 'Choose names with Air/Fire elements for innovation energy'
    },
    
    'finance': {
        favorableElements: ['Earth', 'Water'],
        favorableNumbers: [2, 4, 6, 8],
        luckyDays: ['Monday', 'Friday', 'Saturday'],
        characteristics: 'Stability, trust, long-term growth',
        successFactors: ['Reliability', 'Trust', 'Steady growth'],
        nameGuidance: 'Choose names with Earth/Water elements for stability'
    },
    
    'retail': {
        favorableElements: ['Air', 'Earth'],
        favorableNumbers: [2, 3, 6, 9],
        luckyDays: ['Friday', 'Saturday', 'Sunday'],
        characteristics: 'Customer service, accessibility, variety',
        successFactors: ['Customer focus', 'Location', 'Service quality'],
        nameGuidance: 'Balance communication (Air) with stability (Earth)'
    },
    
    'manufacturing': {
        favorableElements: ['Earth', 'Fire'],
        favorableNumbers: [4, 6, 8],
        luckyDays: ['Tuesday', 'Saturday'],
        characteristics: 'Production, quality, efficiency',
        successFactors: ['Quality', 'Efficiency', 'Reliability'],
        nameGuidance: 'Strong Earth element for stability, Fire for production energy'
    },
    
    'healthcare': {
        favorableElements: ['Water', 'Earth'],
        favorableNumbers: [2, 6, 9],
        luckyDays: ['Monday', 'Thursday'],
        characteristics: 'Healing, care, service to humanity',
        successFactors: ['Trust', 'Expertise', 'Compassion'],
        nameGuidance: 'Water element for healing, Earth for reliability'
    },
    
    'education': {
        favorableElements: ['Air', 'Water'],
        favorableNumbers: [3, 5, 7, 9],
        luckyDays: ['Wednesday', 'Thursday'],
        characteristics: 'Knowledge, growth, enlightenment',
        successFactors: ['Expertise', 'Innovation', 'Student success'],
        nameGuidance: 'Air for communication, Water for wisdom and flow'
    },
    
    'construction': {
        favorableElements: ['Earth'],
        favorableNumbers: [4, 8],
        luckyDays: ['Saturday'],
        characteristics: 'Building, stability, long-term projects',
        successFactors: ['Quality', 'Reliability', 'Project management'],
        nameGuidance: 'Strong Earth element for stability and foundation'
    },
    
    'hospitality': {
        favorableElements: ['Water', 'Air'],
        favorableNumbers: [2, 3, 6],
        luckyDays: ['Friday', 'Sunday'],
        characteristics: 'Service, comfort, experience',
        successFactors: ['Service quality', 'Customer experience', 'Location'],
        nameGuidance: 'Water for hospitality, Air for communication'
    }
};

// Success Timing Recommendations
const BUSINESS_TIMING = {
    // Best days for business activities by digit root
    1: {
        launchDay: 'Sunday',
        meetingDays: ['Sunday', 'Tuesday'],
        contractDays: ['Sunday'],
        avoidDays: ['Saturday'],
        monthlyBest: [1, 10, 19, 28],
        yearlyBest: 'Years ending in 1, 3, 5, 7, 9',
        islamicCalendar: 'Start on 1st of Muharram or Rajab'
    },
    
    2: {
        launchDay: 'Monday',
        meetingDays: ['Monday', 'Friday'],
        contractDays: ['Monday', 'Friday'],
        avoidDays: ['Tuesday', 'Sunday'],
        monthlyBest: [2, 11, 20, 29],
        yearlyBest: 'Years ending in 2, 4, 6, 8',
        islamicCalendar: 'Start on 2nd of Safar or Sha\'ban'
    },
    
    3: {
        launchDay: 'Thursday',
        meetingDays: ['Wednesday', 'Thursday'],
        contractDays: ['Thursday'],
        avoidDays: ['Saturday'],
        monthlyBest: [3, 12, 21, 30],
        yearlyBest: 'Years ending in 3, 6, 9',
        islamicCalendar: 'Start on 3rd of Rabi\' al-Awwal'
    },
    
    4: {
        launchDay: 'Saturday',
        meetingDays: ['Saturday', 'Wednesday'],
        contractDays: ['Saturday'],
        avoidDays: ['Sunday', 'Tuesday'],
        monthlyBest: [4, 13, 22, 31],
        yearlyBest: 'Years ending in 4, 8',
        islamicCalendar: 'Start on 4th of Rabi\' al-Thani'
    },
    
    5: {
        launchDay: 'Wednesday',
        meetingDays: ['Wednesday', 'Friday'],
        contractDays: ['Wednesday'],
        avoidDays: ['Saturday'],
        monthlyBest: [5, 14, 23],
        yearlyBest: 'Years ending in 5',
        islamicCalendar: 'Start on 5th of Jumada al-Awwal'
    },
    
    6: {
        launchDay: 'Friday',
        meetingDays: ['Friday', 'Monday'],
        contractDays: ['Friday'],
        avoidDays: ['Tuesday', 'Saturday'],
        monthlyBest: [6, 15, 24],
        yearlyBest: 'Years ending in 6',
        islamicCalendar: 'Start on 6th of Jumada al-Thani'
    },
    
    7: {
        launchDay: 'Monday',
        meetingDays: ['Monday', 'Thursday'],
        contractDays: ['Monday'],
        avoidDays: ['Tuesday', 'Sunday'],
        monthlyBest: [7, 16, 25],
        yearlyBest: 'Years ending in 7',
        islamicCalendar: 'Start on 7th of Rajab (blessed month)'
    },
    
    8: {
        launchDay: 'Saturday',
        meetingDays: ['Saturday', 'Tuesday'],
        contractDays: ['Saturday'],
        avoidDays: ['Sunday', 'Monday'],
        monthlyBest: [8, 17, 26],
        yearlyBest: 'Years ending in 8',
        islamicCalendar: 'Start on 8th of Sha\'ban'
    },
    
    9: {
        launchDay: 'Tuesday',
        meetingDays: ['Tuesday', 'Thursday'],
        contractDays: ['Tuesday'],
        avoidDays: ['Saturday', 'Wednesday'],
        monthlyBest: [9, 18, 27],
        yearlyBest: 'Years ending in 9',
        islamicCalendar: 'Start on 9th of Ramadan (blessed)'
    }
};

// Partnership House Analysis for Business
const BUSINESS_PARTNERSHIP_HOUSES = {
    1: {
        businessType: 'Solo ventures or small partnerships',
        recommendation: 'Good for individual expertise businesses',
        challenges: 'May face initial difficulties, plan for steady growth',
        suitableFor: ['Consulting', 'Freelancing', 'Professional services']
    },
    
    2: {
        businessType: 'Trade and commerce',
        recommendation: 'Excellent for businesses involving money flow',
        challenges: 'Ensure ethical practices, may face family business issues',
        suitableFor: ['Import/Export', 'Trading', 'Finance', 'Retail']
    },
    
    3: {
        businessType: 'Avoid business partnerships',
        recommendation: 'Better as sole proprietorship',
        challenges: 'Partnership conflicts, family interference in business',
        suitableFor: ['Individual ventures', 'Creative work', 'Consulting']
    },
    
    4: {
        businessType: 'Excellent for partnerships',
        recommendation: 'Great for legitimate business with good profits',
        challenges: 'Possible relationship issues among partners after 5 years',
        suitableFor: ['Professional partnerships', 'Clean business', 'Service industry']
    },
    
    5: {
        businessType: 'Good for public-facing businesses',
        recommendation: 'Excellent for businesses serving the public',
        challenges: 'May face challenges if serving only private clients',
        suitableFor: ['Public services', 'Government contracts', 'Media', 'Politics']
    },
    
    6: {
        businessType: 'Challenging for business',
        recommendation: 'Avoid major business ventures',
        challenges: 'Potential for losses and misfortune',
        suitableFor: ['Small services', 'Low-risk ventures', 'Charity work']
    },
    
    7: {
        businessType: 'Perfect for all business types',
        recommendation: 'Most favorable for success and harmony',
        challenges: 'None - this is the most blessed combination',
        suitableFor: ['All business types', 'Partnerships', 'Large ventures']
    },
    
    8: {
        businessType: 'Good for knowledge-based business',
        recommendation: 'Excellent for educational and consultancy businesses',
        challenges: 'May struggle in pure commercial ventures',
        suitableFor: ['Education', 'Consulting', 'Research', 'Advisory services']
    },
    
    9: {
        businessType: 'Avoid business partnerships',
        recommendation: 'High risk of failure and losses',
        challenges: 'Potential for complete business failure',
        suitableFor: ['Individual work', 'Employment rather than business']
    }
};

module.exports = {
    BUSINESS_SUCCESS_INDICATORS,
    INDUSTRY_ANALYSIS,
    BUSINESS_TIMING,
    BUSINESS_PARTNERSHIP_HOUSES
};