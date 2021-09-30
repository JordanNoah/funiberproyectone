<template>
  <v-container>
    <v-card elevation="0" class="formStyle">
      <v-container>
        <v-row no-gutters>
          <v-col class="d-flex flex-column align-center align-md-end" v-if="id != null">
              <v-alert max-width="220" type="success" dense
                v-if="auditorium.multipurpose_room_configuration.confirmation == 1">
                {{$t('Room.RoomAction.RoomStatus.Positive')}} </v-alert>
              <v-alert max-width="220" type="warning" dense v-else> {{$t('Room.RoomAction.RoomStatus.Negative')}}
              </v-alert>
          </v-col>
        </v-row>
        <v-card outlined  class="formStyle mb-5">
          <v-card-title>{{$t('Room.RoomAction.DefenseData.Label')}}</v-card-title>
          <v-container>
            <v-form ref="formDataDef" v-model="validDataDef" lazy-validation>
              <v-row class="d-flex justify-space-around">
                <v-col cols="12" md="5" lg="5">
                  <v-dialog ref="dialog" v-model="modal" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field hide-details="auto"
                        v-model="auditorium.multipurpose_room_configuration.scheduled_date"
                        :label="$t('Room.RoomAction.DefenseData.Date')" prepend-inner-icon="fas fa-calendar-day"
                        readonly v-bind="attrs" v-on="on" outlined clearable :rules="rules.date" required dense>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="auditorium.multipurpose_room_configuration.scheduled_date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn text color="primary" @click="modal = false">
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" md="5" lg="5">
                  <v-dialog ref="dialog3" v-model="modal3"
                    :return-value.sync="auditorium.multipurpose_room_configuration.scheduled_time" persistent
                    width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field hide-details="auto"
                        v-model="auditorium.multipurpose_room_configuration.scheduled_time" dense
                        :label="$t('Room.RoomAction.DefenseData.Time')" prepend-inner-icon="far fa-clock" readonly
                        v-bind="attrs" v-on="on" outlined clearable :rules="rules.time" required></v-text-field>
                    </template>
                    <v-time-picker v-if="modal3" v-model="auditorium.multipurpose_room_configuration.scheduled_time"
                      full-width format="ampm">
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal3 = false">
                        Cancel
                      </v-btn>
                      <v-btn text color="primary"
                        @click="$refs.dialog3.save(auditorium.multipurpose_room_configuration.scheduled_time)">
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" md="5" lg="5">
                  <v-dialog ref="dialog" v-model="modal2"
                    :return-value.sync="auditorium.multipurpose_room_configuration.duration_time" persistent
                    width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field hide-details="auto"
                        v-model="auditorium.multipurpose_room_configuration.duration_time" dense
                        :label="$t('Room.RoomAction.DefenseData.ExpositionTime')" prepend-inner-icon="fas fa-stopwatch"
                        readonly v-bind="attrs" v-on="on" outlined clearable>
                      </v-text-field>
                    </template>
                    <v-time-picker v-if="modal2" v-model="auditorium.multipurpose_room_configuration.duration_time"
                      full-width format="24hr">
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal2 = false">
                        Cancel
                      </v-btn>
                      <v-btn text color="primary"
                        @click="$refs.dialog.save(auditorium.multipurpose_room_configuration.duration_time)">
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" md="5" lg="5">
                  <v-text-field hide-details="auto" outlined
                    :label="$t('Room.RoomAction.DefenseData.NumberParticipants')" dense
                    v-model="auditorium.multipurpose_room_configuration.capacity"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
        <v-card elevation="5"  class="mb-5 formStyle">
          <v-card-title>
            {{$t('Room.RoomAction.StudentData.Label')}}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="formStudent" v-model="validStudent" lazy-validation>
                <v-row>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" v-model="auditorium.sustainer.code_reference" outlined
                      :label="$t('Room.RoomAction.StudentData.Id')" placeholder="ej. 519259" clearable required
                      :rules="rules.id" dense>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" v-model="auditorium.sustainer.program_abbreviation" outlined
                      :label="$t('Room.RoomAction.StudentData.Program')" placeholder="ej. MAMGA" clearable required
                      :rules="rules.code" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" v-model="auditorium.sustainer.email" outlined
                      :label="$t('Room.RoomAction.StudentData.Email')" placeholder="example@something.com" clearable
                      required :rules="rules.email" dense>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" v-model="auditorium.sustainer.fullname" outlined
                      :label="$t('Room.RoomAction.StudentData.StudentName')" placeholder="Jhon Doe" clearable required
                      :rules="rules.name" dense>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" outlined :label="$t('Room.RoomAction.InscriptionId')" dense
                      v-model="auditorium.multipurpose_room_configuration.creator_users_id" required
                    :rules="rules.idInscription" clearable></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
        <v-card  elevation="5" class="formStyle">
          <v-card-title>
            <div>
              {{$t('Room.RoomAction.Participants.Label')}}
            </div>
            <v-spacer></v-spacer>
            <v-btn class="d-none d-md-block" outlined color="success" @click="addParticipant()" small>
              {{$t('Room.RoomAction.Participants.AddButton')}}
              <v-icon x-small class="ml-2">
                fas fa-plus-circle
              </v-icon>
            </v-btn>
            <v-btn class="d-md-none d-sm-block" icon color="success" @click="addParticipant()" small>
              <v-icon class="ml-2">
                fas fa-plus-circle
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-card v-if="auditorium.delegates.length===0" outlined>
                <v-card-text>Sin participantes</v-card-text>
              </v-card>
              <v-card elevation="0" outlined v-for="(delegate, index) in auditorium.delegates" :key="index" v-else class="mb-5 formStyle">
                <v-container>
                  <div class="d-flex justify-end ma-2">
                    <v-btn icon x-small color="red" @click.stop="removeParticipant(index)">
                      <v-icon>
                        fas fa-times
                      </v-icon>
                    </v-btn>
                  </div>
                  <v-form ref="participantForm" v-model="validParticipant" lazy-validation>
                    <v-row>
                      <v-col cols="12" md="5" lg="6">
                        <v-select v-model="delegate.role_abbreviation" :items="RolSelect" item-text="text"
                          item-value="abbr" hide-details="auto" :rules="rules.rol" outlined dense
                          :label="$t('Room.RoomAction.Participants.Rol.Label')" required></v-select>
                      </v-col>
                    </v-row>
                    <v-row v-if="delegate.role_abbreviation">
                      <v-col cols="12" md="5" lg="6">
                        <v-text-field hide-details="auto" v-model="delegate.fullname" outlined
                          :label="$t('Room.RoomAction.Participants.NameOf')+' '+getParticipantRol(delegate)"
                          :rules="rules.name" required clearable dense></v-text-field>
                      </v-col>
                      <v-col cols="12" md="5" lg="6">
                        <v-text-field hide-details="auto" v-model="delegate.email" outlined
                          :label="$t('Room.RoomAction.Participants.EmailOf')+' '+getParticipantRol(delegate)"
                          :rules="rules.email" required clearable dense>
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="error" small class="mr-2" v-if="id==null" @click="cleanAll()">{{$t('Room.RoomAction.ActionButtons.CleanData')}}</v-btn>
        <v-btn outlined color="success" small @click="checkingData()">{{$t('Room.RoomAction.ActionButtons.CheckData')}}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialogSendData" fullscreen persistent>
      <v-card class="sendDataDialog">
        <v-toolbar color="primary" dense>
          <v-btn icon @click="dialogSendData = false" dark>
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <strong class="white--text">
              {{id == null ? $t('Room.RoomAction.DialogTitleSave') : $t('Room.RoomAction.DialogTitleEdit')}}
            </strong>
          </v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn small rounded @click.stop="sendingData()" color="success" dark elevation="0">
              {{$t('Room.RoomAction.Dialog.SendData')}}
            </v-btn>
        </v-toolbar>
        <DialogRoomAction :idItem="id" :oldAuditorium="oldAuditorium" :auditorium="auditorium" style="heigth:100px;" />
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogWatingData" overlay-opacity="0.95" persistent width="300">
      <v-card>
        <v-card-text>
          {{$t('Room.RoomAction.WaitText')}}
          <v-progress-linear indeterminate class="mt-2"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import data from '../assets/data.json';
