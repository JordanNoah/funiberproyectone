<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-img src="../../assets/state/maintenance.jpg" contain></v-img>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-subtitle class="d-flex justify-center flex-column align-center">
                        <p class="text-h6 text-md-h5 font-weight-normal text-center" style="width:70%">
                            {{$t('Maintenance.Message')}}
                        </p>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>