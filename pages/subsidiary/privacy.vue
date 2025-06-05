<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div class="prose max-w-none">
          <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

          <h2>1. Information We Collect</h2>
          <p>When using our South Park AI Image Generator, we collect:</p>
          <ul>
            <li>Text prompts you enter for image generation</li>
            <li>Images you upload for reference</li>
            <li>Generated images and their metadata</li>
            <li>Usage statistics and preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Generate and improve AI images</li>
            <li>Enhance our service quality</li>
            <li>Analyze usage patterns</li>
            <li>Provide customer support</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <p>We implement appropriate security measures to protect your data:</p>
          <ul>
            <li>Secure data transmission using encryption</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
            <li>Secure storage systems</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers and partners</li>
            <li>Legal authorities when required</li>
            <li>Third-party analytics services</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of data collection</li>
            <li>Update your preferences</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Improve user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
            <li>Provide personalized content</li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at:</p>
          <ul>
            <li>Email: privacy@southparkgenerator.com</li>
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
  title: "Privacy Policy - South Park AI Image Generator",
  description: "Learn about how we collect, use, and protect your data when using our South Park AI Image Generator service.",
  ogTitle: "Privacy Policy - South Park AI Image Generator",
  ogDescription: "Learn about how we collect, use, and protect your data when using our South Park AI Image Generator service.",
  twitterTitle: "Privacy Policy - South Park AI Image Generator",
  twitterDescription: "Learn about how we collect, use, and protect your data when using our South Park AI Image Generator service."
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