"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Coffee, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter } from "next/navigation"

const availableFacilities = [
  "WiFi Gratis",
  "AC",
  "Parking",
  "Meeting Room",
  "Food Menu",
  "Outdoor Area",
  "Live Music",
  "Cozy Interior",
  "Instagram Worthy",
  "Traditional Vibes",
  "Affordable",
  "Local Favorite",
  "Drive Thru",
  "24 Hours",
  "Pet Friendly",
]

export default function AddCoffeeShop() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const [formData, setFormData] = useState({
    name: "",
    area: "",
    category: "",
    priceRange: "",
    address: "",
    hours: "",
    phone: "",
    description: "",
    coordinates: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFacilityToggle = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility) ? prev.filter((f) => f !== facility) : [...prev, facility],
    )
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // Mock image upload - in real app, upload to server
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setUploadedImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock save process
    setTimeout(() => {
      alert("Coffee shop berhasil ditambahkan!")
      router.push("/admin/dashboard")
      setIsLoading(false)
    }, 2000)
  }

  const isFormValid = () => {
    return (
      formData.name &&
      formData.area &&
      formData.category &&
      formData.priceRange &&
      formData.address &&
      formData.hours &&
      formData.phone &&
      formData.description
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-amber-600" />
              <h1 className="text-xl font-semibold text-gray-800">Tambah Coffee Shop Baru</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Dasar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Coffee Shop *</Label>
                      <Input
                        id="name"
                        placeholder="Contoh: Butler Coffee Boutique"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="area">Area *</Label>
                      <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Jebres">Jebres</SelectItem>
                          <SelectItem value="Laweyan">Laweyan</SelectItem>
                          <SelectItem value="Banjarsari">Banjarsari</SelectItem>
                          <SelectItem value="Serengan">Serengan</SelectItem>
                          <SelectItem value="Pasar Kliwon">Pasar Kliwon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategori *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Modern">Modern</SelectItem>
                          <SelectItem value="Traditional">Traditional</SelectItem>
                          <SelectItem value="Cafe">Cafe</SelectItem>
                          <SelectItem value="Hidden Gem">Hidden Gem</SelectItem>
                          <SelectItem value="Heritage">Heritage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priceRange">Range Harga *</Label>
                      <Select
                        value={formData.priceRange}
                        onValueChange={(value) => handleInputChange("priceRange", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Range Harga" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">5k-15k</SelectItem>
                          <SelectItem value="8k-20k">8k-20k</SelectItem>
                          <SelectItem value="15k-30k">15k-30k</SelectItem>
                          <SelectItem value="18k-35k">18k-35k</SelectItem>
                          <SelectItem value="20k-40k">20k-40k</SelectItem>
                          <SelectItem value="25k-45k">25k-45k</SelectItem>
                          <SelectItem value="30k-50k">30k-50k</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat Lengkap *</Label>
                    <Textarea
                      id="address"
                      placeholder="Contoh: Jl. Slamet Riyadi No. 123, Jebres, Solo"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hours">Jam Buka *</Label>
                      <Input
                        id="hours"
                        placeholder="Contoh: 08:00 - 22:00"
                        value={formData.hours}
                        onChange={(e) => handleInputChange("hours", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        placeholder="Contoh: 081234567890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coordinates">Koordinat Google Maps</Label>
                    <Input
                      id="coordinates"
                      placeholder="Contoh: -7.5665,110.8167"
                      value={formData.coordinates}
                      onChange={(e) => handleInputChange("coordinates", e.target.value)}
                    />
                    <p className="text-xs text-gray-500">Optional: Untuk integrasi Google Maps yang lebih akurat</p>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Deskripsi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi Coffee Shop *</Label>
                    <Textarea
                      id="description"
                      placeholder="Ceritakan tentang coffee shop ini, suasana, keunikan, dan daya tariknya..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">Minimal 50 karakter untuk deskripsi yang menarik</p>
                  </div>
                </CardContent>
              </Card>

              {/* Facilities */}
              <Card>
                <CardHeader>
                  <CardTitle>Fasilitas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Label>Pilih Fasilitas yang Tersedia</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {availableFacilities.map((facility) => (
                        <div
                          key={facility}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedFacilities.includes(facility)
                              ? "bg-amber-50 border-amber-300 text-amber-800"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                          onClick={() => handleFacilityToggle(facility)}
                        >
                          <span className="text-sm font-medium">{facility}</span>
                        </div>
                      ))}
                    </div>

                    {selectedFacilities.length > 0 && (
                      <div className="space-y-2">
                        <Label>Fasilitas Terpilih:</Label>
                        <div className="flex flex-wrap gap-2">
                          {selectedFacilities.map((facility) => (
                            <Badge key={facility} variant="secondary" className="flex items-center gap-1">
                              {facility}
                              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFacilityToggle(facility)} />
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Image Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload Foto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload foto coffee shop</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Label htmlFor="image-upload">
                      <Button type="button" variant="outline" size="sm" asChild>
                        <span className="cursor-pointer">Pilih Foto</span>
                      </Button>
                    </Label>
                  </div>

                  {uploadedImages.length > 0 && (
                    <div className="space-y-2">
                      <Label>Foto Terupload:</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-20 object-cover rounded"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1 h-6 w-6 p-0"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Nama:</span> {formData.name || "Belum diisi"}
                    </div>
                    <div>
                      <span className="font-medium">Area:</span> {formData.area || "Belum dipilih"}
                    </div>
                    <div>
                      <span className="font-medium">Kategori:</span> {formData.category || "Belum dipilih"}
                    </div>
                    <div>
                      <span className="font-medium">Harga:</span> {formData.priceRange || "Belum dipilih"}
                    </div>
                    <div>
                      <span className="font-medium">Fasilitas:</span> {selectedFacilities.length} terpilih
                    </div>
                    <div>
                      <span className="font-medium">Foto:</span> {uploadedImages.length} foto
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Button type="submit" className="w-full" disabled={!isFormValid() || isLoading}>
                      {isLoading ? "Menyimpan..." : "Simpan Coffee Shop"}
                    </Button>
                    <Button type="button" variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/admin/dashboard">Batal</Link>
                    </Button>
                  </div>
                  {!isFormValid() && (
                    <p className="text-xs text-red-600 mt-2">* Lengkapi semua field yang wajib diisi</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
