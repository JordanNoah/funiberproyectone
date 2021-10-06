<template>
    <div>
        <v-card elevation="0">
            <v-container>
                <v-row class="mb-2">
                    <v-col class="d-flex flex-column align-center align-md-end">
                        <v-skeleton-loader type="button" ></v-skeleton-loader>
                    </v-col>
                </v-row>
                <v-card class="mb-5">
                    <v-container>
                        <v-row justify="space-around">
                            <v-col cols="12">
                                <v-skeleton-loader type="heading"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-card elevation="5" class="mb-5">
                    <v-container>
                        <v-row justify="space-around">
                            <v-col cols="12">
                                <v-skeleton-loader type="heading"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="5"></v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-card>
                    <v-container>
                        <v-row class="d-flex justify-space-between">
                            <v-col cols="4">
                                <v-skeleton-loader type="heading"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="4" class="d-flex justify-end">
                                <v-skeleton-loader type="list-item-avatar"></v-skeleton-loader>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" class="">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" class="">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                            <v-col cols="6" class="">
                                <v-skeleton-loader type="text"></v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-skeleton-loader type="actions"></v-skeleton-loader>
            </v-card-actions>
        </v-card>
    </div>
</template>