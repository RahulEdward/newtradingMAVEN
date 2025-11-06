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
  Eye,
  Bot,
  Activity,
  DollarSign,
  Clock
} from 'lucide-react'

interface ExpertAdvisor {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  strategy: string
  rating: number
  reviewCount: number
  downloads: number
  features: string[]
  tags: string[]
  image: string
  isFree: boolean
  isPopular: boolean
  isNew: boolean
  performance: {
    winRate: number
    maxDrawdown: number
    profitFactor: number
    totalTrades: number
  }
}

const sampleEAs: ExpertAdvisor[] = [
  {
    id: '1',
    name: 'Scalper EA Pro',
    description: 'High-frequency scalping robot for EUR/USD with advanced risk management and multiple timeframes.',
    price: 99,
    originalPrice: 149,
    category: 'Scalping',
    strategy: 'High-frequency scalping with dynamic lot sizing',
    rating: 4.7,
    reviewCount: 89,
    downloads: 756,
    features: ['Multi-timeframe analysis', 'Dynamic lot sizing', 'Advanced risk management', 'News filter'],
    tags: ['scalping', 'eurusd', 'automated', 'risk-management'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: true,
    isNew: false,
    performance: {
      winRate: 78.5,
      maxDrawdown: 12.3,
      profitFactor: 2.1,
      totalTrades: 15420
    }
  },
  {
    id: '2',
    name: 'Grid Trading EA',
    description: 'Professional grid trading system with customizable grid levels and advanced money management.',
    price: 79,
    category: 'Grid Trading',
    strategy: 'Grid-based position building with hedging',
    rating: 4.5,
    reviewCount: 156,
    downloads: 1234,
    features: ['Customizable grid levels', 'Advanced money management', 'Hedging capabilities', 'Recovery mode'],
    tags: ['grid', 'hedging', 'money-management', 'recovery'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: true,
    isNew: false,
    performance: {
      winRate: 65.2,
      maxDrawdown: 18.7,
      profitFactor: 1.8,
      totalTrades: 8930
    }
  },
  {
    id: '3',
    name: 'Trend Follower EA',
    description: 'Advanced trend-following expert advisor with multiple indicators and adaptive position sizing.',
    price: 129,
    category: 'Trend Following',
    strategy: 'Multi-indicator trend following with adaptive sizing',
    rating: 4.8,
    reviewCount: 203,
    downloads: 1456,
    features: ['Multi-indicator system', 'Adaptive position sizing', 'Trend strength filter', 'Breakout detection'],
    tags: ['trend-following', 'multi-indicator', 'adaptive', 'breakout'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: true,
    isNew: true,
    performance: {
      winRate: 72.8,
      maxDrawdown: 15.2,
      profitFactor: 2.3,
      totalTrades: 5670
    }
  },
  {
    id: '4',
    name: 'Mean Reversion EA',
    description: 'Statistical mean reversion system for ranging markets with dynamic entry and exit points.',
    price: 89,
    category: 'Mean Reversion',
    strategy: 'Statistical mean reversion with dynamic levels',
    rating: 4.6,
    reviewCount: 134,
    downloads: 987,
    features: ['Statistical analysis', 'Dynamic levels', 'Multiple pairs support', 'Volatility filter'],
    tags: ['mean-reversion', 'statistical', 'ranging', 'volatility'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: false,
    isNew: false,
    performance: {
      winRate: 68.9,
      maxDrawdown: 14.5,
      profitFactor: 1.9,
      totalTrades: 7890
    }
  },
  {
    id: '5',
    name: 'Martingale Recovery EA',
    description: 'Advanced martingale system with intelligent recovery mechanisms and risk controls.',
    price: 0,
    category: 'Martingale',
    strategy: 'Martingale with intelligent recovery and risk limits',
    rating: 4.3,
    reviewCount: 312,
    downloads: 2340,
    features: ['Intelligent recovery', 'Risk limits', 'Multiple recovery modes', 'Customizable parameters'],
    tags: ['martingale', 'recovery', 'risk-management', 'free'],
    image: '/api/placeholder/300/200',
    isFree: true,
    isPopular: false,
    isNew: false,
    performance: {
      winRate: 58.4,
      maxDrawdown: 25.8,
      profitFactor: 1.6,
      totalTrades: 12340
    }
  },
  {
    id: '6',
    name: 'Arbitrage EA',
    description: 'Cross-broker arbitrage system for capturing price differences across multiple liquidity providers.',
    price: 199,
    category: 'Arbitrage',
    strategy: 'Multi-broker arbitrage with latency optimization',
    rating: 4.9,
    reviewCount: 67,
    downloads: 445,
    features: ['Multi-broker support', 'Latency optimization', 'Risk-free arbitrage', 'Real-time monitoring'],
    tags: ['arbitrage', 'multi-broker', 'latency', 'risk-free'],
    image: '/api/placeholder/300/200',
    isFree: false,
    isPopular: false,
    isNew: true,
    performance: {
      winRate: 94.2,
      maxDrawdown: 2.1,
      profitFactor: 8.5,
      totalTrades: 2340
    }
  }
]

export default function ExpertAdvisorsPage() {
  const categories = ['All Categories', 'Scalping', 'Grid Trading', 'Trend Following', 'Mean Reversion', 'Martingale', 'Arbitrage']
  const sortOptions = ['Most Popular', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Highest Rated']

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Expert Advisors</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automated trading systems for MetaTrader 4 and 5. Choose from our collection of professional EAs designed for different trading styles and market conditions.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search expert advisors..."
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
          {sampleEAs.map((ea) => (
            <Card key={ea.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-primary/5 flex items-center justify-center">
                  <Bot className="h-16 w-16 text-orange-500" />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {ea.isFree && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Free
                    </Badge>
                  )}
                  {ea.isPopular && (
                    <Badge variant="secondary">Popular</Badge>
                  )}
                  {ea.isNew && (
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      New
                    </Badge>
                  )}
                </div>

                {/* Discount Badge */}
                {ea.originalPrice && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      Save ${ea.originalPrice - ea.price}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {ea.name}
                  <Badge variant="outline">{ea.category}</Badge>
                </CardTitle>
                <CardDescription>{ea.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{ea.performance.winRate}%</div>
                    <div className="text-xs text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{ea.performance.maxDrawdown}%</div>
                    <div className="text-xs text-muted-foreground">Max DD</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{ea.performance.profitFactor}</div>
                    <div className="text-xs text-muted-foreground">Profit Factor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{ea.performance.totalTrades.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Total Trades</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(ea.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {ea.rating} ({ea.reviewCount} reviews)
                  </span>
                </div>

                {/* Downloads */}
                <div className="flex items-center gap-2 mb-4">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {ea.downloads.toLocaleString()} downloads
                  </span>
                </div>

                {/* Strategy */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Strategy:</strong> {ea.strategy}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {ea.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                    {ea.features.length > 3 && (
                      <li className="text-primary">+{ea.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ea.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${ea.originalPrice}
                      </span>
                    )}
                    <span className={`text-2xl font-bold ${ea.isFree ? 'text-green-600' : 'text-primary'}`}>
                      {ea.isFree ? 'Free' : `$${ea.price}`}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      {ea.isFree ? (
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
