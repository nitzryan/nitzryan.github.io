async function f() {
    var dropdownButtons = document.getElementsByClassName("dropbtn");

    for (let i = 0; i < dropdownButtons.length; i++) {
        dropdownButtons[i].addEventListener('click', function(event) {
            let parent = event.target.parentElement;
            let content = parent.children[1];
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
}

f();

