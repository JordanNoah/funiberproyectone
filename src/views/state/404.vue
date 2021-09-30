<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-img src="../../assets/state/404.jpg" contain></v-img>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-subtitle class="d-flex justify-center flex-column align-center my-3">
                        <p class="text-h6 text-md-h5 font-weight-normal text-center" style="width:90%">
                            {{$t('404.Message')}}
                        </p>
                        <router-link :to="{name:'Main'}">
                          {{$t('404.RouteLink')}}
                        </router-link>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>