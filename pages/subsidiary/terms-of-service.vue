<template>
  <div class="min-h-screen">
    <!-- Page header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Terms of Service</h1>
          <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">Please read these terms carefully before using our service.</p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg prose-southpark-stan mx-auto">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on South Park Character Creator's website for personal, non-commercial transitory viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on South Park Character Creator's website are provided on an 'as is' basis. South Park Character Creator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall South Park Character Creator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on South Park Character Creator's website.</p>

          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on South Park Character Creator's website could include technical, typographical, or photographic errors. South Park Character Creator does not warrant that any of the materials on its website are accurate, complete or current.</p>

          <h2>6. Links</h2>
          <p>South Park Character Creator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by South Park Character Creator of the site.</p>

          <h2>7. Modifications</h2>
          <p>South Park Character Creator may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
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
  title: 'South Park Character Creator | Terms of Service & Usage Rules',
  meta: [
    { name: 'description', content: 'South Park Character Creator Terms: Learn about our character generation service, account usage, character generation rights, and commercial usage terms.' },
  ],
  link: [{ rel: 'canonical', href: `${baseUrl}/subsidiary/terms-of-service` }]
})
</script> 