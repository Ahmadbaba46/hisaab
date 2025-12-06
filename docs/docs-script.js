// Documentation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCodeCopy();
    initializeScrollSpy();
    initializeSearchFunctionality();
    initializeMobileMenu();
});

// Navigation Management
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Handle initial hash
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}

// Code Copy Functionality
function initializeCodeCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            copyCode(this);
        });
    });
}

function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code');
    const text = code.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#059669';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#d4af37';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Scroll Spy for Navigation
function initializeScrollSpy() {
    const sections = document.querySelectorAll('.doc-section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Search Functionality
function initializeSearchFunctionality() {
    // Add search box to sidebar
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="docs-search" placeholder="Search documentation..." class="search-input">
            <div id="search-results" class="search-results"></div>
        </div>
    `;
    
    const sidebarHeader = document.querySelector('.sidebar-header');
    sidebarHeader.insertAdjacentHTML('afterend', searchHTML);
    
    // Add search styles
    const searchStyles = `
        <style>
            .search-container {
                padding: 1rem;
                border-bottom: 1px solid var(--border-color);
            }
            
            .search-input {
                width: 100%;
                padding: 0.75rem;
                border: 2px solid var(--primary-green);
                border-radius: 0.5rem;
                font-size: 0.9rem;
                background: var(--white);
                transition: all 0.2s ease;
            }
            
            .search-input:focus {
                outline: none;
                border-color: var(--primary-gold);
                box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
            }
            
            .search-results {
                max-height: 300px;
                overflow-y: auto;
                background: var(--white);
                border-radius: 0.5rem;
                margin-top: 0.5rem;
                box-shadow: var(--shadow-md);
                display: none;
            }
            
            .search-result {
                padding: 0.75rem;
                border-bottom: 1px solid var(--border-color);
                cursor: pointer;
                transition: background 0.2s ease;
            }
            
            .search-result:hover {
                background: var(--cream);
            }
            
            .search-result:last-child {
                border-bottom: none;
            }
            
            .search-result-title {
                font-weight: 600;
                color: var(--primary-green);
                font-size: 0.9rem;
            }
            
            .search-result-content {
                font-size: 0.8rem;
                color: var(--gray);
                margin-top: 0.25rem;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', searchStyles);
    
    // Search functionality
    const searchInput = document.getElementById('docs-search');
    const searchResults = document.getElementById('search-results');
    
    // Build search index
    const searchIndex = buildSearchIndex();
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchContent(query, searchIndex);
        displaySearchResults(results, searchResults);
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

function buildSearchIndex() {
    const index = [];
    const sections = document.querySelectorAll('.doc-section');
    
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const title = section.querySelector('h2')?.textContent || '';
        const content = section.textContent || '';
        
        // Also index subsections
        const subsections = section.querySelectorAll('h3, h4');
        subsections.forEach(subsection => {
            index.push({
                id: id,
                title: subsection.textContent,
                content: subsection.parentElement.textContent.substring(0, 200),
                type: subsection.tagName.toLowerCase()
            });
        });
        
        index.push({
            id: id,
            title: title,
            content: content.substring(0, 300),
            type: 'section'
        });
    });
    
    return index;
}

function searchContent(query, index) {
    const results = [];
    const queryLower = query.toLowerCase();
    
    index.forEach(item => {
        const titleMatch = item.title.toLowerCase().includes(queryLower);
        const contentMatch = item.content.toLowerCase().includes(queryLower);
        
        if (titleMatch || contentMatch) {
            let score = 0;
            if (titleMatch) score += 10;
            if (contentMatch) score += 1;
            
            results.push({
                ...item,
                score: score
            });
        }
    });
    
    return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<div class="search-result">No results found</div>';
        container.style.display = 'block';
        return;
    }
    
    const resultsHTML = results.map(result => `
        <div class="search-result" onclick="navigateToResult('${result.id}')">
            <div class="search-result-title">${result.title}</div>
            <div class="search-result-content">${result.content.substring(0, 100)}...</div>
        </div>
    `).join('');
    
    container.innerHTML = resultsHTML;
    container.style.display = 'block';
}

function navigateToResult(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update URL
        history.pushState(null, null, '#' + sectionId);
        
        // Update active nav
        const navLinks = document.querySelectorAll('.sidebar-nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
        
        // Hide search results
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('docs-search').value = '';
    }
}

// Mobile Menu
function initializeMobileMenu() {
    // Add mobile menu button
    const mobileMenuHTML = `
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;
    
    document.querySelector('.docs-header').insertAdjacentHTML('afterbegin', mobileMenuHTML);
    
    // Add mobile menu styles
    const mobileStyles = `
        <style>
            .mobile-menu-btn {
                display: none;
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1000;
                background: var(--primary-green);
                border: none;
                border-radius: 0.5rem;
                padding: 0.75rem;
                cursor: pointer;
                flex-direction: column;
                gap: 0.25rem;
            }
            
            .mobile-menu-btn span {
                width: 1.5rem;
                height: 2px;
                background: var(--white);
                border-radius: 1px;
                transition: all 0.3s ease;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(0.25rem, 0.25rem);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(0.25rem, -0.25rem);
            }
            
            @media (max-width: 1024px) {
                .mobile-menu-btn {
                    display: flex;
                }
                
                .docs-header {
                    padding-left: 4rem;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', mobileStyles);
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    sidebar.classList.toggle('open');
    menuBtn.classList.toggle('active');
}

// Interactive Examples
function addInteractiveExamples() {
    // Add interactive calculator to documentation
    const interactiveHTML = `
        <div class="interactive-example">
            <h4>🧮 Try It Yourself</h4>
            <div class="interactive-content">
                <input type="text" id="demo-name" placeholder="Enter Arabic name..." dir="rtl">
                <button onclick="calculateDemo()">Calculate</button>
                <div id="demo-results"></div>
            </div>
        </div>
    `;
    
    // Add to appropriate sections
    const quickStartSection = document.getElementById('quick-start');
    if (quickStartSection) {
        quickStartSection.insertAdjacentHTML('beforeend', interactiveHTML);
    }
    
    // Add styles
    const interactiveStyles = `
        <style>
            .interactive-example {
                background: var(--cream);
                padding: var(--spacing-lg);
                border-radius: var(--radius-lg);
                border: 2px solid var(--primary-gold);
                margin: var(--spacing-lg) 0;
            }
            
            .interactive-content {
                display: flex;
                gap: var(--spacing-sm);
                align-items: center;
                margin-top: var(--spacing-md);
            }
            
            .interactive-content input {
                flex: 1;
                padding: var(--spacing-sm);
                border: 2px solid var(--primary-green);
                border-radius: var(--radius-sm);
                font-family: var(--font-arabic);
            }
            
            .interactive-content button {
                background: var(--primary-green);
                color: var(--white);
                border: none;
                padding: var(--spacing-sm) var(--spacing-md);
                border-radius: var(--radius-sm);
                cursor: pointer;
            }
            
            #demo-results {
                margin-top: var(--spacing-md);
                padding: var(--spacing-md);
                background: var(--white);
                border-radius: var(--radius-sm);
                font-family: var(--font-code);
                font-size: 0.9rem;
                white-space: pre-wrap;
                display: none;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', interactiveStyles);
}

function calculateDemo() {
    const nameInput = document.getElementById('demo-name');
    const resultsDiv = document.getElementById('demo-results');
    const name = nameInput.value.trim();
    
    if (!name) {
        resultsDiv.textContent = 'Please enter an Arabic name';
        resultsDiv.style.display = 'block';
        return;
    }
    
    // Simple Abjad calculation for demo
    const abjadMap = {
        'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1,
        'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'ة': 5,
        'و': 6, 'ز': 7, 'ح': 8, 'ط': 9, 'ي': 10,
        'ك': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60,
        'ع': 70, 'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200,
        'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700,
        'ض': 800, 'ظ': 900, 'غ': 1000
    };
    
    let total = 0;
    let breakdown = [];
    
    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        const value = abjadMap[letter];
        if (value) {
            total += value;
            breakdown.push(`${letter} = ${value}`);
        }
    }
    
    const digitRoot = calculateDigitRoot(total);
    
    const result = `Name: ${name}
Total Value: ${total}
Digit Root: ${digitRoot}
Breakdown: ${breakdown.join(', ')}`;
    
    resultsDiv.textContent = result;
    resultsDiv.style.display = 'block';
}

function calculateDigitRoot(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

// Table of Contents Generator
function generateTableOfContents() {
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>📑 Table of Contents</h3>';
    
    const tocList = document.createElement('ul');
    const sections = document.querySelectorAll('.doc-section[id]');
    
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const title = section.querySelector('h2')?.textContent || '';
        
        if (title) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#${id}">${title}</a>`;
            tocList.appendChild(listItem);
        }
    });
    
    toc.appendChild(tocList);
    
    // Add TOC styles
    const tocStyles = `
        <style>
            .table-of-contents {
                background: var(--white);
                padding: var(--spacing-lg);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-md);
                margin: var(--spacing-lg) 0;
                border-left: 4px solid var(--primary-gold);
            }
            
            .table-of-contents h3 {
                color: var(--primary-green);
                margin-bottom: var(--spacing-md);
            }
            
            .table-of-contents ul {
                list-style: none;
                padding: 0;
            }
            
            .table-of-contents li {
                margin-bottom: var(--spacing-xs);
            }
            
            .table-of-contents a {
                color: var(--gray);
                text-decoration: none;
                transition: color 0.2s ease;
            }
            
            .table-of-contents a:hover {
                color: var(--primary-green);
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', tocStyles);
    
    // Insert TOC after overview section
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
        overviewSection.insertAdjacentElement('afterend', toc);
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addInteractiveExamples();
        generateTableOfContents();
    }, 500);
});

// Print functionality
function initializePrintFeature() {
    const printButton = `
        <button onclick="window.print()" class="print-btn">
            🖨️ Print Documentation
        </button>
    `;
    
    document.querySelector('.docs-header .header-content').insertAdjacentHTML('beforeend', printButton);
    
    const printStyles = `
        <style>
            .print-btn {
                background: var(--primary-blue);
                color: var(--white);
                border: none;
                padding: var(--spacing-sm) var(--spacing-md);
                border-radius: var(--radius-sm);
                cursor: pointer;
                margin-top: var(--spacing-md);
                font-size: 0.9rem;
            }
            
            .print-btn:hover {
                background: var(--primary-green);
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', printStyles);
}

// Initialize print feature
document.addEventListener('DOMContentLoaded', function() {
    initializePrintFeature();
});