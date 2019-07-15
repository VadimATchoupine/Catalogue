<template>
    <div>
      {{i.id}} + {{i.title}}
    </div>
</template>

<script>
export default {
  props: [ 'id', 'title' ]
}
</script>
