import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

class PriceInput extends React.Component {
  handleNumberChange = e => {
    // const number = parseInt(e.target.value || 0, 10);
    // if (isNaN(number)) {
    //   return;
    // }
    // this.triggerChange({ number });
  };

  handleChange = selection => {
    console.log(selection);
    this.triggerChange({ selection });
  };

  triggerChange = changedValue => {
    console.log(changedValue);
    const { onChange, value } = this.props;
    console.log(this.props);
    if (onChange) {
      onChange({
        ...value,
        ...changedValue
      });
    }
  };

  render() {
    const { size, value } = this.props;
    return (
      <span>
        <Input
          type='text'
          size={size}
          style={{ width: "57%", marginRight: "3%" }}
        />
        <Select
          value={value.selection}
          //   size={size}
          style={{ width: "40%" }}
          onChange={this.handleChange}
        >
          <Option value='Get_Code'>Get Code</Option>
          <Option value='Custom_Code'>Custom Code</Option>
        </Select>
      </span>
    );
  }
}

export default PriceInput;
