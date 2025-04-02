document.addEventListener("DOMContentLoaded", function () {
    // Xử lý menu2 (Top Resort, Tour, Combo)
    const menu2Buttons = document.querySelectorAll(".menu2-btn");
    const content2Sections = document.querySelectorAll(".content2");

    menu2Buttons.forEach(button => {
        button.addEventListener("click", function () {
            menu2Buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("data-target");

            content2Sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });

    // Xử lý menu3 (Phú Yên, Đà Nẵng, Ninh Thuận, Bình Thuận)
    const menu3Buttons = document.querySelectorAll(".menu3-btn");
    const content3Sections = document.querySelectorAll(".content");

    menu3Buttons.forEach(button => {
        button.addEventListener("click", function () {
            menu3Buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("data-target");

            content3Sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const resortList = document.querySelector(".resort-list");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    nextBtn.addEventListener("click", function () {
        resortList.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        resortList.scrollBy({ left: -300, behavior: "smooth" });
    });
});


    // Dropdown đa cấp Bootstrap 5
    document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains('dropdown-menu')) {
                nextEl.classList.add('show');
                nextEl.style.top = this.offsetTop + "px";
                nextEl.style.left = this.offsetWidth + "px";
            }
        });

    dropdown.parentElement.addEventListener('mouseleave', function (e) {
        let subMenu = this.querySelector('.dropdown-menu');
    if (subMenu) {
        subMenu.classList.remove('show');
            }
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle click mobile
    const dropdowns = document.querySelectorAll('.dropdown > a, .dropdown-item.dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('show');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Nút mở menu mobile
    const toggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.header-nav .navbar-nav');

    toggler.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Dropdown mở khi click mobile
    const dropdowns = document.querySelectorAll('.dropdown > a, .dropdown-item.dropdown-toggle');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('show');
            }
        });
    });
});
function goToHotel(url) {
    window.location.href = url;
}


document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện khi nhập vào ô tìm kiếm
    document.getElementById("search-input").addEventListener("input", function () {
        let searchValue = this.value.toLowerCase().trim(); // Lấy giá trị nhập vào
        let hotels = document.querySelectorAll(".hotel-item"); // Lấy danh sách khách sạn

        hotels.forEach(function (hotel) {
            let hotelName = hotel.querySelector(".hotel-name").textContent.toLowerCase();

            if (hotelName.includes(searchValue)) {
                hotel.style.display = "block"; // Hiển thị khách sạn phù hợp
            } else {
                hotel.style.display = "none"; // Ẩn khách sạn không khớp
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let sidebarItems = document.querySelectorAll(".sidebar .list-group-item");
    let sections = document.querySelectorAll(".content");

    sidebarItems.forEach(function (item) {
        item.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");

            // Xóa class active khỏi tất cả các mục
            sidebarItems.forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            // Ẩn tất cả section
            sections.forEach(sec => sec.classList.add("d-none"));

            // Hiện section được chọn
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove("d-none");
            }
        });
    });
});
