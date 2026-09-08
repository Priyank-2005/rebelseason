import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-4">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-4xl font-normal text-center mb-8">Log In</h1>
        
        <form className="space-y-5">
          <div>
            <label className="block text-[12px] font-medium text-foreground mb-2">Email Address</label>
            <Input type="email" placeholder="Email" className="h-12 bg-transparent rounded-sm" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[12px] font-medium text-foreground">Password</label>
              <Link href="#" className="text-[11px] text-muted-foreground hover:text-foreground">Forgot password?</Link>
            </div>
            <Input type="password" placeholder="Password" className="h-12 bg-transparent rounded-sm" />
          </div>
          <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide">
            Sign In
          </Button>
        </form>

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          Don't have an account? <Link href="/signup" className="text-foreground underline underline-offset-4 font-medium hover:text-muted-foreground">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
