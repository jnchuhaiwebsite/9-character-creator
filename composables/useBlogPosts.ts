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
    id: 'south-park-character-creator-introduction',
    title: 'Exploring South Park Character Creator: Create Your Own South Park Character',
    content: `
      <h2 class="text-2xl font-bold mb-4">Revolutionizing South Park Character Creation with AI Technology</h2>
      <p>Experience our advanced South Park Character Creator, an innovative tool that combines artificial intelligence with South Park's unique art style to help you create the perfect character.</p>
      
      <p>Our Character Creator deeply understands South Park's art style, character traits, and visual elements, allowing you to easily create characters that match the South Park aesthetic.</p>
      
      <h2>Key Features of Character Creator:</h2>
      <ul class="list-disc pl-5 mb-6">
        <li>Smart Generation - Generate South Park style characters based on your preferences</li>
        <li>Style Accuracy - Precisely capture South Park's unique art style</li>
        <li>Rich Options - Provide diverse customization options</li>
        <li>Personalized Customization - Generate characters according to your specific requirements</li>
        <li>Detail Refinement - Complete character detail adjustments</li>
      </ul>
      
      <p>Whether you want to create a main character or a supporting role, our Character Creator can help you realize your creative vision.</p>
    `,
    description: 'Learn how to use our South Park Character Creator to create unique characters',
    date: '06/06/2025',
    category: 'Character Creation',
    skip: false,
    cta: "Start Creating",
  },
  {
    id: 'character-trends-2025',
    title: 'South Park Character Creation Trends 2025: Innovation Through AI Technology',
    content: `
      <h2 class="text-2xl font-bold mb-4">South Park Character Creation Trends 2025</h2>
      <p>Our Character Creator has analyzed millions of character creations to bring you the latest South Park character creation trends for 2025.</p>
      
      <h3 class="text-xl font-bold my-4">Emerging Trends</h3>
      <ul class="list-disc pl-5 mb-6">
        <li>Retro Style - Revival of classic 90s South Park style</li>
        <li>Modern Elements - Character designs incorporating contemporary pop culture</li>
        <li>Diverse Features - Richer combinations of character traits</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">AI Insights</h3>
      <ul class="list-disc pl-5 mb-6">
        <li>Personalized recommendations based on user preferences</li>
        <li>Analysis of regional character style differences</li>
        <li>Future character design trend predictions</li>
        <li>Art style feature mapping</li>
      </ul>
      
      <p>Our Character Creator continues to evolve, providing creators with deeper insights and more accurate character generation suggestions.</p>
    `,
    description: 'Explore the latest South Park character creation trends and innovations brought by AI technology',
    date: '06/06/2025',
    category: 'Creation Trends',
    skip: false,
    cta: "Explore Trends",
  },
  {
    id: 'how-to-use-character-creator',
    title: 'Complete Guide: How to Effectively Use South Park Character Creator',
    content: `
      <h2 class="text-2xl font-bold mb-4">Mastering South Park Character Creator</h2>
      <p>Learn how to make the most of our Character Creator with this comprehensive guide.</p>
      
      <h3 class="text-xl font-bold my-4">Step 1: Choose Basic Features</h3>
      <p>Before you begin, you need to set the following basic features:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Gender Selection - Male, female, or neutral character</li>
        <li>Style Traits - Describe your desired character traits, such as "lively, serious, funny"</li>
        <li>Clothing Choice - Select the character's clothing style</li>
        <li>Body Type Settings - Choose the character's body type features</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 2: Personalization Settings</h3>
      <p>For more precise character recommendations, you can:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>Set Style Traits - Describe your desired character traits, for example:
          <ul class="list-disc pl-5 mt-2">
            <li>Lively, sunny, classic</li>
            <li>Serious, mysterious, unique</li>
            <li>Funny, exaggerated, expressive</li>
          </ul>
        </li>
        <li>Exclude Specific Traits - Input traits you don't want</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Step 3: Adjustment and Optimization</h3>
      <p>After generating the character, you can:</p>
      <ul class="list-disc pl-5 mb-6">
        <li>View Character Details - Each feature has detailed explanations</li>
        <li>Save Character - Click the save button to save your favorite character</li>
        <li>Adjust Parameters - If not satisfied with the result, adjust parameters to regenerate</li>
      </ul>
      
      <p class="mt-6">By following these steps, you'll be able to make the most of our Character Creator to create perfect South Park style characters.</p>
    `,
    description: 'Learn how to effectively use our Character Creator to create perfect characters',
    date: '06/06/2025',
    category: 'Tutorials',
    skip: false,
    cta: "Start Learning",
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