import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  TrendingUp,
  BarChart3,
  Target,
  DollarSign,
  BookOpen,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Star
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  featured: boolean
  image: string
  slug?: string
}

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Trend Following: A Complete Guide for Beginners',
    excerpt: 'Learn the fundamentals of trend following strategies and how to identify profitable trends in forex and crypto markets.',
    content: 'Trend following is one of the most reliable trading strategies...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15',
    readTime: 8,
    category: 'Strategy',
    tags: ['trend-following', 'beginner', 'strategy'],
    featured: true,
    image: '/api/placeholder/400/250',
    slug: 'mastering-trend-following-beginners'
  },
  {
    id: '2',
    title: 'Risk Management: Protecting Your Trading Capital',
    excerpt: 'Essential risk management techniques that every trader should know to preserve capital and maximize returns.',
    content: 'Risk management is the cornerstone of successful trading...',
    author: 'Michael Chen',
    publishedAt: '2024-01-12',
    readTime: 6,
    category: 'Risk Management',
    tags: ['risk-management', 'capital-preservation', 'trading-psychology'],
    featured: true,
    image: '/api/placeholder/400/250',
    slug: 'risk-management-protecting-capital'
  },
  {
    id: '3',
    title: 'Understanding Market Volatility: When to Trade and When to Wait',
    excerpt: 'How to identify high and low volatility periods and adjust your trading strategy accordingly.',
    content: 'Market volatility can be both a friend and foe to traders...',
    author: 'Elena Rodriguez',
    publishedAt: '2024-01-10',
    readTime: 7,
    category: 'Market Analysis',
    tags: ['volatility', 'market-analysis', 'timing'],
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: '4',
    title: 'The Psychology of Trading: Overcoming Common Mental Barriers',
    excerpt: 'Explore the psychological challenges traders face and learn strategies to maintain discipline and consistency.',
    content: 'Trading psychology plays a crucial role in long-term success...',
    author: 'David Thompson',
    publishedAt: '2024-01-08',
    readTime: 9,
    category: 'Psychology',
    tags: ['trading-psychology', 'discipline', 'mindset'],
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: '5',
    title: 'Automated Trading with Expert Advisors: Best Practices',
    excerpt: 'A comprehensive guide to using expert advisors effectively, including setup, optimization, and risk management.',
    content: 'Expert advisors can be powerful tools when used correctly...',
    author: 'Michael Chen',
    publishedAt: '2024-01-05',
    readTime: 12,
    category: 'Automation',
    tags: ['expert-advisors', 'automation', 'optimization'],
    featured: true,
    image: '/api/placeholder/400/250',
    slug: 'automated-trading-expert-advisors-best-practices'
  },
  {
    id: '6',
    title: 'Technical Analysis vs Fundamental Analysis: Which is Better?',
    excerpt: 'Compare the two main approaches to market analysis and understand when to use each for maximum effectiveness.',
    content: 'The debate between technical and fundamental analysis...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-03',
    readTime: 10,
    category: 'Education',
    tags: ['technical-analysis', 'fundamental-analysis', 'education'],
    featured: false,
    image: '/api/placeholder/400/250'
  }
]

const categories = ['All Categories', 'Strategy', 'Risk Management', 'Market Analysis', 'Psychology', 'Automation', 'Education']

export default function BlogsPage() {
  const featuredPosts = samplePosts.filter(post => post.featured)
  const recentPosts = samplePosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Trading Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles, strategies, and market analysis. Learn from experienced traders and improve your trading skills.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge className="bg-primary/10 text-primary">Featured</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {post.slug ? (
                    <Button asChild className="w-full">
                      <Link href={`/blogs/${post.slug}`}>Read Article</Link>
                    </Button>
                  ) : (
                    <Button className="w-full">Read Article</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Recent Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary/5 rounded-2xl p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-muted-foreground mb-6">
              Get our latest articles, trading tips, and market analysis delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Card key={category} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {samplePosts.filter(post => post.category === category).length} articles
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
