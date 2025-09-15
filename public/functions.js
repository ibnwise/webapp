
// Frontend: fetch logs and render table + pagination
let allLogs = [];
let currentPage = 1;
const logsPerPage = 5;

async function fetchLogs() {
  try {
    const res = await fetch('/api/logs');
    if (!res.ok) throw new Error('Network response was not ok');

    allLogs = await res.json();
    renderLogsTable();
  } catch (error) {
    console.error('❌ Failed to fetch logs:', error);
    // Optionally show UI feedback
  }
}

function renderLogsTable() {
  const tbody = document.querySelector('#logsTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const start = (currentPage - 1) * logsPerPage;
  const paginatedLogs = allLogs.slice(start, start + logsPerPage);

  paginatedLogs.forEach(log => {
    const row = document.createElement('tr');

    row.innerHTML = `
  <td class="px-4 py-2 text-[#141414] text-sm font-normal leading-normal whitespace-nowrap">
    ${escapeHtml(String(log.id))}
  </td>
  <td class="px-4 py-2 text-neutral-700 text-sm font-normal leading-normal max-w-[300px] truncate"
      title="${escapeAttr(log.details)}">
    ${escapeHtml(truncate(log.details, 120))}
  </td>
  <td class="px-4 py-2 text-neutral-500 text-sm font-normal leading-normal">
    ${new Date(log.timestamp).toLocaleString()}
  </td>
`;


    tbody.appendChild(row);
  });

  renderLogsPagination();
}

function renderLogsPagination() {
  const totalPages = Math.max(1, Math.ceil(allLogs.length / logsPerPage));
  const pagination = document.getElementById('paginationControls');
  if (!pagination) return;

  pagination.innerHTML = '';

  function createButton(content, onClick, options = {}) {
    const a = document.createElement('a');
    a.href = '#';
    a.innerHTML = content;
    if (options.className) a.className = options.className;
    a.addEventListener('click', e => { e.preventDefault(); onClick(); });
    return a;
  }

  // prev
  pagination.appendChild(createButton('&laquo; Prev', () => goToLogsPage(Math.max(currentPage - 1, 1))));

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    const btn = createButton(String(i), () => goToLogsPage(i), { className: isActive ? 'active' : '' });
    pagination.appendChild(btn);
  }

  // next
  pagination.appendChild(createButton('Next &raquo;', () => goToLogsPage(Math.min(currentPage + 1, totalPages))));
}

function goToLogsPage(page) {
  currentPage = page;
  renderLogsTable();
}

// small helpers
function truncate(str, n) { return str && str.length > n ? str.slice(0, n - 1) + '…' : (str || ''); }
function escapeHtml(unsafe) { return unsafe
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;'); }
function escapeAttr(s) { return (s || '').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

// Init
window.addEventListener('DOMContentLoaded', () => {
  fetchLogs();
});


//load Views
function loadView(viewName, clickedElement) {
    const container = document.getElementById("view-container");

    // 🧼 Remove highlight from all menu items
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("bg-[#ededed]");
    });

    // ✅ Highlight clicked menu item
    if (clickedElement) {
        const parent = clickedElement.closest(".menu-item");
        if (parent) parent.classList.add("bg-[#ededed]");
    }

    // 🔹 Always use absolute path so fetch doesn’t break with relative routes
    fetch(`/views/${viewName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`View not found: ${viewName}`);
            }
            return response.text();
        })
        .then(html => {
            // // 🚫 Prevent injecting full HTML pages
            // if (/<html[\s\S]*<\/html>/i.test(html)) {
            //     throw new Error(`Full HTML detected — expected partial view only (${viewName})`);
            // }

            container.innerHTML = html;

            // 📌 Per-view logic
            if (viewName === "inventory") {
                fetchLogs();
            }
        })
        .catch(err => {
            console.error(err);
            container.innerHTML = `<p style="color:red;">Error loading view: ${err.message}</p>`;
        });
}



// window.addEventListener("popstate", e => {
//   const view = e.state?.view || "dashboard";
//   const menuItem = document.querySelector(`.menu-item[data-view='${view}']`);
//   loadView(menuItem, false);
// });

document.addEventListener("DOMContentLoaded", () => {
  const hashView = location.hash.replace("#", "") || "dashboard";
  const menuItem = document.querySelector(`.menu-item[data-view='${hashView}']`);
  loadView(hashView, menuItem); // ✅ pass viewName first, element second
});


