<template>
    <button 
            class="border border-blue-200
                 bg-blue-100 
                   px-5 
                   py-2 
                   text-sm
                 text-blue-700 
                   rounded 
                   m-2 "
            :class="btnIsDisabled ? 'cursor-not-allowed bg-gray-200 text-gray-300': 'hover:bg-blue-500 hover:text-white'"
            :disabled="btnIsDisabled ? 'disabled' : false"
            >
        {{ btnLabel }}
    </button>
</template>

<script>
    export default {
        name:'iv-button',
        props:{
            btnLabel:{
                default:"A Button",
                type: String
            },
            btnIsDisabled:{
                default:false,
                type: Boolean
            },
        },

      /*  computed:{
            setDisabledStyle(){
                return this.btnIsDark ? "" : ""
            }
        } */
    }
</script>