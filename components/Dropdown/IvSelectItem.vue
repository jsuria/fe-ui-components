<template>
    <option
        :value="optionValue"
    >
        {{ optionValue }}
    </option>
</template>

<script>
    export default {
        props:{
            optionText:{
                default: "Select List",
                type: String
            },
            optionValue:{
                default: "selectList",
                type: String
            }
        },
        name:'iv-select-item',
    }
</script>