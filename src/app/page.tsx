import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Input />
      <Button size={"lg"}>Click Me</Button>
      <Button variant={"destructive"} size={"lg"}>
        Click Me
      </Button>
      <Button variant={"secondary"} size={"lg"}>
        Click Me
      </Button>
      <Button variant={"ghost"} size={"lg"}>
        Click Me
      </Button>
      <Button variant={"muted"} size={"lg"}>
        Click Me
      </Button>
      <Button variant={"outline"} size={"lg"}>
        Click Me
      </Button>
      <Button variant={"teritary"} size={"lg"}>
        Click Me
      </Button>
      <p className="text-lime-500 text-center">hi, how are you doing?</p>
    </div>
  );
}
