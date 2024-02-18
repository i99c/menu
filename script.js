document.addEventListener('DOMContentLoaded', function () {
    const book = document.querySelector('.book');
    const pages = book.querySelectorAll('.page');
    let currentPageIndex = 0;

    // Sayfa indeksini güncelleyen fonksiyon
    function updatePageIndex(increment) {
        currentPageIndex += increment;
        // Sayfa indeksini kontrol etmek ve sınırları aşmamak için
        if (currentPageIndex < 0) {
            currentPageIndex = 0;
        } else if (currentPageIndex >= pages.length) {
            currentPageIndex = pages.length - 1;
        }
    }

    // Sayfaları güncelleyen fonksiyon
    function updatePages() {
        pages.forEach((page, index) => {
            if (index === currentPageIndex) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    // Sağ ok tuşuna tıklama olayı
    document.getElementById('nextPage').addEventListener('click', function () {
        updatePageIndex(1);
        updatePages();
    });

    // Sol ok tuşuna tıklama olayı
    document.getElementById('prevPage').addEventListener('click', function () {
        updatePageIndex(-1);
        updatePages();
    });
});