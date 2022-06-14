const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-contents]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
});

        
document.getElementById('standardsbtn').addEventListener('click',
function() {
    document.querySelector('.hide').style.display = 'none';
    document.querySelector('.skillsbar').style.display = 'grid';
});
document.getElementById('back').addEventListener('click',
function() {
    document.querySelector('.hide').style.display = 'block';
    document.querySelector('.skillsbar').style.display = 'none';
});
    //======================================================
    document.getElementById('policy').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'block';
        document.querySelector('.tech').style.display = 'none';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.reput').style.display = 'none';
        document.querySelector('.acute').style.display = 'none';
        document.querySelector('.chronic').style.display = 'none';
    });
    //=======
    document.getElementById('tech').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'none';
        document.querySelector('.tech').style.display = 'block';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.reput').style.display = 'none';
        document.querySelector('.acute').style.display = 'none';
        document.querySelector('.chronic').style.display = 'none';
    });
    //======
    document.getElementById('market').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'none';
        document.querySelector('.tech').style.display = 'none';
        document.querySelector('.market').style.display = 'block';
        document.querySelector('.reput').style.display = 'none';
        document.querySelector('.acute').style.display = 'none';
        document.querySelector('.chronic').style.display = 'none';
    });
    //======
    document.getElementById('reput').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'none';
        document.querySelector('.tech').style.display = 'none';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.reput').style.display = 'block';
        document.querySelector('.acute').style.display = 'none';
        document.querySelector('.chronic').style.display = 'none';
    });
    //======
    document.getElementById('chronic').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'none';
        document.querySelector('.tech').style.display = 'none';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.reput').style.display = 'none';
        document.querySelector('.acute').style.display = 'none';
        document.querySelector('.chronic').style.display = 'block';
    });
    //======
    document.getElementById('acute').addEventListener('click',
    function() {
        document.querySelector('.policy').style.display = 'none';
        document.querySelector('.tech').style.display = 'none';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.reput').style.display = 'none';
        document.querySelector('.acute').style.display = 'block';
        document.querySelector('.chronic').style.display = 'none';
    });
    //================================
    document.getElementById('phybtn').addEventListener('click',
    function() {
        document.querySelector('.transion_risk').style.display = 'none';
        document.querySelector('.phy_risk').style.display = 'block';

    });
    document.getElementById('transbtn').addEventListener('click',
    function() {
        document.querySelector('.transion_risk').style.display = 'block';
        document.querySelector('.phy_risk').style.display = 'none';
    });




//===============             Toggles                        ================//
const showbar = document.querySelector('#showbar')
const sidebardiv = document.querySelector('.sidebar')
const hideall = document.querySelector('.hide')
const standardsbtn = document.querySelector('#standardsbtn')
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle");


toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })
    //======================================================


showbar.addEventListener('click', () => {
    if(sidebardiv.style.display == 'none'){
        sidebardiv.style.display = 'block';
    }
    else{
        sidebardiv.style.display = 'none';
    }
});
