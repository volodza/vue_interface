<template>
    <v-layout  column class="menu">

      <v-layout d-flex style="padding:27px 19px 14px 36px">
        <h1 style="line-height: 35px;letter-spacing: 0.01em;font-size:22px;">Все деньги</h1>
        <v-spacer></v-spacer>
        <img style="max-height:28px;width:30px" src="../assets/img/logo.svg"></img>
      </v-layout>
     
      <div class="accounts">
        <v-layout column style="padding:18px 18px 0 18px">
          <v-layout>
            <p class="text__balance">1 930 545</p>
            <span class="text__balance opacity-4">,29 ₽</span>
          </v-layout>

          <v-layout>
            <img style="margin:0;height:34px;width:13px;border-radius:0" src="../assets/img/Vector.svg"></img>
            <v-layout column>
              <p class="text__currency">
                1 345 511<span class="opacity-4">,29 ₽</span>
              </p>
              <p class="text__currency">
                8797<span class="opacity-4">,29 $ (543 345,12 ₽)</span>
              </p>
            </v-layout>
          </v-layout>
        </v-layout>

        <v-divider ></v-divider>

        <v-layout style="padding:18px" column>

          <v-layout>
            <span class="text__account opacity-4">Тинькофф банк</span>
            <v-spacer></v-spacer>
            <span class="text__account">
              541 356<span class="opacity-4">,47 ₽</span>
            </span>
          </v-layout>

          <v-layout>
            <span class="text__account opacity-4">Тинькофф банк, $</span>
            <v-spacer></v-spacer>
            <span class="text__account">
              8797<span class="opacity-4">,41 $</span>
            </span>
          </v-layout>

          <v-layout>
            <span class="text__account opacity-4">Касса</span>
            <v-spacer></v-spacer>
            <span class="text__account">
              12244<span class="opacity-4">,39 ₽</span>
            </span>
          </v-layout>

        </v-layout>

      </div>

      <div style="margin:26px 36px" >
        <v-btn 
          style="margin-bottom:12px;border-radius:14px" 
          text 
          :key="index" 
          height="44"
          v-for="(item,index) in ecosystem" 
        >
          <v-img style="margin-right:11px" :src="item.img"> </v-img> 
          <span class="btn__text">{{item.name}}</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <div style="padding:17px 32px 17px 26px;height:86px;width:312px;background-color:#EEEEEE;border-radius: 35px 0 0 35px;">
        <v-layout row>
          <v-avatar>
            <v-img  src="../assets/img/image.png"></v-img>
          </v-avatar>



          <v-flex column style="margin-left:15px">
            <v-layout align-start style="margin-bottom:3px">
              <span style="font-size:15px">Андрей Никонов</span>
              <v-spacer></v-spacer>
              <v-btn fab small height='20' width="20" icon><v-img height="16" max-width="16"  src="../assets/img/icons/help-icon.svg"></v-img></v-btn>
            </v-layout>
            <v-layout align-end>
              <span style="font-size:15px" class="opacity-5">Riverstar Digital</span>
              <v-spacer></v-spacer>
              <v-btn fab small height='20' width="20" icon><v-img height="16" max-width="16"  src="../assets/img/icons/settings-icon.svg"></v-img></v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>

</template>

<script>
export default {
  data () {
    return {
      ecosystem: [
      {name:'Операции',img:require('../assets/img/icons/operation-icon.svg')},
      {name:'Отчеты',img:require('../assets/img/icons/reports-icon.svg')},
      {name:'Контрагенты',img:require('../assets/img/icons/contragents-icon.svg')},
      {name:'Проекты',img:require('../assets/img/icons/work-icon.svg')},
      {name:'Статьи расходов',img:require('../assets/img/icons/accounts-icon.svg')},
      {name:'Сотрудники',img:require('../assets/img/icons/person-icon.svg')}
    ]

    }
  }
}
</script>

<style>
 .accounts{
   margin:0 36px;
   background-color: #EEEEEE;
   border-radius:18px;
   height:176px;
   width:240px;
 }
 .accounts .text__balance {
  font-size:28px;
  margin:0;
  line-height: 35px
 }
 .accounts .text__currency {
  font-size: 14px;
  line-height: 18px;
  margin:3px 5px 0;
 }
.accounts .text__account {
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.01em;
 }
.menu {
   background:#F5F5F5;
   height:748px;
   max-width:312px;
   border-radius: 35px 0 0 35px;
 }
  .btn__text {
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.01em;
  text-transform: none;
 }


</style>
