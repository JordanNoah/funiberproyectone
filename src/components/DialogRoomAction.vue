<template>
    <v-container fluid class="my-auto">
        <v-row no-gutters>
            <v-col cols="12" md="3">
                <v-card outlined elevation="10" class="mb-2 mx-0 mx-md-1 formStyle">
                    <div>
                        <v-card-title>
                            <strong>
                                {{$t('Room.Manager.Table.ExpandedLabels.StudentData.Label')}}
                            </strong>
                        </v-card-title>
                        <v-card-text class="px-6">
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.StudentName')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()">
                                        {{auditorium.sustainer.fullname}}
                                    </span>
                                    <span v-else>
                                        <span v-if="existChange('StudentName')">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.sustainer.fullname}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.sustainer.fullname}}</span> /
                                                    <span
                                                        class="red--text">{{oldAuditorium.sustainer.fullname}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.sustainer.fullname}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Email')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()">
                                        {{auditorium.sustainer.email}}
                                    </span>
                                    <span v-else>
                                        <span v-if="existChange('StudentEmail')">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.sustainer.email}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.sustainer.email}}</span> /
                                                    <span class="red--text">{{oldAuditorium.sustainer.email}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.sustainer.email}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Id')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()">
                                        {{auditorium.sustainer.code_reference}}
                                    </span>
                                    <span v-else>
                                        <span v-if="existChange('StudentCodeReference')">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.sustainer.code_reference}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.sustainer.code_reference}}</span> /
                                                    <span class="red--text">{{oldAuditorium.sustainer.code_reference}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.sustainer.code_reference}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.InscriptionId')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()">
                                        {{auditorium.multipurpose_room_configuration.creator_users_id}}
                                    </span>
                                    <span v-else>
                                        <span v-if="existChange('StudentInscriptionId')">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.multipurpose_room_configuration.creator_users_id}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.multipurpose_room_configuration.creator_users_id}}</span> /
                                                    <span class="red--text">{{oldAuditorium.multipurpose_room_configuration.creator_users_id}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.multipurpose_room_configuration.creator_users_id}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.StudentData.Program')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()">
                                        {{auditorium.sustainer.program_abbreviation}}
                                    </span>
                                    <span v-else>
                                        <span v-if="existChange('StudentProgram_abbreviation')">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.sustainer.program_abbreviation}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.sustainer.program_abbreviation}}</span> /
                                                    <span class="red--text">{{oldAuditorium.sustainer.program_abbreviation}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.sustainer.program_abbreviation}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </v-card-text>
                    </div>
                    <div>
                        <v-card-title>
                            <strong>
                                {{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Label')}}
                            </strong>
                        </v-card-title>
                        <v-card-text class="px-6">
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Date')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()" class="green--text">
                                        {{auditorium.multipurpose_room_configuration.scheduled_date}}
                                    </span>
                                    <span v-else>
                                        <span v-if="auditorium.multipurpose_room_configuration.scheduled_date != oldAuditorium.multipurpose_room_configuration.scheduled_date">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.multipurpose_room_configuration.scheduled_date}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.multipurpose_room_configuration.scheduled_date}}</span> /
                                                    <span class="red--text">{{oldAuditorium.multipurpose_room_configuration.scheduled_date}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.multipurpose_room_configuration.scheduled_date}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.Time')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()" class="green--text">
                                        {{auditorium.multipurpose_room_configuration.scheduled_time}}
                                    </span>
                                    <span v-else>
                                        <span v-if="auditorium.multipurpose_room_configuration.scheduled_time != oldAuditorium.multipurpose_room_configuration.scheduled_time">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.multipurpose_room_configuration.scheduled_time}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.multipurpose_room_configuration.scheduled_time}}</span> /
                                                    <span class="red--text">{{oldAuditorium.multipurpose_room_configuration.scheduled_time}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.multipurpose_room_configuration.scheduled_time}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.ExpositionTime')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()" class="green--text">
                                        {{auditorium.multipurpose_room_configuration.duration_time}}
                                    </span>
                                    <span v-else>
                                        <span v-if="auditorium.multipurpose_room_configuration.duration_time != oldAuditorium.multipurpose_room_configuration.duration_time">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.multipurpose_room_configuration.duration_time}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.multipurpose_room_configuration.duration_time}}</span> /
                                                    <span class="red--text">{{oldAuditorium.multipurpose_room_configuration.duration_time}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.multipurpose_room_configuration.duration_time}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <strong
                                    class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.DefenseData.NumberParticipants')}}:
                                </strong>
                                <span class="text-caption">
                                    <span v-if="isNew()" class="green--text">
                                        {{auditorium.multipurpose_room_configuration.capacity}}
                                    </span>
                                    <span v-else>
                                        <span v-if="auditorium.multipurpose_room_configuration.capacity != oldAuditorium.multipurpose_room_configuration.capacity">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on,attrs}">
                                                    <span class="green--text" v-bind="attrs" v-on="on">
                                                        {{auditorium.multipurpose_room_configuration.capacity}}
                                                    </span>
                                                </template>
                                                <span><span class="green--text">{{auditorium.multipurpose_room_configuration.capacity}}</span> /
                                                    <span class="red--text">{{oldAuditorium.multipurpose_room_configuration.capacity}}</span></span>
                                            </v-tooltip>
                                        </span>
                                        <span v-else>
                                            <span>{{auditorium.multipurpose_room_configuration.capacity}}</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="9">
                <v-card outlined elevation="10" class="mb-2 mx-0 mx-md-1 formStyle">
                    <v-card-title>
                        <strong>
                            {{$t('Room.Manager.Table.ExpandedLabels.Participants.LabelPlural')}}
                        </strong>
                    </v-card-title>
                    <v-card-text class="d-flex flex-wrap">
                        <div outlined v-for="(delegate) in auditorium.delegates" :key="delegate.uniqId">
                            <div outlined v-for="(oldDelegate,index) in oldAuditorium.delegates" :key="index">
                                <v-card v-if="delegate.uniqId == oldDelegate.uniqId" outlined class="ma-2 formStyle">
                                    <v-container>
                                        <p class="mb-0"> <strong
                                                class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.Rol')}}:
                                            </strong>
                                            <span class="text-caption">
                                                <span
                                                    v-if="delegate.role_abbreviation != oldDelegate.role_abbreviation">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{on,attrs}">
                                                            <span class="green--text text-decoration-underline"
                                                                v-bind="attrs" v-on="on">
                                                                {{returnRol(delegate.role_abbreviation)}}
                                                            </span>
                                                        </template>
                                                        <span><span
                                                                class="green--text">{{returnRol(delegate.role_abbreviation)}}</span>
                                                            / <span
                                                                class="red--text">{{returnRol(oldDelegate.role_abbreviation)}}</span></span>
                                                    </v-tooltip>
                                                </span>
                                                <span v-else>
                                                    {{returnRol(delegate.role_abbreviation)}}
                                                </span>
                                            </span>
                                        </p>
                                        <p class="mb-0"> <strong
                                                class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.NameOf')}}
                                                {{returnRol(delegate.role_abbreviation)}}: </strong>
                                            <span class="text-caption">
                                                <span v-if="delegate.fullname != oldDelegate.fullname">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{on,attrs}">
                                                            <span class="green--text text-decoration-underline"
                                                                v-bind="attrs" v-on="on">
                                                                {{delegate.fullname}}
                                                            </span>
                                                        </template>
                                                        <span><span class="green--text">{{delegate.fullname}}</span> /
                                                            <span
                                                                class="red--text">{{oldDelegate.fullname}}</span></span>
                                                    </v-tooltip>
                                                </span>
                                                <span v-else>
                                                    {{delegate.fullname}}
                                                </span>
                                            </span></p>
                                        <p class="mb-0"> <strong
                                                class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.EmailOf')}}
                                                {{returnRol(delegate.role_abbreviation)}}: </strong>
                                            <span class="text-caption">
                                                <span v-if="delegate.email != oldDelegate.email">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{on,attrs}">
                                                            <span class="green--text text-decoration-underline"
                                                                v-bind="attrs" v-on="on">
                                                                {{delegate.email}}
                                                            </span>
                                                        </template>
                                                        <span><span class="green--text">{{delegate.email}}</span> /
                                                            <span class="red--text">{{oldDelegate.email}}</span></span>
                                                    </v-tooltip>
                                                </span>
                                                <span v-else>
                                                    {{delegate.email}}
                                                </span>
                                            </span></p>
                                    </v-container>
                                </v-card>
                            </div>
                            <v-card v-if="!checkNew(delegate)" outlined class="ma-2" color="success">
                                <v-container>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.Rol')}}:</strong>
                                        <span class="text-caption">{{returnRol(delegate.role_abbreviation)}}</span></p>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.NameOf')}}
                                            {{returnRol(delegate.role_abbreviation)}}:</strong>
                                        <span class="text-caption">{{delegate.fullname}}</span></p>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.EmailOf')}}
                                            {{returnRol(delegate.role_abbreviation)}}:</strong>
                                        <span class="text-caption">{{delegate.email}}</span></p>
                                </v-container>
                            </v-card>
                        </div>
                        <div v-for="(oldDelegate,index) in oldAuditorium.delegates" :key="index">
                            <v-card outlined v-if="!checkRemoved(oldDelegate)" class="ma-2" color="error">
                                <v-container>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.Rol')}}:</strong>
                                        <span class="text-caption">{{returnRol(oldDelegate.role_abbreviation)}}</span>
                                    </p>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.NameOf')}}
                                            {{returnRol(oldDelegate.role_abbreviation)}}:</strong>
                                        <span class="text-caption">{{oldDelegate.fullname}}</span></p>
                                    <p class="mb-0"> <strong
                                            class="text-subtitle-2">{{$t('Room.Manager.Table.ExpandedLabels.Participants.EmailOf')}}
                                            {{returnRol(oldDelegate.role_abbreviation)}}:</strong>
                                        <span class="text-caption">{{oldDelegate.email}}</span></p>
                                </v-container>
                                <!-- removido {{oldDelegate}} -->
                            </v-card>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:{
        auditorium:{
            type:Object,
            require:true
        },
        oldAuditorium:{
            type:Object,
            require:true
        },
        idItem:{
            type:Number,
            require:true
        }
    },
    methods:{
        isNew(){
            if(this.idItem == null){
                return true;
            }else{
                return false;
            }
        },
        existChange(value){
            if (value == 'StudentName') {
                if(this.auditorium.sustainer.fullname != this.oldAuditorium.sustainer.fullname){
                    return true;
                }else{
                    return false;
                }
            } else if(value == 'StudentEmail'){
                if(this.auditorium.sustainer.email != this.oldAuditorium.sustainer.email){return true;}else{return false;}
            }else if(value == 'StudentCodeReference'){
                if(this.auditorium.sustainer.code_reference != this.oldAuditorium.sustainer.code_reference){return true;}else{return false;}
            }else if(value == 'StudentInscriptionId'){
                if(this.auditorium.multipurpose_room_configuration.creator_users_id != this.oldAuditorium.multipurpose_room_configuration.creator_users_id){return true;}else{return false}
            }else if(value == 'StudentProgram_abbreviation'){
                if(this.auditorium.sustainer.program_abbreviation != this.oldAuditorium.sustainer.program_abbreviation){return true;}else{return false;}
            }
        },
        returnRol(value){
            if(value == 'mod'){
                return this.$t('Room.RoomAction.Participants.Rol.ItemOne')
            }else if(value == 'vis'){
                return this.$t('Room.RoomAction.Participants.Rol.ItemTwo')
            }else if(value == 'del'){
                return this.$t('Room.RoomAction.Participants.Rol.ItemThree')
            }
        },
        checkRemoved(value){
            // this.auditorium.find(x => x.uniqId === value.uniqId)
            return this.auditorium.delegates.find(x => x.uniqId == value.uniqId);
        },
        checkNew(value){
            if(Object.keys(this.oldAuditorium).length!=0){
                return this.oldAuditorium.delegates.find(x => x.uniqId == value.uniqId)
            }else{
                return false;
            }
        }
    }
}
</script>