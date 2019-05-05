<template>
  <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center sm12 md6>
          <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex v-for="i in 6" :key="i" xs4>
                <img :src="images[i]" class="image" alt="lorem" width="100%" height="100%">
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      images: []
    }
  },
  async mounted () {
    await axios
      .get('/topic')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
