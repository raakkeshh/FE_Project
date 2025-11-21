// --- DATA & STATE ---
const defaultEvents = [
    { id: 1, title: "Tech Symposium", category: "Tech", date: "2023-11-20", img: "https://images.unsplash.com/photo-1504384308090-c54be3855833?w=400" },
    { id: 2, title: "Basketball Match", category: "Sports", date: "2023-12-05", img: "https://images.unsplash.com/photo-1519766304707-500e0a83bb02?w=400" },
    { id: 3, title: "Art Gallery Open", category: "Cultural", date: "2023-12-15", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" }
];

const mockStudents = [
    { rank: 1, name: "Sarah Jenkins", branch: "CSE - 3rd Year", events: 15, points: 750 },
    { rank: 2, name: "Mike Ross", branch: "ECE - 4th Year", events: 12, points: 600 },
    { rank: 3, name: "Jessica Pearson", branch: "MBA - 1st Year", events: 10, points: 500 },
    { rank: 4, name: "Harvey Specter", branch: "Law - 2nd Year", events: 9, points: 450 },
    { rank: 5, name: "Louis Litt", branch: "Finance - 3rd Year", events: 8, points: 400 }
];

let events = [];
let registrations = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    const storedEvents = localStorage.getItem('ah_events');
    const storedRegs = localStorage.getItem('ah_regs');
    events = storedEvents ? JSON.parse(storedEvents) : defaultEvents;
    registrations = storedRegs ? JSON.parse(storedRegs) : [];
}

function saveData() {
    localStorage.setItem('ah_events', JSON.stringify(events));
    localStorage.setItem('ah_regs', JSON.stringify(registrations));
}

// --- LOGIN LOGIC ---
function showLoginForm(role) {
    document.querySelector('.portal-choices').classList.add('hidden');
    document.getElementById('actualLoginForm').classList.remove('hidden');
    document.getElementById('selectedRole').value = role;
    document.getElementById('portalTitle').innerText = role === 'admin' ? 'Admin Portal Login' : 'Student Portal Login';
}

function resetLogin() {
    document.querySelector('.portal-choices').classList.remove('hidden');
    document.getElementById('actualLoginForm').classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById('selectedRole').value;
    const username = document.getElementById('username').value;
    
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-container').classList.remove('hidden');
    
    document.getElementById('displayUser').innerText = username;
    document.getElementById('displayRole').innerText = role.toUpperCase();

    if(role === 'admin') {
        document.getElementById('adminMenu').classList.remove('hidden');
        navTo('admin-dashboard', document.querySelector('#adminMenu li'));
        initChart();
        renderLeaderboard();
    } else {
        document.getElementById('studentMenu').classList.remove('hidden');
        navTo('student-dashboard', document.querySelector('#studentMenu li'));
    }
    refreshGrids();
}

function logout() {
    location.reload();
}

// --- SIDEBAR NAVIGATION ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('active');
    
    if(window.innerWidth > 768) {
        if(sidebar.classList.contains('active')) {
            content.style.marginLeft = "260px";
        } else {
            content.style.marginLeft = "0";
        }
    }
}

function navTo(sectionId, element) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    document.querySelectorAll('.menu-list li').forEach(li => li.classList.remove('active'));
    if(element) element.classList.add('active');
}

// --- TOGGLE ADD EVENT FORM ---
function toggleEventForm() {
    const form = document.getElementById('eventFormContainer');
    form.classList.toggle('hidden');
}

// --- RENDERING DATA ---
function refreshGrids() {
    renderEvents(events, 'studentEventGrid', false);
    renderEvents(events, 'adminEventGrid', true); // Now renders in Manage Events section
    renderEvents(events.slice(0,2), 'studentSuggestionGrid', false);
    
    const myEvents = events.filter(e => registrations.includes(e.id));
    renderEvents(myEvents, 'myActivitiesGrid', false, true);
    
    updateStats();
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboardTableBody');
    if(!tbody) return;
    tbody.innerHTML = "";
    mockStudents.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>#${s.rank}</td><td style="font-weight:bold; color:white;">${s.name}</td><td>${s.branch}</td><td>${s.events}</td><td style="color:var(--accent-yellow)">${s.points}</td><td><span class="status-badge">Active</span></td>`;
        tbody.appendChild(tr);
    });
}

