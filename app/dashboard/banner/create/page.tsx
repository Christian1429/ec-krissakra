"use client";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { UploadDropzone } from '@/app/lib/uploadthing';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from 'react';
import { createBanner} from "@/app/actions";
import { bannerSchema } from "@/app/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";

export default function BannerRoute() {
      const [image, setImages] = useState<string | undefined> (undefined);
      const [lastResult, action] = useActionState(createBanner, undefined);
      const [form, fields] = useForm({
        lastResult,
    
        onValidate({ formData }) {
          return parseWithZod(formData, { schema: bannerSchema });
        },
    
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
      });
    

    return (
      <form id={form.id} onSubmit={form.onSubmit} action={action}>
        <div className="flex items-center gap-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/banner">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">Ny Banner</h1>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Banner detaljer</CardTitle>
            <CardDescription>Gör din banner här</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-3">
                <Label>Namn</Label>
                <Input 
                name={fields.title.name} 
                key={fields.title.key} 
                defaultValue={fields.title.initialValue}
                type="text" placeholder="Skapa en title för Banner" />
                <p className="text-red-500">{fields.title.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Bilder</Label>
                <input type="hidden" value={image} key={fields.imageString.key} name={fields.imageString.name} defaultValue={fields.imageString.initialValue} />
                {image !== undefined ? (
                  <Image src={image}
                  alt="Product Image"
                  width={200}
                  height={200} 
                  className="w-[200px] h-[200px] object-cover border rounded-lg"
                  />
                ): (
                <UploadDropzone onClientUploadComplete={(res) => {
                  setImages(res[0].url);
                }}
                onUploadError={() => {
                  alert("Uppladdningen misslyckades");
                }}
                endpoint="bannerImageRoute"
                />
                )}
                <p className="text-red-500">{fields.imageString.errors}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Skapa Banner" />
          </CardFooter>
        </Card>
      </form>
    );
}