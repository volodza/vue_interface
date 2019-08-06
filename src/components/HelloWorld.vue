<template>
  <v-container 
  justify-space-between 
  fluid 
  row 
  style="padding:26px 36px;min-width:1440px;max-width:1440px;" >

    <v-layout  column style="max-width:1047px;">

      <v-flex row style="margin:0;max-height:44px;">

        <v-btn 
          class="button button_month-left" 
          color="#EAEAEA" 
          outlined 
          height="44" 
          min-width="44"
        >
          <v-img height="10" max-width="7" src="../assets/img/arrow-down.svg"></v-img>
        </v-btn>

        <v-btn 
          class="button button_month-selected"
          color="#EAEAEA" 
          outlined 
          min-width="94" 
          height="44"
        >
          <v-layout align-center justify-space-around>
            <v-img 
              height="16" 
              max-width="16"  
              src="../assets/img/icons/calendar-icon.svg"
            ></v-img>

            <v-spacer></v-spacer>

            <span class="button_month-selected-text"> Июль </span>
          </v-layout>
        </v-btn>

        <v-btn 
          class="button button_month-right"
          color="#EAEAEA" 
          outlined 
          height="44" 
          min-width="44"
        >
          <v-img 
            style="transform: rotate(180deg)" 
            height="10" 
            max-width="7" 
            src="../assets/img/arrow-down.svg"
          ></v-img>
        </v-btn>

        <div class="search">
          <div 
            v-if="!input_text"
            class="search_input-placeholder" 
          >
            <span style="color:black">Поиск</span> 
            <span class="opacity-4"> по проекту,контрагенту или счету</span>
          </div>

          <v-img 
            class="search_input-img"
            height="16" 
            max-width="16" 
            src="../assets/img/search-icon.svg"
          ></v-img>

          <input 
            v-model="input_text"
            class="search_input" 
            type="text"
          >
        </div>

        <v-layout align-center class="filter">
          <v-btn 
            color="#EAEAEA" 
            class="button filter_button elevation-0" 
            text height="44"
          >
            <v-layout align-center fill-height>
              <v-img 
                height="16" 
                max-width="16" 
                src="../assets/img/icons/filter-icon.svg"
              ></v-img>

              <span class="filter_button-text">Фильтр</span>

              <v-img 
                style="transform: rotate(270deg)" 
                height="10"
                max-width="6" 
                src="../assets/img/arrow-down.svg"
               ></v-img>
            </v-layout>
          </v-btn>

          <v-avatar 
            v-for="(profile,i) in profiles" 
            :key="i" 
            style="margin-left:7px" 
            size="30"
          >
            <v-img 
              class="filter_avatar-favorite-icon"
              height="12" 
              width="12" 
              src="../assets/img/icons/favorite.png"
            ></v-img>

            <div class="filter_avatar-none" v-if="!profile.img">
              <span class="filter_avatar-none-text">
                {{ getInitials(profile.name) }}
              </span>
            </div>

            <v-img v-else :src="profile.img"></v-img>
          </v-avatar>

          <v-btn 
            style="background-color:white" 
            outlined 
            class="elevation-0 mx-2" 
            height="30" 
            max-width="30"  
            fab 
            color="white"
          >
            <v-img 
              height="10" 
              max-width="10" 
              src="../assets/img/icons/plus-icon.svg"
            ></v-img>
          </v-btn>
        </v-layout>
      </v-flex>

        <!-- график -->
      <v-img class="chart" src="../assets/img/graphic.svg"></v-img>

      <v-flex align-center row class="settings">
        <span class="settings_sort-by-text">
          Группировать:
        </span>

        <v-btn 
          color="#EAEAEA" 
          class="elevation-0 button settings_sort-by-select" 
          text height="31"
        >
          <v-layout 
            style="padding:0 6px" 
            align-center 
            justify-space-around 
            row 
            fill-height
          >
            <span>По дате</span>

            <v-spacer></v-spacer>

            <v-img 
              style="transform: rotate(270deg)" 
              height="10" 
              max-width="7" 
              src="../assets/img/arrow-down.svg"
            ></v-img>
          </v-layout>
        </v-btn>

        <v-layout align-center row style="margin:0 0 0 15px">
          <span class="settings_sort-by-text">
            Вид:
          </span>    

          <v-btn 
            class="button"
            style="padding:0;margin-right:5px" 
            outlined  
            fab
            height="30" 
            max-width="30"
            min-width="30"
          >
            <v-img 
              height="16" 
              max-width="16" 
              src="../assets/img/icons/list-icon.svg"
            ></v-img>
          </v-btn>

          <v-btn 
            class="button"
            outlined 
            fab
            small 
            height="30" 
            max-width="30"
            min-width="30"
          >
            <v-img 
              height="16" 
              max-width="16" 
              src="../assets/img/icons/calendar-icon.svg"
            ></v-img>
          </v-btn>          
        </v-layout>

        <v-spacer></v-spacer>

        <v-btn 
          style="margin-right:9px" 
          class="button settings_operations-button"
          text
          :key="index" 
          height="31"
          v-for="(item,index) in buttons" 
        >
          {{ item.name }}
        </v-btn>
      </v-flex>

      <OperationsStack 
        v-for="(stack,i) in operations" 
        :key="i" 
        :stack="stack"
      ></OperationsStack>
    </v-layout>

    <Menu/>

      <v-btn
        class="elevation-0"
        fab
        large
        dark
        bottom
        left
        style="display: block;
              width: 68px;
              height: 68px;
              position: fixed;
              left: 36px;
              bottom: 36px;
              z-index: 99999;"
      >
        <v-img  height="16" max-width="16" src="../assets/img/icons/plus-icon.svg"></v-img>
      </v-btn>

  </v-container>
  
