<template>
     <div>
        <label
            class="block text-sm mb-2 text-gray-500"
        >{{ chkgrpLabel }}</label>
        <iv-checkbox
            :horizontal=false
            v-for="(item, key) in chkgrpItems"
            :key="key"
            :chkLabel="item.label"
            :chkName="item.name"
            :chkId="item.id"
            :value="item.value"
        />
     </div>

</template>

<script>
    export default {
        props:{
            chkgrpItems:{
                default:() => {
                    return []
                },
                type: Array
            },
            chkgrpLabel:{
                default: "Checkbox Group",
                type: String
            },
        },
        name:'iv-checkbox-group'
    }
</script>