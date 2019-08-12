<template>
  <div id="app">
    Group 1
    <draggable 
      v-for="(zone, index) in firstZones" 
      v-model="firstZones[index]" 
      :class="['dropzone', `zone-${index}`]" 
      :key="`dropzone1-${index}`" 
      :options="firstOptions" 
      @start="start" 
      @end="end"
    >
      <div v-for="item in firstZones[index]" class="dropitem" :key="`dropitem-${item.id}`">
        {{ item.title }}
      </div>
    </draggable>

    Group 2
    <draggable v-for="(zone, index) in secondZones" v-model="secondZones[index]" :class="['dropzone', `zone-${index}`]" :key="`dropzone2-${index}`" :options="secondOptions" @start="start" @end="end">
      <div v-for="item in secondZones[index]" class="dropitem" :key="`dropitem-${item.id}`">
        {{ item.title }}
      </div>
    </draggable>

    <draggable v-model="trashZone" class="dropzone trashzone" :options="trashOptions">
      <div slot="footer" class="footer">Trash</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: "App",
  components: {
    draggable
  },
  data () {
    return {
      firstZones: [
        [
          {
            id: 1,
            title: 'Dropitem 1'
          },
          {
            id: 2,
            title: 'Dropitem 2'
          }
        ],
        []
      ],

      secondZones: [
        [
          {
            id: 9,
            title: 'Dropitem 9'
          },
          {
            id: 21,
            title: 'Dropitem 21'
          }
        ],
        []
      ],

      trashZone: [],

      currentGroup: null,

      firstOptions: {
        group: 'firstgroup',
        draggable: '.dropitem'
      },

      secondOptions: {
        group: 'secondgroup',
        draggable: '.dropitem'
      },

      trashOptions: {
        group: {
          name: 'trash',
          draggable: '.dropitem',
          put: () => true,
          pull: false
        }
      }
    }
  },

  methods: {
    start (event) {
      console.log('start', event);
    },

    end (event) {
      console.log('end', event);
    }
  }
};
</script>

<style>
.dropzone {
  /* border: 1px dotted red;
  margin: .5rem;
  min-height: 25vh;
  width: 100%; */
  bottom:30px;
  left:45%;
  position: fixed;
  z-index: 9999;
}


.trashzone .dropitem {
  display: none;
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
}
</style>
