import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";







export const metadata: Metadata = {
    title: "NetHunt dash",
    description: "Hunt your Thing",
};

export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
