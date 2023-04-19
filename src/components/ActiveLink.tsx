import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
    text: string, 
    href: string
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'none'
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link className="mr-4" href={ href } style={ asPath === href ? style : undefined }>{ text }</Link>
    )
}