import DialogRoomAction from '../components/DialogRoomAction.vue'
export default {
  data: () => ({
    date: null,
    modal: false,
    time: null,
    modal2: false,
    modal3: false,
    auditorium: {
      multipurpose_room_configuration: {
        confirmation: null,
        scheduled_date: null,
        scheduled_time: null,
        duration_time: null,
        capacity: null,
        creator_users_id: null
      },
      delegates: [{
        fullname: null,
        email: null,
        role_abbreviation: null
      }],
      sustainer: {
        fullname: null,
        email: null,
        code_reference: null,
        program_abbreviation: null,
        inscription_reference_id: null
      }
    },
    oldAuditorium:{},
    RolSelect: [],
    validParticipant: true,
    validInscripcion: true,
    validDataDef: true,
    validStudent: true,
    id: null,
    dialogSendData: false,
    dialogWatingData: false,
    rules:{}
  }),
  components:{
    DialogRoomAction
  },
  created: function () {
    this.id = this.$route.params.id != undefined ? parseInt(this.$route.params.id) : null
    if (this.id != null) {
      var delegates = [];

      data[this.id].delegates.forEach(element => {
        var objeCopy = {
          email:element.email,
          fullname:element.fullname,
          role_abbreviation:element.role_abbreviation,
          uniqId:Date.now()+Math.floor(Math.random() * 100)
        }
        delegates.push(objeCopy)
      });

      this.auditorium = {
        multipurpose_room_configuration: {
        confirmation: data[this.id].multipurpose_room_configuration.confirmation,
        scheduled_date: data[this.id].multipurpose_room_configuration.scheduled_date,
        scheduled_time: data[this.id].multipurpose_room_configuration.scheduled_time,
        duration_time: data[this.id].multipurpose_room_configuration.duration_time,
        capacity: data[this.id].multipurpose_room_configuration.capacity,
        creator_users_id: data[this.id].multipurpose_room_configuration.creator_users_id
      },
      delegates:JSON.parse(JSON.stringify(delegates)),
      sustainer: {
        fullname: data[this.id].sustainer.fullname,
        email: data[this.id].sustainer.email,
        code_reference: data[this.id].sustainer.code_reference,
        program_abbreviation: data[this.id].sustainer.program_abbreviation,
        inscription_reference_id: data[this.id].sustainer.inscription_reference_id
      }
      }
      this.oldAuditorium = {
        multipurpose_room_configuration: {
        confirmation: data[this.id].multipurpose_room_configuration.confirmation,
        scheduled_date: data[this.id].multipurpose_room_configuration.scheduled_date,
        scheduled_time: data[this.id].multipurpose_room_configuration.scheduled_time,
        duration_time: data[this.id].multipurpose_room_configuration.duration_time,
        capacity: data[this.id].multipurpose_room_configuration.capacity,
        creator_users_id: data[this.id].multipurpose_room_configuration.creator_users_id
      },
      delegates:JSON.parse(JSON.stringify(delegates)),
      sustainer: {
        fullname: data[this.id].sustainer.fullname,
        email: data[this.id].sustainer.email,
        code_reference: data[this.id].sustainer.code_reference,
        program_abbreviation: data[this.id].sustainer.program_abbreviation,
        inscription_reference_id: data[this.id].sustainer.inscription_reference_id
      }
      }
    }
    this.updateParticipantSelect()
    this.updateRules()
  },
  computed: {
    checkerLanguaje(){
      return this.$i18n.locale
    }
  },
  watch:{
    checkerLanguaje(){
      for (let index = 0; index < this.auditorium.delegates.length; index++) {
        this.$refs.participantForm[index].resetValidation()
      }
      this.$refs.formDataDef.resetValidation()
      this.$refs.formStudent.resetValidation()
      this.updateParticipantSelect()
      this.updateRules()
    },
  },
  methods: {
    updateRules(){
      this.rules = {
        name:[v => !!v || this.$t('Room.RoomAction.Errors.Name')],
        idInscription:[v => !!v || this.$t('Room.RoomAction.Errors.IdInscription')],
        date:[v => !!v || this.$t('Room.RoomAction.Errors.Date')],
        time:[v => !!v || this.$t('Room.RoomAction.Errors.Time')],
        email:[
          v => !!v || this.$t('Room.RoomAction.Errors.Email.Required'),
          v => /.+@.+\..+/.test(v) || this.$t('Room.RoomAction.Errors.Email.Format')
        ],
        id:[v => !!v || this.$t('Room.RoomAction.Errors.Id')],
        code:[v => !!v || this.$t('Room.RoomAction.Errors.Code')],
        rol:[v => !!v || this.$t('Room.RoomAction.Errors.Rol')]
      }
    },
    updateParticipantSelect(){
      this.RolSelect = [
        {text:this.$t('Room.RoomAction.Participants.Rol.ItemOne'),abbr:'mod'},
        {text:this.$t('Room.RoomAction.Participants.Rol.ItemTwo'),abbr:'vis'},
        {text:this.$t('Room.RoomAction.Participants.Rol.ItemThree'),abbr:'del'}
      ]
    },
    getParticipantRol(value){
      if(value.role_abbreviation == 'mod'){
        return this.$t('Room.RoomAction.RolSelect.FirstItem')
      }else if(value.role_abbreviation == 'vis'){
        return this.$t('Room.RoomAction.RolSelect.SecondItem')
      }else if(value.role_abbreviation == 'del'){
        return this.$t('Room.RoomAction.RolSelect.ThirdItem')
      }
    },
    addParticipant() {
      var emptyElement = false;
      for (let index = 0; index < this.auditorium.delegates.length; index++) {
        if (!this.$refs.participantForm[index].validate()) {
          emptyElement = true;
        }
      }
      if (!emptyElement) {
        const newParticipantOgj = {
          uniqId:Math.floor(Math.random() * 100)+Date.now(),
          fullname: '',
          email: '',
          role_abbreviation: ''
        };
        this.auditorium.delegates.unshift(newParticipantOgj)
      }
    },
    removeParticipant(index){
      if (this.auditorium.delegates.length<2) {
        this.auditorium.delegates = [{}]
      } else {
        this.auditorium.delegates.splice(index,1)
      }
    },
    checkingData() {
      var emptyElement = false;
      for (let index = 0; index < this.auditorium.delegates.length; index++) {
        if (!this.$refs.participantForm[index].validate()) {
          emptyElement = true;
        }
      }
      this.$refs.formDataDef.validate()
      this.$refs.formStudent.validate()
      if (this.$refs.formDataDef.validate() && this.$refs.formStudent.validate() && !emptyElement) {
        this.dialogSendData = true
      }
    },
    sendingData(){
      this.dialogSendData = false
      this.dialogWatingData = true
      setTimeout(() => {  this.dialogWatingData=false,this.$router.push({name:'Manager'}) }, 2000);
    },
    cleanAll(){
      this.auditorium.delegates = [{}]
      this.$refs.formDataDef.reset()
      this.$refs.formStudent.reset()
    }
  }
}
</script>

<style>
  /* .formStyle.theme--dark{
    background-color: #31313C;
  } */
  .formStyle.theme--dark{
    background-color: #31313C;
  }
  
  .sendDataDialog.theme--light{
    background-color: #F3F3F3;
  }
  .sendDataDialog.theme--dark{
    background-color: #13131A;
  }
</style>