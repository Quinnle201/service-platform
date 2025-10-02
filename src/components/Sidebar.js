import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-light vh-100 p-3">
      <h5>Admin Panel</h5>
      <Nav defaultActiveKey="/admin" className="flex-column">
        <Nav.Link as={Link} to="/admin">
          Inquiries
        </Nav.Link>
        {/* Add more links later: Services, Gallery, Profile */}
      </Nav>
    </div>
  );
}
