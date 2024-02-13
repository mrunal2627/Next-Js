import Nav from "./Nav";

const Layout = ({children}) => (
  <div>
    <Nav></Nav>
    {children}
  </div>
);

export default Layout;
