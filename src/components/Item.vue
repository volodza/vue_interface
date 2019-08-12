<template>
    <v-layout  
      align-center 
      justify-start 
      style="padding:0 36px 0 36px;margin-left:-36px;margin-right:-36px;cursor:pointer;background: #FBFBFB;max-width:1126px;z-index:1" 
      :style="this.item == selectedd ? drag_class : '' "
      @click="beginDrag(item)"
    >

      <v-img style="margin:20px 16px 20px 0" max-height="32" max-width="32" src="../assets/img/operation-+.svg"></v-img>

      <v-layout column style="width:260px;margin:17px 0;max-width:260px">
        <v-layout align-center >
          <span class="text--name">
            {{item.contractor}}
          </span>

          <span v-if="this.item == selected" style="cursor:pointer;height:15px;width:15px;">
            <v-img 
              style="margin:6px auto;transform: rotate(270deg)" 
              height="6"
              max-width="3" 
              src="../assets/img/arrow-down.svg"
            ></v-img>
          </span>
        </v-layout>

        <v-layout style="margin-top:2px;">
          <span class="text--from_account">
            <span class="opacity-4">Со счета:</span>  {{item.from_account}}
          </span>

          <span  v-if="this.item == selected" style="cursor:pointer;height:15px;width:15px;">
            <v-img 
              
              style="margin:6px auto;transform: rotate(270deg)" 
              height="6"
              max-width="3" 
              src="../assets/img/arrow-down.svg"
            ></v-img>
          </span>
        </v-layout>
      </v-layout>

      <v-layout column style="width:200px;max-width:200px">
        <v-layout>
          <span class="text--name">
            {{item.task_name}}
          </span>

          <span v-if="this.item == selected" style="cursor:pointer;height:15px;width:15px;">
            <v-img 
              style="margin:6px auto;transform: rotate(270deg)" 
              height="6"
              max-width="3" 
              src="../assets/img/arrow-down.svg"
            ></v-img>
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
        <span v-if="this.item !== selected">{{item.description}}</span>
        <input style="border-bottom:1px solid #2E2E2E10;width:260px;outline:0;" @click.stop="1" v-else v-model="item.description" type="text">
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

  props:["item","selected"],
  data: () => ({
    drag_class:'',
    // selected:null,
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
    },
    selectedd () {
      return this.selected
    }
  },
  methods:{
    beginDrag(item){

      if(this.selected == item){
        this.drag_class = '';
        this.selected = null;
        return
      }
      this.selected = null;
      this.drag_class = '';
      this.selected = item;
      this.drag_class = `
      cursor:url('${this.cursor}'),auto;
      position:relative;
      z-index:2;
      background-color:#F7F7F7;
      box-shadow: 0px 15px 30px -19px rgba(0,0,0,0.44);
      -webkit-box-shadow: 0px 15px 30px -19px rgba(0,0,0,0.44);
      -moz-box-shadow: 0px 15px 30px -19px rgba(0,0,0,0.44);`;
    },
    stopDrag (e) {
      if(!e.target.closest('.dropitem')){
        this.drag_class = '';
        this.selected = null;
        return;
      }
 
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.stopDrag);
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
