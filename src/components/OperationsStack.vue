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
        <svg-filler
          :path="require('../assets/img/arrow-down.svg')"
          stroke='#E5E5E5'
          fill='none'
          stroke-width='2px'
          style="height:10px;width:7px;transform: rotate(270deg);margin:13px 10px;"
        ></svg-filler>
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

    <draggable 
      v-model="stack.items" 
      :options="firstOptions"  
      @start="drag=true" 
      @end="drag=false"
    >
      <Item
        class="dropitem"
        @mousedown.native="selectObj"
        v-for="(item,i) in stack.items"
        @click.native="selected = item"
        :key="i"
        :item="item"
        :selected="selected"
      ></Item>
    </draggable>


    <!-- <draggable 
      v-model="trashZone" 
      class="dropzone dropzone-1 trashzone" 
      :options="trashOptions"
      
    >
      <div slot="footer" class="footer">Trash</div>
      <v-img height="60" max-width="60" src="../assets/img/icons/delete.svg"></v-img>
    </draggable> -->
  
    <v-layout row align-center style="z-index:0;margin:-15px 0 0 0;height:30px;width:100%;">
      <v-divider></v-divider>
      
      <div class="droppable" style="margin:0 13px">
        <span style="font-size: 15px;
                    line-height: 19px;
                    letter-spacing: -0.01em;
                    color: #2E2E2E;
                    opacity: 0.6;"
        >
          Копировать операцию
        </span>

        <SvgIcon color='green' width="16" height="16"  :name="`copy-icon`" />
        <!-- <SvgIcon color='red' :name="`settings-icon`" /> -->

        <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon/copy-icon">
        <path id="Rectangle (Stroke)" d="M3 3L3 11H5.5H8V13H5.5H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H5.5H8C9.10457 1 10 1.89543 10 3H8H5.5H3Z" fill="#B2B2B2"/>
        <path id="Rectangle (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M13 5H8L8 13H13V5ZM8 3C6.89543 3 6 3.89543 6 5V13C6 14.1046 6.89543 15 8 15H13C14.1046 15 15 14.1046 15 13V5C15 3.89543 14.1046 3 13 3H8Z" fill="#B2B2B2"/>
        </g>
        </svg>
           <!-- <svg-filler :path="require('../assets/img/icons/copy-icon.svg')"></svg-filler>
           <svg :src="require('../assets/img/icons/copy-icon.svg')"></svg>  -->
           <!-- <svg-icon >
              <svg xmlns="http://www.w3.org/2000/svg">
                <use :xlink:href="require('../assets/img/icons/copy-icon.svg')" xmlns:xlink="http://www.w3.org/1999/xlink"/>
              </svg>
          </svg-icon>

          <!-- <simple-svg
            :filepath="require('../assets/img/icons/copy-icon.svg')"
            :fill="getFillColor"
            :stroke="getStrokeColor"
            :width="'400px'"
            :height="'400px'"
            :id="'custom-id'"
            @ready="onSvgReady()"
          /> -->

          <!-- <svg xmlns="http://www.w3.org/2000/svg">
            <use style="height:16px;width:16px;fill:black" :xlink:href="require('../assets/img/icons/calendar-icon.svg')" xmlns:xlink="http://www.w3.org/1999/xlink"/>
          </svg> -->

        <!-- <v-btn 
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
        </v-btn> -->
      </div>

      
        
      <v-divider></v-divider>
    </v-layout>
  </v-layout>

</template>

