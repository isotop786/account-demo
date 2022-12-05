import React, {useState, useEffect} from "react";
import {Row,Col} from "antd"
import TableComponent from "./Components/TableComponent";


const App = () => {
  return (
    <Row style={styles.container}>
        <TableComponent/>
    </Row>
  )
}

const styles = {
  container: {
    padding: "1rem",
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "center", alignItems: "center"
 }
}

export default App;
