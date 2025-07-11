"use client"

import { ArrowLeft, MapPin, Clock, Star, Phone, Navigation, Wifi, Car, Music, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// Mock data untuk detail coffee shop
const coffeeShopDetails = {
  1: {
    id: 1,
    name: "Butler Coffee Boutique",
    area: "Jebres",
    category: "Modern",
    priceRange: "25k-45k",
    rating: 4.7,
    totalReviews: 89,
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop&crop=center",
    ],
    address: "Jl. Slamet Riyadi No. 123, Jebres, Solo",
    hours: "08:00 - 22:00",
    phone: "081234567890",
    description:
      "Butler Coffee Boutique menghadirkan pengalaman kopi premium dengan suasana modern dan elegan. Menyajikan specialty coffee dengan biji kopi pilihan dari berbagai daerah di Indonesia. Tempat yang sempurna untuk meeting bisnis atau hangout bersama teman.",
    facilities: [
      { name: "WiFi Gratis", icon: Wifi },
      { name: "AC", icon: Home },
      { name: "Meeting Room", icon: Car },
      { name: "Parkir Luas", icon: Music },
    ],
    menu: [
      { name: "Espresso", price: "18k" },
      { name: "Cappuccino", price: "25k" },
      { name: "V60 Pour Over", price: "35k" },
      { name: "Cold Brew", price: "28k" },
      { name: "Pasta", price: "45k" },
    ],
    coordinates: "-7.5665,110.8167",
  },
  2: {
    id: 2,
    name: "Natahati Coffee & Eatery",
    area: "Laweyan",
    category: "Cafe",
    priceRange: "20k-40k",
    rating: 4.5,
    totalReviews: 124,
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
    ],
    address: "Jl. Dr. Radjiman No. 456, Laweyan, Solo",
    hours: "07:00 - 23:00",
    phone: "081234567891",
    description:
      "Natahati Coffee & Eatery adalah perpaduan sempurna antara coffee shop dan restaurant. Menyajikan kopi berkualitas tinggi dan menu makanan yang lezat dalam suasana yang nyaman dan instagramable.",
    facilities: [
      { name: "WiFi Gratis", icon: Wifi },
      { name: "Food Menu", icon: Home },
      { name: "Outdoor Area", icon: Car },
      { name: "Live Music", icon: Music },
    ],
    menu: [
      { name: "Americano", price: "20k" },
      { name: "Latte", price: "25k" },
      { name: "Nasi Goreng", price: "35k" },
      { name: "Sandwich", price: "28k" },
      { name: "Dessert", price: "22k" },
    ],
    coordinates: "-7.5665,110.8167",
  },
  3: {
    id: 3,
    name: "Minale Coffee & Eatery",
    area: "Banjarsari",
    category: "Cafe",
    priceRange: "18k-35k",
    rating: 4.4,
    totalReviews: 156,
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
    ],
    address: "Jl. Ir. Sutami No. 789, Banjarsari, Solo",
    hours: "07:30 - 22:30",
    phone: "081234567892",
    description:
      "Minale Coffee & Eatery menghadirkan konsep cafe modern dengan menu kopi dan makanan yang beragam. Tempat yang nyaman untuk bekerja, belajar, atau sekedar bersantai dengan teman. Menyajikan specialty coffee dengan harga terjangkau dan suasana yang cozy.",
    facilities: [
      { name: "WiFi Gratis", icon: Wifi },
      { name: "AC", icon: Home },
      { name: "Food Menu", icon: Car },
      { name: "Parkir", icon: Music },
    ],
    menu: [
      { name: "Americano", price: "18k" },
      { name: "Cappuccino", price: "22k" },
      { name: "Latte Art", price: "25k" },
      { name: "Nasi Goreng Spesial", price: "32k" },
      { name: "Pasta Carbonara", price: "35k" },
    ],
    coordinates: "-7.5665,110.8167",
  },
  4: {
    id: 4,
    name: "The Hidden Swargi",
    area: "Serengan",
    category: "Hidden Gem",
    priceRange: "15k-30k",
    rating: 4.6,
    totalReviews: 203,
    images: [
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
    ],
    address: "Jl. Gatot Subroto No. 321, Serengan, Solo",
    hours: "09:00 - 21:00",
    phone: "081234567893",
    description:
      "The Hidden Swargi adalah coffee shop tersembunyi yang menawarkan pengalaman unik dengan interior yang instagramable dan suasana yang tenang. Tempat favorit anak muda untuk foto-foto aesthetic sambil menikmati kopi berkualitas dengan harga yang ramah di kantong.",
    facilities: [
      { name: "Cozy Interior", icon: Home },
      { name: "Instagram Worthy", icon: Wifi },
      { name: "WiFi Gratis", icon: Car },
      { name: "Spot Foto", icon: Music },
    ],
    menu: [
      { name: "Es Kopi Susu", price: "15k" },
      { name: "Kopi Tubruk", price: "12k" },
      { name: "Matcha Latte", price: "20k" },
      { name: "Roti Bakar", price: "18k" },
      { name: "Pisang Goreng", price: "15k" },
    ],
    coordinates: "-7.5665,110.8167",
  },
  5: {
    id: 5,
    name: "Sekutu Kopi",
    area: "Pasar Kliwon",
    category: "Traditional",
    priceRange: "8k-20k",
    rating: 4.3,
    totalReviews: 178,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&h=400&fit=crop&crop=center",
    ],
    address: "Jl. Veteran No. 987, Pasar Kliwon, Solo",
    hours: "06:00 - 20:00",
    phone: "081234567894",
    description:
      "Sekutu Kopi adalah warung kopi tradisional yang telah berdiri puluhan tahun. Menyajikan kopi robusta asli dengan cita rasa khas Solo yang autentik. Tempat berkumpulnya para pecinta kopi tradisional dengan harga yang sangat terjangkau dan suasana kekeluargaan yang hangat.",
    facilities: [
      { name: "Traditional Vibes", icon: Home },
      { name: "Harga Terjangkau", icon: Wifi },
      { name: "Local Favorite", icon: Car },
      { name: "Kopi Asli", icon: Music },
    ],
    menu: [
      { name: "Kopi Tubruk", price: "8k" },
      { name: "Kopi Susu", price: "12k" },
      { name: "Es Kopi", price: "10k" },
      { name: "Teh Manis", price: "6k" },
      { name: "Gorengan Campur", price: "15k" },
    ],
    coordinates: "-7.5665,110.8167",
  },
}

