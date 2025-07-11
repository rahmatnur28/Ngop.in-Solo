import { Coffee, MapPin, Users, TrendingUp, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data untuk dashboard
const stats = [
  {
    title: "Total Coffee Shop",
    value: "5",
    change: "+2 bulan ini",
    icon: Coffee,
    color: "text-blue-600",
  },
  {
    title: "Total Area",
    value: "5",
    change: "Jebres, Laweyan, dll",
    icon: MapPin,
    color: "text-green-600",
  },
  {
    title: "Pengunjung Hari Ini",
    value: "1,247",
    change: "+12% dari kemarin",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Rating Rata-rata",
    value: "4.5",
    change: "Dari semua coffee shop",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

const coffeeShops = [
  {
    id: 1,
    name: "Butler Coffee Boutique",
    area: "Jebres",
    category: "Modern",
    status: "Active",
    rating: 4.7,
    photos: 12,
  },
  {
    id: 2,
    name: "Natahati Coffee & Eatery",
    area: "Laweyan",
    category: "Cafe",
    status: "Active",
    rating: 4.5,
    photos: 8,
  },
  {
    id: 3,
    name: "Minale Coffee & Eatery",
    area: "Banjarsari",
    category: "Cafe",
    status: "Active",
    rating: 4.4,
    photos: 6,
  },
  {
    id: 4,
    name: "The Hidden Swargi",
    area: "Serengan",
    category: "Hidden Gem",
    status: "Active",
    rating: 4.6,
    photos: 10,
  },
  {
    id: 5,
    name: "Sekutu Kopi",
    area: "Pasar Kliwon",
    category: "Traditional",
    status: "Draft",
    rating: 4.3,
    photos: 4,
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Ngop.inSolo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  Lihat Website
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coffee Shop Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Manajemen Coffee Shop</CardTitle>
              <Link href="/admin/add-coffee-shop">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Coffee Shop
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Foto</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coffeeShops.map((shop) => (
                  <TableRow key={shop.id}>
                    <TableCell className="font-medium">{shop.name}</TableCell>
                    <TableCell>{shop.area}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{shop.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={shop.status === "Active" ? "default" : "secondary"}>{shop.status}</Badge>
                    </TableCell>
                    <TableCell>{shop.rating}</TableCell>
                    <TableCell>{shop.photos} foto</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Master Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Kelola Kategori
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Kelola Area
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Kelola Fasilitas
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Konten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Upload Foto
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Kelola Gallery
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Backup Data
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengaturan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Pengaturan Web
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Ganti Password
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Log Aktivitas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
