Log in
Sign up for free
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patient Records Management System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <div class="logo">🏥 PatientCare</div>
        <div class="header-text">Patient Records Management System</div>
    </header>

    <main class="container">

        <section class="welcome">
            <div>
                <h1>Patient Dashboard</h1>
                <p>Manage and maintain patient records efficiently.</p>
            </div>
            <button id="exportBtn" class="export-btn">
                Export CSV
            </button>
        </section>

        <section class="stats">
            <div class="stat-card">
                <h3>Total Patients</h3>
                <p id="totalPatients">0</p>
            </div>
            <div class="stat-card">
                <h3>Male Patients</h3>
                <p id="malePatients">0</p>
            </div>
            <div class="stat-card">
                <h3>Female Patients</h3>
                <p id="femalePatients">0</p>
            </div>
        </section>

        <section class="form-section">
            <h2 id="formTitle">Add New Patient</h2>

            <form id="patientForm">

                <input type="hidden" id="patientId">

                <div class="form-grid">

                    <div class="form-group">
                        <label for="name">Patient Name</label>
                        <input type="text" id="name"
                               placeholder="Enter patient name" required>
                    </div>

                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" id="age"
                               placeholder="Enter age" min="0" max="120" required>
                    </div>

                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select id="gender" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone"
                               placeholder="Enter phone number"
                               pattern="[0-9]{10}" maxlength="10" required>
                    </div>

                    <div class="form-group">
                        <label for="date">Appointment Date</label>
                        <input type="date" id="date" required>
                    </div>

                    <div class="form-group">
                        <label for="blood">Blood Group</label>
                        <select id="blood" required>
                            <option value="">Select Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>

                    <div class="form-group full-width">
                        <label for="diagnosis">Diagnosis</label>
                        <input type="text" id="diagnosis"
                               placeholder="Enter diagnosis" required>
                    </div>

                    <div class="form-group full-width">
                        <label for="notes">Additional Notes</label>
                        <textarea id="notes"
                                  placeholder="Enter additional notes"
                                  rows="3"></textarea>
                    </div>

                </div>

                <div class="form-buttons">
                    <button type="submit" id="submitBtn">
                        Add Patient
                    </button>
                    <button type="reset" class="reset-btn" id="resetBtn">
                        Clear
                    </button>
                </div>

            </form>
        </section>

        <section class="records-section">
            <div class="records-header">
                <h2>Patient Records</h2>
                <input type="search" id="searchInput"
                       placeholder="Search by patient name or ID...">
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Appointment</th>
                            <th>Blood Group</th>
                            <th>Diagnosis</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody id="patientTable">
                        <!-- Patient records appear here -->
                    </tbody>
                </table>
            </div>

            <p id="emptyMessage" class="empty-message">
                No patient records found.
            </p>
        </section>

    </main>

    <footer>
        <p>© 2026 PatientCare | Patient Records Management System</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
for these i want like a dashboard

You can transform your existing Patient Records Management System into a modern, professional Hospital Admin Dashboard with a sidebar, summary cards, patient registration form, patient records table, search, edit/delete actions, and CSV export.

I recommend the following dashboard layout:

PatientCare – Dashboard Design
PatientCare
Admin Panel
MAIN MENU

Dashboard

Patients

Add Patient

Appointments

Reports

Settings

Dashboard Overview
Welcome back, Admin!

Total Patients

1,250
Male Patients

680
Female Patients

540
Appointments

85
Recent Patient Records

Patient Name

Status

Patient 001

Active
Patient 002

Pending
Patient 003

Active
Illustrative dashboard preview; sample figures are placeholders.

Recommended project structure
Keep your existing HTML fields and functionality, but organize the project like this:


text
PatientCare/
│
├── index.html
├── style.css
└── script.js
Features to include
Sidebar navigation – Dashboard, Patients, Add Patient, Appointments, Reports and Settings.

Dashboard statistics – Total patients, male patients, female patients and appointments.

Patient registration – Your existing form.

Patient records – Search, edit and delete patient records.

CSV export – Download patient records.

Charts and analytics – Gender distribution and patient statistics.

Responsive design – Works on desktop, tablet and mobile.

One important recommendation: Since this application stores patient information, use secure authentication, access controls and protected database storage rather than relying on browser local storage for real patient records.

Would you like me to convert your existing HTML into a complete working dashboard with HTML, CSS and JavaScript, keeping all your current patient registration features?


yes convert and give me the full code

I'll convert your existing PatientCare project into a complete, modern hospital admin dashboard using HTML, CSS and JavaScript.

