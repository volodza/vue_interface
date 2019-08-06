<template>
  <v-layout d-block style="margin-top:15px">

    <v-layout style="height:30px" align-center>
      <span style="font-size: 22px;
                    line-height: 28px;
                    letter-spacing: -0.01em;"
      >
        {{ stack.date }}
      </span> 
      <span style="height:30px;width:30px;">
                  <v-img 
        style="margin:13px auto;transform: rotate(270deg)" 
        height="10"
        max-width="7" 
        src="../assets/img/arrow-down.svg"
        ></v-img>
      </span>


        <v-spacer></v-spacer>

      <div>
        <span>Добавить</span>

        <v-btn 
          style="background-color:#F2F2F2" 
          text 
          class="elevation-0 mx-2" 
          height="28" 
          max-width="28"  
          fab 
          color="#F2F2F2"
        >
          <v-img 
            height="10" 
            max-width="10" 
            src="../assets/img/icons/plus-icon.svg"
          ></v-img>
        </v-btn>
      </div>
        
    </v-layout>
    
    <v-divider class="mt-2"></v-divider>

    <Item
      v-for="(item,i) in stack.items"
      :key="i"
      :item="item"
    ></Item>
  
    <v-layout row align-center style="margin:-15px 0 0 0;height:30px;width:100%;">
      <v-divider></v-divider>
      
      <div style="margin:0 13px">
        <span style="font-size: 15px;
                    line-height: 19px;
                    letter-spacing: -0.01em;
                    color: #2E2E2E;
                    opacity: 0.6;"
        >
          Копировать операцию
        </span>

        <v-btn 
          style="background-color:#F2F2F2" 
          text 
          class="elevation-0 mx-1" 
          height="28" 
          max-width="28"  
          fab 
          color="#F2F2F2"
        >
          <v-img 
            height="16" 
            max-width="16" 
            src="../assets/img/icons/copy-icon.svg"
          ></v-img>
        </v-btn>
      </div>
        
      <v-divider></v-divider>
    </v-layout>
  </v-layout>

</template>

<script>
import Item from './Item'
export default {
  components:{
    Item
  },
  props:['stack']
  
}
</script>
