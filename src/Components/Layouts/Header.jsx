import React from "react";


function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className=" d-flex justify-content-between">
         
            <div className="pt-2">
              <form role="search">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
              <div className="dropdown">
                <button
                  className="drop-btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="Assets/Ellipse 4.png" alt=""  width={60}/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        
            <div >
        </div>
      </div>
    </div>
  );
}

export default Header;