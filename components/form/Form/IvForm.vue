<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        props:{
            name:{
                default:'',
                type: String
            },
            
            cbSubmit:{
                default:() => {},
                type: Function
            },
            
            cbReset:{
                default:() => {},
                type: Function
            },
            
        },
        name:'iv-form',

        methods:{
            onSubmit(){
                this.cbSubmit()
            },

            onReset(){
                this.cbReset()
            }
        }
    }
</script>