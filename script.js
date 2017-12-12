function showProfile() {
    console.log("show! the profile!");
    var profile = document.getElementById('Profile');
    if (profile.style.display == 'block') {
        profile.style.display = 'none';
    } else {
        profile.style.display = 'block';
    }
}

function showAbout() {

    console.log("show! the about!");

    var about = document.getElementById('About');

    if (about.style.display == 'block') {  //if the about is shown
        about.style.display = 'none';  //then hide it
    } else { // if the about is not shown (if statement NOT TRUE)
        about.style.display = 'block';
    }

    //document.getElementById('About').style.display='block'
}

function showWork() {
    console.log("show! the work!");
    var work = document.getElementById('Work');
    if (work.style.display == 'block') {
        work.style.display = 'none';
    } else {
        work.style.display = 'block';
    }
}

function showContact() {
    console.log("show! the contact!");
    var contact = document.getElementById('Contact');
    if (contact.style.display == 'block') {
        contact.style.display = 'none';
    } else {
        contact.style.display = 'block';
    }
}
