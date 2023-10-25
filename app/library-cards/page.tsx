import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { CookieSettings } from "@/components/cookie-settings";
import { CreateAccount } from "@/components/create-account";
import { DatePicker } from "@/components/date-picker";
import { Github } from "@/components/github-card";
import { Notifications } from "@/components/notifications";
import { PaymentMethod } from "@/components/payment-method";
import { ReportAnIssue } from "@/components/report-an-issue";
import { ShareDocument } from "@/components/share-document";
import { TeamMembers } from "@/components/team-members";
import { CardNotification } from "@/components/card-notifications";
import { CardUser } from "@/components/card-user";

export const metadata: Metadata = {
  title: "Maya Cards",
  description: "Cards Library.",
};

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function CardsPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <Container>
            <CreateAccount />
          </Container>
          <Container>
            <PaymentMethod />
          </Container>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <Container>
            <TeamMembers />
          </Container>
          <Container>
            <ShareDocument />
          </Container>
          <Container>
            <DatePicker />
          </Container>
          <Container>
            <Notifications />
          </Container>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <Container>
            <ReportAnIssue />
          </Container>
          <Container>
            <Github />
          </Container>
          <Container>
            <CookieSettings />
          </Container>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-2 xl:grid-cols-2">
          <Container>
            <CardNotification />
          </Container>
          <Container>
            <CardUser />
          </Container>
        </div>
      </div>
    </>
  );
}
