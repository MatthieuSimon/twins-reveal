<template>
    <div>
        <h1>{{ t('congratulations_title') }}</h1>
        <img src="@/assets/versiti-2-nacelles.png" alt="The Price is Right image" class="responsive-img" />
    </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true
})

</script>