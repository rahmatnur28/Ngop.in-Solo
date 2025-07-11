"use client"

import { useState } from "react"
import { Search, MapPin, Clock, Star, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data untuk pencarian
const allCoffeeShops = [
  {
    id: 1,
    name: "Butler Coffee Boutique",
    area: "Jebres",
    category: "Modern",
    priceRange: "25k-45k",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center",
    address: "Jl. Slamet Riyadi No. 123",
    hours: "08:00 - 22:00",
    facilities: ["WiFi", "AC", "Meeting Room"],
    phone: "081234567890",
  },
  {
    id: 2,
    name: "Natahati Coffee & Eatery",
    area: "Laweyan",
    category: "Cafe",
    priceRange: "20k-40k",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop&crop=center",
    address: "Jl. Dr. Radjiman No. 456",
    hours: "07:00 - 23:00",
    facilities: ["WiFi", "Food Menu", "Outdoor"],
    phone: "081234567891",
  },
  {
    id: 3,
    name: "Minale Coffee & Eatery",
    area: "Banjarsari",
    category: "Cafe",
    priceRange: "18k-35k",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop&crop=center",
    address: "Jl. Ir. Sutami No. 789",
    hours: "07:30 - 22:30",
    facilities: ["WiFi", "AC", "Food Menu"],
    phone: "081234567892",
  },
  {
    id: 4,
    name: "The Hidden Swargi",
    area: "Serengan",
    category: "Hidden Gem",
    priceRange: "15k-30k",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop&crop=center",
    address: "Jl. Gatot Subroto No. 321",
    hours: "09:00 - 21:00",
    facilities: ["Cozy Interior", "Instagram Worthy", "WiFi"],
    phone: "081234567893",
  },
  {
    id: 5,
    name: "Sekutu Kopi",
    area: "Pasar Kliwon",
    category: "Traditional",
    priceRange: "8k-20k",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center",
    address: "Jl. Veteran No. 987",
    hours: "06:00 - 20:00",
    facilities: ["Traditional Vibes", "Affordable", "Local Favorite"],
    phone: "081234567894",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [filteredShops, setFilteredShops] = useState(allCoffeeShops)

  const handleSearch = () => {
    let filtered = allCoffeeShops

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (shop) =>
          shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shop.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shop.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shop.facilities.some((facility) => facility.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    setFilteredShops(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">← Ngop.inSolo</span>
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">Pencarian Coffee Shop</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search & Filter Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Cari nama coffee shop, area, atau kategori..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button onClick={handleSearch}>Cari</Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setFilteredShops(allCoffeeShops)
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Hasil Pencarian ({filteredShops.length} coffee shop)</h2>
          <div className="flex items-center gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results */}
        {filteredShops.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter yang digunakan</p>
            </CardContent>
          </Card>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredShops.map((shop) => (
              <Card
                key={shop.id}
                className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div className={viewMode === "list" ? "w-48 flex-shrink-0" : "relative"}>
                  <img
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    className={viewMode === "list" ? "w-full h-full object-cover" : "w-full h-48 object-cover"}
                  />
                  {viewMode === "grid" && (
                    <Badge className="absolute top-2 right-2 bg-white text-gray-800">{shop.category}</Badge>
                  )}
                </div>

                <div className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-lg text-gray-800">{shop.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{shop.rating}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {shop.area} • {shop.priceRange}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{shop.hours}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {viewMode === "list" && (
                        <Badge variant="secondary" className="text-xs">
                          {shop.category}
                        </Badge>
                      )}
                      {shop.facilities.slice(0, 2).map((facility) => (
                        <Badge key={facility} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/coffee-shop/${shop.id}`} className="flex-1">
                        <Button className="w-full" size="sm">
                          Lihat Detail
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`https://wa.me/62${shop.phone.substring(1)}`, "_blank")}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
