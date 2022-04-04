<template>
    <div class="m-2 w-">
        <label 
            class="block text-sm mb-2 text-blue-500"
            :for="selectName">{{ selectLabel }}</label>
        <select
            class="border 
                    border-blue-300
                    bg-white
                    p-2
                    w-1/5
                    rounded 
                    hover:border
                    hover:border-blue-400
                    focus:border
                    focus-within:border"
        >
            <iv-dropdown-item
                v-for="(item,index) in selectItems"
                :key="index"
                :value="item"
                :optionValue="item"
                :optionText="item"
            />
        </select>
    </div>
    
</template>

<script>
    export default {
        props:{
            selectItems:{
                default:() => {
                    return []
                },
                type: Array
            },
            selectLabel:{
                default: "Dropdown List",
                type: String
            },
            selectName:{
                default: "dropdownList",
                type: String
            }
        },
        name:'iv-dropdown'
    }
</script>