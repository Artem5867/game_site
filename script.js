window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#000' : 'rgba(0,0,0,0.8)';
});

console.log("Сайт ГЕЙмерские приколы загружен!");

function showTab(tabName) {
    // Скрываем все вкладки
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Показываем нужную
    document.getElementById(tabName + '-section').style.display = 'block';
    
    // Обновляем активную ссылку в меню
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Переключение вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Показываем выбранную вкладку
    const activeTab = document.getElementById(tabName + '-section');
    if (activeTab) {
        activeTab.style.display = 'block';
    }
    
    // Обновляем активный класс в навигации
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Добавляем активный класс текущей ссылке
    event.target.classList.add('active');
}

// При загрузке страницы показываем главную вкладку
document.addEventListener('DOMContentLoaded', function() {
    showTab('main');
});