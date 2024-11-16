import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Phone, Mail, Clock, MapPin, Menu } from "lucide-react"

export default function GozKlinigi() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              GözBakım Kliniği
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#anasayfa" className="text-gray-600 hover:text-blue-600">
              Ana Sayfa
            </a>
            <a href="#hizmetler" className="text-gray-600 hover:text-blue-600">
              Hizmetler
            </a>
            <a href="#ekibimiz" className="text-gray-600 hover:text-blue-600">
              Ekibimiz
            </a>
            <a href="#iletisim" className="text-gray-600 hover:text-blue-600">
              İletişim
            </a>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main>
        <section id="anasayfa" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              GözBakım Kliniğine Hoş Geldiniz
            </h1>
            <p className="text-xl mb-8">
              Daha net bir gelecek için uzman göz bakımı sunuyoruz
            </p>
            <Button variant="secondary" size="lg">
              Randevu Al
            </Button>
          </div>
        </section>

        <section id="hizmetler" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hizmetlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Kapsamlı Göz Muayenesi",
                "Katarakt Ameliyatı",
                "LASIK",
                "Glokom Tedavisi",
                "Çocuk Göz Bakımı",
                "Kontakt Lens Uygulaması"
              ].map((hizmet, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{hizmet}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      En son teknoloji ve tekniklerle üst düzey{" "}
                      {hizmet.toLowerCase()} hizmeti sunuyoruz.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ekibimiz" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Ayşe Yılmaz", role: "Baş Göz Doktoru" },
                { name: "Dr. Mehmet Kaya", role: "Retina Uzmanı" },
                { name: "Dr. Zeynep Demir", role: "Çocuk Göz Doktoru" }
              ].map((uye, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{uye.name}</CardTitle>
                    <CardDescription>{uye.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4" />
                    <p className="text-center">
                      10 yılı aşkın süredir mükemmel göz bakımı hizmeti
                      sunmaktadır.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bize Ulaşın</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Adınız Soyadınız" />
                    <Input type="email" placeholder="E-posta Adresiniz" />
                    <Input type="tel" placeholder="Telefon Numaranız" />
                    <Textarea placeholder="Mesajınız" />
                    <Button type="submit">Mesaj Gönder</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Klinik Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Göz Bakım Caddesi No: 123, Görüş Şehri, 34000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>(0212) 345 67 89</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>info@gozbakimklinigi.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Pzt-Cuma: 09:00-17:00, Cumartesi: 10:00-14:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GözBakım Kliniği. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
