"use client";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, FileJson2, Search } from "lucide-react";
import { CreateApiButton } from "../../../../../components/create-api";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";

type ApiWithKeys = {
  id: string;
  name: string;
  keys: {
    count: number;
  }[];
}[];

export function ApiList({ apis }: { apis: ApiWithKeys }) {
  const [localData, setLocalData] = useState(apis);
  return (
    <div>
      <PageHeader title="Applications" description="Manage your APIs" />
      <Separator className="my-6" />
      <section className=" my-4 flex md:items-center gap-4 flex-col md:flex-row">
        <div className="flex h-10 flex-grow items-center gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-within:border-primary/40">
          <Search size={18} />
          <input
            className="disabled:cursor-not-allowed bg-transparent flex-grow disabled:opacity-50 placeholder:text-muted-foreground focus-visible:outline-none  "
            placeholder="Search.."
            onChange={(e) => {
              const filtered = apis.filter((a) =>
                a.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setLocalData(filtered);
            }}
          />
        </div>
        <CreateApiButton key="createApi" />
      </section>
      {apis.length ? (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {localData.map((api) => (
            <Link key={api.id} href={`/app/${api.id}`}>
              <Card className="duration-500 hover:border-primary/20 hover:drop-shadow-md bg-gradient-to-tl dark:via-zinc-900/50 dark:from-zinc-900 dark:to-zinc-950">
                <CardHeader>
                  <div className=" flex items-center justify-between">
                    <CardTitle>{api.name}</CardTitle>
                    <FileJson2 size={18} />
                  </div>
                  <CardDescription>{api.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <dl className="text-sm leading-6 divide-y divide-gray-100 ">
                    <div className="flex justify-between py-3 gap-x-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        API Keys
                      </dt>
                      <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900 dark:text-gray-200">
                          {api.keys.at(0)?.count ?? 0}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </Link>
          ))}
        </ul>
      ) : (
        <EmptyPlaceholder className=" my-4">
          <EmptyPlaceholder.Icon />
          <EmptyPlaceholder.Title>No API Keys Yet</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You haven&apos;t created any API yet. Create one to get started.
          </EmptyPlaceholder.Description>
          <div className="gap-2 flex md:items-center flex-col md:flex-row">
            <CreateApiButton key="createApi" />
            <Link href="/docs" target="_blank">
              <Button
                variant="outline"
                className=" gap-2 items-center text-sm md:text-base"
              >
                <BookOpen size={18} className=" w-4 h-4 md:w-5 md:h-5" />
                Read the docs
              </Button>
            </Link>
          </div>
        </EmptyPlaceholder>
      )}
    </div>
  );
}