import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/lib/axios";

interface DedicationItem {
  id: string;
  name: string;
  href: string;
}

interface DedicationLink {
  id: string;
  name: string;
  items: DedicationItem[];
}

interface DedicationData {
  id: string;
  name: string;
  links: DedicationLink[];
}

interface LampiranProps {
  type: "dedication-1" | "dedication-2";
  className?: string;
}

export async function Lampiran({ type, className }: LampiranProps) {
  const dedicationQuery = await api.get(`/${type}.json`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dedication: DedicationData = dedicationQuery.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className}>
          Lampiran <ChevronDownIcon className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dedication.links?.map((group) => (
          <DropdownMenuGroup key={group.id}>
            <DropdownMenuLabel>{group.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {group.items.map((item) => (
              <DropdownMenuItem key={item.id}>
                <Link target="_blank" href={item.href}>
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
