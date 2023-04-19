import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

const menuItems: any = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    
    return (
        <nav className="mt-4 ml-8">
            { 
                menuItems.map(({text, href}: any, index: any) => <ActiveLink key={index} text={text} href={href} />)
            }
        </nav>
    );
};