The new version will include:

Professional sidebar navigation.

Dashboard with patient statistics.

Gender distribution chart.

Add, edit and delete patient records.

Search patients by name or ID.

CSV export.

Appointment management section.

Responsive design for mobile and desktop.

Browser-based data persistence using local storage for demonstration.

1. Project structure
Create a folder named PatientCare and create these three files:


text
PatientCare/
│
├── index.html
├── style.css
└── script.js
2. index.html
Copy this complete code into index.html.

3. style.css
Copy this into style.css.


css

:root {
    --primary: #2878d0;
    --primary-dark: #1762b5;
    --sidebar: #172b4d;
    --background: #f4f7fb;
    --text: #25364b;
    --muted: #8190a5;
    --border: #e7edf4;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--background);
    color: var(--text);
}

button, input, select, textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}

.app {
    display: flex;
    min-height: 100vh;
}

/* SIDEBAR */

.sidebar {
    width: 255px;
    min-width: 255px;
    background: var(--sidebar);
    color: white;
    padding: 28px 18px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: 0.3s;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 23px;
    font-weight: 800;
    padding: 0 12px;
    margin-bottom: 45px;
}

.logo-icon {
    background: #2878d0;
    border-radius: 10px;
    padding: 7px 11px;
    color: white;
}

.logo-light {
    color: #62b5ff;
}

.menu-label {
    color: #879bb7;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin: 0 12px 15px;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-link {
    text-decoration: none;
    color: #c4d0e0;
    padding: 14px 15px;
    display: flex;
    align-items: center;
    gap: 13px;
    border-radius: 9px;
    font-size: 13px;
    font-weight: 500;
    transition: 0.2s;
}

.nav-link span {
    font-size: 20px;
    width: 22px;
    text-align: center;
}

.nav-link:hover,
.nav-link.active {
    background: #2878d0;
    color: white;
}

.settings-label {
    margin-top: 38px;
}

.sidebar-bottom {
    margin-top: auto;
    padding-top: 30px;
}

.admin-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #223c61;
    border-radius: 12px;
    padding: 13px;
}

.admin-avatar,
.profile-avatar {
    width: 38px;
    height: 38px;
    background: #64a7ee;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: white;
    font-weight: 700;
}

.admin-card h4,
.profile h4 {
    font-size: 12px;
}

.admin-card p,
.profile p {
    font-size: 10px;
    color: #aabbd0;
    margin-top: 4px;
}

/* MAIN CONTENT */

.main-content {
    flex: 1;
    min-width: 0;
    padding: 0 32px;
}

.topbar {
    min-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    gap: 15px;
}

.topbar-left,
.topbar-right {
    display: flex;
    align-items: center;
    gap: 15px;
}

.topbar h2 {
    font-size: 20px;
    font-weight: 700;
}

.topbar p {
    font-size: 11px;
    color: var(--muted);
    margin-top: 5px;
}

.topbar-right {
    gap: 25px;
}

.date-display {
    font-size: 12px;
    color: var(--muted);
}

.profile {
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile h4 {
    color: var(--text);
}

.profile p {
    color: var(--muted);
}

.menu-toggle {
    display: none;
    border: none;
    background: transparent;
    font-size: 23px;
    color: var(--text);
}

/* PAGE SECTIONS */

.page {
    display: none;
    padding-top: 27px;
    padding-bottom: 30px;
}

.page.active {
    display: block;
}

.welcome-banner {
    background: linear-gradient(110deg, #216fc2, #4196e6);
    border-radius: 14px;
    padding: 28px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: white;
    margin-bottom: 25px;
}

.welcome-banner h1 {
    font-size: 23px;
    margin-bottom: 9px;
}

.welcome-banner p {
    font-size: 12px;
    color: #e3efff;
}

/* BUTTONS */

.primary-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 12px 19px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    transition: 0.2s;
}

.welcome-banner .primary-btn {
    background: white;
    color: var(--primary);
}

.primary-btn:hover {
    background: var(--primary-dark);
    color: white;
}

.outline-btn {
    background: white;
    color: var(--primary);
    border: 1px solid #cbdff5;
    border-radius: 7px;
    padding: 10px 14px;
    font-size: 11px;
}

.export-btn {
    background: #e8f3ff;
    color: var(--primary);
    border: 1px solid #cfe3fa;
    padding: 11px 16px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
}

.reset-btn,
.cancel-btn {
    background: #f0f3f7;
    color: #526276;
    border: none;
    padding: 12px 19px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
}

/* STATISTICS */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 24px;
}

