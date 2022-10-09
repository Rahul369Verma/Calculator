import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

type ofItem = {
  one: string;
  two: string;
  result: string;
  operation: string;
  id: number;
  createdDate: string;
  createdTime: string;
};

type DataIndex = keyof ofItem;

// const data: DataType[] = [
//   {
//     id: "1",
//     one: "John Brown",
//     two: "Jflkasdf",
//     operation: "+",
//     result: "32",
//     createdDate: "New York No. 1 Lake Park",
//     createdTime: "New York No. 1 Lake Park",
//   },
//   {
//     id: "2",
//     one: "Joe Black",
//     two: "Jflkasdf",
//     operation: "+",
//     result: "42",
//     createdDate: "London No. 1 Lake Park",
//     createdTime: "New York No. 1 Lake Park",
//   },
//   {
//     id: "3",
//     one: "Jim Green",
//     two: "Jflkasdf",
//     operation: "+",
//     result: "32",
//     createdDate: "Sidney No. 1 Lake Park",
//     createdTime: "New York No. 1 Lake Park",
//   },
//   {
//     id: "4",
//     one: "Jim Red",
//     two: "Jflkasdf",
//     operation: "+",
//     result: "32",
//     createdDate: "London No. 2 Lake Park",
//     createdTime: "New York No. 1 Lake Park",
//   },
// ];

const HistoryTable: React.FC<{
  handleDelete: (value: ofItem) => void;
  data: ofItem[];
}> = (props) => {
  const { handleDelete, data } = props;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<ofItem> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<ofItem> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "8%",
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps("id"),
    },
    {
      title: "Calculation",
      dataIndex: "calculation",
      render: (text, record) => (
        <span>
          {record.one} {record.operation} {record.two}
        </span>
      ),
      key: "age",
      width: "32%",
      // ...getColumnSearchProps("calculation"),
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "age",
      width: "20%",
      // ...getColumnSearchProps("calculation"),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      // render: (text, record) => <span>{record.createdDate}</span>,
      key: "createdDate",
      width: "12%",
      responsive: ["md"],
      ...getColumnSearchProps("createdDate"),
    },
    {
      title: "Created Time",
      dataIndex: "createdTime",
      // render: (text, record) => <span>{record.createdTime}</span>,
      key: "createdTime",
      width: "12%",
      responsive: ["md"],
      ...getColumnSearchProps("createdTime"),
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, record) => (
        <span>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(record)}
          >
            Trash
          </button>
        </span>
      ),
      key: "createdTime",
      width: "15%",
      // ...getColumnSearchProps("createdTime"),
    },
    // {
    //   title: "Address",
    //   width: "10%",
    //   dataIndex: "address",
    //   key: "address",
    //   ...getColumnSearchProps("address"),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ["descend", "ascend"],
    // },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default HistoryTable;
