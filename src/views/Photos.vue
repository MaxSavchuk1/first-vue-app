<template>
  <v-container>
    <photo-form @addPhoto="addPhoto" />
    <loader v-if="isFetching" />
    <v-row v-else>
      <photo v-for="photo in photos" v-bind:key="photo.id" v-bind:photo="photo" @openPhoto="openPhoto" />
    </v-row>
    <photo-dialog :photo="currentPhoto" v-model="dialogVisible" />
  </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo'
import PhotoForm from '@/components/photo/PhotoForm'
import PhotoDialog from '@/components/photo/PhotoDialog'
import Loader from '@/components/Loader'
export default {
  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
    isFetching: true
  }),
  components: { Photo, PhotoForm, PhotoDialog, Loader },
  mounted () {
    this.fetchPhotos()
  },
  methods: {
    async fetchPhotos () {
      try {
        const { data } = await this.$api.json.getPhotos()
        this.photos = data
        this.isFetching = false
      } catch (e) {
        console.log(e)
      }
    },
    addPhoto (photo) {
      this.photos.push(photo)
    },
    openPhoto (photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped></style>
