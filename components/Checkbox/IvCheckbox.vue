<template>
    <div :class="[horizontal ? 'inline-block' : 'block', 'm-2' ]">
        <input 
            type="checkbox"
            :id="chkId" 
            :name="chkName" 
            :value="chkValue"
            class="
                border 
                border-blue-300
                bg-white
                rounded 
                hover:border
                hover:border-blue-400
                focus:border inline-block
                focus-within:border" 
        >
        <label
            class="text-sm mb-2 text-gray-500 inline-block" 
            :for="chkName"> {{ chkLabel }}</label>
    </div>
</template>

<script>
    export default {
        props:{
            horizontal:{
                default: true,
                type: Boolean
            },
            chkLabel:{
                default: "Checkbox Item",
                type: String
            },
            chkName:{
                default: "chkBox",
                type: String
            },
            chkId:{
                default: "chkId",
                type: String
            },
            chkValue:{
                default: "chkValue",
                type: String
            }
        },

        name:'iv-checkbox'
    }
</script>