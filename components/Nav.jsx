const Nav = () => {
  return (
    <nav className="flex flex-row px-[6rem] py-7 justify-between">
      <div>
        <h1 className="text-4xl font-bold">beon.</h1>
      </div>
      <ul className="list-none flex flex-row">
        <li className="nav_links">About</li>
        <li className="nav_links">Contact</li>
        <li className="nav_links">FAQs</li>
      </ul>
    </nav>
  );
};

export default Nav;
