<template>
  <div class="container">
    
      <section class="p-4 m-4">
          <h1 class="text-3xl font-semibold mb-5">Sign-Up Form</h1>

          <iv-input
            inpLabel="Your Name"
          />

          <iv-input
            inpLabel="Home Address"
          />

          <iv-input
            inpLabel="Email"
          />

          <iv-dropdown
            :selectItems="['one','two','three']"
            selectLabel="Select List"
          />

          <iv-checkbox />
          <iv-checkbox />
          <iv-radio rdoName="rdo_item"/>
          <iv-radio rdoName="rdo_item"/>

          <iv-radio-group
            :rdogrpItems="[
                  { id:0, label:'Radio 1', name:'grp_radio', value:'radio value 1' },
                  { id:1, label:'Radio 2', name:'grp_radio', value:'radio value 2' },
              ]"
          />

          <iv-textarea
            txtLabel="Description"
          />
          
          <iv-button
            btnLabel="First Button"
            :btnIsDisabled=true
          />

          <iv-button
            btnLabel="Second  Button"
          />
      </section>

  </div>
</template>

<script>

export default {
  name: 'Components'
}
</script>
