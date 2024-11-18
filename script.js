function updateClock() {
    const date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}

// Запустить обновление каждую секунду
setInterval(updateClock, 1000); // Интервал уменьшен до 1 секунды

// Сразу обновить при загрузке страницы
updateClock();

document.getElementById('folder-link').addEventListener('click', function() {
    const browserWindow = document.getElementById('browser-window');
    const isHidden = window.getComputedStyle(browserWindow).getPropertyValue("display") === "none";

    if (isHidden) {
        browserWindow.style.display = 'block';
    } else {
        browserWindow.style.display = 'none';
    }

    const normalIcon = document.getElementById('folder-icon-normal');
    const activeIcon = document.getElementById('folder-icon-active');

    if (activeIcon.style.display === 'none') {
        activeIcon.style.display = '';
        normalIcon.style.display = 'none';
    } else {
        activeIcon.style.display = 'none';
        normalIcon.style.display = '';
    }
});