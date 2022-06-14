const showbar = document.querySelector('#showbar')
const sidebardiv = document.querySelector('.sidebar')

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
    //==================================
document.getElementById('filter').addEventListener('mouseover',
    function() {
        document.querySelector('.filters').style.display = 'flex';
    });
document.getElementById('wrapper').addEventListener('click',
    function() {
        document.querySelector('.filters').style.display = 'none';
    });


        //======================================================
    
    
