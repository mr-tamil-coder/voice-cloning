"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  return (
      <Button onClick={() => toast.success("Hello")}>
        Click me
      </Button>
  );
}
