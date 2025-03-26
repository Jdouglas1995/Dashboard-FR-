
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const heatBadgeColor = (heat) => {
  switch (heat) {
    case "Very Hot":
      return "bg-red-500 text-white";
    case "Hot":
      return "bg-orange-400 text-white";
    case "Warm":
      return "bg-yellow-300 text-black";
    default:
      return "bg-gray-200 text-black";
  }
};

const companyData = [
  {
    "company": "Sanofi",
    "score": "3/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Pharma",
    "location": "Paris, France",
    "size": "10,001+",
    "tech": [
      "SAP Ariba"
    ]
  },
  {
    "company": "Airbus",
    "score": "4/5",
    "heat": "Very Hot",
    "trend": "+3",
    "industry": "Aerospace",
    "location": "Toulouse, France",
    "size": "10,001+",
    "tech": [
      "SAP Ariba"
    ]
  },
  {
    "company": "Faurecia",
    "score": "2/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Automotive",
    "location": "Nanterre, France",
    "size": "10,001+",
    "tech": [
      "SAP Ariba"
    ]
  },
  {
    "company": "Nexans",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Electrical",
    "location": "Paris, France",
    "size": "10,001+",
    "tech": [
      "SAP Ariba"
    ]
  },
  {
    "company": "Roquette",
    "score": "3/5",
    "heat": "Hot",
    "trend": "+1",
    "industry": "Chemicals",
    "location": "Lestrem, France",
    "size": "5,001 - 10,000",
    "tech": [
      "SAP Ariba"
    ]
  },
  {
    "company": "Generic Corp",
    "score": "2/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Food",
    "location": "Lyon, France",
    "size": "501 - 1,000"
  },
  {
    "company": "Another Manufacturing",
    "score": "1/5",
    "heat": "Warm",
    "trend": "-1",
    "industry": "Industrial",
    "location": "Nice, France",
    "size": "201 - 500"
  }
];

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = companyData.filter((c) =>
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">French Manufacturing Companies Dashboard</h1>

      <Input
        placeholder="Search by company, industry, or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <Card>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Heat</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((c, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {c.company}
                    {c.tech?.includes("SAP Ariba") && (
                      <div className="flex items-center space-x-2 mt-1">
                        <img src="/sap-ariba.png" alt="SAP Ariba" className="w-4 h-4" />
                        <span className="text-blue-600 text-xs font-semibold">SAP Ariba</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{c.score}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${heatBadgeColor(c.heat)}`}>
                      {c.heat}
                    </span>
                  </TableCell>
                  <TableCell>{c.trend}</TableCell>
                  <TableCell>{c.industry}</TableCell>
                  <TableCell>{c.location}</TableCell>
                  <TableCell>{c.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
