import Link from "next/link";

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);
const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        <a href="#">Home</a>
      </li>
      <li>
        <Link href="/services">services</Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;
