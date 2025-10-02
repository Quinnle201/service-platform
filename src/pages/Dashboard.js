import { useEffect, useState } from "react";
import { Row, Col, Table, Badge } from "react-bootstrap";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/inquiries")
      .then(res => setInquiries(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Row>
      <Col md={2} className="p-0">
        <Sidebar />
      </Col>
      <Col md={10} className="p-4 bg-light vh-100">
        <h2 className="mb-4" style={{color:"#4B0082"}}>Customer Inquiries</h2>
        <Table striped bordered hover responsive className="shadow-sm bg-white rounded">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(i => (
              <tr key={i._id}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.message}</td>
                <td><Badge bg="success">{i.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
