let header = document.getElementById("header");

async function f() {
    const response = await fetch("/html/header.html");
    let text = await response.text();
    header.innerHTML = text;

    let elements = document.getElementsByClassName("dropdown");
    Array.from(elements).forEach(e => {
        e.addEventListener('click', function() {
            console.log();
            let c = e.parentElement.children[1];
            if (c.style.display === 'block') {
                c.style.display = 'none';
            } else {
                c.style.display = 'block';
            }
        });
    });
}

if (header != null) {
    f();
}

