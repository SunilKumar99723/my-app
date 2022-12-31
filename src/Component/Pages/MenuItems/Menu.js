import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
         Jharkhand Tourism
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">About</Dropdown.Item>
          <Dropdown.Item href="#">Home</Dropdown.Item>
          <Dropdown.Item href="#"> Gallery </Dropdown.Item>
          <Dropdown.Item href="#"> Contact </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Koderma
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">About</Dropdown.Item>
          <Dropdown.Item href="#">Gallery</Dropdown.Item>
          <Dropdown.Item href="#">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Clickable Inside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          Manual Close
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Menu;