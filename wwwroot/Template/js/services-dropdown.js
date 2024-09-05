document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('servicesNav').addEventListener('click', function (event) {
        if (event.target === this) {
            window.location.href = '/Services/Index';
        }
    });
});
