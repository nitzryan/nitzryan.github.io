async function f() {
    const response = await fetch("/repos/PortfolioSim/index.html");
    let text = await response.text();
    text = text.replace("<head>", "<head><base href='/repos/PortfolioSim/'><script src='/js/header.js' defer></script>");
    text = text.replace("<body>", "<body><div id='header'></div>");
    document.open();
    document.write(text);
    document.close();
}
f();