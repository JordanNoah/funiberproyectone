<template>
    <div class="mt-3">
        <v-skeleton-loader type="table-heading" class="mb-3"></v-skeleton-loader>
        <v-skeleton-loader type="table-thead, table-tbody, table-tfoot" :types="{'table-tbody': 'table-row-divider@8'}"></v-skeleton-loader>
    </div>
</template>