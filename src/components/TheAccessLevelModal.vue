<template>
  <q-modal
    v-model="accessLevelModal"
    v-bind:content-css="{minWidth: '30vw', minHeight: '40vw'}"
  >
    <!-- 1.1. CONTENT WRAPPER -->
    <div class="q-pa-lg">

      <!-- HEAD -->
      <!-- 1.1.1. row - TITLE -->
      <div class="row q-py-lg">
        <div class="q-title text-weight-bold">Настройки доступа</div>
      </div>

      <!-- MAIN -->
      <!-- 1.1.2. row - HEADER -->
      <div class="row q-py-xs">
        <div class="q-body-1 text-weight-light">Ссылка для совместного доступа (доступна только соавторам):</div>
      </div>
      <!-- 1.1.3. row - SHARED ICON & INPUT -->
      <div class="row q-pt-sm q-pb-lg">
        <q-field icon="link" class="col-12">
          <q-input
            class="q-body-1 text-weight-light"
            inverted
            inverted-light
            v-model="areaShareByLink"
            type="url"
            color="grey-1"
          />
        </q-field>
      </div>
      <!-- 1.1.4. row - SUBHEADER -->
      <div class="row q-py-xs">
        <div class="q-body-1 text-weight-light">Поделиться ссылкой через:</div>
      </div>
      <!-- 1.1.5. row - SHARED ICONS w/ SM -->
      <div class="row q-pt-sm q-pb-sm">
        <div class="col flex justify-center">
          <q-btn round><q-icon name="face" color="amber" size="2em"/></q-btn>
          <q-btn round><q-icon name="mood" color="amber" size="2em"/></q-btn>
          <q-btn round><q-icon name="party_mode" color="amber" size="2em"/></q-btn>
          <q-btn round><q-icon name="thumb_up" color="amber" size="2em"/></q-btn>
          <q-btn round><q-icon name="more_horiz" color="amber" size="2em"/></q-btn>
        </div>
      </div>
      <!-- 1.1.6. row - SUBHEADER -->
      <div class="row q-py-xs">
        <div class="q-body-1 text-weight-light">Уровни доступа:</div>
      </div>
      <!-- 1.1.7. row - ACCESS LEVEL TABLE -->
      <div class="row q-pt-sm q-pb-sm">
        <div class="col-12">
          <q-table
            hide-header
            hide-bottom
            v-bind:data="accessLevels"
            v-bind:columns="columnsAccessLevels"
            row-key="id"
          >
            <q-tr
              slot="body"
              slot-scope="props"
              v-bind:props="props"
              height="30px"
            >
              <q-td
                v-for="col in props.cols"
                v-bind:key="col.name"
                v-bind:props="props"
              >
                {{ col.value }}
              </q-td>
              <q-td auto-width>
                <q-btn
                  flat round dense
                  color="amber"
                  icon="more_horiz"
                >
                  <q-popover
                    self="top middle"
                    anchor="bottom left"
                  >
                    <q-list link class="q-caption text-weight-regular">
                      <q-item v-close-overlay v-on:click.native="showNotificationOne">Опция 1</q-item>
                      <q-item v-close-overlay v-on:click.native="showNotificationOne">Опция 2</q-item>
                      <q-item v-close-overlay v-on:click.native="showNotificationOne">Опция 3</q-item>
                    </q-list>
                  </q-popover>
                </q-btn>
              </q-td>
            </q-tr>
          </q-table>
        </div>
      </div>

      <!-- EXTRA-SPACE -->
      <br/>

      <!-- SUB-MAIN -->
      <!-- 1.1.8. row - SUBHEADER -->
      <div class="row q-py-xs">
        <div class="q-body-1 text-weight-light">
          Пригласить пользователей:
        </div>
      </div>
      <!-- 1.1.9. INPUT & SELECT -->
      <div class="row q-pt-sm q-pb-sm">
        <!-- 1.1.9.1. INPUT -->
        <div class="col-6">
          <q-input
            class="q-body-1 text-weight-light"
            inverted
            inverted-light
            type="email"
            v-model="email"
            color="grey-1"
          />
        </div>
        <!-- 1.1.9.1. SELECT -->
        <div class="col-5 offset-1">
          <q-field v-bind:icon="selectedOption">
            <q-select
              toggle
              inverted
              inverted-light
              color="grey-1"
              class="q-body-1 text-weight-light"
              v-model="selectedOption"
              v-bind:options="listOptions"
            />
          </q-field>
        </div>
      </div>
      <!-- 1.1.10. row - SUBHEADER -->
      <div class="row q-pt-xs q-pb-none">
        <!-- 1.1.10.1. header -->
        <div class="q-body-1 text-weight-light">Настройки владельца<q-btn round dense flat icon="info" color="amber" size="md"/></div>
      </div>
      <!-- 1.1.11. row - LIST w/ CHECKBOXES -->
      <div class="row q-pt-xs q-pb-lg">
      <q-list link inset-separator class="col-12">
        <!-- Rendering a <label> tag (notice tag="label") so the whole QItem will respond to clicks to change Checkbox state. -->
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="checkedOptOne" color="amber" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label class="q-caption text-weight-light">Опция 1</q-item-tile>
            <q-item-tile sublabel class="q-body-1 text-weight-thin">Запретить редакторам добавлять пользователей и изменять настройки доступа</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="checkedOptTwo" color="amber" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label class="q-caption text-weight-light">Опция 2</q-item-tile>
            <q-item-tile sublabel class="q-body-1 text-weight-thin">Запретить комментаторам и читателям скачивать, печатать и копировать файлы</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
      </div>
      <!-- 1.1.12. row - BUTTONS -->
      <div class="row">
          <q-btn-group>
            <q-btn label="Готово" color="primary" v-on:click="showNotificationTwo" size="sm" />
            <q-btn label="Отменить" color="red" v-on:click="accessLevelModal = !accessLevelModal" size="sm" />
          </q-btn-group>
      </div>
    </div>
  </q-modal>
