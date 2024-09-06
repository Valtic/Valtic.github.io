lucide.createIcons();

const html = document.querySelector('html');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeSidebar = document.getElementById('closeSidebar');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const notificationsButton = document.getElementById('notifications-button');
const notificationBadge = document.getElementById('notification-badge');
const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');
const reportsDropdown = document.getElementById('reportsDropdown');
const reportsSubmenu = document.getElementById('reportsSubmenu');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    backdrop.classList.toggle('hidden');
    if (!sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('slide-in');
        sidebar.classList.remove('slide-out');
    } else {
        sidebar.classList.add('slide-out');
        sidebar.classList.remove('slide-in');
    }
}

sidebarToggle.addEventListener('click', toggleSidebar);
closeSidebar.addEventListener('click', toggleSidebar);
backdrop.addEventListener('click', toggleSidebar);

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Search functionality
const sampleSearchResults = ['Dashboard', 'Reports', 'Users', 'Settings', 'Help'];

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length > 0) {
        const filteredResults = sampleSearchResults.filter(result => 
            result.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(filteredResults);
    } else {
        searchResults.classList.add('hidden');
    }
});

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length > 0) {
        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result;
            div.className = 'px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer';
            searchResults.appendChild(div);
        });
        searchResults.classList.remove('hidden');
    } else {
        searchResults.classList.add('hidden');
    }
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
    }
});

// Notifications functionality
let notificationCount = 0;

notificationsButton.addEventListener('click', () => {
    notificationCount++;
    notificationBadge.textContent = notificationCount;
    // Here you would typically show a notifications panel
    alert(`You have ${notificationCount} new notification(s)!`);
});

// User menu functionality
userMenuButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
});

// Close user menu when clicking outside
document.addEventListener('click', (e) => {
    if (!userMenuButton.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.add('hidden');
    }
});

// Reports submenu functionality
reportsDropdown.addEventListener('click', () => {
    reportsSubmenu.classList.toggle('hidden');
    reportsDropdown.querySelector('i[data-lucide="chevron-down"]').classList.toggle('rotate-180');
});

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('main > div').forEach(page => page.classList.add('hidden'));
    document.getElementById(`${pageId}-page`).classList.remove('hidden');
}

// Form validation and submission
function updateProfile(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        // Here you would typically send the data to a server
        alert('Profile updated successfully!');
    } else {
        form.reportValidity();
    }
    return false;
}

function login(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        // Here you would typically send the login request to a server
        localStorage.setItem('isLoggedIn', 'true');
        showPage('dashboard');
    } else {
        form.reportValidity();
    }
    return false;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    showPage('login');
}

// Check login status
if (localStorage.getItem('isLoggedIn') === 'true') {
    showPage('dashboard');
} else {
    showPage('login');
}

// Report content loading
function loadReport(reportId) {
    showPage('report');
    const reportTitle = document.getElementById('report-title');
    const reportContent = document.getElementById('report-content');
    
    // Simulated report data
    const reports = {
        report1: { title: 'Monthly Sales Report', content: 'This is the content for the Monthly Sales Report.' },
        report2: { title: 'Customer Satisfaction Survey', content: 'This is the content for the Customer Satisfaction Survey.' },
        report3: { title: 'Inventory Status', content: 'This is the content for the Inventory Status report.' },
        report4: { title: 'Financial Overview', content: 'This is the content for the Financial Overview report.' }
    };

    const report = reports[reportId];
    reportTitle.textContent = report.title;
    reportContent.innerHTML = `<p class="text-gray-700 dark:text-gray-300">${report.content}</p>`;
}

// User management functionality
function loadUsers() {
    const usersTableBody = document.getElementById('users-table-body');
    usersTableBody.innerHTML = '';

    // Simulated user data
    const users = [
        { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
        { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
    ];

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900 dark:text-white">${user.name}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500 dark:text-gray-300">${user.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">${user.role}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">Edit</a>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Settings functionality
function updateSettings(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        // Here you would typically send the data to a server
        alert('Settings updated successfully!');
    } else {
        form.reportValidity();
    }
    return false;
}

// Responsive design enhancements
function handleResize() {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.add('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// Load users when the users page is shown
document.querySelector('a[onclick="showPage(\'users\')"]').addEventListener('click', loadUsers);
