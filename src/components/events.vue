<template>
<div class="">
  <full-calendar class="" :events="fcEvents" locale="en"></full-calendar>
</div>
</template>

<script>
var demoEvents = [
	{
      title : 'Sunny Out of Office',
      start : '2020-04-01',
      end : '2020-04-06',
      YOUR_DATA : ['helllo'],
      cssClass  : ['career']
    }
]
export default {
 
    data () {
	return {
    /* eslint-disable no-mixed-spaces-and-tabs */
    fcEvents : demoEvents
    /* eslint-disable no-mixed-spaces-and-tabs */
	}
  },
  components : {
	'full-calendar': require('vue-fullcalendar')	
  },
  name: 'Events',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.career{
  background-color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
