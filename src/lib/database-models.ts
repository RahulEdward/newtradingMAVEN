// Database models for Trading Maven SaaS Platform

export interface Product {
  id: string
  name: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  type: 'indicator' | 'expert-advisor'
  category: string
  subcategory?: string
  platform: 'mt4' | 'mt5' | 'both'
  version: string
  downloadUrl: string
  demoUrl?: string
  documentationUrl?: string
  images: string[]
  screenshots: string[]
  features: string[]
  requirements: string[]
  tags: string[]
  rating: number
  reviewCount: number
  downloadCount: number
  isFree: boolean
  isPopular: boolean
  isNew: boolean
  isFeatured: boolean
  status: 'active' | 'inactive' | 'draft'
  createdAt: Date
  updatedAt: Date
  createdBy: string // admin user id
  metadata: {
    fileSize: string
    lastUpdated: Date
    compatibility: string[]
    languages: string[]
  }
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
  status: 'active' | 'inactive' | 'suspended'
  emailVerified: boolean
  lastLoginAt?: Date
  createdAt: Date
  updatedAt: Date
  preferences: {
    theme: 'light' | 'dark' | 'system'
    language: string
    notifications: {
      email: boolean
      push: boolean
      marketing: boolean
    }
  }
  profile: {
    bio?: string
    location?: string
    website?: string
    socialLinks?: {
      twitter?: string
      linkedin?: string
      telegram?: string
    }
  }
}

export interface Order {
  id: string
  userId: string
  productId: string
  orderNumber: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded' | 'cancelled'
  paymentMethod: string
  paymentId?: string
  downloadUrl?: string
  expiresAt?: Date
  completedAt?: Date
  createdAt: Date
  updatedAt: Date
  metadata: {
    userAgent?: string
    ipAddress?: string
    discountCode?: string
    taxAmount?: number
  }
}

export interface Review {
  id: string
  userId: string
  productId: string
  orderId?: string
  rating: number
  title: string
  content: string
  pros?: string[]
  cons?: string[]
  isVerified: boolean
  isHelpful: number
  status: 'pending' | 'approved' | 'rejected'
  createdAt: Date
  updatedAt: Date
  moderatorId?: string
  moderationReason?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage?: string
  authorId: string
  category: string
  tags: string[]
  status: 'draft' | 'published' | 'archived'
  isFeatured: boolean
  publishedAt?: Date
  views: number
  readTime: number
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  createdAt: Date
  updatedAt: Date
}

export interface AdminSettings {
  id: string
  siteName: string
  siteDescription: string
  logoUrl?: string
  faviconUrl?: string
  primaryColor: string
  secondaryColor: string
  contactEmail: string
  supportEmail: string
  phoneNumber?: string
  address?: string
  socialLinks: {
    facebook?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    telegram?: string
  }
  seo: {
    defaultMetaTitle: string
    defaultMetaDescription: string
    googleAnalyticsId?: string
  }
  features: {
    maintenanceMode: boolean
    registrationEnabled: boolean
    blogEnabled: boolean
    reviewsEnabled: boolean
  }
  payment: {
    stripePublishableKey?: string
    paypalClientId?: string
    currency: string
    taxRate: number
  }
  email: {
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPassword?: string
    fromEmail: string
    fromName: string
  }
  updatedAt: Date
  updatedBy: string
}

export interface Download {
  id: string
  userId: string
  productId: string
  orderId?: string
  downloadToken: string
  ipAddress: string
  userAgent: string
  downloadedAt: Date
  expiresAt: Date
}

export interface ApiKey {
  id: string
  userId: string
  name: string
  key: string
  permissions: string[]
  lastUsed?: Date
  expiresAt?: Date
  isActive: boolean
  createdAt: Date
}

export interface Notification {
  id: string
  userId: string
  type: 'order' | 'review' | 'system' | 'marketing'
  title: string
  message: string
  data?: Record<string, any>
  isRead: boolean
  readAt?: Date
  createdAt: Date
}

// Database indexes for performance
export const indexes = {
  products: [
    { fields: ['category', 'type'] },
    { fields: ['tags'] },
    { fields: ['isFree', 'isPopular', 'isFeatured'] },
    { fields: ['rating', 'reviewCount'] },
    { fields: ['createdAt'] }
  ],
  orders: [
    { fields: ['userId', 'status'] },
    { fields: ['createdAt'] },
    { fields: ['paymentId'] }
  ],
  users: [
    { fields: ['email'] },
    { fields: ['role', 'status'] },
    { fields: ['createdAt'] }
  ],
  blogPosts: [
    { fields: ['slug'] },
    { fields: ['category', 'status'] },
    { fields: ['publishedAt'] },
    { fields: ['authorId'] }
  ]
}
