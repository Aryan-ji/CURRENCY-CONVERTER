console.log('server started');

const populate = async (base, value) => {
    let myStr = ''
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_T4Ng2QgH0LDfaeaIlnsP7QGSPBUpZfl2aNn9PNjr&base_currency=${base}`
    const response = await fetch(url)
    const data = await response.json()
    const resultElement = document.querySelector('.result')
    resultElement.style.display = 'block'
    resultElement.style.transition = 'all 0.3s ease-in-out'
    console.log(data)
    for (const key of Object.keys(data['data'])) {
        key, data['data'][key]["code"], data['data'][key]['value']
        myStr += `<tr><td>${key}</td><td>${data['data'][key]["code"]}</td><td>${(data['data'][key]['value'] * value).toFixed(4)}</td></tr>`
    }
    const tableBody = document.querySelector('tbody')

    tableBody.innerHTML = myStr
}

const button = document.querySelector('#btn');
button.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('button clicked')
    const currency = document.querySelector("select[name='currency']").value
    const value = Number.parseInt(document.querySelector("input[name='amount']").value)
    populate(currency, value)
})


