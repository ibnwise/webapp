
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
    fetch(`${viewName}.html`)
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
                 window.logsUI.fetchLogs();
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