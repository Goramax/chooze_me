<template>
  <main>
    <Transition>
      <RegistrationAccountSelection
        v-if="!accountType"
        @changeAccountType="accountType = $event"
      />
      <RegisterUserForm v-else-if="accountType === 'user'" />
      <RegisterCompanyForm v-else />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import RegistrationAccountSelection from "@/components/Registration/RegistrationAccountSelection.vue";
import RegisterUserForm from "@/components/Registration/RegisterUserForm.vue";
import RegisterCompanyForm from "@/components/Registration/RegisterCompanyForm.vue";
import { ref } from "vue";
var accountType = ref("");
</script>

<style lang="scss" scoped>
.v-leave-to {
  transform: translateY(-100vh);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: all 0.6s;
}
.v-enter-from,
.v-enter-active {
  transition: all 0.6s;
}
.v-leave-active {
  transition: all 0.6s;
}
</style>