.stat-card {
    background: white;
    border-radius: 12px;
    padding: 22px;
    border: 1px solid var(--border);
    min-width: 0;
}

.stat-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.stat-card p {
    font-size: 12px;
    color: #718198;
    font-weight: 500;
    margin-bottom: 12px;
}

.stat-card h2 {
    font-size: 28px;
    font-weight: 800;
    color: #243b57;
}

.stat-icon {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    font-size: 22px;
}

.blue .stat-icon {
    background: #e5f1ff;
    color: #2878d0;
}

.green .stat-icon {
    background: #e3f8ef;
    color: #1eac73;
}

.purple .stat-icon {
    background: #f3eaff;
    color: #9253d1;
}

.orange .stat-icon {
    background: #fff1df;
    color: #e99a36;
}

.stat-description {
    font-size: 10px;
    color: #9aa7b7;
    display: block;
    margin-top: 15px;
}

/* PANELS */

.dashboard-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 20px;
    margin-bottom: 23px;
}

.panel {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 23px;
    margin-bottom: 22px;
    min-width: 0;
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 23px;
}

.panel-header h3,
.panel h3 {
    font-size: 15px;
    color: #293e58;
}

.panel-header p {
    font-size: 11px;
    color: var(--muted);
    margin-top: 6px;
}

.chart-container {
    height: 230px;
    position: relative;
    max-width: 100%;
}

.summary-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 0;
    border-bottom: 1px solid #f0f2f5;
    font-size: 12px;
    color: #65758b;
}

.summary-item strong {
    margin-left: auto;
    color: #2d4059;
}

.summary-color {
    width: 11px;
    height: 11px;
    border-radius: 3px;
}

.male-color {
    background: #3287dc;
}

.female-color {
    background: #a36cdd;
}

.other-color {
    background: #e8a344;
}

.summary-total {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    font-size: 13px;
    font-weight: 700;
}

/* TABLES */

.table-wrapper {
    width: 100%;
    overflow-x: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
    min-width: 650px;
}

th {
    text-align: left;
    background: #f6f8fb;
    padding: 14px 12px;
    color: #78879a;
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
}

td {
    padding: 15px 12px;
    border-bottom: 1px solid #edf1f5;
    font-size: 11px;
    color: #53647b;
    white-space: nowrap;
}

td:first-child {
    color: #2878d0;
    font-weight: 600;
}

tbody tr:hover {
    background: #f9fbfe;
}

.action-btn {
    border: none;
    padding: 6px 9px;
    border-radius: 5px;
    font-size: 10px;
    margin-right: 4px;
}

.edit-btn {
    background: #e7f2ff;
    color: #2878d0;
}

.delete-btn {
    background: #fff0f0;
    color: #e14e4e;
}

.empty-message {
    text-align: center;
    color: #9aa7b7;
    font-size: 12px;
    padding: 25px;
    display: none;
}

.status {
    padding: 5px 9px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 600;
}

.status-upcoming {
    background: #e4f3ff;
    color: #2878d0;
}

.status-today {
    background: #e2f7eb;
    color: #15955c;
}

.status-past {
    background: #f0f2f5;
    color: #78879a;
}

/* RECORDS TOOLBAR */

.page-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    gap: 15px;
}

.page-toolbar h2 {
    font-size: 20px;
    margin-bottom: 7px;
}

.page-toolbar p {
    font-size: 11px;
    color: var(--muted);
}

.records-toolbar {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 20px;
}

.records-toolbar input {
    max-width: 350px;
    width: 100%;
    border: 1px solid var(--border);
    padding: 11px 13px;
    border-radius: 7px;
    outline: none;
    font-size: 12px;
}

/* FORMS */

