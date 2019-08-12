<template>

  <svg 
    :viewBox='viewBox'

    :class="className" 
    xmlns="http://www.w3.org/2000/svg" 
    :height='height'
    :width='width'
      v-on="$listeners"
  >
    <use  :xlink:href="`${require(`@/assets/icons/${name}.svg`)}#${name}`" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>



</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,  
    },
    height: {
      type: String
    },
    width: {
      type: String    
    }
  },
  computed: {

    className() {
      return 'svg-icon svg-icon--' + this.name;
    },
    style() {
      let style = {}
      if (this.color) {
        style.color = this.color || 'green';
      }
      if (this.height) {
        style.height = this.height+'px';
      }
       if (this.width) {
        style.width = this.width+'px';
      }
      return style;       
    },
    viewBox() {
        return '0 0 ' + this.width + ' ' + this.height
    }
  }

};
</script>

<style>
  .svg-icon {
    fill-rule: evenodd;
    clip-rule: evenodd;
  
  }
  
</style>