import React, { Component } from "react"

class InputText extends Component {
  render() {
    return <div className="Slider" className={this.props.special} >
        <div className={this.props.title}>
        <label for={this.props.id}>Name (4 to 8 characters):</label>

        <input 
          type="text" 
          id={this.props.id}
          name={this.props.id} 
          required minlength="2" 
          // size="10"
          onChange={(e) => {(this.props.handleChange(e.target.value))}} 
          placeholder={this.props.placeholder}
        />
      </div>
    </div>
  }
}

export default InputText