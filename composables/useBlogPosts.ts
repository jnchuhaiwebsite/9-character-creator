import { ref, computed } from 'vue'
import { createError } from 'nuxt/app'

// Define blog post data structure
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  description: string;
  date: string;
  category: string;
  skip?: boolean;
  cta?: string;
}

// Blog post data
const blogPostsData: BlogPost[] = [
  {
    id: 'baby-name-generator-ai-introduction',
    title: 'Discover the Power of Baby Name Generator AI: Find Your Perfect Name',
    content: `
      <h2 class="text-2xl font-bold mb-4">Revolutionizing Baby Name Selection with AI</h2>
      <p>Experience the future of baby name selection with our advanced Baby Name Generator AI. This innovative tool combines artificial intelligence with cultural insights to help you find the perfect name for your little one.</p>
      
      <p>Our Baby Name Generator AI understands the nuances of name meanings, cultural significance, and modern trends, making it easier than ever to discover names that resonate with your family's values and preferences.</p>
      
      <h2>Key Features of Our Baby Name Generator AI:</h2>
      <ul class="list-disc pl-5 mb-6">
        <li>Smart Suggestions - AI-powered name recommendations based on your preferences</li>
        <li>Cultural Insights - Deep understanding of name origins and meanings</li>
        <li>Trend Analysis - Stay updated with current naming trends</li>
        <li>Personalized Results - Get suggestions tailored to your specific criteria</li>
        <li>Meaning Explorer - Detailed information about each name's significance</li>
      </ul>
      
      <p>Whether you're looking for traditional names or modern alternatives, our Baby Name Generator AI helps you explore countless possibilities with confidence.</p>
    `,
    description: 'Learn how our Baby Name Generator AI can help you find the perfect name for your baby',
    date: '2025-05-29',
    category: 'Name Generation',
    skip: false,
    cta: "Start Generating",
  },
  {
    id: 'ai-name-trends-2025',
    title: 'Latest Trends in Baby Name Generator AI: Whats New in 2025',
    content: `
      <h2 class="text-2xl font-bold mb-4">2025 Baby Name Trends Powered by AI</h2>
      <p>Our Baby Name Generator AI has analyzed millions of name selections to bring you the latest trends in baby naming for 2025.</p>
      
      <h3 class="text-xl font-bold my-4">Emerging Trends</h3>
      <ul class="list-disc pl-5 mb-6">
        <li>Nature-Inspired Names - Growing popularity of names connected to natural elements</li>
        <li>Cultural Fusion - Increasing blend of names from different cultural backgrounds</li>
        <li>Modern Classics - Traditional names with contemporary twists</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">AI Insights</h3>
      <ul class="list-disc pl-5 mb-6">
        <li>Personalized recommendations based on family heritage</li>
        <li>Analysis of name popularity across different regions</li>
        <li>Prediction of future naming trends</li>
        <li>Cultural significance mapping</li>
      </ul>
      
      <p>Our Baby Name Generator AI continues to evolve, providing deeper insights and more accurate suggestions for modern parents.</p>
    `,
    description: 'Explore the latest trends in baby naming with our AI-powered insights',
    date: '2025-05-29',
    category: 'Name Trends',
    skip: false,
    cta: "Explore Trends",
  },
  {
    id: 'how-to-use-name-generator',
    title: 'Complete Guide: Using Baby Name Generator AI Effectively',
    content: `
      <h2 class="text-2xl font-bold mb-4">Mastering the Baby Name Generator AI</h2>
      <p>Learn how to get the most out of our Baby Name Generator AI with this comprehensive guide.</p>
      
      <h3 class="text-xl font-bold my-4">Step 1: Explore Name Categories</h3>
      <p>Our Baby Name Generator AI offers various categories to help you find the perfect name:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Name Generation - Discover AI-powered name suggestions</li>
        <li>Name Trends - Stay updated with current naming trends</li>
        <li>Tutorials - Learn how to use our tools effectively</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 2: Browse Articles</h3>
      <p>Each category contains informative articles that provide:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Detailed explanations of features</li>
        <li>Latest trends and insights</li>
        <li>Step-by-step guides</li>
        <li>Best practices for name selection</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 3: Get Started</h3>
      <p>Begin your journey by:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Reading our introduction to understand the AI capabilities</li>
        <li>Exploring current name trends</li>
        <li>Following our tutorials for best results</li>
      </ul>
      
      <p class="mt-6">With these steps, you can effectively use our Baby Name Generator AI to find the perfect name for your baby.</p>
    `,
    description: 'Learn how to effectively use our Baby Name Generator AI to find the perfect name',
    date: '2025-05-29',
    category: 'Tutorials',
    skip: false,
    cta: "Start Learning",
  },
  {
    id: 'master-baby-name-generator-ai',
    title: 'Master the Baby Name Generator AI: From Beginner to Expert',
    content: `
      <h2 class="text-2xl font-bold mb-4">Complete Guide to Using Baby Name Generator AI</h2>
      <p>This tutorial will guide you through using our Baby Name Generator AI to find the perfect name for your little one.</p>
      
      <h3 class="text-xl font-bold my-4">Step 1: Choose Basic Parameters</h3>
      <p>Before you begin, you'll need to set these basic parameters:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Gender Selection - Boy, Girl, or Unisex names</li>
        <li>Style Traits - Describe the characteristics you want in a name, such as "wise, sunny, classic"</li>
        <li>Origin Selection - Choose the cultural background for the names</li>
        <li>Length Preference - Select your preferred name length</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 2: Personalize Your Settings</h3>
      <p>To get more precise name recommendations, you can:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Set Style Traits - Describe the characteristics you want in a name, for example:
          <ul class="list-disc pl-5 mt-2">
            <li>Wise, sunny, classic, ocean-inspired</li>
            <li>Forest, stars, strong, gentle, poetic</li>
            <li>Modern, unique, earthy/nature feel, easy to say</li>
          </ul>
        </li>
        <li>Exclude Specific Names - Enter names you don't want to see, separated by commas</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 3: Review and Select Names</h3>
      <p>After generating names, you can:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>View Name Details - Each name comes with its meaning and style notes</li>
        <li>Copy Names - Click the copy button to quickly save names you like</li>
        <li>Adjust Parameters - If you're not satisfied with the results, adjust the parameters and generate again</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Usage Tips</h3>
      <ul class="list-disc pl-5 mb-6">
        <li>Try Different Style Combinations - Get more diverse name suggestions</li>
        <li>Use the Exclusion Feature - Avoid generating names you don't like</li>
        <li>Pay Attention to Meanings - Each name comes with detailed meaning explanations</li>
        <li>Reference Style Notes - Understand the overall style characteristics of each name</li>
      </ul>
      
      <p class="mt-6">By following these steps, you'll be able to make the most of our Baby Name Generator AI to find the perfect name for your baby.</p>
    `,
    description: 'Learn how to make the most of our Baby Name Generator AI to find the perfect name for your baby',
    date: '2025-05-30',
    category: 'Tutorials',
    skip: false,
    cta: "Get Started",
  }
]

export function useBlogPosts() {
  // Currently selected category
  const currentCategory = ref('all')

  // Get all blog posts
  const allPosts = computed(() => blogPostsData)

  // Filter posts by current category
  const filteredPosts = computed(() => {
    if (currentCategory.value === 'all') {
      return allPosts.value
    }
    return allPosts.value.filter(post => post.category === currentCategory.value)
  })

  // Get a single post by ID
  const getPostById = (id: string): BlogPost => {
    const post = blogPostsData.find(post => post.id === id)
    
    if (!post) {
      throw createError({
        statusCode: 404,
        message: 'Article not found'
      })
    }
    
    return post
  }

  // Get category label
  const getCategoryLabel = (category: string) => {
    return category
  }

  // Get all available categories
  const allCategories = computed(() => {
    const categories = new Set<string>()
    blogPostsData.forEach(post => {
      categories.add(post.category)
    })
    return Array.from(categories)
  })

  return {
    currentCategory,
    allPosts,
    filteredPosts,
    getPostById,
    getCategoryLabel,
    allCategories
  }
} 