function renderEvents(data, gridId, isAdmin, isMyActivity = false) {
    const grid = document.getElementById(gridId);
    if(!grid) return;
    grid.innerHTML = "";
    
    if(data.length === 0) {
        grid.innerHTML = "<div style='color:#666; grid-column: 1/-1; text-align:center; padding:20px;'>No events found here.</div>"; return;
    }

    data.forEach(ev => {
        let btn = "";
        if(isAdmin) {
            btn = `<button class="action-btn cancel" onclick="deleteEvent(${ev.id})"><i class="fas fa-trash"></i> Delete</button>`;
        } else if(isMyActivity) {
            btn = `<button class="action-btn cancel" onclick="unregisterEvent(${ev.id})">Cancel Registration</button>`;
        } else {
            if(registrations.includes(ev.id)) 
                btn = `<button class="action-btn" style="background:#333; color:#777; cursor:default;" disabled><i class="fas fa-check"></i> Registered</button>`;
            else
                btn = `<button class="action-btn" onclick="joinEvent(${ev.id})">Join Now</button>`;
        }

        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${ev.img}')"></div>
            <div class="card-body">
                <h4>${ev.title}</h4>
                <p><span style="color:var(--accent-yellow)">${ev.category}</span> | ${ev.date}</p>
            </div>
            <div class="card-footer">
                ${btn}
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateStats() {
    const regCount = registrations.length;
    const points = regCount * 50;
    const countEl = document.getElementById('stRegCount');
    const pointEl = document.getElementById('stPoints');
    if(countEl) countEl.innerText = regCount;
    if(pointEl) pointEl.innerText = points;
    const admCount = document.getElementById('admEventCount');
    if(admCount) admCount.innerText = events.length;
}

// --- ACTIONS ---
function joinEvent(id) {
    if(!registrations.includes(id)) {
        registrations.push(id);
        saveData();
        showToast("Registration successful! (+50 Points)");
        refreshGrids();
    }
}

function unregisterEvent(id) {
    if(confirm("Are you sure you want to cancel this registration?")) {
        registrations = registrations.filter(rId => rId !== id);
        saveData();
        showToast("Registration cancelled.");
        refreshGrids();
    }
}

function addNewEvent(e) {
    e.preventDefault();
    const title = document.getElementById('newEventTitle').value;
    const cat = document.getElementById('newEventCategory').value;
    const date = document.getElementById('newEventDate').value;
    const imgInput = document.getElementById('newEventImg').value;
    let img = imgInput || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400";

    events.push({ id: Date.now(), title: title, category: cat, date: date, img: img });
    saveData();
    showToast("New Event Created Successfully!");
    document.querySelector('form').reset();
    toggleEventForm(); // Close form
    refreshGrids();
}

function deleteEvent(id) {
    if(confirm("Permanently delete this event?")) {
        events = events.filter(e => e.id !== id);
        registrations = registrations.filter(rId => rId !== id);
        saveData();
        showToast("Event deleted.");
        refreshGrids();
    }
}

function filterEvents(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    const filtered = cat === 'All' ? events : events.filter(e => e.category === cat);
    renderEvents(filtered, 'studentEventGrid', false);
}

function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}

function initChart() {
    const ctx = document.getElementById('mainChart');
    if(ctx) {
        const chartStatus = Chart.getChart("mainChart");
        if (chartStatus != undefined) { chartStatus.destroy(); }
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                datasets: [{
                    label: 'Student Participation',
                    data: [12, 19, 15, 25, 32],
                    borderColor: '#f1c40f',
                    backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { grid: { color: '#333' } }, x: { grid: { display: false } } }
            }
        });
    }
}