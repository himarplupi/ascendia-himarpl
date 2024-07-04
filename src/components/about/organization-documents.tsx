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

interface Item {
  id: string;
  name: string;
  href: string;
}

interface Link {
  id: string;
  name: string;
  items: Item[];
}

interface Data {
  id: string;
  name: string;
  links: Link[];
}

interface OrganizationDocumentsProps {
  className?: string;
}

export async function OrganizationDocuments({
  className,
}: OrganizationDocumentsProps) {
  const dataQuery = await api.get(`/organization-documents.json`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Data = dataQuery.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className}>
          Dokumen Organisasi <ChevronDownIcon className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.links?.map((group) => (
          <DropdownMenuGroup key={group.id}>
            <DropdownMenuLabel>{group.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {group.items.map((item) => (
              <Link target="_blank" href={item.href} key={item.id}>
                <DropdownMenuItem>{item.name}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
