import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const ontabItem = () => {
    updateActiveTab(tabId)
  }
  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={ontabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
