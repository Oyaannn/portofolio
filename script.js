const projects = [
    {
        title: 'Website PT Edu Global Nusaputra',
        cat: 'Website Project',
        img: 'assets/project/eglobal.png',
        desc: 'Website company profile berbasis WordPress yang dirancang untuk menampilkan profil perusahaan, layanan, program, berita, partner, dan informasi kontak.',
        stack: ['WordPress', 'Elementor', 'CSS', 'Responsive Design'],
        live: 'https://eglobal.id/',
        github: '#'
    },
    {
        title: 'Website SMK Plus Nusa Putra',
        cat: 'Website Project',
        img: 'assets/project/smkplus.png',
        desc: 'Website sekolah berbasis Laravel yang digunakan sebagai media informasi resmi untuk menampilkan profil sekolah, berita, informasi akademik, dan pendaftaran peserta didik.',
        stack: ['Laravel', 'MySQL', 'Bootstrap'],
        live: 'https://smkplusnusaputra.sch.id/',
        github: '#'
    },
    {
        title: 'Website Ponpes Roudhotul Irfan',
        cat: 'Website Project',
        img: 'assets/project/ponpes.png',
        desc: 'Website profil pondok pesantren berbasis WordPress yang dibuat untuk memperkenalkan informasi lembaga, program pendidikan, kegiatan, dan kontak secara terstruktur.',
        stack: ['WordPress', 'Elementor', 'CSS', 'Responsive Design'],
        live: 'https://ponpesroudhotulirfan.nusaputra.ac.id/',
        github: '#'
    },
    {
        title: 'UI Mobile App MelodyVibes',
        cat: 'UI/UX Design',
        img: 'assets/project/melodyvibes.png',
        desc: 'Desain UI/UX aplikasi mobile pemutar musik yang dibuat menggunakan Figma. Desain ini berfokus pada tampilan modern, navigasi yang sederhana, dan pengalaman pengguna yang nyaman saat mencari, memutar, serta mengelola musik favorit.',
        stack: ['Figma'],
        live: '#',
        github: '#'
    },
    {
        title: 'Website Perpustakaan Digital',
        cat: 'Website Project',
        img: 'assets/project/perpus.png',
        desc: 'Website perpustakaan digital yang dikembangkan untuk membantu pengelolaan data buku, anggota, peminjaman, dan pengembalian secara lebih terstruktur.',
        stack: ['PHP', 'MySQL', 'Bootstrap'],
        live: '#',
        github: '#'
    },
    {
        title: 'Personal Portofolio Website',
        cat: 'Website Project',
        img: 'assets/project/portofolio.png',
        desc: 'Website portofolio pribadi yang dibuat untuk menampilkan profil, pengalaman, proyek, sertifikat, dan kontak dalam satu halaman.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        live: '#',
        github: '#'
    }
];

const certificatesData = [
    {
        title: 'HTML & CSS',
        date: '2022',
        issuer: 'Information Technology Specialist',
        img: 'assets/certificate/HTML.jpg',
        desc: 'Sertifikat pelatihan dasar HTML dan CSS yang bertaraf internasional.'
    },
    {
        title: 'Databases Foundations',
        date: '2025',
        issuer: 'Oracle Academy',
        img: 'assets/certificate/ORACLE.jpg',
        desc: 'Sertifikat pembelajaran teknologi database dan dasar pemrograman yang mendukung pemahaman pengelolaan data.'
    },
    {
        title: 'HTML Dasar',
        date: '2023',
        issuer: 'Google Developers',
        img: 'assets/certificate/HTML.jpg',
        desc: 'Sertifikat pembelajaran dasar HTML untuk membangun struktur halaman website yang rapi dan sesuai standar web.'
    },
    {
        title: 'MCTNA',
        date: '2026',
        issuer: 'MikroTik Academy',
        img: 'assets/certificate/MIKROTIK.jpg',
        desc: 'Sertifikat pelatihan jaringan komputer menggunakan MikroTik, meliputi konfigurasi dasar router dan manajemen jaringan.'
    },
    {
        title: 'Public Speaking',
        date: '2025',
        issuer: 'EPDC Sukabumi',
        img: 'assets/certificate/PUBLIC SPEAKING.jpg',
        desc: 'Sertifikat pelatihan public speaking untuk meningkatkan kemampuan komunikasi, presentasi, dan kepercayaan diri.'
    },
    {
        title: 'Perekayasa Perangkat Internet of Things Vocational School Graduate Academy',
        date: '2025',
        issuer: 'Digital Talent Scholarship',
        img: 'assets/certificate/VGSA.jpg',
        desc: 'Sertifikat pelatihan berbasis teknologi yang mendukung pengembangan kompetensi digital dan kesiapan kerja.'
    },
    {
        title: 'Web Development for Beginner',
        date: '2024',
        issuer: 'Edspert.id',
        img: 'assets/certificate/WEB.jpg',
        desc: 'Sertifikat pelatihan pengembangan website yang mencakup dasar pembuatan tampilan web dan implementasi halaman responsif.'
    }
];