</template>

<script>
export default {
  data: function () {
    return {
      // MODAL WINDOW
      // TABLE - ACCESSLEVEL:
      accessLevels: [
        {
          id: '012302104121',
          avatar: '<img>',
          persone: 'Adam Smith',
          access: 'owner'
        },
        {
          id: '01230210411',
          avatar: '<img>',
          persone: 'Tobies Rieper',
          access: 'readonly'
        },
        {
          id: '01231323231',
          avatar: '<img>',
          persone: 'Kermit da Frog',
          access: 'edit'
        }
      ],
      columnsAccessLevels: [
        {
          name: 'avatar',
          required: true,
          label: 'avatar',
          align: 'left',
          field: 'avatar',
          sortable: false,
          style: 'width: 10px'
        },
        {
          name: 'persone',
          required: true,
          label: 'persone',
          align: 'left',
          field: 'persone',
          sortable: true,
          style: 'width: auto'
        },
        {
          name: 'access',
          required: true,
          label: 'access',
          align: 'left',
          field: 'access',
          sortable: true,
          style: 'width: 20px'
        }
      ],
      areaShareByLink: '',
      checkedOptOne: false,
      checkedOptTwo: false,
      selectedOption: '',
      listOptions: [
        {
          label: 'Редактировать',
          icon: 'create',
          value: 'create'
        },
        {
          label: 'Комментировать',
          icon: 'comment',
          value: 'comment'
        },
        {
          label: 'Просмотр',
          icon: 'visibility',
          value: 'visibility'
        }
      ],
      email: ''
    }
  },
  computed: {
    accessLevelModal: {
      get () { return this.$store.state.catalog.accessLevelModal },
      set (payload) { this.$store.commit('catalog/toggleAccessLevelModal', payload) }
    }
  },
  methods: {
    // 1. STATE: stable
    toggleAccessLevelModal: function () {
      this.$store.commit('catalog/toggleAccessLevelModal')
    },
    // 4.1. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    showNotificationOne () {
      this.$q.notify('<FEEDBACK TEST> Option selected')
    },
    // 4.2. STATE: stable
    // TODO: add to global storage (NB: depends on business-logic)
    showNotificationTwo () {
      this.$q.notify('Вы поделились данным документом')
    }
  }
}
</script>
