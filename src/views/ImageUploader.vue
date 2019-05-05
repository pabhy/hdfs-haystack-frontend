<template>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <h1 class="title">Image Upload</h1>
          <br><br>
          <upload v-model="avatar">
            <div slot="activator">
              <v-avatar size="300px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
                <span>Click here to post a photo!</span>
              </v-avatar>
              <v-avatar size="300px" v-ripple v-else class="mb-3">
                <img :src="avatar.imageURL" alt="avatar">
              </v-avatar>
            </div>
          </upload>
          <v-fade-transition>
            <div v-if="avatar && saved == false">
              <v-btn class="primary" @click="uploadImage" :loading="saving">Post</v-btn>
            </div>
          </v-fade-transition>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import Upload from '@/components/Upload.vue'
import axios from 'axios'

export default {
  name: 'ImageUploader',
  data () {
    return {
      avatar: null,
      saving: false,
      saved: false
    }
  },
  components: {
    Upload
  },
  watch: {
    avatar: {
      handler: function () {
        this.saved = false
      },
      deep: true
    }
  },
  methods: {
    uploadImage () {
      this.saving = true
      axios.post('/topic', this.avatar.formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        console.log('SUCCESS!!')
      }).catch(function () {
        console.log('FAILURE!!')
      })
    },
    savedAvatar () {
      this.saving = false
      this.saved = true
    }
  }
}
</script>