<script>
import Item from './Item'
import draggable from 'vuedraggable'
import SvgFiller from 'vue-svg-filler'
import SvgIcon from './SvgIcon'
import SimpleSVG from 'vue-simple-svg'
export default {
  components:{
    Item,
    draggable,
    SvgFiller,
    SvgIcon,
    SimpleSVG
  },
  props:['stack'],
  data (){
    return {
      currentGroup: null,
      selected:null,
      firstOptions: {
        group: 'firstgroup',
        draggable: '.dropitem'
      },
      // trashZone: [],
      //  trashOptions: {
      //   group: {
      //     name: 'trash',
      //     draggable: '.dropitem',
      //     put: () => true,
      //     pull: false
      //   }
      // },
      dragObject:null,
      dragging:false
    }
  },
  methods:{
    selectObj (e){
      this.dragObject = {};
      if (e.which != 1) return;

      this.dragging = true;
      var elem = e.target.closest('.draggable');

      if (!elem) return;
      this.dragObject.elem = elem;
      this.dragObject.downX = e.pageX;// запомнить координаты, с которых начат перенос объекта
      this.dragObject.downY = e.pageY;
    },
    moveObj (e) {
      // console.log('mouse move')
      if(!this.dragging) return;
      if (!this.dragObject.elem) {// элемент не зажат
        this.dragging = false
        return;
      } 

      if ( !this.dragObject.avatar ) { // если перенос не начат...
        // посчитать дистанцию, на которую переместился курсор мыши
        var moveX = e.pageX - this.dragObject.downX;
        var moveY = e.pageY - this.dragObject.downY;
        if ( Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ) {
          return; // ничего не делать, мышь не передвинулась достаточно далеко
        }

        this.dragObject.avatar = this.createAvatar(e); // захватить элемент
        if (!this.dragObject.avatar) {
          this.dragObject = {}; // аватар создать не удалось, отмена переноса
          return; // возможно, нельзя захватить за эту часть элемента
        }

        // аватар создан успешно
        // создать вспомогательные свойства shiftX/shiftY
        var coords = this.getCoords(this.dragObject.avatar);
        this.dragObject.shiftX = this.dragObject.downX - coords.left;
        this.dragObject.shiftY = this.dragObject.downY - coords.top;
        // console.log(dragObject,this.dragObject)
        this.startDrag(e); // отобразить начало переноса
      }

      // отобразить перенос объекта при каждом движении мыши
      // console.log(e.pageY,this.dragObject.shiftY)
      this.dragObject.avatar.style.left = e.pageX - this.dragObject.shiftX + 'px';
      this.dragObject.avatar.style.top = e.pageY - this.dragObject.shiftY  + 'px';
      console.log(this.dragObject.avatar.style.left)
      console.log(this.dragObject.avatar.style.top)
      return false;
    },
    createAvatar(e) {

      // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
      var avatar = this.dragObject.elem;
      var old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.style.position || '',
        left: avatar.style.left || '',
        top: avatar.style.top || '',
        zIndex: avatar.style.zIndex || ''
      };

        // функция для отмены переноса
        avatar.rollback = function() {
          old.parent.insertBefore(avatar, old.nextSibling);
          avatar.style.position = old.position;
          avatar.style.left = old.left;
          avatar.style.top = old.top;
          avatar.style.zIndex = old.zIndex
        };

      return avatar;
    },
    startDrag(e) {
      var avatar = this.dragObject.avatar;
      // this.$refs.body.appendChild(avatar)
      document.body.appendChild(avatar);
      avatar.style.zIndex = 9999;
      avatar.style.position = 'absolute';
    },
    mouseUp(e){
    // (1) обработать перенос, если он идет
      if (this.dragObject.avatar) {
        this.finishDrag(e);
      }

      this.dragObject = null;
    },
    finishDrag(e) {
    var dropElem = findDroppable(e);

    if (!dropElem) {
      this.dragObject = null
      self.onDragCancel(this.dragObject);
      } else {
        self.onDragEnd(this.dragObject, dropElem);
      }
    },
    findDroppable(event) {
      // спрячем переносимый элемент
      this.dragObject.avatar.hidden = true;

      // получить самый вложенный элемент под курсором мыши
      var elem = document.elementFromPoint(event.clientX, event.clientY);

      // показать переносимый элемент обратно
      this.dragObject.avatar.hidden = false;

      if (elem == null) {
        // такое возможно, если курсор мыши "вылетел" за границу окна
        return null;
      }

      return elem.closest('.droppable');
    },
    getCoords(elem) { 
      var box = elem.getBoundingClientRect();
      console.log(window.pageYOffset)
      console.log(box.top)
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
      };
    }    

  }
  
}
</script>

<style>
.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  fill: red;
}
/* .tree-node .dropitem{
  opacity: 1!important;
}
.dropzone-1{
  height:100px;
  width:100px;
}
  .trashzone .footer {
  display: block;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.trashzone .dropitem + .footer {

  background: red;
  color: white;
} */
</style>
