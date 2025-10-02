import { useEffect, useState } from "react";
import { Row, Col, Table, Badge, Spinner } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/inquiries");
        setInquiries(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <Row className="m-0">
      {/* Sidebar */}
      <Col md={2} className="p-0">
        <Sidebar />
      </Col>

      {/* Main Content */}
      <Col md={10} className="p-4 bg-light vh-100 overflow-auto">
        <h2 className="mb-4" style={{color:"#4B0082"}}>Customer Inquiries</h2>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Table striped bordered hover responsive className="shadow-sm bg-white rounded">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">No inquiries yet.</td>
                </tr>
              ) : (
                inquiries.map((i) => (
                  <tr key={i._id}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.phone}</td>
                    <td>{i.service || "-"}</td>
                    <td>{i.message}</td>
                    <td>
                      <Badge bg={i.status === "pending" ? "warning" : "success"}>
                        {i.status || "pending"}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
}

