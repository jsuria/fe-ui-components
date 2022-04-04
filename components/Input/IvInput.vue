<template>
    <div class="m-2">
        <label 
            class="block text-sm mb-2 text-blue-500"
            :for="inpName">{{ inpLabel }}</label>
        <input
            :name="inpName" 
            class="border 
                border-blue-300
                bg-white
                p-2
                rounded 
                hover:border
                hover:border-blue-400
                focus:border
                focus-within:border" 
                />
    </div>
</template>

<script>
    export default {
        name:'iv-input',
        props:{
            inpLabel:{
                default: "Text Input",
                type: String
            },
            inpName:{
                default: "inputTextfield",
                type: String
            }
        }
    }
</script>