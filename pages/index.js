
import { useState } from "react";

const companyData = [
  {
    "company": "Bostik",
    "score": "3/5",
    "heat": "Very Hot",
    "trend": "+1",
    "industry": "Manufacturing, Chemicals",
    "location": "Colombes, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "Magellan Aerospace Pr...",
    "score": "3/5",
    "heat": "Very Hot",
    "trend": "+1",
    "industry": "Manufacturing, Aerospace",
    "location": "Marignane, France",
    "size": "51 - 200"
  },
  {
    "company": "Hutchinson",
    "score": "3/5",
    "heat": "Very Hot",
    "trend": "+3",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "Fives ECL",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Ronchin, France",
    "size": "201 - 500"
  },
  {
    "company": "Medtronic France",
    "score": "2/5",
    "heat": "Hot",
    "trend": "0",
    "industry": "Manufacturing, Medical Equipment",
    "location": "Paris, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "Fives Machining",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Capdenac-Gare, France",
    "size": "201 - 500"
  },
  {
    "company": "MANITOU Group",
    "score": "2/5",
    "heat": "Hot",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "Ancenis, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "Fives Nordon",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Nancy, France",
    "size": "501 - 1,000"
  },
  {
    "company": "Fives - Energy | Cryogen...",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Paris, France",
    "size": "501 - 1,000"
  },
  {
    "company": "Fives - Cinetic SAS",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "H\u00e9ricourt, France",
    "size": "51 - 200"
  },
  {
    "company": "Fives",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Paris, France",
    "size": "5,001 - 10,000"
  },
  {
    "company": "Fives Intralogistics",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Industrial",
    "location": "Paris, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "YAZAKI EUROPE LIMITED",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Le Chesnay, France",
    "size": "51 - 200"
  },
  {
    "company": "SEKO France",
    "score": "2/5",
    "heat": "Hot",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "France",
    "size": "501 - 1,000"
  },
  {
    "company": "Michelin",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Clermont-Ferrand, France",
    "size": "10,001+"
  },
  {
    "company": "Servier",
    "score": "2/5",
    "heat": "Hot",
    "trend": "+2",
    "industry": "Manufacturing, Pharmaceuticals",
    "location": "Suresnes, France",
    "size": "10,001+"
  },
  {
    "company": "Guerbet",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Pharmaceuticals",
    "location": "Villepinte, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "GETRAG FORD TRANSMISSIONS",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Blanquefort, France",
    "size": "501 - 1,000"
  },
  {
    "company": "Gestamp Sofedit - Le Theil",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "Gestamp Prisma",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Prue, France",
    "size": "51 - 200"
  },
  {
    "company": "AUTOMOBILES REUNIS",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "France",
    "size": "501 - 1,000"
  },
  {
    "company": "ARaymond",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Other",
    "location": "Grenoble, France",
    "size": "5,001 - 10,000"
  },
  {
    "company": "Lab Crigen",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Semiconductors",
    "location": "Stains, France",
    "size": "51 - 200"
  },
  {
    "company": "Circor Aerospace & Defense",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Aerospace",
    "location": "Le Plessis-Tr\u00e9vise, France",
    "size": "51 - 200"
  },
  {
    "company": "GESTAMP NOURY",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "France",
    "size": "201 - 500"
  },
  {
    "company": "Asteelflash",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Appliances",
    "location": "France",
    "size": "5,001 - 10,000"
  },
  {
    "company": "ENDEL - ENGIE GROUP",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Industrial",
    "location": "Colombes, France",
    "size": "5,001 - 10,000"
  },
  {
    "company": "PSA MOTORSPORT",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Versailles, France",
    "size": "201 - 500"
  },
  {
    "company": "Yokogawa France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "V\u00e9lizy-Villacoublay, France",
    "size": "51 - 200"
  },
  {
    "company": "TEREX CRANES FRANCE",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "Montceau-les-Mines, France",
    "size": "201 - 500"
  },
  {
    "company": "Roquette",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Chemicals",
    "location": "Lestrem, France",
    "size": "5,001 - 10,000"
  },
  {
    "company": "Novartis France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Pharmaceuticals",
    "location": "Rueil-Malmaison, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "FONDERIE DE BRETAGNE",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Other",
    "location": "Caudan, France",
    "size": "201 - 500"
  },
  {
    "company": "Systemair France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Industrial",
    "location": "France",
    "size": "201 - 500"
  },
  {
    "company": "Ampere Software Technologies",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "France",
    "size": "501 - 1,000"
  },
  {
    "company": "AVL in France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Palaiseau, France",
    "size": "201 - 500"
  },
  {
    "company": "Trelleborg Industrial AVS",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "Clermont-Ferrand, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "INTERSPORT \u2013 Groupe",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Sporting Goods",
    "location": "Agneaux, France",
    "size": "501 - 1,000"
  },
  {
    "company": "INDORAMA VENTURES",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Chemicals",
    "location": "Longlaville, France",
    "size": "201 - 500"
  },
  {
    "company": "Carrier Commercial Refrigeration",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "Rueil-Malmaison, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "DIANA",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Food & Beverage",
    "location": "Ay, France",
    "size": "1,001 - 5,000"
  },
  {
    "company": "Garmin France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Computer",
    "location": "Nanterre, France",
    "size": "51 - 200"
  },
  {
    "company": "Volvo Car France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Nanterre, France",
    "size": "51 - 200"
  },
  {
    "company": "BIOTRONIK France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Medical Equipment",
    "location": "Rungis, France",
    "size": "51 - 200"
  },
  {
    "company": "Schneider Electric AL",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Appliances",
    "location": "France",
    "size": "201 - 500"
  },
  {
    "company": "Schneider Electric",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Industrial",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "Liebherr Aerospace",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Aerospace",
    "location": "Toulouse, France",
    "size": "10,001+"
  },
  {
    "company": "Energy France",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Appliances",
    "location": "Rueil-Malmaison, France",
    "size": "10,001+"
  },
  {
    "company": "Renault Group",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "France",
    "size": "10,001+"
  },
  {
    "company": "Renault-Nissan-Mitsubishi",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "STERIS Healthcare EMEA",
    "score": "1/5",
    "heat": "Warm",
    "trend": "1",
    "industry": "Manufacturing, Medical Equipment",
    "location": "Le Haillan, France",
    "size": "10,001+"
  },
  {
    "company": "GROUPE RENAULT Directions",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "Rennes, France",
    "size": "10,001+"
  },
  {
    "company": "Groupe PSA",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Motor Vehicles",
    "location": "V\u00e9lizy-Villacoublay, France",
    "size": "10,001+"
  },
  {
    "company": "Constellium",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Fabricated Metals",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "BIC",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Personal Care",
    "location": "Clichy, France",
    "size": "10,001+"
  },
  {
    "company": "L\u2019Or\u00e9al",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Personal Care",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "Danone",
    "score": "1/5",
    "heat": "Warm",
    "trend": "+1",
    "industry": "Manufacturing, Food & Beverage",
    "location": "Paris, France",
    "size": "10,001+"
  },
  {
    "company": "INGERSOLL RAND FRANCE",
    "score": "1/5",
    "heat": "Warm",
    "trend": "0",
    "industry": "Manufacturing, Appliances",
    "location": "France",
    "size": "10,001+"
  }
];

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = companyData.filter((c) =>
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  const heatBadgeColor = (heat) => {
    if (heat === "Very Hot") return "bg-red-500 text-white";
    if (heat === "Hot") return "bg-orange-400 text-white";
    if (heat === "Warm") return "bg-yellow-300 text-black";
    return "bg-gray-200 text-black";
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">French Manufacturing Companies Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-md"
      />

      <div className="overflow-auto border rounded-lg mt-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="p-2">Company</th>
              <th className="p-2">Score</th>
              <th className="p-2">Heat</th>
              <th className="p-2">Trend</th>
              <th className="p-2">Industry</th>
              <th className="p-2">Location</th>
              <th className="p-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((c, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">
  {c.company}
  {c.tech?.includes("SAP Ariba") && (
    <div className="flex items-center space-x-2 mt-1">
      <img src="/sap-ariba.png" alt="SAP Ariba" className="w-4 h-4" />
      <span className="text-blue-600 text-xs font-semibold">SAP Ariba</span>
    </div>
  )}
</td>
                <td className="p-2">{c.score}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${heatBadgeColor(c.heat)}`}>
                    {c.heat}
                  </span>
                </td>
                <td className="p-2">{c.trend}</td>
                <td className="p-2">{c.industry}</td>
                <td className="p-2">{c.location}</td>
                <td className="p-2">{c.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
