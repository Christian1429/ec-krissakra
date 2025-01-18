import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteRoute({params}: {params: {id: string}}) {
    return (
      <div className="h-[80vh] w-full flex items-center justify-center">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Är du helt säker?</CardTitle>
            <CardDescription>
              Det här går ej att ångra. Detta kommer att ta bort produkten och
              relaterade bilder permanent
            </CardDescription>
          </CardHeader>
          <CardFooter className="w-full flex justify-between">
            <Button variant="secondary" asChild>
              <Link href="/dashboard/products">Avbryt</Link>
            </Button>
            <form action={deleteProduct}>
                <input type="hidden" name="productId" value={params.id}/>
              <SubmitButton text="Ta bort produkt" />
            </form>
          </CardFooter>
        </Card>
      </div>
    );
 }