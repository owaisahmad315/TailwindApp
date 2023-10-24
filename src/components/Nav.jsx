import { headerLogo} from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";




const Menu = () =>(
  <>
    {navLinks.map((item) => (
    <li key={item.label}>
      <a
      href={item.href}
      className="font-montserrat leading-normal text-lg text-slate-gray"
      >
        {item.label}
      </a>
    </li>
  ))}
 </>
 

);





const Nav = () => {

 const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <header className="padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />

        </a>

        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
           <Menu />
        </ul>

        <div className="hidden max-lg:block  relative">
         
          <img 
          src={hamburger} 
          alt="humberger"
          width={25}
          height={25}
          onClick={() => toggleMenu? setToggleMenu(false) : setToggleMenu(true)}
          />


       
          {toggleMenu && 
           <div className="absolute right-2 top-10
            bg-primary list-none font-monsterrat
            w-[200px] py-5 boder-5 text-[20px] font-bold flex flex-col items-center
             ">

            <Menu/>

          </div>
          }

          
        </div>
        
      </nav>
    </header>
    
  )
}

export default Nav