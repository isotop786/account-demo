import React, {useState, useEffect} from "react";
import {Row,Col} from "antd"
import TableComponent from "./Components/TableComponent";


const App = () => {
  return (
    <Row style={{padding:"1rem", paddingTop:"3rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <TableComponent/>
    </Row>
  )
}

export default App;
