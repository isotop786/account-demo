import React, { useState,useEffect } from 'react';
import { Space, Table, Tree,Modal,Button,Checkbox,Input, Divider} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { selectedData,addData } from '../redux/actions/dataAction';
// import { TreeComponet } from './TreeComponent';
const { TreeNode } = Tree

const TableComponent = () =>
{

  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.allData.data)
  const selected = useSelector((state) => state.allData.selectedData)
  const { TextArea } = Input;

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [accountType, setAccountType] = useState('');
  const [userStatus, setUserStatus] = useState(false);
  const [note, setNote] = useState('')
  const [dataChanged,setDataChanged] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {

    const newData = {
      id: Math.floor(Math.random() * parseInt(selected? selected :101)),
      name: name,
      type: accountType,
      category: category,
      code: Math.floor(Math.random() * parseInt(selected? selected :101)),
      parent_code: selected,
      note: note,
      user_status: userStatus,
    }



    dispatch(addData(newData))

    setDataChanged(!dataChanged)

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = (e,code) => {
    e.preventDefault();
    // alert(id)
    dispatch(selectedData(code))
    setIsModalOpen(true)
  }



  useEffect(() => {
        const generateChild = (arr) => {
        return arr.reduce((acc, val, ind, array) => {
            const childs = [];
            array.forEach((el) => {
            if (el.parent_code === val.code) {
                childs.push(el);
            }
            });
            return acc.concat({ ...val, childs });
        }, []);
        };
    // console.log(generateChild(alldata));
    setData(generateChild(alldata))
  },[alldata])

  const [columns, setColumns] = useState([
  {
    title: 'Account Name',
    dataIndex:'name',
    key: 'name',
    render: name => <a>{name}</a>
  },
  {
    title: 'Action',
    dataIndex:'code',
    render: (code) => <><Button type='primary' size='middle' onClick={e => onClick(e,code)}>Add</Button></>
  },
  {
    title: 'Account Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Account Category',
    dataIndex: 'type',
    key: 'category',
   
  },
  {
    title: 'User status',
    dataIndex: 'user_status',
    key: 'address',
    render: (text)=> <><a>{text ? 'Yes' : 'No'}</a></>
  },
  {
    title: 'Note',
    dataIndex: 'note',
    key: 'address',
  },
  ])

  const nestCol = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Category",
      dataIndex: "type",
      key:"type"
    },
    {
      title: "Parent Code",
      dataIndex: "parent_code",
      key:"parent_code"
    }
  ]


  return (
    <>
      <Table columns={columns}
        dataSource={data.filter(item => item.childs.length >0)}
        expandable={{
          rowExpandable: (data) => data.childs.length > 0,
          expandedRowRender: (data) => {
            return (
              <Table columns={nestCol} dataSource={data.childs} pagination={false} />
            )
          },
          defaultExpandAllRows:false
        }}
        pagination={false} />
        
      <Modal title="Add Account" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Account Code: {selected}</p>
        <table>
          <tr>
            <td>Name</td>
            <td><Input type="text" onChange={e =>setName(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Account Type</td>
            <td><Input placeholder='e.g Debit' type="text" onChange={e =>setAccountType(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Category</td>
            <td><Input placeholder='e.g Resource,Money' type="text" onChange={e =>setCategory(e.target.value)}/></td>
          </tr>
          <tr>
            <td>User Active</td>
            <td>
             <Checkbox onChange={()=> setUserStatus(!userStatus)}></Checkbox>
            </td>
          </tr>
          <tr>
            <td>Note</td>
            <td>
              <TextArea rows={2} onChange={e => setNote(e.target.value)}/>
            </td>
          </tr>
        </table>
      </Modal>
    </>
  )
}
export default TableComponent;