function renderProjects() {
    const grid = document.getElementById('projectsGrid');

    if (!grid) return;

    projects.forEach((project, index) => {
        const card = document.createElement('div');

        card.className = 'project-card reveal';
        card.style.transitionDelay = `${index * 120}ms`;

        card.innerHTML = `
            <div class="project-thumb">
                <img src="${project.img}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <p>${project.cat}</p>
                <h3>${project.title}</h3>
            </div>
        `;

        card.addEventListener('click', () => openProjectModal(index));
        grid.appendChild(card);
    });
}

function renderCertificates() {
    const track = document.getElementById('certTrack');

    if (!track) return;

    track.innerHTML = '';

    certificatesData.forEach((cert, index) => {
        const slide = document.createElement('div');

        slide.className = 'cert-slide';

        slide.innerHTML = `
            <div class="cert-box">
                <img 
                    src="${cert.img}" 
                    alt="${cert.title}" 
                    loading="lazy"
                    data-cert-index="${index}"
                >
            </div>
        `;

        track.appendChild(slide);
    });
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closeProjectModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
}

function openProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');

    if (!project || !modal) return;

    document.getElementById('modalImage').src = project.img;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.desc;

    document.getElementById('modalStack').innerHTML = project.stack
        .map(item => `<span>${item}</span>`)
        .join('');

    document.getElementById('projectActions').innerHTML = `
        ${project.live !== '#' ? `
            <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                Lihat Project
            </a>
        ` : ''}

        ${project.github !== '#' ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github">
                GitHub
            </a>
        ` : ''}
    `;

    modal.classList.add('show');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');

    if (!modal) return;

    modal.classList.remove('show');
}

function initActiveNav() {
    const links = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

    if (!links.length || !sections.length) return;

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 180) {
                currentSection = section.id;
            }
        });

        links.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentSection}`);
        });
    });
}

function initRevealAnimation() {
    const revealElements = document.querySelectorAll('.reveal');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
}

function initCertificateSlider() {
    const track = document.getElementById('certTrack');
    const slides = document.querySelectorAll('.cert-slide');
    const dotsWrap = document.getElementById('dots');
    const nextBtn = document.getElementById('nextCert');
    const prevBtn = document.getElementById('prevCert');

    if (!track || !slides.length || !dotsWrap || !nextBtn || !prevBtn) return;

    let certIndex = 0;
    let slideInterval;
    let startX = 0;

    const visibleSlides = () => window.innerWidth <= 992 ? 1 : 2;
    const maxIndex = () => Math.max(0, slides.length - visibleSlides());

    const createDots = () => {
        dotsWrap.innerHTML = '';

        for (let i = 0; i <= maxIndex(); i++) {
            const dot = document.createElement('span');

            dot.className = `dot ${i === certIndex ? 'active' : ''}`;

            dot.addEventListener('click', () => {
                certIndex = i;
                updateSlider();
                resetSlideTimer();
            });

            dotsWrap.appendChild(dot);
        }
    };

    const updateSlider = () => {
        certIndex = Math.min(certIndex, maxIndex());
        track.style.transform = `translateX(-${certIndex * (100 / visibleSlides())}%)`;
        createDots();
    };

    const nextSlide = () => {
        certIndex = certIndex >= maxIndex() ? 0 : certIndex + 1;
        updateSlider();
    };

    const prevSlide = () => {
        certIndex = certIndex <= 0 ? maxIndex() : certIndex - 1;
        updateSlider();
    };

    const startSlideTimer = () => {
        slideInterval = setInterval(nextSlide, 3000);
    };

    const resetSlideTimer = () => {
        clearInterval(slideInterval);
        startSlideTimer();
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideTimer();
    });

    track.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    track.addEventListener('touchend', (event) => {
        const endX = event.changedTouches[0].clientX;

        if (startX - endX > 40) {
            nextSlide();
            resetSlideTimer();
        }

        if (endX - startX > 40) {
            prevSlide();
            resetSlideTimer();
        }
    });

    window.addEventListener('resize', updateSlider);

    updateSlider();
    startSlideTimer();
}

function initCertificateModal() {
    const certModal = document.getElementById('certModal');
    const closeBtn = document.getElementById('certModalClose');
    const previewImage = document.getElementById('certPreviewImage');
    const certificateImages = document.querySelectorAll('.cert-box img');

    if (!certModal || !closeBtn || !previewImage || !certificateImages.length) return;

    certificateImages.forEach((image) => {
        image.addEventListener('click', () => {
            const index = image.dataset.certIndex;
            const cert = certificatesData[index];

            if (!cert) return;

            previewImage.src = cert.img;
            previewImage.alt = cert.title;

            document.getElementById('certTitle').textContent = cert.title;
            document.getElementById('certDate').textContent = cert.date;
            document.getElementById('certIssuer').textContent = cert.issuer;
            document.getElementById('certDesc').textContent = cert.desc;

            certModal.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', () => {
        certModal.classList.remove('show');
    });

    certModal.addEventListener('click', (event) => {
        if (event.target === certModal) {
            certModal.classList.remove('show');
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const subject = encodeURIComponent(`Pesan dari Portfolio - ${name}`);
        const body = encodeURIComponent(
            `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
        );

        window.location.href = `mailto:mirpanarroyan15@gmail.com?subject=${subject}&body=${body}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertificates();
    initProjectModal();
    initActiveNav();
    initRevealAnimation();
    initCertificateSlider();
    initCertificateModal();
    initContactForm();
});