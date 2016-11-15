function init() {
    document.getElementById('nav-icon2').onclick = function() {
        if(this.classList.contains('open')) {
            this.classList.remove('open');
            document.getElementById('menuContainer').classList.remove('open');
        }
        else {
            this.classList.add('open');
            document.getElementById('menuContainer').classList.add('open');
        }
    }
}