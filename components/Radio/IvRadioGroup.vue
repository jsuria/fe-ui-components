<template>
     <div>
         <label
            class="block text-sm mb-2 text-blue-500"
        >{{ rdogrpLabel }}</label>
        <iv-radio
            :horizontal=false
            v-for="(item, key) in rdogrpItems"
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
            rdogrpItems:{
                default:() => {
                    return []
                },
                type: Array
            },
            rdogrpLabel:{
                default: "Radio Group",
                type: String
            },
        },
        name:'iv-radio-group'
    }
</script>