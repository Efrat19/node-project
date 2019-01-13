<template>
 <div id="navJade" class="inactive">
    <h1>Jade Skill Calculations</h1>
    <span>Jack of all Jade:</span><input type="number" min="0" max="50" v-model='joaj'></span>Max: 50<br/>
    {{joajCalc}}
  </div>
</template>

<script>

export default {
  name: 'Jade',


  data() {
    return {
      joaj: 0
    }
  },
    computed:{
         joajCalc:function() {
      if (this.joaj >= 51) this.joaj = 50;
      return this.joaj;
    }
  }


}
</script>