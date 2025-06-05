<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div class="prose max-w-none">
          <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using our South Park AI Image Generator, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

          <h2>2. Service Description</h2>
          <p>Our service provides:</p>
          <ul>
            <li>AI-powered image generation in South Park style</li>
            <li>Text-to-image conversion</li>
            <li>Image-to-image transformation</li>
            <li>Preset prompt templates</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Provide accurate and appropriate prompts</li>
            <li>Respect intellectual property rights</li>
            <li>Not use the service for illegal purposes</li>
            <li>Not generate harmful or offensive content</li>
          </ul>

          <h2>4. Content Guidelines</h2>
          <p>You must not use our service to generate:</p>
          <ul>
            <li>Explicit or adult content</li>
            <li>Hate speech or discriminatory content</li>
            <li>Violent or harmful imagery</li>
            <li>Content infringing on others' rights</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>Regarding generated images:</p>
          <ul>
            <li>You retain rights to your original content</li>
            <li>We retain rights to the AI-generated images</li>
            <li>You may use generated images for personal purposes</li>
            <li>Commercial use requires additional licensing</li>
          </ul>

          <h2>6. Service Limitations</h2>
          <p>Our service is subject to:</p>
          <ul>
            <li>Usage quotas and restrictions</li>
            <li>Technical limitations</li>
            <li>Quality variations</li>
            <li>Service availability</li>
          </ul>

          <h2>7. Payment and Subscription</h2>
          <p>For paid services:</p>
          <ul>
            <li>Subscription terms and conditions</li>
            <li>Payment processing and security</li>
            <li>Refund policies</li>
            <li>Cancellation procedures</li>
          </ul>

          <h2>8. Termination</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Suspend or terminate accounts</li>
            <li>Block access to the service</li>
            <li>Remove content that violates terms</li>
            <li>Modify or discontinue features</li>
          </ul>

          <h2>9. Disclaimer of Warranties</h2>
          <p>The service is provided "as is" without warranties of any kind, either express or implied.</p>

          <h2>10. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>

          <h2>11. Changes to Terms</h2>
          <p>We may modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>

          <h2>12. Contact Information</h2>
          <p>For questions about these terms, please contact:</p>
          <ul>
            <li>Email: legal@southparkgenerator.com</li>
            <li>Support: support@southparkgenerator.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: "Terms of Service - South Park AI Image Generator",
  description: "Read our terms of service to understand the rules and guidelines for using our South Park AI Image Generator service.",
  ogTitle: "Terms of Service - South Park AI Image Generator",
  ogDescription: "Read our terms of service to understand the rules and guidelines for using our South Park AI Image Generator service.",
  twitterTitle: "Terms of Service - South Park AI Image Generator",
  twitterDescription: "Read our terms of service to understand the rules and guidelines for using our South Park AI Image Generator service."
});
</script>

<style>
.prose {
  @apply text-gray-700;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-800;
}

.prose p {
  @apply mb-4;
}

.prose ul {
  @apply list-disc pl-6 mb-4;
}

.prose li {
  @apply mb-2;
}
</style> 