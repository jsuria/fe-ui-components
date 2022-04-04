<template>
     <div class="m-2">
        <label 
            class="block text-sm mb-2 text-blue-500"
            :for="txtName">{{ txtLabel }}</label>
        <textarea
            :name="txtName"
            class="border 
                border-blue-300
                bg-white
                p-2
                rounded 
                hover:border
                hover:border-blue-400
                focus:border
                focus-within:border"
        ></textarea>
    </div>
</template>

<script>
    export default {
        name:'iv-textarea',
        props:{
            txtLabel:{
                default: "Textarea",
                type: String
            },
            txtName:{
                default: "inputTextarea",
                type: String 
            }
        }
    }
</script>