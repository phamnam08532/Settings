// Example to handle setting changes
document.querySelector('.save-btn').addEventListener('click', function() {
    const wifiStatus = document.getElementById('wifi').checked ? 'Enabled' : 'Disabled';
    const dataStatus = document.getElementById('data').checked ? 'Enabled' : 'Disabled';
    const brightnessValue = document.getElementById('brightness').value;

    alert(`Wi-Fi: ${wifiStatus}
Mobile Data: ${dataStatus}
Brightness: ${brightnessValue}%`);
});