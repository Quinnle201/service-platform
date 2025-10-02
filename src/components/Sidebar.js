import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-primary text-white vh-100 p-3">
      <h5 className="mb-4">Admin Panel</h5>
      <Nav defaultActiveKey="/admin" className="flex-column">
        <Nav.Link as={Link} to="/admin" className="text-white mb-2">Inquiries</Nav.Link>
        {/* Add more links later */}
      </Nav>
    </div>
  );
}
