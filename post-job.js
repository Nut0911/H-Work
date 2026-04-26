document.addEventListener('DOMContentLoaded', () => {
    
    // logic ສໍາລັບປ່ຽນ Toggle (Developer / Hiring Company)
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // logic ສໍາລັບການກົດ Post (ຕົວຢ່າງການເກັບຂໍ້ມູນ)
    const postBtn = document.querySelector('.btn-submit');
    postBtn.addEventListener('click', () => {
        const jobTitle = document.querySelector('input[type="text"]').value;
        if(jobTitle === "") {
            alert("ກະລຸນາປ້ອນຫົວຂໍ້ວຽກກ່ອນ!");
        } else {
            alert("ກຳລັງໂພສວຽກ: " + jobTitle);
            // ບ່ອນນີ້ເຈົ້າສາມາດຂຽນ code ຕໍ່ເພື່ອສົ່ງຂໍ້ມູນໄປຫາ Backend/API
        }
    });

    // logic ລຶບ Skill (Tag)
    const tags = document.querySelectorAll('.tag i');
    tags.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    });

});