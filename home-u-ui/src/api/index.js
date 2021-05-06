import axios from 'axios'

const formatPrice = (price) => {
    var aux = price.toString();
    var formated = "";
    var cont = aux.length;
    if (aux.length < 4) return aux
    while (cont > 3) {
      formated = `.${aux.slice(-3, aux.length)}${formated}`;
      cont -= 3;
    }
    formated = `${aux.slice(0, cont)}${formated}`
    return formated;
  }

export const fetchDataFromAPI = async () => {

    const url = 'https://api.mercadolibre.com/sites/MLU/search?q=apartamento%20punta%20del%20este'
    await axios.get(url)
      .then(res => {
        var response = res.data
        var auxData = []
        console.log(response)
        response.results.map(item => {
          auxData.push({
            id: item.id,
            title: item.title.split(/(- Ref|Ref:)/)[0],
            address: item.address.state_name + ', ' + item.address.city_name,
            //price: item.price,
            price: formatPrice(item.price),
            beds: item.attributes.find(el => el.id === 'BEDROOMS').value_name,
            baths: item.attributes.find(el => el.id === 'FULL_BATHROOMS').value_name,
            sqft: item.attributes.find(el => el.id === 'COVERED_AREA').value_name,
            operation: item.attributes.find(el => el.id === 'OPERATION').value_name,
            img: item.thumbnail.replace('I', 'W'),
            currency: item.currency_id==='USD' ? 'U$S ' : '$ '
          })
        })
        console.log(auxData)
        return auxData
      })
      .catch(err => console.log(err))
  }