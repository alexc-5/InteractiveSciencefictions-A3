function changeHome() {

    document.getElementById("navHome");
    href="index.html";
    open("index.html");

}

function changeDms() {

    document.getElementById("navDms");
    href="profile.html";
    open("dms.html");

}

function changeProfile() {

    document.getElementById("navProf");
    href="profile.html";
    open("profile.html");

}



//I feel like there is a more efficient way to do this, but unfortunately I can't find/figure it out :(

function openChatLilly() {

    document.getElementById("chatLilly").style.zIndex="10";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatTia() {
    
    document.getElementById("chatTia").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatLeo() {
    
    document.getElementById("chatLeo").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatSam() {

    document.getElementById("chatSam").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatKatie() {

    document.getElementById("chatKatie").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatCharlie() {

    document.getElementById("chatCharlie").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatClancy() {

    document.getElementById("chatClancy").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatJames").style.zIndex="1";

}

function openChatJames() {

    document.getElementById("chatJames").style.zIndex="10";
    document.getElementById("chatLilly").style.zIndex="1";
    document.getElementById("chatTia").style.zIndex="1";
    document.getElementById("chatLeo").style.zIndex="1";
    document.getElementById("chatSam").style.zIndex="1";
    document.getElementById("chatKatie").style.zIndex="1";
    document.getElementById("chatCharlie").style.zIndex="1";
    document.getElementById("chatClancy").style.zIndex="1";

}

//window.location.reload();