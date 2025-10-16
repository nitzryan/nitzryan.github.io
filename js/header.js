let path = window.location.pathname

console.log(path)

let nav_home = document.getElementById('nav_home')

let nav_ai = document.getElementById('nav_ai')
let nav_ai_baseball = document.getElementById('nav_ai_baseball')
let nav_ai_hex = document.getElementById('nav_ai_hex')
let nav_ai_portsim = document.getElementById('nav_ai_portsim')

let nav_sim = document.getElementById('nav_sim')
let nav_sim_pathplan = document.getElementById('nav_sim_pathplan')
let nav_sim_smoke = document.getElementById('nav_sim_smoke')

if (path == "/")
{
    nav_home.classList.add('selected')
} else if (path.includes('CrystalDiamond.html'))
{
    nav_ai.classList.add('selected')
    nav_ai_baseball.classList.add('selected')
} else if (path.includes("Hex.html"))
{
    nav_ai.classList.add('selected')
    nav_ai_hex.classList.add('selected')
} else if (path.includes("PortfolioSim.html"))
{
    nav_ai.classList.add('selected')
    nav_ai_portsim.classList.add('selected')
} else if (path.includes("PathPlanning.html"))
{
    nav_sim.classList.add('selected')
    nav_sim_pathplan.classList.add('selected')
} else if (path.includes("SmokeSim.html"))
{
    nav_sim.classList.add('selected')
    nav_sim_smoke.classList.add('selected')
}