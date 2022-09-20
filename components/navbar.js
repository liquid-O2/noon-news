import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container display-f flex-column mt-3">
        <h3 className="mb-2 font-lg grotesk">HackerNews</h3>
        <div className="display-f">
          {" "}
          <a className="font-md grotesk mr-1 text-primary ">Top Stories</a>
          {/* <Link href={"/new"}>
            <a className="font-md grotesk text-primary">New</a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
