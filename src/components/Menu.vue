<template>
    <v-layout column class="menu">

      <v-layout d-flex class="menu_header">
        <h2>Все деньги</h2>
        <v-spacer></v-spacer>
        <SvgIcon width="32" height="32" :name="`logo`" />
      </v-layout> <!-- /.menu_header -->
     
      <div class="menu_accounts">

        <v-layout class="menu_accounts-top" column>
          <p class="balance">1 930 545<span>,29 ₽</span></p>
          <v-layout class="currency-balance">
            <img src="../assets/img/Vector.svg">
            <v-layout column>
              <p>1 345 511<span>,29 ₽</span></p>
              <p>8797<span >,29 $ (543 345,12 ₽)</span></p>
            </v-layout>
          </v-layout> <!-- /.currency-balance -->
        </v-layout> <!-- /.menu_accounts-top -->

        <v-divider class="mt-2" ></v-divider>

        <v-layout class="menu_accounts-bottom" column>
          <v-layout class="text">
            Тинькофф банк <v-spacer/> <span>541 356</span>,47 ₽
          </v-layout>
          <v-layout class="text">
            Тинькофф банк, $ <v-spacer/> <span>8 797</span>,29 $
          </v-layout>
          <v-layout class="text">
            Касса <v-spacer/> <span>677 099</span>,39 ₽
          </v-layout>
        </v-layout><!-- /.menu_accounts-bottom -->

      </div><!-- /.menu_accounts -->

      <div class="buttons-block">
        <v-btn 
          class="buttons-block_button"
          text 
          :key="index" 
          height="44"
          v-for="(item,index) in buttons" 
        >
          <span class="buttons-block_button-icon" >
            <SvgIcon height="16" width="16" :name="item.img" />
          </span>
        
          <span class="buttons-block_button-text">{{item.name}}</span>
        </v-btn>
      </div><!-- /.buttons-block -->

      <v-spacer></v-spacer>

      <div class="profile">
        <v-layout align-center row>
          <v-avatar size="40">
            <v-img src="../assets/img/image.png"></v-img>
          </v-avatar>

          <v-flex class="profile_content" column >
            <v-layout align-start style="margin-bottom:3px">
              <span class="profile_content-text">Андрей Никонов</span>
              <v-spacer></v-spacer>
              <v-btn fab small height='20' width="20" icon>
                <SvgIcon height='16' width='16' :name="`settings-icon`" />
              </v-btn>
            </v-layout>

            <v-layout align-end>
              <span class="profile_content-text opacity-5">Riverstar Digital</span>
              <v-spacer></v-spacer>
              <v-btn fab small height='20' width="20" icon>
                <SvgIcon height='16' width='16' :name="`help-icon`" />
              </v-btn>
            </v-layout>
          </v-flex><!-- /.profile_content -->

        </v-layout>
      </div>
    </v-layout>

</template>

<script>
import SvgIcon from './SvgIcon'
export default {
  components:{SvgIcon},
  data () {
    return {
      buttons: [
      {name:'Операции',img:'operation-icon'},
      {name:'Отчеты',img:'reports-icon'},
      {name:'Контрагенты',img:'contragents-icon'},
      {name:'Проекты',img:'work-icon'},
      {name:'Статьи расходов',img:'accounts-icon'},
      {name:'Сотрудники',img:'person-icon'}
    ]

    }
  }
}
</script>

<style lang="sass">
$grey: #2E2E2E60
$black: #2E2E2E
.menu
  background:#F5F5F5
  height:748px
  max-width:312px
  border-radius: 35px 0 0 35px
  z-index: 9998

  &_header
    height:43px
    padding:25px 19px 0 36px

    h2
      font-weight:450
      line-height: 35px
      letter-spacing: 0.01em
      font-size:22px
      padding-bottom:0

  &_accounts
    margin:0 36px
    background-color: #EEEEEE
    border-radius:18px
    height:176px
    width:240px

    &-top
      padding:10px 18px 0 18px

      .balance
        font-size:28px
        margin:0
        font-weight: 500
        line-height: 35px

        span
          opacity:.4
        
      .currency-balance

        img
          margin:0
          height:34px
          width:13px
          border-radius:0

        p
          font-size: 14px
          line-height: 18px
          margin:3px 5px 0

          span
            opacity:.4

    &-bottom
      padding:10px 18px

      .text
        margin:0
        font-size: 12px
        line-height: 15px
        letter-spacing: 0.01em
        margin-bottom:5px
        color:$grey

        span
          color:$black

  .buttons-block
    margin:26px 36px 

    &_button
      margin-bottom:12px
      border-radius:14px
      
      &-icon
        padding-top:5px
        padding-right:6px
      
      &-text
        font-size: 21px
        line-height: 26px
        letter-spacing: -0.01em
        text-transform: none

  .profile
    padding:20px 40px 
    height:86px
    width:312px
    background-color:#EEEEEE
    border-radius:35px 0 0 35px

    &_content
      margin-left:15px
      &-text
        font-size:15px
</style>
