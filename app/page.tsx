"use client"

import { Coffee, MapPin, Clock, Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

const HomePage = () => {
  const coffeeShops = [
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
      facilities: ["WiFi", "AC", "Meeting Room", "Parking"],
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
      facilities: ["WiFi", "Food Menu", "Outdoor", "Live Music"],
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
      facilities: ["WiFi", "AC", "Food Menu", "Parking"],
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

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredShops, setFilteredShops] = useState(coffeeShops)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredShops(coffeeShops)
    } else {
      const filtered = coffeeShops.filter(
        (shop) =>
          shop.name.toLowerCase().includes(query.toLowerCase()) ||
          shop.area.toLowerCase().includes(query.toLowerCase()) ||
          shop.category.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredShops(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-800">Ngop.inSolo</h1>
            </div>
            {/* <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=600&fit=crop&crop=center')",
        }}
      >
        {/* Overlay untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

        {/* Content dengan z-index lebih tinggi */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Temukan Coffee Shop Terbaik di Solo</h2>
          <p className="text-xl mb-8 opacity-90 drop-shadow-md">Direktori lengkap tempat ngopi favorit di Kota Solo</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Cari nama coffee shop atau area..."
                  className="pl-10 h-12 text-gray-800 bg-white/95 backdrop-blur-sm border-white/20"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg">
                <Search className="h-5 w-5 mr-2" />
                Cari
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {searchQuery && (
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              {filteredShops.length > 0
                ? `Menampilkan ${filteredShops.length} hasil untuk "${searchQuery}"`
                : `Tidak ada hasil untuk "${searchQuery}"`}
            </p>
          </div>
        </section>
      )}

      {/* Coffee Shop Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {searchQuery
                ? `Hasil Pencarian (${filteredShops.length})`
                : `Coffee Shop Pilihan (${coffeeShops.length})`}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.length > 0 ? (
              filteredShops.map((shop) => (
                <Card key={shop.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img src={shop.image || "/placeholder.svg"} alt={shop.name} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-white text-gray-800">{shop.category}</Badge>
                  </div>

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
                      {shop.facilities.slice(0, 3).map((facility) => (
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
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada coffee shop ditemukan</h3>
                <p className="text-gray-500">Coba kata kunci lain atau lihat semua coffee shop</p>
                <Button className="mt-4" onClick={() => handleSearch("")}>
                  Lihat Semua Coffee Shop
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-6 w-6 text-amber-400" />
            <span className="text-xl font-bold">Ngop.inSolo</span>
          </div>
          <p className="text-gray-400 mb-4">Direktori coffee shop terlengkap di Solo</p>
          <p className="text-sm text-gray-500">© 2024 Ngop.inSolo. Dibuat dengan ❤️ untuk pecinta kopi Solo</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
