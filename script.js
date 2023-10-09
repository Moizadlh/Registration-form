// Names getting

let fname = ""
let lname = ""
let fnamep = document.getElementById("fnamep")
let lnamep = document.getElementById("lnamep")

let fnames = document.getElementById("fname").addEventListener("input",function(){
    fname = document.getElementById("fname").value
})
let lnames = document.getElementById("lname").addEventListener("input",function(){
    lname = document.getElementById("lname").value
})

// email getting

let email = ""
let oemail = ""
let count = 0
let ocount = 0
let emailp = document.getElementById("emailp")
let oemailp = document.getElementById("oemailp")

let emails = document.getElementById("email").addEventListener("input",function(){
    email = document.getElementById("email").value
    count = 0
    for (const iterator of email) {
        if (iterator === "@") {
            count += 1
        }
    }
})
let oemails = document.getElementById("oemail").addEventListener("input",function(){
    oemail = document.getElementById("oemail").value
    ocount = 0
    for (const iterator of oemail) {
        if (iterator === "@") {
            ocount += 1
        }
    }
})

// contact info
let cont = ""
let ocont = ""
let contp = document.getElementById("contp")
let ocontp = document.getElementById("ocontp")

let conts = document.getElementById("cont").addEventListener("input",function(){
    let contc = document.getElementById("cont").value
    cont = contc + ""
})
let oconts = document.getElementById("ocont").addEventListener("input",function(){
    let ocontc = document.getElementById("ocont").value
    ocont = ocontc + ""
})

// password info
let passw = ""
let cpassw = ""
let passwp = document.getElementById("passwp")
let cpasswp = document.getElementById("cpasswp")

let passws = document.getElementById("passw").addEventListener("input",function(){
    passw = document.getElementById("passw").value

})
let cpassws = document.getElementById("cpassw").addEventListener("input",function(){
    cpassw= document.getElementById("cpassw").value
})


// Registration button

document.getElementById("submit").addEventListener("click",check)
function check(event) {
    let submission = true
    if ((fname === "")){
        submission = false
        event.preventDefault();
        fnamep.style.display = "inline"
    }
    else{
        fnamep.style.display = "none"
    }
    if ((lname === "") || (lname.length <= 2)){
        submission = false
        event.preventDefault();
        lnamep.style.display = "inline"
    }
    else{
        lnamep.style.display = "none"
    }

    // Email validation
    if (email === "") {
        submission = false
        event.preventDefault();
        emailp.style.display = "inline" 
    } 
    else {
        if ((count > 1) || (count == 0)) {
            submission = false
            event.preventDefault();
            emailp.style.display = "inline"
        }
        else{
            if (email.includes("@")){
                parts = email.split("@")
                if ((parts[1] == "gmail.com") || (parts[1] == "hotstar.com") 
                || (parts[1] == "yahoo.com")) {
                    emailp.style.display = "none"
                }
                else{
                    if (parts[0] == "") {
                        submission = false
                        event.preventDefault();
                        emailp.style.display = "inline"
                    } 
                    else {
                        submission = false
                        event.preventDefault();
                        emailp.style.display = "inline"   
                    }
                }
            }
        }
    }
    if (oemail === "") {
        oemailp.style.display = "none" 
    } 
    else {
        if ((ocount > 1) || (ocount == 0)) {
            submission = false
            event.preventDefault();
            oemailp.style.display = "inline"
        }
        else{
            if (oemail.includes("@")){
                oparts = oemail.split("@")
                if ((oparts[1] == "gmail.com") || (oparts[1] == "hotstar.com") 
                || (oparts[1] == "yahoo.com")) {
                    oemailp.style.display = "none"
                }
                else{
                    if (oparts[0] == "") {
                        submission = false
                        event.preventDefault();
                        oemailp.style.display = "inline"
                    } 
                    else {
                        submission = false
                        event.preventDefault();
                        oemailp.style.display = "inline"
                    }
                }
            }
        }
    }

    // contact validation
    if ((cont == "") || (cont.length <= 10)) {
        submission = false
        event.preventDefault();
        contp.style.display = "inline"
    }
    else{
        contp.style.display = "none"
    }
    
    if ((ocont == "")) {
        ocontp.style.display = "none"
    }
    else{
        if (ocont.length <= 10) {
            submission = false
            event.preventDefault();
            ocontp.style.display = "inline"
        }
        else{
            ocontp.style.display = "none"
        }
    }

    // Password validation
    if ((passw == "") || (passw.length < 8)) {
        submission = false
        event.preventDefault();
        passwp.style.display = "inline"
    }
    else{
        passwp.style.display = "none"
    }
    if ((cpassw == "") || (cpassw.length < 8)) {
        submission = false
        event.preventDefault();
        cpasswp.style.display = "inline"
    }
    else{
        if (cpassw != passw) {
            submission = false
            event.preventDefault();
            cpasswp.style.display = "inline"
        }
        else{
            cpasswp.style.display = "none"
        }
    }

    if (submission) {
        event.preventDefault();
        document.getElementById("full").style.display = "none"
        document.getElementById("submitted").style.display = "flex"
    }
}


// STRONG PASSWORD RECOMMENDATION
document.getElementById("pass").addEventListener("click",passgenerate)
function passgenerate(event) {
    event.preventDefault();
    passw = "1@qweasd"
    cpassw = "1@qweasd"
    document.getElementById("passw").value = passw
    document.getElementById("cpassw").value = cpassw
}

document.getElementById("Ar").addEventListener("click",Again)
function Again() {
    location.reload()
    // document.getElementById("full").style.display = "flex"
    // document.getElementById("submitted").style.display = "none"
}