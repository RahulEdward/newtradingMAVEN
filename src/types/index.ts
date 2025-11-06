export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'indicator' | 'expert-advisor'
  type: 'free' | 'paid'
  downloadUrl?: string
  demoUrl?: string
  images: string[]
  features: string[]
  rating: number
  reviewCount: number
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
  isActive: boolean
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: Date
  tags: string[]
  category: string
  featured: boolean
}

export interface AdminSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  maintenanceMode: boolean
}
