import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'tab-btn active' : 'tab-btn'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tabs-list">
      <button type="button" className={activeTabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
