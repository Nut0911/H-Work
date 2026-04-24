document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const roleButtons = document.querySelectorAll('.role-btn');

    // 1. ສັລບ Developer / Hiring Company
    roleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            roleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 2. ຕົວຢ່າງການກົດລຶບ Skill
    document.getElementById('skillsList').addEventListener('click', (e) => {
        if (e.target.classList.contains('skill-tag')) {
            e.target.remove();
        }
    });

    // 3. ເວລາກົດ Continue
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('ກຳລັງບັນທຶກຂໍ້ມູນວຽກໃໝ່...');
        console.log('Form data captured!');
    });
});