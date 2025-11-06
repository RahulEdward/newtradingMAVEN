import { Navigation } from '@/components/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react'
import SafeImage from '@/components/safe-image'

type ArticleMeta = {
  slug: string
  title: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  heroImage: string
}

const ARTICLES: ArticleMeta[] = [
  {
    slug: 'mastering-trend-following-beginners',
    title: 'Mastering Trend Following: A Complete Guide for Beginners',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15',
    readTime: 12,
    category: 'Strategy',
    tags: ['trend-following', 'beginner', 'strategy'],
    heroImage: 'https://source.unsplash.com/1600x900/?stock-market,candlestick,chart'
  },
  {
    slug: 'risk-management-protecting-capital',
    title: 'Risk Management: Protecting Your Trading Capital',
    author: 'Michael Chen',
    publishedAt: '2024-01-12',
    readTime: 11,
    category: 'Risk Management',
    tags: ['risk-management', 'capital-preservation', 'trading-psychology'],
    heroImage: 'https://source.unsplash.com/1600x900/?stock-market,candlestick,chart'
  },
  {
    slug: 'automated-trading-expert-advisors-best-practices',
    title: 'Automated Trading with Expert Advisors: Best Practices',
    author: 'Michael Chen',
    publishedAt: '2024-01-05',
    readTime: 14,
    category: 'Automation',
    tags: ['expert-advisors', 'automation', 'optimization'],
    heroImage: 'https://source.unsplash.com/1600x900/?stock-market,candlestick,chart'
  }
]

