import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant={"destructive"}>Click Me</Button>
      <p className="text-lime-500 text-center">hi, how are you doing?</p>
    </div>
  );
}
