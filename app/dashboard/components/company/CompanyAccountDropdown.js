import * as React from 'react'
import { Link, useMutation } from 'blitz'
import { useDetectOutsideClick } from "app/hooks/useDetectOutsideClick"
import logout from "app/auth/mutations/logout"



const CompanyAccountdropdown = ({ user }) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [logoutMutation] = useMutation(logout)

  return (
    <>
      <div>
        <button onClick={onClick} className="menu-trigger">
          <span>Account</span>
          <img
            src={user.profile.avatar.toString()}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li onClick={onClick}>
              <Link href="/dashboard/company/settings">
                <a>Settings</a>
              </Link>
            </li>
            <li className="last" onClick={async () => {
              onClick()
              return await logoutMutation()
            }}>
              <Link href="/">
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
      .menu-trigger {
        padding: 4px;
        color: white;
        background: #2f2f2f;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        border: none;
        vertical-align: middle;
        transition: box-shadow 0.4s ease;
        margin-left: auto; /* Strictly for positioning */
        
      }
      .menu-trigger:focus {
        outline:0;
      }
      .menu-trigger:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      }

      .menu-trigger span {
        font-weight: 700;
        vertical-align: middle;
        font-size: 14px;
        margin: 0 10px;
      }

      .menu-trigger img {
        height: 40px;
        width: 40px;
        border-radius: 20px;
      }

      .menu {
        background: #2f2f2f;
        border-radius: 8px;
        position: absolute;
        top: 70px;
        right: 30px;
        width: 300px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
      }

      .menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu li {
        border-bottom: 1px solid #2c2c2c;
      }
      .menu li.last {
        border: none;
      }
      .menu li a {
        text-decoration: none;
        color: white;
        padding: 15px 20px;
        display: block;
      }
    `}</style>
    </>
  )
}

export default CompanyAccountdropdown