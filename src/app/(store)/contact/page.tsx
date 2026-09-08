import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
      <h1 className="font-heading text-4xl sm:text-5xl font-normal text-center mb-12">Contact us</h1>

      <form className="space-y-6">
        {/* Name + Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-[13px] font-medium text-foreground mb-2">Name</label>
            <Input 
              id="name"
              type="text" 
              placeholder="Name"
              className="w-full h-12 rounded-md border-border bg-background"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[13px] font-medium text-foreground mb-2">Email</label>
            <Input 
              id="email"
              type="email" 
              placeholder="Email"
              className="w-full h-12 rounded-md border-border bg-background"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-[13px] font-medium text-foreground mb-2">Phone</label>
          <Input 
            id="phone"
            type="tel" 
            placeholder="Phone"
            className="w-full h-12 rounded-md border-border bg-background"
          />
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-[13px] font-medium text-foreground mb-2">Comment</label>
          <textarea 
            id="comment"
            placeholder="Comment"
            rows={6}
            className="flex w-full rounded-md border border-border bg-background px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-y"
          />
        </div>

        {/* Submit */}
        <div>
          <Button 
            type="submit"
            className="rounded-md bg-foreground text-background hover:bg-foreground/85 text-[13px] font-medium px-8 h-12 tracking-wide"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
