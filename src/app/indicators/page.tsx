import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Star,
  Download,
  ShoppingCart,
  Filter,
  Search,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Eye
} from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  type: 'indicator' | 'expert-advisor'
  category: string
  rating: number
  reviewCount: number
  downloads: number
  features: string[]
  tags: string[]
  image: string
  isFree: boolean
  isPopular: boolean
  isNew: boolean
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Maven Trend Pro',
    description: 'Advanced trend-following indicator with multiple timeframes and alert system for precise market entries.',
    price: 49,
    originalPrice: 79,
    type: 'indicator',
    category: 'Trend Analysis',
    rating: 4.8,
    reviewCount: 128,
    downloads: 1250,
    features: ['Multi-timeframe analysis', 'Smart alerts', 'Customizable settings', 'Backtesting support'],
    tags: ['trending', 'alerts', 'mt4', 'mt5'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: true,
    isNew: false
  },
  {
    id: '2',
    name: 'RSI Divergence Pro',
    description: 'Professional RSI divergence indicator for identifying trend reversals and entry points.',
    price: 0,
    type: 'indicator',
    category: 'Oscillators',
    rating: 4.6,
    reviewCount: 245,
    downloads: 3400,
    features: ['Divergence detection', 'Multiple timeframes', 'Visual signals', 'Sound alerts'],
    tags: ['rsi', 'divergence', 'reversal', 'free'],
    image: '/api/placeholder/300/200',
    isFree: true,
    isPopular: true,
    isNew: false
  },
  {
    id: '3',
    name: 'Support & Resistance',
    description: 'Automatic support and resistance level detection with dynamic adjustment based on market conditions.',
    price: 39,
    type: 'indicator',
    category: 'Support & Resistance',
    rating: 4.7,
    reviewCount: 89,
    downloads: 890,
    features: ['Auto SR levels', 'Dynamic adjustment', 'Multiple timeframes', 'Export levels'],
    tags: ['support', 'resistance', 'levels', 'auto'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: false,
    isNew: true
  },
  {
    id: '4',
    name: 'Volume Profile',
    description: 'Advanced volume profile analysis tool for identifying key price levels and market structure.',
    price: 59,
    type: 'indicator',
    category: 'Volume Analysis',
    rating: 4.9,
    reviewCount: 156,
    downloads: 1450,
    features: ['Volume clusters', 'POC identification', 'Value areas', 'Time-based profiles'],
    tags: ['volume', 'profile', 'poc', 'clusters'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: true,
    isNew: false
  },
  {
    id: '5',
    name: 'Fibonacci Retracement',
    description: 'Professional Fibonacci retracement tool with automatic level detection and extension capabilities.',
    price: 29,
    type: 'indicator',
    category: 'Fibonacci',
    rating: 4.5,
    reviewCount: 203,
    downloads: 2100,
    features: ['Auto Fibonacci levels', 'Multiple ratios', 'Extension levels', 'Custom settings'],
    tags: ['fibonacci', 'retracement', 'levels', 'ratios'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: false,
    isNew: false
  },
  {
    id: '6',
    name: 'MACD Advanced',
    description: 'Enhanced MACD indicator with additional signals, divergence detection, and customizable parameters.',
    price: 0,
    type: 'indicator',
    category: 'Oscillators',
    rating: 4.4,
    reviewCount: 312,
    downloads: 4200,
    features: ['Enhanced signals', 'Divergence alerts', 'Histogram analysis', 'Multiple settings'],
    tags: ['macd', 'oscillator', 'signals', 'free'],
    image: '/api/placeholder/300/200',
    isFree: true,
    isPopular: false,
    isNew: false
  }
]

export default function IndicatorsPage() {
  const categories = ['All Categories', 'Trend Analysis', 'Oscillators', 'Support & Resistance', 'Volume Analysis', 'Fibonacci']
  const sortOptions = ['Most Popular', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Highest Rated']

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Trading Indicators</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional technical indicators for MetaTrader 4 and 5. Enhance your trading strategy with our premium collection of indicators.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search indicators..."
                className="pl-10"
              />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-primary" />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isFree && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Free
                    </Badge>
                  )}
                  {product.isPopular && (
                    <Badge variant="secondary">Popular</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      New
                    </Badge>
                  )}
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {product.name}
                  <Badge variant="outline">{product.category}</Badge>
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Downloads */}
                <div className="flex items-center gap-2 mb-4">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {product.downloads.toLocaleString()} downloads
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-primary">+{product.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className={`text-2xl font-bold ${product.isFree ? 'text-green-600' : 'text-primary'}`}>
                      {product.isFree ? 'Free' : `$${product.price}`}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      {product.isFree ? (
                        <>
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Buy Now
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
