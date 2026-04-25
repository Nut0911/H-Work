document.addEventListener('DOMContentLoaded', () => {
    // 1. ສັລບ Developer / Hiring Company
    const toggleButtons = document.querySelectorAll('.toggle-opt');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 2. ສັລບຟິວເຕີ Sidebar
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => {
                p.classList.remove('active');
                const check = p.querySelector('.check');
                if(check) check.remove();
            });
            pill.classList.add('active');
            pill.innerHTML += ' <span class="check">✓</span>';
        });
    });

    // 3. ປຸ່ມ Bookmark
    const bookmarks = document.querySelectorAll('.bookmark');
    bookmarks.forEach(bm => {
        bm.addEventListener('click', () => {
            bm.style.color = bm.style.color === 'rgb(37, 99, 235)' ? '#d1d5db' : '#2563eb';
        });
    });
});