<script setup lang="ts">
import SiteNav from "./components/SiteNav.vue";
import HeroStatement from "./components/HeroStatement.vue";
import CompanySection from "./components/CompanySection.vue";
import ProductsSection from "./components/ProductsSection.vue";
import CapabilitiesSection from "./components/CapabilitiesSection.vue";
import PastPerformance from "./components/PastPerformance.vue";
import SelectedWork from "./components/SelectedWork.vue";
import OffHours from "./components/OffHours.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { useReveal } from "./composables/useReveal";

useReveal();
</script>

<template>
  <SiteNav />
  <main id="main">
    <HeroStatement />
    <CompanySection />
    <ProductsSection />
    <CapabilitiesSection />
    <PastPerformance />
    <SelectedWork />
    <OffHours />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
