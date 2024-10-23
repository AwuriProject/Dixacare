import Navbar from "./Navbar";
import SubHeaderSection from "./SubHeadersection";
import "./Header.css";



export default function Header() {

  return (
    <div className="header">
      <Navbar />
      <SubHeaderSection />
    </div>
  );
}
