<template>
  <main>
    <RegistrationAccountSelection v-if="!accountType" @changeAccountType="accountType = $event" />
    <RegisterUserForm v-else-if="accountType === 'user'" />
    <RegisterCompanyForm v-else />
  </main>
</template>

<script setup lang="ts">
import RegistrationAccountSelection from "@/components/Registration/RegistrationAccountSelection.vue";
import RegisterUserForm from "@/components/Registration/RegisterUserForm.vue";
import RegisterCompanyForm from "@/components/Registration/RegisterCompanyForm.vue";
import { ref } from "vue";
var accountType = ref("");
</script>
