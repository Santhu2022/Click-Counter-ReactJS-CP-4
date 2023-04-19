import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseClickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-bg">
        <h1 className="sentence-text">
          The Button has been clicked
          <br />
          <span className="count-text"> {count} </span>times
        </h1>
        <p className="instruction-text">
          Click the button to increase the count!
        </p>
        <button
          className="button"
          type="submit"
          onClick={this.increaseClickCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
