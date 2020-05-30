function ChangeTab(tabname){
    var contentid = tabname + "_content";
    var navid = tabname + "_nav";
    var activeNavTab = document.querySelector(".navigator-btn.active");
    var activeContentTab = document.querySelector(".content-text.active");
    activeNavTab.classList.remove("active");
    activeContentTab.classList.remove("active");
    var newNavTab = document.querySelector("#" + navid);
    var newContentTab = document.querySelector("#" + contentid);
    newNavTab.classList.add("active");
    newContentTab.classList.add("active");
}