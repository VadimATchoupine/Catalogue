<template>
  <q-btn-dropdown
    flat
    split
    icon="persone"
    label="Adam Smith"
    v-on:click="$router.push({name: 'profile'})"
  >
    <q-list link>
    <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'profile'})">Мои Данные</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'account_settings'})">Тарифы</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'general_settings'})">Настройки</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'orders'})">Мои Заказы</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'notifications'})">Уведомления и Сообщения</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'help_center'})">Помощь</div></q-item-tile>
        </q-item-main>
      </q-item>
      <!-- <q-item v-close-overlay> -->
      <q-item>
        <q-item-main>
          <q-item-tile label><div v-on:click="$router.push({name: 'logout'})">Выход</div></q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
