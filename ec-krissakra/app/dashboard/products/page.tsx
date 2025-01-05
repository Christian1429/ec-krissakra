import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
export default function ProductsRoute() {

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
            <CardTitle>Produkter</CardTitle>
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
                <TableRow>
                  <TableCell>
                    <UserIcon className="h-8 w-8" />
                  </TableCell>
                  <TableCell>Vatten filter</TableCell>
                  <TableCell>Pågående</TableCell>
                  <TableCell>199.00 SEK</TableCell>
                  <TableCell>15/09/2024</TableCell>
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
                        <DropdownMenuItem>Ändra</DropdownMenuItem>
                        <DropdownMenuItem>Ta bort</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
    );
}