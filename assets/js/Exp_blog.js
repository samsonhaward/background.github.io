const ThumbDiv = document.querySelector('align');
const thumb = document.querySelector('#Thumbnail');
const btnThumb = document.querySelector('#theThumbnail');
const file = document.querySelector('#file');
let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');



//===============slider================/


buttonLeft.addEventListener('click', function() {
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function() {
    slider.scrollLeft += 125;
})

//===================================================
function myDate() {
    let dateObj = new Date();
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let year = dateObj.getFullYear();
    let day = String(dateObj.getDate()).padStart(2, '0');
    let output = day + '/' + month + '/' + year;

    return output;

}



file.addEventListener('change', function() {
    const chooseFile = this.files[0];

    if (chooseFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            thumb.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
})




document.getElementById('form').addEventListener('submit', (e) => {
    let date = myDate();
    let name = document.getElementById("title").value;
    let image = document.getElementById("Thumbnail").value;
    let email = document.getElementById("subtitle").value;
    let cate = document.getElementById("category").value;
    console.log("clicked");
    createUser(date, name, email, cate);
    e.preventDefault();
});

var users = [];

function createUser(date, title, subtitle) {
    var user = {
        date: date,
        title: title,
        subtitle: subtitle,
    }
    users.push(user);
    readUser();
    //console.log(users);
    document.getElementById('form').reset();
}

function readUser() {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        userhtml.innerHTML += `<div class = "contentBlack" data-tilt>
        <div class = "blackFirst" >
        <div class = "black" >
        <div class="dots">
        <div class="optionsDots"><button class="edit" onClick="editUser('${i}')"><img src="assets/img/edit.png"></button>
        <button class="remove" onClick="deleteUser('${i}')"><img src="assets/img/delete.png"></button></div></div>
        <div class= "middleFiller">
        <div class="card">
        <p> ${users[i].title}</p>
        </div>
        <div class="cardtitle">
        <p>${users[i].subtitle}</p>
        </div>
        </div>
        <div class="bottomCard"><p class= "sliderDate"> ${users[i].date}</p></div>
        </div></div> `
    }
}

function deleteUser(i) {
    users.splice(i, 1);
    readUser();
    console.log(users);
}

function editUser(index) {
    var userhtml = document.getElementById('user');
    userhtml.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        if (i == index) {
            userhtml.innerHTML += `<div class="red">
            Name: <input id= "input2name" required type="text" placeholder="${users[i].title}
            " ><br><br> 
            Email: <input id="input2email" placeholder = "${users[i].subtitle}" ><br><br><button class="edit" onClick="updateUser('${i}')
            ">Upload</button><button class="remove" onClick="readUser()">Cancel</button> `

        } else {
            userhtml.innerHTML += `<div class = "black"><p>Title: ${users[i].title}</p><p>Subtitle: ${users[i].subtitle}</p><button disabled class="edit" onClick="editUser('${i}')
        ">Edit</button><button disabled class="remove" onClick="deleteUser('${i}')">Delete</button> `
        }
    }
}

function updateUser(index) {
    var updatename = document.getElementById('input2name').value;
    var updatemail = document.getElementById('input2email').value;
    if (updatename == '' || updatemail == '') {
        alert("INCOMPLETE");
    } else {
        users[index].title = updatename;
        users[index].subtitle = updatemail;
        readUser();
    }
}

/*------------------pages--------------*/
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})


/*==========pop up===================*/

document.getElementById('button').addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.slide-container').style.display = 'none';
    });
document.getElementById('cancel').addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.slide-container').style.display = 'flex';
    });
document.getElementById('slider').addEventListener('mouseover',
    function() {
        document.querySelector('.samson').style.display = 'flex';
    });

document.getElementById('slider').addEventListener('mouseout',
    function() {
        document.querySelector('.samson').style.display = 'none';
    });

//rich text
const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];
        if (command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here', 'http://');
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);

        }
    });
});


//=================

file.addEventListener('change', function() {
    const chooseFile = this.files[0];

    if (chooseFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            thumb.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
})


//======================================