<script setup>
import AlbumCard from "../components/AlbumCard.vue";
</script>

<script>
export default {
    data: function () {
        return {
            userId: "",
            recordInfo: "",
            recordKey: "",
            mockAlbum: this.albumData['123456']['record-2'],
            mockKey: 'record-2',
            addRecordShow: false,
            DelRecordShow: false,
        }
    },
    methods: {
        getUserId() {
            let path = this.$route.fullPath.split("/");
            this.userId = path[1];
        },
        showMask(val) {
            if(val == 'add' ||val == 'del')
            var newRecord = document.getElementById('editRecord');
            var addButton = document.getElementById('addButton');
            var deleteButton = document.getElementById('deleteButton');
            if (newRecord.style.display == 'inline') {
                newRecord.style.display = 'none';
            }
            else
                newRecord.style.display = 'inline';

            if (addButton.style.display == 'inline') {
                addButton.style.display = 'none';
            }
            else
                addButton.style.display = 'inline';

            if (deleteButton.style.display == 'inline') {
                deleteButton.style.display = 'none';
            }
            else
                deleteButton.style.display = 'inline';
        },
        addRecordShowCancel() {
            this.addRecordShow = !this.addRecordShow;
        },




    }

}
</script>

<template>
    <div class="">
        {{ getUserId() }}
        <b-container class="py-3 px-0 no-gutters">
            <b-row class=" px-1">
                <h2 class="d-block d-lg-none">My Album</h2>
            </b-row>
            <!-- index could be used as a router name? -->
            <b-col lg="4" md="6" sm="12" class="album-card px-1 no-gutters" v-for="(item, key) in albumData[userId]">
                <!-- <b-col lg="4" md="6" sm="12" class="album-card px-1 no-gutters"> -->
                <AlbumCard :recordInfo=item :recordKey=key />
                <!-- <AlbumCard :recordInfo=albumData[userId][record-1] :recordKey='record-2' /> -->

            </b-col>
            <b-col lg="4" md="6" sm="12" class="album-card px-1 no-gutters">

                <AlbumCard :recordInfo=mockAlbum :recordKey=mockKey id="editRecord" style="display: none" />
            </b-col>

        </b-container>
    </div>
    <!-- <b-button @click="showMask(); addRecordShow = !addRecordShow" id="addButton" style=" display: inline"
        variant="success">Add new record</b-button> -->
    <b-button @click="addRecordShow = !addRecordShow" id="addButton" style=" display: inline" variant="success">Add new
        record</b-button>
    <b-button @click="DelRecordShow = !DelRecordShow;" id="deleteButton" style="display: none" variant="danger">Delete this
        record</b-button>

    <!-- pop up modal for adding new data  -->
    <b-modal v-model="addRecordShow" hide-footer>
        <b-form-group label="Plant Name:">
            <b-form-input placeholder="Enter plant name"></b-form-input>
        </b-form-group>
        <b-form-group label="Date:">
            <b-form-input placeholder="Enter date" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Note:">
            <b-form-input placeholder="Enter note" required></b-form-input>
        </b-form-group>
        <b-form-group label="Mood:">
            <b-form-input placeholder="Enter an emoji 😎" required></b-form-input>
        </b-form-group>
        <b-form-group label="Photo:">
            <input type="file" >
        </b-form-group>
        <div>
            <b-button @click="showMask('add'); addRecordShow = !addRecordShow" id="addButton" class="me-2"
                style=" display: inline" variant="success">Done</b-button>
            <b-button @click=addRecordShowCancel>Cancel</b-button>


        </div>
    </b-modal>

    <b-modal v-model="DelRecordShow" hide-footer>
        <h2>Are you sure to delete?</h2>

        <div>
            <b-button @click="showMask('del'); DelRecordShow = !DelRecordShow" id="addButton" class="me-2"
                style=" display: inline" variant="danger">Delete</b-button>
            <b-button @click="DelRecordShow = false">Cancel</b-button>


        </div>
    </b-modal>
    <!-- <div id="editRecord" style="visibility: hidden"> test</div> -->
</template>

<style>
.album-card {
    display: inline-block;
}
</style>
