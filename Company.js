// 1. ກຽມຂໍ້ມູນວຽກ
const jobData = [
    {
        title: "Staff Backend Engineer",
        company: "Syssatanak",
        location: "Vientiane, Laos",
        salary: "$160k – $210k",
        tags: ["NODE.JS", "TYPESCRIPT"],
        logo: "images/it_logo.png", // ໃສ່ Path ຮູບຂອງເຈົ້າບ່ອນນີ້
        time: "2h ago"
    },
    {
        title: "Data Platform Engineer",
        company: "Pakse",
        location: "Champasak, Laos",
        salary: "$160k – $210k",
        tags: ["PYTHON", "APACHE SPARK"],
        logo: "images/data_logo.png",
        time: "2h ago"
    },
     {
        title: "Data Platform Engineer",
        company: "Pakse",
        location: "Champasak, Laos",
        salary: "$160k – $210k",
        tags: ["PYTHON", "APACHE SPARK"],
        logo: "images/data_logo.png",
        time: "2h ago"
    },
];

// 2. ຟັງຊັນ Render Featured Job (ອັນໃຫຍ່ດ້ານເທິງ)
function renderFeatured() {
    const container = document.getElementById('featured-job-container');
    container.innerHTML = `
        <div class="featured-card">
            <div class="logo-box">
                <img src="/png/IT.png" alt="CloudScale Logo">
            </div>
            <div style="flex-grow: 1;">
                <small style="color: var(--blue); font-weight: bold;">FEATURED OPPORTUNITY</small>
                <h2 style="margin: 5px 0;">Principal Systems Architect</h2>
                <p style="color: var(--text-muted); margin: 0;">CloudScale Infrastructure • Remote, Global</p>
                <div style="margin-top: 10px;">
                    <span class="tag">GO</span><span class="tag">KUBERNETES</span><span class="tag">GRPC</span>
                </div>
            </div>
            <div style="text-align: right;">
                <span class="salary">$190k – $245k</span>
                <small style="color: var(--text-muted);">PLUS EQUITY</small>
            </div>
        </div>
    `;
}


// 2. ຟັງຊັນ Render Featured Job (ອັນໃຫຍ່ດ້ານເທິງ)
function renderFeatured() {
    const container = document.getElementById('featured-job-container');
    container.innerHTML = `
        <div class="featured-card">
            <div class="logo-box">
                <img src="/png/IT.png" alt="CloudScale Logo">
            </div>
            <div style="flex-grow: 1;">
                <small style="color: var(--blue); font-weight: bold;">FEATURED OPPORTUNITY</small>
                <h2 style="margin: 5px 0;">Principal Systems Architect</h2>
                <p style="color: var(--text-muted); margin: 0;">CloudScale Infrastructure • Remote, Global</p>
                <div style="margin-top: 10px;">
                    <span class="tag">GO</span><span class="tag">KUBERNETES</span><span class="tag">GRPC</span>
                </div>
            </div>
            <div style="text-align: right;">
                <span class="salary">$190k – $245k</span>
                <small style="color: var(--text-muted);">PLUS EQUITY</small>
            </div>
        </div>
    `;
}



function renderJobs() {
    const container = document.getElementById('job-list-container');
    container.innerHTML = jobData.map(job => `
        <div class="job-card">
            <div style="display: flex; justify-content: space-between;">
                <div class="logo-box" style="width: 45px; height: 45px;">
                    <img src="/png/IT.png" alt="Logo">
                </div>
                <i class="fa-regular fa-bookmark" style="color: #cbd5e1;"></i>
            </div>
            <h3 style="margin: 15px 0 5px 0;">${job.title}</h3>
            <p style="font-size: 14px; color: var(--text-muted); margin: 0;">${job.company}, ${job.location}</p>
            <div style="margin-top: 15px;">
                ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold;">${job.salary}</span>
                <small style="color: var(--text-muted);">${job.time}</small>
            </div>
        </div>
    `).join('');
}

// ເອີ້ນໃຊ້ງານ
renderFeatured();
renderJobs();