.form-panel {
    padding: 30px;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 23px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.form-group label {
    font-size: 12px;
    color: #4b5e76;
    font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    border: 1px solid #dce4ed;
    border-radius: 7px;
    padding: 12px 13px;
    font-size: 12px;
    color: #33465e;
    outline: none;
    background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus,
.records-toolbar input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px #2878d018;
}

.form-group textarea {
    resize: vertical;
}

.full-width {
    grid-column: 1 / -1;
}

.form-buttons {
    display: flex;
    gap: 12px;
    margin-top: 28px;
    flex-wrap: wrap;
}

/* REPORTS */

.report-note {
    font-size: 11px;
    color: var(--muted);
    margin-top: 12px;
    line-height: 1.6;
}

.report-summary {
    padding: 20px 0 0;
    color: #53647b;
    font-size: 13px;
    line-height: 2;
}

.settings-panel {
    max-width: 650px;
}

.settings-panel h3 {
    margin-bottom: 22px;
}

.settings-panel .form-group {
    margin-bottom: 20px;
}

.footer {
    text-align: center;
    padding: 25px 0;
    color: #9aa7b7;
    font-size: 10px;
    border-top: 1px solid var(--border);
}

/* TOAST */

.toast {
    position: fixed;
    right: 25px;
    bottom: 25px;
    background: #1b3658;
    color: white;
    padding: 14px 22px;
    border-radius: 8px;
    font-size: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s;
    pointer-events: none;
    z-index: 100;
}

.toast.show {
    opacity: 1;
    transform: translateY(0);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1100px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .main-content {
        padding: 0 20px;
    }
}

@media (max-width: 800px) {
    .sidebar {
        position: fixed;
        left: -260px;
        top: 0;
        z-index: 50;
        height: 100vh;
        overflow-y: auto;
    }

    .sidebar.open {
        left: 0;
    }

    .menu-toggle {
        display: block;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .topbar-right .date-display {
        display: none;
    }
}

@media (max-width: 550px) {
    .main-content {
        padding: 0 13px;
    }

    .topbar {
        min-height: 75px;
    }

    .topbar h2 {
        font-size: 16px;
    }

    .topbar p {
        font-size: 9px;
    }

    .profile {
        gap: 5px;
    }

    .profile h4 {
        font-size: 10px;
    }

    .profile p {
        display: none;
    }

    .profile-avatar {
        width: 32px;
        height: 32px;
    }

    .welcome-banner {
        flex-direction: column;
        align-items: flex-start;
        padding: 22px;
    }

    .welcome-banner h1 {
        font-size: 19px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .stat-card {
        padding: 15px;
    }

    .stat-card h2 {
        font-size: 23px;
    }

    .stat-card p {
        font-size: 10px;
    }

    .stat-icon {
        width: 33px;
        height: 33px;
        font-size: 17px;
    }

    .page-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .records-toolbar {
        flex-direction: column;
    }

    .records-toolbar input {
        max-width: none;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .full-width {
        grid-column: auto;
    }

    .panel {
        padding: 15px;
    }

    .form-panel {
        padding: 18px;
    }

    .chart-container {
        height: 200px;
    }

    .toast {
        left: 15px;
        right: 15px;
        text-align: center;
    }
}
4. script.js
This JavaScript controls the entire dashboard, including patient registration, editing, deleting, searching, statistics, charts, appointments and CSV downloads.

5. How to run the project
Open Visual Studio Code.

Open your PatientCare folder.

Create the three files: index.html, style.css, and script.js.

Paste the respective code into each file.

Install the Live Server extension in VS Code.

Right-click index.html.

Select Open with Live Server.

Your dashboard will open in your browser.

6. Dashboard functionality
Feature

Status

Dashboard overview

Ready

Total patient statistics

Ready

Gender distribution chart

Ready

Add patient

Ready

Edit patient

Ready

Delete patient

Ready

Search patient

Ready

CSV export

Ready

Appointment overview

Ready

Reports

Ready

Mobile responsive layout

Ready

Important: This is a frontend demonstration. Patient records are stored in browser Local Storage, not a secure hospital database. Do not enter real patient information. For actual hospital use, you'll need a secure backend, database, authentication and access controls.

Next step: Once you have tested this version, you can connect it to a MySQL database using PHP or Node.js so patient records can be securely stored and accessed across multiple computers.


give me the complete code for patient management system

Below is a complete Patient Management System built using HTML, CSS and JavaScript. It includes a professional hospital dashboard and all the main patient management operations.

This version includes:

Dashboard with total patients, male patients, female patients and appointments.

Patient registration form.

View all patient records.

Edit and delete patient details.

Search by patient name or ID.

Patient appointment management.

Gender distribution chart.

CSV export.

Browser Local Storage.

Responsive design for mobile and desktop.

1. Project folder structure
Create a folder named PatientManagementSystem.


text
PatientManagementSystem/
│
├── index.html
├── style.css
└── script.js
2. index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PatientCare - Management System</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

<div class="app">

    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">

        <div class="logo">
            <span class="logo-icon">✚</span>
            Patient<span>Care</span>
        </div>

        <p class="menu-title">MAIN MENU</p>

        <nav>
            <a href="#" class="nav-link active" data-page="dashboard">▦ Dashboard</a>
            <a href="#" class="nav-link" data-page="patients">♙ Patient Records</a>
            <a href="#" class="nav-link" data-page="add-patient">⊕ Add Patient</a>
            <a href="#" class="nav-link" data-page="appointments">▣ Appointments</a>
            <a href="#" class="nav-link" data-page="reports">▤ Reports</a>
        </nav>

        <p class="menu-title settings-title">PREFERENCES</p>

        <nav>
            <a href="#" class="nav-link" data-page="settings">⚙ Settings</a>
        </nav>

        <div class="sidebar-profile">
            <div class="avatar">A</div>
            <div>
                <h4>Administrator</h4>
                <p>Hospital Admin</p>
            </div>
        </div>

    </aside>

    <!-- MAIN -->
    <main class="main">

        <!-- HEADER -->
        <header class="header">

            <div class="header-left">
                <button id="menuToggle">☰</button>
                <div>
                    <h2 id="pageTitle">Dashboard</h2>
                    <p>Patient Records Management System</p>
                </div>
            </div>

            <div class="header-right">
                <span id="currentDate"></span>
                <div class="avatar">A</div>
            </div>

        </header>

        <!-- DASHBOARD -->
        <section class="page active" id="dashboard">

            <div class="welcome">
                <div>
                    <h1>Welcome Back, Admin! 👋</h1>
                    <p>Manage your hospital patient records efficiently.</p>
                </div>

                <button class="btn-primary" onclick="showPage('add-patient')">
                    + Add New Patient
                </button>
            </div>

            <!-- STAT CARDS -->
            <div class="stats">

                <div class="stat-card blue">
                    <div class="stat-icon">♙</div>
                    <p>Total Patients</p>
                    <h2 id="totalPatients">0</h2>
                    <small>Registered patients</small>
                </div>

                <div class="stat-card green">
                    <div class="stat-icon">♂</div>
                    <p>Male Patients</p>
                    <h2 id="malePatients">0</h2>
                    <small>Male registrations</small>
                </div>

                <div class="stat-card purple">
                    <div class="stat-icon">♀</div>
                    <p>Female Patients</p>
                    <h2 id="femalePatients">0</h2>
                    <small>Female registrations</small>
                </div>

                <div class="stat-card orange">
                    <div class="stat-icon">▣</div>
                    <p>Appointments</p>
                    <h2 id="appointmentCount">0</h2>
                    <small>Upcoming appointments</small>
                </div>

            </div>

            <!-- CHART AND SUMMARY -->
            <div class="dashboard-grid">

                <div class="card">
                    <h3>Patient Gender Overview</h3>
                    <p class="subtitle">Patient distribution</p>
                    <div class="chart-box">
                        <canvas id="genderChart"></canvas>
                    </div>
                </div>

                <div class="card">
                    <h3>Patient Summary</h3>
                    <p class="subtitle">Registration statistics</p>

                    <div class="summary-row">
                        <span>Male Patients</span>
                        <strong id="summaryMale">0</strong>
                    </div>

                    <div class="summary-row">
                        <span>Female Patients</span>
                        <strong id="summaryFemale">0</strong>
                    </div>

                    <div class="summary-row">
                        <span>Other Patients</span>
                        <strong id="summaryOther">0</strong>
                    </div>

                    <div class="summary-total">
                        <span>Total Patients</span>
                        <strong id="summaryTotal">0</strong>
                    </div>
                </div>

            </div>

            <!-- RECENT PATIENTS -->
            <div class="card">
                <div class="card-heading">
                    <div>
                        <h3>Recent Patients</h3>
                        <p class="subtitle">Recently registered patients</p>
                    </div>

                    <button class="btn-outline" onclick="showPage('patients')">
                        View All →
                    </button>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Appointment</th>
                            </tr>
                        </thead>
                        <tbody id="recentTable"></tbody>
                    </table>
                </div>

                <p id="recentEmpty" class="empty">No patient records found.</p>
            </div>

        </section>

        <!-- PATIENT RECORDS -->
        <section class="page" id="patients">

            <div class="page-heading">
                <div>
                    <h2>Patient Records</h2>
                    <p>View, search, update and delete patient records.</p>
                </div>

                <button class="btn-primary" onclick="showPage('add-patient')">
                    + Add Patient
                </button>
            </div>

            <div class="card">

                <div class="toolbar">
                    <input type="search" id="searchInput"
                           placeholder="Search by patient name or ID...">

                    <button class="btn-export" onclick="exportCSV()">
                        ↓ Export CSV
                    </button>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Appointment</th>
                                <th>Blood Group</th>
                                <th>Diagnosis</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="patientTable"></tbody>
                    </table>
                </div>

                <p id="emptyMessage" class="empty">
                    No patient records found.
                </p>

            </div>

        </section>

        <!-- ADD / EDIT PATIENT -->
        <section class="page" id="add-patient">

            <div class="page-heading">
                <div>
                    <h2 id="formTitle">Add New Patient</h2>
                    <p>Enter patient information below.</p>
                </div>
            </div>

            <div class="card form-card">

                <form id="patientForm">

                    <input type="hidden" id="patientId">

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Patient Name *</label>
                            <input type="text" id="name"
                                   placeholder="Enter patient name"
                                   maxlength="100" required>
                        </div>

                        <div class="form-group">
                            <label>Age *</label>
                            <input type="number" id="age"
                                   placeholder="Enter age"
                                   min="0" max="120" required>
                        </div>

                        <div class="form-group">
                            <label>Gender *</label>
                            <select id="gender" required>
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" id="phone"
                                   placeholder="10-digit phone number"
                                   pattern="[0-9]{10}"
                                   maxlength="10" required>
                        </div>

                        <div class="form-group">
                            <label>Appointment Date *</label>
                            <input type="date" id="date" required>
                        </div>

                        <div class="form-group">
                            <label>Blood Group *</label>
                            <select id="blood" required>
                                <option value="">Select Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                        </div>

                        <div class="form-group full">
                            <label>Diagnosis *</label>
                            <input type="text" id="diagnosis"
                                   placeholder="Enter diagnosis"
                                   maxlength="200" required>
                        </div>

                        <div class="form-group full">
                            <label>Additional Notes</label>
                            <textarea id="notes" rows="4"
                                      placeholder="Enter additional notes"
                                      maxlength="2000"></textarea>
                        </div>

                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn-primary" id="submitBtn">
                            Save Patient
                        </button>

                        <button type="reset" class="btn-reset" id="resetBtn">
                            Clear
                        </button>

                        <button type="button" class="btn-cancel"
                                onclick="cancelForm()">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>

        </section>

        <!-- APPOINTMENTS -->
        <section class="page" id="appointments">

            <div class="page-heading">
                <div>
                    <h2>Appointments</h2>
                    <p>View patient appointment details.</p>
                </div>
            </div>

            <div class="card">
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Patient Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Diagnosis</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody id="appointmentTable"></tbody>
                    </table>
                </div>

                <p class="empty" id="appointmentEmpty">
                    No appointments found.
                </p>
            </div>

        </section>

        <!-- REPORTS -->
        <section class="page" id="reports">

            <div class="page-heading">
                <div>
                    <h2>Reports & Analytics</h2>
                    <p>Patient registration statistics.</p>
                </div>

                <button class="btn-export" onclick="exportCSV()">
                    ↓ Download CSV
                </button>
            </div>

            <div class="stats">
                <div class="stat-card blue">
                    <p>Total Patients</p>
                    <h2 id="reportTotal">0</h2>
                </div>

                <div class="stat-card green">
                    <p>Male Patients</p>
                    <h2 id="reportMale">0</h2>
                </div>

                <div class="stat-card purple">
                    <p>Female Patients</p>
                    <h2 id="reportFemale">0</h2>
                </div>

                <div class="stat-card orange">
                    <p>Other Patients</p>
                    <h2 id="reportOther">0</h2>
                </div>
            </div>

            <div class="card">
                <h3>Registration Summary</h3>
                <div id="reportSummary" class="report-summary"></div>
            </div>

        </section>

        <!-- SETTINGS -->
        <section class="page" id="settings">

            <div class="page-heading">
                <div>
                    <h2>Settings</h2>
                    <p>System information and preferences.</p>
                </div>
            </div>

            <div class="card settings-card">
                <h3>System Information</h3>

                <div class="form-group">
                    <label>Application Name</label>
                    <input value="PatientCare" disabled>
                </div>

                <div class="form-group">
                    <label>Version</label>
                    <input value="1.0" disabled>
                </div>

                <div class="form-group">
                    <label>Storage</label>
                    <input value="Browser Local Storage - Demo" disabled>
                </div>

                <p class="subtitle">
                    This is a frontend demonstration, not a secure
                    medical records platform.
                </p>
            </div>

        </section>

        <footer>
            © 2026 PatientCare | Patient Management System
        </footer>

    </main>

</div>

<div class="toast" id="toast"></div>

<script src="script.js"></script>

</body>
</html>
Copied
3. style.css

css

:root {
    --primary: #2878d0;
    --dark: #172b4d;
    --background: #f4f7fb;
    --text: #293d55;
    --muted: #8391a5;
    --border: #e7edf4;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--background);
    color: var(--text);
}

button, input, select, textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}

.app {
    display: flex;
    min-height: 100vh;
}

/* SIDEBAR */

.sidebar {
    width: 250px;
    min-width: 250px;
    background: var(--dark);
    color: white;
    padding: 28px 17px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: .3s;
}

.logo {
    font-size: 23px;
    font-weight: 800;
    margin: 0 10px 45px;
}

.logo-icon {
    background: var(--primary);
    padding: 8px 11px;
    border-radius: 8px;
}

.logo span:last-child {
    color: #65b7ff;
}

.menu-title {
    font-size: 10px;
    color: #91a4c1;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin: 0 12px 15px;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-link {
    color: #c5d0e1;
    text-decoration: none;
    padding: 14px;
    border-radius: 8px;
    font-size: 13px;
    transition: .2s;
}

.nav-link:hover,
.nav-link.active {
    background: var(--primary);
    color: white;
}

.settings-title {
    margin-top: 35px;
}

.sidebar-profile {
    margin-top: auto;
    padding: 15px;
    background: #243c60;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar {
    width: 38px;
    height: 38px;
    background: #438dd6;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: white;
    font-weight: 700;
}

.sidebar-profile h4 {
    font-size: 12px;
}

.sidebar-profile p {
    font-size: 10px;
    color: #aabbd0;
    margin-top: 4px;
}

/* MAIN */

.main {
    flex: 1;
    min-width: 0;
    padding: 0 30px;
}

.header {
    min-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    gap: 15px;
}

.header-left,
.header-right {
    display: flex;
    align-items: center;
    gap: 15px;
}

.header h2 {
    font-size: 20px;
}

.header p {
    font-size: 11px;
    color: var(--muted);
    margin-top: 5px;
}

.header-right {
    font-size: 11px;
    color: var(--muted);
}

#menuToggle {
    display: none;
    background: none;
    border: none;
    font-size: 22px;
}

.page {
    display: none;
    padding: 28px 0;
}

.page.active {
    display: block;
}

/* WELCOME */

.welcome {
    background: linear-gradient(110deg, #216fc2, #4599e8);
    padding: 28px;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 23px;
}

.welcome h1 {
    font-size: 23px;
    margin-bottom: 9px;
}

.welcome p {
    font-size: 12px;
    color: #e5f1ff;
}

/* BUTTONS */

.btn-primary {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 7px;
    padding: 12px 18px;
    font-size: 12px;
    font-weight: 600;
}

.welcome .btn-primary {
    background: white;
    color: var(--primary);
}

.btn-primary:hover {
    opacity: .85;
}

.btn-outline,
.btn-export {
    background: #e9f3ff;
    color: var(--primary);
    border: 1px solid #d0e4fa;
    padding: 10px 15px;
    border-radius: 7px;
    font-size: 11px;
    font-weight: 600;
}

.btn-reset,
.btn-cancel {
    border: none;
    padding: 12px 18px;
    border-radius: 7px;
    background: #eef1f5;
    color: #526276;
    font-size: 12px;
    font-weight: 600;
}

/* STATISTICS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 17px;
    margin-bottom: 23px;
}

.stat-card {
    background: white;
    border: 1px solid var(--border);
    padding: 21px;
    border-radius: 11px;
}

.stat-card p {
    color: #738198;
    font-size: 12px;
    margin-bottom: 10px;
}

.stat-card h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.stat-card small {
    color: #9ba7b7;
    font-size: 10px;
}

.stat-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    font-size: 22px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.blue .stat-icon {
    background: #e4f1ff;
    color: #2878d0;
}

.green .stat-icon {
    background: #e2f8ed;
    color: #20a36d;
}

.purple .stat-icon {
    background: #f0e8ff;
    color: #9252ce;
}

.orange .stat-icon {
    background: #fff0dc;
    color: #dc9234;
}

/* CARDS */

.dashboard-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 20px;
    margin-bottom: 22px;
}

.card {
    background: white;
    border: 1px solid var(--border);
    padding: 23px;
    border-radius: 11px;
    margin-bottom: 22px;
    min-width: 0;
}

.card h3 {
    font-size: 15px;
}

.subtitle {
    font-size: 11px;
    color: var(--muted);
    margin-top: 6px;
}

.chart-box {
    height: 230px;
    margin-top: 20px;
    position: relative;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 17px 0;
    border-bottom: 1px solid #edf0f4;
    font-size: 12px;
    color: #718198;
}

.summary-row strong,
.summary-total strong {
    color: var(--text);
}

.summary-total {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    font-size: 13px;
    font-weight: 700;
}

.card-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
}

/* PAGE HEADINGS */

.page-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    gap: 15px;
}

