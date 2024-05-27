import { bebas_neue } from "@/app/ui/fonts"
import { LOGIN_BTN, NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container
    padding-container relative z-30 py-5">
            <Link href="/">
            <Image
             src="/RJP_logo_1.png"
             width={200} 
             height={7}
            className='mx-1'
        
            alt="logo image"/>
            {/* <p className={`${bebas_neue.className} text-black text-2xl`}>RJP Workshop </p>  */}
             </Link>
         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) =>(
             <Link href={link.href} key={link.key}
             className="regular-16 text-gray-50 flexCenter
             cursor-pointer pb-1.5 transition-all hover:font-bold">
                 {link.label}
             </Link>
            ))}
         </ul>

         {/* <ul className="hidden h-full gap-12 lg:flex">
            {LOGIN_BTN.map((link) =>(
             <Link href={link.href} key={link.key}
             className="regular-16 text-gray-50 flexCenter
             cursor-pointer pb-1.5 transition-all hover:font-bold">
                 {link.label}
             </Link>
            ))}
         </ul> */}

       <div className="lg:flexCenter hidden">
        <a href='/login'>
           <Button
           type="button"
           title="Login"
           icon="/user.svg"
           variant="btn_dark_green"
            >
             
              </Button>
        </a>
           
       </div>
       

       <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
       />

    </nav>
  )
}

export default Navbar