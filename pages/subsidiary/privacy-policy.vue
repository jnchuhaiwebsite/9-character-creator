<template>
  <div class="min-h-screen">
    <!-- Page header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Privacy Policy</h1>
          <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">Learn about how we collect, use, and protect your personal information.</p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg prose-southpark-stan mx-auto">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not share your personal information with companies, organizations, or individuals outside of our company except in the following cases:</p>
          <ul>
            <li>With your consent</li>
            <li>For legal reasons</li>
            <li>With our service providers</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You can also object to our processing of your personal information.</p>

          <h2>6. Cookies</h2>
          <p>We use cookies and similar technologies to provide and support our services. You can set your browser to refuse all or some browser cookies.</p>

          <h2>7. Changes to This Policy</h2>
          <p>We may change this privacy policy from time to time. We will post any privacy policy changes on this page.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead,useRequestURL } from 'nuxt/app'

const url = useRequestURL();
const baseUrl = url.origin;

// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'South Park Character Creator | Privacy Policy',
  meta: [
    { name: 'description', content: 'South Park Character Creator Privacy Policy: Learn how we protect your data while using our character generation service, including character preferences and data security.' },
  ],
  link: [{ rel: 'canonical', href: `${baseUrl}/subsidiary/privacy-policy` }]
})
</script> 