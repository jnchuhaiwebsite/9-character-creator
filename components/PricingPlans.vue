<template>
  <section
    id="pricing"
    class="py-16"
    aria-labelledby="pricing-heading"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-gray-600 text-center text-lg mb-2 font-medium">
        Choose Your Plan
      </div>
      <h2
        class="text-southpark-stan text-center text-4xl font-bold mb-4 font-medium"
      >
        Simple, Transparent Pricing
      </h2>
      <p class="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        Select the plan that best fits your needs, upgrade or downgrade anytime
      </p>

      <!-- 加载状态 -->
      <div v-if="isPlansLoading" class="flex justify-center items-center py-20">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-southpark-stan"
          aria-label="Loading pricing plans"
        ></div>
      </div>

      <!-- 定价卡片 -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <!-- 循环渲染套餐卡片 -->
        <article
          v-for="(plan, index) in pricingPlans"
          :key="index"
          :class="[
            'bg-white rounded-xl p-8 flex flex-col',
            plan.is_popular
              ? 'border-2 border-southpark-stan shadow-lg relative'
              : 'border border-southpark-snow/20 shadow-sm hover:shadow-md transition-shadow',
            plan.price === 0 ? 'hidden md:flex' : 'flex'
          ]"
        >
          <div
            v-if="plan.is_popular"
            class="absolute -top-3 right-6 px-3 py-1 bg-southpark-stanButton text-white text-sm rounded-full"
          >
            Most Popular
          </div>
          <h3 class="text-2xl font-bold text-southpark-stan mb-2 font-medium">
            {{ plan.name }}
          </h3>
          <p class="text-gray-600 mb-6">{{ plan.description }}</p>
          <div class="text-3xl font-bold text-southpark-stan mb-6">
            ${{ plan.price }}
            <span class="text-gray-500 text-base font-normal">/month</span>
          </div>
          <ul class="space-y-3 mb-8" :aria-label="`${plan.name} plan features`">
            <li
              v-for="(feature, fIndex) in getPlanFeatures(plan)"
              :key="fIndex"
              class="flex items-center text-gray-600"
            >
              <span class="mr-2 text-southpark-stan" aria-hidden="true">✓</span>
              {{ feature }}
            </li>
          </ul>
          <div class="mt-auto">
            <button
              @click="plan.code ? handleUpgradePlan(plan) : null"
              :disabled="!plan.code || upgradingPlanId === plan.code"
              :class="[
                'w-full py-3 px-4 rounded-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg',
                getButtonClass(plan),
                !plan.code ? 'opacity-50 cursor-not-allowed' : ''
              ]"
            >
              <div v-if="upgradingPlanId === plan.code" class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              {{ plan.button_text }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import { getSubPlans, payOrder } from "~/api/index";
import { useClerkAuth } from '~/utils/auth';

export default defineComponent({
  name: 'PricingPlans',
  setup() {
    // 引入auth认证
    const {
      isSignedIn
    } = useClerkAuth();

    // 用户状态
    const isPlansLoading = ref(true);
    const upgradingPlanId = ref<string | null>(null);
    
    // 定义套餐数据
    const pricingPlans = ref<any[]>([]);
    
    // 获取套餐特性列表
    const getPlanFeatures = (plan: any): string[] => {
      if (!plan.features) return [];
      // 如果特性是字符串，按逗号分割
      if (typeof plan.features === 'string') {
        return plan.features.split(',').map((feature: string) => feature.trim());
      }
      // 如果已经是数组，直接返回
      return Array.isArray(plan.features) ? plan.features : [];
    };
    
    // 获取按钮样式
    const getButtonClass = (plan: any): string => {
      if (plan.price === 0) {
        return "bg-southpark-snow/10 text-southpark-stan hover:bg-southpark-snow/20";
      } else if (plan.is_popular === 1) {
        return "bg-southpark-stanButton text-white hover:opacity-90";
      } else {
        return "bg-southpark-stanButton/70 text-southpark-stan hover:bg-southpark-stanButton text-white ";
      }
    };
    
    // 获取套餐数据
    const getSubPlan = async () => {
      isPlansLoading.value = true;
      try {
        const res = (await getSubPlans()) as any;
    
        if (res.code === 200 && res.data) {
          // 直接使用API返回的套餐数据
          pricingPlans.value = res.data;
        } else {
          console.error(res.msg);
        }
      } catch (error) {
        console.error("Failed to get plan information:", error);
      } finally {
        isPlansLoading.value = false;
      }
    };
    
    // 处理升级计划
    const handleUpgradePlan = async (plan: any) => {
      // 如果没有登录，则提示登录并触发登录
      if (!isSignedIn.value) {
        try {
          const loginBtn = document.querySelector('#bindLogin') as HTMLElement;
          if (loginBtn) {
            loginBtn.click();
          }
        } catch (error) {
          console.error("Failed to find login:", error);
        }
        return;
      }

      upgradingPlanId.value = plan.code;
      try {
        const response = (await payOrder({ price_id: plan.code })) as any;
        if (response.code === 200 && response.data?.url) {
          window.location.href = response.data.url;
        } else {
          throw new Error(response.msg || "Failed to create payment order");
        }
      } catch (error) {
        console.error("Payment failed:", error);
      } finally {
        upgradingPlanId.value = null;
      }
    };
    
    // 页面挂载时的操作
    onMounted(() => {
      getSubPlan();
    });

    return {
      isPlansLoading,
      upgradingPlanId,
      pricingPlans,
      handleUpgradePlan,
      getPlanFeatures,
      getButtonClass
    }
  }
})
</script>

<style scoped>
.hover-theme:hover {
  background-color: var(--theme-primary-hover) !important;
}
</style> 