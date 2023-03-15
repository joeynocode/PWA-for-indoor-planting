<script>
    export default {
        data: function() {
            return {
                selectedDiff: [], // Must be an array reference!
                selectedType: [],
                options: [
                    { text: 'Easy', value: 'easy' },
                    { text: 'Medium', value: 'medium' },
                    { text: 'Hard', value: 'hard' }
                ],
                options1: [
                    { text: 'Fruits', value: 'fruits' },
                    { text: 'Vegetables', value: 'vegetables' },
                    { text: 'Herbs', value: 'herbs' }
                ],
            }
        },
        methods:{
            // set filter
            setDifficulty() {
                this.$emit("filter-difficulty", this.selectedDiff);
            },
            setType() {
                this.$emit("filter-type", this.selectedType);
        },

    }
}
</script>

<template>
    <div>
        <b-form-group label="By Difficulty Level: ">
            <b-form-checkbox-group
                v-model="selectedDiff"
                @change="setDifficulty"
                id="filter-difficulty"
                :options="options"
                name="filter-difficulty"
            />
        </b-form-group>
        <b-form-group label="By Type: ">
            <b-form-checkbox-group
                v-model="selectedType"
                @change="setType"
                id="filter-type"
                :options="options1"
                name="filter-type"
            />
        </b-form-group>
    </div>
</template>
