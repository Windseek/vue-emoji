<template>
  <div class="emoji" id="emoji">
    <span v-for="item in emotions">
        <img :src="item.url" class="img" @click="change(item)">
    </span>
  </div>
</template>

<script>
import {emojidbs} from './emojidb'
  export default {
    name: 'emoji',
    data () {
      return {
        emotions: emojidbs,
        emotion: '',
        emotionsrc:""
      }
    },
    methods: {
      change(item){
        this.emotion=item.phrase;
        this.emotionsrc=item.url;
        this.$emit('change',{"emo":this.emotion,"emosrc":this.emotionsrc});
      }
    }
  }
</script>

<style scope>
#emoji{
  background:white;
  padding:10px;
  overflow-y:auto;
}
  #emoji .img{
    width:25px;
    height:25px;
  }
</style>
