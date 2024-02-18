document.addEventListener("DOMContentLoaded", function () {
    // Önceki sayfa ve sonraki sayfa düğmelerini al
    let prevPageBtn = document.getElementById("prevPage");
    let nextPageBtn = document.getElementById("nextPage");
    let currentPage = 1; // Başlangıç sayfa numarası

    // Sayfa numarasını localStorage'dan al
    let storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
        currentPage = parseInt(storedPage);
    }

    // Sayfa numarasına göre sayfa içeriğini güncelle
    function updateContent(pageNumber) {
        let pages = document.querySelectorAll(".page");
        pages.forEach(function (page, index) {
            if (index + 1 === pageNumber) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    }

    // Başlangıçta sayfa içeriğini güncelle
    updateContent(currentPage);

    // Önceki sayfa düğmesine tıklandığında
    prevPageBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updateContent(currentPage);
            localStorage.setItem("currentPage", currentPage);
        }
    });

    // Sonraki sayfa düğmesine tıklandığında
    nextPageBtn.addEventListener("click", function () {
        let totalPages = document.querySelectorAll(".page").length;
        if (currentPage < totalPages) {
            currentPage++;
            updateContent(currentPage);
            localStorage.setItem("currentPage", currentPage);
        }
    });
});
