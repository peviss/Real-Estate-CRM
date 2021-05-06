
export const formatData = (response) => {
  var auxData = []
  response.results.map(item => {
    auxData.push({
      id: item.id,
      title: item.title.split(/(- Ref|Ref:)/)[0],
      address: item.address.state_name + ', ' + item.address.city_name,
      price: formatPrice(item.price),
      beds: formatAttr(item.attributes, 'BEDROOMS'),
      baths: formatAttr(item.attributes, 'FULL_BATHROOMS'),
      sqft: formatAttr(item.attributes, 'COVERED_AREA'),
      operation: formatAttr(item.attributes, 'OPERATION'),
      img: item.thumbnail.replace('I', 'W'),
      currency: item.currency_id === 'USD' ? 'U$S ' : '$ '
    })
  })
  return auxData
}

export const formatPrice = (price) => {
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

export const formatAttr = (attrs, attrName) => {
  return attrs.find(el => el.id === attrName) ? attrs.find(el => el.id === attrName).value_name : '-'
}

export const formatCurrency = (curr) => {
  return curr === 'USD' ? 'U$S ' : '$ '
} 