export default function CoffeeShopDetail({ params }: { params: { id: string } }) {
  const shop = coffeeShopDetails[Number(params.id)] // Using mock data for demo

  if (!shop) {
    return <div>Coffee shop not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-800">{shop.name}</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src={shop.images[0] || "/placeholder.svg"}
                    alt={shop.name}
                    className="w-full h-64 object-cover rounded-tl-lg"
                  />
                  <div className="grid grid-cols-1 gap-2">
                    <img
                      src={shop.images[1] || "/placeholder.svg"}
                      alt={shop.name}
                      className="w-full h-32 object-cover rounded-tr-lg"
                    />
                    <img
                      src={shop.images[2] || "/placeholder.svg"}
                      alt={shop.name}
                      className="w-full h-30 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{shop.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{shop.rating}</span>
                        <span className="text-gray-600">({shop.totalReviews} ulasan)</span>
                      </div>
                      <Badge>{shop.category}</Badge>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {shop.priceRange}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{shop.description}</p>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Fasilitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {shop.facilities.map((facility) => (
                    <div key={facility.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <facility.icon className="h-5 w-5 text-amber-600" />
                      <span className="text-sm font-medium">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Menu Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shop.menu.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-amber-600 font-semibold">{item.price}</span>
                      </div>
                      {index < shop.menu.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact & Location */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-sm text-gray-600">{shop.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Jam Buka</p>
                    <p className="text-sm text-gray-600">{shop.hours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-sm text-gray-600">{shop.phone}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/62${shop.phone.substring(1)}`, "_blank")}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Hubungi via WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open(`https://maps.google.com/?q=${shop.coordinates}`, "_blank")}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Lihat di Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Coffee Shop Lainnya</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shop.id !== 3 && (
                    <Link href="/coffee-shop/3">
                      <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <img
                          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=50&h=50&fit=crop&crop=center"
                          alt="Minale Coffee & Eatery"
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">Minale Coffee & Eatery</p>
                          <p className="text-xs text-gray-600">Banjarsari • 18k-35k</p>
                        </div>
                      </div>
                    </Link>
                  )}

                  {shop.id !== 4 && (
                    <Link href="/coffee-shop/4">
                      <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <img
                          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=50&h=50&fit=crop&crop=center"
                          alt="The Hidden Swargi"
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">The Hidden Swargi</p>
                          <p className="text-xs text-gray-600">Serengan • 15k-30k</p>
                        </div>
                      </div>
                    </Link>
                  )}

                  {shop.id !== 5 && (
                    <Link href="/coffee-shop/5">
                      <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <img
                          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=50&h=50&fit=crop&crop=center"
                          alt="Sekutu Kopi"
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">Sekutu Kopi</p>
                          <p className="text-xs text-gray-600">Pasar Kliwon • 8k-20k</p>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
