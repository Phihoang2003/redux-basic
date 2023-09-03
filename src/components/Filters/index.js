import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import {searchFilterChange,statusFilterChange,propertiesFilterChange} from "../Filters/filterSlice.js"

import { useDispatch } from "react-redux";
import { useState } from "react";
const { Search } = Input;

export default function Filters() {
  const dispatch=useDispatch();
  const [searchText,setSearchText]=useState('');
  const [filterStatus,setFilterStatus]=useState("All");
  const [propertiesFilter,setPropertiesFilter]=useState([])
  const handleChangeSearch=(e)=>{
    setSearchText(e.target.value);
    console.log((searchText));
    dispatch(searchFilterChange(e.target.value))
  }

  const handleChangeFilter=(e)=>{
    setFilterStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value))
  }

  const handleChangeProperties=(value)=>{
    setPropertiesFilter(value);
    dispatch(propertiesFilterChange(value))
  }
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder="input search text" value={searchText} onChange={handleChangeSearch} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleChangeFilter}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}

          value={propertiesFilter}
          onChange={handleChangeProperties}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
