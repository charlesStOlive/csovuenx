<template>
  <v-card color="rgb(255, 255, 255, 0.8)">
    <v-card-title primary class="title pb-0">{{ $t('home.crm_title') }}</v-card-title>
    <v-card-text primary>{{ $t('home.crm_description') }}</v-card-text>
    <v-card-actions class="pt-0">
      <v-btn to="/rapport" small outline color="primary">Voir le dashboard</v-btn>
    </v-card-actions>
  </v-card>
</template>