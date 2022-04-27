import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    const nav = [
      { title: "Home", to: "/" },
      { title: "Mens", to: "/mens" },
      { title: "Womens", to: "/womens" },
      { title: "Unisex", to: "/unisex" }
    ];
    return (
    //   <nav
    //     style={{
    //       display: "flex",
    //       justifyContent: "end",
    //       border: "1px solid blue",
    //       margin: "5px",
    //       padding: "10px",
    //       fontSize: "18px"
    //     }}
    //   
    //     Cart
    //   </nav>
  <div>
        <div className="Nav">
        {nav.map((e,i)=>(
            <Link key={i} to={e.to} style={{margin:"5px"}} >
                {e.title}
            </Link>
        ))}
        <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="" />
        Cart:{0}
        </div>
        
  </div>
    );
  };
  