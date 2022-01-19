<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <Loader v-if="isFetching" />
    <v-row v-else>
      <Photo
        v-for="photo in photos"
        v-bind:key="photo.id"
        v-bind:photo="photo"
        @openPhoto="openPhoto"
      />
    </v-row>
    <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import Loader from "@/components/Loader";
export default {
  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
    isFetching: true,
  }),
  components: { Photo, PhotoForm, PhotoDialog, Loader },
  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => {
          this.photos = response.data;
          this.isFetching = false;
        });
    },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped></style>
