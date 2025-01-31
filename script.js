document.addEventListener("DOMContentLoaded", () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    updateUTCTime(currentTimeElement);
});

function updateUTCTime(element) {
    const now = new Date();
    const utcTime = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    element.textContent = `Current Time (UTC): ${utcTime}`;
}