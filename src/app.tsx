import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, Scissors, Palette, Wind } from 'lucide-react'

interface Service {
  name: string
  price: string
  description?: string
}

const services: Service[] = [
  { name: 'Střih dámský', price: 'od 400 Kč', description: 'Včetně stylingu a konzultace' },
  { name: 'Střih pánský', price: 'od 250 Kč', description: 'Klasické i moderní střihy' },
  { name: 'Barvení', price: 'od 800 Kč', description: 'Profesionální barvy všech odstínů' },
  { name: 'Melír', price: 'od 1200 Kč', description: 'Přírodní i výrazné efekty' },
  { name: 'Foukaná', price: 'od 200 Kč', description: 'Perfektní styling pro každou příležitost' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521490878409-4f32c3a0a107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549236114-f1e1c5d7a68a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
]

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <Scissors className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Kadeřnictví Eva
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 font-light max-w-2xl mx-auto leading-relaxed">
              Profesionální péče o vaše vlasy
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
              asChild
            >
              <a href="tel:605407757">
                <Phone className="w-5 h-5 mr-2" />
                Zavolejte nám
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prohlédnout galerii
            </Button>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše práce</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Podívejte se na výsledky naší práce a inspirujte se pro váš nový vzhled
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Účes ${index + 1}`} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ceník služeb</h2>
            <p className="text-lg text-gray-600">
              Nabízíme širokou škálu profesionálních služeb pro vaše vlasy
            </p>
          </div>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                        {service.name.includes('Střih') && <Scissors className="w-6 h-6 text-purple-600" />}
                        {service.name.includes('Barvení') && <Palette className="w-6 h-6 text-purple-600" />}
                        {service.name.includes('Melír') && <Palette className="w-6 h-6 text-purple-600" />}
                        {service.name.includes('Foukaná') && <Wind className="w-6 h-6 text-purple-600" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                        {service.description && (
                          <p className="text-gray-600 mt-1">{service.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-purple-100 shadow-lg">
            <CardContent className="p-12">
              <Clock className="w-12 h-12 mx-auto mb-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Otevírací doba</h2>
              <p className="text-xl text-gray-700 font-medium">
                Otevírací doba dle domluvy
              </p>
              <p className="text-gray-600 mt-4">
                Kontaktujte nás telefonicky nebo se stavte osobně pro domluvení termínu
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
            <p className="text-xl text-purple-100">
              Těšíme se na vaši návštěvu
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Telefon</h3>
                  <a href="tel:605407757" className="text-lg hover:text-purple-200 transition-colors">
                    605 407 757
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Adresa</h3>
                  <p className="text-lg">Na obci 122<br />Choteč</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
                  asChild
                >
                  <a href="tel:605407757">
                    <Phone className="w-5 h-5 mr-2" />
                    Zavolejte nám
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.123456789!2d15.123456789!3d50.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNa%20obci%20122%2C%20Chote%C4%8D!5e0!3m2!1scs!2scz!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Kadeřnictví Eva, Na obci 122, Choteč"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Kadeřnictví Eva. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Zvětšený účes" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button 
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}