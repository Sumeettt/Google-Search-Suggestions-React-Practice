// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onSelectingInput} = props
  const {id, suggestion} = eachSuggestion

  const onSelection = () => {
    onSelectingInput(suggestion)
  }

  return (
    <li className="suggestion-list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          onClick={onSelection}
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
