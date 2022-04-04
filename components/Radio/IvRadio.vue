<template>
    <div :class="[horizontal ? 'inline-block' : 'block', 'm-2' ]">
        <input 
            type="radio"
            :id="rdoId" 
            :name="rdoName" 
            :value="rdoValue"
            class="border 
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
            :for="rdoName"> {{ rdoLabel }}</label>
    </div>
</template>

<script>
    export default {
        props:{
             horizontal:{
                default: true,
                type: Boolean
            },
            rdoLabel:{
                default: "Radio Item",
                type: String
            },
            rdoName:{
                default: "rdo",
                type: String
            },
            rdoId:{
                default: "rdoId",
                type: String
            },
            rdoValue:{
                default: "rdoValue",
                type: String
            }
        },

        name:'iv-radio'
    }
</script>