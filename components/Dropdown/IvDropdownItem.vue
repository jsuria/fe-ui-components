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
                default: "Dropdown List",
                type: String
            },
            optionValue:{
                default: "dropdownList",
                type: String
            }
        },
        name:'iv-dropdown-item',
    }
</script>