/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import Calendar from "@/components/ui/mycalendar/calendar";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, HeartHandshake, Medal, User, Vault } from "lucide-react";
import { Bar, BarChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig


export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  return (
    <div className="flex w-full h-full backdrop-blur-md bg-gradient-to-r from-background via-secondary to-background">
      <div className="w-full px-3 pt-8 md:p-8 flex flex-col md:gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="">
            <CardHeader>
              <CardTitle className="flex justify-between border-b items-center pb-2">
                Overview
                <CardDescription>
                  <p className="text-xs">{date?.toDateString()}</p>
                </CardDescription>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-2">
              <div className="grid grid-cols-3 gap-2 border-b pb-2">
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-lg font-medium">40</p>
                  <p className="text-xs">Transaction</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-lg font-medium">24</p>
                  <p className="text-xs">Income</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-lg font-medium">16</p>
                  <p className="text-xs">Outcome</p>
                </div>
              </div>
              <div>
                <Calendar />
              </div>
            </CardContent>
            {/* <CardFooter className="flex justify-center h-fit max-h-fit">
              <BasicDateCalendar />
            </CardFooter> */}
          </Card>
          <Card className="">
            <CardHeader className="p-4">
              <CardTitle className="flex justify-between border-b items-center ">
                Your Balance
                <CardDescription>
                  <Select>
                    <SelectTrigger className="w-[140px] border-none shadow-none">
                      <SelectValue placeholder="US Dollar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Currency</SelectLabel>
                        <SelectItem value="usd">US Dollar</SelectItem>
                        <SelectItem value="brl">BRL Real</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardDescription>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row justify-between p-2 items-center px-4">
              <div className="flex flex-col text-xs text-muted-foreground font-light">
                Balance
                <span className="text-2xl font-normal text-foreground">
                  $20.008,38</span>
              </div>
              <div className="bg-secondary h-fit w-fit p-2 rounded-full">
                <Vault className="text-primary" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              Comparated to last month +24.17%
              <ChartContainer config={chartConfig} className="h-44 w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader className="p-4">
              <CardTitle className="flex justify-between border-b items-center pb-2">
                Quick Action
                <CardDescription>
                  Manage
                </CardDescription>
              </CardTitle>

            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col gap-2 border-b pb-1">
                <Button className="w-full bg-secondary items-center flex flex-row justify-between">
                  <div className="gap-2 flex flex-row items-center text-sm">
                    <ArrowRight className="text-emerald-400" /> Send Money
                  </div>
                  <div className="bg-background p-1 px-2 rounded-md text-xs">
                    N
                  </div>
                </Button>
                <Button className="w-full bg-secondary flex flex-row justify-between">
                  <div className="gap-2 flex flex-row items-center text-sm">
                    <ArrowLeft className="text-rose-500" /> Request Money
                  </div>
                  <div className="bg-background p-1 px-2 rounded-md text-xs">
                    R
                  </div>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-4 h-fit">
              <div className="flex flex-col gap-2 w-full -scroll-m-0 overflow-y-scroll rounded-md h-40">
                <CardDescription>MY GOALS</CardDescription>
                <div className="flex flex-col border rounded-md p-2 gap-2 h-18">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="p-1.5 bg-secondary flex items-center justify-center rounded-lg w-fit h-9">
                        <HeartHandshake size={32} className="text-primary" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">Married</p>
                        <p className="text-xs text-muted-foreground">Achieved in 2 months!</p>
                      </div>
                    </div>
                    <div>$12.500,00</div>
                  </div>
                  <Progress value={33} />
                </div>
                <div className="flex flex-col border rounded-md p-2 gap-2 h-18 blur-sm">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="p-1.5 bg-secondary flex items-center justify-center rounded-lg  w-fit h-9">
                        <HeartHandshake size={32} className="text-primary" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">Basketball</p>
                        <p className="text-xs text-muted-foreground">Achieved in 4 months!</p>
                      </div>
                    </div>
                    <div>$4.800,00</div>
                  </div>
                  <Progress value={90} />
                </div>
              </div>
            </CardFooter>
          </Card>

        </div>
        <div className="flex gap-6 flex-col xl:flex-row">
          <div className="p-4 rounded-xl bg-gradient-to-br backdrop-opacity-95 border w-full">
            Recent Transactions
            <Table className="w-full ">
              <TableHeader>
                <TableRow>
                  <TableHead className="">TYPE</TableHead>
                  <TableHead>AMOUNT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">METHOD</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="bg-secondary p-2 rounded-lg">
                        <BriefcaseBusiness />
                      </div>
                      <div className="flex flex-col">
                        <p>Company</p>
                        <p className="text-xs text-muted-foreground">Sent - Aug 24, 2024</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col gap-2">
                    <p className="text-xs">
                      $1.500,00
                    </p>
                    <p className="text-xs text-muted-foreground">
                      R$ 7.500,00
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <p className="bg-secondary p-1 px-2 text-yellow-300 flex items-center rounded-full justify-center text-xs">Waiting</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div>
                      <p className="text-xs">Credit Card</p>
                      <p className="text-xs text-muted-foreground">
                        ***** 3560
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="bg-secondary p-2 rounded-lg">
                        <User />
                      </div>
                      <div className="flex flex-col">
                        <p>Vera K.</p>
                        <p className="text-xs text-muted-foreground">Receive - Aug 24, 2024</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col gap-2">
                    <p className="text-xs">
                      $1.500,00
                    </p>
                    <p className="text-xs text-muted-foreground">
                      R$ 7.500,00
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <p className="bg-secondary p-1 px-2 text-teal-500 flex items-center rounded-full justify-center text-xs">Success</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div>
                      <p className="text-xs">Credit Card</p>
                      <p className="text-xs text-muted-foreground">
                        ***** 3560
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="bg-secondary p-2 rounded-lg">
                        <BriefcaseBusiness />
                      </div>
                      <div className="flex flex-col">
                        <p>Company</p>
                        <p className="text-xs text-muted-foreground">Sent - Aug 24, 2024</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col gap-2">
                    <p className="text-xs">
                      $1.500,00
                    </p>
                    <p className="text-xs text-muted-foreground">
                      R$ 7.500,00
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <p className="bg-secondary p-1 px-2 text-rose-500 flex items-center rounded-full justify-center text-xs">Due Date</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div>
                      <p className="text-xs">Credit Card</p>
                      <p className="text-xs text-muted-foreground">
                        ***** 3560
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="bg-secondary p-2 rounded-lg">
                        <BriefcaseBusiness />
                      </div>
                      <div className="flex flex-col">
                        <p>Company</p>
                        <p className="text-xs text-muted-foreground">Sent - Aug 24, 2024</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col gap-2">
                    <p className="text-xs">
                      $1.500,00
                    </p>
                    <p className="text-xs text-muted-foreground">
                      R$ 7.500,00
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <p className="bg-secondary p-1 px-2 text-muted-foreground flex items-center rounded-full justify-center text-xs">Disabled</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div>
                      <p className="text-xs">Credit Card</p>
                      <p className="text-xs text-muted-foreground">
                        ***** 3560
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Card className="w-90">
            <CardHeader>
              <CardTitle className="flex flex-row justify-between border-b pb-2">
                Pro Version
                <CardDescription>Details</CardDescription>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-2 p-2">
              <Medal className="text-yellow-400" size={32} />
              <div className="flex flex-col">
                <h3 className="text-xl">More with Premium</h3>
                <p className="text-xs text-muted-foreground">Our premium subscription elevate your
                  experience and unlock of benefits.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-muted-foreground">
                  You&apos;ll Pay
                </p>
                <p className="text-2xl">
                  $19,99
                  <span className="text-sm text-muted-foreground">/ Month</span>
                </p>
              </div>
              <Button className="px-4 py-6 w-full rounded-xl">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

    </div>
  );
}