.page-heading h2 {
    font-size: 20px;
    margin-bottom: 7px;
}

.page-heading p {
    font-size: 11px;
    color: var(--muted);
}

/* TABLES */

.table-wrap {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 650px;
}

th {
    background: #f6f8fb;
    padding: 14px 12px;
    text-align: left;
    font-size: 10px;
    color: #7b899b;
    white-space: nowrap;
}

td {
    padding: 15px 12px;
    border-bottom: 1px solid #edf1f5;
    font-size: 11px;
    color: #56667b;
    white-space: nowrap;
}

td:first-child {
    color: var(--primary);
    font-weight: 600;
}

tbody tr:hover {
    background: #f8fbff;
}

.action-btn {
    border: none;
    padding: 7px 9px;
    border-radius: 5px;
    font-size: 10px;
    margin-right: 4px;
}

.edit-btn {
    background: #e7f2ff;
    color: #2878d0;
}

.delete-btn {
    background: #fff0f0;
    color: #dc5050;
}

.empty {
    text-align: center;
    padding: 25px;
    color: #9ba8b7;
    font-size: 12px;
    display: none;
}

/* TOOLBAR */

.toolbar {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 20px;
}

.toolbar input {
    width: 350px;
    max-width: 100%;
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 12px;
    font-size: 12px;
    outline: none;
}

