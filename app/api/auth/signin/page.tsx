"use client";
import { SignInButton } from "@/components/Buttons";
import Loader from "@/components/Loader/loader";
import { Card, CardTitle } from "@/components/ui/card";
import { withAuth } from "@/components/WithAuth";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

type Provider = {
  id: string;
  name: string;
};

type SignInProps = {
  providers: Record<string, Provider>;
};

const SignIn = () => {
  const [providers, setProviders] = useState<SignInProps["providers"] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setIsLoading(true);
        const res = await getProviders();
        if (!res) {
          throw new Error("No providers returned");
        }
        setProviders(res);
      } catch (_) {
        setError(
          "Please define the required environment variables inside .env.local"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500 dark:text-red-300">{error}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 ">
      <Card className="w-full max-w-md p-6 shadow-lg bg-white dark:bg-gray-800 rounded-lg dark:shadow-orange-600 dark:shadow-md">
        <CardTitle className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Welcome to NetHunt
        </CardTitle>
        {providers && Object.values(providers).length > 0 ? (
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="mb-4">
              <SignInButton
                providerId={provider.id}
                providerName={provider.name}
                className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all text-center"
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No sign-in providers available.
          </div>
        )}
      </Card>
    </div>
  );
};

export default withAuth(SignIn);
