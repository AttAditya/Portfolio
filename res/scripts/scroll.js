document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href').startsWith('#')) {
            a.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});