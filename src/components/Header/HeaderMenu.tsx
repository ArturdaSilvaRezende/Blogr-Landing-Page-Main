import { useState, useEffect, useRef } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import DropdownList from "./DropdownList";
import * as C from "./style";
import "./animation.css";

interface DropdownItems {
  id: number;
  title: string;
  items: string[];
}

const HeaderMenu = () => {
  const [dropdown] = useState<DropdownItems[]>(DropdownList);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <C.HeaderMenu className="fadeIn">
      <nav className="headerMenu__nav">
        <ul className="headerMenu__ul">
          {dropdown.map((item, index) => (
            <li
              key={item.id}
              className="headerMenu__li"
              onClick={() => toggleDropdown(index)}
            >
              <div className="headerMenu__liTitle">
                <span>{item.title}</span>
                <span>
                  {activeIndex === index ? <RxCaretUp /> : <RxCaretDown />}
                </span>
              </div>

              <ul
                className="headerMenu__dropdown fadeIn"
                ref={dropdownRef}
                style={{ display: activeIndex === index ? "block" : "none" }}
              >
                {item.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <div className="headerMenu__login">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </C.HeaderMenu>
  );
};

export default HeaderMenu;
