<template>
    <v-layout 
    @mousedown="beginDrag(item)" 
    align-center 
    justify-start 
    style="background: #FBFBFB;max-width:1090px;" 
    :style="this.item == selected ? drag_class : ''">

      <v-img style="margin:20px 16px 20px 0" max-height="32" max-width="32" src="../assets/img/operation-+.svg"></v-img>

      <v-layout column style="width:260px;margin:17px 0;max-width:260px">
        <v-layout >
          <span class="text--name">
            {{item.contractor}}
          </span>
        </v-layout>

        <v-layout style="margin-top:2px;">
          <span class="text--from_account">
            <span class="opacity-4">Со счета:</span>  {{item.from_account}}
          </span>
        </v-layout>
      </v-layout>

      <v-layout column style="width:200px;max-width:200px">
        <v-layout>
          <span class="text--name">
            {{item.task_name}}
          </span>
        </v-layout>

        <v-layout xs3>
          <span class="text--from_account opacity-4">
            {{item.task_type}}
          </span>
        </v-layout>        
      </v-layout>

      <v-layout 
        style="width:300px;max-width:300px"
        class="text--name"
      >
        {{item.description}}
      </v-layout>
      

      <v-btn 
        max-width="82"
        max-height="28" 
        disabled
        style="button"
      >
        <span class="text--status opacity-4">
          {{item.status}}
        </span> 
      </v-btn>

      <v-spacer></v-spacer>

      <div 
        :class="item.pay > 0 ? 'text--positive' : 'text--negative'"
      > 
        {{ pay_integer }}<span class="opacity-5">,{{ pay_residual }} ₽</span>
      </div>

    </v-layout>

</template>

<script>
export default {
  props:["item"],
  data: () => ({
    drag_class:'',
    selected:null,
    cursor:require('../assets/img/Group.svg'),
  }),
  computed:{
    pay_integer (){
      let num = (~~this.item.pay).toLocaleString();
      return this.item.pay > 0 ? '+' + num : num;
    },
    pay_residual () {
      let num = Math.abs((this.item.pay%1).toFixed(2)/.01)
      return num == 0 ? "00" : num
    }
  },
  methods:{
    beginDrag(item){
      this.selected = item;
      this.drag_class = `z-index:555;cursor:url('${this.cursor}'),auto;background-color:#F7F7F7;box-shadow: 0px 15px 59px -19px rgba(0,0,0,0.44);
-webkit-box-shadow: 0px 15px 59px -19px rgba(0,0,0,0.44);
-moz-box-shadow: 0px 15px 59px -19px rgba(0,0,0,0.44);`;
    },
    stopDrag () {
      this.drag_class = '';
      this.selected = null;
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.stopDrag);
  }
}
</script>

<style>
  .text--positive {
    color: #18AA00;
      font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  }
  .text--negative {
    color: #DA3300;
      font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  }
    .text--profit {
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #18AA00;
  }

  .text--from_account {
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
  }

  .text--name{
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
  }

  .text--status{
  font-size: 14px;
  line-height: 18px;
  text-transform:none;
  letter-spacing: -0.01em;
  color: #2E2E2E;
  }

</style>
