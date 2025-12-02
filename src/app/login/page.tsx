'use client';

import { Eye, EyeOff, Facebook } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="metafi-login" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 md:px-6">
        <div className="bg-features-hero rounded-[16px] px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
          <div className="mb-4 flex size-12 w-full items-center justify-center rounded-full sm:mb-5">
            <Image
              src="/images/layout/logo-single.svg"
              alt="Metafi logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
          </div>

          <h1 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
            Sign in to your account
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
            Welcome back! Please enter your details
          </p>

          <Card className="border-border-light shadow-light bg-card mx-auto mt-6 w-full max-w-md rounded-[12px] border text-left sm:mt-8">
            <CardHeader className="pb-0"></CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                    className="h-11 rounded-[8px]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      className="h-11 rounded-[8px] pr-10"
                      required
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                      className="text-muted-foreground/80 hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded p-1"
                      onClick={() => setShowPassword((s) => !s)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="-mt-1">
                  <a
                    href="/forgot-password"
                    className="text-tagline text-sm hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="bg-foreground text-primary-foreground hover:bg-foreground/90 h-11 w-full rounded-[8px]"
                >
                  Sign In
                </Button>

                <div className="my-2 flex items-center">
                  <span className="bg-border/70 h-px flex-1" />
                  <span className="text-muted-foreground mx-3 text-xs whitespace-nowrap">
                    Or sign in with
                  </span>
                  <span className="bg-border/70 h-px flex-1" />
                </div>

                <div className="mt-4 space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 w-full justify-center rounded-[8px] font-medium"
                  >
                    <FcGoogle className="mr-2 size-5" />
                    Sign in with Google
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 w-full justify-center rounded-[8px] font-medium"
                  >
                    <Facebook className="mr-2 size-5" />
                    Sign in with Facebook
                  </Button>
                </div>
              </form>

              <p className="text-muted-foreground mt-6 text-center text-sm">
                Don’t have an account?{' '}
                <a href="/signup" className="text-tagline hover:underline">
                  Sign Up
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Login;
