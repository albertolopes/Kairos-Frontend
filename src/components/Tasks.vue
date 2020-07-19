<template>
  <v-card class="overflow-hidden mx-auto">
    <v-app-bar color="grey lighten" elevate-on-scroll dense dark>
      <v-btn dark text @click="prev" icon>
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>

      <v-toolbar-title v-if="$refs.calendar">{{ $refs.calendar.title }}</v-toolbar-title>

      <v-btn dark text @click="next" icon>
        <v-icon small>mdi-chevron-right</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <span>{{ typeToLabel[type] }}</span>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="type = 'day'">
            <v-list-item-title>Day</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'week'">
            <v-list-item-title>Week</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'month'">
            <v-list-item-title>Month</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = '4day'">
            <v-list-item-title>4 days</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text @click="setToday">Today</v-btn>

      <!-- BTN NOVA TAREFA -->
      <v-dialog max-width="600" min-width="700" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text @click="salvar = true" v-bind="attrs" v-on="on">Nova tarefa</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Criar tarefa</span>
          </v-card-title>
          <v-container>
            <!-- TEXT -->
            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field
                  :rules="titleRules"
                  v-model="tipoTarefa"
                  color="deep-purple"
                  name="tipoTarefa"
                  label="Titulo tarefa"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-textarea
                  v-model="descricao"
                  auto-grow
                  name="descricao"
                  label="Descrição da tarefa"
                  color="deep-purple"
                  rows="1"
                ></v-textarea>
              </v-col>
            </v-row>

            <!-- DATA -->
            <v-row>
              <v-col cols="12" lg="6">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="dataInicialRules"
                      v-model="dataInicial"
                      color="deep-purple"
                      label="Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="deep-purple"
                    v-model="data1"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" lg="6">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dataFinal"
                      color="deep-purple"
                      label="Date (read only text field)"
                      hint="MM/DD/YYYY format"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="deep-purple"
                    v-model="data2"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <!-- HORA -->
            <v-row>
              <v-col cols="12" lg="6">
                <v-dialog
                  ref="hora1"
                  v-model="modal1"
                  :return-value.sync="horaInicial"
                  width="290px"
                  color="deep-purple"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :rules="horaInicialRules"
                      v-model="horaInicial"
                      color="deep-purple"
                      label="Hora Inicial"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    color="deep-purple"
                    format="24hr"
                    v-if="modal1"
                    v-model="horaInicial"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="deep-purple" @click="modal1 = false">Cancel</v-btn>
                    <v-btn text color="deep-purple" @click="$refs.hora1.save(horaInicial)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>

              <v-col cols="12" lg="6">
                <v-dialog ref="hora2" v-model="modal2" :return-value.sync="horaFinal" width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="horaFinal"
                      color="deep-purple"
                      label="Hora Final (Opcional)"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    color="deep-purple"
                    format="24hr"
                    v-if="modal2"
                    v-model="horaFinal"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="deep-purple" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="deep-purple" @click="$refs.hora2.save(horaFinal)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-sheet v-if="salvar">
              <v-btn color="deep-purple" text @click="dialog = false, clear()">Cancelar</v-btn>
              <v-btn color="deep-purple" text @click="dialog = false, postTarefa()">Salvar</v-btn>
            </v-sheet>
            <v-sheet v-else>
              <v-btn color="deep-purple" text @click="dialog = false, clear()">Cancelar</v-btn>
              <v-btn color="deep-purple" text @click="dialog = false, putTarefa()">Atualizar</v-btn>
            </v-sheet>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <!-- CALENDARIO -->
    <v-sheet height="645">
      <v-calendar
        v-if="renderComponent"
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :type="type"
        @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
        @change="updateRange"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
      >
        <v-card color="grey lighten-4" min-width="350px" flat>
          <v-toolbar :color="selectedEvent.color" dark>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="salvar = false, edit()" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click="deleteDialog = true" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.description"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>

    <!-- DIALOG DELETE -->
    <v-dialog v-model="deleteDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Tem certeza que deseja excluir a tarefa selecionada?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteDialog = false">cancelar</v-btn>
          <v-btn color="green darken-1" text @click="deleteDialog = false, deletar()">deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DIALOG DELETE -->
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{text}}
      <template v-slot:action="{ attrs }">
        <v-btn color="write" text v-bind="attrs" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "tasks",
  data: () => ({
    renderComponent: true,
    color: "grey lighten",
    mode: "",
    snackbar: false,
    text: "",
    timeout: 6000,
    x: null,
    y: "top",
    salvar: true,
    dialog: false,
    deleteDialog: false,
    data1: undefined,
    data2: undefined,
    menu1: false,
    menu2: false,
    horaInicial: undefined,
    horaFinal: undefined,
    modal1: false,
    modal2: false,
    status: "CONCLUIDA",
    descricao: undefined,
    tipoTarefa: undefined,
    usuario: undefined,
    id: undefined,
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      // "blue",
      // "indigo",
      // "deep-purple",
      // "cyan",
      // "green",
      // "orange",
      "grey darken-1"
    ],
    titleRules: [v => !!v || "Titulo é obrigatorio"],
    dataInicialRules: [v => !!v || "Data inicial é obrigatória"],
    horaInicialRules: [v => !!v || "Hora inicial é obrigatória"]
  }),
  computed: {    
    dataInicial() {
      return this.data1;
    },
    dataFinal() {
      return this.data2;
    }
  },
  watch: {
    // date() {
    //   this.dateFormatted = this.formatDate(this.date);
    // }
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    postTarefa() {
      this.$store
        .dispatch("POST_TASK", {
          status: this.status,
          descricao: this.descricao,
          tipoTarefa: this.tipoTarefa,
          tempoInicial: this.dataInicial + "T" + this.horaInicial + ":00Z",
          tempoFinal: this.dataFinal
            ? ""
            : this.dataFinal + "T" + (this.horaFinal == "")
            ? ""
            : this.horaFinal + ":00Z"
        })
        .then(
          response => {
            if (response == 201) {
              this.snackbar = true;
              this.text = "Tarefa criada com sucesso!";
            }
            this.forceRerender();
          },
          error => {
            this.snackbar = true;
            this.text = error.response.data.message;
          }
        );
    },
    putTarefa() {
      this.$store
        .dispatch("PUT_TASK", {
          id: this.selectedEvent.id,
          status: this.status,
          descricao: this.descricao,
          tipoTarefa: this.tipoTarefa,
          tempoInicial: this.dataInicial + "T" + this.horaInicial + ":00Z",
          tempoFinal: this.dataFinal
            ? ""
            : this.dataFinal + "T" + (this.horaFinal == "")
            ? ""
            : this.horaFinal + ":00Z"
        })
        .then(() => {
          this.forceRerender();
        });
    },
    edit() {
      this.dialog = true;
      this.tipoTarefa = this.selectedEvent.name;
      this.descricao = this.selectedEvent.description;
      this.data1 = this.selectedEvent.start.toISOString().substring(0, 10);
      this.horaInicial = this.selectedEvent.start.toISOString().substring(11, 16);
      this.data2 = this.selectedEvent.end.toISOString().substring(0, 10);
      this.horaFinal = this.selectedEvent.end.toISOString().substring(11, 16);
    },
    deletar() {
      this.$store
        .dispatch("DELETE_TASK", { id: this.selectedEvent.id })
        .then(() => {
          this.forceRerender();
        });
    },
    clear() {
      this.tipoTarefa = "";
      this.descricao = "";
      this.data1 = "";
      this.data2 = "";
      this.horaInicial = "";
      this.horaFinal = "";
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange() {
      this.$store.dispatch("GET_TASKS").then(response => {
        const events = [];
        for (let i = 0; i < response.data.length; i++) {
          const allDay = this.rnd(0, 3) === 0;
          const first = new Date(response.data[i].tempoInicial);
          const second =
            response.data[i].tempoFinal === null
              ? null
              : new Date(response.data[i].tempoFinal);

          events.push({
            id: response.data[i].id,
            name: response.data[i].tipoTarefa,
            description: response.data[i].descricao,
            usuario: response.data[i].usuario,
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay
          });
        }
        this.events = events;
      });
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</script>