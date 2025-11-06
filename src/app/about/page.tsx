import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Users,
  Target,
  Shield,
  Award,
  TrendingUp,
  Globe,
  Clock,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Products Sold', value: '50,000+', icon: TrendingUp },
    { label: 'Countries Served', value: '120+', icon: Globe },
    { label: 'Years Experience', value: '8+', icon: Clock }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'Every product undergoes rigorous testing and quality assurance before release.',
      icon: Award
    },
    {
      title: 'Innovation',
      description: 'Continuously developing cutting-edge trading tools and technologies.',
      icon: Target
    },
    {
      title: 'Security',
      description: 'Your data and transactions are protected with enterprise-grade security.',
      icon: Shield
    },
    {
      title: 'Support',
      description: '24/7 customer support to help you succeed in your trading journey.',
      icon: Users
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former hedge fund trader with 15+ years of experience in forex and crypto markets.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Head of Development',
      bio: 'Software engineer specializing in algorithmic trading systems and financial technology.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Research',
      bio: 'PhD in Financial Mathematics with expertise in quantitative analysis and risk management.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'David Thompson',
      role: 'Head of Support',
      bio: 'Trading education specialist helping thousands of traders improve their strategies.',
      image: '/api/placeholder/150/150'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4">About Trading Maven</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
              Empowering Traders Worldwide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trading Maven was founded with a simple mission: to democratize professional trading tools and make them accessible to traders of all levels. We believe that everyone deserves access to high-quality trading indicators and expert advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To provide traders with professional-grade tools that were previously only available to institutional investors and hedge funds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Bridging the Gap
                </h3>
                <p className="text-muted-foreground mb-6">
                  For too long, retail traders have been at a disadvantage compared to institutional traders who have access to sophisticated tools and algorithms. At Trading Maven, we're changing that by developing professional-grade indicators and expert advisors that level the playing field.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our products are designed by experienced traders and developers who understand the real challenges faced by retail traders. We focus on creating tools that are not only powerful but also user-friendly and reliable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MQL4 Compatible</Badge>
                  <Badge variant="secondary">MQL5 Compatible</Badge>
                  <Badge variant="secondary">24/7 Support</Badge>
                  <Badge variant="secondary">Regular Updates</Badge>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The experts behind Trading Maven's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Kumar',
                role: 'Professional Trader',
                content: 'Trading Maven\'s indicators have completely transformed my trading approach. The accuracy and reliability are unmatched.',
                rating: 5
              },
              {
                name: 'Maria Santos',
                role: 'Forex Trader',
                content: 'The expert advisors are incredible. They\'ve helped me maintain consistent profits even in volatile market conditions.',
                rating: 5
              },
              {
                name: 'John Mitchell',
                role: 'Crypto Trader',
                content: 'Outstanding customer support and regular updates. These tools have given me a significant edge in the markets.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your journey with professional trading tools today. Join thousands of successful traders who trust Trading Maven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse Products
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
