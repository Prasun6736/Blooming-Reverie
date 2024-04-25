import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return ( <footer className="bg-slate-700
    text-slate-200 text-sm mt-16">
    <Container>
        <div className="flex flex-col md:flex-row
        justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold
            mb-2">Categories</h3>
            <Link href='#'>Men</Link>
            <Link href='#'>Women</Link>
            <Link href='#'>Kid</Link>
            <Link href='#'>Mouse Pad</Link>
            <Link href='#'>Men</Link>
            <Link href='#'>Men</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold
            mb-2">Contact Us</h3>
            <Link href='#'>Phone : 7939899999 </Link>
            <Link href='#'>Mail : </Link>
          {/* <Link href='#'>Kid</Link>
            <Link href='#'>Mouse Pad</Link>
            <Link href='#'>Men</Link>
             <Link href='#'>Men</Link> */}
          </FooterList>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold
            mb-2">About Us</h3>
            <p className="mb-2">At our store we are dedicated 
            to provide customized .........</p>
            <p>&copy; {new Date().getFullYear()}
            Blomming Reverie. All rights reserved</p>
          </div>
         <FooterList>
         <h3 className="text-base font-bold
            mb-2">Follow Us</h3>
            <div className="flex gap-2">
            <Link href='https://www.facebook.com/profile.php?id=61554695597024' target="blank"><MdFacebook size={24}/></Link>
            <Link href='https://www.instagram.com/blooming.reverie?igsh=ZDc4cTE0cm0xNWV5' target="blank"><AiFillInstagram size={24}/></Link>
            </div>
         </FooterList>
        </div>
    </Container>
    </footer> );
}
 
export default Footer ;