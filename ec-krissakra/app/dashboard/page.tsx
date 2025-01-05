import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AvatarFallback } from '@/components/ui/avatar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Förtjänst</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">100.000 kr</p>
            <p className="text-xs text-mute-foreground">
              baserad på 100 försäljningar
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Försäljning</CardTitle>
            <ShoppingBag className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-mute-foreground">
              Total försäljning av alla produkter
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Produkter</CardTitle>
            <PartyPopper className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">38</p>
            <p className="text-xs text-mute-foreground">
              Totalt antal produkter skapade
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Användare</CardTitle>
            <User2 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-mute-foreground">
              Total användare skapade
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaktioner</CardTitle>
            <CardDescription>Ny transaktioner i shoppen</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nya försäljningar</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className='text-sm font-medium'>Jan Lindstörm</p>
                <p>Test@email.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
