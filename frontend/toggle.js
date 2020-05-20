let toggle = document.querySelector('#toggle')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const div = document.querySelectorAll('div')
const input = document.querySelector('input')
const paises = document.querySelector('#paises')
const icon = document.querySelector('#icon')

const getStyle = (element, style) =>  
        window.getComputedStyle(element).getPropertyValue(style)

const darkColors = {
    bg:'#242526',
    color: '#fff'
}
const initialColors = {
    bg: getStyle(body,'--branco'),
    color: getStyle(body,'--cinza')
}


const changeColors = (colors) => {

    body.style.background = `${colors.bg}`
    h1.style.color = `${colors.color}`
    input.style.background = `${colors.bg}`
    input.style.color = `${colors.color}`
    input.style.borderBottom = `2px dotted ${colors.color}`
    paises.style.color = `${colors.color}`
    paises.style.background = `${colors.bg}`
    paises.style.borderBottom = `2px dotted ${colors.color}`
    icon.style.color = `${colors.color}`

    h2.forEach(e=>{
        e.style.color = `${colors.color}`
    })
    h3.forEach(e=>{
        e.style.color = `${colors.color}`
    })
    div.forEach(e=>{
        e.style.background = `${colors.bg}`
    })
    

}



toggle.addEventListener('click', target =>{
        target.target.checked ? changeColors(darkColors) : changeColors(initialColors)
})