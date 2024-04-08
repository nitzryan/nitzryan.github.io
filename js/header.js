async function f() {
    const response = await fetch("/html/header.html");
    let text = await response.text();
    header.innerHTML = text;

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

if (header != null) {
    f();
}

