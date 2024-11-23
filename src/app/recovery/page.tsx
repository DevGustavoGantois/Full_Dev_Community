'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EmailSentAlert from "@/components/Alerts/EmaillSend";

export default function RecoverAccount() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true)

  };

  return (
    <div className="min-h-screen w-full dark flex">
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center p-8">
        <div className="text-primary-logo">
          <Image alt="Logo FullDev" src="/LogoWhite.svg" width={340} height={340} />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Recuperar sua conta</CardTitle>
            <CardDescription>Insira seu endereço de email para iniciar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {emailSent && (
              <EmailSentAlert />
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Seu endereço de email</Label>
              <Input id="email" type="email" placeholder="Digite seu email" />
            </div>
            <Button className="w-full" onClick={handleSendEmail}>
              Enviar código
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Não recebeu o código?{" "}
              <Link href="#" className="text-primary hover:underline">
                Reenviar código
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
