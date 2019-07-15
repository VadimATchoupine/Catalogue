<template>
  <!-- <q-page class="q-pa-lg"> -->
  <!-- FIXME: it is not a PAGE !!! -->
  <q-page padding style="max-width: 1000px">
  <div>
    <div class="row gutter-lg">
      <!-- 2 section -->
      <div class="col">
        <q-field
          icon="account_box"
          label="Personal Data"
          :label-width="10">
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Name"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Surname"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Middle name"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-datetime value="" type="date" float-label="Birthday"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Cellphone"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Company"/>
        </q-field>
        <q-field
          error-label="We need a valid email"
          :label-width="5">
          <q-input value="" float-label="Position"/>
        </q-field>
      </div>
      <!-- 2 section -->
      <div class="col">
        <q-field
          icon="email"
          label="Your email"
          :label-width="10">
        </q-field>
        <br>
        <q-field
          label="Your email"
          helper="Helper"
          error-label="We need a valid email"
          :label-width="5">
          <q-input value=""  placeholder="email address"/>
        </q-field>
        <q-field
          label="Your email"
          helper="Helper"
          error-label="We need a valid email"
          :label-width="5">
          <q-input value=""  />
        </q-field>
        <q-field
          label="Your email"
          helper="Helper"
          error-label="We need a valid email"
          :label-width="5">
          <q-input value=""  />
        </q-field>
        <br>
        <br>
        <br>
        <!-- 3 section -->
        <q-field
          icon="shop"
          label="Active plan"
          :label-width="6">
          <q-input value=""  />
        </q-field>
      </div>
    </div>
    <br>
    <br>
    <!-- Btns -->
    <div class="row">
      <q-btn-group rounded>
        <q-btn rounded color="primary" size="md" label="Submit"/>
        <q-btn rounded color="red" size="md" label="Cancel"/>
      </q-btn-group>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
}
</script>

<style scoped>
q-page {
  justify-content: center;
}
</style>
