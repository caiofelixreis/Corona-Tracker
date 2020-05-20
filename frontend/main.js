//global
axios.get('https://covid19.mathdro.id/api').then(response => {
    document.querySelector('#confirmed').textContent = response.data.confirmed.value
    document.querySelector('#recovered').textContent = response.data.recovered.value
    document.querySelector('#dead').textContent = response.data.deaths.value
    console.log(response.data)
})

//select
axios.get('https://covid19.mathdro.id/api/countries').then(response =>{ 
    
    let paises = response.data.countries


    document.querySelector('#paises').innerHTML = paises.map(pais =>
        `<option value="${pais.iso3}">${pais.name}</option>`
    ).join('')

})

//de cada pais
document.querySelector('#paises').onchange = pais => {
    axios.get('https://covid19.mathdro.id/api/confirmed').then(response =>{
        let dados = response.data
        console.log(response.data)
        console.log(pais.target.value)

        const achado = response.data.findIndex(valor => valor.iso3 == pais.target.value)

        document.querySelector('#confirmed').textContent = dados[achado].confirmed
        document.querySelector('#recovered').textContent = dados[achado].recovered
        document.querySelector('#dead').textContent = dados[achado].deaths
        document.querySelector('#titulo').textContent = dados[achado].countryRegion

        
    })
}
    

document.querySelector('#icon').onclick = e => window.location.href = ''

