import { FC, ReactNode } from "react";
import Head from "next/head"
import { Navbar } from "../Navbar"

interface Props {
  children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div>
          <Head>
            <title>Home - David Dorado . Curso</title>
            <meta name="description" content="Home Page"/>
          </Head>
          
          <Navbar />
    
          <main className="flex min-h-screen flex-col items-center justify-center">
            { children }
          </main>
        </div>
    )
}