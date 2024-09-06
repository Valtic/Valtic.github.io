lucide.createIcons();

const html = document.querySelector('html');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const notificationsButton = document.getElementById('notifications-button');
const notificationBadge = document.getElementById('notification-badge');
const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');
const reportsDropdown = document.getElementById('reportsDropdown');
const reportsSubmenu = document.getElementById('reportsSubmenu');
const mainContent = document.getElementById('main-content');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebar.classList.toggle('slide-in');
    sidebar.classList.toggle('slide-out');
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Dark mode toggle
function toggleDarkMode() {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

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
    // Clear main content
    mainContent.innerHTML = '';

    // Load page content based on pageId
    switch (pageId) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'users':
            loadUsers();
            break;
        case 'settings':
            loadSettings();
            break;
        case 'profile':
            loadProfile();
            break;
        case 'login':
            loadLogin();
            break;
        default:
            mainContent.innerHTML = '<p>Page not found</p>';
    }

    // Close sidebar on mobile after page navigation
    if (window.innerWidth < 1024) {
        toggleSidebar();
    }
}

function loadDashboard() {
    mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Total Users</h3>
                <p class="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Revenue</h3>
                <p class="text-3xl font-bold text-gray-900 dark:text-white">$45,678</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Active Projects</h3>
                <p class="text-3xl font-bold text-gray-900 dark:text-white">27</p>
            </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Recent Activity</h3>
            <ul class="space-y-2">
                <li class="text-gray-700 dark:text-gray-300">User John Doe logged in</li>
                <li class="text-gray-700 dark:text-gray-300">New project "Website Redesign" created</li>
                <li class="text-gray-700 dark:text-gray-300">Task "Update user interface" completed</li>
            </ul>
        </div>
    `;
}

function loadUsers() {
    mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">User Management</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">John Doe</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">john@example.com</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Admin</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Jane Smith</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">jane@example.com</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">User</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function loadSettings() {
    mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Settings</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <form>
                <div class="mb-4">
                    <label for="site-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Site Name</label>
                    <input type="text" id="site-name" name="site-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
                <div class="mb-4">
                    <label for="language" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
                    <select id="language" name="language" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Notifications</label>
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" checked>
                            <span class="ml-2 text-gray-700 dark:text-gray-300">Receive email notifications</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Settings</button>
                </div>
            </form>
        </div>
    `;
}

function loadProfile() {
    mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">User Profile</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <form>
                <div class="mb-4">
                    <label for="full-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input type="text" id="full-name" name="full-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
                <div class="mb-4">
                    <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                    <textarea id="bio" name="bio" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                <div>
                    <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update Profile</button>
                </div>
            </form>
        </div>
    `;
}

function loadLogin() {
    mainContent.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Email address">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Password">
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function loadReport(reportId) {
    mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Report: ${reportId}</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <p class="text-gray-700 dark:text-gray-300">This is the content for ${reportId}.</p>
        </div>
    `;
}

function logout() {
    // Here you would typically clear any user session data
    showPage('login');
}

// Initialize the dashboard
showPage('dashboard');

// Responsive design enhancements
function handleResize() {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('-translate-x-full');
    } else {
        sidebar.classList.add('-translate-x-full');
    }
}

window.addEventListener('resize', handleResize);
handleResize();
