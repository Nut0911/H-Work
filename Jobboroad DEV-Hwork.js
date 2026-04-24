document.addEventListener('DOMContentLoaded', () => {
    // ຈັດການປຸ່ມ Filter Sidebar
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('active'));
            // ຖ້າຢາກໃຫ້ມີເຄື່ອງໝາຍຕິກ (✓) ຄືໃນຮູບ
            filterItems.forEach(i => {
                const check = i.querySelector('span');
                if(check) check.remove();
            });
            item.classList.add('active');
            item.innerHTML += ' <span>✓</span>';
        });
    });

    // ຈັດการປຸ່ມ Save (🔖)
    const saveIcons = document.querySelectorAll('.save-icon');
    saveIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.style.color = icon.style.color === 'blue' ? 'black' : 'blue';
        });
    });
});