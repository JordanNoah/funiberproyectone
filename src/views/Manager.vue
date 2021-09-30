<template>
  <div>
    <v-container fluid>
      <!--  -->
      <v-card class="my-2 searchComponent" outlined>
        <v-container fluid>
          <v-row justify="space-between">
            <v-col cols="10" md="5">
              <v-text-field outlined v-model="search" dense :label="$t('Room.Manager.SearchBar.Label')" hide-details
                prepend-inner-icon="fab fa-searchengin" clearable></v-text-field>
            </v-col>
            <v-col cols="2" sm="2" md="6" class="d-flex justify-end">
              <v-btn class="d-none d-md-block" @click.stop="newRoom" elevation="2" color="primary"> <span>{{$t('Room.Manager.NewRoom')}}</span>
                <v-icon small class="ml-2">fas fa-file-medical</v-icon>
              </v-btn>
              <v-btn class="d-xs-block d-md-none" elevation="2" color="primary" fab small @click.stop="newRoom">
                <v-icon small>fas fa-file-medical</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
        <!--  -->
        <v-data-table :headers="headers" :items="data" single-expand :search="search"
          item-key="multipurpose_room_configuration.creator_users_id" show-expand class="elevation-1" :footer-props="{'items-per-page-options': [5, 10, 15, 20]}">
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <expandedItem :item="item" />
            </td>
          </template>
          <template v-slot:[`item.multipurpose_room_configuration.creator_users_id`]="{ item }">
            <div class="text-truncate" style="max-width: 150px;">
              {{item.multipurpose_room_configuration.creator_users_id}}
            </div>
          </template>
          <template v-slot:[`item.sustainer.fullname`]="{ item }">
            <div class="text-truncate" style="max-width: 150px;">
              {{item.sustainer.fullname}}
            </div>
          </template>
          <template v-slot:[`item.moderator`]="{ item }">
            {{item.delegations}}
            <!-- <div class="text-truncate" style="max-width: 150px;">
              {{ oneModerator(item) }}
            </div> -->
          </template>
          <template v-slot:[`item.delegates`]="{ item }">
            {{item.delegations}}
            <!-- <div v-if="oneParticipant(item) != 0" class="text-truncate" style="max-width: 100px;">
              {{ oneParticipant(item) }}
            </div> -->
            <!-- <div style="max-width: 100px;" class="text-truncate red--text" v-else>
              {{ $t('Room.Manager.Table.UnExistedMod') }}
            </div> -->
          </template>
          <template v-slot:[`item.params.confirmation`]="{ item }">
            <v-tooltip v-if="item.params.confirmation == 0" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon small elevation="10" color="warning" outlined v-bind="attrs" v-on="on"
                  @click="dialogSecure(item)">
                  <v-icon small>
                    fas fa-exclamation-circle
                  </v-icon>
                </v-btn>
              </template>
              <span>{{$t('Room.Manager.Table.StatusRow.Negative')}}</span>
            </v-tooltip>
            <v-tooltip v-else bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon small color="success" v-bind="attrs" v-on="on">
                  <v-icon small>
                    fas fa-check
                  </v-icon>
                </v-btn>
              </template>
              <span>{{$t('Room.Manager.Table.StatusRow.Positive')}}</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn small color="warning" icon v-bind="attrs" v-on="on" @click.stop="editItem(item)">
                  <v-icon x-small>
                    fas fa-pencil-alt
                  </v-icon>
                </v-btn>
              </template>
              <span>{{$t('Room.Manager.Table.ActionButton.Edit')}}</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs}">
                <v-btn color="error" small v-bind="attrs" v-on="on" icon @click="removeItem(item)">
                  <v-icon x-small> fas fa-trash </v-icon>
                </v-btn>
              </template>
              <span>{{$t('Room.Manager.Table.ActionButton.Remove')}}</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn color="blue" v-bind="attrs" small v-on="on" icon
                  @click="goTo(item.params.url)">
                  <v-icon x-small>
                    fas fa-link
                  </v-icon>
                </v-btn>
              </template>
              <span>
                {{$t('Room.Manager.Table.ActionButton.Link')}}
              </span>
            </v-tooltip>
          </template>
        </v-data-table>
    </v-container>
    <v-dialog v-if="dialogConfirm" v-model="dialogConfirm" persistent max-width="420">
      <v-card>
        <v-card-title class="text-h5">
          {{$t('Room.Manager.ChangeStatusDialog.Title')}}
        </v-card-title>
        <v-card-text>
          {{$t('Room.Manager.ChangeStatusDialog.SubTitle')}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialogConfirm = false">
            {{$t('Room.Manager.ChangeStatusDialog.ActionButtons.CloseButton')}}
          </v-btn>
          <v-btn color="green darken-1" text @click="(dialogConfirm = false), (snackbarMail = true)">
            {{$t('Room.Manager.ChangeStatusDialog.ActionButtons.ConfirmButton')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-if="dialogRemove" v-model="dialogRemove" persistent max-width="420">
      <v-card>
        <v-card-title class="text-h5">
          {{$t('Room.Manager.RemoveDialog.Title')}}
        </v-card-title>
        <v-card-text>
          {{$t('Room.Manager.RemoveDialog.SubTitle')}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialogRemove = false">
            {{$t('Room.Manager.RemoveDialog.ActionButtons.CloseButton')}}
          </v-btn>
          <v-btn color="green darken-1" text @click="dialogRemove = false">
            {{$t('Room.Manager.RemoveDialog.ActionButtons.ConfirmButton')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbarMail" color="success" width="10" :timeout="1000" top right>
      {{$t('Room.Manager.SnackBar.Label')}}
    </v-snackbar>
  </div>
</template>
<script>
import expandedItem from '../components/ExpandedItem.vue'
export default {
  data: () => ({
    search: "",
    headers: [],
    expanded: [],
    data: [],
    dialogConfirm: false,
    dialogRemove: false,
    itemDialogWating: {},
    snackbarMail: false,
  }),
  beforeCreate:function(){
    this.$axios.get('/rooms').then((res)=>{if (res.status == 200) {
      this.data = res.data
      console.log(res.data)
    }else{
      this.data = []
    }})
  },
  components:{
    expandedItem
  },
  created:function(){
    this.updatedHeader()
  },
  computed: {
    checkerLanguaje(){
      return this.$i18n.locale
    }
  },
  watch:{
    checkerLanguaje(){
      this.updatedHeader()
    }
  },
  methods: {
    newRoom: function() {
      this.$router.push({ path: "room-action" });
    },
    oneParticipant(item) {
      var response = 0;
      item.delegates.forEach((element) => {
        if (element.role_abbreviation != "Mo") {
          response = element.fullname;
        }
      });
      return response;
    },
    oneModerator(item) {
      var response = this.$t('Room.Manager.Table.UnExistedMod');
      item.delegates.forEach((element) => {
        if (element.role_abbreviation == "Mo") {
          response = element.fullname;
        }
      });
      return response;
    },
    dialogSecure(item) {
      this.itemDialogWating = item;
      this.dialogConfirm = true;
    },
    removeItem(item) {
      this.itemDialogWating = item;
      this.dialogRemove = true;
    },
    editItem(item) {
      let index = this.data.indexOf(item);
      this.$router.push({ name: "RoomAction", params: { id: index } });
    },
    clickExpand(value) {
      this.expanded.push(value);
    },
    updatedHeader(){
      this.headers = [
        { text: "", value: "data-table-expand" },
        {
          text: this.$t("Room.Manager.Table.HeaderOne"),
          align: "start",
          value: "sustainer.code_reference",
        },
        {
          text: this.$t("Room.Manager.Table.HeaderTwo"),
          align: "start",
          value: "params.scheduled_date",
        },
        {
          text: this.$t("Room.Manager.Table.HeaderThree"),
          align: "start",
          value: "params.scheduled_time"
        },
        { text: this.$t("Room.Manager.Table.HeaderFour"), align: "start", value: "sustainer.fullname" },
        { text: this.$t("Room.Manager.Table.HeaderFive"), align: "start", value: "moderator", sortable: false},
        { text: this.$t("Room.Manager.Table.HeaderSix"), align: "start", value: "delegates", sortable: false},
        { text: this.$t("Room.Manager.Table.HeaderSeven"), value: "params.confirmation" },
        { text: this.$t("Room.Manager.Table.HeaderEight"), align: "center", value: "actions", sortable: false },
      ]
    },
    goTo(value){
      window.open(value, '_blank')
    }
  },
};
</script>

<style>
.theme--dark.v-data-table{
  background-color:#31313c!important;
}
.searchComponent.theme--light{
  background-color:#ffffff!important;
}
.searchComponent.theme--dark{
  background-color:#31313C!important;
}
</style>
