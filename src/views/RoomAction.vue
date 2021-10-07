<template>
  <v-container>
    <v-card v-if="skeletonPetition" loading>
      <RoomActionSkeleton />
    </v-card>
    <v-card v-else elevation="0" class="formStyle">
      <v-container>
        <v-row v-if="id != null">
          <v-col class="d-flex flex-column align-center align-md-end">
            <v-alert max-width="220" type="success" dense v-if="auditorium.params.confirmation == 1">
              {{$t('Room.RoomAction.RoomStatus.Positive')}} </v-alert>
            <v-alert max-width="220" type="warning" dense v-else> {{$t('Room.RoomAction.RoomStatus.Negative')}}
            </v-alert>
          </v-col>
        </v-row>
        <v-card class="formStyle mb-5">
          <v-card-title>{{$t('Room.RoomAction.DefenseData.Label')}}</v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="formDataDef" v-model="validDataDef" lazy-validation>
                <v-row class="d-flex justify-space-around">
                  <v-col cols="12" md="5" lg="5">
                    <v-dialog ref="dialog" v-model="modal" persistent width="290px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field hide-details="auto" v-model="auditorium.params.scheduled_date"
                          :label="$t('Room.RoomAction.DefenseData.Date')" prepend-inner-icon="fas fa-calendar-day"
                          readonly v-bind="attrs" v-on="on" outlined clearable :rules="rules.date" required dense>
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="auditorium.params.scheduled_date" scrollable>
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
                    <v-dialog ref="dialog3" v-model="modal3" :return-value.sync="auditorium.params.scheduled_time"
                      persistent width="290px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field hide-details="auto" v-model="auditorium.params.scheduled_time" dense
                          :label="$t('Room.RoomAction.DefenseData.Time')" prepend-inner-icon="far fa-clock" readonly
                          v-bind="attrs" v-on="on" outlined clearable :rules="rules.time" required></v-text-field>
                      </template>
                      <v-time-picker v-if="modal3" v-model="auditorium.params.scheduled_time" full-width format="24hr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal3 = false">
                          Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialog3.save(auditorium.params.scheduled_time)">
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-dialog ref="dialog" v-model="modal2" :return-value.sync="auditorium.params.duration_time"
                      persistent width="290px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field hide-details="auto" v-model="auditorium.params.duration_time" dense
                          :label="$t('Room.RoomAction.DefenseData.ExpositionTime')"
                          prepend-inner-icon="fas fa-stopwatch" readonly v-bind="attrs" v-on="on" outlined clearable>
                        </v-text-field>
                      </template>
                      <v-time-picker v-if="modal2" v-model="auditorium.params.duration_time" full-width format="24hr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal2 = false">
                          Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(auditorium.params.duration_time)">
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" outlined
                      :label="$t('Room.RoomAction.DefenseData.NumberParticipants')" dense
                      v-model="auditorium.params.capacity"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
        <v-card elevation="5" class="mb-5 formStyle">
          <v-card-title>
            {{$t('Room.RoomAction.StudentData.Label')}}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="formStudent" v-model="validStudent" lazy-validation>
                <v-row justify="space-around">
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
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field hide-details="auto" outlined :label="$t('Room.RoomAction.InscriptionId')" dense
                      v-model="auditorium.sustainer.inscription_reference_id" required :rules="rules.idInscription"
                      clearable></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5" lg="5"></v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>

        <v-card elevation="5" class="formStyle">
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
              <v-card v-if="auditorium.delegations.length===0" outlined>
                <v-card-text>Sin participantes</v-card-text>
              </v-card>
              <v-card elevation="0" outlined v-for="(delegate, index) in auditorium.delegations" :key="index" v-else
                class="mb-5 formStyle">
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
                        <v-select v-model="delegate.role" :items="RolSelect" item-text="text" item-value="abbr"
                          hide-details="auto" :rules="rules.rol" outlined dense
                          :label="$t('Room.RoomAction.Participants.Rol.Label')" required></v-select>
                      </v-col>
                    </v-row>
                    <v-row v-if="delegate.role">
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
        <v-btn outlined color="error" small class="mr-2" v-if="id==null" @click="cleanAll()">
          {{$t('Room.RoomAction.ActionButtons.CleanData')}}</v-btn>
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
          <v-btn class="d-none d-md-block" small rounded @click.stop="sendingData()" color="success" dark elevation="0">
            {{$t('Room.RoomAction.Dialog.SendData')}}
            <v-icon x-small class="ml-2">
              fas fa-file-import
            </v-icon>
          </v-btn>
          <v-btn class="d-md-none d-sm-block" elevation="0" rounded color="success" @click.stop="sendingData()" small>
            <v-icon small>
              fas fa-file-import
            </v-icon>
          </v-btn>
        </v-toolbar>
        <DialogRoomAction :idItem="id" :oldAuditorium="oldAuditorium" :auditorium="auditorium" style="heigth:100px;" />
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogWatingData" overlay-opacity="0.95" width="300">
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
import DialogRoomAction from '../components/DialogRoomAction.vue'
export default {
  data: () => ({
    date: null,
    modal: false,
    time: null,
    modal2: false,
    modal3: false,
    auditorium: {
      params: {
        capacity: null,
        confirmation: null,
        duration_time: null,
        id: null,
        scheduled_date: null,
        scheduled_time: null,
        url: null,
        uuid: null,
      },
      delegations: [{
        uniqId: null,
        fullname: null,
        email: null,
        id: null,
        role: null
      }],
      sustainer: {
        code_reference: null,
        email: null,
        fullname: null,
        program_abbreviation: null,
        inscription_reference_id: null
      }
    },
    oldAuditorium: {},
    RolSelect: [],
    validParticipant: true,
    validInscripcion: true,
    validDataDef: true,
    validStudent: true,
    id: null,
    dialogSendData: false,
    dialogWatingData: false,
    rules: {},
    skeletonPetition: false
  }),
  components: {
    DialogRoomAction,
    RoomActionSkeleton: () => import("../components/RoomActionSkeleton.vue")
  },
  created: function () {
    this.id = this.$route.params.id != undefined ? this.$route.params.id : null
    if (this.id != null) {
      this.skeletonPetition = true
      this.$axios.get(`/rooms/${this.id}`).then((res) => {
        if (res.status == 200) {
          this.createArrayAuditorium(res.data)
        }
      }).catch((e) => console.log(e)).finally(() => {
        this.skeletonPetition = false
      })
    }
    this.updateParticipantSelect()
    this.updateRules()
  },
  computed: {
    checkerLanguaje() {
      return this.$i18n.locale
    }
  },
  watch: {
    checkerLanguaje() {
      for (let index = 0; index < this.auditorium.delegations.length; index++) {
        this.$refs.participantForm[index].resetValidation()
      }
      this.$refs.formDataDef.resetValidation()
      this.$refs.formStudent.resetValidation()
      this.updateParticipantSelect()
      this.updateRules()
    },
  },
  methods: {
    createArrayAuditorium(arrayPure) {
      // here we took the array and asign all to our form
      // we do this cuz we need to add a uniq id to oir delegates so 
      // the comparations at send works perfect
      var delegates = []
      arrayPure.delegations.forEach(element => {
        const newParticipantOgj = {
          uniqId: Math.floor(Math.random() * 100) + Date.now(),
          fullname: element.fullname,
          email: element.email,
          role: element.role,
          id: element.id
        };
        delegates.push(newParticipantOgj)
      });
      var minToHour = Math.floor(arrayPure.params.duration_time / 60) + ":" + (arrayPure.params.duration_time % 60)
      arrayPure.params.duration_time = minToHour
      console.log(arrayPure)
      var arrayWorked = {
        params: arrayPure.params,
        delegations: delegates,
        sustainer: arrayPure.sustainer
      };
      this.auditorium = JSON.parse(JSON.stringify(arrayWorked))
      this.oldAuditorium = JSON.parse(JSON.stringify(arrayWorked))
    },
    updateRules() {
      this.rules = {
        name: [v => !!v || this.$t('Room.RoomAction.Errors.Name')],
        idInscription: [v => !!v || this.$t('Room.RoomAction.Errors.IdInscription')],
        date: [v => !!v || this.$t('Room.RoomAction.Errors.Date')],
        time: [v => !!v || this.$t('Room.RoomAction.Errors.Time')],
        email: [
          v => !!v || this.$t('Room.RoomAction.Errors.Email.Required'),
          v => /.+@.+\..+/.test(v) || this.$t('Room.RoomAction.Errors.Email.Format')
        ],
        id: [v => !!v || this.$t('Room.RoomAction.Errors.Id')],
        code: [v => !!v || this.$t('Room.RoomAction.Errors.Code')],
        rol: [v => !!v || this.$t('Room.RoomAction.Errors.Rol')]
      }
    },
    updateParticipantSelect() {
      this.RolSelect = [{
          text: this.$t('Room.RoomAction.Participants.Rol.ItemOne'),
          abbr: 'MOD'
        },
        {
          text: this.$t('Room.RoomAction.Participants.Rol.ItemTwo'),
          abbr: 'VIS'
        },
        {
          text: this.$t('Room.RoomAction.Participants.Rol.ItemThree'),
          abbr: 'DEL'
        }
      ]
    },
    getParticipantRol(value) {
      if (value.role == 'MOD') {
        return this.$t('Room.RoomAction.RolSelect.FirstItem')
      } else if (value.role == 'VIS') {
        return this.$t('Room.RoomAction.RolSelect.SecondItem')
      } else if (value.role == 'DEL') {
        return this.$t('Room.RoomAction.RolSelect.ThirdItem')
      }
    },
    addParticipant() {
      var emptyElement = false;
      for (let index = 0; index < this.auditorium.delegations.length; index++) {
        if (!this.$refs.participantForm[index].validate()) {
          emptyElement = true;
        }
      }
      if (!emptyElement) {
        const newParticipantOgj = {
          uniqId: Math.floor(Math.random() * 100) + Date.now(),
          fullname: '',
          email: '',
          role: ''
        };
        this.auditorium.delegations.unshift(newParticipantOgj)
      }
    },
    removeParticipant(index) {
      if (this.auditorium.delegations.length < 2) {
        this.auditorium.delegations = [{}]
      } else {
        this.auditorium.delegations.splice(index, 1)
      }
    },
    checkingData() {
      var emptyElement = false;
      for (let index = 0; index < this.auditorium.delegations.length; index++) {
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
    sendingData() {
      this.dialogSendData = false
      this.dialogWatingData = true
      var uuid = this.auditorium.params.uuid
      var sendData = JSON.parse(JSON.stringify(this.auditorium))
      sendData.params.duration_time = (parseInt(sendData.params.duration_time.split(":")[0] * 60) + parseInt(sendData.params.duration_time.split(":")[1])).toString()
      sendData.sustainer.code_reference = parseInt(sendData.sustainer.code_reference)
      sendData.sustainer.inscription_reference_id = parseInt(sendData.sustainer.inscription_reference_id)
      if (uuid != null) {
        this.$axios.put(`/rooms/update/${uuid}`, sendData).then((res) => {
          if (res.status == 200 && res.data == 'updated') {
            this.dialogWatingData = false
            this.$router.push({
              name: 'Manager'
            })
          } else {
            this.dialogSendData = true
          }
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          this.dialogWatingData = false
        })
      } else {
        sendData.params.confirmation = false
        console.log(sendData)
        this.$axios.post(`/rooms`, sendData).then((res) => {
          if(res.status == 201){
            this.dialogWatingData = false
            this.$router.push({
              name: 'Manager'
            })
          }
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          console.log("finally created")
        })
      }
    },
    cleanAll() {
      this.auditorium.delegations = [{}]
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