// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSelectingInput = suggestion => {
    console.log(suggestion)
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="google-search-container">
          <img
            className="google-logo"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
        </div>
        <div className="search-input-and-suggestions-container">
          <div className="search-input-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="search-input"
              placeholder="Search Google"
              type="search"
              value={searchInput}
              onChange={this.onInput}
            />
          </div>
          <ul className="suggestions-container">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
                onSelectingInput={this.onSelectingInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
