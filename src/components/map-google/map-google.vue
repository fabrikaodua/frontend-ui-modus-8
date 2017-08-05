<style src='./map-google.css' />

<script>
import {Map as GmapMap, Marker as GmapMarker, load} from 'vue2-google-maps';

load({
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places'
	})

export default {
    data () {
      return {
        center: {lat: 46.47377371, lng: 30.75932622},
        markers: [{
          position: {lat: 46.47377371, lng: 30.75932622}
        }]
      }
    },
	components: {
		GmapMap,
		GmapMarker
	}
}
</script>

<template>
  <gmap-map
	class= 'map-google'
    :center="center"
    :zoom="18"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>