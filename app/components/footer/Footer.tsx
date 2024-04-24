import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

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
        </div>
    </Container>
    </footer> );
}
 
export default Footer ;