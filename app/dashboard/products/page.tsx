import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import prisma from "@/app/lib/db";
import Image from "next/image";

async function getData() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return data;
}  
export default async function ProductsRoute() {
const data = await getData();

    return (
      <>
        <div className="flex items-center justify-end">
          <Button asChild className="flex items-center gap-x-2">
            <Link href="/dashboard/products/create">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Lägg till produkt</span>
            </Link>
          </Button>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Produkt</CardTitle>
            <CardDescription>
              Hantera dina produkter och kolla försäljnings detaljer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bild</TableHead>
                  <TableHead>Namn</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pris</TableHead>
                  <TableHead>Datum</TableHead>
                  <TableHead className="text-end">Hantera</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image alt="produkt bild" src={item.images[0]} width={64} height={64} className="rounded-md object-cover h-16 w-16" />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{new Intl.DateTimeFormat('sv-SE').format(item.createdAt)}</TableCell>
                    <TableCell className="text-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hantera</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild><Link href={`/dashboard/products/${item.id}`}>Redigera</Link></DropdownMenuItem>
                          <DropdownMenuItem>Ta bort</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
    )
};