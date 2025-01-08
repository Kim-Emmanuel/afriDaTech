import Navbar from '../navbar/Navbar'; // Correct path
import './layout.css'; // Import any layout-specific styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <div className="background"></div> {/* Background Element */}
    </div>
  );
};

export default Layout;