</template>

<script>
import Menu from './Menu'
import OperationsStack from './OperationsStack'
import Item from './Item'
export default {
  components:{
    Menu,
    Item,
    OperationsStack
  },
  data: () => ({
    profiles:[
      {name:'Дмитрий Карпов',img:''},
      {img:require('../assets/img/photos/photo_1.png')},
      {img:require('../assets/img/photos/photo_2.png')},
      {img:require('../assets/img/photos/photo_3.png')},
    ],
    input_text:'',
    cursor:require('../assets/img/Group.svg'),
    buttons:[{name:'Все операции'},{name:'Будущие'},{name:'Прошедшие'}],
    operations:[
      {
        date:'Сегодня, 10 июля',
        items:[
          {
            contractor:"ИП Емельянов Антон Викторович",
            from_account:"Тинькофф банк",
            task_name:"Сайт Volkswagen",
            task_type:"Продвижение",
            description:"Оплата за продвижение Яндекс.Директ июнь-июль",
            status:"Оплачено",
            pay:50239.17
          },
          {
            contractor:"Дмитрий Воропаев",
            from_account:"Тинькофф банк",
            task_name:"ИМ Bonafide",
            task_type:"Зарплата сотрудникам",
            description:"Аванс июль",
            status:"Оплачено",
            pay:-200000
          },
          {
            contractor:"ООО Большие турбины",
            from_account:"Тинькофф банк",
            task_name:"Сайт большие турбины",
            task_type:"Разработка",
            description:"Аванс за разработку",
            status:"Оплачено",
            pay:500000
          }
        ]
      },
      {
        date:'Вчера, 9 июля',
        items:[
          {
            contractor:"ИП Емельянов Антон Викторович",
            from_account:"Тинькофф банк",
            task_name:"Сайт Volkswagen",
            task_type:"Продвижение",
            description:"Оплата за продвижение Яндекс.Директ июнь-июль",
            status:"Оплачено",
            pay:50239.17
          },
          {
            contractor:"Дмитрий Воропаев",
            from_account:"Тинькофф банк",
            task_name:"ИМ Bonafide",
            task_type:"Зарплата сотрудникам",
            description:"Аванс июль",
            status:"Оплачено",
            pay:-200000
          },
          {
            contractor:"ООО Большие турбины",
            from_account:"Тинькофф банк",
            task_name:"Сайт большие турбины",
            task_type:"Разработка",
            description:"Аванс за разработку",
            status:"Оплачено",
            pay:500000
          }
        ]
      }
    ]
   
  }),
  methods:{
    getInitials (name) {
      return name.split` `[0][0] + name.split` `[1][0];
    }
  }
};
</script>

<style>

 #app{
   background-color: #FBFBFB;
   font-weight: 500;
   font-family: Cera Pro;
   color: #2E2E2E;
   letter-spacing: 0.01em;
 }
 .button {
   border: 1px solid #EAEAEA;
  border-radius: 10px;
 }
 .button_month-left {
   margin-right:2px;
 }
 .button_month-right {
   margin-right:15px;
 }
 .button_month-selected {
   padding:0 14px !important;
   margin-right:2px;
 }
 .button_month-selected-text {
   font-size: 15px;
   line-height: 19px;
   letter-spacing: -0.01em;
   text-transform:none ;
   color:#2E2E2E;
 }
 .chart {
   width:796px;
   max-height:90px;
   margin-top:26px;
   margin-bottom:36px;
 }
 .filter {
   width:384px;
   background: #F2F2F2;
   border-radius: 10px;
 }
 .filter_button {
   background-color:#FBFBFB;
   width:120px;
   margin-right:9px;
 }
 .filter_button-text {
   margin-right:16px;
   margin-left:7px;
   color:black;
   text-transform:none;
   font-size: 15px;
   line-height: 19px;
   letter-spacing: -0.01em;
 }
 .filter_avatar-favorite-icon {
   position:absolute;
   z-index:1;
   top:-2px;
   left:-2px;
 }
 .filter_avatar-none {
   color:white;
   height:30px;
   width:30px;
   border-radius:50%;
   background-color:#2E2E2E;
   padding:3px;
 }
 .filter_avatar-none-text {
   font-size: 14px;
   line-height: 18px;
   font-weight:400;
   letter-spacing: 0.01em;
 }
 .opacity-5 {
   opacity:.5;
   color: #2E2E2E;
 }

 .opacity-4 {
   opacity:.4;
   color: #2E2E2E;
 }

.search {
  border:1px solid #EAEAEA;
  border-radius:10px;
  height:44px;
  width:400px;
  position:relative;
  margin-right:60px;
}
.search_input-placeholder {
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.01em;
  position:absolute;
  margin:12px 15px;
}
.search_input-img {
  position:absolute;
  right:0;
  margin:14px 13px;
}
.search_input {
  position:absolute;
  margin-left:13px;
  width:350px;
  height:44px;
  outline:0;
}
.settings{
  margin:0;
  margin-bottom:10px;
  max-height:31px;
}
.settings_sort-by-text {
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.01em;
  margin-right:9px;
}
.settings_sort-by-select {
  width:180px;
  color:#2E2E2E !important;
  text-transform:none;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.01em;
}
.settings_operations-button {
  margin-right:9px;
  font-size: 15px;
  line-height: 19px;
  text-transform: none;
  text-align: center;
  letter-spacing: -0.01em;
  color: #2E2E2E;
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
 .background_1{
   background-image:url('../assets/img/search-icon.svg');
   width:16px;
   height:16px;
   z-index:5;
 }

 


</style>
