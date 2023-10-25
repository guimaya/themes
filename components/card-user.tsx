import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MayaIcon } from "@/assets/maya-icon";
import { Label } from "./ui/label";

type CardProps = React.ComponentProps<typeof Card>;

export function CardUser({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn("w-[380px] border-border flex-col flex", className)}
      {...props}
    >
      <CardHeader className="flex content-center items-center">
        <Avatar>
          <AvatarImage
            src="maya.png"
            alt="Maya Avatar"
            className="bg-secondary"
          />
          <AvatarFallback>MY</AvatarFallback>
        </Avatar>
        <CardDescription>Maya</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <Label className="text-md">Login</Label>
          <p className="text-sm text-foreground">Maya</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant="destructive" className="w-full">
          Sair
        </Button>
      </CardFooter>
    </Card>
  );
}
