/* Fixes height for propaganda-image-container */

window.onload = function() {
    if(document.getElementsByClassName("propaganda-gallery").length > 0) {
        getGalleryContainerHeight();
    };

    if(document.querySelector(".checkbox.nemesis-anti")) {
        document.querySelector(".checkbox.nemesis-anti").addEventListener("click", hideNemesisAntagonist);
    } 

    if(document.querySelector(".checkbox.nemesis-pro")) {
        document.querySelector(".checkbox.nemesis-pro").addEventListener("click", hideNemesisProtagonist);
    } 

    if(document.querySelector(".checkbox.threed-art")) {
        document.querySelector(".checkbox.threed-art").addEventListener("click", hideThreeDArt);
    }

    if(document.querySelector(".checkbox.character-design")) {
        document.querySelector(".checkbox.character-design").addEventListener("click", hideCharacterDesign);
    }

    if(document.querySelector(".checkbox.illustration")) {
        document.querySelector(".checkbox.illustration").addEventListener("click", hideIllustration);
    }
};

function getGalleryContainerHeight() {
    let tabs = document.getElementsByClassName('js-gallery-tab');
    let i;
    let propagandaheight;
    let x;
    for (i = 0 ; i < tabs.length; i++) {
        if (tabs[i].checked) {
            x = tabs[i].parentNode;
            propagandaheight = x.lastElementChild.offsetHeight;            
        }
    }

    let fullimage = document.querySelector("#fullimagecontainer");
    fullimage.style.height = propagandaheight + "px";
}

function hideNemesisAntagonist() {
    let antagonistarray = document.querySelectorAll(".hex.nemesis-anti");
    let i;

    for (i=0 ; i < antagonistarray.length; i++) {
        if(antagonistarray[i].classList.contains("hide-hex")) {
            antagonistarray[i].classList.remove("hide-hex");
        } else {
            antagonistarray[i].classList.add("hide-hex");
        }
    }
}

function hideNemesisProtagonist() {
    let protagonistarray = document.querySelectorAll(".hex.nemesis-pro");
    let i;

    for (i=0 ; i < protagonistarray.length; i++) {
        if(protagonistarray[i].classList.contains("hide-hex")) {
            protagonistarray[i].classList.remove("hide-hex");
        } else {
            protagonistarray[i].classList.add("hide-hex");
        }
    }
}

function hideThreeDArt() {
    let threearray = document.querySelectorAll(".hex.threed-art");
    let i;

    for (i=0 ; i < threearray.length; i++) {
        if(threearray[i].classList.contains("hide-hex")) {
            threearray[i].classList.remove("hide-hex");
        } else {
            threearray[i].classList.add("hide-hex");
        }
    }
}

function hideCharacterDesign() {
    let chardesignarray = document.querySelectorAll(".hex.character-design");
    let i;

    for (i=0 ; i < chardesignarray.length; i++) {
        if(chardesignarray[i].classList.contains("hide-hex")) {
            chardesignarray[i].classList.remove("hide-hex");
        } else {
            chardesignarray[i].classList.add("hide-hex");
        }
    }
}

function hideIllustration() {
    let illustrationarray = document.querySelectorAll(".hex.illustration");
    let i;

    for (i=0 ; i < illustrationarray.length; i++) {
        if(illustrationarray[i].classList.contains("hide-hex")) {
            illustrationarray[i].classList.remove("hide-hex");
        } else {
            illustrationarray[i].classList.add("hide-hex");
        }
    }
}