/* FORMS */

.form-card {
    padding: 30px;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 23px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-bottom: 5px;
}

.form-group label {
    font-size: 12px;
    font-weight: 600;
    color: #4d6078;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    border: 1px solid #dce4ed;
    border-radius: 7px;
    padding: 12px;
    outline: none;
    font-size: 12px;
    color: #35485f;
    background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus,
.toolbar input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px #2878d018;
}

.form-group textarea {
    resize: vertical;
}

.full {
    grid-column: 1 / -1;
}

.form-actions {
    display: flex;
    gap: 12px;
    margin-top: 27px;
    flex-wrap: wrap;
}

/* APPOINTMENT STATUS */

.status {
    padding: 5px 9px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 600;
}

.status-today {
    color: #168a5c;
    background: #e1f7eb;
}

.status-upcoming {
    color: #2878d0;
    background: #e4f1ff;
}

.status-past {
    color: #77879a;
    background: #eef1f5;
}

/* REPORTS */

.report-summary {
    margin-top: 20px;
    font-size: 13px;
    line-height: 2.3;
    color: #607189;
}

/* FOOTER */

footer {
    border-top: 1px solid var(--border);
    padding: 24px;
    text-align: center;
    font-size: 10px;
    color: #9ba8b7;
}

/* TOAST */

