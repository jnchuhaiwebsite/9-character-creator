<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="mb-6">
      <NuxtLink to="/" class="flex items-center text-gray-600 hover:text-gray-900">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </NuxtLink>
    </div>
    
    <h1 class="text-3xl font-bold mb-8">Privacy Policy</h1>
    
    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
        <p class="text-gray-700">Welcome to our South Park Character Creator service. This privacy policy explains how we collect, use, store, and protect your personal information. We value your privacy and are committed to transparently handling your data.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Information Collection</h2>
        <p class="text-gray-700">When using our services, we may collect the following types of information:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Account Information</strong>: When you register an account, we collect your email address and login credentials.</li>
          <li><strong>User Content</strong>: This includes character preferences and customization options you provide for generating South Park style characters.</li>
          <li><strong>Usage Data</strong>: How you interact with the service, when you access it, which features you use, and the characters you generate.</li>
          <li><strong>Device Information</strong>: Browser type, IP address, device type, operating system, and other technical identifiers.</li>
          <li><strong>Payment Information</strong>: If you purchase our paid services, we collect necessary payment information (we do not directly store your complete payment card information).</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Information Usage</h2>
        <p class="text-gray-700">We use the collected information to:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Provide, maintain, and improve our South Park Character Creator service</li>
          <li>Process your requests and generate characters that match your preferences</li>
          <li>Manage your account and provide customer support</li>
          <li>Send service-related notifications and updates</li>
          <li>Prevent fraudulent activities and enhance security</li>
          <li>Analyze service usage to improve user experience</li>
          <li>Fulfill legal obligations</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">AI Technology Usage</h2>
        <p class="text-gray-700">Our service uses artificial intelligence technology to create South Park style characters based on your preferences. Please note:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Your character preferences are submitted to our AI system for processing</li>
          <li>AI-generated characters may be used as anonymous data to improve our systems</li>
          <li>We do not associate your personal identity with data used for training purposes</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Information Sharing</h2>
        <p class="text-gray-700">We do not sell your personal information. We may share your information in the following circumstances:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>With third-party service providers who offer services such as technical support and payment processing</li>
          <li>When required by law, such as to comply with a subpoena or other legal process</li>
          <li>To protect our rights, property, or safety, as well as the rights, property, or safety of our users or the public</li>
          <li>If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Data Security</h2>
        <p class="text-gray-700">We implement reasonable security measures to protect your personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction. However, no method of internet transmission or electronic storage is 100% secure.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
        <p class="text-gray-700">Depending on the applicable laws in your region, you may have the following rights:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of or objection to certain processing</li>
          <li>Data portability</li>
          <li>Withdrawal of consent</li>
        </ul>
        <p class="text-gray-700 mt-4">To exercise these rights, please contact us using the contact information provided at the end of this policy.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p class="text-gray-700">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you discover that we may have collected information from a child under 13, please contact us immediately.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Policy Updates</h2>
        <p class="text-gray-700">We may update this Privacy Policy from time to time. We will post the updated policy on our website and notify you of any significant changes.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p class="text-gray-700">If you have any questions or concerns about our Privacy Policy, please contact us:</p>
        <p class="text-gray-700 mt-2">Email: support@southparkai.com</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'nuxt/app';

import { useSeo } from '~/composables/useSeo';




// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: false,
  name: 'privacy-policy'
})


// useHead({
//   link: [{ rel: 'canonical', href: 'https://www.southparkai.com/subsidiary/privacy-policy' }],
// })

useSeo({
  title: 'South Park Character Creator | Privacy Policy',
  description: 'South Park Character Creator Privacy Policy: Data Collection, Usage, Sharing, Security, and Your Rights',
})





// useSeoMeta({
//   title: 'South Park Character Creator | Privacy Policy',
//   description: 'South Park Character Creator Privacy Policy: Data Collection, Usage, Sharing, Security, and Your Rights',
// })
</script> 