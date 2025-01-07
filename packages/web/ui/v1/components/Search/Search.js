import React, { Component } from 'react'
import states from '../../assets/states.json'
import montevideo from '../../assets/montevideo.json'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.items = []
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  componentDidMount() {
    const statesCol = states.states;
    const { name } = montevideo;
    montevideo.cities.map(city => {
      this.items.push(`${city.name}, ${name}`)
    })
    statesCol.map(state => {
      this.items.push(state.name)
    })
  }

  getCurrentLocation() {
    if ("geolocation" in navigator) {
      /* la geolocalización está disponible */
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      /* la geolocalización NO está disponible */
      console.log('No')
    }
  }

  renderSearchCurrLocation() {
    const { text } = this.state
    if (text == '') {
      return (
        <ul>
          <li><i class="material-icons-outlined">room</i>     Search in your location</li>
        </ul>
      )
    }
  }

  onInputClicked = (e) => {
    if (e.target.value != '') {

    }
  }

  onTextChanged = (e) => {
    const value = e.target.value
    let suggestions = []
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = this.items.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  renderSuggestions() {
    const { suggestions } = this.state
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.slice(0, 5).map(item => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  suggestionSelected(value) {
    this.setState({
      text: value,
      suggestions: []
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className="search-container">
        <div className="search-body">
          <div>
            <input
              value={text}
              onChange={this.onTextChanged}
              placeholder="Escribe lo que buscas aqui"
              type="text"
            />
            {/* <input type="button" value="Buscar"/> */}
            {this.renderSearchCurrLocation()}
            {this.renderSuggestions()}

          </div>

        </div>
      </div>
    )
  }
}

export default Search
