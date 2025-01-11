import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table,TableHeader,TableRow,TableHead, TableCell, TableBody } from "@/components/ui/table";
export default function OrdersPage() {
    return (
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Beställningar</CardTitle>
          <CardDescription>Nya beställningar från shoppen!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kund</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead className="text-right">Antal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <p className="font-medium">Gregor Kallberg</p>
                  <p className="hidden md:flex text-sm text-muted-foreground">test@test.com</p>
                </TableCell>
                <TableCell>Inköps</TableCell>
                <TableCell>Klar</TableCell>
                <TableCell>2024-12-21</TableCell>
                <TableCell className="text-right">199.00 SEK</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
};