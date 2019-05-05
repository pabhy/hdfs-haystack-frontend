<template>
  <div>
    <div @click="launchFilePicker()">
      <slot name="activator"></slot>
    </div>

    <input type="file" ref="file" :name="uploadFieldName" @change="onFileChange(
          $event.target.name, $event.target.files)" style="display:none">

    <v-dialog v-model="errorDialog">
      <v-card>
        <v-card-text class="subheading">{{ errorText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="errorDialog = false" flat>OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'UploadImage',
  data: () => ({
    errorDialog: null,
    errorText: '',
    uploadFieldName: 'image_file'
  }),
  props: { value: Object },
  methods: {
    launchFilePicker () {
      this.$refs.file.click()
    },
    onFileChange (fieldName, file) {
      let imageFile = file[0]

      if (file.length > 0) {
        if (!imageFile.type.match('image.*')) {
          this.errorDialog = true
          this.errorText = 'Please choose an image file'
        } else {
          let formData = new FormData()
          const imageURL = URL.createObjectURL(imageFile)
          const reader = new FileReader()
          reader.onloadend = function () {
            // console.log('RESULT', reader.result)
          }
          reader.readAsDataURL(imageFile)
          formData.append(fieldName, imageFile)
          formData.append('id', Date.now())
          formData.append('name', 'image_name')
          this.$emit('input', { formData, imageURL })
        }
      }
    }
  }
}
</script>
