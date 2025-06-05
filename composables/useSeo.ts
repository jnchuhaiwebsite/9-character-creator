import { useHead, useRequestURL } from 'nuxt/app'

interface SeoOptions {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  other?: Array<Record<string, string>>
}

export function useSeo(options: SeoOptions) {
  const url = useRequestURL()
  const baseUrl = url.origin
  const fullUrl = `${baseUrl}${url.pathname}`
  
  // 确保标题不超过60个字符
  const title = options.title.length > 60 ? options.title.substring(0, 57) + '...' : options.title
  
  // 确保描述在140-160个字符之间
  let description = options.description
  if (description.length < 140) {
    const suffix = ' - Create unique South Park style characters with our AI-powered character generator.'
    // 确保拼接后的总长度不超过160
    const maxPrefixLength = 160 - suffix.length
    if (description.length > maxPrefixLength) {
      description = description.substring(0, maxPrefixLength - 3) + '...'
    }
    description = description + suffix
  } else if (description.length > 160) {
    description = description.substring(0, 157) + '...'
  }

  useHead({
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      // {
      //   name: 'keywords',
      //   content: 'South Park character creator, AI character generator, custom South Park character, character design, South Park style',
      // },
      // Open Graph
      {
        property: 'og:title',
        content: options.ogTitle || title,
      },
      {
        property: 'og:description',
        content: options.ogDescription || description,
      },
      { property: 'og:type', content: options.ogType || 'website' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:image', content: options.ogImage || `${baseUrl}/logo.png` },
      { property: 'og:site_name', content: 'South Park Character Creator' },
      ...(options.other || []),

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: options.twitterTitle || title,
      },
      {
        name: 'twitter:description',
        content: options.twitterDescription || description,
      },
      { name: 'twitter:image', content: options.twitterImage || `${baseUrl}/logo.png` },
    ],
    link: [{ rel: 'canonical', href: fullUrl }],
  })
} 