function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case 'mastering-trend-following-beginners':
      return (
        <div className="space-y-6">
          <h2 id="what-is" className="text-2xl font-bold">What Is Trend Following?</h2>
          <p className="text-muted-foreground">
            Trend following is a strategy that aims to capture sustained moves in price by trading in the direction of the prevailing trend.
            Instead of predicting tops or bottoms, traders wait for confirmation that a trend exists and then ride it until evidence of reversal.
            It’s widely used in forex and crypto due to the strong momentum phases common in these markets.
          </p>
          <h3 id="principles" className="text-xl font-semibold">Core Principles</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Identify trend direction using higher-timeframe structure.</li>
            <li>Enter on pullbacks in the direction of the trend.</li>
            <li>Use trailing stops to let winners run and cut losers quickly.</li>
            <li>Manage risk per trade (e.g., 1–2% of account balance).</li>
          </ul>
          <div className="rounded-lg overflow-hidden">
            <SafeImage
              src="https://source.unsplash.com/1200x675/?stock-market,candlestick,chart"
              alt="Uptrend chart illustration"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 id="tools" className="text-xl font-semibold">Common Tools</h3>
          <p className="text-muted-foreground">Popular tools include moving averages (MA), Average Directional Index (ADX), Donchian channels, and trendlines.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>MA Crossover</CardTitle>
                <CardDescription>Use a fast MA crossing above a slow MA to confirm bullish trend.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Entry: Price above 50MA and 20MA crosses 50MA up.</li>
                  <li>Stop: Below recent swing low.</li>
                  <li>Exit: Trailing stop using ATR or MA cross down.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Breakout with Donchian</CardTitle>
                <CardDescription>Enter when price breaks the 20-day high and trail under the 10-day low.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Works well on trending pairs like EURUSD, BTCUSD.</li>
                  <li>Avoid choppy markets; filter with ADX &gt; 25.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <h3 id="risk" className="text-xl font-semibold">Risk Management</h3>
          <p className="text-muted-foreground">Position sizing and disciplined exits are essential. Consider a maximum risk per trade and a daily loss limit to avoid overtrading.</p>
          <h3 id="resources" className="text-xl font-semibold">Further Reading</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.investopedia.com/terms/t/trendfollowing.asp" target="_blank" rel="noopener noreferrer" className="text-primary">Investopedia: Trend Following</a>
            </li>
            <li>
              <a href="https://www.babypips.com/learn/forex/trend-trading" target="_blank" rel="noopener noreferrer" className="text-primary">Babypips: Trend Trading</a>
            </li>
          </ul>
        </div>
      )
    case 'risk-management-protecting-capital':
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Why Risk Management Matters</h2>
          <p className="text-muted-foreground">Risk management protects your equity during losing streaks and ensures longevity. Without structured rules, even profitable strategies can fail.</p>
          <h3 className="text-xl font-semibold">Key Concepts</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Define risk per trade (e.g., 1%).</li>
            <li>Use stop-loss orders consistently.</li>
            <li>Apply position sizing based on volatility (ATR).</li>
            <li>Set a maximum daily/weekly drawdown.</li>
          </ul>
          <div className="rounded-lg overflow-hidden">
            <SafeImage
              src="https://source.unsplash.com/1200x675/?stock-market,candlestick,chart"
              alt="Risk control and protection"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Position Sizing Example</h3>
          <p className="text-muted-foreground">For a $10,000 account risking 1% ($100) and ATR-based stop of 50 pips on EURUSD, position size = $100 / (50 pips × $10 per pip per standard lot) = 0.2 lots.</p>
          <h3 className="text-xl font-semibold">Common Mistakes</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Moving stops further away to avoid losses.</li>
            <li>Overleveraging after a win (recency bias).</li>
            <li>Ignoring correlation between instruments.</li>
          </ul>
          <h3 className="text-xl font-semibold">Useful Links</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.investopedia.com/terms/r/riskmanagement.asp" target="_blank" rel="noopener noreferrer" className="text-primary">Investopedia: Risk Management</a></li>
            <li><a href="https://www.babypips.com/forexpedia/position-sizing" target="_blank" rel="noopener noreferrer" className="text-primary">Babypips: Position Sizing</a></li>
          </ul>
        </div>
      )
    case 'automated-trading-expert-advisors-best-practices':
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Expert Advisors (EAs) Best Practices</h2>
          <p className="text-muted-foreground">EAs automate execution and remove emotional bias. Proper setup, testing, and monitoring are essential for consistent results.</p>
          <h3 className="text-xl font-semibold">Deployment Checklist</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Backtest with sufficient data and model quality.</li>
            <li>Forward test on demo with realistic spreads.</li>
            <li>Use VPS for 24/7 uptime and stable latency.</li>
            <li>Define risk limits and daily/weekly trade caps.</li>
          </ul>
          <div className="rounded-lg overflow-hidden">
            <SafeImage
              src="https://source.unsplash.com/1200x675/?stock-market,candlestick,chart"
              alt="Automation dashboard"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Optimization Tips</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Avoid overfitting; prefer walk-forward optimization.</li>
            <li>Use out-of-sample validation for parameters.</li>
            <li>Monitor live performance; pause during unusual volatility.</li>
          </ul>
          <h3 className="text-xl font-semibold">Recommended Resources</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.mql5.com/en/articles/496" target="_blank" rel="noopener noreferrer" className="text-primary">MQL5: Strategy Tester and Optimization</a></li>
            <li><a href="https://www.metatrader5.com/en/terminal/help/strategy_tester" target="_blank" rel="noopener noreferrer" className="text-primary">MetaTrader: Strategy Tester Guide</a></li>
          </ul>
        </div>
      )
    default:
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Article Not Found</h2>
          <p className="text-muted-foreground">We couldn’t find the requested article. Please return to the blog list.</p>
          <Button asChild><Link href="/blogs">Back to Blogs</Link></Button>
        </div>
      )
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const meta = ARTICLES.find(a => a.slug === slug)

  const index = ARTICLES.findIndex(a => a.slug === slug)
  const prev = index > 0 ? ARTICLES[index - 1] : null
  const next = index >= 0 && index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center gap-2">
          <Link href="/blogs" className="inline-flex items-center text-sm text-primary">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blogs
          </Link>
        </div>

        {meta && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{meta.category}</Badge>
              {meta.tags.map(t => (
                <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{meta.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><User className="h-4 w-4" /> {meta.author}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(meta.publishedAt).toLocaleDateString()}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {meta.readTime} min read</span>
            </div>
          </div>
        )}

        {meta && (
          <div className="rounded-lg overflow-hidden mb-8">
            <SafeImage
              src={meta.heroImage}
              alt="Article hero"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        )}

        <article className="max-w-3xl mx-auto text-foreground">
          <ArticleContent slug={slug} />
        </article>

        <div className="max-w-3xl mx-auto mt-10 flex items-center justify-between">
          {prev ? (
            <Button asChild variant="outline">
              <Link href={`/blogs/${prev.slug}`} className="inline-flex items-center"><ArrowLeft className="mr-2 h-4 w-4" /> {prev.title}</Link>
            </Button>
          ) : <div />}
          {next ? (
            <Button asChild>
              <Link href={`/blogs/${next.slug}`} className="inline-flex items-center">{next.title} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}