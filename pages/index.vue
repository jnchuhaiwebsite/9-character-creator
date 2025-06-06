<template>
  <div class="mx-auto">
    <main class="max-w-24xl mx-auto min-h-screen">
      <!-- 首屏区块 -->
      <section
        id="hero"
        class="flex flex-col items-center justify-center min-h-[600px] relative bg-southpark-tree"
      >
        <ImageGenerator />
      </section>

      <!-- 展示模块 -->
      <section id="showcase" class="bg-southpark-mountain">
        <ShowcaseSection />
      </section>

      <!-- 关键特性模块 -->
      <section id="features" class="bg-southpark-tree">
        <FeaturesSection />
      </section>

      <!-- 用户评价模块 -->
      <section id="Reviews" class="bg-southpark-mountain">
        <TestimonialsSection />
      </section>
      
      <!-- 定价模块 -->
      <section id="pricing" class="bg-southpark-tree">
        <PricingPlans />
      </section>
      

      <!-- 常见问题模块 -->
      <section id="faq" class="bg-southpark-mountain">
        <FaqSection />
      </section>

    </main>
    <Toast
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      :type="toast.type"
      :duration="toast.duration"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount} from "vue";
import { useToast } from '~/composables/useToast';
import { useSeo } from '~/composables/useSeo';

import PricingPlans from "~/components/PricingPlans.vue";
import FaqSection from "~/pages/components/FaqSection.vue";
import FeaturesSection from "~/pages/components/FeaturesSection.vue";
import TestimonialsSection from "~/pages/components/TestimonialsSection.vue";
import ShowcaseSection from "~/pages/components/ShowcaseSection.vue";

const { toast, showToast } = useToast();

useSeo({
  title: "South Park Character Creator - Create Your Own South Park Style Character",
  description: "Create unique South Park style characters with our AI-powered South Park Character Creator. Transform your ideas into South Park style images using text prompts or upload your own images.",
  ogTitle: "South Park Character Creator - Create Your Own South Park Style Character",
  ogDescription: "Create unique South Park style characters with our AI-powered South Park Character Creator. Transform your ideas into South Park style images using text prompts or upload your own images.",
  twitterTitle: "South Park Character Creator - Create Your Own South Park Style Character",
  twitterDescription: "Create unique South Park style characters with our AI-powered South Park Character Creator. Transform your ideas into South Park style images using text prompts or upload your own images."
});

// 处理支付回调
onBeforeMount(() => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const paySuccess = urlParams.get("paysuccess");

  if (paySuccess == "1") {
    window.history.replaceState({}, "", window.location.pathname);
    setTimeout(() => {
      showToast("Thank you for your support! Your membership benefits are now activated.", "success");
    }, 500);
  } else if (urlParams.get("payfail") == "1") {
    window.history.replaceState({}, "", window.location.pathname);
  }
});

// 设置页面元数据
onBeforeMount(() => {
  // 结构化数据标记以提高SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "South Park Character Creator",
    description: "AI-powered South Park Character Creator that helps users create unique South Park style characters. Features include text-to-image generation and image-to-image transformation.",
    applicationCategory: "ImageGeneratorApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
  // 添加结构化数据到页面头部
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
});

// 添加滚动到上传区域的方法
const scrollToUpload = () => {
  const uploadSection = document.getElementById('upload-section');
  if (uploadSection) {
    uploadSection.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style scoped>
html {
  font-size: 18px;
}
</style>