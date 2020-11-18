import { Table, Card, Space, Tooltip, Popconfirm, message } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Select } from "antd";
import FilterEmployee from "./filter-employee";
import View from "./action/view";
import Edit from "./action/edit";
import Remove from "./action/remove";
// import { fetchEmployee } from "../../constants/api";
import Axios from "axios";
import {
  employeeLoad,
  maskLoad,
  noMaskFilter,
  noMaskLoad,
} from "../../constants/action";
import { deleteEmployee, updateEmployee } from "../../constants/url";

// const { Option } = Select;
const { Column } = Table;
const current = new Date();
const currentDay = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`;

const ListEmployee = () => {
  const empList = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  // const [data, setData] = useState(empList.empList);
  const [data, setData] = useState();
  // console.log("data", data);
  const [filter, setFilter] = useState();
  const [view, setView] = useState(false);
  const closeModalView = () => setView(false);
  const [edit, setEdit] = useState(false);
  const closeModalEdit = () => setEdit(false);
  // const [remove, setRemove] = useState(false);
  // const closeModalRemove = () => setRemove(false);
  const okModalEdit = (values) => {
    // console.log(values);
    Axios.put(updateEmployee(), {
      user_name: values.user_name,
      gender: values.gender,
      dateOfBirth: values.date,
      country: values.country,
      area: values.area,
      phone: values.phone,
      id: values.id,
    }).then(() => {
      alert("Update Success !");
    });
    setEdit(false);
    message.success("Update Success !");
    dispatch(employeeLoad(""));
  };
  // const okModalRemove = ({ values }) => {
  //   console.log("data", values);
  //   setEdit(false);
  // };

  // console.log(empList.empList);
  useEffect(() => {
    dispatch(employeeLoad(""));
  }, [dispatch]);

  // On click Search
  const onClickInput = (value) => {
    // console.log(value);
    // setSearch(value);
    // const cloneList =  ...empList;
    // console.log("e", empList);
    const empLists = empList.empListFilter.filter(({ filter: data }) => {
      return data.toLowerCase().includes(value);
    });
    dispatch(noMaskFilter({ empLists, value }));
  };

  const onClickDateMask = (date, dateString) => {
    // console.log(dateString);
    if (date !== null || date !== "") {
      dispatch(maskLoad(dateString));
    } else {
      dispatch(maskLoad(currentDay));
    }
  };
  const onClickDate = (date, dateString) => {
    // console.log(!date, dateString);
    if (date) {
      const empLists = empList.empListFilter.filter(({ date: data }) => {
        return data >= dateString[0] && data <= dateString[1];
      });
      dispatch(noMaskFilter({ empLists }));
    } else {
      dispatch(noMaskLoad());
    }
    // return console.log("", EmpLists);
  };
  // console.log(filter);
  const onClickFilter = useCallback(
    (value) => {
      // console.log(search);
      setFilter(value);
      if (value === "No Mask") dispatch(noMaskLoad());
      else if (value === "All") dispatch(employeeLoad(""));
      else if (value === "Mask") dispatch(maskLoad(currentDay));
    },
    [dispatch]
  );
  // console.log(currentDay);
  // const dataList = () => {
  //   if (filter) {
  //     return empList.empListFilter;
  //   } else if (filter && search) {
  //     return empList.empListInput;
  //   } else return empList.empList;
  // };
  const key = () => {
    return (
      Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 10000)
    );
  };

  const confirm = (record) => {
    console.log(record);
    Axios.delete(`http://localhost:3200/api/deleteEmployee/${record.id}`);
    message.success("Delete Success !");
    dispatch(employeeLoad(""));
  };
  const cancel = (e) => {
    console.log(e);
    message.success("Click on No");
  };

  return (
    <div className="card-list">
      <FilterEmployee
        onClickInput={onClickInput}
        onClickFilter={onClickFilter}
        filter={filter}
        onClickDate={onClickDate}
        onClickDateMask={onClickDateMask}
      />
      <Card style={{ width: "100%", height: "100%" }}>
        <div className="card-header">
          <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
            <h2 className="table-h2">Employee Stats</h2>
            <h4 className="table-h4">List Employees</h4>
          </div>
        </div>
        <div className="card-footer">
          <Table
            dataSource={empList.empList}
            size="middle"
            className="card-table"
            rowKey={key}
            // onRow={(record, key) => {
            //   return {
            //     onClick: (event) => {
            //       event.stopPropagation();
            //       setData(record);
            //     },
            //   };
            // }}
          >
            {/* <Column title="ID" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Birthday" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" /> */}
            <Column title="ID" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="user_name" key="user_name" />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Area" dataIndex="area" key="area" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Tooltip title="View">
                    <EyeOutlined
                      onClick={() => {
                        setView(true);
                        setData(record);
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => {
                        setData(record);
                        setEdit(true);
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Popconfirm
                      title={`Are you sure to delete ${record.user_name} ?`}
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                      onConfirm={() => confirm(record)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        onClick={() => {
                          // setRemove(true);
                          // console.log(data);
                        }}
                      />
                    </Popconfirm>
                  </Tooltip>
                </Space>
              )}
            />
          </Table>
        </div>
      </Card>
      <View view={view} closeModalView={closeModalView} data={data} />
      <Edit
        edit={edit}
        closeModalEdit={closeModalEdit}
        okModalEdit={okModalEdit}
        data={data}
      />
      {/* <Remove
        remove={remove}
        closeModalRemove={closeModalRemove}
        okModalRemove={okModalRemove}
        key={data.key}
      /> */}
    </div>
  );
};

export default ListEmployee;
