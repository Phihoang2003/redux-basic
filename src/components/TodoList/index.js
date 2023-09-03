import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import TodoSlice from "./TodoSlice";
import { v4 as uuidv4 } from "uuid";
import { addToDo } from "./TodoSlice";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selector.js";
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");
  const todoList = useSelector(todoRemainingSelector);
  const handleAdd = () => {
    dispatch(
      addToDo({
        id: uuidv4(),
        name: todoName,
        prioriry: prioriry,
        completed: false,
      })
    );

    setTodoName("");
    setPrioriry("Medium");
  };
  const handleChangeName = (e) => {
    setTodoName(e.target.value);
  };
  const handleChangePrioriry = (value) => {
    setPrioriry(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleChangeName} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handleChangePrioriry}
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
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
