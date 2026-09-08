import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-4">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-4xl font-normal text-center mb-8">Create Account</h1>
        
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-medium text-foreground mb-2">First Name</label>
              <Input type="text" placeholder="First Name" className="h-12 bg-transparent rounded-sm" />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-foreground mb-2">Last Name</label>
              <Input type="text" placeholder="Last Name" className="h-12 bg-transparent rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-[12px] font-medium text-foreground mb-2">Email Address</label>
            <Input type="email" placeholder="Email" className="h-12 bg-transparent rounded-sm" />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-foreground mb-2">Password</label>
            <Input type="password" placeholder="Password" className="h-12 bg-transparent rounded-sm" />
          </div>
          <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide">
            Create Account
          </Button>
        </form>

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          Already have an account? <Link href="/login" className="text-foreground underline underline-offset-4 font-medium hover:text-muted-foreground">Log In</Link>
        </p>
      </div>
    </div>
  );
}