.toast {
    position: fixed;
    right: 25px;
    bottom: 25px;
    background: #193758;
    color: white;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 12px;
    opacity: 0;
    transform: translateY(15px);
    transition: .3s;
    pointer-events: none;
    z-index: 100;
}

.toast.show {
    opacity: 1;
    transform: translateY(0);
}

/* RESPONSIVE */

@media(max-width: 1050px) {
    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .main {
        padding: 0 20px;
    }
}

@media(max-width: 800px) {
    .sidebar {
        position: fixed;
        left: -260px;
        top: 0;
        z-index: 50;
        height: 100vh;
        overflow-y: auto;
    }

    .sidebar.open {
        left: 0;
    }

    #menuToggle {
        display: block;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .header-right span {
        display: none;
    }
}

@media(max-width: 550px) {
    .main {
        padding: 0 12px;
    }

    .welcome {
        flex-direction: column;
        align-items: flex-start;
    }

    .welcome h1 {
        font-size: 19px;
    }

    .stats {
        gap: 10px;
    }

    .stat-card {
        padding: 14px;
    }

    .stat-card h2 {
        font-size: 23px;
    }

    .page-heading {
        flex-direction: column;
        align-items: flex-start;
    }

    .toolbar {
        flex-direction: column;
    }

    .toolbar input {
        width: 100%;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .full {
        grid-column: auto;
    }

    .card {
        padding: 15px;
    }

    .form-card {
        padding: 18px;
    }

    .chart-box {
        height: 200px;
    }

    .toast {
        left: 15px;
        right: 15px;
        text-align: center;
    }
}
