<template>
  <v-card color="rgb(255, 255, 255, 0.8)">
    <v-layout d-flex row wrap>
      <v-flex>
        <v-img src="/img/creademo.jpg" width="100%"/>
      </v-flex>
      <v-flex xs8>
        <v-card-title>
          <span class="title">{{ $t('home.discover_demo') }} :</span>
          <!-- <span class="grey--text">{{ $t('home.choose_best') }} :</span> -->
          <v-layout row wrap align-center justify-center>
            <v-flex d-flex md6 xs12>
              <v-btn
                small
                outline
                color="primary"
                href="http://demobo.charles-saint-olive.com/horizontal/dashboard/saas"
              >{{ $t('home.dir_co') }}</v-btn>
            </v-flex>
            <v-flex d-flex md6 xs12>
              <v-btn
                small
                outline
                color="primary"
                pa-1
                href="http://demobo.charles-saint-olive.com/boxed/dashboard/agency"
              >{{ $t('home.agency') }}</v-btn>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>