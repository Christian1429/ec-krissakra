import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from "@/components/ui/button";
import { MenuIcon, CircleUser} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import {
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components';
const email = process.env.ALLOWED_EMAIL;

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user || user.email !== email) {
      return redirect('/');
    }

  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
        <nav className="hidden font-medium md:flex md_flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant="outline"
              size="icon"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mitt konto</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><LogoutLink>Logga ut</LogoutLink></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="my-5">
        {children}
      </main>
    </div>
  );
}