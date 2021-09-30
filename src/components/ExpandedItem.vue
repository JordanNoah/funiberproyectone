<template>
    <v-container fluid class="d-flex flex-wrap">
        <v-row no-gutters>
            <v-col cols="12" md="4">
                <v-card class="mb-2 mx-0 mx-md-1" color="background" elevation="5">
                    <v-container>
                        <p class="mb-1"> <strong>{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Label')}}</strong>
                        </p>
                        <div class="mx-3">
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.StudentName')}}:</strong>
                                <span class="text-caption">{{item.sustainer.fullname}}</span></p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Email')}}:</strong>
                                <span class="text-caption">{{item.sustainer.email}}</span></p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Id')}}:</strong>
                                <span class="text-caption">{{item.sustainer.code_reference}}</span></p>
                            <p class="mb-0"><strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.InscriptionId')}}</strong>
                                <span
                                    class="text-caption">{{item.multipurpose_room_configuration.creator_users_id}}</span>
                            </p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Program')}}:</strong>
                                <span class="text-caption">{{item.sustainer.program_abbreviation}}</span></p>
                        </div>
                    </v-container>
                    <v-container>
                        <p class="mb-1"> <strong>{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Label')}}</strong>
                        </p>
                        <div class="mx-3">
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Date')}}:</strong>
                                <span
                                    class="text-caption">{{item.multipurpose_room_configuration.scheduled_date}}</span>
                            </p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Time')}}:</strong>
                                <span
                                    class="text-caption">{{item.multipurpose_room_configuration.scheduled_time}}</span>
                            </p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.ExpositionTime')}}:</strong>
                                <span class="text-caption">{{item.multipurpose_room_configuration.duration_time}}</span>
                            </p>
                            <p class="mb-0"> <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.NumberParticipants')}}:</strong>
                                <span class="text-caption">{{item.multipurpose_room_configuration.capacity}}</span></p>
                        </div>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card class="mb-2 mx-0 mx-md-1" color="background" elevation="5">
                    <v-card-title>
                        {{$t('Room.Manager.Table.ExpandedLabels.Participants.LabelPlural')}}
                    </v-card-title>
                    <div class="d-flex flex-wrap pa-0">
                        <v-card v-for="(delegate,index) in item.delegates" :key="index" class="ma-2" elevation="5"
                            color="background">
                            <v-container>
                                <p class="mb-0"> <strong
                                        class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.Rol')}}:</strong>
                                    <span class="text-caption">{{getRol(delegate.role_abbreviation)}}</span></p>
                                <p class="mb-0"> <strong
                                        class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.NameOf')}}
                                        {{getRol(delegate.role_abbreviation)}}:</strong>
                                    <span class="text-caption">{{delegate.fullname}}</span></p>
                                <p class="mb-0"> <strong
                                        class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.EmailOf')}}
                                        {{getRol(delegate.role_abbreviation)}}:</strong>
                                    <span class="text-caption">{{delegate.email}}</span></p>
                            </v-container>
                        </v-card>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    methods:{
        getRol(value){
        if(value == 'mod'){
            return this.$t('Room.RoomAction.RolSelect.FirstItem')
        }else if(value == 'vis'){
            return this.$t('Room.RoomAction.RolSelect.SecondItem')
        }else if(value == 'del'){
            return this.$t('Room.RoomAction.RolSelect.ThirdItem')
        }
        }
    }
}
</script>