"use client";
import { UploadDropzone } from '@/app/lib/uploadthing'; // or ''; but there is a bug, check later
// import { UploadButton } from '@uploadthing/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Car, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';



export default function ProductCreateRoute() {
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Ny Produkt</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Skapa ny produkt</CardTitle>
          <CardDescription>
            Fyll i alla fält för att skapa ett nytt produkt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Namn</Label>
              <Input
                type="text"
                className="w-full"
                placeholder="Produkt namn"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Förklaring</Label>
              <Textarea placeholder="Skriv in förklaring av produkt"></Textarea>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Pris</Label>
              <Input type="number" placeholder="Lägg till pris i sek" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Utvalda Produkter</Label>
              <Switch />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Välj Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectContent>
                    <SelectItem value="draft">Utkast</SelectItem>
                    <SelectItem value="published">Publicerad</SelectItem>
                    <SelectItem value="archived">Arkiverad</SelectItem>
                  </SelectContent>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Bilder</Label>
            <UploadDropzone 
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                alert("Uppladdningen klar");
              }}
              onUploadError={() => {
                alert("Uppladdningen misslyckades");
              }}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
              <Button>Skapa Produkt</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
