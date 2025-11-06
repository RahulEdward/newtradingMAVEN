'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  HelpCircle,
  MessageSquare,
  FileText,
  Download,
  Search,
  Plus,
  Minus,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How do I install indicators on MetaTrader 4?',
    answer: 'To install indicators on MT4: 1) Download the indicator file, 2) Copy it to your MT4 indicators folder, 3) Restart MT4, 4) Find it in the Navigator panel under Indicators.',
    category: 'Installation'
  },
  {
    id: '2',
    question: 'What are the system requirements for Expert Advisors?',
    answer: 'Our EAs require: Windows 7+, MetaTrader 4 or 5, minimum 2GB RAM, stable internet connection for real-time data, and a VPS for 24/7 operation.',
    category: 'Technical'
  },
  {
    id: '3',
    question: 'Do you offer refunds for digital products?',
    answer: 'Due to the nature of digital products, we offer a 30-day satisfaction guarantee. If you\'re not completely satisfied, contact our support team within 30 days of purchase.',
    category: 'Purchasing'
  },
  {
    id: '4',
    question: 'How often do you update your products?',
    answer: 'We regularly update our products based on market conditions and user feedback. Major updates are released quarterly, with bug fixes and minor improvements more frequently.',
    category: 'Updates'
  },
  {
    id: '5',
    question: 'Can I use your products on multiple computers?',
    answer: 'Yes, you can install and use our products on multiple computers as long as they\'re for your personal use. Each license allows installation on up to 3 devices.',
    category: 'Licensing'
  },
  {
    id: '6',
    question: 'Do you provide backtesting results?',
    answer: 'Yes, we provide comprehensive backtesting results for all our Expert Advisors. These are available in the product documentation and demo accounts.',
    category: 'Backtesting'
  }
]

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  })

  const categories = ['All Categories', 'Installation', 'Technical', 'Purchasing', 'Updates', 'Licensing', 'Backtesting']

  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', contactForm)
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'medium'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Support Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help with your trading tools, find answers to common questions, and contact our support team.
          </p>
        </div>

        <Tabs defaultValue="faq" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="documentation" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documentation
            </TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Find answers to common questions about our products and services
                    </CardDescription>

                    {/* Search */}
                    <div className="relative mt-4">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search FAQ..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredFAQs.map((faq) => (
                        <Card key={faq.id} className="border-l-4 border-l-primary/20">
                          <CardContent className="pt-4">
                            <Button
                              variant="ghost"
                              className="w-full justify-between p-0 h-auto"
                              onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                            >
                              <span className="text-left font-medium">{faq.question}</span>
                              {openFAQ === faq.id ? (
                                <Minus className="h-4 w-4 flex-shrink-0" />
                              ) : (
                                <Plus className="h-4 w-4 flex-shrink-0" />
                              )}
                            </Button>

                            {openFAQ === faq.id && (
                              <div className="mt-4 pt-4 border-t">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                                <Badge variant="outline" className="mt-2">
                                  {faq.category}
                                </Badge>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}

                      {filteredFAQs.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No FAQ items found matching your search.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Can't find what you're looking for? Get in touch with our support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={contactForm.priority}
                        onChange={(e) => setContactForm({...contactForm, priority: e.target.value})}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Get help via email
                    </p>
                    <p className="font-medium">support@tradingmaven.com</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Response time: 24-48 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Speak with our experts
                    </p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available: Mon-Fri 9AM-6PM EST
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">General Questions</span>
                        <Badge variant="secondary">24-48 hours</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Technical Issues</span>
                        <Badge variant="secondary">12-24 hours</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Urgent Problems</span>
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          2-4 hours
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Before Contacting Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Check our FAQ section for quick answers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Review the product documentation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Include your order number if applicable</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Provide detailed information about your issue</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="documentation" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Installation Guide',
                  description: 'Step-by-step guide to install indicators and EAs',
                  icon: Download,
                  type: 'Guide'
                },
                {
                  title: 'User Manual',
                  description: 'Complete documentation for all features',
                  icon: FileText,
                  type: 'Manual'
                },
                {
                  title: 'Video Tutorials',
                  description: 'Visual guides for setup and configuration',
                  icon: '▶️',
                  type: 'Video'
                },
                {
                  title: 'Troubleshooting',
                  description: 'Common issues and their solutions',
                  icon: AlertCircle,
                  type: 'Guide'
                },
                {
                  title: 'Best Practices',
                  description: 'Tips for optimal performance',
                  icon: CheckCircle,
                  type: 'Guide'
                },
                {
                  title: 'API Reference',
                  description: 'Technical documentation for developers',
                  icon: Info,
                  type: 'Technical'
                }
              ].map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{doc.type}</Badge>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {typeof doc.icon === 'string' ? (
                        <span className="text-2xl">{doc.icon}</span>
                      ) : (
                        <doc.icon className="h-6 w-6 text-primary" />
                      )}
                      {doc.title}
                    </CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
