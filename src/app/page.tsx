import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Shield, Zap, Users, Star, Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🚀 Now Available - MQL4/5 Indicators & Expert Advisors
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Master the Markets with
              <span className="text-primary"> Trading Maven</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Professional forex and crypto trading platform featuring premium indicators and expert advisors.
              Access both free and paid tools to elevate your trading strategy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Browse Marketplace
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Trading Maven?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to succeed in forex and crypto trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Advanced Indicators</CardTitle>
                <CardDescription>
                  Professional technical indicators for precise market analysis and trading signals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Expert Advisors</CardTitle>
                <CardDescription>
                  Automated trading systems that execute strategies 24/7 across multiple markets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Secure Platform</CardTitle>
                <CardDescription>
                  Enterprise-grade security with encrypted transactions and secure downloads
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Trading Community</CardTitle>
                <CardDescription>
                  Join thousands of successful traders sharing strategies and market insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Premium Support</CardTitle>
                <CardDescription>
                  24/7 customer support with detailed documentation and video tutorials
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Download className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Instant Access</CardTitle>
                <CardDescription>
                  Download and install indicators and EAs instantly after purchase
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our most popular trading tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Product Cards */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Indicator</Badge>
                  <span className="text-2xl font-bold text-primary">$49</span>
                </div>
                <CardTitle>Maven Trend Pro</CardTitle>
                <CardDescription>
                  Advanced trend-following indicator with multiple timeframes and alert system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(128 reviews)</span>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-primary/5 flex items-center justify-center">
                <Zap className="h-16 w-16 text-orange-500" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Expert Advisor</Badge>
                  <span className="text-2xl font-bold text-primary">$99</span>
                </div>
                <CardTitle>Scalper EA Pro</CardTitle>
                <CardDescription>
                  High-frequency scalping robot for EUR/USD with advanced risk management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(89 reviews)</span>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 bg-primary/5">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-primary/5 flex items-center justify-center">
                <Download className="h-16 w-16 text-green-500" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Free</Badge>
                  <span className="text-2xl font-bold text-green-600">Free</span>
                </div>
                <CardTitle>Maven RSI Divergence</CardTitle>
                <CardDescription>
                  Free RSI divergence indicator perfect for beginners learning technical analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(245 reviews)</span>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Transform Your Trading?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of successful traders who trust Trading Maven for their trading tools and strategies.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Trading Maven</h3>
              <p className="text-muted-foreground mb-4">
                Professional forex and crypto trading platform providing premium indicators and expert advisors for MetaTrader 4 and 5.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">f</span>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">t</span>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/indicators" className="hover:text-primary transition-colors">Indicators</a></li>
                <li><a href="/expert-advisors" className="hover:text-primary transition-colors">Expert Advisors</a></li>
                <li><a href="/bundles" className="hover:text-primary transition-colors">Bundles</a></li>
                <li><a href="/free-tools" className="hover:text-primary transition-colors">Free Tools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/support" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/documentation" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="/refunds" className="hover:text-primary transition-colors">Refunds</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Trading Maven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
