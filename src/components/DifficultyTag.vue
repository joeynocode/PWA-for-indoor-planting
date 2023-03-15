<script setup>
    defineProps ({
        text: {
            type: String,
            required: true,
        }
    })

</script>

<script>
    export default {
        data: function() {
            return {
                textColor: ""
            }
        },
        methods: {
            getTextColor() {
                let text = this.text.toLowerCase();
                if (text === "easy") {
                    this.textColor = "success"
                } else if (text === "medium") {
                    this.textColor = "warning"
                } else {
                    this.textColor = "danger"
                }
            }
        }

    }
</script>


<template>
    {{getTextColor()}}
    <div>
        <h5><b-badge pill class="difficulty-button" :variant=textColor>
            {{ text }}
        </b-badge></h5>
    </div>
</template>

<style>
.difficulty-button {
    pointer-events: none;
}
</style>
