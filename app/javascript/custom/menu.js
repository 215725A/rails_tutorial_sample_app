// メニュー操作

// トグルリスナーを追加してクリックをリッスンする
document.addEventListener("turbo:load", function() {
    let hamberger = document.querySelector("#hamburger");
    hamberger.addEventListener("click", function(event) {
        event.preventDefault();
        let menu = document.querySelector("#navbar-menu");
        menu.classList.toggle("collapse");
    });


    let account = document.querySelector("#account");
    account.addEventListener("click", function(event) {
        event.preventDefault();
        let menu = document.querySelector("#dropdown-menu");
        menu.classList.toggle("active");
    });
});