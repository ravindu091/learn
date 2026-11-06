import NavBar from "@/components/layout/NavBar";
import type { ReactNode } from "react";

type DashboardLayoutProps = {
    children: ReactNode;
};

export default function DashboardLayout({
    children,
}:DashboardLayoutProps){
    return(
        <div className="min-h-screen">
            <NavBar />

            <main className="mx-auto w-full">
                {children}
            </main>
        </div>
    );
}