'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import redirect from "@/utils/redirect";
import { Button } from "@/components/ui/button";

export default function AuthError() {
    const searchparams = useSearchParams();
    const error = searchparams.get('error');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Authentication Error</CardTitle>
                <CardDescription>{error === 'OAuthCallback' ? 'App config error' : error ?? 'something went wrong'}</CardDescription>
            </CardHeader>
            <Button onClick={() => redirect('/')}>Go back to login</Button>
        </Card>
    )
}
